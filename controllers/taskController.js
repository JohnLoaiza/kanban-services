import { Kanban, Task } from '../models/kanban.js';



class TaskController {
  static taskAdvance = async (taskId) => {
    try {
      const movedTaskDB = await Task.findOne({ id: taskId })
      const kanbanDB = await Kanban.findOne({ id: parseInt(movedTaskDB.kanbanId) })
      console.log('movedTask', movedTaskDB);
      console.log('kanbanDB', kanbanDB);

      
      // Obtener el Kanban completo
      const kanban = kanbanDB.toObject();
      if (!kanban) throw new Error('Kanban no encontrado');

      // Buscar la columna actual y la tarea
      const fromColumnIndex = kanban.columns.findIndex(col => col.id === movedTaskDB.columnId);
      console.log('fromcolumn Index', fromColumnIndex, kanban.columns);
      
      if (fromColumnIndex === -1) throw new Error('Tarea no encontrada en ninguna columna');

      const fromColumn = kanban.columns[fromColumnIndex];
      // const movedTaskIndex = fromColumn.tasks.findIndex(task => task.id === taskId);

      const movedTask = movedTaskDB.toObject();


      // Determinar la columna de destino
      const toColumnIndex = fromColumnIndex + 1;
      const toColumn = kanban.columns[toColumnIndex];
      if (!toColumn) throw new Error('No existe una columna siguiente');

      // Validaciones avanzadas
      const advancedCheckResult = this.advancedCheck(movedTask, kanban, fromColumnIndex);
      console.log('advance check es');
      console.log(advancedCheckResult);


      if (advancedCheckResult.length > 0 || fromColumnIndex > toColumnIndex) {
        // Actualizar los detalles de la tarea si retrocede
        if (fromColumnIndex > toColumnIndex) {
          console.log('Va aretroceder tarea');

          const historyEntry = movedTask.history.find(h => h.columnId === toColumn.id);
          if (!historyEntry) throw new Error('No hay historial para retroceder esta tarea');

          const { taskVersion } = historyEntry;
          Object.assign(movedTask, structuredClone(taskVersion));
          console.log('retrocede');
        } else {
          console.log('va a avanzar tarea');

          // Verificar si es necesario agregar al historial
          const historyExists = movedTask.history.some(h => h.columnId === fromColumn.id);
          if (!historyExists) {
            console.log('aun no existe historia para este estado');
            console.log('moved task es');
            console.log(movedTask);


            movedTask.history.push({
              columnId: fromColumn.id,
              taskVersion: structuredClone(movedTask),
            });
            console.log('lo agrega');

          } else {
            console.log('ya existe historial para este estado');

            const historyIndex = movedTask.history.findIndex(h => h.columnId === fromColumn.id);
            movedTask.history[historyIndex].taskVersion = structuredClone(movedTask);
            console.log('lo toma');

          }

          // Verificar tareas avanzadas
          const advanceFilter = advancedCheckResult.map(nextTaskId =>
            kanban.columns[fromColumnIndex + 1].adminTasks.find(t => t.id === nextTaskId)
          ).filter(Boolean);
          console.log('filtro de avance es');
          console.log(advanceFilter);


          if (advanceFilter.length === 1) {
            const schema = advanceFilter[0];
            const omitProperties = ['id', 'movements', 'history', 'baseId', 'initDate', 'tags']; // Propiedades que no quieres clonar

            // Primero, clonar la tarea versión
            let taskVersionClone = structuredClone(schema);
            movedTask.baseId = structuredClone(taskVersionClone.id)
            // Luego, eliminar las propiedades no deseadas
            omitProperties.forEach(prop => {
              delete taskVersionClone[prop]; // Elimina la propiedad de la clonación
            });
            console.log();
            ('va a copiar nueva forma')
            Object.assign(movedTask, structuredClone(taskVersionClone));

            console.log('copia')
            console.log('nueva tarea es');
            console.log(movedTask);

          } else if (advanceFilter.length > 1) {
            throw new Error('Se requiere intervención manual para avanzar con múltiples tareas posibles');
          }
        }
      } else {
        throw new Error('La tarea no cumple con los requisitos para avanzar');
      }

      // Mover la tarea entre columnas
      // fromColumn.tasks.splice(movedTaskIndex, 1);
      // toColumn.tasks.push(movedTask);

      // Buscar y eliminar la tarea directamente por columnId
      movedTask.columnId = toColumn.id
      Object.assign(movedTaskDB, movedTask);
      await movedTaskDB.save();
      // Agregar movimiento a la tarea
      movedTask.movements.push({
        user: 'API_USER',
        desp: `Avanzada a la columna ${toColumn.title}`,
      });

      // Guardar los cambios
      const updatedKanban = await Kanban.findOneAndUpdate(
        { id: parseInt(kanban.id) },
        kanban,
        { new: true }
      );
      return { task: movedTask, fromColumnIndex: fromColumnIndex, toColumnIndex: toColumnIndex };

    } catch (error) {
      throw new Error(`Error al mover la tarea: ${error.message}`);
    }
  };

  static removeIds(obj, seen = new WeakSet()) {
    // Caso base: verificar si ya procesamos este objeto
    if (seen.has(obj)) return obj;

    // Verificar si es un objeto o un array
    if (Array.isArray(obj)) {
      return obj.map(item => TaskController.removeIds(item, seen)); // Recursión para arrays
    } else if (typeof obj === 'object' && obj !== null) {
      seen.add(obj); // Marcar este objeto como procesado
      const newObj = {};
      for (const key in obj) {
        if (key !== '_id') {
          newObj[key] = TaskController.removeIds(obj[key], seen); // Recursión para objetos anidados
        }
      }
      return newObj;
    }

    // Si no es un objeto o array, devolver tal cual
    return obj;
  }




  static advancedCheck = (task = KanvanTask(), kanban, columnIndex = 0) => {
    var finishedGroup = []
    try {
      const taskBase = kanban.columns[columnIndex].adminTasks.filter((t) => t.id === task.baseId)[0]

      taskBase.requerimentGroups.forEach(requerimentGroup => {
        var internalFlag = true;
        requerimentGroup.requeriments.forEach(requerimentId => {
          task.requeriments.filter((r) => r.id === requerimentId)[0].finished ? () => { } : internalFlag = false
        });
        if (internalFlag && requerimentGroup.nextTaskId != undefined && requerimentGroup.nextTaskId != 0) finishedGroup.push(requerimentGroup.nextTaskId)
      });
      return finishedGroup
    } catch (error) {
      return []
    }

  }

}

module.exports = TaskController;