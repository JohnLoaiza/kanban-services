const express = require('express');
const router = express.Router();
const { Task } = require('../models/kanban');
const DbConnect = require('../bd/dbConnect');
const RequerimentController = require('../controllers/requerimentController');
const axios = require('axios');

// Obtener un requerimiento específico
router.get('/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { taskId, requerimentId } = req.params;

    const requeriment = await RequerimentController.findRequeriment(taskId, requerimentId, res);

    if (!requeriment) return;

    res.status(200).json({ success: true, requeriment });
  });
});

// Crear un nuevo requerimiento
router.post('/:taskId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { taskId } = req.params;
    const newRequeriment = req.body;

    const task = await Task.findOne({ id: parseInt(taskId, 10) });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    task.requeriments.push(newRequeriment);
    await task.save();

    res.status(201).json({
      message: 'Requerimiento creado exitosamente',
      newRequeriment,
    });
  });
});

// Actualizar un requerimiento específico
router.put('/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { taskId, requerimentId } = req.params;
    const updatedData = req.body;

    const updated = await RequerimentController.updateRequeriment(taskId, requerimentId, updatedData, res);

    if (updated.updated) {
      res.status(200).json({
        message: 'Requerimiento actualizado exitosamente',
        requeriment: updated.requeriment,
      });

      return {
        eventName: 'updateRequeriment',
        data: {
          columnId: updated.columnId,
          kanbanId: updated.kanbanId,
          taskId: parseInt(taskId),
          requeriment: updated.requeriment,
          message: 'Se ha actualizado un requisito',
        },
      };
    } else {
      res.status(400).json({
        message: 'No se pudo actualizar el requisito',
        success: false,
      });
    }
  });
});

// Eliminar un requerimiento específico
router.delete('/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { taskId, requerimentId } = req.params;

    const task = await Task.findOne({ id: parseInt(taskId, 10) });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const requerimentIndex = task.requeriments.findIndex(
      (req) => req.id === parseInt(requerimentId, 10)
    );

    if (requerimentIndex === -1) {
      return res.status(404).json({ message: 'Requerimiento no encontrado' });
    }

    task.requeriments.splice(requerimentIndex, 1);
    await task.save();

    res.status(200).json({ message: 'Requerimiento eliminado exitosamente' });
  });
});

// Resolver un requerimiento
router.get('/solve/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { taskId, requerimentId } = req.params;

    const requeriment = await RequerimentController.findRequeriment(taskId, requerimentId, res);

    if (!requeriment) return;

    if (requeriment.finalData !== '') {
      res.status(201).json({
        success: false,
        message: 'Este requisito ya ha sido resuelto',
        requeriment,
      });
      return;
    }

    const fullDomain = `${req.protocol}://${req.headers.host}`;

    const response = await axios.post('https://pay.oportuna.red/encodeQR', {
      userEmail: 'kevincastrillon31@gmail.com',
      type: 'widget',
      lifeTime: 600,
      webhook: `${fullDomain}/api/webhook/`,
      widgetId: requeriment.tipologyId,
      marketPlace: {
        taskId,
        requerimentId,
      },
    });

    const data = response.data;

    res.status(201).json({
      success: true,
      message: 'Ruta encontrada',
      url: `https://oportunawidgets.web.app/widget/${data.encodeQR}`,
    });
  });
});

module.exports = router;
