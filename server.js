import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import kanbanRoutes from './routes/kanbanRoutes.js';
import adminTasksRoutes from './routes/adminTaskRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import requerimentsRoutes from './routes/requerimentsRoutes2.js';
import userRoutes from './routes/userRoutes.js';
import webhook from './routes/webhook.js';




const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// DbConnect.open()
app.use('/api/kanbans', kanbanRoutes);
app.use('/api/adminTasks', adminTasksRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/requeriments', requerimentsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/webhook', webhook);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
