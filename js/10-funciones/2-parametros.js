// parámetros por defecto
function saludar(nombre = "Visitante") {
	return `Hola, ${nombre}`;
}
console.log(saludar());

// rest parámetros
function sumarTodo(...nums) {
	return nums.reduce((a, b) => a + b);
}

console.log(sumarTodo(1, 2, 3, 4, 5));

// retorno de valores
function obtenerEdad() {
	return 30;
}

console.log(obtenerEdad());

// arguments object (no funciona en arrow functions y no tiene métodos)
function ejemplo(a, b) {
	console.log(arguments);
	console.log(arguments[0]); // valor de a
	console.log(arguments[1]); // valor de b
}

ejemplo(10, 20);
