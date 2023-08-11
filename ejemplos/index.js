//Ejemplos JavaScript
/**Comentario 
 * de  bloque.
 */

console.log("Hello  World");
console.log("-----");

const edad = 55;
let nombre = "juan";
const esEstudiante = false;
const altura = 1.70;
const semestre = [] ;//list -> Array
const  materiaPreferida = {nombre:"Calculo",id:0};// Diccionario -> objetos-> JSON(Javascript obeject notation)
const universidad = null;
const carrera = undefined;
console.log("Tipo de dato del nombre: " + typeof nombre)
const precioMatricula = "500000000.5";
console.log(parseInt(precioMatricula));
console.log("Tipo de dato de la matricula: " + typeof precioMatricula);
console.log(`${nombre} ${altura} `);
console.log("operador ternario (condiconal)(exp ? verdadero : falso)");
console.log( edad>=18 ? "es mayor de edad": "Es menor de edad" );
const dia = "Lunes";
switch (dia) {
    case "Martes":
        console.log("Hoy no es lunes")
        break;
    case "Lunes":
        console.log("Hoy si es lunes")
        break;
    default:
        console.log("Hoy no es martes")
        break;
}

console.log("ciclos")
for (const iterator of [1,2,3]) { //Arrays
    console.log(iterator);
}
for (const key in materiaPreferida) { //Objetos
    console.log(key);
}
[1,2,3,4].forEach(element =>{
    console.log(element);
});
console.log("Funciones")
function imprimirNombre(nombre){
    console.log(nombre);
}
imprimirNombre(nombre);
const imprimirNombreApellido = (nombre, edad) => {
    console.log(`${nombre} ${edad} `);
}
imprimirNombreApellido(nombre,edad);

const crearNombreApellido = (nombre, edad) => {
    console.log("Global Scope Fake")
    console.log(`${nombre} ${edad} `);
    let name = nombre;
    if(nombre.length>3){
        let name = "nombre corto " + edad
        console.log(name);
    }
}
crearNombreApellido(nombre,edad);

const botoneshw = document.getElementsByTagName('button')
const imprimirNombreL = (Nombre,apellido) => {
    console.log(`${Nombre} ${apellido}`)
}
console.log(botones)