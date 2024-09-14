// las operaciones que se hacen por detrás de la app

const fs = require('fs');

function leerJSON() {
    const jsonCrudo = fs.readFileSync('./tareas.json', 'utf-8')

    return JSON.parse(jsonCrudo);
};

function Tarea(nombre) {
    this.id = leerJSON()[leerJSON().length - 1].id + 1;
    this.nombre = nombre;
    this.estado = "pendiente"
};

function listarTareas() {
    let tareas = leerJSON()
    tareas.forEach(({ id, nombre, estado }) =>
        console.log(`${id} - ${nombre} | ${estado}`));
};

function reescribirJSON(tareas) {
    fs.writeFileSync('./tareas.json', //donde
        JSON.stringify(tareas, null, 2), //que - tareas -, forma de filtrar - null - , numero para sangría - 2 - 
        'utf-8') //como

};

function agregarTareas(nombre) {
    let tareas = leerJSON()
    let tarea = new Tarea(nombre)
    tareas.push(tarea)
    reescribirJSON(tareas)
};

function actualizarEstado(id) {
    const tareas = leerJSON()
    const tareaEncontrada = tareas.find(tarea =>
        tarea.id === +id)
    if (!tareaEncontrada) {
        return "Tarea no encontrada"
    }

    const tareaActualizada = tareas.map(tarea => {
        if (tarea => tarea.id === +id) {
            tarea.estado = "finalizada"
        }
        return tarea;
    })

    reescribirJSON(tareaActualizada)

    return "La tarea se actualizó"
};

function eliminarTarea(id) {
    const tareas = leerJSON()
    const tareasEncontrada = tareas.find(tarea =>
        tarea.id === +id)
    if (!tareasEncontrada) {
        return "Tarea no encontrada"
    }

    const tareasPersistentes = tareas.filter(
        tarea => {
            return tarea.id !== +id
        }
    )
    return "Tarea eliminada con éxito";
};

function filtrarTareasPorEstado(estado) {
    let tareas = leerJSON();
    let estadoTexto = estado.toLowerCase() === "p" ? "pendiente" : "finalizada";
    console.clear();
    console.log("Tareas " + estadoTexto)

    const tareasFiltradas = tareas.filter((tarea) => {
        tarea.estado === estadoTexto
    })

    listarTareas (tareasFiltradas);
}

module.exports = {
    listarTareas,
    agregarTareas,
    actualizarEstado,
    eliminarTarea,
    filtrarTareasPorEstado
};