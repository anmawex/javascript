// OPERADORES DE COMPARACIÓN EN JAVASCRIPT
// == vs ===, != vs !==, y mejores prácticas

// === IGUALDAD == (CON COERCIÓN) ===

// 1. Comparación de números y strings
console.log(5 == "5"); // true (string "5" → número 5)
console.log(10 == "10"); // true
console.log(0 == "0"); // true

// 2. Comparación con booleanos
console.log(true == 1); // true (true → 1)
console.log(false == 0); // true (false → 0)
console.log(true == "1"); // true (true → 1, "1" → 1)
console.log(false == "0"); // true (false → 0, "0" → 0)

// 3. Comparación con null y undefined
console.log(null == undefined); // true (caso especial)
console.log(null == null); // true
console.log(undefined == undefined); // true

// 4. Comparación de objetos (referencia)
const obj1 = { valor: 1 };
const obj2 = { valor: 1 };
const obj3 = obj1;

console.log(obj1 == obj2); // false (diferentes referencias)
console.log(obj1 == obj3); // true (misma referencia)

// 5. Casos problemáticos de ==
console.log("0" == false); // true
console.log("" == false); // true
console.log([] == false); // true
console.log([] == ""); // true
console.log([0] == false); // true

// === IGUALDAD ESTRICTA === (SIN COERCIÓN)

// 6. Comparación estricta de tipos
console.log(5 === "5"); // false (tipos diferentes)
console.log(10 === 10); // true
console.log(true === 1); // false (tipos diferentes)
console.log(false === 0); // false (tipos diferentes)

// 7. null y undefined
console.log(null === undefined); // false (tipos diferentes)
console.log(null === null); // true
console.log(undefined === undefined); // true

// 8. Objetos con ===
console.log(obj1 === obj2); // false (diferentes referencias)
console.log(obj1 === obj3); // true (misma referencia)

// === DESIGUALDAD != (CON COERCIÓN) ===

// 9. Operador != (negación de ==)
console.log(5 != "5"); // false (porque 5 == "5" es true)
console.log(5 != "6"); // true (porque 5 == "6" es false)
console.log(true != 1); // false (porque true == 1 es true)
console.log(false != 0); // false (porque false == 0 es true)

// 10. null y undefined con !=
console.log(null != undefined); // false (porque null == undefined es true)
console.log(null != null); // false
console.log(undefined != undefined); // false

// === DESIGUALDAD ESTRICTA !== (SIN COERCIÓN) ===

// 11. Operador !== (negación de ===)
console.log(5 !== "5"); // true (tipos diferentes)
console.log(5 !== 5); // false (mismo valor y tipo)
console.log(true !== 1); // true (tipos diferentes)
console.log(false !== 0); // true (tipos diferentes)

// 12. null y undefined con !==
console.log(null !== undefined); // true (tipos diferentes)
console.log(null !== null); // false
console.log(undefined !== undefined); // false

// === OPERADORES RELACIONALES ===

// 13. Mayor que (>) y menor que (<)
console.log(5 > 3); // true
console.log("10" > 2); // true ("10" → 10)
console.log("5" > "3"); // true (comparación lexicográfica)
console.log("a" > "b"); // false (lexicográfico)

// 14. Mayor o igual que (>=) y menor o igual que (<=)
console.log(5 >= 5); // true
console.log("10" >= 10); // true
console.log("5" >= "5"); // true

// 15. Comparaciones con strings
console.log("apple" < "banana"); // true (lexicográfico)
console.log("Apple" < "apple"); // true (mayúsculas van antes)
console.log("10" < "2"); // true (lexicográfico, no numérico)

// === COERCIÓN EN OPERADORES RELACIONALES ===

// 16. Coerción automática a números
console.log("5" > 3); // true
console.log("10" < 20); // true
console.log("abc" > 0); // false ("abc" → NaN)

// 17. NaN en comparaciones
console.log(NaN > 0); // false
console.log(NaN < 0); // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// 18. Verificación de NaN
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true
console.log(isNaN("abc")); // true (conversión a NaN)
console.log(Number.isNaN("abc")); // false (no es NaN de tipo number)

