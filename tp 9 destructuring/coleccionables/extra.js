let numeros = [1, 436, 654, 712, 765 , 543 , 132 , 683, 562, 634]
let [posicion0, , posicion2, , posicion4] = numeros

function hacerArray () {
let nuevoArray = [];

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] !== posicion0 && numeros[i] !== posicion2 && numeros[i] !== posicion4) {
        nuevoArray.push ( numeros [i] )}
}
return nuevoArray
}

console.log (hacerArray())

let perro = {nombre: "Ramón", mascota: "Perro", color: "Dorado", raza: "Golden Retriever"};

let {color, raza} = perro

console.log (`color: ${color} y su raza es: ${raza}`);