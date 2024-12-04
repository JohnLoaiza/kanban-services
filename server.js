const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const kanbanRoutes = require('./routes/kanbanRoutes');
const adminTasksRoutes = require('./routes/adminTaskRoutes');
const taskRoutes = require('./routes/taskRoutes');
const requerimentsRoutes = require('./routes/requerimentsRoutes');
const userRoutes = require('./routes/userRoutes');


const DbConnect = require('./bd/dbConnect');


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



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
