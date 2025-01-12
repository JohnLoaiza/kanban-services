import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import kanbanRoutes from './routes/kanbanRoutes.js';
import adminTasksRoutes from './routes/adminTaskRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import requerimentsRoutes from './routes/requerimentsRoutes2.js';
import userRoutes from './routes/userRoutes.js';
import webhook from './routes/webhook.js';
import DbConnect from './bd/dbConnect.js';
const router = express.Router();



const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta inicial
router.get('/', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    res.status(200).json("El API de servicios esta corriendo");
  });
});

// DbConnect.open()
app.use('/api/kanbans', kanbanRoutes);
app.use('/api/adminTasks', adminTasksRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/requeriments', requerimentsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/webhook', webhook);
app.use('/api', router);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
