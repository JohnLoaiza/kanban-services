const express = require('express');
const { Kanban, Task } = require('../models/kanban');
const DbConnect = require('../bd/dbConnect');
const KanbanController = require('../controllers/kanbanController');


const router = express.Router();

// Aquí puedes agregar tus rutas usando `router`


// Crear un nuevo Kanban
router.post('/', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    try {
      // Verificar si ya existe un Kanban con el mismo id
      const existingKanban = await Kanban.findOne({ id: req.body.id });
      if (existingKanban) {
        return res.status(400).json({ message: 'Ya existe un Kanban con este ID.' });
      }
      console.log('kanban entrante es');
      console.log( req.body);
      
     var k = req.body
     
   
    
    
      // Crear el nuevo Kanban si no existe uno con el mismo ID
      const kanban = new Kanban(k);
      console.log('en modelo');
      console.log(kanban);
      
   
      
      const savedKanban = await kanban.save();
      const notificationData = {
        newKanban: kanban,
        message: 'Kanban creado correctamente',
      };
      // Responder con el Kanban guardado
      res.status(201).json(savedKanban);
      return {
        eventName: 'newKanban',
        data: notificationData
      }
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

    for (const kanban of kanbans) {
      for (const column of kanban.columns) {
        const tasks = await Task.find({
          kanbanId: parseInt(kanban.id),
          columnId: parseInt(column.id),
        });
        column.tasks = tasks; // Agregar las tareas a la columna
      }
    }
console.log('retorna kanbans');
console.log(kanbans);

    res.status(200).json(kanbans);
  });
});


// Obtener un Kanban por ID
router.get('/:id', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const kanbanId = req.params.id;

    // Buscar por id en lugar de _id
    const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    for (const column of kanban.columns) {
      const tasks = await Task.find({
        kanbanId: parseInt(kanban.id),
        columnId: parseInt(column.id),
      });
      column.tasks = tasks; // Agregar las tareas a la columna
    }
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
      { id: parseInt(kanbanId) },
      req.body,
      { new: true }
    );

    if (!updatedKanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }
    const notificationData = {
      kanbanId: parseInt(kanbanId),
      kanban: updatedKanban,
      message: 'Se ha actualizado el kanban ' + kanbanId,
    };  
    res.status(200).json(updatedKanban);
    return {
      eventName: 'updateKanban',
      data: notificationData
    }
  });
});

// Eliminar un Kanban por ID
router.delete('/:id', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const kanbanId = req.params.id;

    // Buscar y eliminar por id
    const result = await Kanban.findOneAndDelete({ id: parseInt(kanbanId) });
    if (!result) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    res.status(200).json({ message: 'Kanban eliminado exitosamente', data: result });
  });
});

router.get('/bases/:id', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { id } = req.params;

    const kanban = await Kanban.findOne({ id: parseInt(id) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }
    console.log('kanban es ');
    console.log(kanban);


    const list = kanban.columns[0].adminTasks.map((t) => {return {baseId: t.id, title: t.title, description: t.description}})

    res.status(200).json({ success: true, baseList: list });
  });
});


router.get('/model/:id', async (req, res) => {
  console.log('model');
  
  DbConnect.bdProcess(res, async () => {
    const { id } = req.params;

    const model = await KanbanController.getModel(id);

    res.status(200).json({ success: true, requiredData: model });
  });
 }
);


module.exports = router;
