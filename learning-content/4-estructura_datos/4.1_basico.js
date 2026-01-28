// 1. lo primero ya lo conocemos, los tipos de datos primitivos

// 2. arrays: colecciones ordenadas de elementos
let numeros = [1, 2, 3, 4, 5];

// 3. objetos (ya los conocemos)

// 4. map's(diccionario) y set's(colección): alternativas a arrays que sirven en
// algunas ocasiones
let mapa = new Map();
mapa.set("nombre", "Angel");
console.log(mapa.get("nombre"));

let conjunto = new Set([1, 2, 3, 2, 3, 4, 4]);
console.log(conjunto);
