// Función normal
function saludar(nombre) {
	return `Hola, ${nombre}`;
}

console.log(saludar("Angel"));

/* Tipos de funciones */

// declaradas
function sumar(a, b) {
	return a + b;
}
console.log(sumar(10, 8));

// expresadas
const restar = function (a, b) {
	return a - b;
};
console.log(restar(7, 3));

// flechas - sin this
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 3));
