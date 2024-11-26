const Kanban = require('../models/kanban');



class TaskController {
     moveTask = async (kanbanId, taskId) => {
        try {
          // Obtener el Kanban completo
          const kanban = await Kanban.findById(kanbanId);
          if (!kanban) throw new Error('Kanban no encontrado');
      
          // Buscar la columna actual y la tarea
          const fromColumnIndex = kanban.columns.findIndex(col => col.tasks.some(task => task.id === taskId));
          if (fromColumnIndex === -1) throw new Error('Tarea no encontrada en ninguna columna');
      
          const fromColumn = kanban.columns[fromColumnIndex];
          const movedTaskIndex = fromColumn.tasks.findIndex(task => task.id === taskId);
          const movedTask = fromColumn.tasks[movedTaskIndex];
      
          // Determinar la columna de destino
          const toColumnIndex = fromColumnIndex + 1;
          const toColumn = kanban.columns[toColumnIndex];
          if (!toColumn) throw new Error('No existe una columna siguiente');
      
          // Validaciones avanzadas
          const advancedCheckResult = this.advancedCheck(movedTask, kanban, fromColumnIndex);
          if (advancedCheckResult.length > 0 || fromColumnIndex > toColumnIndex) {
            // Actualizar los detalles de la tarea si retrocede
            if (fromColumnIndex > toColumnIndex) {
              const historyEntry = movedTask.history.find(h => h.columnId === toColumn.id);
              if (!historyEntry) throw new Error('No hay historial para retroceder esta tarea');
      
              const { taskVersion } = historyEntry;
              Object.assign(movedTask, structuredClone(taskVersion));
            } else {
              // Verificar si es necesario agregar al historial
              const historyExists = movedTask.history.some(h => h.columnId === fromColumn.id);
              if (!historyExists) {
                movedTask.history.push({
                  columnId: fromColumn.id,
                  taskVersion: structuredClone(movedTask),
                });
              } else {
                const historyIndex = movedTask.history.findIndex(h => h.columnId === fromColumn.id);
                movedTask.history[historyIndex].taskVersion = structuredClone(movedTask);
              }
      
              // Verificar tareas avanzadas
              const advanceFilter = advancedCheckResult.map(nextTaskId =>
                kanban.columns[fromColumnIndex + 1].adminTasks.find(t => t.id === nextTaskId)
              ).filter(Boolean);
      
              if (advanceFilter.length === 1) {
                const schema = advanceFilter[0];
                Object.assign(movedTask, structuredClone(schema));
              } else if (advanceFilter.length > 1) {
                throw new Error('Se requiere intervención manual para avanzar con múltiples tareas posibles');
              }
            }
          } else {
            throw new Error('La tarea no cumple con los requisitos para avanzar');
          }
      
          // Mover la tarea entre columnas
          fromColumn.tasks.splice(movedTaskIndex, 1);
          toColumn.tasks.push(movedTask);
      
          // Agregar movimiento a la tarea
          movedTask.movements.push({
            user: 'API_USER',
            desp: `Avanzada a la columna ${toColumn.title}`,
          });
      
          // Guardar los cambios
          await kanban.save();
          return kanban;
      
        } catch (error) {
          throw new Error(`Error al mover la tarea: ${error.message}`);
        }
      };


      advancedCheck = (task = KanvanTask(),kanban , columnIndex = 0) => {
        var finishedGroup = []
        try {
            const taskBase = kanban.columns[columnIndex].adminTasks.filter((t) => t.id === task.baseId)[0]
            
            taskBase.requerimentGroups.forEach(requerimentGroup => {
                var internalFlag = true;
                requerimentGroup.requeriments.forEach(requerimentId => {
                    task.requeriments.filter((r) => r.id === requerimentId)[0].finished ? () => {} : internalFlag =  false
                });
                if (internalFlag && requerimentGroup.nextTaskId != undefined && requerimentGroup.nextTaskId != 0) finishedGroup.push(requerimentGroup.nextTaskId)
            });
        return finishedGroup
        } catch (error) {
            return []
        }
       
    }
      
}