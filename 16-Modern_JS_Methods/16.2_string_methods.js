// MÉTODOS DE STRING MODERNOS - ES6+
// Métodos modernos para manipulación de strings

// === MÉTODOS DE BÚSQUEDA ===

// 1. includes - verificar si contiene substring (ES6)
const frase = "JavaScript es un lenguaje de programación";
console.log('¿Contiene "JavaScript"?:', frase.includes('JavaScript')); // true
console.log('¿Contiene "Python"?:', frase.includes('Python')); // false

// 2. startsWith - verificar si comienza con substring (ES6)
const texto = "Hola Mundo";
console.log('¿Comienza con "Hola"?:', texto.startsWith('Hola')); // true
console.log('Comienza con "Mundo"?:', texto.startsWith('Mundo')); // false

// 3. endsWith - verificar si termina con substring (ES6)
console.log('Termina con "programación"?:', frase.endsWith('programación')); // true
console.log('programación" === "programación"'); // true

// 4. includes con arrays (ES7)
const palabras = ['hola', 'mundo', 'javascript', 'programación'];
console.log('Contiene "javascript"?:', palabras.includes('javascript')); // true
console.log('Contiene "python"?:', palabras.includes('python')); // false

// === MÉTODOS DE TRANSFORMACIÓN ===

// 5. toUpperCase - convertir a mayúsculas
const minusculas = 'hola mundo';
console.log('Mayúsculas:', minusculas.toUpperCase()); // "HOLA MUNDO"

// 6. toLowerCase - convertir a minúsculas
const mayusculas = 'HOLA MUNDO';
console.log('Minúsculas:', mayusculas.toLowerCase()); // "hola mundo"

// 7. toLocaleString - formatear según localidad
const fecha = new Date();
console.log('Fecha en español:', fecha.toLocaleString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));

console.log('Fecha en inglés:', fecha.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));

// 8. toLocaleLowerCase/UpperCase con localidad específica
const texto = 'HOLA MUNDO';
console.log('Minúsculas (es-ES):', texto.toLocaleLowerCase('es-ES'));
console.log('Mayúsculas (en-US):', texto.toLocaleUpperCase('en-US'));

// === MÉTOS DE BÚSQUEDA ===

// 9. trim - eliminar espacios en blanco
const conEspacios = '   Hola Mundo   ';
console.log('Con espacios:', `"${conEspacios}"`); // "   Hola Mundo   "
console.log('Sin espacios:', conEspacios.trim()); // "Hola Mundo"

// 10. trimStart y trimEnd (ES2019)
const conEspaciosInicio = '   Hola Mundo   ';
const conEspaciosFin = '   Hola Mundo   ';
console.log('Trim start:', conEspaciosInicio.trimStart()); // "Hola Mundo   "
console.log('Trim end:', conEspaciosFin.trimEnd()); // "   Hola Mundo   "

// 11. padStart - rellenar al principio
const numero = '42';
console.log('Con padding al principio:', numero.padStart(5, '0')); // "00042"
console.log('Con padding al final:', numero.padEnd(5, '0')); // "42000"

// 12. padEnd - rellenar al final
const textoCorto = 'Hola';
console.log('Con padding al final:', textoCorto.padEnd(10)); // "Hola        "

// 13. repeat - repetir string
const saludo = 'Hola ';
console.log('Repetido 3 veces:', saludo.repeat(3)); // "Hola Hola Hola Hola "

// === MÉTODOS DE BÚSQUEDA AVANZADOS ===

// 14. match - buscar coincidencias con expresiones regulares
const textoCompleto = 'El código 123 es importante';
console.log('¿Contiene números?:', textoCompleto.match(/\d+/)); // ["123"]
console.log('¿Contiene letras?:', textoCompleto(/[a-zA-Z]/)); // ["código", "es", "es", "importante", "es", "imporante"]

// 15. matchAll - encontrar todas las coincidencias
const texto2 = 'JavaScript es versátil y poderoso';
const coincidencias = [...texto2.matchAll(/\b[a-z]/g)];
console.log('Letras encontradas:', coincidencias); // ["j", "s", "v", "s", "p", "r"]

