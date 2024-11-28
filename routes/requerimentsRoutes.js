const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const DbConnect = require('../bd/dbConnect');

// Obtener un requerimiento específico
router.get('/:kanbanUid/:taskUid/:requerimentUid', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanUid, taskUid, requerimentUid } = req.params;

    const kanban = await Kanban.findOne({ uid: parseInt(kanbanUid, 10) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.uid === parseInt(taskUid, 10))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.uid === parseInt(taskUid, 10));
    const requeriment = task.requeriments.find(
      (req) => req.uid === parseInt(requerimentUid, 10)
    );

    if (!requeriment) {
      return res.status(404).json({ message: 'Requerimiento no encontrado' });
    }

    res.status(200).json({ success: true, requeriment });
  });
});

// Crear un nuevo requerimiento
router.post('/:kanbanUid/:taskUid', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanUid, taskUid } = req.params;
    const newRequeriment = req.body;

    const kanban = await Kanban.findOne({ uid: parseInt(kanbanUid, 10) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.uid === parseInt(taskUid, 10))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.uid === parseInt(taskUid, 10));
   
    task.requeriments.push(newRequeriment);

    await kanban.save();
    res.status(201).json({
      message: 'Requerimiento creado exitosamente',
      requeriment,
    });
  });
});

// Actualizar un requerimiento específico
router.put('/:kanbanUid/:taskUid/:requerimentUid', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanUid, taskUid, requerimentUid } = req.params;
    const updatedData = req.body;

    const kanban = await Kanban.findOne({ uid: parseInt(kanbanUid, 10) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.uid === parseInt(taskUid, 10))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.uid === parseInt(taskUid, 10));
    const requeriment = task.requeriments.find(
      (req) => req.uid === parseInt(requerimentUid, 10)
    );

    if (!requeriment) {
      return res.status(404).json({ message: 'Requerimiento no encontrado' });
    }

    Object.assign(requeriment, updatedData);
    await kanban.save();

    res.status(200).json({
      message: 'Requerimiento actualizado exitosamente',
      requeriment,
    });
  });
});

// Eliminar un requerimiento específico
router.delete('/:kanbanUid/:taskUid/:requerimentUid', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanUid, taskUid, requerimentUid } = req.params;

    const kanban = await Kanban.findOne({ uid: parseInt(kanbanUid, 10) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.uid === parseInt(taskUid, 10))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.uid === parseInt(taskUid, 10));
    const requerimentIndex = task.requeriments.findIndex(
      (req) => req.uid === parseInt(requerimentUid, 10)
    );

    if (requerimentIndex === -1) {
      return res.status(404).json({ message: 'Requerimiento no encontrado' });
    }

    task.requeriments.splice(requerimentIndex, 1);
    await kanban.save();

    res.status(200).json({ message: 'Requerimiento eliminado exitosamente' });
  });
});

module.exports = router;
