import express from 'express';
import Kanban from '../models/kanban.js';
import DbConnect from '../bd/dbConnect.js';
import * as RequerimentController from '../controllers/requerimentController.js';
import os from 'os';
import axios from 'axios';

const router = express.Router();


// Obtener un requerimiento específico
router.get('/:kanbanUid/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanUid, taskId, requerimentId } = req.params;

  const requeriment = await RequerimentController.findRequeriment(kanbanUid, taskId, requerimentId, res)

  if(!requeriment) return;
   res.status(200).json({ success: true, requeriment });
   return;
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


router.get('/solve/:kanbanId/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId, requerimentId } = req.params;
    const requeriment = await RequerimentController.findRequeriment(kanbanId, taskId, requerimentId, res)

    if (!requeriment) return;

    if (requeriment.finalData != '') {
      res.status(201).json({
        success: false,
        message: 'Este requisito ya ha sido resuelto',
        requeriment: requeriment,
      });
      return;
    }

    const fullDomain = `${req.protocol}://${req.headers.host}`;
    console.log('full domain: ' + fullDomain);
    
    
    const response = await axios.post('https://pay.oportuna.red/encodeQR', {
      "userEmail": "kevincastrillon31@gmail.com",
      "type": "widget",
      "lifeTime": 600,
      "webhook": fullDomain + '/api/webhook/',
      "widgetId": requeriment.tipologyId,
      "marketPlace" : {
        "kanbanId": kanbanId,
        "taskId": taskId,
        "requerimentId": requerimentId
      }
    })
    var data = response.data;
    
    res.status(201).json({
      success: true,
      message: 'Ruta encontrada',
      ulr: 'https://oportunawidgets.web.app/widget/'+ data.encodeQR,
    });
  });
});

export default router;
