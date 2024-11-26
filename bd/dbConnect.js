
const mongoose = require('mongoose');

class DbConnect {

    static db = 'mongodb+srv://julian8312:abcd1234@cluster0.vfhqqjt.mongodb.net/?retryWrites=true&w=majority'
    static options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: {
            version: '1', // Equivalente a ServerApiVersion.v1
            strict: true, // Opcional, habilita el modo estricto
            deprecationErrors: true, // Opcional, reporta errores por funciones en desuso
          },
    }
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

    static bdProcess = async (res, process) => {
        {
            const isOpen = await this.open()
            if (isOpen) {
                await process()

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