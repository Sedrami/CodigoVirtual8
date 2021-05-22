console.log("Hola mundo");

// Variables
/**
 * 1. Una variable solo se crea una vez
 */
//tipo de dato (string)
let nombre = "Sebastian"; 
let apellido = "Pretel Lopez";
nombre = "Sebas"
console.log(nombre);
//tipo de dato (numerico)
let edad = 17;
let sueldo = 950.20;
sueldo = 980.00;
sueldo = sueldo + 50;
//concatenar
console.log("Sueldo: " + sueldo);
//tipo de dato boolean (verad o falso)
let soltero = true;
let papeletas = false;
console.log("Soltero?: " + soltero);
//tipo de dato array
let meses = ["January", "February", "March", "April"]
console.log(meses);
//imprimir alguna posicion de los arreglos
console.log(meses[2]);
/*
operaciones matematicas son iguales que en excel
+, -, *, /
% => (modulo) es una operacion que retorna el residuo de una division entera
*/
let modulo = 55 % 6;
console.log("55 % 6 = " + modulo);
// operaciones simplificadas
let likes = 2;
//incrementar automaticamente en una unidad a La variable likes
likes++;
console.log(likes);
//incrementar en una unidad a la variable likes
likes = likes + 1;
console.log(likes);
//incrementar en una unidad a la variable likes
likes += 1;
console.log(likes);
