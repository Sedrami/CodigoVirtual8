/**
 * OBJTOS EN JAVASCRIPT
 */
let cpu = {
    ram: 16,
    nucleos: 8,
    discoSolido: "1Tb",
    enfriamentoLiquido: false
}
console.log(cpu);
//modificando una propiedad del objeto
cpu.ram = 8;
console.log(cpu);
//////////////////////////

let plato = {
    nombre: "Pollito",
    precio: 10.00,
    ingredientes: ["Pollo", "papas fritas", "ensalada"]
}

/*¿Como agregar un ingrediente al objeto plato? */

plato.ingredientes.push("cremas");
plato.ingredientes[0] = "pollo a la brasa"

console.log(plato);

/////////////////////////

let objTrabajador = {
    datosPersonales: {
        nombre: "Sebas",
        apellido: "Pretel",
        edad: 17,
    },
    cargo: "software developer",
    sueldo: 950.00
}
//¿como agregar un atributo a un objeto?
objTrabajador.datosPersonales.telefono = "931060610"

console.log(objTrabajador);

////////////////////////////



let ajiGallina = {
    nombre: "Aji de gallina",
    precio: 12.00,
    ingredientes: [{
        nombre:"Gallina",
        um: "pechuga",
        cant: 1
    }, {
        nombre: "Aji amarillo",
        um: "gramo",
        cant: 200
    }]
}
console.log(ajiGallina);

console.log("Listando los ingredientes");

for (let i = 0; i < ajiGallina.ingredientes.length; i++) {

    console.log(`${ajiGallina.ingredientes[i].cant} ${ajiGallina.ingredientes[i].um} de ${ajiGallina.ingredientes[i].nombre}`);

}