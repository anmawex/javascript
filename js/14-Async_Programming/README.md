# Async Programming - JavaScript Asíncrono

Este módulo cubre la programación asíncrona en JavaScript, desde Promises hasta async/await y la Fetch API.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **14.1_promises.js** - Promises básicas y avanzadas
- **14.2_async_await.js** - Async/await y patrones modernos
- **14.3_fetch_api.js** - Fetch API para peticiones HTTP
- **ejercicios.js** - Ejercicios prácticos integrados

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Promises
- ✅ Crear y consumir Promises
- ✅ Encadenar operaciones asíncronas
- ✅ Manejar errores con `.catch()`
- ✅ Usar `Promise.all()`, `Promise.race()`, `Promise.allSettled()`
- ✅ Implementar patrones como retry y timeout

### Async/Await
- ✅ Escribir funciones asíncronas con `async`
- ✅ Pausar ejecución con `await`
- ✅ Manejar errores con `try-catch`
- ✅ Ejecutar operaciones en paralelo y secuencial
- ✅ Implementar patrones avanzados de concurrencia

### Fetch API
- ✅ Realizar peticiones HTTP (GET, POST, PUT, DELETE)
- ✅ Configurar headers y opciones
- ✅ Manejar diferentes tipos de respuesta
- ✅ Implementar timeout y cancelación
- ✅ Crear clientes API reutilizables

## 🚀 Características Cubiertas

### ES6 (2015)
- Promises
- Fetch API

### ES2017
- Async functions
- Await operator

### ES2020
- Promise.allSettled()
- AbortController

## 💡 Casos de Uso Prácticos

### Desarrollo Web
```javascript
// Obtener datos de API
async function cargarUsuario(id) {
    try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) throw new Error('Usuario no encontrado');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Múltiples peticiones en paralelo
const [usuario, posts, comentarios] = await Promise.all([
    fetch('/api/user/1').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
]);
```

### Manipulación de Datos
```javascript
// Procesamiento con límite de concurrencia
async function procesarConLimite(items, limite = 3) {
    const resultados = [];
    for (let i = 0; i < items.length; i += limite) {
        const lote = items.slice(i, i + limite);
        const promesas = lote.map(item => procesarItem(item));
        const resultadosLote = await Promise.all(promesas);
        resultados.push(...resultadosLote);
    }
    return resultados;
}
```

## 📋 Ejercicios Prácticos

El archivo `ejercicios.js` contiene:

1. **Promises Básicas**: Creación y consumo de Promises
2. **Encadenamiento**: Cadenas de operaciones asíncronas
3. **Async/Await**: Conversión y patrones modernos
4. **Fetch API**: Peticiones HTTP completas
5. **Manejo de Errores**: Retry, timeout, validación
6. **Utilidades**: Cache, API clients, streaming
7. **Desafío Final**: Sistema completo de gestión

## 🔗 Relación con Otros Módulos

- **Módulo 3**: Casting y coerción (relacionado con manejo de respuestas)
- **Módulo 10**: Funciones (callbacks, higher-order functions)
- **Módulo 11**: APIs (fetch como evolución de XMLHttpRequest)
- **Módulo 13**: ES6 features (destructuring, spread en async)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar `async/await` en lugar de `.then().catch()`
- Siempre manejar errores con `try-catch`
- Verificar `response.ok` en fetch
- Usar `Promise.all()` para operaciones paralelas
- Implementar timeout en peticiones de red
- Usar AbortController para cancelación

### ❌ Evitar
- Callback hell anidado
- Ignorar errores en Promises
- Mezclar callbacks con async/await
- Olvidar verificar respuestas HTTP
- Bloquear el hilo principal innecesariamente

## 🎓 Nivel de Dificultad

- **Básico**: Promises simples, async/await básico
- **Intermedio**: Encadenamiento, manejo de errores, fetch básico
- **Avanzado**: Concurrencia, patrones complejos, streaming

## 🛠️ Compatibilidad

- **Promises**: ES6+ (soporte universal)
- **Async/Await**: ES2017+ (soporte universal)
- **Fetch API**: ES6+ (soporte universal, polyfill disponible)
- **AbortController**: ES2020+ (moderno)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Promises Fundamentales** → Entender el concepto
2. **Async/Await** → Simplificar el código asíncrono
3. **Fetch API** → Aplicación práctica con HTTP
4. **Patrones Avanzados** → Retry, cache, concurrencia
5. **Proyecto Integrador** → Combinar todo

---

**💡 Tip**: La programación asíncrona es fundamental en JavaScript moderno. Domina estos conceptos para construir aplicaciones web robustas y eficientes.
