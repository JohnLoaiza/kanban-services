
const mongoose = require('mongoose');

class DbConnect {

    static db = 'mongodb://localhost/kanbanDB'
    static options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    static open = async () => {
        try {
            await mongoose.connect(this.db, this.options)
            return true
        } catch (error) {
            return false
        }
    }

    static close = async () => {
        try {
            await mongoose.disconnect()
            return true
        } catch (error) {
            return false
        }
    }

    static bdProcess =  async(res, process) => {
        {
            const isOpen = await this.open()
            if (isOpen) {

           await  process()
            } else {
              res.status(500).json({ message: 'No se pudo conectar con la BD'});
          
            }
           const isClose = await this.close()
           if (isClose) {
            console.log('Cerró bd');
            
           } else {
            console.log('No se pudo cerrar bd');
            
           }
          }
    }
}

module.exports = DbConnect;