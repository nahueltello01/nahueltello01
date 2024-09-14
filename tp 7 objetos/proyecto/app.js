const fs = require (`fs`);

const mensaje = fs.readFileSync (`mensaje.txt`,`utf-8`);

const movies = require (`./peliculas.js`);

function showMovies () {
    let peliculas = [];
        for (i = 0; i < movies.length; i++) {
        peliculas.push (movies[i]);
        }
        
        return peliculas;
    };
    
console.log (mensaje);
console.log (showMovies());