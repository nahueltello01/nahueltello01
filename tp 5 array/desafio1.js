let productos = ["microondas", "licuadora", "lavarropa", "secarropa", "heladera", "lavavajillas"];

console.log(productos[1]);

productos.shift();
console.log(productos);

productos.push ("microondas");
console.log(productos);

productos.push ("horno eléctrico", "colador");
console.log(productos);

console.log(productos.length);

function encontrarProducto (string = "") {
    if (productos.includes(string) == true) {
        return "Producto encontrado"
    } else {"El producto buscado no existe"}};

console.log(encontrarProducto("licuadora"));

const productosString = productos.join(" ");

console.log(productosString);

console.log (productosString.length);

console.log (productosString.replace("colador", "playstation"));

console.log (productosString.split(` `))