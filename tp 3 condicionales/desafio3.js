let palabra = "Gato";

let mensaje = "";

switch (palabra.toLowerCase()) {
    case "":
        mensaje = "Introduce a word and I will translate it for you."
        break;
    case "gato":
        mensaje = "Translated to english, this is a beautiful CAT."
        break;
    case "perro":
        mensaje = "Translated to english, this is a playful DOG."
        break;
    case "puerta":
        mensaje = "Translated to english, this is a strong DOOR."
        break;
    case "ventana":
        mensaje = "Translated to english, this is a clean WINDOW."
        break;
    case "mesa":
        mensaje = "Translated to english, this is a firm TABLE."
        break;
    default: mensaje = "I don't think that I know this word, try with another one."
        break;
}

console.log (mensaje);