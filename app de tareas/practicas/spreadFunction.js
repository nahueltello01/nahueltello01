let notas = [9.3, 8.5, 3.2, 7, 10];

let minpruebaUno = Math.min (notas);
console.log (minpruebaUno); // NaN

let minPruebaDos = Math.min (2, 5, 1);
console.log (minPruebaDos);

let minPruebaTres = Math.min (9.3, 8.5, 3.2, 7, 10);
console.log (minPruebaTres);

let minimoDefinitivo = Math.min (...notas);
console.log (minimoDefinitivo); //spread del array

Math.min(...notas); // Devuelve 3.2

