// MÉTODOS DE ARRAY MODERNOS - ES5+
// Métodos funcionales para manipulación de arrays

// === MÉTODOS DE ITERACIÓN ===

// 1. forEach - ejecutar función para cada elemento
const numeros = [1, 2, 3, 4, 5];
console.log('Array original:', numeros);

numeros.forEach((numero, indice) => {
    console.log(`Índice ${indice}: ${numero}`);
});

// 2. map - crear nuevo array transformado
const duplicados = numeros.map(n => n * 2);
console.log('Duplicados:', duplicados); // [2, 4, 6, 8, 10]

// 3. filter - filtrar elementos que cumplen condición
const pares = numeros.filter(n => n % 2 === 0);
console.log('Números pares:', pares); // [2, 4]

const mayoresDeTres = numeros.filter(n => n > 3);
console.log('Mayores de 3:', mayoresDeTres); // [4, 5]

// 4. find - encontrar primer elemento que cumple condición
const primerPar = numeros.find(n => n > 3);
console.log('Primer mayor que 3:', primerPar); // 4

const primerImpar = numeros.find(n => n % 2 === 0);
console.log('Primer par:', primerImpar); // 2

// 5. findIndex - encontrar índice del primer elemento
const indicePrimerPar = numeros.findIndex(n => n % 2 === 0);
console.log('Índice del primer par:', indicePrimerPar); // 1

// 6. some - verificar si algún elemento cumple condición
const hayMayoresDeTres = numeros.some(n => n > 3);
console.log('¿Hay mayores de 3?:', hayMayoresDeTres); // true

const hayNegativos = numeros.some(n => n < 0);
console.log('¿Hay negativos?:', hayNegativos); // false

// 7. every - verificar si todos cumplen condición
const todosPositivos = numeros.every(n => n > 0);
console.log('¿Todos positivos?:', todosPositivos); // true

const todosMenoresDeDiez = numeros.every(n => n < 10);
console.log('¿Todos menores de 10?:', todosMenoresDeDiez); // true

// === MÉTODOS DE REDUCCIÓN ===

// 8. reduce - reducir array a un solo valor
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log('Suma total:', suma); // 15

const producto = numeros.reduce((acumulador, actual) => acumulador * actual, 1);
console.log('Producto de todos:', producto); // 120

// 10. reduceRight - reducir desde el final
const resta = numeros.reduceRight((acumulador, actual) => acumulador - actual, 0);
console.log('Resta desde el final:', resta); // -15

// 11. reduce con objeto acumulador
const info = numeros.reduce((acumulador, actual, indice) => {
    acumulizador.suma += actual;
    acumulador.cantidad++;
    acumulador.pares.push(actual % 2 === 0);
    return acumulador;
}, { suma: 0, cantidad: 0, pares: [] });

console.log('Info acumulado:', info);
// { suma: 15, cantidad: 5, pares: [2, 4] }

// === MÉTODOS DE BÚSQUEDA Y BÚSQUEDA ===

// 12. sort - ordenar elementos
const desordenado = [3, 1, 4, 2, 5];
const ordenadoAscendente = [...desordenado].sort((a, b) => a - b);
console.log('Ordenado ascendente:', ordenadoAscendente); // [1, 2, 3, 4, 5]

const ordenadoDescendente = [...desordenado].sort((a, b) => b - a);
console.log('Ordenado descendente:', ordenadoDescendente); // [5, 4, 3, 2, 1]

// 13. sort con objetos (por propiedad)
const usuarios = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 20 }
];

const usuariosPorEdad = [...usuarios].sort((a, b) => a.edad - b.edad);
console.log('Usuarios por edad:', usuariosPorEdad);

const usuariosPorNombre = [...usuarios].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log('Usuarios por nombre:', usuariosPorNombre);

