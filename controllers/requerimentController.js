const Kanban = require('../models/kanban');


class RequerimentController {


   static updateRequeriment = async (kanbanId, taskId, requerimentId, updatedData,res) => {
        const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
        if (!kanban) {
          return res.status(404).json({ message: 'Kanban no encontrado' });
        }
    
        const column = kanban.columns.find((col) =>
          col.tasks.some((task) => task.id === parseInt(taskId))
        );
        if (!column) {
          return res.status(404).json({ message: 'Tarea no encontrada' });
        }
    
        const task = column.tasks.find((task) => task.id === parseInt(taskId));
        const requeriment = task.requeriments.find(
          (req) => req.id === parseInt(requerimentId)
        );
    
        if (!requeriment) {
          return res.status(404).json({ message: 'Requerimiento no encontrado' });
        }
    
        Object.assign(requeriment, updatedData);
        await kanban.save();
        return {requeriment: requeriment, columnId: column.id,  updated: true}
    }

    static findRequeriment = async (kanbanUid, taskId, requerimentId, res) => {
      const kanban = await Kanban.findOne({ id: parseInt(kanbanUid, 10) });
      if (!kanban) {
         res.status(404).json({ message: 'Kanban no encontrado' });
         return false
      }
  
      const column = kanban.columns.find((col) =>
        col.tasks.some((task) => task.id === parseInt(taskId, 10))
      );
      if (!column) {
         res.status(404).json({ message: 'Tarea no encontrada' });
         return false
      }
  
      const task = column.tasks.find((task) => task.id === parseInt(taskId, 10));
      const requeriment = task.requeriments.find(
        (req) => req.id === parseInt(requerimentId, 10)
      );
  
      if (!requeriment) {
         res.status(404).json({ message: 'Requerimiento no encontrado' });
         return false
      }
     return requeriment
    }
}

module.exports = RequerimentController;