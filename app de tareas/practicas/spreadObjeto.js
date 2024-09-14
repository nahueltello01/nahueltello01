let auto = {marca:'Ferrari', kms:0, anio:2019};
let corredorUno = {nombre:'Vettel', edad:32, ...auto};
let corredorDos = {nombre:'Leclerc', edad:21, ...auto};

console.log (corredorUno);
console.log (corredorDos);