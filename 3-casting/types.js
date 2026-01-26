// CASTING Y COERCIÓN DE TIPOS EN JAVASCRIPT
// Conversión explícita e implícita entre tipos de datos

// === COERCIÓN IMPLÍCITA (AUTOMÁTICA) ===

// 1. Coerción a String (con operador +)
let concatenacion = "HOLA AGENTE" + 53;
console.log(concatenacion); // "HOLA AGENTE53"
console.log(typeof concatenacion); // "string"

let resultado = 10 + 5 + "5"; // 15 + "5" = "155"
console.log(resultado); // "155"
console.log(typeof resultado); // "string"

let resultado2 = "10" + 5 + 5; // "105" + 5 = "1055"
console.log(resultado2); // "1055"

// 2. Coerción a Number (con operadores aritméticos)
let operacion = "3" * "3"; // 9
console.log(operacion); // 9
console.log(typeof operacion); // "number"

let resta = "10" - 5; // 5
console.log(resta); // 5
console.log(typeof resta); // "number"

let division = "20" / 4; // 5
console.log(division); // 5
console.log(typeof division); // "number"

// 3. Casos especiales de coerción numérica
console.log("5" * null); // 0 (null → 0)
console.log("5" * undefined); // NaN (undefined → NaN)
console.log("5" * true); // 5 (true → 1)
console.log("5" * false); // 0 (false → 0)

// 4. Coerción a Boolean (en contextos booleanos)
if (0) {
	console.log("No se ejecuta"); // 0 es falsy
}

if ("") {
	console.log("No se ejecuta"); // "" es falsy
}

if ("hola") {
	console.log("Se ejecuta"); // "hola" es truthy
}

if ([]) {
	console.log("Se ejecuta"); // [] es truthy
}

// === CONVERSIÓN EXPLÍCITA (CASTING) ===

// 5. Conversión a String
let value = true;
console.log(typeof value); // "boolean"

let castingValue = String(value);
console.log(castingValue); // "true"
console.log(typeof castingValue); // "string"

// Otras formas de convertir a string
let numero = 42;
console.log(String(numero)); // "42"
console.log(numero.toString()); // "42"
console.log(numero + ""); // "42" (coerción implícita)

// 6. Conversión a Number
let numeroEnString = "723";
console.log(typeof numeroEnString); // "string"

console.log(typeof Number(numeroEnString)); // "number"
console.log(Number(numeroEnString)); // 723

// Casos de conversión a Number
console.log(Number("   123   ")); // 123 (ignora espacios)
console.log(Number("123z")); // NaN (caracter no numérico)
console.log(Number("")); // 0 (cadena vacía)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// parseInt y parseFloat (más flexibles)
console.log(parseInt("123")); // 123
console.log(parseInt("123.45")); // 123 (solo parte entera)
console.log(parseInt("123abc")); // 123 (detiene en no-numérico)
console.log(parseInt("abc123")); // NaN

console.log(parseFloat("123.45")); // 123.45
console.log(parseFloat("123.45abc")); // 123.45
console.log(parseFloat("123.45.67")); // 123.45

// 7. Conversión a Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-1)); // true
console.log(Boolean(42)); // true

