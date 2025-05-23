// devuelve el primer elemento que cumple una condición
const productos = [
	{ id: 1, nombre: "Teclado", stock: 10 },
	{ id: 2, nombre: "Mouse", stock: 0 },
];

const encontrarProducto = productos.find((producto) => producto.id === 2);

console.log(encontrarProducto);
