const express = require('express');
const DbConnect = require('../bd/dbConnect');
const Tipology = require('../objects/Tipology');


const router = express.Router();

// Obtener todas las tareas
router.get('/', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const tipologies = Tipology.getTipologies()
    res.status(200).json({success: true, tipologies: tipologies});
  });
});


module.exports = router;