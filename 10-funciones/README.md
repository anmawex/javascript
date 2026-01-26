# Funciones - Bloques de Código Reutilizables

Este módulo cubre todos los aspectos de las funciones en JavaScript, desde funciones básicas hasta funciones flecha, closures y patrones avanzados.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **1-intro.js** - Introducción a funciones y tipos
- **2-parametros.js** - Parámetros y argumentos
- **3-anid_y_clos.js** - Funciones anidadas y closures
- **4-ambito.js** - Scope y contexto de funciones
- **5-arrow.js** - Funciones flecha (ES6)
- **6-higher_order.js** - Funciones de orden superior
- **7-recursion.js** - Recursión y patrones recursivos
- **8-callbacks.js** - Callbacks y programación asíncrona
- **9-currying.js** - Currying y aplicación parcial
- **10-pure_functions.js** - Funciones puras e inmutabilidad

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Funciones Básicas
- ✅ Declarar funciones con diferentes sintaxis
- ✅ Entender la diferencia entre declaración y expresión
- ✅ Usar parámetros y argumentos correctamente
- ✅ Entender el scope y contexto de funciones
- ✅ Usar valores de retorno apropiadamente

### Funciones Flecha
- ✅ Usar sintaxis de flecha para funciones concisas
- ✅ Entener diferencias con funciones tradicionales
- ✅ Usar `this` léxico en funciones flecha
- ✅ Aplicar funciones flecha en callbacks
- ✅ Conocer cuándo usar y cuándo evitar funciones flecha

### Closures y Scope
- ✅ Entender qué son los closures
- ✅ Crear closures para mantener estado
- ✅ Usar closures para encapsulación
- ✅ Implementar patrones con closures
- ✅ Entender el scope léxico

### Funciones de Orden Superior
- ✅ Usar funciones que reciben funciones como parámetros
- ✅ Crear funciones que retornan otras funciones
- ✅ Implementar composición de funciones
- ✅ Usar funciones de orden superior con arrays
- ✅ Entender programación funcional básica

### Patrones Avanzados
- ✅ Implementar recursión para problemas complejos
- ✅ Usar callbacks para operaciones asíncronas
- ✅ Aplicar currying para funciones especializadas
- ✅ Crear funciones puras para programación funcional
- ✅ Entender inmutabilidad y efectos secundarios

## 🚀 Características Cubiertas

### Tipos de Funciones
- **Declaración de Función**: `function nombre() {}`
- **Expresión de Función**: `const nombre = function() {}`
- **Función Flecha**: `() => {}`
- **Función Anónima**: `function() {}`
- **Función Constructora**: `function Nombre() {}`

### Parámetros y Argumentos
- **Parámetros**: Variables en la definición
- **Argumentos**: Valores pasados en la llamada
- **Parámetros por Defecto**: `param = valor` (ES6)
- **Parámetros Rest**: `...parametros` (ES6)
- **Objeto Arguments**: Colección de argumentos

### Scope y Contexto
- **Scope Global**: Accesible desde cualquier parte
- **Scope de Función**: Limitado a la función
- **Scope de Bloque**: Limitado al bloque `{}` (ES6)
- **Contexto `this`**: Depende de cómo se llama la función
- **Bind/Call/Apply**: Métodos para controlar `this`

### Características Especiales
- **Closures**: Funciones que recuerdan su scope
- **Hoisting**: Elevación de declaraciones de función
- **Recursión**: Funciones que se llaman a sí mismas
- **Currying**: Transformación de funciones
- **Pureza**: Funciones sin efectos secundarios

## 💡 Casos de Uso Prácticos

### Funciones Básicas
```javascript
// Declaración de función
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

// Expresión de función
const despedir = function(nombre) {
    return `Adiós, ${nombre}`;
};

// Función flecha
const calcularEdad = (añoNacimiento) => {
    const añoActual = new Date().getFullYear();
    return añoActual - añoNacimiento;
};
```

### Closures
```javascript
// Closure para contador
function crearContador() {
    let contador = 0;
    return {
        incrementar: () => ++contador,
        decrementar: () => --contador,
        obtener: () => contador
    };
}

const contador = crearContador();
console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.obtener()); // 2
```

### Funciones de Orden Superior
```javascript
// Función que recibe función
function procesarArray(array, funcion) {
    return array.map(funcion);
}

const numeros = [1, 2, 3, 4, 5];
const duplicados = procesarArray(numeros, n => n * 2);

// Función que retorna función
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const duplicar = crearMultiplicador(2);
console.log(duplicar(5)); // 10
```

