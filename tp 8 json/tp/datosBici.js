const fs = require (`fs`);

const datosJSON = fs.readFileSync (`./bicicletas.json`,`utf-8`)

function datosParseados () {
    let bicicletas = JSON.parse (datosJSON)
    return bicicletas
};

module.exports = {datosParseados};