const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const kanbanRoutes = require('./routes/kanbanRoutes');
const taskRoutes = require('./routes/taskRoutes');
const DbConnect = require('./bd/dbConnect');


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
/*
mongoose.connect('mongodb://localhost/kanbanDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));
*/
/*
DbConnect.open().then((e) => console.log( e ?'Connected to MongoDB' : 'Error connect db'))
.catch((err) => console.error('Error connecting to MongoDB:', err));
*/
// Routes
app.use('/api/kanbans', kanbanRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
