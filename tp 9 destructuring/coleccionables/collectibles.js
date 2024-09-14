const fs = require (`fs`);
const leerJSON1 = fs.readFileSync (`./datos/figuras1.json`, `utf-8`);
const leerJSON2 = fs.readFileSync (`./datos/figuras2.json`, `utf-8`);
const leerJSON3 = fs.readFileSync (`./datos/figuras3.json`, `utf-8`);

function parsearJSON (marca) {
    const parseadouno = JSON.parse(leerJSON1);

    const parseadodos = JSON.parse(leerJSON2);

    const parseadotres = JSON.parse(leerJSON3);

    let resultado;

    switch (marca) {
        case "Hot Toys":
            resultado = parseadouno
            break;
        case "Bandai":
            resultado = parseadodos
            break;
        case "Star Wars":
            resultado = parseadotres
            break;
        default: resultado = "Por favor, prueba con alguna de las marcas registradas"
            break;
    }
    return resultado
};

module.exports = {parsearJSON};