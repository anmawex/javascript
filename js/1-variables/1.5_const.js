// CONST - Variables constantes
// Las variables const no pueden ser reasignadas después de su declaración

// 1. Declaración básica
const PI = 3.14159;
const GRAVEDAD = 9.8;

console.log(`PI: ${PI}, Gravedad: ${GRAVEDAD}`);

// 2. Intento de reasignación (esto causará error)
// PI = 3.14; // TypeError: Assignment to constant variable

// 3. const con objetos
const usuario = {
	nombre: "Ana",
	edad: 25
};

// Puedes modificar propiedades del objeto
usuario.edad = 26;
usuario.ciudad = "Madrid";
console.log(usuario);

// Pero no puedes reasignar el objeto completo
// usuario = { nombre: "Pedro" }; // TypeError

// 4. const con arrays
const colores = ["rojo", "verde", "azul"];
colores.push("amarillo"); // Válido
console.log(colores);

// colores = ["naranja", "violeta"]; // Error

// 5. const debe ser inicializada
// const x; // SyntaxError: Missing initializer in const declaration

// 6. const en bucles (for...of)
const frutas = ["manzana", "pera", "uva"];
for (const fruta of frutas) {
	console.log(fruta);
	// fruta = "nueva"; // Error dentro del bucle
}

// 7. Scope de bloque
if (true) {
	const bloqueVar = "solo existo aquí";
	console.log(bloqueVar);
}
// console.log(bloqueVar); // ReferenceError: bloqueVar is not defined

// 8. const vs let - Cuándo usar cada uno
// Usa const por defecto, let solo cuando necesites reasignar

const API_URL = "https://api.example.com"; // No cambiará
let intentos = 0; // Podría cambiar

intentos++;
console.log(`Intentos: ${intentos}, URL: ${API_URL}`);

// 9. const y funciones
const saludar = function(nombre) {
	return `Hola, ${nombre}!`;
};

console.log(saludar("Mundo"));

// 10. const y arrow functions
const duplicar = (numero) => numero * 2;
console.log(duplicar(5));
