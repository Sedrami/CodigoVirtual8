/**
 * 1. Algoritmo para sumar 4 notas e imprimir el promedio de los 4
 */
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, promedio = 0, suma = 0;
/**
 * un tipo de dato elemento
 */
console.log(typeof c1);
/**
 * anteponer el simbolo "+" a una instruccion o variable la convierte automaticamente en un numero
 */
c1 = +prompt("Ingrise la primera nota")
c2 = +prompt("Ingrise la segunda nota")
c2 = +prompt("Ingrise la tercera nota")
c2 = +prompt("Ingrise la cuarta nota")
//¿Como mostrar el tipo de datos?
console.log(typeof c1);
suma = c1 + c2 + c3 + c4;
promedio = suma / 4;
/**
 * el uso de los backticks ( ` ) nos ayuda a concatenar variables con strings en una sola linea sin el uso del operador ( + )
 */
 console.log("El promedio es:" + promedio);
console.log(`El promedio es: ${promedio}`);