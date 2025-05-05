// Podemos declarar arrays de esta manera
let arreglo = new Array();

let mixArray = [
	"Apple",
	{ name: "Angel" },
	true,
	function () {
		console.log("Hola mundo");
	}, // trailing comma (opcional, válida en JS)
];
mixArray[3]();

// acceso a datos a la inversa
let nuevoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nuevoArray[0]);
console.log(nuevoArray[nuevoArray.length - 1]);
console.log(nuevoArray.at(-1));
