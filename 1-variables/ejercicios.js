// EJERCICIOS PRÁCTICOS - VARIABLES Y SCOPE
// Resuelve estos ejercicios para afianzar tus conocimientos

// === EJERCICIO 1: Tipos de variables ===
// Declara las variables apropiadas para cada caso:
// 1. Una constante para el valor de PI
// 2. Una variable que cambiará (edad de una persona)
// 3. Una constante para una configuración que no cambiará
// 4. Una variable para un contador que se incrementará

// Tu código aquí:


// === EJERCICIO 2: Scope de bloque ===
// Corrige el siguiente código para que funcione correctamente:
function problemaScope() {
	if (true) {
		var mensaje = "Hola";
	}
	
	// ¿Por qué esto funciona pero con let daría error?
	console.log(mensaje);
}

// Versión corregida:
function scopeCorregido() {
	// Tu código aquí:
}

// === EJERCICIO 3: Shadowing ===
// Explica qué imprime cada console.log y por qué:
let variable = "global";

function testShadowing() {
	let variable = "función";
	
	if (true) {
		let variable = "bloque";
		console.log("1:", variable);
	}
	
	console.log("2:", variable);
}

console.log("3:", variable);
testShadowing();

// === EJERCICIO 4: Closures ===
// Crea una función que genere contadores independientes
function crearContador() {
	// Tu código aquí:
}

// Prueba:
const contador1 = crearContador();
const contador2 = crearContador();

console.log(contador1()); // Debería ser 1
console.log(contador1()); // Debería ser 2
console.log(contador2()); // Debería ser 1 (independiente)

// === EJERCICIO 5: IIFE ===
// Convierte este código para que no contamine el scope global:
var config = {
	api: "https://api.example.com",
	timeout: 5000
};

var usuario = "admin";

// Usa IIFE para encapsular:
// Tu código aquí:

// === EJERCICIO 6: Hoisting ===
// Explica qué imprime este código y por qué:
function testHoisting() {
	console.log(a); // ¿Qué imprime?
	var a = 5;
	console.log(a); // ¿Qué imprime?
	
	console.log(b); // ¿Qué imprime?
	let b = 10;
	console.log(b); // ¿Qué imprime?
}

// === EJERCICIO 7: Constantes con objetos ===
// Completa el código:
const persona = {
	nombre: "Juan",
	edad: 30
};

// Modifica la edad (debe ser posible)
// Tu código aquí:

// Intenta reasignar el objeto (debería dar error)
// persona = { nombre: "Ana" }; // Descomenta para probar

// === EJERCICIO 8: Bucles y scope ===
// Arregla este código para que funcione correctamente:
for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 100);
}

// El problema es que imprime 3, 3, 3 en lugar de 0, 1, 2
// Solución 1: usando let
// Solución 2: usando IIFE

// === EJERCICIO 9: Funciones y scope ===
// Crea una función que devuelva otra función que acceda a variables de la función externa
function crearSaludoPersonalizado(saludo) {
	// Tu código aquí:
}

const saludarFormal = crearSaludoPersonalizado("Estimado");
const saludarInformal = crearSaludoPersonalizado("Hola");

console.log(saludarFormal("Dr. Smith")); // "Estimado, Dr. Smith!"
console.log(saludarInformal("Ana")); // "Hola, Ana!"

// === EJERCICIO 10: Desafío final ===
// Crea un sistema de gestión de usuarios con:
// - Contador de usuarios
// - Lista privada de usuarios
// - Métodos para agregar, eliminar y listar usuarios
// - Todo encapsulado para evitar acceso directo

function crearGestionUsuarios() {
	// Tu código aquí:
}

const gestion = crearGestionUsuarios();
gestion.agregar("Juan");
gestion.agregar("María");
console.log(gestion.listar()); // ["Juan", "María"]
gestion.eliminar("Juan");
console.log(gestion.listar()); // ["María"]
console.log(gestion.contador()); // 1

// === RESPUESTAS Y EXPLICACIONES ===
// Descomenta la siguiente sección para ver las soluciones

/*
// SOLUCIÓN EJERCICIO 1:
const PI = 3.14159;
let edadPersona = 25;
const CONFIG_API = "https://api.example.com";
let contador = 0;

// SOLUCIÓN EJERCICIO 2:
function scopeCorregido() {
	let mensaje;
	if (true) {
		mensaje = "Hola";
	}
	console.log(mensaje);
}

// SOLUCIÓN EJERCICIO 3:
// Imprime:
// 1: bloque (variable del bloque más interno)
// 2: función (variable de la función)
// 3: global (variable global)
// Por shadowing: cada nivel oculta el nivel anterior

// SOLUCIÓN EJERCICIO 4:
function crearContador() {
	let contador = 0;
	return function() {
		contador++;
		return contador;
	};
}

// SOLUCIÓN EJERCICIO 5:
(function() {
	const config = {
		api: "https://api.example.com",
		timeout: 5000
	};
	
	const usuario = "admin";
	
	// Exponer solo lo necesario
	window.appConfig = config;
	window.appUser = usuario;
})();

// SOLUCIÓN EJERCICIO 6:
// Imprime undefined (var es hoisted pero no inicializado)
// Imprime 5
// Lanza ReferenceError (let tiene TDZ)
// Imprime 10

// SOLUCIÓN EJERCICIO 7:
persona.edad = 31; // Válido
// persona = { nombre: "Ana" }; // Error: cannot reassign const

// SOLUCIÓN EJERCICIO 8:
// Solución 1:
for (let i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 100);
}

// Solución 2:
for (var i = 0; i < 3; i++) {
	(function(i) {
		setTimeout(() => console.log(i), 100);
	})(i);
}

// SOLUCIÓN EJERCICIO 9:
function crearSaludoPersonalizado(saludo) {
	return function(nombre) {
		return `${saludo}, ${nombre}!`;
	};
}

// SOLUCIÓN EJERCICIO 10:
function crearGestionUsuarios() {
	let usuarios = [];
	let contador = 0;
	
	return {
		agregar: function(nombre) {
			usuarios.push(nombre);
			contador++;
		},
		eliminar: function(nombre) {
			const index = usuarios.indexOf(nombre);
			if (index > -1) {
				usuarios.splice(index, 1);
				contador--;
			}
		},
		listar: function() {
			return [...usuarios]; // Copia para evitar modificación externa
		},
		contador: function() {
			return contador;
		}
	};
}
*/
