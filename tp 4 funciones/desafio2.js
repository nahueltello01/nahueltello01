// EJERCICIO DE CALLBACK

function nombreCompleto (nombre, apellido) {
    return nombre + " " + apellido
};

function saludar (nombreCompleto) {
    return `¿Sos vos ${nombreCompleto}? ¡Cuanto tiempo sin verte!`
};

console.log (saludar(nombreCompleto("Francisco","Martin")))

// DESAFIO 2

function calcularPago (tipoHamburguesa, jamon , queso , salsa , mayonesa , mostaza , tomate , lechuga , cebolla) {
    let montoPago = 0;
    let montoAdicional = 0;

    switch (tipoHamburguesa.toLowerCase()) {
        case "carne":
            montoPago = 1800
            break;
        case "pollo":
            montoPago = 1500
            break;
        case "vegetariana":
            montoPago = 1200
            break;
    }

    switch (true) {
        case jamon == true:
            montoAdicional + 30
            break;
        case queso:
            montoAdicional + 25
            break;
        case salsa:
            montoAdicional + 5
            break;
        case mayonesa:
            montoAdicional + 5
            break;
        case mostaza:
            montoAdicional + 5
            break;
        case tomate:
            montoAdicional + 15
            break;
        case lechuga:
            montoAdicional + 10
            break;
        case cebolla:
            montoAdicional + 10
            break;
        default: montoAdicional
        break;
    }

    return montoPago + montoAdicional
};

console.log (calcularPago("carne", true, true, false, false, true, true, false, true))