/*

Hola, estimad@ Gloria Medina
En base a su sueldo actual:
$20000
Ha recibido un aumento del 25%:
$5000
y su nuevo sueldo es de: $25000

*/

let nombre = "Rodrigo";

let apellido = "Estévez";

let sueldoActual = 140000;

let porcentajeAumento = 15;

let calculoAumento = (sueldoActual* porcentajeAumento) / 100;

let nuevoSueldo = sueldoActual + calculoAumento;

console.log(`
Hola, estimad@ ${nombre} ${apellido}
En base a su sueldo actual:
${sueldoActual}
Ha recibido un aumento del ${porcentajeAumento}%:
${calculoAumento}
y su nuevo sueldo es de: $${nuevoSueldo}
`
);