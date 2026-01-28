// SCOPE DE FUNCIÓN - Alcance de Función
// Variables declaradas dentro de una función solo son accesibles dentro de esa función

// 1. Scope de función básico
function miFuncion() {
	var variableLocal = "Solo existo dentro de miFuncion";
	console.log(variableLocal); // ✓ Accesible aquí
}

miFuncion();
// console.log(variableLocal); // ✗ ReferenceError: variableLocal is not defined

// 2. var vs let/const en scope de función
function ejemploVar() {
	if (true) {
		var variableVar = "var tiene scope de función";
		let variableLet = "let tiene scope de bloque";
		const variableConst = "const tiene scope de bloque";
	}
	
	console.log(variableVar); // ✓ Accesible (function scope)
	// console.log(variableLet); // ✗ Error (block scope)
	// console.log(variableConst); // ✗ Error (block scope)
}

ejemploVar();

// 3. Variables con el mismo nombre en diferentes scopes
var variableGlobal = "Global";

function funcionExterna() {
	var variableExterna = "Externa";
	
	function funcionInterna() {
		var variableInterna = "Interna";
		console.log(variableInterna); // "Interna"
		console.log(variableExterna); // "Externa"
		console.log(variableGlobal); // "Global"
	}
	
	funcionInterna();
	// console.log(variableInterna); // ✗ Error
}

funcionExterna();

// 4. Shadowing (ocultamiento de variables)
var nombre = "Carlos";

function mostrarNombre() {
	var nombre = "Ana"; // Oculta la variable global
	console.log(nombre); // "Ana"
	
	function funcionInterna() {
		var nombre = "Pedro"; // Oculta la variable externa
		console.log(nombre); // "Pedro"
	}
	
	funcionInterna();
	console.log(nombre); // "Ana"
}

mostrarNombre();
console.log(nombre); // "Carlos"

// 5. Funciones como "constructores de scope"
function crearContador() {
	var contador = 0;
	
	return {
		incrementar: function() {
			contador++;
			return contador;
		},
		decrementar: function() {
			contador--;
			return contador;
		},
		obtenerValor: function() {
			return contador;
		}
	};
}

var contador1 = crearContador();
var contador2 = crearContador();

console.log(contador1.incrementar()); // 1
console.log(contador1.incrementar()); // 2
console.log(contador2.incrementar()); // 1 (independiente)
console.log(contador1.obtenerValor()); // 2
console.log(contador2.obtenerValor()); // 1

// 6. Hoisting en scope de función
function ejemploHoisting() {
	console.log(variable); // undefined (no error)
	var variable = "declarada después";
	console.log(variable); // "declarada después"
	
	// Con let/const daría error
	try {
		console.log(variableLet);
	} catch (error) {
		console.log("Error con let:", error.message);
	}
	
	let variableLet = "let";
}

ejemploHoisting();

// 7. Parámetros de función (parte del scope de función)
function saludar(nombre, saludo = "Hola") {
	const mensajeCompleto = `${saludo}, ${nombre}!`;
	return mensajeCompleto;
}

console.log(saludar("María")); // "Hola, María!"
console.log(saludar("Juan", "Buenos días")); // "Buenos días, Juan!"

// 8. Variables locales y recursión
function factorial(n) {
	// n es local a cada llamada recursiva
	if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// 9. Scope de función y closures
function crearSaludoPersonalizado(saludo) {
	// saludo está en el scope de la función externa
	return function(nombre) {
		// nombre está en el scope de la función interna
		// pero puede acceder a 'saludo' (closure)
		return `${saludo}, ${nombre}!`;
	};
}

const saludarFormal = crearSaludoPersonalizado("Estimado");
const saludarInformal = crearSaludoPersonalizado("Qué tal");

console.log(saludarFormal("Dr. Smith")); // "Estimado, Dr. Smith!"
console.log(saludarInformal("Carlos")); // "Qué tal, Carlos!"

// 10. Resumen del scope de función
console.log(`
=== RESUMEN SCOPE DE FUNCIÓN ===
✓ Variables declaradas dentro de función solo accesibles ahí
✓ var: scope de función, let/const: scope de bloque
✓ Funciones crean su propio scope
✓ Permite encapsulación y privacidad
✓ Base para closures y patrones de diseño
✓ Evita contaminación del scope global
`);
