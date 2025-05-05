// Funciones anidadas y closures

// anidada
function exterior() {
	function interior() {
		console.log("Soy interior");
	}
	interior();
}

exterior();

// closure
function crearContador() {
	let contador = 0;
	return function () {
		contador++;
		return contador;
	};
}
// Una función puede "recordar" variables del contexto en que fue creada.
const contador1 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2
