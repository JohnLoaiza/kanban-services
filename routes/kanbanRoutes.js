const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const mongoose = require('mongoose');
const DbConnect = require('../bd/dbConnect');

// Crear un nuevo Kanban
router.post('/', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const kanban = new Kanban(req.body);
    const savedKanban = await kanban.save();
    res.status(201).json(savedKanban);
  });
});

// Obtener todos los Kanbans
router.get('/', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const kanbans = await Kanban.find();
    res.status(200).json(kanbans);
  });
});

// Obtener un Kanban por ID
router.get('/:id', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const kanbanId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(kanbanId)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const kanban = await Kanban.findById(kanbanId);
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    res.status(200).json(kanban);
  });
});

// Actualizar un Kanban
router.put('/:id', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const kanbanId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(kanbanId)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const updatedKanban = await Kanban.findByIdAndUpdate(
      kanbanId,
      req.body,
      { new: true }
    );

    if (!updatedKanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    res.status(200).json(updatedKanban);
  });
});

// Eliminar un Kanban
router.delete('/:id', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const kanbanId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(kanbanId)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const result = await Kanban.findByIdAndDelete(kanbanId);
    if (!result) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    res.status(200).json({ message: 'Kanban eliminado exitosamente', data: result });
  });
});

module.exports = router;
