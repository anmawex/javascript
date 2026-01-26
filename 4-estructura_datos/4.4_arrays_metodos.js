let array = ["c++", "c", "javascript", "java", "python", "ruby"];
console.log(array);

// agregar al final
array.push("go");
console.log(array);

// eliminar al final
array.pop();
console.log(array);

// agregar al inicio
array.unshift("c#");
console.log(array);

// eliminar al inicio
array.shift();
console.log(array);

// referencia de array
let frutas1 = ["Banana"];
let arrayEx = frutas1; // guardamos la referencia del array original
console.log(arrayEx === frutas1); // true
arrayEx.push("Pear"); // modificamos la referencia guardada del array original
console.log(frutas1); // por ende el array original se modifica

// Declaramos un array vacío
let fruits = [];
// Asignamos un valor en el índice 99999
fruits[99999] = 5;
// Agregamos una propiedad arbitraria llamada 'age'
fruits.age = 25;
// Mostramos el contenido del array
console.log(fruits);

// Creamos un array limitado de tamaño 2
let arrayLimitado = new Array(2);
// Agregamos más elementos
arrayLimitado.push(1);
arrayLimitado.push(2);
arrayLimitado.push(3);
// Mostramos el array
console.log(arrayLimitado);

// investigar loops

// === MÉTODOS FUNCIONALES DE ARRAYS ===

// 1. forEach - iterar sobre cada elemento
const numeros = [1, 2, 3, 4, 5];
console.log('Array original:', numeros);

numeros.forEach((numero, indice) => {
    console.log(`Índice ${indice}: ${numero}`);
});

// 2. map - transformar cada elemento
const duplicados = numeros.map(n => n * 2);
console.log('Duplicados:', duplicados); // [2, 4, 6, 8, 10]

// 3. filter - filtrar elementos
const pares = numeros.filter(n => n % 2 === 0);
console.log('Números pares:', pares); // [2, 4]

// 4. find - encontrar primer elemento que cumpla condición
const primerMayorTres = numeros.find(n => n > 3);
console.log('Primer mayor que 3:', primerMayorTres); // 4

// 5. findIndex - encontrar índice del primer elemento
const indicePrimerPar = numeros.findIndex(n => n % 2 === 0);
console.log('Índice del primer par:', indicePrimerPar); // 1

// 6. some - verificar si algún elemento cumple condición
const hayMayorCuatro = numeros.some(n => n > 4);
console.log('¿Hay mayor que 4?:', hayMayorCuatro); // true

// 7. every - verificar si todos cumplen condición
const todosPositivos = numeros.every(n => n > 0);
console.log('¿Todos positivos?:', todosPositivos); // true

// 8. reduce - reducir array a un solo valor
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log('Suma total:', suma); // 15

// 9. reduceRight - reducir desde el final
const productoDerecha = numeros.reduceRight((acumulador, actual) => acumulador * actual, 1);
console.log('Producto (derecha):', productoDerecha); // 120

// 10. sort - ordenar elementos
const desordenado = [3, 1, 4, 2, 5];
const ordenado = [...desordenado].sort((a, b) => a - b);
console.log('Ordenado ascendente:', ordenado); // [1, 2, 3, 4, 5]

const ordenadoDescendente = [...desordenado].sort((a, b) => b - a);
console.log('Ordenado descendente:', ordenadoDescendente); // [5, 4, 3, 2, 1]

// === MÉTODOS DE BÚSQUEDA ===

// 11. includes - verificar si contiene elemento
const frutas2 = ['manzana', 'pera', 'naranja', 'uva'];
console.log('¿Contiene pera?:', frutas2.includes('pera')); // true
console.log('¿Contiene fresa?:', frutas2.includes('fresa')); // false

// 12. indexOf - encontrar índice de elemento
const indiceNaranja = frutas.indexOf('naranja');
console.log('Índice de naranja:', indiceNaranja); // 2

// 13. lastIndexOf - encontrar último índice
const repetidos = [1, 2, 3, 2, 4, 2];
const ultimoIndiceDos = repetidos.lastIndexOf(2);
console.log('Último índice de 2:', ultimoIndiceDos); // 5

// === MÉTODOS DE TRANSFORMACIÓN ===

// 14. slice - extraer porción sin modificar original
const porcion = numeros.slice(1, 4);
console.log('Porción (1, 4):', porcion); // [2, 3, 4]
console.log('Array original:', numeros); // [1, 2, 3, 4, 5]

// 15. splice - extraer/modificar elementos (modifica original)
const arraySplice = [1, 2, 3, 4, 5];
const eliminados = arraySplice.splice(1, 2, 6, 7);
console.log('Array modificado:', arraySplice); // [1, 6, 7, 4, 5]
console.log('Elementos eliminados:', eliminados); // [2, 3]

// 16. concat - concatenar arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenado = array1.concat(array2);
console.log('Concatenado:', concatenado); // [1, 2, 3, 4, 5, 6]

// === MÉTODOS DE CONVERSIÓN ===

// 17. join - unir elementos en string
const unido = frutas2.join(', ');
console.log('Unido con comas:', unido); // "manzana, pera, naranja, uva"

// 18. toString - convertir array a string
const arrayString = numeros.toString();
console.log('Array como string:', arrayString); // "1,2,3,4,5"

// 19. Array.from - crear array desde iterable
const desdeString = Array.from('hola');
console.log('Desde string:', desdeString); // ["h", "o", "l", "a"]

