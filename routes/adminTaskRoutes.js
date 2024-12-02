const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const DbConnect = require('../bd/dbConnect');


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
      col.adminTasks.some((adminTask) => adminTask.id === parseInt(taskId))
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.adminTasks.find((adminTask) => adminTask.id === parseInt(taskId));
    res.status(200).json({ success: true, task });
  });
});


// Crear una nueva tarea
router.post('/:kanbanId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId } = req.params;
    const task = req.body;

    const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const columnToUpdate = kanban.columns[0];
    const newTask = columnToUpdate.adminTasks.create(task); // Crear la tarea como subdocumento
    columnToUpdate.adminTasks.push(newTask); // Añadir la tarea a la columna correspondiente

    await kanban.save();

    res.status(201).json({
      message: 'Tarea creada exitosamente',
      task: newTask,
    });
    const notificationData = {
      kanbanId: parseInt(kanbanId),
      columnId: columnToUpdate._id,
      adminTask: newTask,
      message: 'Se ha insertado una nueva tarea',
    };
    return {
      eventName: 'newAdminLead',
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
      col.adminTasks.some((adminTask) => adminTask.id === parseInt(taskId))
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.adminTasks.find((adminTask) => adminTask.id === parseInt(taskId));
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Actualizar solo las propiedades especificadas
    Object.assign(task, updatedTaskData);

    await kanban.save();
    const notificationData = {
      kanbanId: parseInt(kanbanId),
      columnId: column.id,
      adminTask: updatedTaskData,
      message: 'Se ha insertado una nueva tarea',
    };
    res.status(200).json({
      message: 'Tarea actualizada exitosamente',
      data: notificationData,
    });
    
    return {
      eventName: 'updateAdminLead',
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
      col.adminTasks.some((adminTask) => adminTask.id === parseInt(taskId))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada 1' });
    }

    const taskIndex = column.adminTasks.findIndex((adminTask) => adminTask.id === parseInt(taskId));
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarea no encontrada 2' });
    }

    column.adminTasks.splice(taskIndex, 1);
    await kanban.save();

    res.status(200).json({ message: 'Tarea eliminada exitosamente' });
  });
});


module.exports = router;
