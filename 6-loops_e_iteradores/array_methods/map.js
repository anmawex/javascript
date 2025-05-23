//crea un nuevo array transformado
const productos = [
	{ id: 1, nombre: "Teclado", precio: 35 },
	{ id: 2, nombre: "Mouse", precio: 20 },
	{ id: 3, nombre: "Monitor", precio: 150 },
];

const nombresProductos = productos.map((producto) => producto.nombre);

console.log(nombresProductos);
