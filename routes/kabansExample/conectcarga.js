

export const conectcarga = [
    {
        "uid": 100001,
        "nombre": "Nuevo",
        "columns": [
            {
                "uid": 100001,
                "title": "Verificación",
                "tasks": [
                  {
                    "uid": 200001,
                    "baseId": 600001,
                    "title": "Verificar serv.",
                    "description": "El conductor verifica todos los datos del servicio y notifica que hara el servicio",
                    "tags": [
                      {
                        "uid": 300001,
                        "name": "Inicio",
                        "color": "#207AE8"
                      }
                    ],
                    "priority": "high",
                    "requerimentGroups": [
                      {
                        "uid": 400001,
                        "nextTaskId": 600002,
                        "active": true,
                        "title": "Continuar",
                        "requeriments": [
                            500001,
                            500002
                        ]
                      },
                      {
                        "uid": 400002,
                        "nextTaskId": 600003,
                        "active": true,
                        "title": "Cancelar",
                        "requeriments": [
                            500003
                        ]
                      }
                    ],
                    "requeriments": [
                      {
                        "uid": 500001,
                        "title": "Ruta",
                        "desp": "Ruta ingresada correctamente",
                        "file": "",
                        "finished": false,
                        "finishedDate": 0,
                        "mandatoryFile": false
                      },
                      {
                        "uid": 500002,
                        "title": "Valor",
                        "desp": "El valor ofrecido concuerda con la distancia y carga",
                        "file": "",
                        "finished": false,
                        "finishedDate": 0,
                        "mandatoryFile": false
                      },
                      {
                        "uid": 500003,
                        "title": "Cancelación",
                        "desp": "Conductor cancela toma de servicio",
                        "file": "",
                        "finished": false,
                        "finishedDate": 0,
                        "mandatoryFile": true
                      }
                    ],
                    "history": [],
                    "initDate": 1728661751346,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                  }
                ],
                "adminTasks": [
                  {
                    "uid": 600001,
                    "baseId": 0,
                    "title": "Verificar serv.",
                    "description": "El conductor verifica todos los datos del servicio y notifica que hara el servicio",
                    "tags": [
                      {
                        "uid": 700001,
                        "name": "Inicio",
                        "color": "#207AE8"
                      }
                    ],
                    "priority": "high",
                    "requerimentGroups": [
                      {
                        "uid": 800001,
                        "nextTaskId": 4851686,
                        "active": true,
                        "title": "Requisitos 1",
                        "requeriments": [
                            900001,
                            900002
                        ]
                      },
                      {
                        "uid": 800002,
                        "nextTaskId": 5221845,
                        "active": true,
                        "title": "Requisitos 2",
                        "requeriments": [
                            900003
                        ]
                      }
                    ],
                    "requeriments": [
                      {
                        "uid": 900001,
                        "title": "Ruta",
                        "desp": "Ruta ingresada correctamente",
                        "file": "",
                        "finished": false,
                        "finishedDate": 0,
                        "mandatoryFile": false,
                        "tipologyId": 12
                      },
                      {
                        "uid": 900002,
                        "title": "Valor",
                        "desp": "El valor ofrecido concuerda con la distancia y carga",
                        "file": "",
                        "finished": false,
                        "finishedDate": 0,
                        "mandatoryFile": false,
                        "tipologyId": 1
                      },
                      {
                        "uid": 900003,
                        "title": "Cancelación",
                        "desp": "Conductor cancela toma de servicio",
                        "file": "",
                        "finished": false,
                        "finishedDate": 0,
                        "mandatoryFile": true,
                        "tipologyId": 16
                      }
                    ],
                    "history": [],
                    "initDate": 1728661751346,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                  }
                ],
                "autoFinish": false,
                "filters": {
                  "filter1": "",
                  "filter2": "",
                  "filter3": "",
                  "filter4": false,
                  "filter5": false,
                  "filter6": ""
                }
              },


              {
                "uid": 100002,
                "title": "Recoger",
                "tasks": [],
                "adminTasks": [
                  {
                    "uid": 600002,
                    "baseId": 0,
                    "title": "Recoge",
                    "description": "El conductor llega al lugar de entrega del paquete",
                    "tags": [
                      {
                        "uid": 700002,
                        "name": "En proceso",
                        "color": "#21e853"
                      }
                    ],
                    "priority": "high",
                    "requerimentGroups": [
                      {
                        "uid": 800003,
                        "nextTaskId": 700002,
                        "active": true,
                        "title": "Continuar",
                        "requeriments": [
                            900004
                        ]
                      },
                      {
                        "uid": 800004,
                        "nextTaskId": 700003,
                        "active": true,
                        "title": "Error en paquete",
                        "requeriments": [
                            900005
                        ]
                      }
                    ],
                    "requeriments": [
                      {
                        "uid": 900004,
                        "title": "Revisión",
                        "desp": "Conductor revisa que el estado del paquete y adjunta foto",
                        "file": "",
                        "finished": false,
                        "finishedDate": 0,
                        "mandatoryFile": true
                      },
                      {
                        "uid": 900005,
                        "title": "Cancelación",
                        "desp": "Error con el servicio al revisar paquete",
                        "file": "",
                        "finished": false,
                        "finishedDate": 0,
                        "mandatoryFile": false
                      }
                    ],
                    "history": [],
                    "initDate": 1728662264120,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                  },
                  {
                    "uid": 600003,
                    "baseId": 0,
                    "title": "Cancelado",
                    "description": "Al verificar el servicio el conductor decide que no esta optimo para realizarlo",
                    "tags": [
                      {
                        "uid": 700003,
                        "name": "Cancelado",
                        "color": "#e8215d"
                      }
                    ],
                    "priority": "low",
                    "requerimentGroups": [
                      {
                        "uid": 800005,
                        "nextTaskId": 0,
                        "active": true,
                        "title": "Cancelar",
                        "requeriments": [
                            900006
                        ]
                      }
                    ],
                    "requeriments": [
                      {
                        "uid": 900006,
                        "title": "Cancelación",
                        "desp": "El conductor cancela el servicio debido a que no está disponible",
                        "file": "",
                        "finished": false,
                        "finishedDate": 0,
                        "mandatoryFile": true
                      }
                    ],
                    "history": [],
                    "initDate": 1728661751346,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Cancelado"
                  }
                ],
                "autoFinish": false,
                "filters": {
                  "filter1": "Otro filtro",
                  "filter2": "Filtro 2",
                  "filter3": "F3",
                  "filter4": true,
                  "filter5": false,
                  "filter6": "F6"
                }
              },



            {
                "uid": 100003,

                "filters": {
                    "filter1": "",
                    "filter2": "",
                    "filter3": "",
                    "filter4": false,
                    "filter5": false,
                    "filter6": ""
                },
                "title": "Entrega",
                "tasks": [],
                "adminTasks": [
                    {
                        "uid": 700002,
                        "baseId": 0,
                        "title": "Final ruta",
                        "description": "El conductor llega al lugar de entrega con el paquete",
                        "tags": [
                            {
                                "name": "En proceso",
                                "color": "#3be83e",
                                "uid": 800002
                            }
                        ],
                        "priority": "high",
                        "requerimentGroups": [
                            {
                                "nextTaskId": 700003,
                                "active": true,
                                "title": "Entrega exitosa",
                                "requeriments": [
                                    9000004,
                                    9000005
                                ],
                                "uid": 900004
                            },
                            {
                                "nextTaskId": 1309714,
                                "active": true,
                                "title": "Devolución",
                                "requeriments": [
                                    9000004,
                                    9000006
                                ],
                                "uid": 900005
                            },
                            {
                                "nextTaskId": 3352354,
                                "active": true,
                                "title": "Error",
                                "requeriments": [
                                    9000004,
                                    9000007
                                ],
                                "uid": 900006
                            }
                        ],
                        "requeriments": [
                            {
                                "uid": 9000004,
                                "title": "Foto",
                                "desp": "Foto del lugar de entrega",
                                "file": "",
                                "finished": false,
                                "finishedDate": 0,
                                "mandatoryFile": true
                            },
                            {
                                "uid": 9000005,
                                "title": "Destinatario",
                                "desp": "Destinatario confirma que la entrega esta correcta",
                                "file": "",
                                "finished": false,
                                "finishedDate": 0,
                                "mandatoryFile": false
                            },
                            {
                                "uid": 9000006,

                                "title": "No resiven",
                                "desp": "Al llegar al lugar de entrega no hay destinatario para resivir paquete",
                                "file": "",
                                "finished": false,
                                "finishedDate": 0,
                                "mandatoryFile": false
                            },
                            {
                                "uid": 9000007,

                                "title": "No paquete",
                                "desp": "Hay un error o problema con el paquete de entrega",
                                "file": "",
                                "finished": false,
                                "finishedDate": 0,
                                "mandatoryFile": true
                            }
                        ],
                        "history": [],
                        "initDate": 1728662992714,
                        "movements": [],
                        "tipologies": [],
                        "prerequisites": [],
                        "state": "Estado 1"
                    },
                    {
                        "uid": 700003,
                        "baseId": 0,
                        "title": "Cancelado",
                        "description": "Cancelan servicio luego de conductor llegar por paquete",
                        "tags": [
                            {
                                "name": "Cancelado",
                                "color": "#e82149",
                                "uid": 900002

                            }
                        ],
                        "priority": "low",
                        "requerimentGroups": [],
                        "requeriments": [],
                        "history": [],
                        "initDate": 1728663265390,
                        "movements": [],
                        "tipologies": [],
                        "prerequisites": [],
                        "state": "Estado 1"
                    }
                ],
                "autoFinish": false
            },



            {
                "uid": 100004,

                "filters": {
                    "filter1": "",
                    "filter2": "",
                    "filter3": "",
                    "filter4": false,
                    "filter5": false,
                    "filter6": ""
                },
                "title": "Calificación",
                "tasks": [],
                "adminTasks": [
                    {
                        "uid": 100002,
                        "baseId": 0,
                        "title": "Calificar",
                        "description": "El servicio se ha hecho todo correctamente y se proce a hacer una calificación de este.",
                        "tags": [
                            {
                                "name": "Final",
                                "color": "#21e8ac",
                                "uid": 900002
                            }
                        ],
                        "priority": "low",
                        "requerimentGroups": [
                            {
                                "nextTaskId": 3020295,
                                "active": true,
                                "title": "Requisitos 1",
                                "requeriments": [
                                    9000004,
                                    9000005
                                ],
                                "uid": 900004
                            }
                        ],
                        "requeriments": [
                            {
                                "uid": 9000004,

                                "title": "Conductor",
                                "desp": "Distinatario califica al conductor",
                                "file": "",
                                "finished": false,
                                "finishedDate": 0,
                                "mandatoryFile": false
                            },
                                                    
                            {
                                "uid": 9000005,
                                "title": "Remitente",
                                "desp": "Conductor califica al remitente",
                                "file": "",
                                "finished": false,
                                "finishedDate": 0,
                                "mandatoryFile": false
                            }
                        ],
                        "history": [],
                        "initDate": 1728663497674,
                        "movements": [],
                        "tipologies": [],
                        "prerequisites": [],
                        "state": "Estado 1"
                    },
                    {
                        "uid": 100003,
                        "baseId": 0,
                        "title": "No destinatario",
                        "description": "El conductor reporta que al llegar al lugar de entrega no hay destinatario para resivir",
                        "tags": [
                            {
                                "name": "Retornar",
                                "color": "#e8b321",
                                "uid": 100004
                            }
                        ],
                        "priority": "medium",
                        "requerimentGroups": [
                            {
                                "nextTaskId": 2846362,
                                "active": true,
                                "title": "Requisitos 1",
                                "requeriments": [
                                    "4602625"
                                ],
                                "uid": 1000053
                            }
                        ],
                        "requeriments": [
                            {
                                "uid": 1000043,

                                "title": "Devolver",
                                "desp": "Conductor devuelve paquete a remitente",
                                "file": "",
                                "finished": false,
                                "finishedDate": 0,
                                "mandatoryFile": false
                            }
                        ],
                        "history": [],
                        "initDate": 1728663840562,
                        "movements": [],
                        "tipologies": [],
                        "prerequisites": [],
                        "state": "Estado 1"
                    },
                    {
                        "uid": 100004,
                        "baseId": 0,
                        "title": "Error paquete",
                        "description": "Al llegar a entregar el paquete destinatario reporta error con el paquete y pide devolverlo",
                        "tags": [
                            {
                                "name": "Retornar",
                                "color": "#ebd914",
                                "uid": 1200004
                            }
                        ],
                        "priority": "medium",
                        "requerimentGroups": [
                            {
                                "nextTaskId": 10000002,
                                "active": true,
                                "title": "Requisitos 1",
                                "requeriments": [
                                    120000567
                                ],
                                "uid": 12000056
                            }
                        ],
                        "requeriments": [
                            {
                                "uid": 120000567,
                                "title": "Retornar",
                                "desp": "Conductor devuelve paquete a remitente",
                                "file": "",
                                "finished": false,
                                "finishedDate": 0,
                                "mandatoryFile": false
                            }
                        ],
                        "history": [],
                        "initDate": 1728664173511,
                        "movements": [],
                        "tipologies": [],
                        "prerequisites": [],
                        "state": "Estado 1"
                    }
                ],
                "autoFinish": false
            },
            {
                "uid": 100005,

                "filters": {
                    "filter1": "",
                    "filter2": "",
                    "filter3": "",
                    "filter4": false,
                    "filter5": false,
                    "filter6": ""
                },
                "title": "Finalizado",
                "tasks": [],
                "adminTasks": [
                    {
                        "uid": 10000002,
                        "baseId": 0,
                        "title": "Entregado",
                        "description": "Se realiza la calificación y se cierra servicio",
                        "tags": [
                            {
                                "name": "Finalizado",
                                "color": "#21e867",
                                "uid": 90000002

                            }
                        ],
                        "priority": "low",
                        "requerimentGroups": [],
                        "requeriments": [],
                        "history": [],
                        "initDate": 1728664318319,
                        "movements": [],
                        "tipologies": [],
                        "prerequisites": [],
                        "state": "Estado 1"
                    },
                    {
                        "uid": 10000002,
                        "baseId": 0,
                        "title": "Fin (Error)",
                        "description": "Se tiene problemas con la entrega final y se retorna paquete a remitente y se cierra servicio",
                        "tags": [
                            {
                                "name": "Error",
                                "color": "#e8213f",
                                "uid": 78000002
                            }
                        ],
                        "priority": "low",
                        "requerimentGroups": [],
                        "requeriments": [],
                        "history": [],
                        "initDate": 1728664384055,
                        "movements": [],
                        "tipologies": [],
                        "prerequisites": [],
                        "state": "Estado 1"
                    }
                ],
                "autoFinish": false
            }
        ],
        "__v": 24
    }
]