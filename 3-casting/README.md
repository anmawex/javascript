# Casting y Coerción de Tipos - Conversión de Datos

Este módulo cubre la conversión de tipos en JavaScript, tanto explícita como implícita (coerción), fundamental para entender cómo JavaScript maneja los datos.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **types.js** - Coerción implícita y conversión explícita
- **ejercicios.js** - Ejercicios prácticos con soluciones

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Coerción Implícita
- ✅ Entender cómo JavaScript convierte tipos automáticamente
- ✅ Comprender coerción en operaciones aritméticas
- ✅ Conocer coerción en operaciones lógicas
- ✅ Entender coerción en comparaciones (`==` vs `===`)
- ✅ Identificar coerción inesperada que cause bugs

### Conversión Explícita
- ✅ Usar `String()` para convertir a texto
- ✅ Usar `Number()` para convertir a número
✅ Usar `Boolean()` para convertir a booleano
✅ Usar `parseInt()` y `parseFloat()` para números
✅ Validar conversiones antes de usar

### Patrones de Validación
- ✅ Validar entrada de usuario
- ✅ Crear funciones de conversión seguras
- ✅ Manejar errores de conversión
- ✅ Evitar bugs relacionados con tipos

## 🚀 Características Cubiertas

### Coerción Implícita
- **Aritmética**: Conversión a número antes de operar
- **Lógica**: Conversión a booleano en contextos condicionales
- **Comparación**: Conversión de tipos en `==`
- **Concatenación**: Conversión a string en `+` con strings

### Conversión Explícita
- **String()**: Convierte cualquier valor a string
- **Number()**: Convierte valores numéricos
- **Boolean()**: Convierte valores a booleanos
- **parseInt()**: Parsea string a entero
- **parseFloat()**: Parsea string a flotante

### Casos Especiales
- **NaN**: "Not a Number" - resultado de operaciones inválidas
- **Infinity**: Resultado de divisiones por cero
- **Object.toString()**: Representación de objetos como strings

## 💡 Casos de Uso Prácticos

### Coerción en Operaciones
```javascript
// Coerción aritmética
console.log("5" * 2); // 10 (string a número)
console.log(true + 1); // 2 (boolean a número)
console.log(false + "Hola"); // "falseHola" (boolean a string)

// Coerción lógica
if ("") console.log("Verdadero"); // "Hola" es falsy, pero "" es truthy en contexto lógico
if (0) console.log("Verdadero"); // 0 es falsy
if (1) console.log("Verdadero"); // 1 es truthy

// Coerción en comparaciones
console.log(5 == "5"); // true (coerción)
console.log(5 === "5"); // false (sin coerción)
```

### Validación de Entrada
```javascript
// Validación segura
function procesarNumero(input) {
    const numero = Number(input);
    if (isNaN(numero)) {
        throw new Error('Entrada no es un número válido');
    }
    return numero;
}

// Validación de booleanos
function procesarBooleano(input) {
    if (typeof input === 'boolean') return input;
    if (input === 'true' || input === 'false') return input === 'true';
    if (input === 1 || input === 0) return Boolean(input);
    throw new Error('Entrada no es un booleano válido');
}
```

### Conversión Segura
```javascript
// Función de conversión segura
function aNumeroSeguro(valor, defecto = 0) {
    const numero = Number(valor);
    return isNaN(numero) ? defecto : numero;
}

// Validación de entrada de formulario
function validarEdadadad(input) {
    const edad = parseInt(input, 10);
    if (isNaN(edadad) || edad < 0 || edad > 120) {
        throw new Error('Edad inválida');
    }
    return edad;
}
```

## 📋 Ejercicios Prácticos

El archivo `ejercicios.js` contiene:

1. **Coerción Implícita**: Ejemplos de conversión automática
2. **Conversión Explícita**: Uso de funciones de conversión
3. **Validación**: Funciones seguras de conversión
4. **Casos Especiales**: Manejo de NaN e Infinity
5. **Comparación**: Diferencias entre `==` y `===`
6. **Entrada Usuario**: Validación de datos de formulario
7. **Operaciones**: Coerción en operaciones complejas
8. **Errores Comunes**: Identificar y evitar bugs
9. **Funciones Útiles**: Crear helpers de conversión
10. **Proyecto**: Sistema de validación de tipos

## 🔗 Relación con Otros Módulos

- **Módulo 1**: Variables (contienen tipos de datos)
- **Módulo 2**: Tipos de Datos (fundamento para casting)
- **Módulo 5**: Comparaciones (comparación con coerción)
- **Módulo 9**: Operadores (operadores con coerción)
- **Módulo 10**: Funciones (parámetros y coerción)

## ⚡ Mejores Práprácticas

### ✅ Recomendado
- Usar `===` para comparación estricta
- Validar tipos antes de operar
- Usar funciones de conversión explícita
- Manejar `NaN` y `Infinity` apropiadamente
- Crear funciones de validación reutilizables

### ❌ Evitar
- Confiar en coerción implícita
- Usar `==` cuando se necesita comparación estricta
- Ignorar validación de entrada de usuario
- Mezclar tipos sin intención clara
- Dejar que JavaScript decida tipos automáticamente

## 🎓 Nivel de Dificultad

- **Básico**: Conversión simple y coerción básica
- **Intermedio**: Validación y manejo de errores
- **Avanzado**: Patrones de conversión y casos edge

## 🛠️ Compatibilidad

- **Coerción**: ES1+ (soporte universal)
- **Funciones de conversión**: ES1+ (soporte universal)
- **NaN e Infinity**: ES1+ (soporte universal)
- **BigInt**: ES2020+ (navegadores modernos)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Coerción** → Entender conversión automática
2. **Conversión** → Usar funciones explícitas
3. **Validación** → Crear funciones seguras
4. **Comparación** → Entender `==` vs `===`
5. **Práctica** → Ejercicios y casos reales

---

**💡 Tip**: La coerción de tipos es una de las características más importantes (y confusas) de JavaScript. Entender cuándo ocurre y cómo controlarla es esencial para escribir código robusto y predecible. Siempre valida tus datos y usa comparación estricta cuando sea posible.
