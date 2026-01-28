# Variables y Scope - Fundamentos de JavaScript

Este módulo cubre los conceptos fundamentales de variables y scope en JavaScript, esenciales para cualquier programador.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **1.1_intro.js** - Introducción a variables y sintaxis básica
- **1.2_var.js** - Comportamiento y características de `var`
- **1.3_IIFE.js** - Immediately Invoked Function Expressions
- **1.4_hoisting.js** - Comportamiento de hoisting
- **1.5_const.js** - Declaración con `const`
- **1.6_scope_global.js** - Scope global y sus implicaciones
- **1.7_scope_funcion.js** - Scope de función
- **1.8_scope_bloque.js** - Scope de bloque
- **ejercicios.js** - Ejercicios prácticos con soluciones

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Variables y Declaración
- ✅ Declarar variables usando `let`, `const` y `var`
- ✅ Entender las diferencias entre los tres tipos de declaración
- ✅ Usar convenciones de nomenclatura apropiadas
- ✅ Aplicar buenas prácticas para nombres de variables

### Scope y Contexto
- ✅ Entender el scope global y sus implicaciones
- ✅ Trabajar con scope de función
- ✅ Utilizar scope de bloque con `let` y `const`
- ✅ Evitar problemas de scope y shadowing
- ✅ Comprender el hoisting y sus efectos

### Patrones Avanzados
- ✅ Usar IIFE para crear scope privado
- ✅ Implementar closures para mantener estado
- ✅ Evitar variables globales innecesarias
- ✅ Usar el scope léxico a tu favor

---

# 📚 TEORÍA COMPLETA

## 🔰 NIVEL FÁCIL - Fundamentos de Variables

### 1. Declaración Básica de Variables

#### ¿Qué es una Variable?
Una variable es un contenedor que almacena un valor. En JavaScript, podemos declarar variables usando tres palabras clave: `let`, `const` y `var`.

#### Tipos de Declaración

**`let` - Variable Moderna:**
```javascript
let miNombre = "Juan";
let edad = 25;
let esEstudiante = true;
```
- **Scope**: Bloque `{}` 
- **Reasignación**: ✅ Permitida
- **Hoisting**: ❌ No (Temporal Dead Zone)
- **Uso**: Variables que cambiarán

**`const` - Constante:**
```javascript
const PI = 3.14159;
const API_URL = "https://api.example.com";
const USUARIO = "admin";
```
- **Scope**: Bloque `{}`
- **Reasignación**: ❌ No permitida
- **Hoisting**: ❌ No (Temporal Dead Zone)
- **Uso**: Valores que no cambiarán

**`var` - Variable Tradicional:**
```javascript
var nombre = "María";
var contador = 0;
```
- **Scope**: Función
- **Reasignación**: ✅ Permitida
- **Hoisting**: ✅ Sí (undefined hasta asignación)
- **Uso**: Evitar en código moderno

### 2. Convenciones de Nomenclatura

#### Reglas de Nombres:
- **Iniciar con letra, $ o _**: `nombre`, `$usuario`, `_privado`
- **CamelCase**: `nombreUsuario`, `edadMaxima`, `estaActivo`
- **Descriptivos**: `contadorUsuarios` vs `cu`
- **No palabras reservadas**: `let`, `const`, `function` (no usar como nombres)

#### Ejemplos Correctos:
```javascript
let nombreUsuario = "Ana";
let edadMaxima = 65;
let estaActivo = true;
const API_ENDPOINT = "https://api.example.com";
```

### 3. Múltiples Variables en una Línea

```javascript
// Forma correcta
let nombre = "Juan", apellido = "Pérez", edad = 25;

// También con diferentes tipos
let titulo = "Ing.", nombreCompleto = "Carlos López", añosExperiencia = 10;
```

### 4. Reasignación de Variables

```javascript
let contador = 0;    // Inicialización
contador = 10;       // Reasignación ✅
contador = 20;       // Reasignación ✅

const VALOR_FIJO = 100;
// VALOR_FIJO = 200;  // Error ❌ Las constantes no pueden reasignarse
```

### 5. Constantes con Objetos

```javascript
const persona = {
    nombre: "Ana",
    edad: 25
};

// ✅ PERMITIDO: Modificar propiedades
persona.edad = 26;
persona.ciudad = "Madrid";

// ❌ ERROR: Reasignar el objeto
// persona = { nombre: "Otra" }; // TypeError
```

---

## 🔧 NIVEL MEDIO - Scope y Contexto

### 6. Scope Global

El scope global es el nivel más alto de alcance. Las variables declaradas fuera de cualquier función son globales.

```javascript
// Variable global
let variableGlobal = "Soy global";

function mostrarVariable() {
    // Acceso a variable global
    return variableGlobal; // "Soy global"
}

// También accesible desde window
console.log(window.variableGlobal); // "Soy global"
```

#### ⚠️ Peligros de Variables Globales:
- **Colisiones**: Múltiples scripts pueden sobreescribir variables
- **Mantenimiento**: Difícil de rastrear dónde se usa
- **Testing**: Complica las pruebas unitarias

### 7. Shadowing de Variables

