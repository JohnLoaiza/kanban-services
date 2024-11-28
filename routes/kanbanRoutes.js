const express = require('express');
const router = express.Router();
const Kanban = require('../models/kanban');
const DbConnect = require('../bd/dbConnect');

// Crear un nuevo Kanban
router.post('/', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    try {
      // Verificar si ya existe un Kanban con el mismo id
      const existingKanban = await Kanban.findOne({ id: req.body.id });
      if (existingKanban) {
        return res.status(400).json({ message: 'Ya existe un Kanban con este ID.' });
      }

      // Crear el nuevo Kanban si no existe uno con el mismo ID
      const kanban = new Kanban(req.body);
      const savedKanban = await kanban.save();

      // Responder con el Kanban guardado
      res.status(201).json(savedKanban);
    } catch (error) {
      // Manejo de errores
      console.error(error);
      res.status(500).json({ message: 'Hubo un error al crear el Kanban.' });
    }
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

    // Buscar por id en lugar de _id
    const kanban = await Kanban.findOne({ id: kanbanId });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    res.status(200).json(kanban);
  });
});

// Actualizar un Kanban por ID
router.put('/:id', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const kanbanId = req.params.id;

    // Buscar y actualizar por id
    const updatedKanban = await Kanban.findOneAndUpdate(
      { id: kanbanId },
      req.body,
      { new: true }
    );

    if (!updatedKanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    res.status(200).json(updatedKanban);
  });
});

// Eliminar un Kanban por ID
router.delete('/:id', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const kanbanId = req.params.id;

    // Buscar y eliminar por id
    const result = await Kanban.findOneAndDelete({ id: kanbanId });
    if (!result) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    res.status(200).json({ message: 'Kanban eliminado exitosamente', data: result });
  });
});

module.exports = router;