// 20. Array.of - crear array con argumentos
const arrayOf = Array.of(1, 2, 3, 4, 5);
console.log('Array.of:', arrayOf); // [1, 2, 3, 4, 5]

// === MÉTODOS AVANZADOS ===

// 21. flat - aplanar arrays anidados
const anidado = [[1, 2], [3, 4], [5, 6]];
const aplanado = anidado.flat();
console.log('Aplanado:', aplanado); // [1, 2, 3, 4, 5, 6]

// 22. flatMap - mapear y aplanar
const datos = [
    { id: 1, cursos: ['Matemáticas', 'Física'] },
    { id: 2, cursos: ['Química', 'Biología'] }
];
const todosLosCursos = datos.flatMap(item => item.cursos);
console.log('Todos los cursos:', todosLosCursos); // ['Matemáticas', 'Física', 'Química', 'Biología']

// 23. copyWithin - copiar elementos dentro del array
const arrayCopy = [1, 2, 3, 4, 5];
arrayCopy.copyWithin(0, 3);
console.log('CopyWithin:', arrayCopy); // [4, 5, 3, 4, 5]

// === MÉTODOS DE ITERACIÓN ===

// 24. keys - obtener iterador de claves
const iteradorClaves = numeros[Symbol.iterator]();
console.log('Iterador de claves:', iteradorClaves.next().value); // 1

// 25. values - obtener iterador de valores
const iteradorValores = numeros[Symbol.iterator]();
console.log('Iterador de valores:', iteradorValores.next().value); // 1

// 26. entries - obtener iterador de pares [índice, valor]
const iteradorEntries = numeros[Symbol.iterator]();
console.log('Iterador de entradas:', iteradorEntries.next().value); // [0, 1]

// === ALGORITMOS COMUNES CON ARRAYS ===

// 27. Encontrar el máximo y mínimo
const encontrarMaximo = (arr) => Math.max(...arr);
const encontrarMinimo = (arr) => Math.min(...arr);
console.log('Máximo:', encontrarMaximo(numeros)); // 5
console.log('Mínimo:', encontrarMinimo(numeros)); // 1

// 28. Eliminar duplicados
const eliminarDuplicados = (arr) => [...new Set(arr)];
const conDuplicados = [1, 2, 2, 3, 4, 4, 5];
const sinDuplicados = eliminarDuplicados(conDuplicados);
console.log('Sin duplicados:', sinDuplicados); // [1, 2, 3, 4, 5]

// 29. Mezclar arrays
const mezclarArrays = (...arrays) => [...arrays.flat()];
const mezclados = mezclarArrays([1, 2], [3, 4], [5, 6]);
console.log('Mezclados:', mezclados); // [1, 2, 3, 4, 5, 6]

// 30. Particionar array
const particion = (arr, tamaño) => {
    const resultado = [];
    for (let i = 0; i < arr.length; i += tamaño) {
        resultado.push(arr.slice(i, i + tamaño));
    }
    return resultado;
};

const particionado = particion(numeros, 2);
console.log('Particionado en grupos de 2:', particionado); // [[1, 2], [3, 4], [5]]

// === RENDIMIENTO Y BUENAS PRÁCTICAS ===

// 31. Evitar modificar arrays originales
const original = [1, 2, 3];
const copiaSegura = [...original];
copiaSegura.push(4);
console.log('Original:', original); // [1, 2, 3]
console.log('Copia:', copiaSegura); // [1, 2, 3, 4]

// 32. Usar métodos funcionales sobre bucles tradicionales
const cuadrados = numeros.map(n => n * n);
const cuadradosFor = [];
for (let i = 0; i < numeros.length; i++) {
    cuadradosFor.push(numeros[i] * numeros[i]);
}
console.log('Cuadrados (map):', cuadrados);
console.log('Cuadrados (for):', cuadradosFor);

// 33. Encadenamiento de métodos
const resultado = numeros
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);
console.log('Encadenamiento:', resultado); // 12 (2*2 + 4*2)

// === MÉTODOS ES2023+ ===

// 34. toSorted - copia y ordena (ES2023)
const arrayToSorted = [3, 1, 4, 2, 5];
const ordenadoCopia = arrayToSorted.toSorted();
console.log('Original:', arrayToSorted); // [3, 1, 4, 2, 5]
console.log('Copia ordenada:', ordenadoCopia); // [1, 2, 3, 4, 5]

// 35. toReversed - copia y revierte (ES2023)
const arrayToReversed = [1, 2, 3, 4, 5];
const revertidoCopia = arrayToReversed.toReversed();
console.log('Original:', arrayToReversed); // [1, 2, 3, 4, 5]
console.log('Copia revertida:', revertidoCopia); // [5, 4, 3, 2, 1]

// === RESUMEN ===

console.log(`
=== RESUMEN MÉTODOS DE ARRAYS ===
✓ Iteración: forEach, map, filter, find, findIndex
✓ Búsqueda: some, every, includes, indexOf, lastIndexOf
✓ Reducción: reduce, reduceRight
✓ Transformación: sort, slice, splice, concat
✓ Conversión: join, toString, Array.from, Array.of
✓ Avanzados: flat, flatMap, copyWithin
✓ Iteración: Symbol.iterator, keys, values, entries
✓ Algoritmos: max/min, eliminar duplicados, mezclar, particionar
✓ Rendimiento: métodos nativos optimizados
✓ Inmutabilidad: preferir métodos que no modifican original
✓ Funcionales: encadenamiento de métodos
✓ Modernos: toSorted, toReversed (ES2023)
✓ Compatibilidad: ES5+ (soporte universal)
`);