Shadowing ocurre cuando una variable en un scope interno tiene el mismo nombre que una variable en un scope externo.

```javascript
let mensaje = "Global";

function mostrarMensaje() {
    let mensaje = "Local";  // Shadowing
    return mensaje;         // Retorna "Local"
}

console.log(mensaje);           // "Global"
console.log(mostrarMensaje()); // "Local"
```

#### Reglas de Shadowing:
1. **Siempre gana el scope más interno**
2. **La variable externa queda "oculta"**
3. **No se modifica la variable externa**

### 8. Scope de Función

Las variables declaradas con `var` o funciones dentro de otra función tienen scope de función.

```javascript
function crearVariables() {
    let interna = "Solo visible aquí";
    let numero = 42;
    
    return { interna, numero };
}

// Fuera de la función, estas variables no existen
// console.log(interna); // ReferenceError
```

### 9. Scope de Bloque

Introducido con ES6, el scope de bloque limita las variables al bloque `{}` donde se declaran.

```javascript
let externa = "Fuera del bloque";

if (true) {
    let interna = "Dentro del bloque";
    console.log(externa); // "Fuera del bloque" ✅
    console.log(interna); // "Dentro del bloque" ✅
}

console.log(externa); // "Fuera del bloque" ✅
// console.log(interna); // ReferenceError ❌
```

#### Bloques que crean scope:
- `if (...) { }`
- `for (...) { }`
- `while (...) { }`
- `try {...} catch {...}`
- `{ }` (bloque vacío)

### 10. Hoisting

Hoisting es el comportamiento de JavaScript de "elevar" las declaraciones al principio de su scope.

#### Hoisting con `var`:
```javascript
console.log(variableVar); // undefined (no error)
var variableVar = "Declarada después";
console.log(variableVar); // "Declarada después"
```

#### Hoisting con `let` y `const`:
```javascript
// console.log(variable); // ReferenceError ❌
let variable = "Declarada después";
console.log(variable); // "Declarada después"
```

#### Temporal Dead Zone (TDZ):
```javascript
// TDZ comienza aquí
// let variable; // ReferenceError
// console.log(variable); // ReferenceError

let variable = "valor"; // TDZ termina aquí
```

### 11. Diferencias Clave: `var` vs `let` vs `const`

| Característica | `var` | `let` | `const` |
|---------------|-------|-------|---------|
| Scope | Función | Bloque | Bloque |
| Hoisting | ✅ (undefined) | ❌ (TDZ) | ❌ (TDZ) |
| Reasignación | ✅ | ✅ | ❌ |
| Uso recomendado | ❌ Evitar | ✅ Variables | ✅ Constantes |

---

## 🚀 NIVEL DIFÍCIL - Patrones Avanzados

### 12. IIFE (Immediately Invoked Function Expression)

Un IIFE es una función que se ejecuta inmediatamente después de ser definida.

```javascript
// Sintaxis básica
(function() {
    let variablePrivada = "Solo visible aquí";
    console.log(variablePrivada);
})();

// Con parámetros
(function(nombre) {
    let saludo = `Hola, ${nombre}`;
    console.log(saludo);
})("Mundo");
```

#### Usos de IIFE:
- **Crear scope privado**
- **Evitar contaminación global**
- **Inicialización de módulos**
- **Patrón módulo**

```javascript
const MiModulo = (function() {
    let privada = "secreto";
    
    return {
        getPrivada: () => privada,
        setPrivada: (valor) => { privada = valor; }
    };
})();

console.log(MiModulo.getPrivada()); // "secreto"
// MiModulo.privada; // undefined (acceso denegado)
```

### 13. Closures

Un closure es una función que recuerda el scope donde fue creada, incluso después que ese scope haya terminado.

```javascript
function crearContador() {
    let contador = 0; // Variable en el scope externo
    
    return function() { // Función interna (closure)
        contador++;     // Accede a variable externa
        return contador;
    };
}

const miContador = crearContador();
console.log(miContador()); // 1
console.log(miContador()); // 2
console.log(miContador()); // 3
```

#### Closures con Parámetros:
```javascript
function multiplicar(factor) {
    return function(numero) {
        return numero * factor; // "Recuerda" el factor
    };
}

const duplicar = multiplicar(2);
const triplicar = multiplicar(3);

console.log(duplicar(5));  // 10
console.log(triplicar(5));  // 15
```

### 14. Scope Anidado

JavaScript permite múltiples niveles de scope anidados:

```javascript
let nivel1 = "Exterior";

function nivel2() {
    let nivel2 = "Medio";
    
    function nivel3() {
        let nivel3 = "Interior";
        // Acceso a todos los niveles
        return `${nivel3}, ${nivel2}, ${nivel1}`;
    }
    
    return nivel3();
}

console.log(nivel2()); // "Interior, Medio, Exterior"
```

#### Reglas de Scope Anidado:
1. **Búsqueda hacia afuera**: JavaScript busca variables en el scope actual, luego en el padre, etc.
2. **Scope léxico**: El scope se determina donde la función es definida, no donde es llamada
3. **Cadena de scope**: Cada función tiene acceso a su cadena de scope

