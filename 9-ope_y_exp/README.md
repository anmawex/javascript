# Operadores y Expresiones - Cálculo y Lógica

Este módulo cubre todos los operadores de JavaScript, desde operadores aritméticos básicos hasta operadores bitwise y expresiones complejas.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **1-condicionales.js** - Operador ternario y operadores lógicos
- **2-coma.js** - Operador coma
- **3-unarios.js** - Operadores unarios
- **4-asignacion.js** - Operadores de asignación

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Operadores Aritméticos
- ✅ Usar operadores básicos: `+`, `-`, `*`, `/`, `%`
- ✅ Entender precedencia de operadores
- ✅ Manejar números especiales: `NaN`, `Infinity`
- ✅ Usar `Math` para operaciones avanzadas
- ✅ Trabajar con `BigInt` para números grandes

### Operadores Lógicos
- ✅ Usar operadores lógicos: `&&`, `||`, `!`
- ✅ Entender cortocircuito y evaluación corta
- ✅ Usar nullish coalescing: `??` (ES2020)
- ✅ Usar asignación lógica: `&&=`, `||=`, `??=` (ES2020)
- ✅ Aplicar lógica booleana en expresiones

### Operadores de Comparación
- ✅ Usar operadores de igualdad: `===`, `!==`, `==`, `!=`
- ✅ Usar operadores relacionales: `>`, `<`, `>=`, `<=`
- ✅ Entender coerción en comparaciones
- ✅ Usar comparación estricta para mayor seguridad
- ✅ Comparar objetos y arrays apropiadamente

### Operadores Bitwise
- ✅ Usar operadores bitwise: `&`, `|`, `^`, `~`
- ✅ Usar operadores de desplazamiento: `<<`, `>>`, `>>>`
- ✅ Entender representación binaria
- ✅ Aplicar bitwise en optimización
- ✅ Usar máscaras de bits

### Operadores de Asignación
- ✅ Usar asignación compuesta: `+=`, `-=`, `*=`, `/=`, `%=`
- ✅ Usar asignación bitwise: `&=`, `|=`, `^=`, `<<=`, `>>=`
- ✅ Entender precedencia de asignación
- ✅ Usar desestructuración en asignación
- ✅ Aplicar patrones de asignación eficientes

### Operadores Especiales
- ✅ Usar operador ternario: `? :`
- ✅ Usar operador coma: `,`
- ✅ Usar operadores unarios: `+`, `-`, `!`, `~`, `typeof`, `delete`, `void`
- ✅ Entender precedencia de operadores
- ✅ Usar agrupación con paréntesis

## 🚀 Características Cubiertas

### Operadores Aritméticos
- **Adición**: `+` para suma y concatenación
- **Sustracción**: `-` para resta y negación
- **Multiplicación**: `*` para multiplicación
- **División**: `/` para división flotante
- **Módulo**: `%` para resto de división
- **Exponenciación**: `**` para potencia (ES2016)

### Operadores Lógicos
- **AND**: `&&` para conjunción lógica
- **OR**: `||` para disyunción lógica
- **NOT**: `!` para negación lógica
- **Nullish Coalescing**: `??` para valores nulos (ES2020)
- **Asignación Lógica**: `&&=`, `||=`, `??=` (ES2020)

### Operadores Bitwise
- **AND Bitwise**: `&` para AND bit a bit
- **OR Bitwise**: `|` para OR bit a bit
- **XOR Bitwise**: `^` para XOR bit a bit
- **NOT Bitwise**: `~` para NOT bit a bit
- **Desplazamiento Izquierda**: `<<` para desplazar bits a la izquierda
- **Desplazamiento Derecha**: `>>` para desplazar bits a la derecha (con signo)
- **Desplazamiento Derecha Sin Signo**: `>>>` para desplazar bits a la derecha (sin signo)

### Operadores de Asignación
- **Asignación Simple**: `=` para asignar valor
- **Asignación Compuesta**: `+=`, `-=`, `*=`, `/=`, `%=`
- **Asignación Bitwise**: `&=`, `|=`, `^=`, `<<=`, `>>=`
- **Desestructuración**: `{...} = objeto`, `[...] = array`

### Operadores Especiales
- **Ternario**: `condición ? valor1 : valor2`
- **Coma**: `expresion1, expresion2`
- **Unarios**: `+`, `-`, `!`, `~`, `typeof`, `delete`, `void`
- **Agrupación**: `(expresion)` para precedencia

## 💡 Casos de Uso Prácticos

### Operadores Aritméticos
```javascript
// Operaciones básicas
const precio = 100;
const iva = precio * 0.21;
const total = precio + iva;
const descuento = total * 0.1;
const final = total - descuento;

// Operaciones con BigInt
const numeroGrande = 123456789012345678901234567890n;
const sumaGrande = numeroGrande + 1n;

// Operaciones especiales
const resultado = 10 / 0; // Infinity
const invalido = 0 / 0; // NaN
```

