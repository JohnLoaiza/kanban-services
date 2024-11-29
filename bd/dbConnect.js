
const mongoose = require('mongoose');
const axios = require('axios');


class DbConnect {

    static db = 'mongodb://localhost/kanbanDB15' //  'mongodb+srv://julian8312:abcd1234@cluster0.vfhqqjt.mongodb.net/chatsolutions?retryWrites=true&w=majority'
    static options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: {
            version: '1', // Equivalente a ServerApiVersion.v1
            strict: true, // Opcional, habilita el modo estricto
            deprecationErrors: true, // Opcional, reporta errores por funciones en desuso
          },
    }
    static socketUrl = 'https://canales.oportuna.red/oportunadanban'

    static open = async () => {
        try {
            await mongoose.connect(this.db, this.options)
            console.log('conectado');
            
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    static close = async () => {
        try {
            await mongoose.disconnect()
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    static bdProcess = async (res, process ) => {
        {
            const isOpen = await this.open()
            if (isOpen) {
              const notifyData =  await process()
              console.log('notify data es');
              console.log(notifyData);
              
                try {
                    const response = await axios.post(this.socketUrl, {
                      actionTodo: notifyData.eventName,
                      data: notifyData.data,
                    });
                    console.log('Notificación enviada:', response.data);
                  } catch (notificationError) {
                    console.error('Error al enviar notificación:', notificationError.message);
                  }
            } else {
                res.status(500).json({ message: 'No se pudo conectar con la BD' });

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