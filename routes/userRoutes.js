import express from 'express';
import DbConnect from '../bd/dbConnect.js';
import User from '../models/user.js';

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
  


  export default router;
