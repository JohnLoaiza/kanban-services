const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const mongoose = require('mongoose');

// Crear un nuevo Kanban
router.post('/', async (req, res) => {
  try {
    const kanban = new Kanban(req.body);
    const savedKanban = await kanban.save();
    res.status(201).json(savedKanban);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener todos los Kanbans
router.get('/', async (req, res) => {
  try {
    const kanbans = await Kanban.find();
    res.status(200).json(kanbans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un Kanban por ID (utilizando ObjectId)
router.get('/:id', async (req, res) => {
  try {
    const kanbanId = req.params.id;
    // Convertir el id a ObjectId
    if (!mongoose.Types.ObjectId.isValid(kanbanId)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    // Buscar por el campo _id (no id) y devolver el kanban
    const kanban = await Kanban.findById(kanbanId);
    if (!kanban) return res.status(404).json({ message: 'Kanban no encontrado' });
    
    res.status(200).json(kanban);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar un Kanban
router.put('/:id', async (req, res) => {
    console.log('entra actualizacion para el id ');
    console.log(req.params.id);
    
    console.log(req.body);
    
  try {
    const kanbanId = req.params.id;
    // Convertir el id a ObjectId
    if (!mongoose.Types.ObjectId.isValid(kanbanId)) {
        console.log('entra');
        
      return res.status(400).json({ message: 'ID inválido' });
    }
console.log('pasa por aca');
console.log(req.body.columns[0].adminTasks);

    // Buscar y actualizar el Kanban
    const updatedKanban = await Kanban.findByIdAndUpdate(
        kanbanId,
        req.body,
        { new: true }
      );
      
      if (!updatedKanban) {
        console.log('Kanban no encontrado o no se actualizó');
        return res.status(404).json({ message: 'Kanban no encontrado' });
      }
      
      console.log('Kanban actualizado con éxito');
      
    if (!updatedKanban) return res.status(404).json({ message: 'Kanban no encontrado' });
    res.status(200).json(updatedKanban);
  } catch (err) {
    console.log('error');
    console.log(err);
    
    
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un Kanban
router.delete('/:id', async (req, res) => {
  try {
    const kanbanId = req.params.id;
    // Convertir el id a ObjectId
    if (!mongoose.Types.ObjectId.isValid(kanbanId)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    // Eliminar el Kanban por _id
    const result = await Kanban.findByIdAndDelete(kanbanId);
    if (!result) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    res.status(200).json({ message: 'Kanban eliminado exitosamente', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el kanban', error: error.message });
  }
});

module.exports = router;
