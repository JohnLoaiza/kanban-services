const express = require('express');
const DbConnect = require('../bd/dbConnect');
const User = require('../models/user');
const KanbanController = require('../controllers/kanbanController');
const { Rol } = require('../models/kanban');


const router = express.Router();


// Obtener roles de un kanban específico
router.get('/:kanbanId', async (req, res) => {
  DbConnect.bdProcess(res, async () => {
    const { kanbanId } = req.params;

    const kanban = await KanbanController.getKanban(kanbanId, false);
    if (kanban) {
      return res.status(200).json({ success: true, roles: kanban.roles});
    } else {
        return res.status(404).json({ success: false});
    }   
  });
});

// Insertar rol
router.post('/:kanbanId', async (req, res) => {
    DbConnect.bdProcess(res, async () => {
        const { kanbanId } = req.params;
        var rol = req.body

        const kanban = await KanbanController.getKanban(kanbanId, false);
        console.log("compara");
        console.log(kanban);
        console.log(rol.name);
        

        if (kanban && rol.name) {
            if (kanban.roles.map((r) => r.name).includes(rol.name)) {
                 res.status(404).json({ success: false, error: "Ya existe un rol con este nombre"});

            } else {
                kanban.roles.push(Rol({name: rol.name}))
                const savedKanban = await kanban.save();
                if (savedKanban) {
                     res.status(200).json({ success: true, updatedRoles: kanban.roles});

                    const notificationData = {
                        kanbanId: parseInt(kanbanId),
                        kanban: kanban,
                        message: 'Se ha actualizado el kanban ' + kanbanId,
                      };  
                      return {
                        eventName: 'updateKanban',
                        data: notificationData
                      }

                } else {
                     res.status(404).json({ success: false, error: "DB error"});
                }
            }
          
        } else {
             res.status(404).json({ success: false, error: "'name' required"});
        }   


    });
  });
  


  module.exports = router;
