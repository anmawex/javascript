// EJERCICIOS PRÁCTICOS - CASTING Y COERCIÓN DE TIPOS
// Resuelve estos ejercicios para dominar la conversión de tipos

// === EJERCICIO 1: Coerción implícita ===
// Predice el resultado de cada expresión:
console.log("Ejercicio 1 - Predice los resultados:");

const expr1 = "5" + 3;
const expr2 = "5" - 3;
const expr3 = "5" * "2";
const expr4 = "5" / "2";
const expr5 = 5 + "3";
const expr6 = 5 - "3";

// Escribe tus predicciones aquí:
// expr1: ?
// expr2: ?
// expr3: ?
// expr4: ?
// expr5: ?
// expr6: ?

// Verifica tus respuestas:
console.log("expr1:", expr1, typeof expr1);
console.log("expr2:", expr2, typeof expr2);
console.log("expr3:", expr3, typeof expr3);
console.log("expr4:", expr4, typeof expr4);
console.log("expr5:", expr5, typeof expr5);
console.log("expr6:", expr6, typeof expr6);

// === EJERCICIO 2: Comparaciones ===
// ¿Cuáles son true y cuáles false? ¿Por qué?
const comparaciones = [
	5 == "5",
	5 === "5",
	0 == false,
	0 === false,
	"" == 0,
	"" === 0,
	null == undefined,
	null === undefined,
	[] == false,
	[] === false,
	"0" == false,
	"0" === false
];

// Tu código aquí (predice cada una):
// comparaciones[0]: ?
// comparaciones[1]: ?
// ...

// Verificación:
comparaciones.forEach((comp, index) => {
	console.log(`comparaciones[${index}]:`, comp);
});

// === EJERCICIO 3: Conversión explícita ===
// Convierte correctamente los siguientes datos:
const datos = [
	{ valor: "123", tipo: "number" },
	{ valor: "456.78", tipo: "number" },
	{ valor: "true", tipo: "boolean" },
	{ valor: 0, tipo: "string" },
	{ valor: false, tipo: "string" },
	{ valor: "", tipo: "boolean" },
	{ valor: "0", tipo: "boolean" }
];

function convertirDato(dato) {
	// Tu código aquí: convierte dato.valor al tipo especificado en dato.tipo
	// Usa Number(), String(), Boolean() según corresponda
}

// Prueba tu función:
datos.forEach(dato => {
	console.log(`${dato.valor} (${typeof dato.valor}) -> ${convertirDato(dato)} (${typeof convertirDato(dato)})`);
});

// === EJERCICIO 4: Función segura de suma ===
// Crea una función que sume dos valores de forma segura
function sumaSegura(a, b) {
	// Tu código aquí:
	// 1. Convierte a y b a números
	// 2. Si no se pueden convertir, usa 0
	// 3. Retorna la suma
}

// Pruebas:
console.log(sumaSegura(5, 3)); // 8
console.log(sumaSegura("5", "3")); // 8
console.log(sumaSegura("5", "abc")); // 5
console.log(sumaSegura("abc", "def")); // 0
console.log(sumaSegura(null, undefined)); // 0

// === EJERCICIO 5: Validador de tipos ===
// Crea funciones de validación que funcionen correctamente
function esNumeroValido(valor) {
	// Tu código aquí: retorna true si es un número válido (no NaN)
}

function esStringValido(valor) {
	// Tu código aquí: retorna true si es un string no vacío
}

function esBooleanoValido(valor) {
	// Tu código aquí: retorna true si es booleano
}

// Pruebas:
console.log(esNumeroValido(42)); // true
console.log(esNumeroValido("42")); // false
console.log(esNumeroValido(NaN)); // false
console.log(esNumeroValido(null)); // false

console.log(esStringValido("hola")); // true
console.log(esStringValido("")); // false
console.log(esStringValido(42)); // false
console.log(esStringValido("42")); // true

console.log(esBooleanoValido(true)); // true
console.log(esBooleanoValido(false)); // true
console.log(esBooleanoValido("true")); // false
console.log(esBooleanoValido(1)); // false

// === EJERCICIO 6: Operador ternario y coerción ===
// Reescribe usando operador ternario y coerción
function formatearValor(valor) {
	// Si valor es numérico, formatear con 2 decimales
	// Si valor es string, convertir a mayúsculas
	// Si valor es booleano, mostrar "Sí" o "No"
	// Para cualquier otro caso, mostrar "N/A"
	
	// Tu código aquí usando operadores ternarios
}

