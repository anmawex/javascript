// SPREAD Y REST OPERATORS - ES6
// ... (tres puntos) para expandir y recolectar elementos

// === SPREAD OPERATOR ===

// 1. Spread con arrays - expandir elementos
let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];

// Combinar arrays
let combinados = [...numeros1, ...numeros2];
console.log(combinados); // [1, 2, 3, 4, 5, 6]

// Añadir elementos a un array
let conElementos = [0, ...numeros1, 4, 5];
console.log(conElementos); // [0, 1, 2, 3, 4, 5]

// 2. Spread con strings
let saludo = "Hola";
let caracteres = [...saludo];
console.log(caracteres); // ["H", "o", "l", "a"]

// 3. Spread con objetos - clonación y combinación
let persona1 = {
    nombre: "Ana",
    edad: 28
};

let personaClonada = { ...persona1 };
console.log(personaClonada); // { nombre: "Ana", edad: 28 }

// Combinar objetos
let direccion = {
    ciudad: "Madrid",
    pais: "España"
};

let personaCompleta = { ...persona1, ...direccion };
console.log(personaCompleta);
// { nombre: "Ana", edad: 28, ciudad: "Madrid", pais: "España" }

// 4. Sobrescribir propiedades con spread
let configuracionBase = {
    tema: "claro",
    idioma: "es",
    notificaciones: true
};

let configuracionPersonal = {
    ...configuracionBase,
    tema: "oscuro", // Sobrescribe el tema
    zoom: 1.2 // Nueva propiedad
};

console.log(configuracionPersonal);
// { tema: "oscuro", idioma: "es", notificaciones: true, zoom: 1.2 }

// 5. Spread en llamadas a funciones
function sumar(a, b, c) {
    return a + b + c;
}

let numeros = [1, 2, 3];
console.log(sumar(...numeros)); // 6

// Combinar con parámetros normales
function saludar(saludo, ...nombres) {
    return `${saludo}, ${nombres.join(", ")}!`;
}

console.log(saludar("Hola", "Ana", "Juan", "María")); // "Hola, Ana, Juan, María!"

// 6. Spread con Math.max/min
let valores = [10, 5, 8, 3, 15];
console.log(Math.max(...valores)); // 15
console.log(Math.min(...valores)); // 3

// 7. Spread para crear arrays a partir de iterables
let set = new Set([1, 2, 3, 4]);
let arrayDesdeSet = [...set];
console.log(arrayDesdeSet); // [1, 2, 3, 4]

let mapa = new Map([
    ["a", 1],
    ["b", 2]
]);
let arrayDesdeMapa = [...mapa];
console.log(arrayDesdeMapa); // [["a", 1], ["b", 2]]

// === REST OPERATOR ===

// 8. Rest parameters - recolectar argumentos
function sumarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarTodos(1, 2, 3, 4, 5)); // 15
console.log(sumarTodos(10, 20)); // 30

// 9. Rest con parámetros fijos
function crearUsuario(nombre, ...datosAdicionales) {
    return {
        nombre,
        datosAdicionales,
        cantidadDatos: datosAdicionales.length
    };
}

console.log(crearUsuario("Juan", 30, "Ingeniero", "Madrid"));
// { nombre: "Juan", datosAdicionales: [30, "Ingeniero", "Madrid"], cantidadDatos: 3 }

// 10. Rest en destructuring de arrays
let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
let [primero, segundo, ...restoColores] = colores;

console.log(primero); // "rojo"
console.log(segundo); // "verde"
console.log(restoColores); // ["azul", "amarillo", "naranja"]

// 11. Rest en destructuring de objetos
let producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    categoria: "Electrónica",
    stock: 10,
    disponible: true
};

let { id, nombre, ...restoProducto } = producto;

console.log(id); // 1
console.log(nombre); // "Laptop"
console.log(restoProducto);
// { precio: 999.99, categoria: "Electrónica", stock: 10, disponible: true }

// === APLICACIONES PRÁCTICAS ===

// 12. Clonación profunda con spread (superficial)
function clonarObjeto(objeto) {
    return { ...objeto };
}

let original = { a: 1, b: { c: 2 } };
let clon = clonarObjeto(original);

console.log(clon); // { a: 1, b: { c: 2 } }
console.log(clon === original); // false (diferente referencia)
console.log(clon.b === original.b); // true (misma referencia, clonación superficial)

// 13. Actualización inmutable de objetos
function actualizarUsuario(usuario, actualizaciones) {
    return { ...usuario, ...actualizaciones };
}

let usuarioBase = { nombre: "Ana", edad: 28, ciudad: "Madrid" };
let usuarioActualizado = actualizarUsuario(usuarioBase, { edad: 29, pais: "España" });