### Recursión
```javascript
// Factorial recursivo
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Fibonacci recursivo
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### Currying
```javascript
// Función curried
function sumar(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Uso
const resultado = sumar(1)(2)(3); // 6

// Versión con flecha
const sumarFlecha = a => b => c => a + b + c;
```

## 📋 Ejercicios Prácticos

Cada archivo contiene ejercicios para reforzar el aprendizaje:

### 1-intro.js
1. **Declaración vs Expresión**: Diferencias y uso
2. **Funciones Anónimas**: Uso en callbacks
3. **Valores de Retorno**: Tipos y patrones
4. **Funciones sin Retorno**: undefined implícito
5. **Funciones con Múltiples Retornos**

### 2-parametros.js
1. **Parámetros por Defecto**: Valores por defecto
2. **Parámetros Rest**: Número variable de parámetros
3. **Objeto Arguments**: Acceso a todos los argumentos
4. **Desestructuración**: Parámetros desestructurados
5. **Validación**: Validación de parámetros

### 3-anid_y_clos.js
1. **Funciones Anidadas**: Funciones dentro de funciones
2. **Closures Básicos**: Mantener estado
3. **Closures con Parámetros**: Closures con variables externas
4. **Closures en Bucles**: Problemas comunes y soluciones
5. **Patrones con Closures**: Módulos y fábricas

### 4-ambito.js
1. **Scope Global**: Variables globales
2. **Scope de Función**: Variables locales
3. **Scope de Bloque**: Variables de bloque
4. **Shadowing**: Ocultación de variables
5. **Hoisting**: Comportamiento de elevación

### 5-arrow.js
1. **Sintaxis Básica**: Funciones flecha simples
2. **This Léxico**: Comportamiento de this
3. **Return Implícito**: Funciones de una línea
4. **Uso en Callbacks**: Funciones flecha en callbacks
5. **Limitaciones**: Cuándo no usar funciones flecha

### 6-higher_order.js
1. **Funciones como Parámetros**: Callbacks
2. **Funciones que Retornan Funciones**: Fábricas
3. **Composición**: Componer funciones
4. **Map/Filter/Reduce**: Funciones de orden superior
5. **Patrones Funcionales**: Programación funcional

### 7-recursion.js
1. **Recursión Básica**: Casos simples
2. **Recursión con Arrays**: Procesamiento recursivo
3. **Tail Recursion**: Optimización de recursión
4. **Problemas Clásicos**: Factorial, Fibonacci
5. **Recursión vs Iteración**: Cuándo usar cada una

### 8-callbacks.js
1. **Callbacks Síncronos**: Uso básico
2. **Callbacks Asíncronos**: Operaciones asíncronas
3. **Error Handling**: Manejo de errores en callbacks
4. **Callback Hell**: Anidación excesiva
5. **Promises**: Alternativa a callbacks

### 9-currying.js
1. **Currying Básico**: Transformación de funciones
2. **Aplicación Parcial**: Funciones parcialmente aplicadas
3. **Currying Práctico**: Casos de uso reales
4. **Composición con Currying**: Combinación de técnicas
5. **Patrones Avanzados**: Uso en programación funcional

### 10-pure_functions.js
1. **Funciones Puras**: Definición y características
2. **Inmutabilidad**: No modificar datos originales
3. **Efectos Secundarios**: Identificar y evitar
4. **Funciones Impuras**: Cuándo son necesarias
5. **Programación Funcional**: Patrones funcionales

## 🔗 Relación con Otros Módulos

- **Módulo 1**: Variables (funciones usan variables)
- **Módulo 2**: Tipos de Datos (funciones trabajan con tipos)
- **Módulo 6**: Loops (funciones vs bucles)
- **Módulo 7**: Condicionales (funciones con condicionales)
- **Módulo 8**: Error Handling (errores en funciones)
- **Módulo 14**: Async Programming (callbacks y async/await)
- **Módulo 16**: Métodos Modernos (funciones como métodos)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar funciones flecha para callbacks cortos
- Usar funciones tradicionales cuando necesitas `this` dinámico
- Usar parámetros por defecto para valores opcionales
- Usar desestructuración para parámetros complejos
- Crear funciones puras cuando sea posible
- Documentar funciones con JSDoc

### ❌ Evitar
- Funciones demasiado largas o complejas
- Usar `arguments` cuando puedes usar parámetros rest
- Ignorar el scope y el hoisting
- Crear efectos secundarios innecesarios
- Usar `this` sin entender su comportamiento

## 🎓 Nivel de Dificultad

- **Básico**: Funciones simples y parámetros
- **Intermedio**: Closures y funciones de orden superior
- **Avanzado**: Recursión, currying, programación funcional

## 🛠️ Compatibilidad

- **Funciones**: ES1+ (soporte universal)
- **Funciones Flecha**: ES6+ (soporte universal)
- **Parámetros Rest**: ES6+ (soporte universal)
- **Parámetros por Defecto**: ES6+ (soporte universal)
- **Desestructuración**: ES6+ (soporte universal)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Básico** → Funciones simples y parámetros
2. **Intermedio** → Closures y funciones de orden superior
3. **Avanzado** → Recursión, currying, programación funcional
4. **Práctica** → Ejercicios y proyectos reales
5. **Maestría** -> Patrones avanzados y optimización

---

**💡 Tip: Las funciones son el bloque de construcción fundamental de JavaScript. Entender los closures y el scope léxico es crucial para escribir código robusto. Las funciones flecha son excelentes para callbacks, pero usa funciones tradicionales cuando necesites `this` dinámico o métodos.
