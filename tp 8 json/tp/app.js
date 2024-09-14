const fs = require  (`fs`);

const {datosParseados} = require (`./datosBici.js`);

const bicicletasJSON = fs.readFileSync (`./bicicletas.json`,`utf-8`);


const dhBici = {
    bicicletas : datosParseados(),
    buscarBici : function (id) {
        return this.bicicletas.find ((bici) => bici.id === +id)
    },
    venderBici : function (id) {
        return this.bicicletas.map((bici) => {
            if (bici.id === +id) {
            bici.vendida = "si"
            return bici}
        })
    },
    biciParaLaVenta : function () {
        return this.bicicletas.filter ((bici) => bici.vendida == "no")
    },
    totalDeVentas : function () { 
        return this.bicicletas.reduce ((acum, bici) => 
            acum + bici.precio, 0)
    }
};

console.log (`TIENDA DE BICICLETAS`)
console.log ();
console.log (`BUSCANDO BICICLETA...`);
console.log ();
console.log (dhBici.buscarBici(1));
console.log ();
console.log (`VENDIENDO BICICLETA`);
console.log (dhBici.venderBici(2));
console.log ();
console.log (`BICICLETAS A LA VENTA`);
console.log (dhBici.biciParaLaVenta());
console.log ();
console.log (`TOTAL DE VENTAS : $${dhBici.totalDeVentas()}`);