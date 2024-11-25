const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const mongoose = require('mongoose');
const axios = require('axios');
const DbConnect = require('../bd/dbConnect');
const { ObjectId } = mongoose.Types;

// Helper para validar ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Obtener una tarea específica
router.get('/:kanbanId/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;

    if (!isValidObjectId(kanbanId) || !isValidObjectId(taskId)) {
      return res.status(400).json({ message: 'ID de Kanban o Tarea inválido' });
    }

    const kanban = await Kanban.findById(kanbanId);
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task._id.equals(new ObjectId(taskId)))
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task._id.equals(new ObjectId(taskId)));
    res.status(200).json({ success: true, task });
  });
});

// Crear una nueva tarea
router.post('/:kanbanId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId } = req.params;
    const { columnId, task } = req.body;

    if (!isValidObjectId(kanbanId)) {
      return res.status(400).json({ message: 'ID de Kanban inválido' });
    }

    const kanban = await Kanban.findById(kanbanId);
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.id(columnId);
    const columnToUpdate = column || kanban.columns[0];
    const newTask = columnToUpdate.tasks.create(task); // Crea la tarea como subdocumento
    columnToUpdate.tasks.push(newTask); // Añade la tarea a la columna correspondiente

    await kanban.save();

    const responseTask = newTask.toObject();
    responseTask.id = responseTask._id;
    delete responseTask._id;

    // Notificación externa (si aplica)
    const notificationData = {
      kanbanId,
      columnId: columnToUpdate._id,
      task: responseTask,
      message: 'Se ha insertado una nueva tarea',
    };

    try {
      const response = await axios.post('https://canales.oportuna.red/oportunadanban', {
        actionTodo: 'newLead',
        data: notificationData,
      });
      console.log('Notificación enviada:', response.data);
    } catch (notificationError) {
      console.error('Error al enviar notificación:', notificationError.message);
    }

    res.status(201).json({
      message: 'Tarea creada exitosamente',
      task: responseTask,
    });
  });
});

// Actualizar una tarea específica
router.put('/:kanbanId/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;
    const updatedTaskData = req.body;

    if (!isValidObjectId(kanbanId) || !isValidObjectId(taskId)) {
      return res.status(400).json({ message: 'ID de Kanban o Tarea inválido' });
    }

    const kanban = await Kanban.findById(kanbanId);
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task._id.equals(new ObjectId(taskId)))
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.id(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Actualizar solo las propiedades especificadas
    Object.assign(task, updatedTaskData);

    await kanban.save();

    const responseTask = task.toObject();
    responseTask.id = responseTask._id;
    delete responseTask._id;

    res.status(200).json({
      message: 'Tarea actualizada exitosamente',
      task: responseTask,
    });
  });
});


// Eliminar una tarea específica
router.delete('/:kanbanId/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;

    if (!isValidObjectId(kanbanId)) {
      return res.status(400).json({ message: 'ID de Kanban inválido' });
    }

    const kanban = await Kanban.findById(kanbanId);
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task._id.equals(new ObjectId(taskId)))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const taskIndex = column.tasks.findIndex((task) => task._id.equals(new ObjectId(taskId)));
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    column.tasks.splice(taskIndex, 1);
    await kanban.save();

    res.status(200).json({ message: 'Tarea eliminada exitosamente' });
  });
});

module.exports = router;
