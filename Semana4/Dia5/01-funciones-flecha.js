const suma = function (a, b) {
    return a + b
}

const multiplicador = (a, b) => {
    return a * b
}

console.log(`5 x 8: ${multiplicador(5,8)}`);


/**
 * Las funciones anonimas pueden tener retornos implicitos
 * si el desarrollo de la funcion tiene una lines de codigo
 * CONSEJO:
 * cuando queremos representar un retorno implicito;
 * procurar encerrarlo en simbolo de parentesis
 */
const dividir = (a, b) => (a / b);
console.log(`9 / 3 : ${dividir(9,3)}`);


/**
 * Si una funcion de flecha recibe 1 parametro(exactamente 1)
 * pueden obviarse los parentesis que encierran a ese parametro
 */

const cuadrado = n => n * n;
console.log(`Cuadrado de 9: ${cuadrado(9)}`);

/**
 * Si una funcion de flecha no recibe parametro; colocar
 * la apertura de parentecis.
 * 
 * Si la funcion de flecha solo tiene una linea de codigo de
 * desarrollo, se puden obviar las llaves
 */

const saludar = () => console.log("Saludando!!!");
saludar();