// Pruebas:
console.log(formatearValor(123.456)); // "123.46"
console.log(formatearValor("hola mundo")); // "HOLA MUNDO"
console.log(formatearValor(true)); // "Sí"
console.log(formatearValor(false)); // "No"
console.log(formatearValor([])); // "N/A"

// === EJERCICIO 7: Parser de entrada de usuario ===
// Crea una función que procese entrada de usuario
function procesarEntrada(entrada) {
	// Tu código aquí:
	// 1. Si entrada es string numérico, convertir a number
	// 2. Si entrada es "true"/"false", convertir a boolean
	// 3. Si entrada es string vacía, null o undefined, retornar null
	// 4. Para cualquier otro caso, retornar el string original (trim)
}

// Pruebas:
console.log(procesarEntrada("123")); // 123 (number)
console.log(procesarEntrada("  45.67  ")); // 45.67 (number)
console.log(procesarEntrada("true")); // true (boolean)
console.log(procesarEntrada("false")); // false (boolean)
console.log(procesarEntrada("")); // null
console.log(procesarEntrada(null)); // null
console.log(procesarEntrada("hola mundo")); // "hola mundo"
console.log(procesarEntrada("  hola  ")); // "hola"

// === EJERCICIO 8: Calculadora con validación ===
// Crea una calculadora que maneje diferentes tipos de entrada
function calculadora(operacion, a, b) {
	// Tu código aquí:
	// 1. Convierte a y b a números si es posible
	// 2. Si no se pueden convertir, usa 0
	// 3. Realiza la operación (+, -, *, /)
	// 4. Maneja división por cero
	// 5. Retorna el resultado o un mensaje de error
}

// Pruebas:
console.log(calculadora("+", "5", "3")); // 8
console.log(calculadora("-", 10, "3")); // 7
console.log(calculadora("*", "4", "2.5")); // 10
console.log(calculadora("/", "10", "2")); // 5
console.log(calculadora("/", "10", "0")); // "Error: división por cero"
console.log(calculadora("+", "abc", "def")); // 0
console.log(calculadora("*", "5", null)); // 0

// === EJERCICIO 9: Comparador estricto flexible ===
// Crea una función de comparación que sea estricta pero flexible
function compararValores(a, b, operador) {
	// Tu código aquí:
	// operador puede ser: "==", "===", "!=", "!==", ">", "<", ">=", "<="
	// Para == y !=, usar comparación estricta pero con conversión de tipos básicos
	// Para === y !==, usar comparación estricta
	// Para operadores de comparación, convertir a números si es posible
}

// Pruebas:
console.log(compararValores("5", "5", "==")); // true
console.log(compararValores("5", 5, "===")); // false
console.log(compararValores("10", "5", ">")); // true
console.log(compararValores("abc", "def", "!=")); // true
console.log(compararValores(null, undefined, "==")); // false (usar ===)

// === EJERCICIO 10: Desafío final - Type Checker ===
// Crea un sistema completo de verificación y conversión de tipos
const TypeChecker = {
	// Métodos para verificar tipos
	isNumber: (valor) => {
		// Tu código aquí
	},
	
	isString: (valor) => {
		// Tu código aquí
	},
	
	isBoolean: (valor) => {
		// Tu código aquí
	},
	
	isNull: (valor) => {
		// Tu código aquí
	},
	
	isUndefined: (valor) => {
		// Tu código aquí
	},
	
	// Métodos de conversión segura
	toNumber: (valor, defecto = 0) => {
		// Tu código aquí
	},
	
	toString: (valor, defecto = "") => {
		// Tu código aquí
	},
	
	toBoolean: (valor, defecto = false) => {
		// Tu código aquí
	},
	
	// Método principal de análisis
	analyze: (valor) => {
		// Retorna un objeto con:
		// - type: tipo real
		// - isPrimitive: boolean
		// - conversions: objeto con conversiones posibles
		// - isTruthy: boolean
	}
};

// Prueba del TypeChecker:
const prueba = "123";
console.log(TypeChecker.analyze(prueba));

// === RESPUESTAS Y SOLUCIONES ===
// Descomenta la siguiente sección para ver las soluciones

