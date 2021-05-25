/**
 * Condicionales
 * Ejemplo 3.3 pag. 53
 */

// let unidades = 0;
// let total = 0;
// // unidades = +prompt("¿Cuantas productos desea comprar?");
// unidades = 1000;

// if(unidades >= 1000) {
//     console.log(`Precio x productos 0.85 centavos`);
//     total = unidades * 0.85
// } else{
//      console.log(`Precio x productos 0.90 centavos`);
//      total = unidades * 0.90 
// }

// console.log(`Total a pagar: ${total}`);
// document.write(`Total a pagar: ${total}`)

/**
 * Ejercicios
 * Obtener el mayor de 3 numeros
 */

// let n1 = 32;
// let n2 = 5;
// let n3 = 100;
// let mayor = 0;

// if (n1 > n2) {
//     if (n1 > n3) {
//         mayor = n1;
//     } else {
//         mayor = n3;
//     }
// } else {
//     if (n2 > n3) {
//         mayor = n2;
//     } else {
//         mayor = n3;
//     }
// }

// document.write(`El mayor es: ${mayor}`)

/**
 * Espacio teorico
 * Tipos de comparadores:
 * Comparadores aritmeticos
 * a > b (si a es mayor que b)
 * a < b (si a es menor que b)
 * a <= b (si a es mayor igual que b)
 * a >= b (si a es menor igual que b)
 * a === b (si a es igual que b en valor y en tipo de dato)
 * a == b (si a es igual que b b en valor)
 * a !== b (si a es diferente que b)
 * Comparadores logicos
 * a && b (si a y b son verdaderos)
 * a || b (si a y/o b son verdaderon)
 * !a (la negacion de a)
 */

/**
 * Ejercicios 3.5 pag 58 version con Operadores logicos
 */

// let n1 = 90, n2 = 33, n3 = 42, mayor = 0;

// if (n1 > n2 && n1 > n3){
//     mayor = n1;
// } else {
//     if (n2 > n3 && n2 > n1){
//         mayor = n2; 
//     } else {
//         mayor = n3;
//     }
// }
// document.write(`El mayor de: ${n1} ${n2} y ${n3} es: ${mayor}`);

/**
 * Ejercicio Dado el precio de un producto,
 * aplicar el 15% de dcto en caso sea dia "lunes" o "martes"
 */

// let precio = 1000.00;
// let dia = "miercoles";

// if (dia == "lunes" || dia == "martes") {
//     precio = precio * 0.85;
// }

// document.write(`Total a pagar: ${precio}`);

/**
 * Ejercicios 3.6 pag. 61
 */

let platos = 250;
let total = 0;
if (platos < 200) {
    total = platos * 95;
} else {
    if (platos <= 300) {
        total = platos * 85;
    } else {
        total = platos * 75;
    }
}

document.write(`Cantidad de plato: ${platos} <br> Total a pagar: ${total}`)