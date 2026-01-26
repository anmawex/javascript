// SCOPE GLOBAL - Alcance Global
// Variables declaradas fuera de cualquier función tienen alcance global

// 1. Variable global (accesible desde cualquier parte)
let mensajeGlobal = "Hola desde el scope global";

function mostrarMensaje() {
	console.log(mensajeGlobal); // Accesible dentro de la función
}

mostrarMensaje(); // "Hola desde el scope global"

// 2. Problema: contaminación del scope global
var contador = 0;
var usuario = "admin";
var API_KEY = "12345";

// Cualquier parte del código puede modificar estas variables
function incrementarContador() {
	contador++;
	console.log(`Contador: ${contador}`);
}

incrementarContador(); // 1
incrementarContador(); // 2

// 3. El objeto global (window en navegador, global en Node.js)
// En navegador:
var variableWindow = "Soy una propiedad de window";
console.log(window.variableWindow); // "Soy una propiedad de window"

// let y const no se añaden al objeto global
let variableLet = "No estoy en window";
const variableConst = "Tampoco estoy en window";
console.log(window.variableLet); // undefined
console.log(window.variableConst); // undefined

// 4. Funciones globales
function funcionGlobal() {
	console.log("Soy una función global");
}

// Accesible desde cualquier lugar
function otraFuncion() {
	funcionGlobal(); // Funciona
}

otraFuncion();

// 5. Peligros del scope global
// Problema: colisión de nombres
var config = {
	apiUrl: "https://api.vieja.com"
};

// Si otro script también define config...
var config = {
	apiUrl: "https://api.nueva.com",
	version: "2.0"
};

console.log(config); // Se sobreescribe la configuración anterior

// 6. Mejor práctica: Module Pattern
// Evitar variables globales usando IIFE
(function() {
	var variablePrivada = "No soy global";
	
	window.miApp = {
		getVariable: function() {
			return variablePrivada;
		}
	};
})();

console.log(miApp.getVariable()); // "No soy global"
// console.log(variablePrivada); // ReferenceError

// 7. const en scope global
const CONFIGURACION = {
	apiUrl: "https://api.final.com",
	timeout: 5000
};

// No puede ser reasignada pero sí modificada
CONFIGURACION.timeout = 3000;
console.log(CONFIGURACION);

// 8. Detección de variables globales no declaradas
function usarVariableNoDeclarada() {
	// Si no se declara, se convierte en global automáticamente (modo no estricto)
	variableNoDeclarada = "Me convertí en global";
}

usarVariableNoDeclarada();
console.log(variableNoDeclarada); // Accesible globalmente

// 9. Modo estricto previene variables globales accidentales
"use strict";

function funcionEstricta() {
	// variableGlobalAccidental = "Error"; // ReferenceError
	try {
		variableGlobalAccidental = "Error";
	} catch (error) {
		console.log("Error capturado:", error.message);
	}
}

funcionEstricta();

// 10. Resumen del scope global
console.log(`
=== RESUMEN SCOPE GLOBAL ===
✓ Variables declaradas fuera de funciones son globales
✓ var se añade al objeto global (window), let/const no
✓ Las variables globales pueden ser modificadas desde cualquier lugar
✓ Riesgo de contaminación y colisiones de nombres
✓ Mejor práctica: minimizar variables globales
✓ Usar patrones como IIFE o módulos para encapsular código
`);
