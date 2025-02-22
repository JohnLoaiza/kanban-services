const KanbanController = require("./kanbanController") 


  class ColumnController {

    static getColumn = async (kanbanId, columnId) => {
        const kanban = await KanbanController.getKanban(kanbanId, false);

      const column = kanban.columns.find((c) => c.id === columnId);
        column.tasks = [];
      return  column;
    }
 }

 module.exports = ColumnController