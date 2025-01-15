const express = require('express');
const DbConnect = require('../bd/dbConnect');
const RequerimentController = require('../controllers/requerimentController');


const router = express.Router();


router.post('/', async (req, res) => {
    DbConnect.bdProcess(res, async () => {
      const  data  = req.body;
  
      console.log('llega notificacion al webhook', data);
      const kanbanId = data.mainData.kanbanId
      const taskId = data.mainData.taskId
      const requerimentId = data.mainData.requerimentId
      const newData = await updateData(data.tipologyId, data.data, taskId, requerimentId, res)

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

  const updateData = async (tipologyId, data, taskId, requerimentId, res) => {
    switch (tipologyId) {
        case 16:
            
           return {
            finalData: data
           }

           case 13: 

           return {
            finalData: data
           }

           case 35: 
           console.log('se actualiza listado de archivos')
         const findRq =  await RequerimentController.findRequeriment(taskId, requerimentId, res);
         const req = findRq.requeriment;
         console.log('req es ', req);
         
         if (Array.isArray(req.finalData)) {
          req.finalData.push(data)
        } else {
          req.finalData = [data]
        }
       console.log('retorna', req.finalData);
       
           return {
            finalData: req.finalData
           }
    
        default:
          return {
            finalData: data
           }
    }
  }

  module.exports = router;