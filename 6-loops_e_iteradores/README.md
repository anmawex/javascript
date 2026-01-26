# Loops e Iteradores - Control de Flujo y Repetición

Este módulo cubre todas las formas de iteración en JavaScript, desde bucles tradicionales hasta iteradores modernos y generadores.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **for.js** - Bucle for tradicional
- **do_while.js** - Bucle do-while
- **for_in.js** - Bucle for-in para propiedades
- **for_of.js** - Bucle for-of para valores (ES6)
- **array_methods/filter.js** - Método filter de arrays
- **array_methods/find.js** - Método find de arrays
- **array_methods/map.js** - Método map de arrays

### 📝 Iteradores y Generadores
- **for_of.js** - for-of avanzado con iteradores y generadores

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Bucles Tradicionales
- ✅ Usar bucles `for` con iteración controlada
- ✅ Usar bucles `while` y `do-while`
- ✅ Usar bucles `for-in` para propiedades de objeto
- ✅ Controlar bucles con `break` y `continue`
- ✅ Entender cuándo usar cada tipo de bucle

### Bucles Modernos
- ✅ Usar `for...of` para iterar sobre valores
- ✅ Iterar sobre strings, arrays, Map, Set
- ✅ Iterar sobre objetos con `Object.entries()`
- ✅ Usar iteradores personalizados con `Symbol.iterator`
- ✅ Entender la diferencia con `for...in`

### Métodos de Arrays
- ✅ Usar `filter()` para filtrar elementos
✅ Usar `find()` y `findIndex()` para búsqueda
✅ Usar `map()` para transformación
✅ Usar `reduce()` para reducción

### Generadores
- ✅ Crear generadores con `function*` y `yield`
- ✅ Implementar secuencias infinitas
✅ Usar generadores para algoritmos complejos
✅ Entender lazy evaluation
✅ Controlar el flujo de ejecución

## 🚀 Características Cubiertas

### Bucles Tradicionales
- **for**: Bucle controlado con contador
- **while**: Bucle condicional pre-test
- **do-while**: Bucle condicional post-test
- **for-in**: Iteración sobre propiedades de objeto
- **break/continue**: Control de flujo en bucles

### Bucles Modernos
- **for...of**: Iteración sobre valores iterables
- **Symbol.iterator**: Protocolo de iteración
- **Iterable**: Objetos que implementan iteración
- **Generadores**: Funciones con pausas y reanudación

### Métodos Funcionales
- **filter**: Filtrar elementos según condición
- **map**: Transformar cada elemento
- **reduce**: Reducir array a un valor
- **find**: Encontrar primer elemento que cumpla condición
- **some/every**: Verificar si algún/todos cumplen condición

### Generadores
- **function***: Sintaxis de función generadora
- **yield**: Pausar y devolver valor
- **next()**: Método del iterador
- **done**: Estado del iterador
- **value**: Valor actual del iterador

## 💡 Casos de Uso Prácticos

### Bucles Tradicionales
```javascript
// for con contador
for (let i = 0; i < 10; i++) {
    console.log(`Iteración ${i}`);
}

// while condicional
let contador = 0;
while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// for-in sobre objeto
const persona = { nombre: 'Juan', edad: 30 };
for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
```

### Bucles Modernos
```javascript
// for-of sobre array
const numeros = [1, 2, 3, 4, 5];
for (const numero of numeros) {
    console.log(`Número: ${numero}`);
}

// for-of sobre string
const texto = "JavaScript";
for (const caracter of texto) {
    console.log(`Carácter: ${caracter}`);
}

// for-of sobre Map
const mapa = new Map([['a', 1], ['b', 2]]);
for (const [clave, valor] of mapa) {
    console.log(`${clave}: ${valor}`);
}
```

### Generadores
```javascript
// Generador de Fibonacci
function* fibonacci(limite) {
    let a = 0, b = 1;
    for (let i = 0; i < limite; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

for (const num of fibonacci(10)) {
    console.log(num);
}
```

### Métodos Funcionales
```javascript
// Transformación de datos
const usuarios = [
    { nombre: 'Ana', edad: 25, activo: true },
    { nombre: 'Juan', edad: 30, activo: false }
];

// Filtrar usuarios activos
const activos = usuarios.filter(u => u.activo);

// Transformar nombres
const nombresMayuscula = usuarios.map(u => u.nombre.toUpperCase());

// Calcular edad promedio
const promedio = usuarios.reduce((sum, u) => sum + u.edad, 0) / usuarios.length;
```

## 📋 Ejercicios Prácticos

Cada archivo contiene ejercicios para reforzar el aprendizaje:

1. **Bucles For**: Iteración controlada con contador
2. **Bucles While**: Iteración condicional
3. **For-In**: Iteración sobre propiedades
4. **For-Of**: Iteración sobre valores
5. **Filter**: Filtrado de elementos
6. **Find**: Búsqueda de elementos
7. **Map**: Transformación de datos
8. **Generadores**: Creación de secuencias
9. **Iteradores**: Iteradores personalizados
10. **Proyectos**: Casos de uso reales

## 🔗 Relación con Otros Módulos

- **Módulo 1**: Variables (bucles usan variables)
- **Módulo 4**: Estructuras (iteración sobre arrays y objetos)
- **Módulo 7**: Condicionales (bucles en condiciones)
- **Módulo 16**: Métodos Modernos (métodos de arrays)
- **Módulo 12**: DOM Manipulación (iteración sobre elementos del DOM)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar `for...of` para iterar sobre valores
- Usar `for...in` solo para propiedades de objeto
- Usar métodos funcionales sobre bucles tradicionales
- Usar generadores para secuencias complejas
- Usar `break` y `continue` para control de flujo

### ❌ Evitar
- Usar `for...in` para arrays (usar `for...of`)
- Modificar colecciones mientras se itera
- Olvidar `break` y `continue` cuando sea necesario
- Usar bucles infinitos sin condición de salida
- Ignorar la legibilidad del código

## 🎓 Nivel de Dificultad

- **Básico**: Bucles tradicionales simples
- **Intermedio**: Métodos funcionales y for-of
- **Avanzado**: Generadores e iteradores personalizados

## 🛠️ Compatibilidad

- **Bucles**: ES1+ (soporte universal)
- **for...of**: ES6+ (soporte universal)
- **Generadores**: ES6+ (soporte universal)
- **Métodos funcionales**: ES5+ (soporte universal)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Básico** → for, while, do-while
2. **Intermedio** → for-of, métodos funcionales
3. **Avanzado** → generadores, iteradores
4. **Práctica** → Ejercicios y proyectos
5. **Maestría** -> Patrones y optimización

---

**💡 Tip**: `for...of` es la forma moderna y preferida de iterar sobre valores en JavaScript. Es más legible y seguro que `for...in` para arrays. Los generadores son poderosos para crear secuencias complejas y eficientes, especialmente para datos grandes o infinitos.
