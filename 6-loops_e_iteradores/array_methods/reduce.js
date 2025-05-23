// acumular valores
const carrito = [
	{ producto: "Mouse", precio: 20, cantidad: 2 },
	{ producto: "Teclado", precio: 35, cantidad: 1 },
];

const total = carrito.reduce(
	(acum, item) => acum + item.precio * item.cantidad,
	0
);

console.log(total);
