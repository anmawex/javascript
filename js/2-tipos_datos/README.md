# Tipos de Datos - Fundamentos de JavaScript

Este módulo cubre todos los tipos de datos primitivos y objetos en JavaScript, fundamentales para entender cómo funciona el lenguaje.

## 📁 Archivos del Módulo

### 📝 Tipos Primitivos
- **2.1_Primarios/bigint.js** - Enteros de precisión arbitraria
- **2.1_Primarios/boolean.js** - Valores lógicos verdadero/falso
- **2.1_Primarios/null_undefined.js** - Valores nulos y no definidos
- **2.1_Primarios/number.js** - Números y operaciones matemáticas
- **2.1_Primarios/string.js** - Cadenas de texto y manipulación
- **2.1_Primarios/symbol.js** - Símbolos únicos e identificadores

### 📝 Tipos de Objetos
- **2.2_Objetos/2.1_intro.js** - Introducción a objetos
- **2.2_Objetos/2.2_corchetes.js** - Acceso a propiedades con corchetes
- **2.2_Objetos/2.3_props_calculadas.js** - Propiedades calculadas
- **2.2_Objetos/2.4_metodos.js** - Métodos de objeto
- **2.2_Objetos/2.5_desestructuracion.js** - Destructuring de objetos
- **2.2_Objetos/2.6_congelamiento.js** - Congelamiento de objetos

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Tipos Primitivos
- ✅ Entender los 7 tipos primitivos de JavaScript
- ✅ Usar `BigInt` para números grandes
- ✅ Trabajar con valores booleanos y lógica
- ✅ Diferenciar `null` y `undefined`
- ✅ Manipular números y operaciones matemáticas
- ✅ Trabajar con strings y métodos de cadena
- ✅ Usar símbolos para identificadores únicos

### Objetos
- ✅ Crear y manipular objetos literales
- ✅ Acceder a propiedades con notación de punto y corchetes
- ✅ Usar propiedades calculadas dinámicamente
- ✅ Definir métodos en objetos
- ✅ Usar destructuring para extraer valores
- ✅ Entender el congelamiento de objetos

### Características Especiales
- ✅ Entender la inmutabilidad de primitivos
- ✅ Comprender la mutabilidad de objetos
- ✅ Usar `typeof` para verificar tipos
- ✅ Entender la coerción de tipos

## 🚀 Características Cubiertas

### Tipos Primitivos
- **String**: Cadenas de texto, inmutables
- **Number**: Números (enteros y flotantes), IEEE 754
- **BigInt**: Enteros de precisión arbitraria (ES2020)
- **Boolean**: Valores lógicos `true`/`false`
- **Undefined**: Valor no definido
- **Null**: Valor nulo intencional
- **Symbol**: Identificador único (ES6)

### Objetos
- **Object**: Colecciones de pares clave-valor
- **Mutables**: Los objetos pueden modificarse
- **Dinámicos**: Propiedades pueden agregarse/eliminarse
- **Referencia**: Los objetos se pasan por referencia

### Métodos Útiles
- **typeof**: Verificar tipo de dato
- **Object.keys()**: Obtener claves de objeto
- **Object.values()**: Obtener valores de objeto
- **Object.entries()**: Obtener pares clave-valor

## 💡 Casos de Uso Prácticos

### Tipos Primitivos
```javascript
// Strings - manipulación de texto
const nombre = "Juan Pérez";
const saludo = `Hola ${nombre}`;
const mayusculas = nombre.toUpperCase();
const longitud = nombre.length;

// Numbers - operaciones matemáticas
const precio = 99.99;
const iva = precio * 0.21;
const redondeado = Math.round(precio);

// BigInt - números grandes
const idGrande = 123456789012345678901234567890n;
const sumaGrande = idGrande + 1n;

// Boolean - lógica condicional
const esMayorEdad = edad >= 18;
const tieneAcceso = esMayorEdad && tienePermiso;

// Null/Undefined - valores especiales
const usuario = null; // intencionalmente nulo
let configuracion; // no definido
```

### Objetos
```javascript
// Objeto literal
const persona = {
    nombre: "Ana",
    edad: 30,
    activo: true,
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};

// Propiedades calculadas
const producto = {
    precio: 100,
    cantidad: 5,
    get total() {
        return this.precio * this.cantidad;
    }
};

// Destructuring
const { nombre, edad } = persona;
const [primero, segundo] = array;
```

## 📋 Ejercicios Prácticos

Cada archivo contiene ejemplos prácticos y ejercicios para reforzar el aprendizaje:

1. **BigInt**: Trabajar con números muy grandes
2. **Boolean**: Lógica condicional y valores de verdad
3. **Null/Undefined**: Manejo de valores especiales
4. **Number**: Operaciones matemáticas y validación
5. **String**: Manipulación de texto y búsqueda
6. **Symbol**: Creación de identificadores únicos
7. **Objetos**: Creación y manipulación básica
8. **Propiedades**: Acceso dinámico y calculadas
9. **Métodos**: Funciones dentro de objetos
10. **Destructuring**: Extracción eficiente de datos

## 🔗 Relación con Otros Módulos

- **Módulo 1**: Variables (contienen tipos de datos)
- **Módulo 3**: Casting (conversión entre tipos)
- **Módulo 5**: Comparaciones (comparación de tipos)
- **Módulo 9**: Operadores (operadores con tipos)
- **Módulo 15**: OOP (objetos como base de clases)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar `const` para valores que no cambian
- Usar `let` para valores que pueden cambiar
- Usar `===` para comparación estricta
- Validar tipos antes de operar
- Usar nombres descriptivos para propiedades
- Usar destructuring para extracción limpia

### ❌ Evitar
- Mezclar tipos sin validación
- Usar `==` en lugar de `===`
- Modificar objetos inesperadamente
- Usar propiedades no definidas
- Ignorar `null` vs `undefined`

## 🎓 Nivel de Dificultad

- **Básico**: Declaración y acceso básico
- **Intermedio**: Métodos avanzados y propiedades calculadas
- **Avanzado**: Símbolos, BigInt, destructuring compleja

## 🛠️ Compatibilidad

- **Primitivos**: ES1+ (soporte universal)
- **BigInt**: ES2020+ (navegadores modernos)
- **Symbol**: ES6+ (soporte universal)
- **Object methods**: ES5+ (soporte universal)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Primitivos** → Entender tipos básicos
2. **Objetos** → Estructuras de datos complejas
3. **Métodos** -> Herramientas de manipulación
4. **Práctica** → Ejercicios y casos reales
5. **Integración** -> Aplicación en proyectos

---

**💡 Tip**: Entender los tipos de datos es fundamental para JavaScript. La diferencia entre primitivos y objetos, y entre `null` y `undefined`, es crucial para evitar errores comunes y escribir código robusto.
