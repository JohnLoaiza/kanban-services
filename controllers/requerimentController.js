import { Kanban, Task } from '../models/kanban.js';

class RequerimentController {


  static updateRequeriment = async (taskId, requerimentId, updatedData, res) => {
    // Buscar la tarea directamente en la colección Task
    const task = await Task.findOne({ id: parseInt(taskId) });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Buscar el requerimiento dentro de la tarea
    const requeriment = task.requeriments.find(
      (req) => req.id === parseInt(requerimentId)
    );

    if (!requeriment) {
      return res.status(404).json({ message: 'Requerimiento no encontrado' });
    }

    // Actualizar los datos del requerimiento
    Object.assign(requeriment, updatedData);

    // Guardar la tarea actualizada
    await task.save();

    // Retornar el resultado
    return { requeriment, taskId: task.id, updated: true, columnId: task.columnId, kanbanId: task.kanbanId };
  };

  static findRequeriment = async (taskId, requerimentId, res) => {
    try {
      // Buscar directamente en la colección Task
      const task = await Task.findOne({ id: parseInt(taskId) });
      if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
  
      // Buscar el requerimiento dentro de la tarea
      const requeriment = task.requeriments.find(
        (req) => req.id === parseInt(requerimentId)
      );
  
      if (!requeriment) {
        return res.status(404).json({ message: 'Requerimiento no encontrado' });
      }
  
      // Retornar el requerimiento encontrado
      return {requeriment: requeriment, task: task}
    } catch (error) {
      console.error('Error al buscar el requerimiento:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
}

export default  RequerimentController;