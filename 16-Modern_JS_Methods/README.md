# Modern JS Methods - Métodos Modernos de JavaScript

Este módulo cubre los métodos modernos de JavaScript para arrays, strings y objetos, enfocándose en programación funcional y técnicas modernas.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **16.1_array_methods.js** - Métodos funcionales de arrays
- **16.2_string_methods.js** - Métodos modernos de strings
- **16.3_object_methods.js** - Métodos modernos de objetos
- **ejercicios.js** - Ejercicios prácticos integrados

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Array Methods
- ✅ Usar métodos de iteración: `forEach`, `map`, `filter`, `find`, `findIndex`
- ✅ Aplicar métodos de reducción: `reduce`, `reduceRight`
- ✅ Implementar métodos de búsqueda: `some`, `every`, `includes`
- ✅ Utilizar métodos de transformación: `sort`, `flat`, `flatMap`
- ✅ Crear copias inmutables: `toSorted`, `toReversed`, `slice`
- ✅ Aplicar programación funcional con arrays

### String Methods
- ✅ Usar métodos de búsqueda: `includes`, `startsWith`, `endsWith`
- ✅ Manipular strings: `trim`, `padStart`, `padEnd`, `repeat`
- ✅ Transformar texto: `toUpperCase`, `toLowerCase`, `toLocaleString`
- ✅ Trabajar con expresiones regulares: `match`, `replace`, `replaceAll`
- ✅ Formatear y validar strings
- ✅ Manejar Unicode y emojis

### Object Methods
- ✅ Crear y copiar objetos: `Object.assign`, `Object.create`
- ✅ Convertir objetos: `Object.keys`, `Object.values`, `Object.entries`
- ✅ Comparar objetos: `Object.is`, comparación profunda
- ✅ Trabajar con prototipos: `getPrototypeOf`, `setPrototypeOf`
- ✅ Controlar propiedades: `defineProperty`, `freeze`, `seal`
- ✅ Agrupar y transformar objetos: `Object.groupBy`

## 🚀 Características Cubiertas

### Array Methods (ES5+)
- **Iteración**: `forEach`, `map`, `filter`, `find`, `findIndex`
- **Reducción**: `reduce`, `reduceRight`
- **Búsqueda**: `some`, `every`, `includes`
- **Transformación**: `sort`, `flat`, `flatMap`, `copyWithin`
- **Copia**: `slice`, `toSorted`, `toReversed` (ES2023)

### String Methods (ES6+)
- **Búsqueda**: `includes`, `startsWith`, `endsWith`
- **Manipulación**: `trim`, `trimStart`, `trimEnd`, `padStart`, `padEnd`
- **Transformación**: `toUpperCase`, `toLowerCase`, `repeat`
- **Expresiones Regulares**: `match`, `matchAll`, `replace`, `replaceAll`
- **Unicode**: `codePointAt`, `fromCodePoint`, `String.raw`

### Object Methods (ES5+)
- **Creación**: `Object.assign`, `Object.create`
- **Conversión**: `Object.keys`, `Object.values`, `Object.entries`, `Object.fromEntries`
- **Comparación**: `Object.is`, comparación profunda
- **Propiedades**: `defineProperty`, `getOwnPropertyDescriptor`
- **Control**: `freeze`, `seal`, `preventExtensions`
- **Agrupación**: `Object.groupBy` (ES2022)

## 💡 Casos de Uso Prácticos

### Data Processing
```javascript
// Filtrar y transformar datos
const usuariosActivos = usuarios
    .filter(u => u.activo)
    .map(u => ({ ...u, nombre: u.nombre.toUpperCase() }))
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

// Agrupar datos por categoría
const productosPorCategoria = productos.reduce((acc, p) => {
    if (!acc[p.categoria]) acc[p.categoria] = [];
    acc[p.categoria].push(p);
    return acc;
}, {});
```

### Text Processing
```javascript
// Validación y limpieza de datos
const emailValido = email
    .trim()
    .toLowerCase()
    .includes('@') && email.includes('.');

// Formateo de texto
const codigoFormateado = codigo.padStart(6, '0');
const nombreFormateado = nombre.padEnd(20, ' ');
```

### Object Manipulation
```javascript
// Combinar configuraciones con defaults
const configFinal = { ...defaults, ...userConfig };

// Extraer datos públicos
const datosPublicos = Object.fromEntries(
    Object.entries(usuario).filter(([k]) => !['password', 'token'].includes(k))
);
```

## 📋 Ejercicios Prácticos

El archivo `ejercicios.js` contiene:

1. **Array Methods**: Filtrado, mapeo, reducción, búsqueda
2. **String Methods**: Manipulación, búsqueda, formateo
3. **Object Methods**: Conversión, copia, agrupación
4. **Combinación**: Pipeline de procesamiento de datos
5. **Validación**: Limpieza y normalización de datos
6. **Algoritmos Funcionales**: Composición y transformación
7. **Proyectos**: Sistema de inventario, analizador de texto

## 🔗 Relación con Otros Módulos

- **Módulo 4**: Estructuras de datos (arrays, objetos básicos)
- **Módulo 6**: Loops e iteradores (for, while vs métodos funcionales)
- **Módulo 13**: ES6 Features (arrow functions, destructuring)
- **Módulo 15**: OOP (métodos de objeto, prototipos)
- **Módulo 14**: Async Programming (métodos asíncronos)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar métodos funcionales sobre bucles tradicionales
- Preferir inmutabilidad (crear nuevos arrays/objetos)
- Componer métodos para pipelines complejos
- Usar `Object.assign` o spread para copias superficiales
- Validar datos antes de procesarlos
- Usar métodos específicos (`includes` vs `indexOf`)

### ❌ Evitar
- Modificar arrays/objetos originales innecesariamente
- Usar bucles for cuando existen métodos funcionales
- Ignorar valores de retorno de métodos funcionales
- Olvidar manejar casos edge (arrays vacíos, null, undefined)
- Mezclar programación imperativa con funcional innecesariamente

## 🎓 Nivel de Dificultad

- **Básico**: Métodos simples (map, filter, includes)
- **Intermedio**: Reducción, transformación, composición
- **Avanzado**: Pipeline, algoritmos funcionales, optimización

## 🛠️ Compatibilidad

- **Array Methods**: ES5+ (soporte universal)
- **String Methods**: ES6+ (soporte universal)
- **Object Methods**: ES5+ (soporte universal)
- **Modernos**: `Object.groupBy`, `toSorted`, `toReversed` (ES2022+)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Array Methods** → Fundamentos de programación funcional
2. **String Methods** → Manipulación y validación de texto
3. **Object Methods** → Manipulación avanzada de objetos
4. **Combinación** → Pipeline y composición
5. **Proyectos** → Aplicación práctica de todos los conceptos

---

**💡 Tip**: Los métodos modernos de JavaScript son fundamentales para el desarrollo moderno. Dominar la programación funcional con arrays, strings y objetos te permitirá escribir código más conciso, legible y mantenible. La práctica con datos reales es clave para solidificar estos conocimientos.
