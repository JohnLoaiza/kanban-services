import mongoose from 'mongoose';



const User = mongoose.model('userTasks', {
    userId: { type: Number, required: true },
    name: { type: String, required: true },
    tareas: { type: [mongoose.Schema.Types.Mixed], default: [] },
}, );

export default User;
