const mongoose = require('mongoose');

// Requeriment Schema
const RequerimentSchema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true },
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
      const transformed = { id: ret.uid };  // Start with 'id' at the beginning
      delete ret._id;
      delete ret.uid;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  }
});

const TagSchema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true },
  name: { type: String, required: false },
  color: { type: String, required: false },
},{
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.uid };  // Start with 'id' at the beginning
      delete ret._id;
      delete ret.uid;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  }
})

const RequerimentGroupSchame = new mongoose.Schema( {
  uid: { type: Number, required: true, unique: true },
  nextTaskId: { type: Number, required: false },
  active: { type: Boolean, required: false },
  title: { type: String, required: false },
  requeriments: { type: [Number], required: false },
},{
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.uid };  // Start with 'id' at the beginning
      delete ret._id;
      delete ret.uid;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  }
})

// Task Schema
const TaskSchema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  tags: { type: [TagSchema], required: false },
  priority: { type: String, required: false },
  requerimentGroups: { type: [RequerimentGroupSchame], required: false },
  requeriments: { type: [RequerimentSchema], default: [] },
  history: { type: [String], default: [] },
  initDate: { type: Number, required: false },
  movements: { type: [mongoose.Schema.Types.Mixed], default: [] },
  tipologies: { type: [mongoose.Schema.Types.Mixed], default: [] },
  prerequisites: { type: [String], default: [] },
  state: { type: String, required: false },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.uid };  // Start with 'id' at the beginning
      delete ret._id;
      delete ret.uid;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  }
});

// Column Schema
const ColumnSchema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
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
      const transformed = { id: ret.uid };  // Start with 'id' at the beginning
      delete ret._id;
      delete ret.uid;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  }
});

// Kanban Schema
const KanbanSchema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  columns: { type: [ColumnSchema], default: [] },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.uid };  // Start with 'id' at the beginning
      delete ret._id;
      delete ret.uid;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  }
});

const Kanban = mongoose.model('Kanban', KanbanSchema);

module.exports = Kanban;
