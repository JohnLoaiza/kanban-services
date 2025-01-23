

// Object to Lines controller
 class Tipology {
    constructor(props) {
        this.id = props.id;
        this.description = props.description;
        this.active = props.active;
        this.isForm = props.isForm;
        this.taker = props.taker;
    }

    toMap = () => {
        var t = JSON.stringify({
            'id': this.id,
            'taker': this.taker
        });
        return t;
    }

    static tipologiesUpload;

  

    static getFormTipologiesOnly = async () => (await this.getTipologies()).filter((l) => l.isForm === 1);

     // Get lines from CW
     static getTipologies =  () => {
        var list = [
            {
                "id": 1,
                "descripcion": "Formulario",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 2,
                "descripcion": "Buscar servicio",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 3,
                "descripcion": "Buscar cliente",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 4,
                "descripcion": "Buscar producto",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 11,
                "descripcion": "Webview",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 12,
                "descripcion": "Fotos",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 13,
                "descripcion": "Campo adicional",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 16,
                "descripcion": "Geo-referencia",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 17,
                "descripcion": "Georefe y fotos",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 18,
                "descripcion": "Georefe y cronometro",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 19,
                "descripcion": "Cronometro y campo",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 20,
                "descripcion": "Fotos y campo",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 21,
                "descripcion": "Agendar automaticamente",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 22,
                "descripcion": "Archivo de audio",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 23,
                "descripcion": "Turnero",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 24,
                "descripcion": "Georefe y campo",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 25,
                "descripcion": "Georefe y formulario",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 26,
                "descripcion": "Cronometro",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 27,
                "descripcion": "Crear",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 28,
                "descripcion": "Inicio-Cierre",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 29,
                "descripcion": "Fotos y Formulario",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 30,
                "descripcion": "Wallet",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 31,
                "descripcion": "IOT",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 32,
                "descripcion": "Delivery",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 33,
                "descripcion": "Ecommerce",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 34,
                "descripcion": "Ubicacion",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 35,
                "descripcion": "Subir archivo",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 36,
                "descripcion": "Ubicacion distancia",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 37,
                "descripcion": "Ubicacion tiempo",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 38,
                "descripcion": "Ubicacion combinada",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 39,
                "descripcion": "Editar cliente",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 40,
                "descripcion": "Validar QR",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 41,
                "descripcion": "Validar NFC",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 42,
                "descripcion": "Validar Bluetooth ",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 43,
                "descripcion": "Crear NFC",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 44,
                "descripcion": "Crear Bluetooth",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 45,
                "descripcion": "Crear QR",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 46,
                "descripcion": "Reportes",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 47,
                "descripcion": "Crear Tarea",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 48,
                "descripcion": "Repuestero",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 49,
                "descripcion": "Jefe de patio",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 50,
                "descripcion": "Ingreso serviteca",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 51,
                "descripcion": "Almacenista",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 52,
                "descripcion": "Dropshipping",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 53,
                "descripcion": "Publicidad Beacons*",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 54,
                "descripcion": "Crear Publicidad Beacons*",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 55,
                "descripcion": "Crear Publicidad Geocerca*",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 56,
                "descripcion": "Publicidad Geocerca*",
                "activa": 1,
                "encuesta": 1
            },
            {
                "id": 57,
                "descripcion": "Pagos",
                "activa": 1,
                "encuesta": 0
            },
            {
                "id": 58,
                "descripcion": "Geocerca",
                "activa": 1,
                "encuesta": 1
            }
        ];  
                var lineList = [];
                list.forEach(line => {
                    lineList.push(new Tipology({ id: line['id'], description: line['descripcion'], isForm: line['encuesta'], active: line['activa'], taker: true }));
                });
                this.tipologiesUpload = lineList;
        return lineList;
    }
}

module.exports = Tipology;

