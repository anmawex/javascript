/* 1. la declaración(no inicialización) de variables y funciones "se mueven al 
 inicio del código"
*/

// let saludo;
saludo = "Hola mundo";

console.log(saludo);
// let saludo; //no tiene hoisting
var saludo; // tiene hoisting

saludar();
function saludar() {
	console.log("Hola desde una función");
} //tiene hoisting

// functionSaludo();
const functionSaludo = function () {
	console.log("Hola desde una función almacenada en una constante");
}; //no tiene hoisting
