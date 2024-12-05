const express = require('express');
const router = express.Router();
const DbConnect = require('../bd/dbConnect');


router.post('/', async (req, res) => {
    DbConnect.bdProcess(res, async () => {
      const  data  = req.body;
  
      console.log('llega notificacion al webhook', data);
      const newData = updateData(data.tipologyId, data.data)

      res.status(200).json({success: true});
    });
  });

  const updateData = (tipologyId, data) => {
    switch (tipologyId) {
        case value:
            
            break;
    
        default:
            break;
    }
  }

  module.exports = router;