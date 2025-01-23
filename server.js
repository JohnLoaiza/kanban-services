const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const kanbanRoutes = require('./routes/kanbanRoutes');
const adminTasksRoutes = require('./routes/adminTaskRoutes');
const taskRoutes = require('./routes/taskRoutes');
const requerimentsRoutes = require('./routes/requerimentsRoutes2');
const userRoutes = require('./routes/userRoutes');
const tipologyRoutes = require('./routes/tipologyRoutes');
const webhook = require('./routes/webhook');
const DbConnect = require('./bd/dbConnect');

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
app.use('/api/tipologies', tipologyRoutes);
app.use('/api', router);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
