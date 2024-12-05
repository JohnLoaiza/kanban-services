const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const DbConnect = require('../bd/dbConnect');
const RequerimentController = require('../controllers/requerimentController');

// Obtener un requerimiento específico
router.get('/:kanbanUid/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanUid, taskId, requerimentId } = req.params;

    const kanban = await Kanban.findOne({ id: parseInt(kanbanUid, 10) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.id === parseInt(taskId, 10))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.id === parseInt(taskId, 10));
    const requeriment = task.requeriments.find(
      (req) => req.id === parseInt(requerimentId, 10)
    );

    if (!requeriment) {
      return res.status(404).json({ message: 'Requerimiento no encontrado' });
    }

    res.status(200).json({ success: true, requeriment });
  });
});

// Crear un nuevo requerimiento
router.post('/:kanbanId/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId } = req.params;
    const newRequeriment = req.body;

    const kanban = await Kanban.findOne({ id: parseInt(kanbanId, 10) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.id === parseInt(taskId, 10))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.id === parseInt(taskId, 10));
   
    task.requeriments.push(newRequeriment);

    await kanban.save();
    res.status(201).json({
      message: 'Requerimiento creado exitosamente',
      newRequeriment,
    });
  });
});

// Actualizar un requerimiento específico
router.put('/:kanbanId/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId, requerimentId } = req.params;
    const updatedData = req.body;

    const updated = await RequerimentController.updateRequeriment(kanbanId, taskId, requerimentId, updatedData, res)
   
    if (updated.updated) {
      res.status(200).json({
        message: 'Requerimiento actualizado exitosamente',
        requeriment: updated.requeriment,
      });
  
      const notificationData = {
        kanbanId: parseInt(kanbanId),
        columnId: updated.columnId,
        taskId: parseInt(taskId),
        requeriment: updated.requeriment,
        message: 'Se ha actualizado un requisito',
      };
  
      return {
        eventName: 'updateRequeriment',
        data : notificationData
      }
    } else {
      res.status(400).json({
        message: 'No se pudo actualizar el requisito',
        success: false
      });
    }

    
  });
});

// Eliminar un requerimiento específico
router.delete('/:kanbanId/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId, requerimentId } = req.params;

    const kanban = await Kanban.findOne({ id: parseInt(kanbanId, 10) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.tasks.some((task) => task.id === parseInt(taskId, 10))
    );
    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.tasks.find((task) => task.id === parseInt(taskId, 10));
    const requerimentIndex = task.requeriments.findIndex(
      (req) => req.id === parseInt(requerimentId, 10)
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
