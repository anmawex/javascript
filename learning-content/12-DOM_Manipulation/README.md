# DOM Manipulation - Manipulación del DOM

Este módulo cubre la manipulación del Document Object Model (DOM) en JavaScript, esencial para el desarrollo web frontend.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **12.1_seleccion_elementos.js** - Métodos de selección de elementos
- **12.2_manipulacion_contenido.js** - Lectura y modificación de contenido
- **12.3_creacion_elementos.js** - Creación dinámica de elementos
- **12.4_eventos.js** - Manejo de eventos del usuario
- **ejercicios.js** - Ejercicios prácticos integrados

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Selección de Elementos
- ✅ Usar `getElementById`, `getElementsByClassName`, `getElementsByTagName`
- ✅ Usar `querySelector` y `querySelectorAll` con selectores CSS
- ✅ Entender diferencias entre HTMLCollection y NodeList
- ✅ Aplicar selectores CSS avanzados y pseudo-clases

### Manipulación de Contenido
- ✅ Leer y modificar `innerHTML`, `textContent`, `innerText`
- ✅ Manipular atributos con `getAttribute`/`setAttribute`
- ✅ Trabajar con clases CSS usando `className` y `classList`
- ✅ Modificar estilos CSS con la propiedad `style`

### Creación de Elementos
- ✅ Crear elementos con `createElement` y `createTextNode`
- ✅ Insertar elementos con `appendChild`, `prepend`, `before`, `after`
- ✅ Usar `DocumentFragment` para inserciones eficientes
- ✅ Clonar elementos con `cloneNode`
- ✅ Trabajar con templates HTML

### Manejo de Eventos
- ✅ Usar `addEventListener` para registrar eventos
- ✅ Manejar diferentes tipos de eventos (mouse, teclado, formulario)
- ✅ Controlar eventos con `preventDefault` y `stopPropagation`
- ✅ Implementar delegación de eventos
- ✅ Crear y disparar eventos personalizados

## 🚀 Características Cubiertas

### Métodos de Selección
- **Tradicionales**: `getElementById`, `getElementsByClassName`, `getElementsByTagName`
- **Modernos**: `querySelector`, `querySelectorAll`
- **Selectores CSS**: Clases, IDs, atributos, pseudo-clases

### Manipulación de Contenido
- **Texto**: `textContent`, `innerText`, `innerHTML`
- **Atributos**: `getAttribute`, `setAttribute`, propiedades directas
- **Clases CSS**: `className`, `classList` (add, remove, toggle, contains)
- **Estilos**: `style`, `getComputedStyle`

### Inserción de Elementos
- **Tradicionales**: `appendChild`, `insertBefore`
- **Modernos**: `prepend`, `append`, `before`, `after`
- **Eficientes**: `DocumentFragment` para múltiples inserciones

### Tipos de Eventos
- **Mouse**: click, mousedown, mouseup, mouseover, mousemove
- **Teclado**: keydown, keyup, keypress
- **Formulario**: submit, change, input, focus, blur
- **Ventana**: load, resize, scroll
- **Personalizados**: CustomEvent, dispatchEvent

## 💡 Casos de Uso Prácticos

### Desarrollo Web
```javascript
// Selección eficiente
const boton = document.querySelector('#btn-primary');
const items = document.querySelectorAll('.menu-item');

// Manipulación segura
const contenido = document.querySelector('#content');
contenido.textContent = userInput; // Seguro contra XSS

// Creación dinámica
const card = crearTarjeta({titulo: 'Título', contenido: 'Contenido'});
document.body.appendChild(card);

// Eventos modernos
form.addEventListener('submit', handleSubmit);
container.addEventListener('click', handleDelegatedClick);
```

### Aplicaciones Interactivas
```javascript
// Todo List Manager
class TodoManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.todos = [];
        this.configurarEventos();
    }
    
    agregarTodo(texto) {
        const todo = this.crearTodoElemento(texto);
        this.container.appendChild(todo);
        this.todos.push(todo);
    }
}

// Modal Manager
class ModalManager {
    mostrar(contenido) {
        this.modalBody.innerHTML = contenido;
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
```

## 📋 Ejercicios Prácticos

El archivo `ejercicios.js` contiene:

1. **Selección**: Diferentes métodos de selección
2. **Manipulación**: Contenido, atributos, estilos, clases
3. **Creación**: Elementos dinámicos, estructuras complejas
4. **Eventos**: Básicos, formulario, teclado, avanzados
5. **Proyectos**: Todo List Manager, Modal Manager
6. **Drag & Drop**: Implementación básica de arrastrar y soltar

## 🔗 Relación con Otros Módulos

- **Módulo 10**: Funciones (event handlers, callbacks)
- **Módulo 13**: ES6 Features (arrow functions, destructuring)
- **Módulo 14**: Async Programming (eventos asíncronos)
- **Módulo 15**: OOP (clases para componentes DOM)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar `querySelector`/`querySelectorAll` por consistencia
- Usar `textContent` para contenido dinámico (seguro contra XSS)
- Usar `classList` sobre `className` para manipular clases
- Usar `DocumentFragment` para múltiples inserciones
- Implementar delegación de eventos para elementos dinámicos
- Cache de elementos seleccionados frecuentemente
- Verificar existencia antes de manipular elementos

### ❌ Evitar
- Usar `innerHTML` con contenido no confiable
- Seleccionar elementos múltiples veces sin caching
- Agregar múltiples event listeners al mismo elemento
- Modificar directamente estilos en bucles
- Ignorar limpieza de event listeners en SPAs

## 🎓 Nivel de Dificultad

- **Básico**: Selección simple, manipulación básica
- **Intermedio**: Eventos, creación dinámica, delegación
- **Avanzado**: Eventos personalizados, drag & drop, optimización

## 🛠️ Compatibilidad

- **Métodos Tradicionales**: Soporte universal
- **querySelector/querySelectorAll**: IE8+ (con polyfills)
- **Métodos ES6+**: Navegadores modernos
- **Eventos**: Soporte universal con algunas diferencias

## 🔄 Flujo de Aprendizaje Sugerido

1. **Selección** → Entender cómo encontrar elementos
2. **Manipulación** → Modificar contenido y atributos
3. **Creación** → Construir elementos dinámicamente
4. **Eventos** → Agregar interactividad
5. **Proyectos** → Aplicar todo en proyectos reales

---

**💡 Tip**: La manipulación del DOM es fundamental para el desarrollo web frontend. Domina estos conceptos para construir aplicaciones interactivas y dinámicas. La práctica con proyectos reales es clave para solidificar estos conocimientos.