// 14. sort con función de comparación personalizada
const personas = [
    { nombre: 'Ana', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Juan', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'María', edad: 20, ciudad: 'Valencia' }
];

const personasPorCiudad = [...personas].sort((a, b) => {
    const ciudadA = a.ciudad.toLowerCase();
    const ciudadB = b.ciudad.toLowerCase();
    if (ciudadA < ciudadB) return -1;
    if (ciudadA > ciudadB) return 1;
    return 0;
});

console.log('Personas por ciudad:', personasPorCiudad);

// === MÉTODOS DE TRANSFORMACIÓN ===

// 15. flat - aplanar arrays anidados
const anidado = [[1, 2], [3, 4], [5, 6]];
const aplanado = anidado.flat();
console.log('Aplanado:', aplanado); // [1, 2, 3, 4, 5, 6]

const profundamenteAnidado = [[[1, 2]], [[3, 4]], [[5, 6]]];
const completamenteAplanado = profundamenteAnidado.flat(2);
console.log('Completamente aplanado:', completamenteAplanado); // [1, 2, 3, 4, 5, 6]

// 16. flatMap - mapeo y aplanar
const datos = [
    { id: 1, cursos: ['Matemáticas', 'Física'] },
    { id: 2, cursos: ['Química', 'Biología'] },
    { id: 3, cursos: ['Historia', 'Literatura'] }
];

const todosLosCursos = datos.flatMap(item => item.cursos);
console.log('Todos los cursos:', todosLosCursos); // ['Matemáticas', 'Física', 'Química', 'Biología', 'Historia', 'Literatura']

// 17. flatFilter - filtrar y aplanar
const cursosConCalificacion = [
    { nombre: 'Matemáticas', nota: 9 },
    { nombre: 'Física', nota: 7 },
    { nombre: 'Química', nota: 8 },
    { nombre: 'Historia', nota: 6 }
];

const cursosAprobados = cursosConCalificacion.filter(curso => curso.nota >= 7);
console.log('Cursos aprobados:', cursosAprobados.map(c => c.nombre)); // ['Matemáticas', 'Química']

// === MÉTODOS DE BÚSQUEDA Y BÚSQUEDA ===

// 18. includes - verificar si elemento existe
const frutas = ['manzana', 'pera', 'naranja'];
console.log('¿Tiene manzana?:', frutas.includes('manzana')); // true
console.log('Tiene uva?:', frutas.includes('uva')); // false

// 19. indexOf - encontrar índice de elemento
const indicePera = frutas.indexOf('pera');
console.log('Índice de pera:', indicePera); // 1

// 20. lastIndexOf - encontrar último índice
const indiceUltimoNaranja = frutas.lastIndexOf('naranja');
console.log('Último índice de naranja:', indiceUltimoNaranja); // 2

// 21. join - unir elementos en string
const mensaje = frutas.join(', ');
console.log('Mensaje:', mensaje); // "manzana, pera, naranja"

// 22. toString - convertir array a string
const arrayString = numeros.toString();
console.log('Array como string:', arrayString); // "1,2,3,4,5"

// 23. Array.from - crear array desde iterable
const desdeString = Array.from('hola');
console.log('Desde string:', desdeString); // ["h", "o", "l", "a"]

const desdeRango = Array.from({length: 5}, (_, i) => i + 1);
console.log('Desde rango:', desdeRango); // [0, 1, 2, 3, 4]

// === MÉTODOS DE BÚSQUEDA AVANZADAS ===

// 24. keys - obtener claves de objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrida',
    profesion: 'Ingeniero'
};

const clavesPersona = Object.keys(persona);
console.log('Claves de persona:', claves); // ["nombre", "edad", "ciudad", "profesión"]

// 25. values - obtener valores de objeto
const valoresPersona = Object.values(persona);
console.log('Valores de persona:', valoresPersona); // ["Juan", 30, "Madrid", "Ingeniero"]

// 26. entries - obtener pares [clave, valor]
const entradasPersona = Object.entries(persona);
console.log('Entradas de persona:', entradas);
// [["nombre", "Juan"], ["edad", 30], ["ciudad", "Madrida"], ["profesión", "Ingeniero"]]

// 27. fromEntries - crear objeto desde entradas
const objetoDesdeEntradas = Object.fromEntries(entradasPersona);
console.log('Objeto desde entradas:', objetoDesdeEntradas);
// { nombre: "Juan", edad: 30, ciudad: "Madrida", profesion: "Ingeniero" }

// === MÉTODOS DE BÚSQUEDA ===

// 28. Object.assign - copiar propiedades
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const resultado = Object.assign(target, source);
console.log('Object.assign:', resultado); // { a: 1, b: 3, c: 4 }