console.log(Boolean("hola")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true

console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// === OPERADORES DE CONVERSIÓN ===

// 8. Operador unario +
let texto = "123";
console.log(typeof texto); // "string"
console.log(typeof +texto); // "number"
console.log(+texto); // 123

let texto2 = "123abc";
console.log(+texto2); // NaN

// 9. Doble negación !! para boolean
let valor = "hola";
console.log(!!valor); // true

let valor2 = "";
console.log(!!valor2); // false

// === COERCIÓN EN COMPARACIONES ===

// 10. == (con coerción) vs === (sin coerción)
console.log(5 == "5"); // true (coerción: "5" → 5)
console.log(5 === "5"); // false (tipos diferentes)

console.log(true == 1); // true (coerción: true → 1)
console.log(true === 1); // false

console.log(false == 0); // true (coerción: false → 0)
console.log(false === 0); // false

console.log(null == undefined); // true (caso especial)
console.log(null === undefined); // false

// 11. Comparaciones problemáticas
console.log("0" == false); // true
console.log("0" === false); // false

console.log([] == false); // true
console.log([] === false); // false

console.log("" == 0); // true
console.log("" === 0); // false

// === COERCIÓN EN OPERACIONES MIXTAS ===

// 12. Operaciones mixtas
console.log("5" + 3); // "53" (coerción a string)
console.log("5" - 3); // 2 (coerción a number)
console.log("5" * 3); // 15 (coerción a number)
console.log("5" / 3); // 1.666... (coerción a number)

console.log(5 + "3"); // "53" (coerción a string)
console.log(5 - "3"); // 2 (coerción a number)

// 13. Precedencia y asociatividad
console.log(1 + 2 + "3"); // "33" (1+2=3, luego 3+"3")
console.log("1" + 2 + 3); // "123" ("1"+2="12", luego "12"+3="123")

// === COERCIÓN EN CONTEXTOS ESPECÍFICOS ===

// 14. En templates literals
let nombre = "Juan";
let edad = 25;
console.log(`Nombre: ${nombre}, Edad: ${edad}`); // coerción automática

// 15. En alert/confirm (navegador)
// alert(123); // convierte 123 a "123"
// confirm("¿Continuar?"); // convierte respuesta a boolean

// 16. En JSON
let objeto = { valor: 42, activo: true };
console.log(JSON.stringify(objeto)); // '{"valor":42,"activo":true}'

// === ERRORES COMUNES ===

// 17. Problema: suma vs concatenación
function sumar(a, b) {
	return a + b; // Puede concatenar si son strings
}

console.log(sumar(5, 3)); // 8 ✓
console.log(sumar("5", "3")); // "53" ✗ (queríamos 8)

// Solución:
function sumarCorrecto(a, b) {
	return Number(a) + Number(b);
}

console.log(sumarCorrecto("5", "3")); // 8 ✓

// 18. Problema: comparaciones inesperadas
function esIgualACero(valor) {
	return valor == 0; // Puede dar resultados inesperados
}

console.log(esIgualACero("0")); // true
console.log(esIgualACero(false)); // true
console.log(esIgualACero("")); // true

// Solución:
function esEstrictamenteCero(valor) {
	return valor === 0;
}

console.log(esEstrictamenteCero("0")); // false ✓
console.log(esEstrictamenteCero(false)); // false ✓

// === BUENAS PRÁCTICAS ===

// 19. Usar conversión explícita
function procesarDatos(datos) {
	// Convertir explícitamente para evitar sorpresas
	const id = Number(datos.id);
	const nombre = String(datos.nombre);
	const activo = Boolean(datos.activo);
	
	return { id, nombre, activo };
}

// 20. Validación de tipos
function esNumero(valor) {
	return typeof valor === 'number' && !isNaN(valor);
}

function esStringNoVacio(valor) {
	return typeof valor === 'string' && valor.length > 0;
}

// 21. Función utilería de conversión segura
function convertirSeguro(valor, tipo) {
	switch (tipo) {
		case 'number':
			const num = Number(valor);
			return isNaN(num) ? 0 : num;
		case 'string':
			return String(valor);
		case 'boolean':
			return Boolean(valor);
		default:
			return valor;
	}
}

console.log(convertirSeguro("123", 'number')); // 123
console.log(convertirSeguro("abc", 'number')); // 0
console.log(convertirSeguro(null, 'string')); // "null"
console.log(convertirSeguro(0, 'boolean')); // false

// 22. Resumen
console.log(`
=== RESUMEN CASTING Y COERCIÓN ===
✓ Coerción implícita: automática (JavaScript decide)
✓ Conversión explícita: manual (String(), Number(), Boolean())
✓ Operador +: preferencia por string en concatenación
✓ Operadores *, -, /: coerción a number
✓ == vs ===: igualdad con/sin coerción
✓ !!: conversión rápida a boolean
✓ +valor: conversión rápida a number
✓ Precaución: coerción puede causar bugs inesperados
✓ Buena práctica: usar conversión explícita y ===
`);
