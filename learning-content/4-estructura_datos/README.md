# Estructuras de Datos - Colecciones y Algoritmos

Este módulo cubre las estructuras de datos fundamentales en JavaScript, desde arrays y objetos básicos hasta Map, Set y algoritmos comunes.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **4.1_basico.js** - Introducción a estructuras de datos
- **4.2_estructuracion_datos.js** - JSON y almacenamiento estructurado
- **4.3_arrays.js** - Arrays básicos y manipulación
- **4.4_arrays_metodos.js** - Métodos funcionales de arrays

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Estructuras Básicas
- ✅ Usar arrays para colecciones ordenadas
- ✅ Crear y manipular objetos literales
- ✅ Trabajar con Map para diccionarios
- ✅ Usar Set para colecciones únicas
- ✅ Entender diferencias entre estructuras

### Arrays y Métodos
- ✅ Usar métodos funcionales: `map`, `filter`, `reduce`
- ✅ Implementar búsqueda y ordenamiento
- ✅ Trabajar con arrays anidados y aplanados
- ✅ Usar métodos modernos ES6+
- ✅ Implementar algoritmos comunes

### Algoritmos
- ✅ Buscar elementos en arrays y objetos
- ✅ Ordenar colecciones de datos
- ✅ Filtrar y transformar datos
- ✅ Agrupar y particionar colecciones
- ✅ Implementar patrones comunes

## 🚀 Características Cubiertas

### Arrays
- **Creación**: `[]`, `new Array()`, `Array.of()`, `Array.from()`
- **Manipulación**: `push`, `pop`, `shift`, `unshift`, `splice`
- **Búsqueda**: `find`, `findIndex`, `includes`, `indexOf`
- **Transformación**: `map`, `filter`, `reduce`, `sort`
- **Modernos**: `flat`, `flatMap`, `copyWithin`, `toSorted`, `toReversed`

### Objetos
- **Creación**: `{}` sintaxis literal
- **Acceso**: Notación de punto y corchetes
- **Manipulación**: `Object.assign`, `Object.create`
- **Conversión**: `Object.keys()`, `Object.values()`, `Object.entries()`

### Estructuras Especializadas
- **Map**: Diccionarios con claves arbitrarias
- **Set**: Colecciones de valores únicos
- **JSON**: Formato de intercambio de datos
- **Typed Arrays**: Arrays tipados para datos binarios

## 💡 Casos de Uso Prácticos

### Arrays y Métodos Funcionales
```javascript
// Transformación de datos
const usuarios = [
    { nombre: 'Ana', edad: 25, activo: true },
    { nombre: 'Juan', edad: 30, activo: false },
    { nombre: 'María', edad: 28, activo: true }
];

// Filtrar usuarios activos
const usuariosActivos = usuarios.filter(u => u.activo);

// Transformar nombres a mayúsculas
const nombresMayuscula = usuarios.map(u => ({
    ...u,
    nombre: u.nombre.toUpperCase()
}));

// Calcular edad promedio
const edadPromedio = usuarios.reduce((sum, u) => sum + u.edad, 0) / usuarios.length;
```

### Map y Set
```javascript
// Map como diccionario
const configuracion = new Map([
    ['apiUrl', 'https://api.example.com'],
    ['timeout', 5000],
    ['retries', 3]
]);

// Set para valores únicos
const tags = new Set(['javascript', 'nodejs', 'react', 'vue']);
tags.add('angular');
```

### JSON
```javascript
// Serialización y deserialización
const usuario = { nombre: 'Juan', edad: 30, activo: true };
const json = JSON.stringify(usuario, null, 2);
const usuarioRecuperado = JSON.parse(json);
```

## 📋 Ejercicios Prácticos

El módulo contiene ejercicios en cada archivo para reforzar el aprendizaje:

1. **Arrays Básicos**: Creación y manipulación simple
2. **Objetos**: Creación y acceso a propiedades
3. **Map y Set**: Uso de estructuras especializadas
4. **JSON**: Serialización y deserialización
5. **Métodos Funcionales**: `map`, `filter`, `reduce`
6. **Algoritmos**: Búsqueda, ordenamiento, filtrado
7. **Arrays Anidados**: Trabajo con estructuras complejas
8. **Performance**: Optimización de operaciones con arrays

## 🔗 Relación con Otros Módulos

- **Módulo 1**: Variables (arrays y objetos contienen variables)
- **Módulo 2**: Tipos de Datos (arrays y objetos son tipos de datos)
- **Módulo 6**: Loops (iteración sobre estructuras)
- **Módulo 16**: Métodos Modernos (métodos avanzados de arrays y objetos)
- **Módulo 12**: DOM Manipulación (arrays en el DOM)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar métodos funcionales sobre bucles tradicionales
- Preferir inmutabilidad (crear nuevos arrays en lugar de modificar)
- Usar `Map` para diccionarios con claves no string
- Usar `Set` para eliminar duplicados
- Validar datos antes de procesarlos

### ❌ Evitar
- Modificar arrays originales innecesariamente
- Usar `for` tradicional cuando existen métodos funcionales
- Ignorar validación de entrada de datos
- Usar objetos como diccionarios cuando `Map` es más apropiado
- Dejar arrays sin limpiar cuando ya no se necesitan

## 🎓 Nivel de Dificultad

- **Básico**: Creación y acceso básico
- **Intermedio**: Métodos funcionales y algoritmos
- **Avanzado**: Estructuras complejas y optimización

## 🛠️ Compatibilidad

- **Arrays**: ES1+ (soporte universal)
- **Map/Set**: ES6+ (soporte universal)
- **JSON**: ES5+ (soporte universal)
- **Métodos Modernos**: ES5+ (soporte universal)
- **ES2023**: `toSorted`, `toReversed` (navegadores modernos)

## 🔄 Flujo de Aprendizaje Suedido

1. **Básico** → Arrays, objetos, Map, Set
2. **Funcional** → Métodos de arrays
3. **Algoritmos** → Búsqueda, ordenamiento, filtrado
4. **Avanzado** → Arrays anidados, performance
5. **Práctica** → Ejercicios y proyectos reales

---

**💡 Tip**: Dominar las estructuras de datos y los métodos funcionales de arrays es fundamental para JavaScript moderno. Estos conceptos son la base para la programación funcional y para trabajar con datos de manera eficiente y expresiva.
