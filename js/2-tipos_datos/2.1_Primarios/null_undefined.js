// NULL y UNDEFINED - Tipos Primitivos Especiales

// === UNDEFINED ===
// 1. Variable declarada pero no inicializada
let variableSinValor;
console.log(variableSinValor); // undefined
console.log(typeof variableSinValor); // "undefined"

// 2. Parámetro de función no proporcionado
function saludar(nombre) {
	console.log(nombre); // undefined si no se pasa argumento
	return `Hola, ${nombre || "desconocido"}`;
}

console.log(saludar()); // "Hola, desconocido"
console.log(saludar("Ana")); // "Hola, Ana"

// 3. Propiedad de objeto que no existe
const persona = {
	nombre: "Juan",
	edad: 30
};

console.log(persona.ciudad); // undefined
console.log(persona.direccion.calle); // TypeError (no puede leer propiedad de undefined)

// 4. Array con índice que no existe
const colores = ["rojo", "verde", "azul"];
console.log(colores[1]); // "verde"
console.log(colores[5]); // undefined

// 5. Función que no retorna explícitamente
function sinRetorno() {
	console.log("Esta función no retorna nada");
}

const resultado = sinRetorno();
console.log(resultado); // undefined

// === NULL ===
// 6. Asignación explícita de nulo
let variableNula = null;
console.log(variableNula); // null
console.log(typeof variableNula); // "object" (bug histórico de JavaScript)

// 7. Diferencia entre null y undefined
let variable1; // undefined (declarada pero no inicializada)
let variable2 = null; // null (asignada explícitamente como vacía)

console.log(variable1 === variable2); // false
console.log(variable1 == variable2); // true (coerción de tipos)

// 8. Casos de uso prácticos de null
function encontrarUsuario(id) {
	const usuarios = [
		{ id: 1, nombre: "Ana" },
		{ id: 2, nombre: "Juan" }
	];
	
	const usuario = usuarios.find(u => u.id === id);
	return usuario || null; // Retorna null si no encuentra
}

const usuario1 = encontrarUsuario(1);
const usuario2 = encontrarUsuario(3);

console.log(usuario1); // { id: 1, nombre: "Ana" }
console.log(usuario2); // null

// 9. Verificación segura de propiedades
function obtenerCiudad(usuario) {
	// Forma segura de acceder a propiedades anidadas
	return usuario && usuario.direccion && usuario.direccion.ciudad || "No especificada";
}

const usuarioConDireccion = {
	nombre: "María",
	direccion: {
		ciudad: "Madrid",
		pais: "España"
	}
};

const usuarioSinDireccion = {
	nombre: "Pedro"
};

console.log(obtenerCiudad(usuarioConDireccion)); // "Madrid"
console.log(obtenerCiudad(usuarioSinDireccion)); // "No especificada"
console.log(obtenerCiudad(null)); // "No especificada"

// 10. Operador de encadenamiento opcional (?.)
function obtenerCiudadModerna(usuario) {
	// ES2020: forma más segura y legible
	return usuario?.direccion?.ciudad ?? "No especificada";
}

console.log(obtenerCiudadModerna(usuarioConDireccion)); // "Madrid"
console.log(obtenerCiudadModerna(usuarioSinDireccion)); // "No especificada"
console.log(obtenerCiudadModerna(null)); // "No especificada"

// 11. Operador de fusión nula (??)
// Retorna el valor derecho solo si el izquierdo es null o undefined
let valor1 = null;
let valor2 = undefined;
let valor3 = 0;
let valor4 = "";
let valor5 = false;

console.log(valor1 ?? "valor por defecto"); // "valor por defecto"
console.log(valor2 ?? "valor por defecto"); // "valor por defecto"
console.log(valor3 ?? "valor por defecto"); // 0 (0 no es null/undefined)
console.log(valor4 ?? "valor por defecto"); // "" (cadena vacía no es null/undefined)
console.log(valor5 ?? "valor por defecto"); // false (false no es null/undefined)

// 12. Diferencia con || (OR lógico)
console.log(valor1 || "valor por defecto"); // "valor por defecto"
console.log(valor2 || "valor por defecto"); // "valor por defecto"
console.log(valor3 || "valor por defecto"); // "valor por defecto" (0 es falsy)
console.log(valor4 || "valor por defecto"); // "valor por defecto" ("" es falsy)
console.log(valor5 || "valor por defecto"); // "valor por defecto" (false es falsy)

// 13. Buenas prácticas
// ✓ Usa undefined para indicar "aún no hay valor"
// ✓ Usa null para indicar "intencionalmente vacío"
// ✓ Usa ?? para valores por defecto que no sean falsy
// ✓ Usa ?. para acceso seguro a propiedades

// 14. Función utilería para verificar
function esVacio(valor) {
	return valor === null || valor === undefined;
}

console.log(esVacio(null)); // true
console.log(esVacio(undefined)); // true
console.log(esVacio(0)); // false
console.log(esVacio("")); // false
console.log(esVacio(false)); // false

// 15. Resumen
console.log(`
=== RESUMEN NULL Y UNDEFINED ===
✓ undefined: valor ausente, variable declarada sin inicializar
✓ null: ausencia intencional de valor
✓ typeof null === "object" (bug histórico)
✓ undefined == null (true), undefined === null (false)
✓ ?? (nullish coalescing) solo actúa con null/undefined
✓ ?. (optional chaining) para acceso seguro
✓ Usar null para "vacío intencional", undefined para "no definido"
`);