### 15. Pattern Módulo Avanzado

```javascript
const Calculadora = (function() {
    let memoria = 0; // Variable privada
    
    function privada() {
        return memoria * 2;
    }
    
    return {
        sumar: function(n) {
            memoria += n;
            return memoria;
        },
        restar: function(n) {
            memoria -= n;
            return memoria;
        },
        obtenerMemoria: function() {
            return memoria;
        },
        duplicarMemoria: function() {
            return privada(); // Acceso a función privada
        }
    };
})();

// Uso del módulo
Calculadora.sumar(5);    // 5
Calculadora.sumar(3);    // 8
console.log(Calculadora.obtenerMemoria()); // 8
console.log(Calculadora.duplicarMemoria()); // 16
```

### 16. Contexto `this` y Variables

```javascript
let objeto = {
    valor: 100,
    metodo: function() {
        let valor = 200; // Variable local
        return this.valor; // Se refiere a propiedad del objeto
    }
};

console.log(objeto.metodo()); // 100 (this.valor, no valor local)
```

#### `this` en diferentes contextos:
- **Global**: `this` es `window` (o `undefined` en strict mode)
- **Método de objeto**: `this` es el objeto
- **Constructor**: `this` es la nueva instancia
- **Arrow function**: `this` es del scope exterior

### 17. Encadenamiento de Métodos

```javascript
const ContadorPrivado = (function() {
    let _contador = 0;
    
    return {
        incrementar: function() {
            _contador++;
            return this; // Permite encadenamiento
        },
        decrementar: function() {
            _contador--;
            return this;
        },
        valor: function() {
            return _contador;
        }
    };
})();

// Encadenamiento
let resultado = ContadorPrivado
    .incrementar()
    .incrementar()
    .incrementar()
    .valor(); // 3
```

---

## 🎯 EJERCICIOS PRÁCTICOS

### Nivel Fácil (8 ejercicios)
1. **Tu Primera Variable** - Declaración básica con `let`
2. **Variables Numéricas** - Tipos de datos numéricos
3. **Variables Booleanas** - Valores true/false
4. **Constantes** - Uso de `const`
5. **Múltiples Variables** - Declaración en una línea
6. **Nombres de Variables** - Convenciones camelCase
7. **Reasignación** - Modificación de variables
8. **Constantes Inmutables** - Errores de reasignación

### Nivel Medio (9 ejercicios)
9. **Scope Global** - Acceso global vs local
10. **Shadowing** - Variables con mismo nombre
11. **Scope de Función** - Variables locales
12. **Variables no Declaradas** - Manejo de errores
13. **const vs let** - Diferencias clave
14. **Scope de Bloque con let** - Bloques if/for
15. **Scope de Bloque con const** - Bucles y constantes
16. **Hoisting con let** - Temporal Dead Zone
17. **Hoisting con var** - Comportamiento tradicional

### Nivel Difícil (9 ejercicios)
18. **IIFE Básico** - Scope privado
19. **Closure Simple** - Mantenimiento de estado
20. **Closure con Parámetros** - Funciones fábrica
21. **Scope Anidado** - Múltiples niveles
22. **Módulo con IIFE** - Pattern módulo
23. **Variable Shadowing Complejo** - Casos avanzados
24. **const con Objetos** - Referencia vs contenido
25. **Scope y Contexto this** - Contexto de ejecución
26. **Pattern Módulo Avanzado** - Encadenamiento

---

## 🔗 Relación con Otros Módulos

- **Módulo 2**: Tipos de datos (variables contienen tipos de datos)
- **Módulo 3**: Casting (conversión de tipos en variables)
- **Módulo 10**: Funciones (variables como parámetros y closures)
- **Módulo 15**: OOP (variables como propiedades de objetos)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar `const` para valores que no cambian
- Usar `let` para variables que necesitan reasignación
- Evitar `var` en código moderno
- Usar nombres descriptivos y en camelCase
- Minimizar variables globales
- Usar IIFE para crear módulos
- Aprovechar el scope de bloque para encapsulación

### ❌ Evitar
- Declarar variables sin `let` o `const`
- Usar `var` en código ES6+
- Variables globales innecesarias
- Nombres poco descriptivos
- Shadowing de variables innecesario
- Ignorar el hoisting

## 🎓 Nivel de Dificultad

- **Básico**: Declaración simple de variables
- **Intermedio**: Scope, hoisting, closures
- **Avanzado**: Patrones de diseño con IIFE y closures

## 🛠️ Compatibilidad

- **`var`**: ES1+ (soporte universal)
- **`let`, `const`**: ES6+ (soporte universal en navegadores modernos)
- **Scope de bloque**: ES6+ (soporte universal)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Declaración** → Entender `let`, `const`, `var`
2. **Scope** → Global, función, bloque
3. **Hoisting** → Comportamiento de elevación
4. **Patrones** → IIFE, closures, módulos
5. **Práctica** → Ejercicios y proyectos

---

**💡 Tip**: Dominar las variables y scope es fundamental para JavaScript. Es la base para entender closures, módulos y patrones de diseño avanzados. Practica con los ejercicios para solidificar estos conceptos.
