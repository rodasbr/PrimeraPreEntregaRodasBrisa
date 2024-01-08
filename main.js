

// calcular el costo del envio de una compra dependiendo los kilometros de distancia que se encuentre el domicilio



const suma = (x, y) => x + y;
const envio = (x) => x * 0.15;

let precioProducto = Number(prompt("Ingrese el precio del producto (solo numero sin simbolos) "));
let donde = Number(prompt("Indique a cuantos kilometros se encuentra (solo numero entero)"));


let finalPrecio = suma(precioProducto, envio(precioProducto));

// depende del resultado es el alert que se envia

if (finalPrecio <=  20000) {
    alert("su compra es menor a $20.000");
} else if (finalPrecio >= 30000) {
    alert("su compra es menor a $30.000");
} else {
    alert("su compra es mayor a $30.000");
}

//alert ( "Usted debe abonar" + " " + finalPrecio +" "+ "$ por su envio");





