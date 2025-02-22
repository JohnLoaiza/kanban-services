const { Kanban, Task } = require("../models/kanban");
const Tipology = require("../objects/Tipology");


class KanbanController {

    static getKanban = async (kanbanId, tasksOn = false) => {
        console.log('busca kanban');
        
        const kanban = await Kanban.findOne({ id: parseInt(kanbanId) });
    if (tasksOn) {
        for (const column of kanban.columns) {
            console.log('iguala tareas');
            
            const tasks = await Task.find({
              kanbanId: parseInt(kanban.id),
              columnId: parseInt(column.id),
            });
            column.tasks = tasks; // Agregar las tareas a la columna
          }
    }
    return kanban;
    }

        static getModel = async (id) => {
            
            const kanban = await Kanban.findOne({ id: parseInt(id) })
    const finalList = [];

    for (const c of kanban.columns) {
        let addFlag = false;
        const map = {
            columnId: c.id,
            tasks: []
        };

        for (const t of c.adminTasks) {
            var taskMap = {
                taskId: t.id,
                requeriments: []
            }
        var taskFlag = false;
           

            for (const r of t.requeriments) {
                const flag = await this.needData(r.tipologyId);
                if (flag.flag) {
                    console.log('tipologies upload es');
                    console.log( Tipology.tipologiesUpload);
                    
                    
                    finalList.push({ id: r.id, extraData: this.extraData(r.tipologyId), 'tipology*': {id: r.tipologyId, despcription: flag.tipology.description},});
                    addFlag = true;
                    taskFlag = true;
                }
            }
          //  taskFlag ? finalList.push(taskMap) : () => {}
        }

        if (addFlag) {
          //  finalList.push(map);
        }
    }

    console.log('request es');
    console.log(finalList);
    return finalList;

        }


        static needData = async (tipologyId) => {
            const formTipologies = await Tipology.getFormTipologiesOnly();
            console.log('form tipologies es');
            console.log(formTipologies);
        
        
            const index = formTipologies.findIndex((t) => t.id === tipologyId);
            if (index === -1) {
                return {flag: false};
            } else {
                console.log('index es ' + index);
                console.log('list es ');
                console.log(formTipologies);
                console.log('entonces retorna');
                console.log(formTipologies[index]);
                
                return {flag: true, tipology: formTipologies[index]};;
            }
        }

        static extraData = (tipologyId) => {
            switch (tipologyId) {
                case 1:
                    return ["Debes", "poner", "aca", "el listado", "de preguntas"];
        
                case 11:
        
                    return "Proporciona una url";
        
                case 25:
                    return ["Debes", "poner", "aca", "el listado", "de preguntas"];
                case 29:
                    return ["Debes", "poner", "aca", "el listado", "de preguntas"];
                    case 36:
                        return "Cada cuantos metros se va tomar la distancia"
                case 37:
                        return "Cada cuantos segundos se va tomar la distancia"
                case 38:
                    return {
                        seconds: "Cada cuantos segundos se va tomar la distancia",
                        meters:  "Cada cuantos metros se va a tomar la distancia"
                    }
                    case 39:
                        return "Id del cliente"
                case 58:
                    return { radius: 'El radio a la redonda de la geocerca', lat: 'latitud de punto centro', lng: 'longitud del punto centro' }
        
                default:
                    return "Aun no se controla esta tipologia"
            }
        }
}

module.exports =  KanbanController;