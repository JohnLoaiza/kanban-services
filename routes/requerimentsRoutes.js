const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const mongoose = require('mongoose');
const DbConnect = require('../bd/dbConnect');
const { ObjectId } = mongoose.Types;

// Helper para validar ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Obtener un requerimiento específico
router.get('/:kanbanId/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId, requerimentId } = req.params;

    if (!isValidObjectId(kanbanId) || !isValidObjectId(taskId) || !isValidObjectId(requerimentId)) {
      return res.status(400).json({ message: 'ID inválido' });
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
    const requeriment = task.requeriments.id(requerimentId);

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
  
      if (!isValidObjectId(kanbanId) || !isValidObjectId(taskId)) {
        return res.status(400).json({ message: 'ID inválido' });
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
      const requeriment = task.requeriments.create(newRequeriment); // Crea el subdocumento
      task.requeriments.push(requeriment); // Inserta el subdocumento en la lista
  
      await kanban.save();
  
      // Construir el objeto de respuesta eliminando `_id`
      const responseRequeriment = requeriment.toObject();
      responseRequeriment.id = responseRequeriment._id;
      delete responseRequeriment._id;
  
      res.status(201).json({
        message: 'Requerimiento creado exitosamente',
        requeriment: responseRequeriment,
      });
    });
  });
  
  

// Actualizar un requerimiento específico
router.put('/:kanbanId/:taskId/:requerimentId', async (req, res) => {
    DbConnect.bdProcess(res, async () => {
      const { kanbanId, taskId, requerimentId } = req.params;
      const updatedData = req.body;
  
      if (!isValidObjectId(kanbanId) || !isValidObjectId(taskId) || !isValidObjectId(requerimentId)) {
        return res.status(400).json({ message: 'ID inválido' });
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
      const requeriment = task.requeriments.id(requerimentId);
  
      if (!requeriment) {
        return res.status(404).json({ message: 'Requerimiento no encontrado' });
      }
  
      // Actualiza solo las propiedades proporcionadas
      Object.assign(requeriment, updatedData);
  
      await kanban.save();
      res.status(200).json({
        message: 'Requerimiento actualizado exitosamente',
        requeriment,
      });
      const notificationData = {
        kanbanId,
        columnId: column.id,
        taskId: taskId,
        requeriment: requeriment,
        message: 'Se ha insertado una nueva tarea',
      };
  
      return {
        eventName: 'updateRequeriment',
        data : notificationData
      }
    });
  });
  

// Eliminar un requerimiento específico
router.delete('/:kanbanId/:taskId/:requerimentId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId, taskId, requerimentId } = req.params;

    if (!isValidObjectId(kanbanId) || !isValidObjectId(taskId) || !isValidObjectId(requerimentId)) {
      return res.status(400).json({ message: 'ID inválido' });
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
    const requerimentIndex = task.requeriments.findIndex((req) =>
      req._id.equals(new ObjectId(requerimentId))
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