/*
// SOLUCIÓN EJERCICIO 1:
// expr1: "53" (string) - concatenación
// expr2: 2 (number) - coerción a número
// expr3: 10 (number) - coerción a número
// expr4: 2.5 (number) - coerción a número
// expr5: "53" (string) - concatenación
// expr6: 2 (number) - coerción a número

// SOLUCIÓN EJERCICIO 2:
// [0]: true (coerción)
// [1]: false (tipos diferentes)
// [2]: true (coerción)
// [3]: false (tipos diferentes)
// [4]: true (coerción)
// [5]: false (tipos diferentes)
// [6]: true (caso especial)
// [7]: false (tipos diferentes)
// [8]: true (coerción compleja)
// [9]: false (tipos diferentes)
// [10]: true (coerción)
// [11]: false (tipos diferentes)

// SOLUCIÓN EJERCICIO 3:
function convertirDato(dato) {
	switch (dato.tipo) {
		case 'number':
			const num = Number(dato.valor);
			return isNaN(num) ? 0 : num;
		case 'string':
			return String(dato.valor);
		case 'boolean':
			return Boolean(dato.valor);
		default:
			return dato.valor;
	}
}

// SOLUCIÓN EJERCICIO 4:
function sumaSegura(a, b) {
	const numA = Number(a) || 0;
	const numB = Number(b) || 0;
	return numA + numB;
}

// SOLUCIÓN EJERCICIO 5:
function esNumeroValido(valor) {
	return typeof valor === 'number' && !isNaN(valor);
}

function esStringValido(valor) {
	return typeof valor === 'string' && valor.trim().length > 0;
}

function esBooleanoValido(valor) {
	return typeof valor === 'boolean';
}

// SOLUCIÓN EJERCICIO 6:
function formatearValor(valor) {
	const esNum = !isNaN(Number(valor)) && valor !== "";
	const esBool = valor === true || valor === false;
	
	return esNum ? Number(valor).toFixed(2) :
		   esBool ? (valor ? "Sí" : "No") :
		   typeof valor === 'string' ? valor.toUpperCase() :
		   "N/A";
}

// SOLUCIÓN EJERCICIO 7:
function procesarEntrada(entrada) {
	if (entrada === null || entrada === undefined || entrada === "") {
		return null;
	}
	
	const str = String(entrada).trim().toLowerCase();
	
	if (str === "true") return true;
	if (str === "false") return false;
	
	const num = Number(str);
	if (!isNaN(num)) return num;
	
	return str;
}

// SOLUCIÓN EJERCICIO 8:
function calculadora(operacion, a, b) {
	const numA = Number(a) || 0;
	const numB = Number(b) || 0;
	
	switch (operacion) {
		case '+': return numA + numB;
		case '-': return numA - numB;
		case '*': return numA * numB;
		case '/': 
			if (numB === 0) return "Error: división por cero";
			return numA / numB;
		default: return "Error: operación no válida";
	}
}

// SOLUCIÓN EJERCICIO 9:
function compararValores(a, b, operador) {
	switch (operador) {
		case '==':
			return String(a) === String(b) || Number(a) === Number(b);
		case '===':
			return a === b;
		case '!=':
			return a != b;
		case '!==':
			return a !== b;
		case '>':
		case '<':
		case '>=':
		case '<=':
			const numA = Number(a);
			const numB = Number(b);
			if (operador === '>') return numA > numB;
			if (operador === '<') return numA < numB;
			if (operador === '>=') return numA >= numB;
			if (operador === '<=') return numA <= numB;
		default:
			return false;
	}
}

// SOLUCIÓN EJERCICIO 10:
const TypeChecker = {
	isNumber: (valor) => typeof valor === 'number' && !isNaN(valor),
	isString: (valor) => typeof valor === 'string',
	isBoolean: (valor) => typeof valor === 'boolean',
	isNull: (valor) => valor === null,
	isUndefined: (valor) => valor === undefined,
	
	toNumber: (valor, defecto = 0) => {
		const num = Number(valor);
		return isNaN(num) ? defecto : num;
	},
	
	toString: (valor, defecto = "") => {
		return valor === null || valor === undefined ? defecto : String(valor);
	},
	
	toBoolean: (valor, defecto = false) => {
		return valor === null || valor === undefined ? defecto : Boolean(valor);
	},
	
	analyze: (valor) => ({
		type: typeof valor,
		isPrimitive: ['number', 'string', 'boolean', 'null', 'undefined', 'symbol', 'bigint'].includes(typeof valor),
		conversions: {
			toNumber: TypeChecker.toNumber(valor),
			toString: TypeChecker.toString(valor),
			toBoolean: TypeChecker.toBoolean(valor)
		},
		isTruthy: Boolean(valor)
	})
};
*/
