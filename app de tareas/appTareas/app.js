// lo que le aparece al cliente y con lo que interactúa (interfaz)

const prompt = require('prompt-sync')({ sigint: true });
const { listarTareas, agregarTareas, actualizarEstado, eliminarTarea, filtrarTareasPorEstado } = require('./moduloTareas')

function mostrarMenu() {
    console.clear()
    console.log('*******MENU*******');
    console.log();
    console.log('1. LISTAR tareas');
    console.log('2. AGREGAR tarea');
    console.log('3. ACTUALIZAR tarea');
    console.log('4. ELIMINAR tarea');
    console.log('5. FILTRAR tarea');
    console.log('0. SALIR del menu');
    console.log();
    console.log('******************');
    console.log();

};

function mostrarInterfaz() {
    let option = -1;
    while (option != 0) {
        mostrarMenu();
        option = +prompt('Elegí una OPCION: ')
        console.clear();

        let idTarea;
        let respuesta;
        let estado;
        switch (option) {
            case 1:
                console.log('LISTANDO tareas...');
                listarTareas()
                break;
            case 2:
                let nombre = prompt(`Escribe el nombre de la tarea: `)
                console.log('AGREGANDO tarea...');
                agregarTareas(nombre)
                break;
            case 3:
                listarTareas();
                idTarea = +prompt('Elegí una OPCION: ');
                respuesta = actualizarEstado(idTarea);
                /* let idTarea = prompt ("");
                actualizarEstado(idTarea) */
                console.log(respuesta)
                break;
            case 4:
                console.log('ELIMINANDO tarea...');
                idTarea = +prompt('Elegí una OPCION: ');
                respuesta = eliminarTarea(idTarea)
                console.log(respuesta)
                break;
            case 5:
                console.log('FILTRANDO tareas...');
                estado = "x";
                while (estado.toLowerCase() !== "p" && estado.toLowerCase() !== "f") {
                    estado = prompt("Filtrar tareas pendientes (P) o finalizadas (F)")
                }
                filtrarTareasPorEstado(estado)
                break;
            case 0:
                console.log('¡Gracias por venir!');

                break;
            default: console.log('Opción INCORRECTA');

                break;
        }

        if (option != 0) {
            prompt('Presiona una tecla para volver ');
        }
    }
}

mostrarInterfaz();