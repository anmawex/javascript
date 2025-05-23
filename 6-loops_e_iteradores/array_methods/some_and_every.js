// validar cumplimiento de condiciones
const campos = [
	{ nombre: "email", valido: true },
	{ nombre: "contraseña", valido: false },
];

const algunos = campos.some((campo) => campo.valido);
const todos = campos.every((campo) => campo.valido);

console.log(algunos);
console.log(todos);
