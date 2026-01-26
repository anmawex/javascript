const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}
// apple, banana, cherry

// === FOR...OF AVANZADO ===

// 1. for...of con strings
const texto = "JavaScript";
for (const caracter of texto) {
    console.log(`Carácter: ${caracter}`);
}

// 2. for...of con Map
const mapa = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

console.log('Iterando sobre Map:');
for (const [clave, valor] of mapa) {
    console.log(`${clave}: ${valor}`);
}

// 3. for...of con Set
const conjunto = new Set([1, 2, 3, 4, 5]);
console.log('Iterando sobre Set:');
for (const valor of conjunto) {
    console.log(`Valor: ${valor}`);
}

// 4. for...of con objetos (usando Object.entries)
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

console.log('Iterando sobre objeto:');
for (const [clave, valor] of Object.entries(persona)) {
    console.log(`${clave}: ${valor}`);
}

// 5. for...of con NodeList (DOM)
// const elementos = document.querySelectorAll('div');
// for (const elemento of elementos) {
//     console.log(elemento.textContent);
// }

// 6. for...of con arguments
function mostrarArgumentos() {
    console.log('Argumentos recibidos:');
    for (const arg of arguments) {
        console.log(arg);
    }
}

mostrarArgumentos('a', 'b', 'c');

// === COMPARACIÓN FOR...OF VS FOR...IN ===

// 7. for...in (itera sobre propiedades)
console.log('for...in:');
for (const clave in persona) {
    console.log(`Clave: ${clave}`);
}

// 8. for...of (itera sobre valores)
console.log('for...of:');
for (const valor of Object.values(persona)) {
    console.log(`Valor: ${valor}`);
}

// 9. Diferencias clave
const array = [10, 20, 30];
console.log('for...in (índices):');
for (const indice in array) {
    console.log(`Índice: ${indice}, Valor: ${array[indice]}`);
}

console.log('for...of (valores):');
for (const valor of array) {
    console.log(`Valor: ${valor}`);
}

// === ITERADORES ===

// 10. Symbol.iterator - iterador personalizado
const miIterable = {
    data: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next() {
                if (index < this.data.length) {
                    return {
                        value: this.data[index++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }
};

console.log('Iterador personalizado:');
for (const valor of miIterable) {
    console.log(`Valor: ${valor}`);
}

// 11. Crear iterador personalizado
function crearIterador(arr) {
    let index = 0;
    return {
        next() {
            if (index < arr.length) {
                return {
                    value: arr[index++],
                    done: false
                };
            } else {
                return {
                    value: undefined,
                    done: true
                };
            }
        }
    };
}

const iteradorPersonalizado = crearIterador([10, 20, 30]);
console.log('Iterador personalizado:');
let resultado = iteradorPersonalizado.next();
while (!resultado.done) {
    console.log(`Valor: ${resultado.value}`);
    resultado = iteradorPersonalizado.next();
}

// === GENERADORES ===

// 12. Función generadora básica
function* generadorSimple() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

console.log('Generador simple:');
for (const valor of generadorSimple()) {
    console.log(`Valor: ${valor}`);
}

// 13. Generador con parámetros
function* generadorConParametros(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        yield i;
    }
}

console.log('Generador con parámetros:');
for (const valor of generadorConParametros(5, 10)) {
    console.log(`Valor: ${valor}`);
}

// 14. Generador con objetos
function* generadorObjetos() {
    yield { id: 1, nombre: 'Juan' };
    yield { id: 2, nombre: 'María' };
    yield { id: 3, nombre: 'Pedro' };
}

console.log('Generador de objetos:');
for (const objeto of generadorObjetos()) {
    console.log(`ID: ${objeto.id}, Nombre: ${objeto.nombre}`);
}

// 15. Generador infinito
function* generadorInfinito() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

// Tomar solo los primeros 10 valores
console.log('Generador infinito (primeros 5):');
const generadorInf = generadorInfinito();
let contador = 0;
for (const valor of generadorInf) {
    console.log(`Valor: ${valor}`);
    contador++;
    if (contador >= 5) break;
}

// === USO PRÁCTICO DE GENERADORES ===

// 16. Generador para secuencia Fibonacci
function* fibonacci(limite) {
    let a = 0, b = 1;
    for (let i = 0; i < limite; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

console.log('Secuencia Fibonacci (primeros 10):');
for (const num of fibonacci(10)) {
    console.log(num);
}

// 17. Generador para números primos
function* esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function* generadorPrimos(limite) {
    let num = 2;
    while (num <= limite) {
        if (esPrimo(num)) {
            yield num;
        }
        num++;
    }
}

console.log('Números primos hasta 30:');
for (const primo of generadorPrimos(30)) {
    console.log(primo);
}

// === RENDIMIENTO Y BUENAS PRÁCTICAS ===

// 18. for...of es más legible que bucles tradicionales
const numeros2 = [1, 2, 3, 4, 5];

// Tradicional
for (let i = 0; i < numeros2.length; i++) {
    console.log(numeros2[i]);
}

// Moderno con for...of
for (const num of numeros2) {
    console.log(num);
}

// 19. for...of no itera sobre propiedades de objeto
const objeto = { a: 1, b: 2, c: 3 };
// for (const valor of objeto) { // Error: objeto no es iterable
//     console.log(valor);
// }

// Solución: usar Object.values() o Object.entries()
for (const valor of Object.values(objeto)) {
    console.log(valor);
}

// 20. for...of con break y continue
const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Usando break y continue:');
for (const num of datos) {
    if (num === 5) {
        console.log(`Encontrado ${num}, rompiendo bucle`);
        break;
    }
    if (num % 2 === 0) {
        continue; // saltar números pares
    }
    console.log(`Número impar: ${num}`);
}

// === RESUMEN ===

console.log(`
=== RESUMEN FOR...OF E ITERADORES ===
✓ for...of: iterar sobre valores de iterables
✓ Strings: itera sobre caracteres
✓ Arrays: itera sobre elementos
✓ Map: itera sobre pares [clave, valor]
✓ Set: itera sobre valores únicos
✓ Object.entries: itera sobre pares [clave, valor]
✓ Symbol.iterator: crear iteradores personalizados
✓ Generadores: funciones con yield
✓ yield: pausar y reanudar ejecución
✓ next(): método del iterador
✓ done: indica si el iterador terminó
✓ value: valor actual del iterador
✓ Rendimiento: generadores son lazy evaluation
✓ Memoria: generadores son más eficientes para secuencias grandes
✓ Compatibilidad: ES6+ (soporte universal)
✓ Legibilidad: más claro que bucles tradicionales
`);
