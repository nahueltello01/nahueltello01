/*
Resulta que cuando hay que presentar ganancias mayores a $ 1.000 no se 
presentan junto con las rendiciones que veníamos haciendo, por lo cual vamos a 
necesitar darle una vuelta de tuerca mas a nuestra función de Sumatorias.

Escribí la función sumatoriaBajoImporte() la cual recibiendo un array con 
importes nos devuelva el resultado final de la suma de los importes de todos 
los meses que tienen ganancia, a excepción de los que superen un importe de 
$ 1.000
*/

function sumatoriaBajoImporte (array = []) {
let resultado = 0
    for (i = 0; i <= array.length; i++) {
        if (array[i] < 1000) {
            resultado = resultado + array[i] // si no, más fácil es poner " += " para agregar un valor a la variable
        }
    }
    return resultado
}

console.log (sumatoriaBajoImporte ([580, 1200, 323, 416, 4000, 380]))