// 16. search - buscar primera coincidencia
const patron = /JavaScript/g;
console.log('Posición de "JavaScript": texto2.search(patron)); // 0

// 17. replace - reemplazar coincidencias
const reemplazado = texto2.replace(/JavaScript/g, 'TypeScript');
console.log('Reemplazado:', reemplazado); // "TypeScript es versátil y poderoso"

// 18. replaceAll - reemplazar todas las coincidencias
const reemplazadoTodo = texto2.replace(/\b[a-z]/g, 'JS');
console.log('Reemplazado todo:', reemplazado); // "JS es versátil y poderoso"

// === MÉTODOS DE COMPARACIÓN ===

// 19. localeCompare - comparación sensible a idioma
const palabras = ['árbol', 'éxito', 'éxito', 'éxito'];
console.log('árbol'.localeCompare('éxito')); // -1
console.log('éxito'.localeCompare('éxito')); // 0

// 20. localeCompare con opciones
const colores = ['rojo', 'verde', 'azul'];
console.log('rojo'.localeCompare('verde')); // 1 ("rojo" < "verde")
console.log('azul'.localeCompare('verde')); // -1 ("azul" > "verde")

// === MÉTODOS DE CODIFICACIÓN Y VALIDACIÓN ===

// 21. codePointAt - obtener punto de código de carácter
const texto3 = 'Hola';
console.log('Código de "H":', texto3.codePointAt(0)); // 72
console.log('Código de "o": texto3.codePointAt(1)); // 111

// 22. fromCodePoint - crear carácter desde código
console.log('Carácter desde código (U+1F600):', String.fromCodePoint(0x1F600)); // "🚀"

// 23. fromCharCode - crear carácter desde código ASCII
console.log('Carácter desde código (65):', String.fromCharCode(65)); // "A"
console.log('Carácter desde código (90):', String.fromCharCode(90)); // "Z"

// === MÉTODOS DE PLANTILLADO ===

// 24. padStart - rellenar al principio
const numero1 = '7';
console.log('Padding al principio:', numero1.padStart(3, '0')); // "007"

// 25. padEnd - rellenar al final
const numero2 = '42';
console.log('Padding al final:', numero2.padEnd(5, '0')); // "42000"

// 26. repeat - repetir string
const guion = '★';
console.log('Estrella:', guion.repeat(5)); // "★★★★★★★"

// 27. matchAll con plantillas
const html = '<div><p>Contenido</p><span>Etiqueta</span></div>';
const etiquetas = [...html.matchAll(/<[^>]+>/g)];
console.log('Etiquetas encontradas:', etiquetas); // ["<div>", "<p>", "<span>"]

// === MÉTODOS DE ITERACIÓN ===

// 28. Symbol.iterator - iterador para strings
const iterador = texto[Symbol.iterator]();
let resultado = '';
for (const letra of iterador) {
    resultado += letra;
    console.log('Letra actual:', letra);
}
console.log('String completo:', resultado);

// 29. for...of (ES6) - iterar sobre strings
for (const letra of texto) {
    console.log(`Letra: ${letra}`);
}

// 30. for...of con índices
for (const [indice, letra] of texto.entries()) {
    console.log(`Índice ${indice}: ${letra}`);
}

// === MÉTODOS DE CONVERSIÓN ===

// 31. JSON.stringify y JSON.parse
const objeto = { nombre: 'Juan', edad: 30, activo: true };
const jsonString = JSON.stringify(objeto);
console.log('JSON string:', jsonString);

// 32. JSON.parse
const objetoDesdeJSON = JSON.parse(jsonString);
console.log('Objeto desde JSON:', objetoDesdeJSON);

// 33. JSON.stringify con espacio
const objetoConEspacios = { nombre: 'Juan', edad: 30 };
console.log('JSON con espacios:', JSON.stringify(objetoConEspacios, null, 2));

// === MÉTODOS DE BÚSQUEDA ===

// 34. String.raw - plantilla literal (ES6)
const plantilla = String.raw`Hola ${nombre}`;
console.log('Plantilla literal:', plantilla); // "Hola undefined"

// 35. String.fromCodePoint - para caracteres especiales
const emoji = '🚀';
console.log('Emoji como string:', emoji); // "🚀"
console.log('Longitud del emoji:', emoji.length); // 2 (surrogate pair)

// 36. fromCodePoint para emojis complejos
const emojiComplejo = '🚀';
console.log('Emoji completo:', emojiComplejo); // "🚀"
console.log('Primer code point:', emojiCompleto.codePointAt(0)); // 128640

// === RESUMEN ===

console.log(`
=== RESUMEN MÉTODOS DE STRING ===
✓ Búsqueda: includes, startsWith, endsWith, match, search
✓ Transformación: toUpperCase, toLowerCase, toLocaleString
✓ Manipulación: trim, trimStart, padStart, padEnd, repeat
✓ Formato: JSON.stringify, JSON.parse
✓ Plantillas: String.raw, String.fromCodePoint
✓ Iteración: Symbol.iterator, for...of, entries
✓ Comparación: localeCompare, localeCompare con opciones
✓ Codificación: codePointAt, fromCharCode, fromCodePoint
✓ Plantillas: para plantillas literales complejas
✓ Internacionalización: toLocaleString con locales específicos
✓ Formateo: plantillas literales con interpolación
✓ Escape: para contenido dinámico seguro
✓ Rendimiento: repeat, repeat, padStart, padEnd
✓ Codificación: Unicode completo con fromCodePoint
✓ Comparación: localeCompare para ordenamiento sensible
✓ Serialización: JSON.stringify para persistencia
`);
