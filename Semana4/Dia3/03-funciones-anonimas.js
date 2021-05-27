/**
 * FUNCIONES ANONIMAS y CALLBACKS
 */
 function miFuncion(){
    console.log("Soy mi funcion");
}
function buscarPorDNI(dni, parametro2) {

    let respuesta = "Jorge";
    parametro2 (respuesta);
}


buscarPorDNI("78451245", function (nombre) {
    console.log(`Resultado: ${nombre}`);

});


/************************ */

let saludar = function () {
    console.log("estoy saludando");
}

saludar();







/**
 * Funcion que entrega los usuarios del sistema
 * @param {Function} callback 
 * Funcion que recibe un callback al cual envía
 * un arreglo con la lista de usuarios
 */
const getNombres = (callback) => {
    fetch("https://reqres.in/api/users").then((peticion) => {
      return peticion.json();
    }).then(data => {
        let nombres = data.data.map(obj => obj.first_name);
        callback(nombres);
    })
};


getNombres(function(usuarios) {
    console.log(usuarios);
});

console.log("LINEA FINAL!!!!!");