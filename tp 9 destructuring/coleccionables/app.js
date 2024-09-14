const {parsearJSON} = require (`./collectibles.js`);

const hotToys = parsearJSON ("Hot Toys");

const bandai = parsearJSON ("Bandai");

const starWars = parsearJSON ("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];


const collectibles = {
    figuras : unifiedCollectibles,
    listFigures : function () {
        this.figuras.forEach (({id, marca, nombre, precio, stock}) =>
        console.log (id, marca, nombre, precio, stock))
    },
    figuresByBrand : function (marca) { 
        return this.figuras.filter ((figura) => figura.marca === marca)
    },
    
};

console.log (collectibles.listFigures())
console.log (collectibles.figuresByBrand("Star Wars"))