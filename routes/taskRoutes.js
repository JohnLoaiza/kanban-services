const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const mongoose = require('mongoose');
const DbConnect = require('../bd/dbConnect');
const TaskController = require('../controllers/taskController');
const { ObjectId } = mongoose.Types;


// Obtener una tarea específica
router.get('/:kanbanId/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;

    const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }
    console.log('kanban es ');
    console.log(kanban);


    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.id === parseInt(taskId))
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.id === parseInt(taskId));
    res.status(200).json({ success: true, task });
  });
});


// Crear una nueva tarea
router.post('/:kanbanId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
   
    const { kanbanId } = req.params;
    const {baseId, data} = req.body;
    const {tags = [], info = '', schedule} = data

    console.log('va a agregar tarea');
    console.log('body es ', req.body);
    
    const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const columnToUpdate = kanban.columns[0];
    console.log('columna es', columnToUpdate);
    
    const baseTask = columnToUpdate.adminTasks.find((t) => t.id === baseId)
    console.log('base task is', baseTask);
    
    const newTask = structuredClone(baseTask.toObject())
    newTask.id = Date.now() * parseInt(Math.random() * 9000000 + 1000000)
    newTask.baseId = baseTask.id
    newTask.tags = tags
    newTask.info = info

    schedule ? newTask.schedule = schedule : () => {}
    
    const newTaskCreate = columnToUpdate.tasks.create(newTask); // Crear la tarea como subdocumento
    columnToUpdate.tasks.push(newTaskCreate); // Añadir la tarea a la columna correspondiente

    await kanban.save();

    res.status(201).json({
      message: 'Tarea creada exitosamente',
      task: newTask,
    });
    const notificationData = {
      kanbanId: parseInt(kanbanId),
      columnId: columnToUpdate.id,
      task: newTask,
      message: 'Se ha insertado una nueva tarea',
    };
    return {
      eventName: 'newLead',
      data: notificationData
    }
  });
});

// Actualizar una tarea específica
router.put('/:kanbanId/:taskId', async (req, res) => {
  console.log('entra a actualizar');
  
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;
    const updatedTaskData = req.body;

    const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.id === parseInt(taskId))
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.id === parseInt(taskId));
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Actualizar solo las propiedades especificadas
    Object.assign(task, updatedTaskData);

    await kanban.save();
    const notificationData = {
      kanbanId: parseInt(kanbanId),
      columnId: column.id,
      task: updatedTaskData,
      message: 'Se ha insertado una nueva tarea',
    };
    res.status(200).json({
      message: 'Tarea actualizada exitosamente',
      task,
    });

    return {
      eventName: 'updateLead',
      data: notificationData
    }
  });
});



// Eliminar una tarea específica
router.delete('/:kanbanId/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;

    const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }
    console.log('kanban es ');
    console.log(kanban);
    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.id === parseInt(taskId))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada 1' });
    }

    const taskIndex = column.tasks.findIndex((task) => task.id === parseInt(taskId));
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarea no encontrada 2' });
    }

  

    column.tasks.splice(taskIndex, 1);
    await kanban.save();

    const notificationData = {
      kanbanId: parseInt(kanbanId),
      columnId: column.id,
      taskId: taskId,
      message: 'Se ha eliminado la tarea ' + taskId,
    };

    res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    return {
      eventName: 'deleteLead',
      data: notificationData
    }
  });
});

// Avanzar en estado una tarea específica
router.post('/:kanbanId/:taskId', async (req, res) => {
  console.log('Se quiere avanzar tarea ');

  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;
    console.log(kanbanId);
    console.log(taskId);


    const movedTask = await TaskController.taskAdvance(parseInt(kanbanId), parseInt(taskId))
    const notificationData = {
      kanbanId: parseInt(kanbanId),
      task: movedTask.task,
      fromColumnIndex: movedTask.fromColumnIndex,
      toColumnIndex: movedTask.toColumnIndex,
      message: 'Tarea avanzada a siguiente estado correctamente',
    };
    res.status(200).json({ message: 'Tarea avanzada a siguiente estado correctamente', data: notificationData });


    return {
      eventName: 'taskAdvance',
      data: notificationData
    }
  });
});


module.exports = router;
