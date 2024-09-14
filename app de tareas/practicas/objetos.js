let auto = {marca: 'Ford', anio: 1998};
let marcaAuto = auto.marca;

console.log (marcaAuto);

let {marca, anio, modelo} = auto;

console.log (marca, anio);
console.log (modelo); // tira undefined porque, aunque se haya creado la variable (y por eso no me tira error), no se le asignó un valor.

let persona = {
    nombre : "Cristian",
    edad : 18,
    faltas : 50
}

let {nombre, faltas} = persona;

console.log (nombre, faltas);