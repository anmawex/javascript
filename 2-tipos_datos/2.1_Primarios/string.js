// STRING - Tipo Primitivo de Cadena
// Secuencia de caracteres Unicode inmutable

// === CREACIÓN DE STRINGS ===
// 1. Diferentes formas de crear strings
let nombre = "Juan"; // Comillas dobles
let saludo = 'Hola'; // Comillas simples
let mensaje = `Hola, ${nombre}`; // Template literals

console.log(nombre, saludo, mensaje);

// 2. Strings vacíos y con espacios
let vacio = "";
let espacio = " ";
let multiplesEspacios = "   ";

console.log(vacio.length); // 0
console.log(espacio.length); // 1
console.log(multiplesEspacios.length); // 3

// 3. Caracteres especiales
let conComillas = "Él dijo: \"Hola\"";
let conLinea = "Línea 1\nLínea 2";
let conTab = "Columna1\tColumna2";
let conBackslash = "Ruta: C:\\Users\\Juan";

console.log(conComillas);
console.log(conLinea);
console.log(conTab);
console.log(conBackslash);

// === TEMPLATE LITERALS ===
// 4. Interpolación de variables
let producto = "Laptop";
let precio = 999.99;
let descripcion = `Producto: ${producto}
Precio: $${precio}
Disponible: ${precio < 1000 ? 'Sí' : 'No'}`;

console.log(descripcion);

// 5. Expresiones en template literals
let a = 10, b = 5;
console.log(`Suma: ${a + b}`); // 15
console.log(`Multiplicación: ${a * b}`); // 50
console.log(`¿Es mayor? ${a > b}`); // true

// 6. Strings multilínea
let html = `
<div>
    <h1>Título</h1>
    <p>Contenido del párrafo</p>
</div>
`;

console.log(html);

// === PROPIEDADES BÁSICAS ===
// 7. Length
let texto = "JavaScript";
console.log(texto.length); // 10

// 8. Acceso a caracteres
console.log(texto[0]); // "J"
console.log(texto[4]); // "S"
console.log(texto[texto.length - 1]); // "t"

// 9. charAt()
console.log(texto.charAt(0)); // "J"
console.log(texto.charAt(4)); // "S"

// === MÉTODOS DE BÚSQUEDA ===
// 10. indexOf y lastIndexOf
let frase = "El rápido zorro marrón salta sobre el perro perezoso";
console.log(frase.indexOf('zorro')); // 10
console.log(frase.indexOf('perro')); // 35
console.log(frase.indexOf('gato')); // -1 (no encontrado)
console.log(frase.lastIndexOf('el')); // 32

// 11. includes
console.log(frase.includes('zorro')); // true
console.log(frase.includes('gato')); // false
console.log(frase.includes('ZORRO')); // false (case sensitive)

// 12. startsWith y endsWith
console.log(frase.startsWith('El')); // true
console.log(frase.startsWith('el')); // false
console.log(frase.endsWith('perezoso')); // true
console.log(frase.endsWith('Perezoso')); // false

// 13. search (con expresiones regulares)
console.log(frase.search(/zorro/)); // 10
console.log(frase.search(/zorro/i)); // 10 (case insensitive)
console.log(frase.search(/gato/)); // -1

// === MÉTODOS DE EXTRACCIÓN ===
// 14. slice
console.log(frase.slice(0, 2)); // "El"
console.log(frase.slice(3, 9)); // "rápido"
console.log(frase.slice(-6)); // "perezoso"
console.log(frase.slice(-10, -6)); // "sobre"

// 15. substring
console.log(frase.substring(0, 2)); // "El"
console.log(frase.substring(10, 3)); // "rápido" (intercambia los índices)

// 16. substr (obsoleto pero útil conocer)
console.log(frase.substr(3, 6)); // "rápido" (inicio, longitud)

// === MÉTODOS DE MODIFICACIÓN ===
// 17. toUpperCase y toLowerCase
console.log(texto.toUpperCase()); // "JAVASCRIPT"
console.log(texto.toLowerCase()); // "javascript"

