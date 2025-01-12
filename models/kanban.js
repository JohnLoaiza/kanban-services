import mongoose from 'mongoose';
import { generateRandomNumber } from '../controllers/tools.js';


// Función para generar un ID único automático
export const generateId = () => Math.floor(Math.random() * 1000000);

// Requeriment Schema
const RequerimentSchema = new mongoose.Schema({
  id: { type: Number, default: generateId },
  title: { type: String, required: false },
  desp: { type: String, required: false },
  finalData: { type: mongoose.Schema.Types.Mixed, required: false, default: '' },
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
      Object.assign(transformed, ret);
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
});

const TagSchema = new mongoose.Schema({
  id: { type: Number, default: generateId },
  name: { type: String, required: false },
  color: { type: String, required: false }
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
});

const RequerimentGroupSchame = new mongoose.Schema({
  id: { type: Number, default: generateId },
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
      Object.assign(transformed, ret);
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
});

// History Schema
const HistorySchema = new mongoose.Schema({
  columnId: { type: Number, required: true },
  taskVersion: [mongoose.Schema.Types.Mixed]
});

// AdminTask Schema
const AdminTaskSchema = new mongoose.Schema({
  id: { type: Number, default: generateId },
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
      Object.assign(transformed, ret);
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
});

// Task Schema
const TaskSchema = new mongoose.Schema({
  id: { type: Number, default: generateId },
  kanbanId: { type: Number, required: false },
  columnId: { type: Number, required: false },
  baseId: { type: Number, required: true },
  tags: { type: [TagSchema], required: false },
  info: { type: String, required: false },
  priority: { type: String, required: false },
  requeriments: { type: [RequerimentSchema], default: [] },
  history: { type: [HistorySchema], default: [] },
  initDate: { type: Number, required: false },
  schedule: {
    type: mongoose.Schema.Types.Mixed,
    default: {
      startDate: {
        startDay: generateRandomNumber(0, 24),
        startMonth: 12,
        startYear: 2024
      },
      dailySchedule: {
        start: generateRandomNumber(0, 24),
        end: generateRandomNumber(0, 24)
      },
      duration: generateRandomNumber(0, 11)
    }
  },
  movements: { type: [mongoose.Schema.Types.Mixed], default: [] },
  state: { type: String, required: false },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
});

// Column Schema
const ColumnSchema = new mongoose.Schema({
  id: { type: Number, default: generateId },
  title: { type: String, required: true },
  tasks: { type: [TaskSchema], default: [] },
  adminTasks: { type: [AdminTaskSchema], default: [] },
  autoFinish: { type: Boolean, required: false },
  filters: {
    type: {
      filter1: { type: String, default: '' },
      filter2: { type: String, default: '' },
      filter3: { type: String, default: '' },
      filter4: { type: Boolean, default: false },
      filter5: { type: Boolean, default: false },
      filter6: { type: String, default: '' },
    },
    default: {
      filter1: '',
      filter2: '',
      filter3: '',
      filter4: false,
      filter5: false,
      filter6: '',
    },
  },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
});

// Kanban Schema
const KanbanSchema = new mongoose.Schema({
  id: { type: Number, default: generateId },
  nombre: { type: String, required: true },
  columns: { type: [ColumnSchema], default: [] },
}, {
  toJSON: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const transformed = { id: ret.id };
      delete ret._id;
      delete ret.id;
      Object.assign(transformed, ret);
      return transformed;
    }
  },
});

export const Task = mongoose.model('Task', TaskSchema);
export const Kanban = mongoose.model('Kanban', KanbanSchema);

export default { Task, Kanban, generateId };
