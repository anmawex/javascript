// BOOLEAN - Tipo Primitivo Lógico
// Representa valores de verdad: true o false

// === CREACIÓN DE BOOLEANS ===
// 1. Valores literales
let esMayor = true;
let tienePermiso = false;

console.log(esMayor, tienePermiso);

// 2. Constructor Boolean (no recomendado)
let booleano1 = new Boolean(true); // Objeto Boolean
let booleano2 = Boolean(false); // Primitivo boolean

console.log(typeof booleano1); // "object"
console.log(typeof booleano2); // "boolean"

// === CONVERSIÓN A BOOLEANO ===
// 3. Boolean() explícito
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(42)); // true

console.log(Boolean("")); // false (cadena vacía)
console.log(Boolean("hola")); // true
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean({})); // true (cualquier objeto)
console.log(Boolean([])); // true (cualquier array)
console.log(Boolean(function(){})); // true (cualquier función)

// 4. Operador lógico NOT (!)
console.log(!0); // true
console.log(!1); // false
console.log(!""); // true
console.log(!"hola"); // false
console.log(!null); // true
console.log(!undefined); // true

// 5. Doble NOT (!!) para convertir a booleano
let numero = 42;
let resultado = !!numero; // true
console.log(resultado);

let cadenaVacia = "";
let resultado2 = !!cadenaVacia; // false
console.log(resultado2);

// === OPERACIONES LÓGICAS ===
// 6. AND lógico (&&)
let a = true, b = false;
console.log(a && b); // false
console.log(a && true); // true
console.log(false && b); // false (short-circuit)

// 7. OR lógico (||)
console.log(a || b); // true
console.log(a || false); // true
console.log(false || b); // false

// 8. Short-circuit evaluation
function funcion1() {
	console.log("Ejecutando función 1");
	return true;
}

function funcion2() {
	console.log("Ejecutando función 2");
	return false;
}

// AND: si el primero es false, no ejecuta el segundo
console.log(funcion2() && funcion1()); // Solo ejecuta funcion2

// OR: si el primero es true, no ejecuta el segundo
console.log(funcion1() || funcion2()); // Solo ejecuta funcion1

// === TRUTHY AND FALSY VALUES ===
// 9. Falsy values (se convierten a false)
const falsyValues = [
	false, // literal false
	0, // número cero
	-0, // número cero negativo
	0n, // BigInt cero
	"", // cadena vacía
	'', // cadena vacía con comillas simples
	``, // cadena vacía con template literal
	null, // null
	undefined, // undefined
	NaN // Not a Number
];

console.log("Falsy values:");
falsyValues.forEach(value => {
	console.log(`${JSON.stringify(value)} -> ${Boolean(value)}`);
});

// 10. Truthy values (se convierten a true)
const truthyValues = [
	true, // literal true
	1, // números distintos de cero
	-1, // números negativos
	3.14, // decimales
	Infinity, // infinito
	-Infinity, // infinito negativo
	"hola", // cadenas no vacías
	"0", // "0" es truthy
	"false", // "false" es truthy
	[], // arrays vacíos
	{}, // objetos vacíos
	function() {}, // funciones
	new Date(), // objetos Date
	/Sample/ // expresiones regulares
];

console.log("\nTruthy values:");
truthyValues.forEach(value => {
	console.log(`${typeof value} ${JSON.stringify(value)} -> ${Boolean(value)}`);
});

// === USOS PRÁCTICOS ===
// 11. Valores por defecto con OR
let nombre = null;
let nombrePorDefecto = nombre || "Desconocido";
console.log(nombrePorDefecto); // "Desconocido"

let edad = 25;
let edadPorDefecto = edad || 18;
console.log(edadPorDefecto); // 25

// 12. Validación con AND
function procesarUsuario(usuario) {
	usuario && console.log(`Procesando: ${usuario.nombre}`);
	return usuario ? "Usuario válido" : "Usuario inválido";
}

console.log(procesarUsuario({ nombre: "Ana" })); // "Usuario válido"
console.log(procesarUsuario(null)); // "Usuario inválido"

// 13. Operador ternario
let edadUsuario = 16;
let puedeVotar = edadUsuario >= 18 ? "Sí" : "No";
console.log(`¿Puede votar? ${puedeVotar}`);

// 14. Nullish coalescing (??) - ES2020
// Solo actúa con null y undefined, no con otros falsy
let valor1 = null;
let valor2 = undefined;
let valor3 = 0;
let valor4 = "";
let valor5 = false;

console.log(valor1 ?? "defecto"); // "defecto"
console.log(valor2 ?? "defecto"); // "defecto"
console.log(valor3 ?? "defecto"); // 0 (no es null/undefined)
console.log(valor4 ?? "defecto"); // "" (no es null/undefined)
console.log(valor5 ?? "defecto"); // false (no es null/undefined)

// Comparación con ||
console.log(valor3 || "defecto"); // "defecto" (0 es falsy)
console.log(valor4 || "defecto"); // "defecto" ("" es falsy)

// === MÉTODOS BOOLEANOS ===
// 15. toString()
let bool1 = true;
let bool2 = false;

console.log(bool1.toString()); // "true"
console.log(bool2.toString()); // "false"

// 16. valueOf()
console.log(bool1.valueOf()); // true
console.log(bool2.valueOf()); // false

// === COMPARACIONES BOOLEANAS ===
// 17. Comparación de booleans
console.log(true == true); // true
console.log(true == false); // false
console.log(true === false); // false

// 18. Comparación con otros tipos
console.log(true == 1); // true (coerción)
console.log(true === 1); // false (sin coerción)
console.log(false == 0); // true (coerción)
console.log(false === 0); // false (sin coerción)

// === PATRONES ÚTILES ===
// 19. Función de validación
function esValidoEmail(email) {
	return email && typeof email === 'string' && email.includes('@');
}

console.log(esValidoEmail("usuario@ejemplo.com")); // true
console.log(esValidoEmail("")); // false
console.log(esValidoEmail(null)); // false
console.log(esValidoEmail("usuario@ejemplo")); // false

// 20. Switch con booleanos
function clasificarEdad(edad) {
	const esMenor = edad < 18;
	const esAdulto = edad >= 18 && edad < 65;
	const esAdultoMayor = edad >= 65;
	
	switch (true) {
		case esMenor:
			return "Menor de edad";
		case esAdulto:
			return "Adulto";
		case esAdultoMayor:
			return "Adulto mayor";
		default:
			return "Edad no válida";
	}
}

console.log(clasificarEdad(16)); // "Menor de edad"
console.log(clasificarEdad(30)); // "Adulto"
console.log(clasificarEdad(70)); // "Adulto mayor"

// 21. Resumen
console.log(`
=== RESUMEN BOOLEAN ===
✓ Valores: true, false
✓ Falsy: false, 0, "", null, undefined, NaN
✓ Truthy: todo lo demás (incluyendo "0", [], {})
✓ Operadores: && (AND), || (OR), ! (NOT)
✓ Short-circuit: evalúa solo lo necesario
✓ Conversión: Boolean(), !!, operadores lógicos
✓ Nullish coalescing (??): solo para null/undefined
✓ Útiles para validaciones y valores por defecto
✓ Base para condicionales y control de flujo
`);
