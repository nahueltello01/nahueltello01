/*El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:

1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.

2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.

3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.

Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el
console.log() para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:

Estimada Gloria Medina:
El monto total de los depósitos es de: $55000.
El monto total de los retiros es de: $15000.
Por lo tanto, su saldo actual en la cuenta es de: $40000.
*/

function calcularOperaciones (array = []) {
let saldoTotal = 0;
let depositos = 0;
let retiros = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
            depositos += array[i];
            saldoTotal += array[i];
    }
        else {retiros += array[i]};
    }
    return {depositos, retiros, saldoTotal};
};

function mensajeUsuario (nombre,apellido, calcularOperaciones) {

console.log (`Estimada ${nombre} ${apellido}:
El monto total de los depósitos es de: $${calcularOperaciones.depositos}.
El monto total de los retiros es de: $${calcularOperaciones.retiros}.
Por lo tanto, su saldo actual en la cuenta es de: $${calcularOperaciones.saldoTotal}.`)
};

console.log (mensajeUsuario ("Francisco", "Martin", calcularOperaciones ([20,30,-40,10])))