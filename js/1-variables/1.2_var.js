// 1. las variables tipo var no tienen alcance de bloque (incluyendo bucles)
if (true) {
	var test1 = true;
}

console.log(test1);

if (true) {
	let test2 = false;
}

// console.log(test2);

for (var i1 = 0; i1 < 10; i1++) {
	var lastNumber = i1;
	// let lastNumber = i1;
}
console.log(lastNumber);
console.log(i1);

/* 2. var se vuelve una variable a nivel de función cuando esta se encuentra dentro 
de un bloque, y el bloque a su vez dentro de la función */

function sayHi() {
	if (true) {
		var phrase = "Hello World!";
	}
	console.log(phrase);
}

sayHi();
// console.log(phrase);

// 3. se pueden redeclarar variables
var equipo = "Real Madrid";
var equipo = "Barcelona";
console.log(equipo);

// 4. pueden ser declaradas debajo donde se utilizan
function sayHelloWorld() {
	phrase = "Hello World";
	console.log(phrase);
	var phrase;

	phrase2 = "Hello Again";
	if (true) {
		var phrase2;
	}
	console.log(phrase2);

	// las asignaciones no son hoisted(elevadas)
	console.log(phrase3);
	var phrase3 = "Hoho, Hellooo";
}

sayHelloWorld();

// no tienen alcance de bloque
// las declaraciones siempre se procesarán al inicio de la función o script global
