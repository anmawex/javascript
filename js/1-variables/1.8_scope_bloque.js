// SCOPE DE BLOQUE - Alcance de Bloque
// Introducido con ES6 (let y const)
// Los bloques son delimitados por {}

// 1. Bloques básicos
{
	let variableBloque = "Solo existo en este bloque";
	const constanteBloque = "Yo también";
	console.log(variableBloque); // ✓ Accesible
	console.log(constanteBloque); // ✓ Accesible
}

// console.log(variableBloque); // ✗ ReferenceError
// console.log(constanteBloque); // ✗ ReferenceError

// 2. Bloques if/else
let edad = 18;

if (edad >= 18) {
	let mensaje = "Eres mayor de edad";
	console.log(mensaje); // ✓ "Eres mayor de edad"
} else {
	let mensaje = "Eres menor de edad";
	console.log(mensaje); // ✓ "Eres menor de edad"
}

// console.log(mensaje); // ✗ ReferenceError

// 3. Bloques for
for (let i = 0; i < 3; i++) {
	let valor = i * 2;
	console.log(`i=${i}, valor=${valor}`); // ✓ Accesible
}

// console.log(i); // ✗ ReferenceError
// console.log(valor); // ✗ ReferenceError

// 4. Bloques while/do-while
let contador = 0;
while (contador < 3) {
	let temporal = contador * 10;
	console.log(temporal); // ✓ 0, 10, 20
	contador++;
}

// console.log(temporal); // ✗ ReferenceError

// 5. Bloques try/catch
try {
	let errorPersonalizado = "Este es un error";
	throw new Error(errorPersonalizado);
} catch (error) {
	let mensajeError = `Error capturado: ${error.message}`;
	console.log(mensajeError); // ✓ Accesible aquí
}

// console.log(errorPersonalizado); // ✗ ReferenceError
// console.log(mensajeError); // ✗ ReferenceError

// 6. Bloques switch
let dia = "lunes";
let mensaje;

switch (dia) {
	case "lunes":
		let estadoLunes = "comienzo de semana";
		mensaje = "Ánimo, es lunes";
		break;
	case "viernes":
		let estadoViernes = "fin de semana";
		mensaje = "Por fin viernes";
		break;
	default:
		mensaje = "Día normal";
}

console.log(mensaje); // ✓ "Ánimo, es lunes"
// console.log(estado); // ✗ ReferenceError

// 7. Bloques anidados
{
	let externa = "externa";
	
	{
		let interna = "interna";
		console.log(externa); // ✓ Acceso a variable externa
		console.log(interna); // ✓ Acceso a variable interna
	}
	
	console.log(externa); // ✓
	// console.log(interna); // ✗ Error
}

// 8. Bloques y funciones
function crearContador() {
	let contador = 0;
	
	return {
		incrementar: () => {
			contador++; // Acceso a variable del scope externo
			return contador;
		},
		reiniciar: () => {
			contador = 0; // Reinicia la variable del scope externo
			return contador;
		}
	};
}

const miContador = crearContador();
console.log(miContador.incrementar()); // 1
console.log(miContador.incrementar()); // 2
console.log(miContador.reiniciar()); // 0

// 9. Bloques para organización (sin condicionales)
{
	// Configuración inicial
	const API_URL = "https://api.example.com";
	const TIMEOUT = 5000;
	
	// Variables de estado
	let estaConectado = false;
	let intentos = 0;
	
	console.log("Bloque de configuración inicializado");
}

// 10. Shadowing en bloques
let variable = "global";

{
	let variable = "bloque"; // Shadowing
	console.log(variable); // "bloque"
	
	{
		let variable = "bloque anidado"; // Shadowing anidado
		console.log(variable); // "bloque anidado"
	}
	
	console.log(variable); // "bloque"
}

console.log(variable); // "global"

// 11. const en bucles (for...of)
const colores = ["rojo", "verde", "azul"];
for (const color of colores) {
	// color es constante en cada iteración
	console.log(color);
	// color = "nuevo"; // ✗ Error
}

// 12. var vs let/const en bloques
if (true) {
	var variableVar = "var - scope de función";
	let variableLet = "let - scope de bloque";
	const variableConst = "const - scope de bloque";
}

console.log(variableVar); // ✓ "var - scope de función"
// console.log(variableLet); // ✗ ReferenceError
// console.log(variableConst); // ✗ ReferenceError

// 13. Resumen del scope de bloque
console.log(`
=== RESUMEN SCOPE DE BLOQUE ===
✓ let y const tienen scope de bloque
✓ Variables solo existen dentro del bloque {}
✓ Mejor encapsulación y prevención de errores
✓ Ideal para bucles y condicionales
✓ Permite shadowing seguro
✓ var no tiene scope de bloque (cuidado!)
✓ Fundamental para código moderno y seguro
`);
