/*
Estructuras que el lenguaje proporciona para la manipulación de datos
*/
// OBJETOS GLOBALES

// Object
const persona = {
	nombre: "Juan",
	edad: 30,
};

// traer valor de nombre
console.log("nombre: " + persona.nombre);

// traer las claves
console.log("claves: " + Object.keys(persona));

// traer los valores
console.log("valores: " + Object.values(persona));

// -------------------------------------------------

// -> function

const multiplicar = new Function("a", "b", "return a * b");
console.log(multiplicar(3, 5));

// -> boolean (todos los objetos en javascript son truthy) incluyendo un booleano falso
const esMayor = new Boolean(3 > 10);
console.log(esMayor.valueOf());

// OBJETOS PARA MANIPULACIÓN DE DATOS

// number
const numero = 42.5678;
console.log(numero.toFixed(2));
console.log(Number.isInteger(numero));
console.log(Number.isNaN(NaN));

// string
const texto = "Hola, Mundo!";
console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.includes("Hola"));

// date
const fecha = new Date();
console.log(fecha.toDateString());
console.log(fecha.getFullYear());
console.log(fecha.getMonth() + 1);

// expresiones regulares
const regex = /\d+/; // Encuentra números
console.log(regex.test("123abc"));
console.log("abc123".match(regex));

// OBJETOS PARA MANIPULAR COLECCIONES (ARRAY, MAP, SET) <
// OBJETOS DE ERROR <

// bonus
console.log(typeof null === "object");
