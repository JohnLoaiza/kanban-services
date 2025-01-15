

export const devTasks =   {
    "id": 64,
    "nombre": "Tareas Devs",
    "columns": [
        {
            "id": 4133317,
            "filters": {
                "filter1": "",
                "filter2": "",
                "filter3": "",
                "filter4": false,
                "filter5": false,
                "filter6": ""
            },
            "title": "Asignada",
            "tasks": [],
            "adminTasks": [
                {
                    "id": 9750696,
                    "baseId": 0,
                    "title": "Tarea listada",
                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                    "tags": [],
                    "priority": "low",
                    "requerimentGroups": [
                        {
                            "id": 7578832,
                            "nextTaskId": 7240036,
                            "active": true,
                            "title": "Requisitos 1",
                            "requeriments": [
                                2740269
                            ]
                        },
                        {
                            "id": 3151767,
                            "nextTaskId": 3404622,
                            "active": true,
                            "title": "Requisitos 2",
                            "requeriments": [
                                3786429
                            ]
                        }
                    ],
                    "requeriments": [
                        {
                            "id": 2740269,
                            "title": "Revisión",
                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                            "file": "",
                            "finished": false,
                            "finishedDate": 0,
                            "mandatoryFile": false,
                            "tipologyId": 16
                        },
                        {
                            "id": 3786429,
                            "title": "Cancela",
                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                            "file": "",
                            "finished": false,
                            "finishedDate": 0,
                            "mandatoryFile": false,
                            "tipologyId": 24
                        }
                    ],
                    "history": [],
                    "initDate": 1733164662331,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                }
            ],
            "autoFinish": false
        },
        {
            "id": 7987022,
            "filters": {
                "filter1": "",
                "filter2": "",
                "filter3": "",
                "filter4": false,
                "filter5": false,
                "filter6": ""
            },
            "title": "Iniciada",
            "tasks": [
                {
                    "id": 15031657649426400000,
                    "baseId": 3404622,
                    "title": "Cancelada",
                    "description": "Se llegó a la conclusión que no era una tarea requerida",
                    "tags": [
                        {
                            "id": 5964363,
                            "name": "Esteban",
                            "color": "#bd21e8"
                        }
                    ],
                    "priority": "high",
                    "requerimentGroups": [],
                    "requeriments": [],
                    "history": [
                        {
                            "columnId": 4133317,
                            "taskVersion": [
                                {
                                    "id": 15031657649426400000,
                                    "baseId": 9750696,
                                    "title": "Tarea listada",
                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                    "tags": [
                                        {
                                            "id": 5964363,
                                            "name": "Esteban",
                                            "color": "#bd21e8"
                                        }
                                    ],
                                    "priority": "low",
                                    "requerimentGroups": [
                                        {
                                            "id": 7578832,
                                            "nextTaskId": 7240036,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                2740269
                                            ]
                                        },
                                        {
                                            "id": 3151767,
                                            "nextTaskId": 3404622,
                                            "active": true,
                                            "title": "Requisitos 2",
                                            "requeriments": [
                                                3786429
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 2740269,
                                            "title": "Revisión",
                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": 16
                                        },
                                        {
                                            "id": 3786429,
                                            "title": "Cancela",
                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168293381,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        }
                                    ],
                                    "history": [],
                                    "initDate": 1733164662331,
                                    "movements": [],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0caad16f603713ad0c69"
                        }
                    ],
                    "initDate": 1733164662331,
                    "movements": [
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna Iniciada"
                        }
                    ],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                }
            ],
            "adminTasks": [
                {
                    "id": 7240036,
                    "baseId": 0,
                    "title": "1er vistazo",
                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                    "tags": [],
                    "priority": "medium",
                    "requerimentGroups": [
                        {
                            "id": 1150249,
                            "nextTaskId": 7857158,
                            "active": true,
                            "title": "Requisitos 1",
                            "requeriments": [
                                6249748
                            ]
                        }
                    ],
                    "requeriments": [
                        {
                            "id": 6249748,
                            "title": "Seguimiento",
                            "desp": "URL donde se pueda dar seguimiento a los avances",
                            "file": "",
                            "finished": false,
                            "finishedDate": 0,
                            "mandatoryFile": false,
                            "tipologyId": 24
                        }
                    ],
                    "history": [],
                    "initDate": 1733165505802,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                },
                {
                    "id": 3404622,
                    "baseId": 0,
                    "title": "Cancelada",
                    "description": "Se llegó a la conclusión que no era una tarea requerida",
                    "tags": [],
                    "priority": "high",
                    "requerimentGroups": [],
                    "requeriments": [],
                    "history": [],
                    "initDate": 1733166461920,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                }
            ],
            "autoFinish": false
        },
        {
            "id": 9165006,
            "filters": {
                "filter1": "",
                "filter2": "",
                "filter3": "",
                "filter4": false,
                "filter5": false,
                "filter6": ""
            },
            "title": "En proceso",
            "tasks": [],
            "adminTasks": [
                {
                    "id": 7857158,
                    "baseId": 0,
                    "title": "Prioridad",
                    "description": "El desarrollador notifica que ha empezado full con la tarea y esta enfocando la mayor parte de su trabajo en ella",
                    "tags": [],
                    "priority": "high",
                    "requerimentGroups": [
                        {
                            "id": 1288862,
                            "nextTaskId": 7018767,
                            "active": true,
                            "title": "Requisitos 1",
                            "requeriments": [
                                6819823
                            ]
                        }
                    ],
                    "requeriments": [
                        {
                            "id": 6819823,
                            "title": "Seguimiento",
                            "desp": "URL de un repositorio u otro medio que permite darle seguimiento a todos los avances",
                            "file": "",
                            "finished": false,
                            "finishedDate": 0,
                            "mandatoryFile": false,
                            "tipologyId": null
                        }
                    ],
                    "history": [],
                    "initDate": 1733166674288,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                }
            ],
            "autoFinish": false
        },
        {
            "id": 4724982,
            "filters": {
                "filter1": "",
                "filter2": "",
                "filter3": "",
                "filter4": false,
                "filter5": false,
                "filter6": ""
            },
            "title": "En revisión",
            "tasks": [],
            "adminTasks": [
                {
                    "id": 7018767,
                    "baseId": 0,
                    "title": "Supervisor",
                    "description": "El supervisor de las tareas revisa el producto final para verificar que efectivamente se haya cumplido con todo lo solicitado",
                    "tags": [],
                    "priority": "medium",
                    "requerimentGroups": [
                        {
                            "id": 7082116,
                            "nextTaskId": 5191615,
                            "active": true,
                            "title": "Requisitos 1",
                            "requeriments": [
                                7003660,
                                4874109
                            ]
                        },
                        {
                            "id": 2443113,
                            "nextTaskId": 1387549,
                            "active": true,
                            "title": "Requisitos 2",
                            "requeriments": [
                                9380672,
                                4874109
                            ]
                        },
                        {
                            "id": 6360884,
                            "nextTaskId": 7103696,
                            "active": true,
                            "title": "Requisitos 3",
                            "requeriments": [
                                8561612,
                                4874109
                            ]
                        }
                    ],
                    "requeriments": [
                        {
                            "id": 7003660,
                            "title": "Correcto",
                            "desp": "Supervisor notifica que todo esta correcto",
                            "file": "",
                            "finished": false,
                            "finishedDate": 0,
                            "mandatoryFile": false,
                            "tipologyId": null
                        },
                        {
                            "id": 8561612,
                            "title": "Incorrecto",
                            "desp": "Supervisor indica que el producto final no es lo que se pidió",
                            "file": "",
                            "finished": false,
                            "finishedDate": 0,
                            "mandatoryFile": false,
                            "tipologyId": 13
                        },
                        {
                            "id": 9380672,
                            "title": "Falta",
                            "desp": "Supervisor indica que la tarea aun le falta por terminar",
                            "file": "",
                            "finished": false,
                            "finishedDate": 0,
                            "mandatoryFile": false,
                            "tipologyId": 13
                        },
                        {
                            "id": 4874109,
                            "title": "Lugar",
                            "desp": "Supervisor indica que esta en su lugar de trabajo",
                            "file": "",
                            "finished": false,
                            "finishedDate": 0,
                            "mandatoryFile": false,
                            "tipologyId": 16
                        }
                    ],
                    "history": [],
                    "initDate": 1733167024967,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                }
            ],
            "autoFinish": false
        },
        {
            "id": 1,
            "filters": {
                "filter1": "",
                "filter2": "",
                "filter3": "",
                "filter4": false,
                "filter5": false,
                "filter6": ""
            },
            "title": "Finalizado",
            "tasks": [
                {
                    "id": 12275385696460937000,
                    "baseId": 5191615,
                    "title": "Correctamente",
                    "description": "La tarea ha sido finalizada satisfactoriamente",
                    "tags": [
                        {
                            "id": 7851207,
                            "name": "John",
                            "color": "#207AE8"
                        }
                    ],
                    "priority": "low",
                    "requerimentGroups": [],
                    "requeriments": [],
                    "history": [
                        {
                            "columnId": 4133317,
                            "taskVersion": [
                                {
                                    "id": 12275385696460937000,
                                    "baseId": 9750696,
                                    "title": "Tarea listada",
                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                    "tags": [
                                        {
                                            "id": 7851207,
                                            "name": "John",
                                            "color": "#207AE8"
                                        }
                                    ],
                                    "priority": "low",
                                    "requerimentGroups": [
                                        {
                                            "id": 7578832,
                                            "nextTaskId": 7240036,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                2740269
                                            ]
                                        },
                                        {
                                            "id": 3151767,
                                            "nextTaskId": 3404622,
                                            "active": true,
                                            "title": "Requisitos 2",
                                            "requeriments": [
                                                3786429
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 2740269,
                                            "title": "Revisión",
                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168215229,
                                            "mandatoryFile": false,
                                            "tipologyId": 16
                                        },
                                        {
                                            "id": 3786429,
                                            "title": "Cancela",
                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        }
                                    ],
                                    "history": [],
                                    "initDate": 1733164662331,
                                    "movements": [],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0c62d16f603713ad09d8"
                        },
                        {
                            "columnId": 7987022,
                            "taskVersion": [
                                {
                                    "id": 12275385696460937000,
                                    "baseId": 7240036,
                                    "title": "1er vistazo",
                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                    "tags": [
                                        {
                                            "id": 7851207,
                                            "name": "John",
                                            "color": "#207AE8"
                                        }
                                    ],
                                    "priority": "medium",
                                    "requerimentGroups": [
                                        {
                                            "id": 1150249,
                                            "nextTaskId": 7857158,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                6249748
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 6249748,
                                            "title": "Seguimiento",
                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168229317,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        }
                                    ],
                                    "history": [
                                        {
                                            "columnId": 4133317,
                                            "taskVersion": [
                                                {
                                                    "id": 12275385696460937000,
                                                    "baseId": 9750696,
                                                    "title": "Tarea listada",
                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                    "tags": [
                                                        {
                                                            "id": 7851207,
                                                            "name": "John",
                                                            "color": "#207AE8"
                                                        }
                                                    ],
                                                    "priority": "low",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 7578832,
                                                            "nextTaskId": 7240036,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                2740269
                                                            ]
                                                        },
                                                        {
                                                            "id": 3151767,
                                                            "nextTaskId": 3404622,
                                                            "active": true,
                                                            "title": "Requisitos 2",
                                                            "requeriments": [
                                                                3786429
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 2740269,
                                                            "title": "Revisión",
                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168215229,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 16
                                                        },
                                                        {
                                                            "id": 3786429,
                                                            "title": "Cancela",
                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                            "file": "",
                                                            "finished": false,
                                                            "finishedDate": 0,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [],
                                                    "initDate": 1733164662331,
                                                    "movements": [],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04MYtFvYDcTrQnY"
                                            }
                                        }
                                    ],
                                    "initDate": 1733164662331,
                                    "movements": [
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna Iniciada"
                                        }
                                    ],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0c70d16f603713ad0a62"
                        },
                        {
                            "columnId": 9165006,
                            "taskVersion": [
                                {
                                    "id": 12275385696460937000,
                                    "baseId": 7857158,
                                    "title": "Prioridad",
                                    "description": "El desarrollador notifica que ha empezado full con la tarea y esta enfocando la mayor parte de su trabajo en ella",
                                    "tags": [
                                        {
                                            "id": 7851207,
                                            "name": "John",
                                            "color": "#207AE8"
                                        }
                                    ],
                                    "priority": "high",
                                    "requerimentGroups": [
                                        {
                                            "id": 1288862,
                                            "nextTaskId": 7018767,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                6819823
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 6819823,
                                            "title": "Seguimiento",
                                            "desp": "URL de un repositorio u otro medio que permite darle seguimiento a todos los avances",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168246493,
                                            "mandatoryFile": false,
                                            "tipologyId": null
                                        }
                                    ],
                                    "history": [
                                        {
                                            "columnId": 4133317,
                                            "taskVersion": [
                                                {
                                                    "id": 12275385696460937000,
                                                    "baseId": 9750696,
                                                    "title": "Tarea listada",
                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                    "tags": [
                                                        {
                                                            "id": 7851207,
                                                            "name": "John",
                                                            "color": "#207AE8"
                                                        }
                                                    ],
                                                    "priority": "low",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 7578832,
                                                            "nextTaskId": 7240036,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                2740269
                                                            ]
                                                        },
                                                        {
                                                            "id": 3151767,
                                                            "nextTaskId": 3404622,
                                                            "active": true,
                                                            "title": "Requisitos 2",
                                                            "requeriments": [
                                                                3786429
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 2740269,
                                                            "title": "Revisión",
                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168215229,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 16
                                                        },
                                                        {
                                                            "id": 3786429,
                                                            "title": "Cancela",
                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                            "file": "",
                                                            "finished": false,
                                                            "finishedDate": 0,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [],
                                                    "initDate": 1733164662331,
                                                    "movements": [],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04MYtFvYDcTrQnY"
                                            }
                                        },
                                        {
                                            "columnId": 7987022,
                                            "taskVersion": [
                                                {
                                                    "id": 12275385696460937000,
                                                    "baseId": 7240036,
                                                    "title": "1er vistazo",
                                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                                    "tags": [
                                                        {
                                                            "id": 7851207,
                                                            "name": "John",
                                                            "color": "#207AE8"
                                                        }
                                                    ],
                                                    "priority": "medium",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 1150249,
                                                            "nextTaskId": 7857158,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                6249748
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 6249748,
                                                            "title": "Seguimiento",
                                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168229317,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [
                                                        {
                                                            "columnId": 4133317,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 12275385696460937000,
                                                                    "baseId": 9750696,
                                                                    "title": "Tarea listada",
                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                    "tags": [
                                                                        {
                                                                            "id": 7851207,
                                                                            "name": "John",
                                                                            "color": "#207AE8"
                                                                        }
                                                                    ],
                                                                    "priority": "low",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 7578832,
                                                                            "nextTaskId": 7240036,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                2740269
                                                                            ]
                                                                        },
                                                                        {
                                                                            "id": 3151767,
                                                                            "nextTaskId": 3404622,
                                                                            "active": true,
                                                                            "title": "Requisitos 2",
                                                                            "requeriments": [
                                                                                3786429
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 2740269,
                                                                            "title": "Revisión",
                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168215229,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 16
                                                                        },
                                                                        {
                                                                            "id": 3786429,
                                                                            "title": "Cancela",
                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                            "file": "",
                                                                            "finished": false,
                                                                            "finishedDate": 0,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04MYtFvYDcTrQnY",
                                                                    "position": 12
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "initDate": 1733164662331,
                                                    "movements": [
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna Iniciada"
                                                        }
                                                    ],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04McNFvYDcTrQpi"
                                            }
                                        }
                                    ],
                                    "initDate": 1733164662331,
                                    "movements": [
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna Iniciada"
                                        },
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna En proceso"
                                        }
                                    ],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0c7cd16f603713ad0af3"
                        },
                        {
                            "columnId": 4724982,
                            "taskVersion": [
                                {
                                    "id": 12275385696460937000,
                                    "baseId": 7018767,
                                    "title": "Supervisor",
                                    "description": "El supervisor de las tareas revisa el producto final para verificar que efectivamente se haya cumplido con todo lo solicitado",
                                    "tags": [
                                        {
                                            "id": 7851207,
                                            "name": "John",
                                            "color": "#207AE8"
                                        }
                                    ],
                                    "priority": "medium",
                                    "requerimentGroups": [
                                        {
                                            "id": 7082116,
                                            "nextTaskId": 5191615,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                7003660
                                            ]
                                        },
                                        {
                                            "id": 2443113,
                                            "nextTaskId": 1387549,
                                            "active": true,
                                            "title": "Requisitos 2",
                                            "requeriments": [
                                                9380672
                                            ]
                                        },
                                        {
                                            "id": 6360884,
                                            "nextTaskId": 7103696,
                                            "active": true,
                                            "title": "Requisitos 3",
                                            "requeriments": [
                                                8561612
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 7003660,
                                            "title": "Correcto",
                                            "desp": "Supervisor notifica que todo esta correcto",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168259517,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        },
                                        {
                                            "id": 8561612,
                                            "title": "Incorrecto",
                                            "desp": "Supervisor indica que el producto final no es lo que se pidió",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        },
                                        {
                                            "id": 9380672,
                                            "title": "Falta",
                                            "desp": "Supervisor indica que la tarea aun le falta por terminar",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        }
                                    ],
                                    "history": [
                                        {
                                            "columnId": 4133317,
                                            "taskVersion": [
                                                {
                                                    "id": 12275385696460937000,
                                                    "baseId": 9750696,
                                                    "title": "Tarea listada",
                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                    "tags": [
                                                        {
                                                            "id": 7851207,
                                                            "name": "John",
                                                            "color": "#207AE8"
                                                        }
                                                    ],
                                                    "priority": "low",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 7578832,
                                                            "nextTaskId": 7240036,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                2740269
                                                            ]
                                                        },
                                                        {
                                                            "id": 3151767,
                                                            "nextTaskId": 3404622,
                                                            "active": true,
                                                            "title": "Requisitos 2",
                                                            "requeriments": [
                                                                3786429
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 2740269,
                                                            "title": "Revisión",
                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168215229,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 16
                                                        },
                                                        {
                                                            "id": 3786429,
                                                            "title": "Cancela",
                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                            "file": "",
                                                            "finished": false,
                                                            "finishedDate": 0,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [],
                                                    "initDate": 1733164662331,
                                                    "movements": [],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04MYtFvYDcTrQnY"
                                            }
                                        },
                                        {
                                            "columnId": 7987022,
                                            "taskVersion": [
                                                {
                                                    "id": 12275385696460937000,
                                                    "baseId": 7240036,
                                                    "title": "1er vistazo",
                                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                                    "tags": [
                                                        {
                                                            "id": 7851207,
                                                            "name": "John",
                                                            "color": "#207AE8"
                                                        }
                                                    ],
                                                    "priority": "medium",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 1150249,
                                                            "nextTaskId": 7857158,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                6249748
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 6249748,
                                                            "title": "Seguimiento",
                                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168229317,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [
                                                        {
                                                            "columnId": 4133317,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 12275385696460937000,
                                                                    "baseId": 9750696,
                                                                    "title": "Tarea listada",
                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                    "tags": [
                                                                        {
                                                                            "id": 7851207,
                                                                            "name": "John",
                                                                            "color": "#207AE8"
                                                                        }
                                                                    ],
                                                                    "priority": "low",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 7578832,
                                                                            "nextTaskId": 7240036,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                2740269
                                                                            ]
                                                                        },
                                                                        {
                                                                            "id": 3151767,
                                                                            "nextTaskId": 3404622,
                                                                            "active": true,
                                                                            "title": "Requisitos 2",
                                                                            "requeriments": [
                                                                                3786429
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 2740269,
                                                                            "title": "Revisión",
                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168215229,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 16
                                                                        },
                                                                        {
                                                                            "id": 3786429,
                                                                            "title": "Cancela",
                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                            "file": "",
                                                                            "finished": false,
                                                                            "finishedDate": 0,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04MYtFvYDcTrQnY",
                                                                    "position": 12
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "initDate": 1733164662331,
                                                    "movements": [
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna Iniciada"
                                                        }
                                                    ],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04McNFvYDcTrQpi"
                                            }
                                        },
                                        {
                                            "columnId": 9165006,
                                            "taskVersion": [
                                                {
                                                    "id": 12275385696460937000,
                                                    "baseId": 7857158,
                                                    "title": "Prioridad",
                                                    "description": "El desarrollador notifica que ha empezado full con la tarea y esta enfocando la mayor parte de su trabajo en ella",
                                                    "tags": [
                                                        {
                                                            "id": 7851207,
                                                            "name": "John",
                                                            "color": "#207AE8"
                                                        }
                                                    ],
                                                    "priority": "high",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 1288862,
                                                            "nextTaskId": 7018767,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                6819823
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 6819823,
                                                            "title": "Seguimiento",
                                                            "desp": "URL de un repositorio u otro medio que permite darle seguimiento a todos los avances",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168246493,
                                                            "mandatoryFile": false,
                                                            "tipologyId": null
                                                        }
                                                    ],
                                                    "history": [
                                                        {
                                                            "columnId": 4133317,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 12275385696460937000,
                                                                    "baseId": 9750696,
                                                                    "title": "Tarea listada",
                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                    "tags": [
                                                                        {
                                                                            "id": 7851207,
                                                                            "name": "John",
                                                                            "color": "#207AE8"
                                                                        }
                                                                    ],
                                                                    "priority": "low",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 7578832,
                                                                            "nextTaskId": 7240036,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                2740269
                                                                            ]
                                                                        },
                                                                        {
                                                                            "id": 3151767,
                                                                            "nextTaskId": 3404622,
                                                                            "active": true,
                                                                            "title": "Requisitos 2",
                                                                            "requeriments": [
                                                                                3786429
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 2740269,
                                                                            "title": "Revisión",
                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168215229,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 16
                                                                        },
                                                                        {
                                                                            "id": 3786429,
                                                                            "title": "Cancela",
                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                            "file": "",
                                                                            "finished": false,
                                                                            "finishedDate": 0,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04MYtFvYDcTrQnY",
                                                                    "position": 12
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "columnId": 7987022,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 12275385696460937000,
                                                                    "baseId": 7240036,
                                                                    "title": "1er vistazo",
                                                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                                                    "tags": [
                                                                        {
                                                                            "id": 7851207,
                                                                            "name": "John",
                                                                            "color": "#207AE8"
                                                                        }
                                                                    ],
                                                                    "priority": "medium",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 1150249,
                                                                            "nextTaskId": 7857158,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                6249748
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 6249748,
                                                                            "title": "Seguimiento",
                                                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168229317,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [
                                                                        {
                                                                            "columnId": 4133317,
                                                                            "taskVersion": [
                                                                                {
                                                                                    "id": 12275385696460937000,
                                                                                    "baseId": 9750696,
                                                                                    "title": "Tarea listada",
                                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                                    "tags": [
                                                                                        {
                                                                                            "id": 7851207,
                                                                                            "name": "John",
                                                                                            "color": "#207AE8"
                                                                                        }
                                                                                    ],
                                                                                    "priority": "low",
                                                                                    "requerimentGroups": [
                                                                                        {
                                                                                            "id": 7578832,
                                                                                            "nextTaskId": 7240036,
                                                                                            "active": true,
                                                                                            "title": "Requisitos 1",
                                                                                            "requeriments": [
                                                                                                2740269
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "id": 3151767,
                                                                                            "nextTaskId": 3404622,
                                                                                            "active": true,
                                                                                            "title": "Requisitos 2",
                                                                                            "requeriments": [
                                                                                                3786429
                                                                                            ]
                                                                                        }
                                                                                    ],
                                                                                    "requeriments": [
                                                                                        {
                                                                                            "id": 2740269,
                                                                                            "title": "Revisión",
                                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                                            "file": "",
                                                                                            "finished": true,
                                                                                            "finishedDate": 1733168215229,
                                                                                            "mandatoryFile": false,
                                                                                            "tipologyId": 16
                                                                                        },
                                                                                        {
                                                                                            "id": 3786429,
                                                                                            "title": "Cancela",
                                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                                            "file": "",
                                                                                            "finished": false,
                                                                                            "finishedDate": 0,
                                                                                            "mandatoryFile": false,
                                                                                            "tipologyId": 24
                                                                                        }
                                                                                    ],
                                                                                    "history": [],
                                                                                    "initDate": 1733164662331,
                                                                                    "movements": [],
                                                                                    "tipologies": [],
                                                                                    "prerequisites": [],
                                                                                    "state": "Estado 1"
                                                                                }
                                                                            ],
                                                                            "_id": {
                                                                                "buffer": {
                                                                                    "sub_type": 0,
                                                                                    "buffer": {
                                                                                        "sub_type": 0,
                                                                                        "buffer": "Z04MYtFvYDcTrQnY",
                                                                                        "position": 12
                                                                                    },
                                                                                    "position": 12
                                                                                }
                                                                            }
                                                                        }
                                                                    ],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [
                                                                        {
                                                                            "user": "API_USER",
                                                                            "desp": "Avanzada a la columna Iniciada"
                                                                        }
                                                                    ],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04McNFvYDcTrQpi",
                                                                    "position": 12
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "initDate": 1733164662331,
                                                    "movements": [
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna Iniciada"
                                                        },
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna En proceso"
                                                        }
                                                    ],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04MfNFvYDcTrQrz"
                                            }
                                        }
                                    ],
                                    "initDate": 1733164662331,
                                    "movements": [
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna Iniciada"
                                        },
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna En proceso"
                                        },
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna En revisión"
                                        }
                                    ],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0c8cd16f603713ad0b92"
                        }
                    ],
                    "initDate": 1733164662331,
                    "movements": [
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna Iniciada"
                        },
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna En proceso"
                        },
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna En revisión"
                        },
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna Finalizado"
                        }
                    ],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                },
                {
                    "id": 9813051780031463000,
                    "baseId": 1387549,
                    "title": "Con falencias",
                    "description": "El supervisor finalmente encontró que a la tarea le faltaron elementos por terminar",
                    "tags": [
                        {
                            "id": 2294861,
                            "name": "Daniel",
                            "color": "#c7e821"
                        }
                    ],
                    "priority": "medium",
                    "requerimentGroups": [],
                    "requeriments": [],
                    "history": [
                        {
                            "columnId": 4133317,
                            "taskVersion": [
                                {
                                    "id": 9813051780031463000,
                                    "baseId": 9750696,
                                    "title": "Tarea listada",
                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                    "tags": [
                                        {
                                            "id": 2294861,
                                            "name": "Daniel",
                                            "color": "#c7e821"
                                        }
                                    ],
                                    "priority": "low",
                                    "requerimentGroups": [
                                        {
                                            "id": 7578832,
                                            "nextTaskId": 7240036,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                2740269
                                            ]
                                        },
                                        {
                                            "id": 3151767,
                                            "nextTaskId": 3404622,
                                            "active": true,
                                            "title": "Requisitos 2",
                                            "requeriments": [
                                                3786429
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 2740269,
                                            "title": "Revisión",
                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168335285,
                                            "mandatoryFile": false,
                                            "tipologyId": 16
                                        },
                                        {
                                            "id": 3786429,
                                            "title": "Cancela",
                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        }
                                    ],
                                    "history": [],
                                    "initDate": 1733164662331,
                                    "movements": [],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0cd1d16f603713ad0d3a"
                        },
                        {
                            "columnId": 7987022,
                            "taskVersion": [
                                {
                                    "id": 9813051780031463000,
                                    "baseId": 7240036,
                                    "title": "1er vistazo",
                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                    "tags": [
                                        {
                                            "id": 2294861,
                                            "name": "Daniel",
                                            "color": "#c7e821"
                                        }
                                    ],
                                    "priority": "medium",
                                    "requerimentGroups": [
                                        {
                                            "id": 1150249,
                                            "nextTaskId": 7857158,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                6249748
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 6249748,
                                            "title": "Seguimiento",
                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168347013,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        }
                                    ],
                                    "history": [
                                        {
                                            "columnId": 4133317,
                                            "taskVersion": [
                                                {
                                                    "id": 9813051780031463000,
                                                    "baseId": 9750696,
                                                    "title": "Tarea listada",
                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                    "tags": [
                                                        {
                                                            "id": 2294861,
                                                            "name": "Daniel",
                                                            "color": "#c7e821"
                                                        }
                                                    ],
                                                    "priority": "low",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 7578832,
                                                            "nextTaskId": 7240036,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                2740269
                                                            ]
                                                        },
                                                        {
                                                            "id": 3151767,
                                                            "nextTaskId": 3404622,
                                                            "active": true,
                                                            "title": "Requisitos 2",
                                                            "requeriments": [
                                                                3786429
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 2740269,
                                                            "title": "Revisión",
                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168335285,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 16
                                                        },
                                                        {
                                                            "id": 3786429,
                                                            "title": "Cancela",
                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                            "file": "",
                                                            "finished": false,
                                                            "finishedDate": 0,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [],
                                                    "initDate": 1733164662331,
                                                    "movements": [],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04M0dFvYDcTrQ06"
                                            }
                                        }
                                    ],
                                    "initDate": 1733164662331,
                                    "movements": [
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna Iniciada"
                                        }
                                    ],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0cddd16f603713ad0de8"
                        },
                        {
                            "columnId": 9165006,
                            "taskVersion": [
                                {
                                    "id": 9813051780031463000,
                                    "baseId": 7857158,
                                    "title": "Prioridad",
                                    "description": "El desarrollador notifica que ha empezado full con la tarea y esta enfocando la mayor parte de su trabajo en ella",
                                    "tags": [
                                        {
                                            "id": 2294861,
                                            "name": "Daniel",
                                            "color": "#c7e821"
                                        }
                                    ],
                                    "priority": "high",
                                    "requerimentGroups": [
                                        {
                                            "id": 1288862,
                                            "nextTaskId": 7018767,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                6819823
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 6819823,
                                            "title": "Seguimiento",
                                            "desp": "URL de un repositorio u otro medio que permite darle seguimiento a todos los avances",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168351901,
                                            "mandatoryFile": false,
                                            "tipologyId": null
                                        }
                                    ],
                                    "history": [
                                        {
                                            "columnId": 4133317,
                                            "taskVersion": [
                                                {
                                                    "id": 9813051780031463000,
                                                    "baseId": 9750696,
                                                    "title": "Tarea listada",
                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                    "tags": [
                                                        {
                                                            "id": 2294861,
                                                            "name": "Daniel",
                                                            "color": "#c7e821"
                                                        }
                                                    ],
                                                    "priority": "low",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 7578832,
                                                            "nextTaskId": 7240036,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                2740269
                                                            ]
                                                        },
                                                        {
                                                            "id": 3151767,
                                                            "nextTaskId": 3404622,
                                                            "active": true,
                                                            "title": "Requisitos 2",
                                                            "requeriments": [
                                                                3786429
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 2740269,
                                                            "title": "Revisión",
                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168335285,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 16
                                                        },
                                                        {
                                                            "id": 3786429,
                                                            "title": "Cancela",
                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                            "file": "",
                                                            "finished": false,
                                                            "finishedDate": 0,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [],
                                                    "initDate": 1733164662331,
                                                    "movements": [],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04M0dFvYDcTrQ06"
                                            }
                                        },
                                        {
                                            "columnId": 7987022,
                                            "taskVersion": [
                                                {
                                                    "id": 9813051780031463000,
                                                    "baseId": 7240036,
                                                    "title": "1er vistazo",
                                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                                    "tags": [
                                                        {
                                                            "id": 2294861,
                                                            "name": "Daniel",
                                                            "color": "#c7e821"
                                                        }
                                                    ],
                                                    "priority": "medium",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 1150249,
                                                            "nextTaskId": 7857158,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                6249748
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 6249748,
                                                            "title": "Seguimiento",
                                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168347013,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [
                                                        {
                                                            "columnId": 4133317,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 9813051780031463000,
                                                                    "baseId": 9750696,
                                                                    "title": "Tarea listada",
                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                    "tags": [
                                                                        {
                                                                            "id": 2294861,
                                                                            "name": "Daniel",
                                                                            "color": "#c7e821"
                                                                        }
                                                                    ],
                                                                    "priority": "low",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 7578832,
                                                                            "nextTaskId": 7240036,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                2740269
                                                                            ]
                                                                        },
                                                                        {
                                                                            "id": 3151767,
                                                                            "nextTaskId": 3404622,
                                                                            "active": true,
                                                                            "title": "Requisitos 2",
                                                                            "requeriments": [
                                                                                3786429
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 2740269,
                                                                            "title": "Revisión",
                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168335285,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 16
                                                                        },
                                                                        {
                                                                            "id": 3786429,
                                                                            "title": "Cancela",
                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                            "file": "",
                                                                            "finished": false,
                                                                            "finishedDate": 0,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04M0dFvYDcTrQ06",
                                                                    "position": 12
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "initDate": 1733164662331,
                                                    "movements": [
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna Iniciada"
                                                        }
                                                    ],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04M3dFvYDcTrQ3o"
                                            }
                                        }
                                    ],
                                    "initDate": 1733164662331,
                                    "movements": [
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna Iniciada"
                                        },
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna En proceso"
                                        }
                                    ],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0ce3d16f603713ad0e9d"
                        },
                        {
                            "columnId": 4724982,
                            "taskVersion": [
                                {
                                    "id": 9813051780031463000,
                                    "baseId": 7018767,
                                    "title": "Supervisor",
                                    "description": "El supervisor de las tareas revisa el producto final para verificar que efectivamente se haya cumplido con todo lo solicitado",
                                    "tags": [
                                        {
                                            "id": 2294861,
                                            "name": "Daniel",
                                            "color": "#c7e821"
                                        }
                                    ],
                                    "priority": "medium",
                                    "requerimentGroups": [
                                        {
                                            "id": 7082116,
                                            "nextTaskId": 5191615,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                7003660
                                            ]
                                        },
                                        {
                                            "id": 2443113,
                                            "nextTaskId": 1387549,
                                            "active": true,
                                            "title": "Requisitos 2",
                                            "requeriments": [
                                                9380672
                                            ]
                                        },
                                        {
                                            "id": 6360884,
                                            "nextTaskId": 7103696,
                                            "active": true,
                                            "title": "Requisitos 3",
                                            "requeriments": [
                                                8561612
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 7003660,
                                            "title": "Correcto",
                                            "desp": "Supervisor notifica que todo esta correcto",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        },
                                        {
                                            "id": 8561612,
                                            "title": "Incorrecto",
                                            "desp": "Supervisor indica que el producto final no es lo que se pidió",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        },
                                        {
                                            "id": 9380672,
                                            "title": "Falta",
                                            "desp": "Supervisor indica que la tarea aun le falta por terminar",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168360301,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        }
                                    ],
                                    "history": [
                                        {
                                            "columnId": 4133317,
                                            "taskVersion": [
                                                {
                                                    "id": 9813051780031463000,
                                                    "baseId": 9750696,
                                                    "title": "Tarea listada",
                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                    "tags": [
                                                        {
                                                            "id": 2294861,
                                                            "name": "Daniel",
                                                            "color": "#c7e821"
                                                        }
                                                    ],
                                                    "priority": "low",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 7578832,
                                                            "nextTaskId": 7240036,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                2740269
                                                            ]
                                                        },
                                                        {
                                                            "id": 3151767,
                                                            "nextTaskId": 3404622,
                                                            "active": true,
                                                            "title": "Requisitos 2",
                                                            "requeriments": [
                                                                3786429
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 2740269,
                                                            "title": "Revisión",
                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168335285,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 16
                                                        },
                                                        {
                                                            "id": 3786429,
                                                            "title": "Cancela",
                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                            "file": "",
                                                            "finished": false,
                                                            "finishedDate": 0,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [],
                                                    "initDate": 1733164662331,
                                                    "movements": [],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04M0dFvYDcTrQ06"
                                            }
                                        },
                                        {
                                            "columnId": 7987022,
                                            "taskVersion": [
                                                {
                                                    "id": 9813051780031463000,
                                                    "baseId": 7240036,
                                                    "title": "1er vistazo",
                                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                                    "tags": [
                                                        {
                                                            "id": 2294861,
                                                            "name": "Daniel",
                                                            "color": "#c7e821"
                                                        }
                                                    ],
                                                    "priority": "medium",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 1150249,
                                                            "nextTaskId": 7857158,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                6249748
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 6249748,
                                                            "title": "Seguimiento",
                                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168347013,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [
                                                        {
                                                            "columnId": 4133317,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 9813051780031463000,
                                                                    "baseId": 9750696,
                                                                    "title": "Tarea listada",
                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                    "tags": [
                                                                        {
                                                                            "id": 2294861,
                                                                            "name": "Daniel",
                                                                            "color": "#c7e821"
                                                                        }
                                                                    ],
                                                                    "priority": "low",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 7578832,
                                                                            "nextTaskId": 7240036,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                2740269
                                                                            ]
                                                                        },
                                                                        {
                                                                            "id": 3151767,
                                                                            "nextTaskId": 3404622,
                                                                            "active": true,
                                                                            "title": "Requisitos 2",
                                                                            "requeriments": [
                                                                                3786429
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 2740269,
                                                                            "title": "Revisión",
                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168335285,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 16
                                                                        },
                                                                        {
                                                                            "id": 3786429,
                                                                            "title": "Cancela",
                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                            "file": "",
                                                                            "finished": false,
                                                                            "finishedDate": 0,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04M0dFvYDcTrQ06",
                                                                    "position": 12
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "initDate": 1733164662331,
                                                    "movements": [
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna Iniciada"
                                                        }
                                                    ],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04M3dFvYDcTrQ3o"
                                            }
                                        },
                                        {
                                            "columnId": 9165006,
                                            "taskVersion": [
                                                {
                                                    "id": 9813051780031463000,
                                                    "baseId": 7857158,
                                                    "title": "Prioridad",
                                                    "description": "El desarrollador notifica que ha empezado full con la tarea y esta enfocando la mayor parte de su trabajo en ella",
                                                    "tags": [
                                                        {
                                                            "id": 2294861,
                                                            "name": "Daniel",
                                                            "color": "#c7e821"
                                                        }
                                                    ],
                                                    "priority": "high",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 1288862,
                                                            "nextTaskId": 7018767,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                6819823
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 6819823,
                                                            "title": "Seguimiento",
                                                            "desp": "URL de un repositorio u otro medio que permite darle seguimiento a todos los avances",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168351901,
                                                            "mandatoryFile": false,
                                                            "tipologyId": null
                                                        }
                                                    ],
                                                    "history": [
                                                        {
                                                            "columnId": 4133317,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 9813051780031463000,
                                                                    "baseId": 9750696,
                                                                    "title": "Tarea listada",
                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                    "tags": [
                                                                        {
                                                                            "id": 2294861,
                                                                            "name": "Daniel",
                                                                            "color": "#c7e821"
                                                                        }
                                                                    ],
                                                                    "priority": "low",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 7578832,
                                                                            "nextTaskId": 7240036,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                2740269
                                                                            ]
                                                                        },
                                                                        {
                                                                            "id": 3151767,
                                                                            "nextTaskId": 3404622,
                                                                            "active": true,
                                                                            "title": "Requisitos 2",
                                                                            "requeriments": [
                                                                                3786429
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 2740269,
                                                                            "title": "Revisión",
                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168335285,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 16
                                                                        },
                                                                        {
                                                                            "id": 3786429,
                                                                            "title": "Cancela",
                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                            "file": "",
                                                                            "finished": false,
                                                                            "finishedDate": 0,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04M0dFvYDcTrQ06",
                                                                    "position": 12
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "columnId": 7987022,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 9813051780031463000,
                                                                    "baseId": 7240036,
                                                                    "title": "1er vistazo",
                                                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                                                    "tags": [
                                                                        {
                                                                            "id": 2294861,
                                                                            "name": "Daniel",
                                                                            "color": "#c7e821"
                                                                        }
                                                                    ],
                                                                    "priority": "medium",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 1150249,
                                                                            "nextTaskId": 7857158,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                6249748
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 6249748,
                                                                            "title": "Seguimiento",
                                                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168347013,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [
                                                                        {
                                                                            "columnId": 4133317,
                                                                            "taskVersion": [
                                                                                {
                                                                                    "id": 9813051780031463000,
                                                                                    "baseId": 9750696,
                                                                                    "title": "Tarea listada",
                                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                                    "tags": [
                                                                                        {
                                                                                            "id": 2294861,
                                                                                            "name": "Daniel",
                                                                                            "color": "#c7e821"
                                                                                        }
                                                                                    ],
                                                                                    "priority": "low",
                                                                                    "requerimentGroups": [
                                                                                        {
                                                                                            "id": 7578832,
                                                                                            "nextTaskId": 7240036,
                                                                                            "active": true,
                                                                                            "title": "Requisitos 1",
                                                                                            "requeriments": [
                                                                                                2740269
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "id": 3151767,
                                                                                            "nextTaskId": 3404622,
                                                                                            "active": true,
                                                                                            "title": "Requisitos 2",
                                                                                            "requeriments": [
                                                                                                3786429
                                                                                            ]
                                                                                        }
                                                                                    ],
                                                                                    "requeriments": [
                                                                                        {
                                                                                            "id": 2740269,
                                                                                            "title": "Revisión",
                                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                                            "file": "",
                                                                                            "finished": true,
                                                                                            "finishedDate": 1733168335285,
                                                                                            "mandatoryFile": false,
                                                                                            "tipologyId": 16
                                                                                        },
                                                                                        {
                                                                                            "id": 3786429,
                                                                                            "title": "Cancela",
                                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                                            "file": "",
                                                                                            "finished": false,
                                                                                            "finishedDate": 0,
                                                                                            "mandatoryFile": false,
                                                                                            "tipologyId": 24
                                                                                        }
                                                                                    ],
                                                                                    "history": [],
                                                                                    "initDate": 1733164662331,
                                                                                    "movements": [],
                                                                                    "tipologies": [],
                                                                                    "prerequisites": [],
                                                                                    "state": "Estado 1"
                                                                                }
                                                                            ],
                                                                            "_id": {
                                                                                "buffer": {
                                                                                    "sub_type": 0,
                                                                                    "buffer": {
                                                                                        "sub_type": 0,
                                                                                        "buffer": "Z04M0dFvYDcTrQ06",
                                                                                        "position": 12
                                                                                    },
                                                                                    "position": 12
                                                                                }
                                                                            }
                                                                        }
                                                                    ],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [
                                                                        {
                                                                            "user": "API_USER",
                                                                            "desp": "Avanzada a la columna Iniciada"
                                                                        }
                                                                    ],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04M3dFvYDcTrQ3o",
                                                                    "position": 12
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "initDate": 1733164662331,
                                                    "movements": [
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna Iniciada"
                                                        },
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna En proceso"
                                                        }
                                                    ],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04M49FvYDcTrQ6d"
                                            }
                                        }
                                    ],
                                    "initDate": 1733164662331,
                                    "movements": [
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna Iniciada"
                                        },
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna En proceso"
                                        },
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna En revisión"
                                        }
                                    ],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0cf4d16f603713ad0f66"
                        }
                    ],
                    "initDate": 1733164662331,
                    "movements": [
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna Iniciada"
                        },
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna En proceso"
                        },
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna En revisión"
                        },
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna Finalizado"
                        }
                    ],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                },
                {
                    "id": 13481129287172737000,
                    "baseId": 7103696,
                    "title": "Con errores",
                    "description": "El supervisor finalmente encontró que el producto final no es lo que se solicitó al inicio de la tarea",
                    "tags": [],
                    "priority": "high",
                    "requerimentGroups": [],
                    "requeriments": [],
                    "history": [
                        {
                            "columnId": 4133317,
                            "taskVersion": [
                                {
                                    "id": 13481129287172737000,
                                    "baseId": 9750696,
                                    "title": "Tarea listada",
                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                    "tags": [],
                                    "priority": "low",
                                    "requerimentGroups": [
                                        {
                                            "id": 7578832,
                                            "nextTaskId": 7240036,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                2740269
                                            ]
                                        },
                                        {
                                            "id": 3151767,
                                            "nextTaskId": 3404622,
                                            "active": true,
                                            "title": "Requisitos 2",
                                            "requeriments": [
                                                3786429
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 2740269,
                                            "title": "Revisión",
                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168787036,
                                            "mandatoryFile": false,
                                            "tipologyId": 16
                                        },
                                        {
                                            "id": 3786429,
                                            "title": "Cancela",
                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        }
                                    ],
                                    "history": [],
                                    "initDate": 1733164662331,
                                    "movements": [],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0e95d16f603713ad1160"
                        },
                        {
                            "columnId": 7987022,
                            "taskVersion": [
                                {
                                    "id": 13481129287172737000,
                                    "baseId": 7240036,
                                    "title": "1er vistazo",
                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                    "tags": [],
                                    "priority": "medium",
                                    "requerimentGroups": [
                                        {
                                            "id": 1150249,
                                            "nextTaskId": 7857158,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                6249748
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 6249748,
                                            "title": "Seguimiento",
                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168796012,
                                            "mandatoryFile": false,
                                            "tipologyId": 24
                                        }
                                    ],
                                    "history": [
                                        {
                                            "columnId": 4133317,
                                            "taskVersion": [
                                                {
                                                    "id": 13481129287172737000,
                                                    "baseId": 9750696,
                                                    "title": "Tarea listada",
                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                    "tags": [],
                                                    "priority": "low",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 7578832,
                                                            "nextTaskId": 7240036,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                2740269
                                                            ]
                                                        },
                                                        {
                                                            "id": 3151767,
                                                            "nextTaskId": 3404622,
                                                            "active": true,
                                                            "title": "Requisitos 2",
                                                            "requeriments": [
                                                                3786429
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 2740269,
                                                            "title": "Revisión",
                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168787036,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 16
                                                        },
                                                        {
                                                            "id": 3786429,
                                                            "title": "Cancela",
                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                            "file": "",
                                                            "finished": false,
                                                            "finishedDate": 0,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [],
                                                    "initDate": 1733164662331,
                                                    "movements": [],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04OldFvYDcTrRFg"
                                            }
                                        }
                                    ],
                                    "initDate": 1733164662331,
                                    "movements": [
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna Iniciada"
                                        }
                                    ],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0e9fd16f603713ad1226"
                        },
                        {
                            "columnId": 9165006,
                            "taskVersion": [
                                {
                                    "id": 13481129287172737000,
                                    "baseId": 7857158,
                                    "title": "Prioridad",
                                    "description": "El desarrollador notifica que ha empezado full con la tarea y esta enfocando la mayor parte de su trabajo en ella",
                                    "tags": [],
                                    "priority": "high",
                                    "requerimentGroups": [
                                        {
                                            "id": 1288862,
                                            "nextTaskId": 7018767,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                6819823
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 6819823,
                                            "title": "Seguimiento",
                                            "desp": "URL de un repositorio u otro medio que permite darle seguimiento a todos los avances",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168804972,
                                            "mandatoryFile": false,
                                            "tipologyId": null
                                        }
                                    ],
                                    "history": [
                                        {
                                            "columnId": 4133317,
                                            "taskVersion": [
                                                {
                                                    "id": 13481129287172737000,
                                                    "baseId": 9750696,
                                                    "title": "Tarea listada",
                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                    "tags": [],
                                                    "priority": "low",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 7578832,
                                                            "nextTaskId": 7240036,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                2740269
                                                            ]
                                                        },
                                                        {
                                                            "id": 3151767,
                                                            "nextTaskId": 3404622,
                                                            "active": true,
                                                            "title": "Requisitos 2",
                                                            "requeriments": [
                                                                3786429
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 2740269,
                                                            "title": "Revisión",
                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168787036,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 16
                                                        },
                                                        {
                                                            "id": 3786429,
                                                            "title": "Cancela",
                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                            "file": "",
                                                            "finished": false,
                                                            "finishedDate": 0,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [],
                                                    "initDate": 1733164662331,
                                                    "movements": [],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04OldFvYDcTrRFg"
                                            }
                                        },
                                        {
                                            "columnId": 7987022,
                                            "taskVersion": [
                                                {
                                                    "id": 13481129287172737000,
                                                    "baseId": 7240036,
                                                    "title": "1er vistazo",
                                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                                    "tags": [],
                                                    "priority": "medium",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 1150249,
                                                            "nextTaskId": 7857158,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                6249748
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 6249748,
                                                            "title": "Seguimiento",
                                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168796012,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [
                                                        {
                                                            "columnId": 4133317,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 13481129287172737000,
                                                                    "baseId": 9750696,
                                                                    "title": "Tarea listada",
                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                    "tags": [],
                                                                    "priority": "low",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 7578832,
                                                                            "nextTaskId": 7240036,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                2740269
                                                                            ]
                                                                        },
                                                                        {
                                                                            "id": 3151767,
                                                                            "nextTaskId": 3404622,
                                                                            "active": true,
                                                                            "title": "Requisitos 2",
                                                                            "requeriments": [
                                                                                3786429
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 2740269,
                                                                            "title": "Revisión",
                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168787036,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 16
                                                                        },
                                                                        {
                                                                            "id": 3786429,
                                                                            "title": "Cancela",
                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                            "file": "",
                                                                            "finished": false,
                                                                            "finishedDate": 0,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04OldFvYDcTrRFg",
                                                                    "position": 12
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "initDate": 1733164662331,
                                                    "movements": [
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna Iniciada"
                                                        }
                                                    ],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04On9FvYDcTrRIm"
                                            }
                                        }
                                    ],
                                    "initDate": 1733164662331,
                                    "movements": [
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna Iniciada"
                                        },
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna En proceso"
                                        }
                                    ],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0ea9d16f603713ad12f4"
                        },
                        {
                            "columnId": 4724982,
                            "taskVersion": [
                                {
                                    "id": 13481129287172737000,
                                    "baseId": 7018767,
                                    "title": "Supervisor",
                                    "description": "El supervisor de las tareas revisa el producto final para verificar que efectivamente se haya cumplido con todo lo solicitado",
                                    "tags": [],
                                    "priority": "medium",
                                    "requerimentGroups": [
                                        {
                                            "id": 7082116,
                                            "nextTaskId": 5191615,
                                            "active": true,
                                            "title": "Requisitos 1",
                                            "requeriments": [
                                                7003660,
                                                4874109
                                            ]
                                        },
                                        {
                                            "id": 2443113,
                                            "nextTaskId": 1387549,
                                            "active": true,
                                            "title": "Requisitos 2",
                                            "requeriments": [
                                                9380672,
                                                4874109
                                            ]
                                        },
                                        {
                                            "id": 6360884,
                                            "nextTaskId": 7103696,
                                            "active": true,
                                            "title": "Requisitos 3",
                                            "requeriments": [
                                                8561612,
                                                4874109
                                            ]
                                        }
                                    ],
                                    "requeriments": [
                                        {
                                            "id": 7003660,
                                            "title": "Correcto",
                                            "desp": "Supervisor notifica que todo esta correcto",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": null
                                        },
                                        {
                                            "id": 8561612,
                                            "title": "Incorrecto",
                                            "desp": "Supervisor indica que el producto final no es lo que se pidió",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168840419,
                                            "mandatoryFile": false,
                                            "tipologyId": 13
                                        },
                                        {
                                            "id": 9380672,
                                            "title": "Falta",
                                            "desp": "Supervisor indica que la tarea aun le falta por terminar",
                                            "file": "",
                                            "finished": false,
                                            "finishedDate": 0,
                                            "mandatoryFile": false,
                                            "tipologyId": 13
                                        },
                                        {
                                            "id": 4874109,
                                            "title": "Lugar",
                                            "desp": "Supervisor indica que esta en su lugar de trabajo",
                                            "file": "",
                                            "finished": true,
                                            "finishedDate": 1733168818428,
                                            "mandatoryFile": false,
                                            "tipologyId": 16
                                        }
                                    ],
                                    "history": [
                                        {
                                            "columnId": 4133317,
                                            "taskVersion": [
                                                {
                                                    "id": 13481129287172737000,
                                                    "baseId": 9750696,
                                                    "title": "Tarea listada",
                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                    "tags": [],
                                                    "priority": "low",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 7578832,
                                                            "nextTaskId": 7240036,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                2740269
                                                            ]
                                                        },
                                                        {
                                                            "id": 3151767,
                                                            "nextTaskId": 3404622,
                                                            "active": true,
                                                            "title": "Requisitos 2",
                                                            "requeriments": [
                                                                3786429
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 2740269,
                                                            "title": "Revisión",
                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168787036,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 16
                                                        },
                                                        {
                                                            "id": 3786429,
                                                            "title": "Cancela",
                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                            "file": "",
                                                            "finished": false,
                                                            "finishedDate": 0,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [],
                                                    "initDate": 1733164662331,
                                                    "movements": [],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04OldFvYDcTrRFg"
                                            }
                                        },
                                        {
                                            "columnId": 7987022,
                                            "taskVersion": [
                                                {
                                                    "id": 13481129287172737000,
                                                    "baseId": 7240036,
                                                    "title": "1er vistazo",
                                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                                    "tags": [],
                                                    "priority": "medium",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 1150249,
                                                            "nextTaskId": 7857158,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                6249748
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 6249748,
                                                            "title": "Seguimiento",
                                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168796012,
                                                            "mandatoryFile": false,
                                                            "tipologyId": 24
                                                        }
                                                    ],
                                                    "history": [
                                                        {
                                                            "columnId": 4133317,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 13481129287172737000,
                                                                    "baseId": 9750696,
                                                                    "title": "Tarea listada",
                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                    "tags": [],
                                                                    "priority": "low",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 7578832,
                                                                            "nextTaskId": 7240036,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                2740269
                                                                            ]
                                                                        },
                                                                        {
                                                                            "id": 3151767,
                                                                            "nextTaskId": 3404622,
                                                                            "active": true,
                                                                            "title": "Requisitos 2",
                                                                            "requeriments": [
                                                                                3786429
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 2740269,
                                                                            "title": "Revisión",
                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168787036,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 16
                                                                        },
                                                                        {
                                                                            "id": 3786429,
                                                                            "title": "Cancela",
                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                            "file": "",
                                                                            "finished": false,
                                                                            "finishedDate": 0,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04OldFvYDcTrRFg",
                                                                    "position": 12
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "initDate": 1733164662331,
                                                    "movements": [
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna Iniciada"
                                                        }
                                                    ],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04On9FvYDcTrRIm"
                                            }
                                        },
                                        {
                                            "columnId": 9165006,
                                            "taskVersion": [
                                                {
                                                    "id": 13481129287172737000,
                                                    "baseId": 7857158,
                                                    "title": "Prioridad",
                                                    "description": "El desarrollador notifica que ha empezado full con la tarea y esta enfocando la mayor parte de su trabajo en ella",
                                                    "tags": [],
                                                    "priority": "high",
                                                    "requerimentGroups": [
                                                        {
                                                            "id": 1288862,
                                                            "nextTaskId": 7018767,
                                                            "active": true,
                                                            "title": "Requisitos 1",
                                                            "requeriments": [
                                                                6819823
                                                            ]
                                                        }
                                                    ],
                                                    "requeriments": [
                                                        {
                                                            "id": 6819823,
                                                            "title": "Seguimiento",
                                                            "desp": "URL de un repositorio u otro medio que permite darle seguimiento a todos los avances",
                                                            "file": "",
                                                            "finished": true,
                                                            "finishedDate": 1733168804972,
                                                            "mandatoryFile": false,
                                                            "tipologyId": null
                                                        }
                                                    ],
                                                    "history": [
                                                        {
                                                            "columnId": 4133317,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 13481129287172737000,
                                                                    "baseId": 9750696,
                                                                    "title": "Tarea listada",
                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                    "tags": [],
                                                                    "priority": "low",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 7578832,
                                                                            "nextTaskId": 7240036,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                2740269
                                                                            ]
                                                                        },
                                                                        {
                                                                            "id": 3151767,
                                                                            "nextTaskId": 3404622,
                                                                            "active": true,
                                                                            "title": "Requisitos 2",
                                                                            "requeriments": [
                                                                                3786429
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 2740269,
                                                                            "title": "Revisión",
                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168787036,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 16
                                                                        },
                                                                        {
                                                                            "id": 3786429,
                                                                            "title": "Cancela",
                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                            "file": "",
                                                                            "finished": false,
                                                                            "finishedDate": 0,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04OldFvYDcTrRFg",
                                                                    "position": 12
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "columnId": 7987022,
                                                            "taskVersion": [
                                                                {
                                                                    "id": 13481129287172737000,
                                                                    "baseId": 7240036,
                                                                    "title": "1er vistazo",
                                                                    "description": "Desarrollador notifica que ya ha empezado a dar los primeros pasos con el desarrollo de la tarea",
                                                                    "tags": [],
                                                                    "priority": "medium",
                                                                    "requerimentGroups": [
                                                                        {
                                                                            "id": 1150249,
                                                                            "nextTaskId": 7857158,
                                                                            "active": true,
                                                                            "title": "Requisitos 1",
                                                                            "requeriments": [
                                                                                6249748
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "requeriments": [
                                                                        {
                                                                            "id": 6249748,
                                                                            "title": "Seguimiento",
                                                                            "desp": "URL donde se pueda dar seguimiento a los avances",
                                                                            "file": "",
                                                                            "finished": true,
                                                                            "finishedDate": 1733168796012,
                                                                            "mandatoryFile": false,
                                                                            "tipologyId": 24
                                                                        }
                                                                    ],
                                                                    "history": [
                                                                        {
                                                                            "columnId": 4133317,
                                                                            "taskVersion": [
                                                                                {
                                                                                    "id": 13481129287172737000,
                                                                                    "baseId": 9750696,
                                                                                    "title": "Tarea listada",
                                                                                    "description": "Se asigna determinada tarea a uno de los desarrolladores",
                                                                                    "tags": [],
                                                                                    "priority": "low",
                                                                                    "requerimentGroups": [
                                                                                        {
                                                                                            "id": 7578832,
                                                                                            "nextTaskId": 7240036,
                                                                                            "active": true,
                                                                                            "title": "Requisitos 1",
                                                                                            "requeriments": [
                                                                                                2740269
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "id": 3151767,
                                                                                            "nextTaskId": 3404622,
                                                                                            "active": true,
                                                                                            "title": "Requisitos 2",
                                                                                            "requeriments": [
                                                                                                3786429
                                                                                            ]
                                                                                        }
                                                                                    ],
                                                                                    "requeriments": [
                                                                                        {
                                                                                            "id": 2740269,
                                                                                            "title": "Revisión",
                                                                                            "desp": "El desarrollador revisa las indicciones de la tarea y confirma que tiene todo lo necesario para desarrollarla",
                                                                                            "file": "",
                                                                                            "finished": true,
                                                                                            "finishedDate": 1733168787036,
                                                                                            "mandatoryFile": false,
                                                                                            "tipologyId": 16
                                                                                        },
                                                                                        {
                                                                                            "id": 3786429,
                                                                                            "title": "Cancela",
                                                                                            "desp": "Al revisar la tarea se concluye por parte del desarrollador que no es necesaria",
                                                                                            "file": "",
                                                                                            "finished": false,
                                                                                            "finishedDate": 0,
                                                                                            "mandatoryFile": false,
                                                                                            "tipologyId": 24
                                                                                        }
                                                                                    ],
                                                                                    "history": [],
                                                                                    "initDate": 1733164662331,
                                                                                    "movements": [],
                                                                                    "tipologies": [],
                                                                                    "prerequisites": [],
                                                                                    "state": "Estado 1"
                                                                                }
                                                                            ],
                                                                            "_id": {
                                                                                "buffer": {
                                                                                    "sub_type": 0,
                                                                                    "buffer": {
                                                                                        "sub_type": 0,
                                                                                        "buffer": "Z04OldFvYDcTrRFg",
                                                                                        "position": 12
                                                                                    },
                                                                                    "position": 12
                                                                                }
                                                                            }
                                                                        }
                                                                    ],
                                                                    "initDate": 1733164662331,
                                                                    "movements": [
                                                                        {
                                                                            "user": "API_USER",
                                                                            "desp": "Avanzada a la columna Iniciada"
                                                                        }
                                                                    ],
                                                                    "tipologies": [],
                                                                    "prerequisites": [],
                                                                    "state": "Estado 1"
                                                                }
                                                            ],
                                                            "_id": {
                                                                "buffer": {
                                                                    "sub_type": 0,
                                                                    "buffer": "Z04On9FvYDcTrRIm",
                                                                    "position": 12
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "initDate": 1733164662331,
                                                    "movements": [
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna Iniciada"
                                                        },
                                                        {
                                                            "user": "API_USER",
                                                            "desp": "Avanzada a la columna En proceso"
                                                        }
                                                    ],
                                                    "tipologies": [],
                                                    "prerequisites": [],
                                                    "state": "Estado 1"
                                                }
                                            ],
                                            "_id": {
                                                "buffer": "Z04OqdFvYDcTrRL0"
                                            }
                                        }
                                    ],
                                    "initDate": 1733164662331,
                                    "movements": [
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna Iniciada"
                                        },
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna En proceso"
                                        },
                                        {
                                            "user": "API_USER",
                                            "desp": "Avanzada a la columna En revisión"
                                        }
                                    ],
                                    "tipologies": [],
                                    "prerequisites": [],
                                    "state": "Estado 1"
                                }
                            ],
                            "_id": "674e0ecbd16f603713ad1487"
                        }
                    ],
                    "initDate": 1733164662331,
                    "movements": [
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna Iniciada"
                        },
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna En proceso"
                        },
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna En revisión"
                        },
                        {
                            "user": "API_USER",
                            "desp": "Avanzada a la columna Finalizado"
                        }
                    ],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                }
            ],
            "adminTasks": [
                {
                    "id": 5191615,
                    "baseId": 0,
                    "title": "Correctamente",
                    "description": "La tarea ha sido finalizada satisfactoriamente",
                    "tags": [],
                    "priority": "low",
                    "requerimentGroups": [],
                    "requeriments": [],
                    "history": [],
                    "initDate": 1733167146646,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                },
                {
                    "id": 1387549,
                    "baseId": 0,
                    "title": "Con falencias",
                    "description": "El supervisor finalmente encontró que a la tarea le faltaron elementos por terminar",
                    "tags": [],
                    "priority": "medium",
                    "requerimentGroups": [],
                    "requeriments": [],
                    "history": [],
                    "initDate": 1733167366182,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                },
                {
                    "id": 7103696,
                    "baseId": 0,
                    "title": "Con errores",
                    "description": "El supervisor finalmente encontró que el producto final no es lo que se solicitó al inicio de la tarea",
                    "tags": [],
                    "priority": "high",
                    "requerimentGroups": [],
                    "requeriments": [],
                    "history": [],
                    "initDate": 1733167523670,
                    "movements": [],
                    "tipologies": [],
                    "prerequisites": [],
                    "state": "Estado 1"
                }
            ],
            "autoFinish": false
        }
    ],
    "__v": 28
}