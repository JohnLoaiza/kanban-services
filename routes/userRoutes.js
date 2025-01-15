const express = require('express');
const DbConnect = require('../bd/dbConnect');
const User = require('../models/user');


const router = express.Router();


// Obtener una tarea específica
router.get('/:userId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { userId } = req.params;

    const user = await User.findOne({ id: parseInt(userId) });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    console.log('user es ');
    console.log(user);

    res.status(200).json({ success: true, user: user });
  });
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    DbConnect.bdProcess(res, async () => {
      const users = await User.find();
      res.status(200).json(users);
    });
  });
  


  module.exports = router;
