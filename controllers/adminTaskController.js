const {Kanban} = require('../models/kanban');



class AdminTaskController {
    
    static findAndAsign = async (kanbanId, taskId, updatedTaskData, res) => {
        
    const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }

    const column = kanban.columns.find((col) =>
      col.adminTasks.some((adminTask) => adminTask.id === parseInt(taskId))
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.adminTasks.find((adminTask) => adminTask.id === parseInt(taskId));
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Actualizar solo las propiedades especificadas
    Object.assign(task, updatedTaskData);

    await kanban.save();
    return {kanban: kanban, column: column, success: true}
    }

    static getAdminTask = async (kanbanId, taskId, res) => {
        const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    if (!kanban) {
      return res.status(404).json({ message: 'Kanban no encontrado' });
    }
    console.log('kanban es ');
    console.log(kanban);


    const column = kanban.columns.find((col) =>
      col.adminTasks.some((adminTask) => adminTask.id === parseInt(taskId))
    );

    if (!column) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const task = column.adminTasks.find((adminTask) => adminTask.id === parseInt(taskId));

    return task;
    }
}

module.exports = AdminTaskController;