// === COMPARACIONES DE OBJETOS ===

// 19. Arrays y objetos
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.log(arr1 == arr2); // false (diferentes referencias)
console.log(arr1 === arr2); // false (diferentes referencias)
console.log(arr1 == arr3); // true (misma referencia)

// 20. Comparación de contenido (deep equality)
function deepEqual(a, b) {
	// Comparación simple para este ejemplo
	return JSON.stringify(a) === JSON.stringify(b);
}

console.log(deepEqual(arr1, arr2)); // true
console.log(deepEqual(obj1, obj2)); // true

// === BUENAS PRÁCTICAS ===

// 21. Usar siempre === y !==
function esIgual(a, b) {
	// Correcto: usar ===
	return a === b;
}

function esDiferente(a, b) {
	// Correcto: usar !==
	return a !== b;
}

// 22. Verificación de null/undefined
function esNuloOIndefinido(valor) {
	// Correcto: verificar ambos casos
	return valor === null || valor === undefined;
}

// 23. Verificación de array vacío
function esArrayVacio(arr) {
	// Correcto: verificar que es array y tiene longitud 0
	return Array.isArray(arr) && arr.length === 0;
}

// 24. Comparación de números con NaN
function sonIgualesNumeros(a, b) {
	// Correcto: manejar NaN
	if (Number.isNaN(a) && Number.isNaN(b)) {
		return true;
	}
	return a === b;
}

// === ERRORES COMUNES Y SOLUCIONES ===

// 25. Error: usar == en lugar de ===
function problemaIgualdad(valor) {
	// Problemático: permite coerción inesperada
	if (valor == 0) {
		return "es cero o falso o vacío o null";
	}
}

// Solución:
function solucionIgualdad(valor) {
	// Correcto: verificación estricta
	if (valor === 0) {
		return "es exactamente cero";
	}
	if (valor === false) {
		return "es exactamente falso";
	}
}

// 26. Error: comparar objetos por valor
function problemaObjetos(obj1, obj2) {
	// Problemático: nunca será true si son objetos diferentes
	return obj1 === obj2;
}

// Solución:
function solucionObjetos(obj1, obj2) {
	// Correcto: comparar propiedades específicas
	return obj1.id === obj2.id && obj1.nombre === obj2.nombre;
}

// 27. Error: no manejar NaN
function problemaNaN(valor) {
	// Problemático: NaN nunca es igual a nada
	return valor === valor; // false si valor es NaN
}

// Solución:
function solucionNaN(valor) {
	// Correcto: verificar NaN explícitamente
	return Number.isNaN(valor) ? false : valor === valor;
}

// === UTILIDADES DE COMPARACIÓN ===

// 28. Función de comparación segura
function safeEqual(a, b, strict = true) {
	if (strict) {
		return a === b;
	} else {
		// Comparación flexible pero controlada
		if (a == null && b == null) return true;
		if (typeof a === typeof b) {
			return a === b;
		}
		// Convertir a números si ambos son numéricos
		const numA = Number(a);
		const numB = Number(b);
		if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
			return numA === numB;
		}
		return false;
	}
}

// 29. Comparador de tipos
function compareTypes(a, b) {
	const typeA = typeof a;
	const typeB = typeof b;
	
	return {
		sameType: typeA === typeB,
		typeA,
		typeB,
		bothNull: a === null && b === null,
		bothUndefined: a === undefined && b === undefined,
		bothNaN: Number.isNaN(a) && Number.isNaN(b)
	};
}

// 30. Resumen
console.log(`
=== RESUMEN OPERADORES DE COMPARACIÓN ===
✓ == : igualdad con coerción (evitar en producción)
✓ === : igualdad estricta (recomendado)
✓ != : desigualdad con coerción (evitar)
✓ !== : desigualdad estricta (recomendado)
✓ >, <, >=, <= : operadores relacionales
✓ Objetos: comparan por referencia, no por valor
✓ NaN: nunca es igual a nada (incluido sí mismo)
✓ null == undefined : true (caso especial)
✓ Buena práctica: siempre usar === y !==
✓ Para comparar contenido de objetos: usar funciones personalizadas
`);
