const mongoose = require('mongoose');

const requerimentSchema = new mongoose.Schema({
  title: { type: String, required: false },
  desp: { type: String, required: false },
  file: { type: String, required: false },
  finished: { type: Boolean, required: false },
  finishedDate: { type: Number, required: false },
  mandatoryFile: { type: Boolean, required: false },
  tipologyId: { type: Number, required: false },
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;   // Rename _id to id
      delete ret._id;      // Remove _id
      return ret;
    }
  }
})

// Task Schema
const TaskSchema = new mongoose.Schema({
  baseId: { type: Number, required: false },
  title: { type: String, required: true },  // Requerido
  description: { type: String, required: false },
  tags: [
    {
      name: { type: String, required: false },
      color: { type: String, required: false },
    },
  ],
  priority: { type: String, required: false },
  requerimentGroups: [
    {
      nextTaskId: { type: Number, required: false },
      active: { type: Boolean, required: false },
      title: { type: String, required: false },
      requeriments: { type: [String], required: false },
    },
  ],
  requeriments: {type: [requerimentSchema], default: []},
  history: { type: [String], default: [] },
  initDate: { type: Number, required: false },
  movements: { type: [mongoose.Schema.Types.Mixed], default: [] },
  tipologies: { type: [mongoose.Schema.Types.Mixed], default: [] },
  prerequisites: { type: [String], default: [] },
  state: { type: String, required: false },
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;   // Rename _id to id
      delete ret._id;      // Remove _id
      return ret;
    }
  }
});



// Column Schema
const ColumnSchema = new mongoose.Schema({
  title: { type: String, required: true },  // Requerido
  tasks: { type: [TaskSchema], default: [] },
  adminTasks: { type: [TaskSchema], default: [] },
  autoFinish: { type: Boolean, required: false },
  filters: {
    filter1: { type: String, required: false },
    filter2: { type: String, required: false },
    filter3: { type: String, required: false },
    filter4: { type: Boolean, required: false },
    filter5: { type: Boolean, required: false },
    filter6: { type: String, required: false },
  },
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;   // Rename _id to id
      delete ret._id;      // Remove _id
      return ret;
    }
  }
});

// Kanban Schema
const KanbanSchema = new mongoose.Schema({
  nombre: { type: String, required: true },  // Requerido
  columns: { type: [ColumnSchema], default: [] },
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;   // Rename _id to id
      delete ret._id;      // Remove _id
      return ret;
    }
  }
});

const Kanban = mongoose.model('Kanban', KanbanSchema);

module.exports = Kanban;
