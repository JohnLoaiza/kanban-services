const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const mongoose = require('mongoose');
const DbConnect = require('../bd/dbConnect');
const { ObjectId } = mongoose.Types;

// Helper para validar ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Obtener una tarea específica
router.get('/:kanbanId/:taskUid', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskUid } = req.params;

    const kanban = await Kanban.findOne({ uid: kanbanId });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.uid === taskUid)
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.uid === taskUid);
    res.status(200).json({ success: true, task });
  });
});


// Crear una nueva tarea
router.post('/:kanbanId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId } = req.params;
    const task = req.body;

    const kanban = await Kanban.findOne({ uid: kanbanId });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const columnToUpdate = kanban.columns[0];
    const newTask = columnToUpdate.tasks.create(task); // Crear la tarea como subdocumento
    columnToUpdate.tasks.push(newTask); // Añadir la tarea a la columna correspondiente

    await kanban.save();

    res.status(201).json({
      message: 'Tarea creada exitosamente',
      task: newTask,
    });
  });
});

// Actualizar una tarea específica
router.put('/:kanbanId/:taskUid', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskUid } = req.params;
    const updatedTaskData = req.body;

    const kanban = await Kanban.findOne({ uid: kanbanId });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.uid === taskUid)
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.uid === taskUid);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Actualizar solo las propiedades especificadas
    Object.assign(task, updatedTaskData);

    await kanban.save();

    res.status(200).json({
      message: 'Tarea actualizada exitosamente',
      task,
    });
  });
});



// Eliminar una tarea específica
router.delete('/:kanbanId/:taskUid', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskUid } = req.params;

    const kanban = await Kanban.findOne({ uid: kanbanId });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.uid === taskUid)
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const taskIndex = column.tasks.findIndex((task) => task.uid === taskUid);
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    column.tasks.splice(taskIndex, 1);
    await kanban.save();

    res.status(200).json({ message: 'Tarea eliminada exitosamente' });
  });
});


module.exports = router;
