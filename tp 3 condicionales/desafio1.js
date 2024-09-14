let perfil = "Administrador" // Puede ser Administrador - Asistente - Invitado

let mensaje = ""

if (perfil.toLocaleLowerCase() = "administrador") {
    mensaje = "Usted tiene todos los privilegios de uso del sistema"
} else if (perfil.toLocaleLowerCase() = "asistente") {
    mensaje = "“Usted sólo tiene permisos de registrar, modificar y consultar datos”"
} else if (perfil.toLocaleLowerCase() = "invitado") {
    mensaje = "Usted sólo tiene permisos de consultar datos"
} else if (perfil.toLocaleLowerCase() = "") {
    mensaje = "Debe especificar el perfild e usuario"
} else { mensaje = "Debe especificar un perfil válido"};

console.log (mensaje)