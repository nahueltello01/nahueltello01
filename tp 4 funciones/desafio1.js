let tipoVehiculo = "Compacto"
let diasDeAlquiler = 3
let sillaBebe = true

function calcularMonto (tipoVehiculo, diasDeAlquiler, sillaBebe) {
let montoPorDia = 0;
let montoBebe = 0;

    switch (tipoVehiculo.toLowerCase()) {
        case "compacto":
            montoPorDia = 14000
            break;
        case "mediano":
            montoPorDia = 17000
            break;
        case "camioneta":
            montoPorDia = 28000
            break;
    };

    if (sillaBebe == true) { 
        montoBebe = 1200
    }

    return (montoPorDia * diasDeAlquiler) + montoBebe
};

console.log(`
    Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado,
    considerando los ${diasDeAlquiler} días utilizados${sillaBebe == true ? " y la posesión de una silla para bebés" : ""}, 
    el monto total a pagar es de $${calcularMonto (tipoVehiculo,diasDeAlquiler,sillaBebe)}`)