// 18. trim
let conEspacios = "   Hola Mundo   ";
console.log(conEspacios.trim()); // "Hola Mundo"
console.log(conEspacios.trimStart()); // "Hola Mundo   "
console.log(conEspacios.trimEnd()); // "   Hola Mundo"

// 19. replace
let texto2 = "El gato es negro y el gato es grande";
console.log(texto2.replace('gato', 'perro')); // "El perro es negro y el gato es grande"
console.log(texto2.replace(/gato/g, 'perro')); // "El perro es negro y el perro es grande"
console.log(texto2.replace(/gato/gi, 'PERRO')); // "El PERRO es negro y el PERRO es grande"

// 20. replaceAll (ES2021)
console.log(texto2.replaceAll('gato', 'perro')); // "El perro es negro y el perro es grande"

// === MÉTODOS DE DIVISIÓN ===
// 21. split
let colores = "rojo,verde,azul,amarillo";
console.log(colores.split(',')); // ["rojo", "verde", "azul", "amarillo"]
console.log(colores.split(',', 2)); // ["rojo", "verde"]
console.log(colores.split('')); // ["r","o","j","o",",","v","e","r","d","e",",",...]

// 22. split con expresiones regulares
let texto3 = "palabra1 palabra2,palabra3; palabra4";
console.log(texto3.split(/[,\s;]+/)); // ["palabra1", "palabra2", "palabra3", "palabra4"]

// === MÉTODOS DE REPETICIÓN ===
// 23. repeat
console.log('Hola'.repeat(3)); // "HolaHolaHola"
console.log('*'.repeat(10)); // "**********"

// 24. padStart y padEnd
let numero = "42";
console.log(numero.padStart(5, '0')); // "00042"
console.log(numero.padEnd(5, '0')); // "42000"

console.log('JavaScript'.padStart(20, '-')); // "------------JavaScript"
console.log('JavaScript'.padEnd(20, '-')); // "JavaScript------------"

// === MÉTODOS DE BÚSQUEDA AVANZADA ===
// 25. match
let email = "usuario@ejemplo.com";
console.log(email.match(/\w+@\w+\.\w+/)); // ["usuario@ejemplo.com"]

// 26. matchAll
let texto4 = "tel: 123-456-7890, tel: 987-654-3210";
let telefonos = [...texto4.matchAll(/\d{3}-\d{3}-\d{4}/g)];
console.log(telefonos); // [["123-456-7890"], ["987-654-3210"]]

// === COMPARACIÓN ===
// 27. Comparación lexicográfica
console.log('a' < 'b'); // true
console.log('z' > 'a'); // true
console.log('apple' < 'banana'); // true
console.log('Apple' < 'apple'); // true (mayúsculas van antes)

// 28. localeCompare
console.log('apple'.localeCompare('banana')); // -1
console.log('banana'.localeCompare('apple')); // 1
console.log('apple'.localeCompare('apple')); // 0

// === UNICODE Y CARACTERES ESPECIALES ===
// 29. UTF-16 y caracteres especiales
let emoji = "🚀";
console.log(emoji.length); // 2 (surrogate pair)
console.log([...emoji].length); // 1

// 30. fromCharCode y fromCodePoint
console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCodePoint(0x1F680)); // "🚀"

// 31. codePointAt
console.log('A'.codePointAt(0)); // 65
console.log('🚀'.codePointAt(0)); // 128640

// === UTILIDADES ===
// 32. Verificar si es string
function esString(valor) {
	return typeof valor === 'string';
}

console.log(esString('hola')); // true
console.log(esString(123)); // false
console.log(esString(String(123))); // true

// 33. Convertir a string
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

// 34. Resumen
console.log(`
=== RESUMEN STRING ===
✓ Creación: "", '', ``
✓ Template literals: interpolación y multilínea
✓ Propiedades: length, acceso por índice
✓ Búsqueda: indexOf, includes, startsWith, endsWith
✓ Extracción: slice, substring, substr
✓ Modificación: toUpperCase, toLowerCase, trim, replace
✓ División: split
✓ Repetición: repeat, padStart, padEnd
✓ Unicode: soporte completo con fromCodePoint
✓ Inmutables: los métodos retornan nuevos strings
`);