// 29. Object.is - comparación estricta
console.log('Object.is({}, {})); // true
console.log(Object.is([], [])); // false
console.log(Object.is(() => {})); // false

// 30. Object.keys, Object.values, Object.entries con arrays
const datos = { x: 1, y: 2, z: 3 };
const claves = Object.keys(datos);
const valores = Object.values(datos);
const entradas = Object.entries(datos);

console.log('Claves:', claves); // ["x", "y", "z"]
console.log('Valores:', valores); // [1, 2, 3]
console.log('Entradas:', entradas); // [["x", 1], ["y", 2], ["z", 3]]

// === MÉTODOS DE BÚSQUEDA DE OBJECT ===

// 31. Object.fromEntries con transformación
const datosTransformados = {
    nombre: 'Ana',
    edad: 25,
    ciudad: 'Madrida',
    activo: true
};

const datosUpper = Object.fromEntries(Object.entries(datos), ([clave, valor]) => [
    clave.toUpperCase(),
    valor
]);

console.log('Datos con claves mayúsculas:', datosUpper);
// [["NOMBRE", "Ana"], ["EDAD", 25], ["CIUDAD", "Madrida"], ["ACTIVO", true]]

// 32. Object.defineProperty - definir propiedades con descriptores
const configuracion = {
    _version: '1.0.0',
    _debug: false
};

Object.defineProperty(configuracion, 'version', {
    value: '2.0.0',
    writable: false,
    configurable: true,
    enumerable: true
});

console.log('Configuración actualizada:', configuracion);

// === MÉTODOS DE ARRAY DE OBJETOS ===

// 33. groupBy - agrupar elementos por criterio
const personas = [
    { nombre: 'Ana', edad: 25, ciudad: 'Madrida' },
    { nombre: 'Juan', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'Ana', edad: 28, ciudad: 'Valencia' }
];

const agrupados = personas.reduce((acumulador, persona) => {
    const clave = persona.nombre;
    if (!acumulador[clave]) {
        acumulador[clave] = [];
    }
    acumulador[clave].push(persona);
    return acumulador;
}, {});

console.log('Personas agrupadas por nombre:', agrupados);
// {
//   "Ana": [
//     { nombre: "Ana", edad: 25, ciudad: "Madrida" },
//     { nombre: "Ana", edad: 28, ciudad: "Valencia" }
//   ],
//   "Juan": [{ nombre: "    Juan", edad: 30, ciudad: "Barcelona" }]
// }

// === MÉTODOS DE BUSQUEDA ===

// 34. find - encontrar primer elemento que cumpla condición
const numerosGrandes = [10, 20, 30, 40, 50];
const primerMayor30 = numerosGrandes.find(n => n > 30);
console.log('Primer mayor a 30:', primerMayor30); // 40

// 35. findIndex - encontrar índice de primer elemento
const indicePrimerMayor30 = numerosGrandes.findIndex(n => n > 30);
console.log('Índice del primer mayor a 30:', indicePrimerMayor30); // 3

// 36. some - verificar si algún elemento cumple condición
const hayMayor25 = numerosGrandes.some(n => n > 25);
console.log('¿Hay mayor a 25?:', hayMayor25); // true

const hayMenor15 = numerosGrandes.some(n => n < 15);
console.log('¿Hay menor a 15?:', hayMenor15); // false

// 37. every - verificar si todos los elementos cumplen condición
const todosPositivos = numerosGrandes.every(n => n > 0);
console.log('¿Todos positivos?:', todosPositivos); // true

const todosMenores10 = numerosGrandes.every(n => n < 10);
console.log('¿Todos menores de 10?:', todosMenores10); // false

// === MÉTODOS DE CÁLCULO Y VALIDACIÓN ===

// 38. every - verificar que todos cumplan condición
const numerosValidos = [2, 4, 6, 8, 10];
const todosPares = numerosValidos.every(n => n % 2 === 0);
console.log('¿Todos son pares?:', todosPares); // true

const todosImpares = numerosValidos.every(n => n % 2 !== 0);
console.log('Todos son impares?:', todosImpares); // false

// 39. some - verificar si alguno cumple condición
const hayNegativos = numerosValidos.some(n => n < 0);
console.log('Hay negativos?:', hayNegativos); // false

const hayMayores50 = numerosValidos.some(n => n > 50);
console.log('Hay mayores de 50?:', hayMayores50); // false

// 40. every vs some con objetos
const estudiantes = [
    { nombre: 'Ana', calificaciones: [8, 9, 7] },
    { nombre: 'Juan', calificaciones: [6, 7, 8] }
];

const todosAprobados = estudiantes.every(e => 
    e.calificaciones.every(nota => nota >= 6)
);
console.log('¿Todos aprobados?:', todosAprobados); // false

const algunoAprobado = estudiantes.some(e => 
    e.calificaciones.some(nota => nota >= 8)
);
console.log ¿Alguno aprobado?: algunoAprobado); // true

