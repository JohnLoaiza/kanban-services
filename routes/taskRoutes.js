const express = require('express');
const { Kanban, Task } = require('../models/kanban');
const DbConnect = require('../bd/dbConnect');
const TaskController = require('../controllers/taskController');
const axios = require('axios');
const { qrApiDecode, qrApiEnconde } = require('../configs');
const router = express.Router();



// Obtener todas las tareas
router.get('/', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  });
});

// Vaciar la colección de tareas
router.delete('/empty', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    await Task.deleteMany({}); // Esto elimina todos los documentos de la colección
    res.status(200).json({ message: 'Colección de tareas vaciada con éxito' });
  });
});


// Obtener una tarea específica
router.get('/:taskId', async (req, res) => {
  return DbConnect.bdProcess(res, async () => {
    const { taskId } = req.params;

    const task = await TaskController.getTask(taskId)

    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    return res.status(200).json({ success: true, task });
  });
});

// Crear una nueva tarea
router.post('/:kanbanId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId } = req.params;
    const { baseId, data, requiredData } = req.body;
    const { tags = [], info = '', schedule, priority = null } = data;

    const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const columnToUpdate = kanban.columns[0]; // Usando la primera columna por defecto
    const baseTask = columnToUpdate.adminTasks.find((t) => t.id === baseId);
    if (!baseTask) {
      return res.status(404).json({ message: 'Tarea base no encontrada' });
    }
console.log('BASE TASK ES ', baseTask);

    const newTask = {
      ...baseTask.toObject(),
      id: Date.now() * parseInt(Math.random() * 9000000 + 1000000),
      kanbanId: parseInt(kanbanId),
      columnId: columnToUpdate.id, // Asignar el columnId directamente
      baseId: baseTask.id,
      tags,
      info,
      priority: priority ?? baseTask.priority,
      schedule: schedule ?? baseTask.schedule,
      requiredData: requiredData
    };
    var createdTask = null
    createdTask = await Task.create(newTask);

    if(createdTask != null) {
      res.status(201).json({
        success: true,
        message: 'Tarea creada exitosamente',
        task: createdTask,
      });
  
      return {
        eventName: 'newLead',
        data: {
          kanbanId: parseInt(kanbanId),
          columnId: columnToUpdate.id,
          task: newTask,
          message: 'Se ha insertado una nueva tarea',
        },
      };
    } else {
      res.status(500).json({
        success: false,
        message: 'No se pudo insertar tarea en la bd',
      });
    }

    
  });
});

// Actualizar una tarea específica
router.put('/:kanbanId/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;
    const updatedTaskData = req.body;

    // Buscar la tarea directamente por columnId
    const task = await Task.findOne({
      id: parseInt(taskId),
      kanbanId: parseInt(kanbanId),
    });
    
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Actualizar la tarea
    Object.assign(task, updatedTaskData);
    await task.save();

    res.status(200).json({
      message: 'Tarea actualizada exitosamente',
      task,
    });

    return {
      eventName: 'updateLead',
      data: {
        kanbanId: parseInt(kanbanId),
        columnId: task.columnId,
        task: updatedTaskData,
        message: 'Se ha actualizado una tarea',
      },
    };
  });
});

// Eliminar una tarea específica
router.delete('/:kanbanId/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;

    // Buscar y eliminar la tarea directamente por columnId
    const task = await Task.findOneAndDelete({
      id: parseInt(taskId),
      kanbanId: parseInt(kanbanId),
    });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.status(200).json({
      message: 'Tarea eliminada exitosamente',
    });
    const notificationData = {
      kanbanId: parseInt(kanbanId),
      columnId: task.columnId,
      taskId: taskId,
      message: 'Se ha eliminado la tarea ' + taskId,
    };
    return {
      eventName: 'deleteLead',
      data: notificationData
    }
  });
});

// Avanzar en estado una tarea específica
router.post('/advance/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const {  taskId } = req.params;
    const { selectNewFormId = null } = req.body;
console.log('advance');
console.log(taskId);
console.log(selectNewFormId);


    const movedTask = await TaskController.taskAdvance(
      parseInt(taskId),
      false,
      selectNewFormId
    );

    if (movedTask == null) {
      return res.status(404).json({ message: 'No se pudo avanzar la tarea' });
    } 

    if (movedTask.success){
      if (movedTask.multiple) {
        res.status(200).json({
          success: true,
          multiple: movedTask.multiple,
          message: movedTask.message,
          tasks: movedTask.tasks,
        });
        const notificationData = {
          success: true,
          multiple: movedTask.multiple,
          message: movedTask.message,
          tasks: movedTask.tasks,
          currentTaskId: movedTask.currentTaskId
        };
        return {
          eventName: 'taskAdvance',
          data: notificationData
        }
      } else {
        const kanbanId = movedTask.task.kanbanId;
        res.status(200).json({
          success: true,
          message: 'Tarea avanzada exitosamente',
          multiple: movedTask.multiple,
          task: movedTask.task,
          fromColumnIndex: movedTask.fromColumnIndex,
          toColumnIndex: movedTask.toColumnIndex,
        });
        const notificationData = {
          kanbanId: parseInt(kanbanId),
          task: movedTask.task,
          multiple: movedTask.multiple,
          fromColumnIndex: movedTask.fromColumnIndex,
          toColumnIndex: movedTask.toColumnIndex,
          message: 'Tarea avanzada a siguiente estado correctamente',
        };
    
        return {
          eventName: 'taskAdvance',
          data: notificationData
        }
      }
      
    }

  });
});

// Retroceder una tarea específica
router.post('/back/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const {  taskId } = req.params;
console.log('va a retroceder la tarea ' + taskId);

    const movedTask = await TaskController.taskAdvance(
      parseInt(taskId),
      true
    );

    if (!movedTask) {
      return res.status(404).json({ message: 'No se pudo retroceder la tarea' });
    }
const kanbanId = movedTask.task.kanbanId;
    res.status(200).json({
      message: 'Tarea retrocedida exitosamente',
      task: movedTask.task,
      fromColumnIndex: movedTask.fromColumnIndex,
      toColumnIndex: movedTask.toColumnIndex,
    });
    const notificationData = {
      kanbanId: parseInt(kanbanId),
      task: movedTask.task,
      fromColumnIndex: movedTask.fromColumnIndex,
      toColumnIndex: movedTask.toColumnIndex,
      message: 'Tarea retrocedida correctamente',
    };

    return {
      eventName: 'taskAdvance',
      data: notificationData
    }
  });
});


// Resolver una tarea con determinado rol
router.get('/solve/:taskId/:rol', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { taskId, rol } = req.params;

  
    const fullDomain = `https://${req.headers.host}`;

    const response = await axios.post(qrApiEnconde, {
      userEmail: 'kevincastrillon31@gmail.com',
      type: 'widget',
      lifeTime: 600,
      webhook: `${fullDomain}/api/webhook/`,
      widgetId: 1000,
      marketPlace: {
        taskId: taskId,
        rol: rol,
      },
    });

    const data = response.data;

    res.status(201).json({
      success: true,
      message: 'Ruta encontrada',
      url: `https://opordanban.vercel.app/token/${data.encodeQR}`,
    });
  });
});

module.exports = router;
