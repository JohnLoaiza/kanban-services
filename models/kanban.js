const mongoose = require('mongoose');

// Requeriment Schema
const RequerimentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: false },
  desp: { type: String, required: false },
  finalData: { type: String, required: false },
  finished: { type: Boolean, required: false },
  finishedDate: { type: Number, required: false },
  mandatory: { type: Boolean, required: false },
  tipologyId: { type: Number, required: false },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
});

const TagSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: false },
  color: { type: String, required: false }
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
});

const RequerimentGroupSchame = new mongoose.Schema({
  id: { type: Number, required: true, },
  nextTaskId: { type: Number, required: false },
  active: { type: Boolean, required: false },
  title: { type: String, required: false },
  requeriments: { type: [Number], required: false },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
});

// History Schema
const HistorySchema = new mongoose.Schema({ columnId: { type: Number, required: true, }, taskVersion: [mongoose.Schema.Types.Mixed] })

// Task Schema
const AdminTaskSchema = new mongoose.Schema({
  id: { type: Number, required: true, },
  baseId: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  tags: { type: [TagSchema], required: false },
  priority: { type: String, required: false },
  requerimentGroups: { type: [RequerimentGroupSchame], required: false },
  requeriments: { type: [RequerimentSchema], default: [] },
  history: { type: [HistorySchema], default: [] },
  initDate: { type: Number, required: false },
  movements: { type: [mongoose.Schema.Types.Mixed], default: [] },
  tipologies: { type: [mongoose.Schema.Types.Mixed], default: [] },
  prerequisites: { type: [String], default: [] },
  state: { type: String, required: false },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
});

// Task Schema
const TaskSchema = new mongoose.Schema({
  id: { type: Number, required: true, },
  baseId: { type: Number, required: true },
  tags: { type: [TagSchema], required: false },
  info: { type: String, required: false },
  priority: { type: String, required: false },
  requeriments: { type: [RequerimentSchema], default: [] },
  history: { type: [HistorySchema], default: [] },
  initDate: { type: Number, required: false },
  movements: { type: [mongoose.Schema.Types.Mixed], default: [] },
  state: { type: String, required: false },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
});

// Column Schema
const ColumnSchema = new mongoose.Schema({
  id: { type: Number, required: true, },
  title: { type: String, required: true },
  tasks: { type: [TaskSchema], default: [] },
  adminTasks: { type: [AdminTaskSchema], default: [] },
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
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
});

// Kanban Schema
const KanbanSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  columns: { type: [ColumnSchema], default: [] },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);  // Merge the rest of the properties after 'id'
      return transformed;
    }
  },
});

const Kanban = mongoose.model('Kanban', KanbanSchema);

module.exports = Kanban;