console.log(usuarioActualizado);
// { nombre: "Ana", edad: 29, ciudad: "Madrid", pais: "España" }
console.log(usuarioBase); // No se modifica el original

// 14. Filtrado y mapeo con spread
let usuarios = [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Juan", activo: false },
    { id: 3, nombre: "María", activo: true }
];

// Filtrar usuarios activos y extraer nombres
let nombresActivos = usuarios
    .filter(usuario => usuario.activo)
    .map(usuario => usuario.nombre);

console.log(nombresActivos); // ["Ana", "María"]

// 15. Combinación de múltiples arrays
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];

let todos = [...array1, ...array2, ...array3];
console.log(todos); // [1, 2, 3, 4, 5, 6]

// 16. Eliminar duplicados con Set y spread
let conDuplicados = [1, 2, 2, 3, 3, 4, 5, 5];
let sinDuplicados = [...new Set(conDuplicados)];
console.log(sinDuplicados); // [1, 2, 3, 4, 5]

// 17. Convertir NodeList a array
// En navegador:
// let elementos = document.querySelectorAll('div');
// let arrayElementos = [...elementos];

// 18. Parámetros por defecto con spread
function crearArray(...elementos) {
    return elementos.length > 0 ? elementos : [1, 2, 3];
}

console.log(crearArray()); // [1, 2, 3]
console.log(crearArray(4, 5, 6)); // [4, 5, 6]

// === PATRONES AVANZADOS ===

// 19. Composición de funciones
function compose(...funciones) {
    return function(valor) {
        return funciones.reduceRight((acc, func) => func(acc), valor);
    };
}

const duplicar = x => x * 2;
const sumarUno = x => x + 1;
const alCuadrado = x => x * x;

const operacionCompuesta = compose(alCuadrado, sumarUno, duplicar);
console.log(operacionCompuesta(3)); // ((3 * 2) + 1)² = 49

// 20. Currying con rest
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

function sumarTres(a, b, c) {
    return a + b + c;
}

const sumarCurried = curry(sumarTres);
console.log(sumarCurried(1)(2)(3)); // 6
console.log(sumarCurried(1, 2)(3)); // 6
console.log(sumarCurried(1, 2, 3)); // 6

// 21. Validación de argumentos
function validarTipos(...argumentos) {
    return argumentos.map(arg => ({
        valor: arg,
        tipo: typeof arg,
        esArray: Array.isArray(arg),
        esNull: arg === null,
        esUndefined: arg === undefined
    }));
}

console.log(validarTipos("hola", 42, [], null, undefined));

// 22. Merge profundo de objetos (recursivo con spread)
function mergeDeep(objeto1, objeto2) {
    const resultado = { ...objeto1 };
    
    for (let key in objeto2) {
        if (objeto2.hasOwnProperty(key)) {
            if (
                typeof objeto2[key] === 'object' &&
                objeto2[key] !== null &&
                !Array.isArray(objeto2[key])
            ) {
                resultado[key] = mergeDeep(resultado[key] || {}, objeto2[key]);
            } else {
                resultado[key] = objeto2[key];
            }
        }
    }
    
    return resultado;
}

let obj1 = {
    a: 1,
    b: { c: 2, d: 3 }
};

let obj2 = {
    b: { c: 20, e: 4 },
    f: 5
};

console.log(mergeDeep(obj1, obj2));
// { a: 1, b: { c: 20, d: 3, e: 4 }, f: 5 }

// === BUENAS PRÁCTICAS ===

// 23. Usar spread para inmutabilidad
// ✓ Bueno: crear copias en lugar de modificar
let arrayOriginal = [1, 2, 3];
let arrayModificado = [...arrayOriginal, 4]; // No modifica original

// 24. No abusar del spread en objetos grandes
// ✓ Para objetos pequeños: { ...obj1, ...obj2 }
// ✗ Para objetos muy grandes: considerar métodos específicos

// 25. Rest parameters vs arguments object
function funcionModerna(...args) {
    // args es un array real con métodos de array
    return args.filter(x => x > 0);
}

function funcionAntigua() {
    // arguments es array-like, no es un array real
    // return Array.from(arguments).filter(x => x > 0);
}

// 26. Resumen
console.log(`
=== RESUMEN SPREAD Y REST OPERATORS ===
✓ Spread (...): expande elementos/propiedades
✓ Rest (...): recolecta elementos/propiedades
✓ Arrays: [...arr1, ...arr2] para combinar
✓ Objetos: {...obj1, ...obj2} para mezclar
✓ Funciones: func(...params) para parámetros variables
✓ Destructuring: [a, ...rest] y {a, ...rest}
✓ Inmutabilidad: crear copias en lugar de modificar
✓ Math.max/min: Math.max(...array)
✓ Set: [...new Set(array)] para eliminar duplicados
✓ Fundamental para programación funcional y React
`);
