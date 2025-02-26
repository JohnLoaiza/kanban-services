const mongoose = require('mongoose');
const axios = require('axios');

class DbConnect {
    static db = 'mongodb+srv://julian8312:abcd1234@cluster0.vfhqqjt.mongodb.net/chatsolutions?retryWrites=true&w=majority';
    static options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: {
            version: '1',
            strict: true,
            deprecationErrors: true,
        },
    };
    static socketUrl = 'https://canales.oportuna.red/oportunadanban';
    static dbCloseTimeout = null; // Temporizador para cerrar la BD
    static isConnected = false; // Estado de conexión

    static async open() {
        if (this.isConnected) {
            console.log('⚡ BD ya está conectada. Reiniciando temporizador...');
            this.resetCloseTimer();
            return true;
        }

        try {
            await mongoose.connect(this.db, this.options);
            this.isConnected = true;
            console.log('✅ Conectado a la BD');
            this.resetCloseTimer(); // Inicia el temporizador después de conectar
            return true;
        } catch (error) {
            console.error('❌ Error al conectar la BD:', error);
            return false;
        }
    }

    static resetCloseTimer() {
        // Si ya hay un temporizador activo, lo reinicia
        if (this.dbCloseTimeout) {
            clearTimeout(this.dbCloseTimeout);
        }

        // Programa el cierre de la BD en 10 segundos
        this.dbCloseTimeout = setTimeout(async () => {
            await this.close();
        }, 10000);

        console.log('⏳ Temporizador reiniciado para cerrar la BD en 10 segundos...');
    }

    static async close() {
        if (!this.isConnected) return;

        try {
            await mongoose.disconnect();
            this.isConnected = false;
            console.log('🔒 BD cerrada por inactividad');
        } catch (error) {
            console.error('❌ Error al cerrar la BD:', error);
        }
    }

    static async bdProcess(res, process) {
        try {
            const isOpen = await this.open();
            if (!isOpen) {
                res.status(500).json({ message: 'No se pudo conectar con la BD' });
                return;
            }

            const notifyData = await process();
            if (notifyData == null) return;
            console.log('📢 Notificación enviada:', notifyData);

            try {
                await axios.post(this.socketUrl, {
                    actionTodo: notifyData.eventName,
                    data: notifyData.data,
                    resId: parseInt(Math.random()*9000000+1000000)
                    
                });
            } catch (notificationError) {
                console.error('❌ Error al enviar notificación:', notificationError);
            }

            // Reinicia el temporizador para evitar el cierre prematuro
            this.resetCloseTimer();
        } catch (error) {
            console.error('❌ Error en bdProcess:', error);
            res.status(500).json({ success: false, message: 'No se pudo procesar la base de datos', info: error });
        }
    }
}

module.exports = DbConnect;