### Operadores Lógicos
```javascript
// Cortocircuito
const usuario = null;
const nombre = usuario && usuario.nombre || 'Invitado'; // 'Invitado'

// Nullish coalescing
const valor = null;
const valorDefecto = valor ?? 'defecto'; // 'defecto'

// Asignación lógica
let x = true;
x &&= false; // x = x && false

let y = null;
y ??= 'defecto'; // y = y ?? 'defecto'
```

### Operadores Bitwise
```javascript
// Máscaras de bits
const PERMISOS = {
    LEER: 1,    // 001
    ESCRIBIR: 2, // 010
    EJECUTAR: 4  // 100
};

const permisosUsuario = PERMISOS.LEER | PERMISOS.ESCRIBIR; // 3 (011)
const puedeLeer = permisosUsuario & PERMISOS.LEER; // 1 (true)
const puedeEjecutar = permisosUsuario & PERMISOS.EJECUTAR; // 0 (false)

// Desplazamiento
const numero = 5; // 101
const duplicado = numero << 1; // 10 (1010)
const mitad = numero >> 1; // 2 (10)
```

### Operadores de Asignación
```javascript
// Asignación compuesta
let contador = 0;
contador += 1; // contador = contador + 1
contador *= 2; // contador = contador * 2
contador -= 1; // contador = contador - 1

// Desestructuración
const persona = { nombre: 'Juan', edad: 30 };
const { nombre, edad } = persona;

const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo] = colores;
```

## 📋 Ejercicios Prácticos

Cada archivo contiene ejercicios para reforzar el aprendizaje:

### 1-condicionales.js
1. **Operador Ternario**: Uso básico y anidado
2. **Operadores Lógicos**: AND, OR, NOT
3. **Nullish Coalescing**: Uso de ??
4. **Asignación Lógica**: &&=, ||=, ??=
5. **Operadores Bitwise**: Operaciones bit a bit
6. **Asignación Compuesta**: +=, -=, *=, etc.
7. **Comparación**: ===, !==, ==, !=
8. **Precedencia**: Orden de evaluación

### 2-coma.js
1. **Operador Coma**: Uso básico
2. **Coma en Bucles**: Uso en for
3. **Coma en Expresiones**: Múltiples expresiones
4. **Coma en Funciones**: Múltiples parámetros
5. **Coma en Arrays**: Separación de elementos

### 3-unarios.js
1. **Operadores Unarios**: +, -, !, ~
2. **typeof**: Verificación de tipos
3. **delete**: Eliminación de propiedades
4. **void**: Operador void
5. **Negación**: ! y !! para booleanos

### 4-asignacion.js
1. **Asignación Simple**: Uso básico
2. **Asignación Compuesta**: +=, -=, *=, etc.
3. **Desestructuración**: Objetos y arrays
4. **Asignación Bitwise**: &=, |=, ^=, etc.
5. **Asignación Lógica**: &&=, ||=, ??=

## 🔗 Relación con Otros Módulos

- **Módulo 1**: Variables (operadores asignan valores a variables)
- **Módulo 2**: Tipos de Datos (operadores trabajan con tipos)
- **Módulo 3**: Casting (operadores causan coerción)
- **Módulo 5**: Comparaciones (operadores de comparación)
- **Módulo 7**: Condicionales (operadores en condiciones)
- **Módulo 9**: Operadores (este módulo)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar `===` para comparación estricta
- Usar `??` para valores por defecto
- Usar paréntesis para claridad en expresiones complejas
- Usar asignación compuesta para código más limpio
- Entender precedencia de operadores

### ❌ Evitar
- Usar `==` cuando se necesita `===`
- Olvidar paréntesis en expresiones complejas
- Ignorar precedencia de operadores
- Usar operadores bitwise sin entenderlos
- Dejar expresiones ambiguas sin documentar

## 🎓 Nivel de Dificultad

- **Básico**: Operadores aritméticos y lógicos básicos
- **Intermedio**: Operadores bitwise y asignación compuesta
- **Avanzado**: Precedencia y expresiones complejas

## 🛠️ Compatibilidad

- **Operadores Básicos**: ES1+ (soporte universal)
- **Operadores Bitwise**: ES1+ (soporte universal)
- **Exponenciación**: ES2016+ (soporte universal)
- **Nullish Coalescing**: ES2020+ (navegadores modernos)
- **Asignación Lógica**: ES2020+ (navegadores modernos)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Básico** → Operadores aritméticos y lógicos
2. **Intermedio** → Operadores de comparación y asignación
3. **Avanzado** → Operadores bitwise y precedencia
4. **Práctica** → Ejercicios y casos reales
5. **Maestría** -> Expresiones complejas y optimización

---

**💡 Tip**: Entender la precedencia de operadores es crucial para evitar bugs inesperados. Cuando tengas dudas, usa paréntesis para hacer el código más claro. Los operadores bitwise son poderosos para optimización pero deben usarse con cuidado y documentación adecuada.
