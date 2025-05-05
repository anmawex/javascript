function factorial(n) {
	// 0
	if (n === 0) return 1; // ¿qué sucede cuando retorna uno?
	return n * factorial(n - 1); // graficamente/visualmente cómo se ve la recursión
}
console.log(factorial(5));

// errores
// 1. no tener condición base
// 2. no avanzar al case base (no modificar el parámetro para acercarse al caso base)
function infinita(n) {
	return infinita(n - 1);
}

// ejemplo más avanzado
const arbol = {
	nombre: "Raíz",
	hijos: [
		{ nombre: "Hijo 1", hijos: [] },
		{
			nombre: "Hijo 2",
			hijos: [{ nombre: "Nieto 1", hijos: [] }],
		},
	],
};

function recorrer(nodo) {
	console.log(nodo);
	nodo.hijos.forEach((hijo) => recorrer(hijo));
}

console.log(recorrer(arbol));

// ejemplo de cómo se ve la recursión y uso exacto del caso base
// factorial(3)
// = 3 * factorial(2)
// = 3 * (2 * factorial(1))
// = 3 * (2 * (1 * factorial(0)))
// = 3 * (2 * (1 * 1)) ← el caso base retorna 1
// = 3 * (2 * 1)
// = 3 * 2
// = 6

// otro ejemplo visual de recursión
function sumar(n) {
	if (n === 1) return 1;
	return n + sumar(n - 1);
}

sumar(3);

// stack de ejecución
// sumar(3)
// → 3 + sumar(2)
//        → 2 + sumar(1)
//                → 1     ← caso base, devuelve 1

// retorno de cadena
// sumar(1) → 1
// sumar(2) → 2 + 1 = 3
// sumar(3) → 3 + 3 = 6

// stack de llamadas
// | sumar(1) | ← se resuelve primero
// | sumar(2) |
// | sumar(3) | ← se llamó primero pero espera
