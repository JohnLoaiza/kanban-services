const express = require('express');
const router = express.Router();
const { Kanban, Task } = require('../models/kanban');
const DbConnect = require('../bd/dbConnect');
const TaskController = require('../controllers/taskController');



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
router.get('/:kanbanId/:taskId', async (req, res) => {
  return DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;

    const task = await Task.findOne({
      id: parseInt(taskId),
      kanbanId: parseInt(kanbanId),
    });

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
    const { baseId, data } = req.body;
    const { tags = [], info = '', schedule } = data;

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
      schedule: schedule || baseTask.schedule,
    };

    const createdTask = await Task.create(newTask);

    res.status(201).json({
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

    const movedTask = await TaskController.taskAdvance(
      parseInt(taskId)
    );

    if (!movedTask) {
      return res.status(404).json({ message: 'No se pudo avanzar la tarea' });
    }
const kanbanId = movedTask.task.kanbanId;
    res.status(200).json({
      message: 'Tarea avanzada exitosamente',
      task: movedTask.task,
      fromColumnIndex: movedTask.fromColumnIndex,
      toColumnIndex: movedTask.toColumnIndex,
    });
    const notificationData = {
      kanbanId: parseInt(kanbanId),
      task: movedTask.task,
      fromColumnIndex: movedTask.fromColumnIndex,
      toColumnIndex: movedTask.toColumnIndex,
      message: 'Tarea avanzada a siguiente estado correctamente',
    };

    return {
      eventName: 'taskAdvance',
      data: notificationData
    }
  });
});

module.exports = router;
