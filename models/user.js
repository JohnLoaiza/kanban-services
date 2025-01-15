const mongoose = require('mongoose');



const User = mongoose.model('userTasks', {
    userId: { type: Number, required: true },
    name: { type: String, required: true },
    tareas: { type: [mongoose.Schema.Types.Mixed], default: [] },
}, );

module.exports = User;
