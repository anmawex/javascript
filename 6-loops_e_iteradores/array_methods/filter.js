// filtrar elementos según una condición
const usuarios = [
	{ id: 1, nombre: "Ana", activo: true },
	{ id: 2, nombre: "Luis", activo: false },
	{ id: 3, nombre: "Marta", activo: true },
];

const usuariosActivos = usuarios.filter((usuario) => usuario.activo);

console.log(usuariosActivos);
