import express from 'express';
import DbConnect from '../bd/dbConnect.js';
import * as RequerimentController from '../controllers/requerimentController.js';

const router = express.Router();


router.post('/', async (req, res) => {
    DbConnect.bdProcess(res, async () => {
      const  data  = req.body;
  
      console.log('llega notificacion al webhook', data);
      const kanbanId = data.mainData.kanbanId
      const taskId = data.mainData.taskId
      const requerimentId = data.mainData.requerimentId
      const newData = updateData(data.tipologyId, data.data)

      const updated = await RequerimentController.updateRequeriment(taskId, requerimentId, {...newData, finished: true}, res)
   
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


      res.status(200).json({success: true});
    });
  });

  const updateData = (tipologyId, data) => {
    switch (tipologyId) {
        case 16:
            
           return {
            finalData: data
           }

           case 13: 

           return {
            finalData: data
           }
    
        default:
          return {
            finalData: data
           }
    }
  }

  module.exports = router;