// === MÉTODOS DE CONVERSIÓN ===

// 41. includes (ES7) - verificar inclusión
const tecnologias = ['JavaScript', 'Python', 'Java', 'Ruby'];
console.log('Incluye JavaScript?:', tecnologias.includes('JavaScript')); // true
console.log('Incluye Go?:', tecnologias.includes('Go')); // false

// 42. startsWith (ES6) - verificar prefijo
const nombres = ['Ana', 'Juan', 'Ana', 'María'];
console.log('Comienza con "Ana"?:', nombres.some(n => n.startsWith('An')); // true
console.log('Comienza con "María"?:', nombres.some(n => n.startsWith('Ma')); // true

// 43. endsWith (ES6) - verificar sufijo
const archivos = ['documento.txt', 'imagen.jpg', 'video.mp4'];
console.log('Termina en .txt?:', archivos.some(f => f.endsWith('.txt')); // true
console.log('Termina en .mp4?:', archivos.some(f => f.endsWith('.mp4')); // true

// === MÉTODOS DE CONVERSIÓN AVANZADA ===

// 44. Comparación profunda de objetos
const persona1 = { nombre: 'Ana', edad: 25 };
const persona2 = { nombre: 'Ana', edad: 25 };

console.log('¿Son iguales (==):', persona1 == persona2); // true (mismo objeto)
console.log('¿Son iguales (===):', persona1 === persona2); // true (misma referencia)

const persona3 = { nombre: 'Ana', edad: 25 };
const persona4 = { nombre: 'Juan', edad: 30 };
console.log('¿Son iguales (==):', persona3 == persona4); // false
console.log('¿Son iguales (===):', persona3 === persona4); // false

// 45. Comparación de arrays
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];

console.log('arr1 == arr2:', arr1 == arr2); // true
console.log('arr1 === arr3); // false
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true

// 46. Comparación de objetos con JSON
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 3 };

console.log('Objetos iguales (JSON):', JSON.stringify(obj1) === JSON.stringify(obj2)); // true
console.log('Objetos diferentes (JSON):', JSON.stringify(obj1) === JSON.stringify(obj3)); // false

// === MÉTODOS DE ARRAY MODERNOS ===

// 47. copyWithin - copiar parte del array
const arrayOriginal = [1, 2, 3, 4, 5];
const copiaParcial = arrayOriginal.copyWithin(1, 3);
console.log('Copia parcial:', copiaParcial); // [2, 3, 4, 5]

// 48. copyWithin - copiar parte del array (ES2023)
const copiaParcialES2023 = arrayOriginal.copyWithin(1, 3);
console.log('Copia parcial (ES2023):', copiaParcialES2023); // [2, 3, 4, 5]

// 49. toSorted - copia y ordenar array
const desordenado2 = [3, 1, 4, 2, 5];
const ordenadoCopia = desordenado2.toSorted();
console.log('Copia ordenada:', ordenadoCopia); // [1, 2, 3, 4, 5]

// 50. toReversed - copia y reversa array
const revertido = numeros.toReversed();
console.log('Array revertido:', revertido); // [5, 4, 3, 2, 1]

// === RESUMEN ===

console.log(`
=== RESUMEN MÉTODOS DE ARRAY ===
✓ Iteración: forEach, map, filter, find, findIndex
✓ Reducción: reduce, reduceRight
✓ Ordenamiento: sort, toSorted, toReversed
✓ Transformación: flat, flatMap, flatFilter
✓ Búsqueda: includes, startsWith, endsWith
✓ Verificación: some, every
✓ Conversión: join, toString, Array.from
✓ Copia: slice, copyWithin, copyWith, toSorted, toReversed
✓ Objetos: keys, values, entries, fromEntries
✓ Comparación: includes, some, every, ===, ==
✓ Agrupación: groupBy
✓ Inmutabilidad: métodos retornan arrays nuevos (except sort con modificación in lugar)
✓ Performance: map, filter, reduce son muy eficientes
✓ Compatibilidad: ES5+ (soporte universal)
✓ Modernos: flat, flatMap, copyWith, toSorted, toReversed (ES2023)
`);
