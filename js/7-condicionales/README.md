# Condicionales - Control de Flujo y Toma de Decisiones

Este módulo cubre todas las formas de condicionales en JavaScript, desde if/else básicos hasta operadores ternarios y operadores lógicos modernos.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **if_and_else.js** - Condicionales if/else/else if
- **switch.js** - Sentencia switch con casos múltiples

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Condicionales Básicos
- ✅ Usar `if/else` para control de flujo simple
- ✅ Usar `else if` para múltiples condiciones
- ✅ Anidar condicionales para lógica compleja
- ✅ Usar `else` como caso por defecto
- ✅ Controlar el flujo con condiciones anidadas

### Sentencia Switch
- ✅ Usar `switch` para múltiples casos
- ✅ Agrupinar casos con `break` compartido
- ✅ Usar `default` como caso por defecto
- ✅ Usar `switch` con expresiones complejas
- ✅ Implementar patrones de fábrica con `switch`

### Operadores Condicionales
- ✅ Usar operador ternario para condiciones simples
- ✅ Anidar operadores ternarios para lógica compleja
- ✅ Usar operadores lógicos: `&&`, `||`, `!`
- ✅ Usar nullish coalescing: `??` (ES2020)
- ✅ Entender cortocircuito y evaluación corta

### Patrones de Validación
- ✅ Validar entrada de usuario
- ✅ Implementar patrones de fallback
- ✅ Crear funciones de validación reutilizables
- ✅ Manejar múltiples condiciones complejas
- ✅ Usar condicionales para control de flujo

## 🚀 Características Cubiertas

### Condicionales Básicos
- **if**: Ejecuta código si la condición es verdadera
- **else**: Ejecuta código si la condición es falsa
- **else if**: Anida múltiples condiciones
- **Bloques**: Agrupa código relacionado

### Sentencia Switch
- **switch**: Selecciona entre múltiples casos
- **case**: Caso específico a evaluar
- **break**: Sale del switch después de un caso
- **default**: Caso por defecto si ningún caso coincide
- **Expresiones**: Puede usar expresiones en casos

### Operadores Condicionales
- **Ternario**: `condición ? valor1 : valor2`
- **Lógicos**: `&&` (AND), `||` (OR), `!` (NOT)
- **Nullish Coalescing**: `??` (ES2020)
- **Asignación Lógica**: `&&=`, `||=`, `??=` (ES2020)

### Cortocircuito
- **&&**: Cortocircuito en AND (evalúa hasta encontrar falsy)
- **||**: Cortocircuito en OR (evalúa hasta encontrar truthy)
- **??**: Cortocircuito nullish (evalúa solo para null/undefined)

## 💡 Casos de Uso Prácticos

### Condicionales Básicos
```javascript
// Validación simple
const edad = 25;
if (edad >= 18) {
    console.log('Mayor de edad');
} else if (edad >= 13) {
    console.log('Adolescente');
} else {
    console.log 'Niño';
}

// Múltiples condiciones
const puntuacion = 85;
if (puntuacion >= 90) {
    console.log('Excelente');
} else if (puntuacion >= 80) {
    console.log('Muy bueno');
} else if (puntuacion >= 70) {
    console.log('Bueno');
} else {
    console.log('Necesitas mejorar');
}
```

### Switch
```javascript
// Fábrica de operadores
function crearOperador(tipo) {
    switch (tipo) {
        case 'suma':
            return (a, b) => a + b;
        case 'resta':
            return (a, b) => a - b;
        case 'multiplica':
            return (a, b) => a * b;
        default:
            return (a, b) => 0;
    }
}

const operador = crearOperador('suma');
console.log(5 + 3); // 8
```

### Operadores Condicionales
```javascript
// Operador ternario
const edad = 20;
const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';

// Operadores lógicos
const usuarioActivo = true;
const tienePermiso = false;
const puedeAcceder = usuarioActivo && tienePermiso; // false

// Nullish coalescing
const valor = null;
const valorDefecto = valor ?? 'Valor por defecto'; // 'Valor por defecto'

// Asignación lógica
let x = true;
x &&= false; // x = x && false
```

### Patrones de Validación
```javascript
// Validación de formulario
function validarFormulario(datos) {
    const errores = [];
    
    if (!datos.nombre || datos.nombre.trim() === '') {
        errores.push('El nombre es requerido');
    }
    
    if (!datos.email || !datos.email.includes('@')) {
        errores.push('El email es inválido');
    }
    
    if (!datos.edad || datos.edad < 0 || datos.edad > 120) {
        errores.push('La edad debe estar entre 0 y 120');
    }
    
    return {
        esValido: errores.length === 0,
        errores
    };
}
```

## 📋 Ejercicios Prácticos

Cada archivo contiene ejercicios para reforzar el aprendizaje:

### if_and_else.js
1. **Validación Básica**: Validar edad y categoría
2. **Condiciones Anidadas**: Múltiples condiciones anidadas
3. **Anidación Profunda**: Condicionales complejas
4. **Control de Flujo**: Uso de else y else if
5. **Casos Edge**: Manejo de casos especiales

### switch.js
1. **Selección Múltiple**: Días de la semana
2. **Casos Agrupados**: Trimestres del año
3. **Expresiones**: Operaciones aritméticas
4. **Fábrica**: Creación de operadores
5. **Validación**: Estados y tipos de datos

## 🔗 Relación con Otros Módulos

- **Módulo 1**: Variables (condicionales usan variables)
- **Módulo 2**: Tipos de Datos (comparación de tipos en condicionales)
- **Módulo 3**: Casting (coerción en condicionales)
- **Módulo 9**: Operadores (operadores condicionales)
- **Módulo 10**: Funciones (condicionales en funciones)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar `if/else` para lógica compleja
- Usar `switch` para múltiples valores discretos
- Usar operador ternario para condiciones simples
- Usar `??` para valores por defecto
- Validar datos antes de usarlos

### ❌ Evitar
- Anidar demasiadas condiciones anidadas
- Olvidar casos por defecto en `switch`
- Usar `==` cuando se necesita `===`
- Ignorar validación en código crítico
- Dejar condiciones ambiguas sin documentar

## 🎓 Nivel de Dificultad

- **Básico**: Condicionales simples if/else
- **Intermedio**: Switch, operadores lógicos, ternario
- **Avanzado**: Patrones complejos y validación

## 🛠️ Compatibilidad

- **Condicionales**: ES1+ (soporte universal)
- **Switch**: ES3+ (soporte universal)
- **Ternario**: ES6+ (soporte universal)
- **Operadores Lógicos**: ES1+ (soporte universal)
- **Nullish Coalescing**: ES2020+ (navegadores modernos)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Básico** → if/else, switch
2. **Intermedio** → Operadores lógicos, ternario
3. **Avanzado** Patrones de validación
4. **Práctica** → Ejercicios y casos reales
5. **Maestría** -> Patrones y optimización

---

**💡 Tip**: El operador ternario es excelente para condiciones simples, pero para lógica compleja, considera usar if/else para mayor legibilidad. El nullish coalescing (`??`) es una adición moderna muy útil para manejar valores nulos e indefinidos de manera segura.
