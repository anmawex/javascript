// Funciones como objetos de primera clase
function operar(fn) {
	return fn(3, 4);
}

console.log(operar((a, b) => a + b)); // 7

// IIFE -> las encontramos en variables
