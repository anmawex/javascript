# OOP JavaScript - Programación Orientada a Objetos

Este módulo cubre la Programación Orientada a Objetos en JavaScript, desde los fundamentos hasta patrones avanzados.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **15.1_clases_constructores.js** - Clases ES6 y constructores
- **15.2_prototipos_herencia.js** - Sistema de prototipos y herencia
- **15.3_this_keyword.js** - Contexto y comportamiento de this
- **ejercicios.js** - Ejercicios prácticos integrados

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Clases y Constructores
- ✅ Crear clases con ES6 `class`
- ✅ Usar constructores para inicializar objetos
- ✅ Implementar herencia con `extends`
- ✅ Usar `super()` para llamar al constructor padre
- ✅ Definir métodos y propiedades
- ✅ Usar getters y setters para control de acceso
- ✅ Crear propiedades privadas con `#` (ES2022+)

### Prototipos y Herencia
- ✅ Entender el sistema de prototipos de JavaScript
- ✅ Usar `Object.create()` para herencia prototípica
- ✅ Modificar prototipos dinámicamente
- ✅ Implementar herencia múltiple con mixins
- ✅ Entender la cadena de prototipos
- ✅ Diferenciar entre `__proto__` y `prototype`

### This Keyword
- ✅ Comprender el comportamiento de `this` en diferentes contextos
- ✅ Usar `this` en funciones normales vs arrow functions
- ✅ Controlar `this` con `call`, `apply`, `bind`
- ✅ Entender `this` en constructores y métodos
✅ Manejar `this` en eventos del DOM
✅ Resolver problemas comunes de contexto

### Patrones de Diseño
- ✅ Implementar Singleton
- ✅ Usar Factory Pattern
- ✅ Aplicar Observer Pattern
- ✅ Usar Module Pattern
- ✅ Implementar composición sobre herencia
✅ Usar Strategy Pattern

## 🚀 Características Cubiertas

### Clases ES6
- **Sintaxis**: `class NombreClase { ... }`
- **Constructor**: `constructor() { ... }`
- **Herencia**: `class Hija extends Padre { ... }`
- **Métodos**: `nombreMetodo() { ... }`
- **Estáticos**: `static metodoEstatico() { ... }`
- **Privados**: `#propiedadPrivada` (ES2022+)

### Sistema de Prototipos
- **Prototipo**: `objeto.__proto__`
- **Constructor**: `objeto.constructor.prototype`
- **Herencia**: `Object.create(prototipo)`
- **Cadena**: `objeto → prototipo → Object.prototype`
- **Modificación**: prototipos pueden modificarse dinámicamente

### This Context
- **Global**: `window` (navegador) o `global` (Node.js)
- **Función**: depende de invocación
- **Arrow**: léxico, heredado del contexto exterior
- **Constructor**: apunta a la instancia
- **Método**: apunta al objeto dueño
- **Evento**: apunta al elemento que disparó el evento

## 💡 Casos de Uso Prácticos

### Desarrollo Web
```javascript
// Clases para componentes
class Button {
    constructor(texto, estilo = {}) {
        this.texto = texto;
        this.estilo = { primary: 'btn-primary', ...estilo };
        this.crearElemento();
        this.agregarEventos();
    }
    
    crearElemento() {
        this.elemento = document.createElement('button');
        this.elemento.textContent = this.texto;
        Object.assign(this.elemento.style, this.estilo);
    }
    
    agregarEventos() {
        this.elemento.addEventListener('click', () => {
            console.log(`Botón "${this.texto}" clickeado`);
        });
    }
}

// Herencia para componentes especializados
class IconButton extends Button {
    constructor(texto, icono) {
        super(texto, { primary: 'btn-icon' });
        this.icono = icono;
        this.actualizarIcono();
    }
    
    actualizarIcono() {
        this.elemento.innerHTML = `${this.icono} ${this.texto}`;
    }
}
```

### Sistemas de Gestión
```javascript
// Singleton para base de datos
class DatabaseConnection {
    static instancia = null;
    
    constructor() {
        if (DatabaseConnection.instancia) {
            return DatabaseConnection.instancia;
        }
        this.conectado = false;
        DatabaseConnection.instancia = this;
    }
    
    static getInstance() {
        return DatabaseConnection.instancia || new DatabaseConnection();
    }
}

// Factory para creación de objetos
class VehicleFactory {
    static crear(tipo, marca, modelo) {
        switch (tipo) {
            case 'coche':
                return new Car(marca, modelo);
            case 'moto':
                return new Motorcycle(marca, modelo);
            default:
                throw new Error(`Tipo no soportado: ${tipo}`);
        }
    }
}
```

### Arquitectura de Software
```javascript
// Composición sobre herencia
class Engine {
    constructor(tipo, potencia) {
        this.tipo = tipo;
        this.potencia = potencia;
        this.encendido = false;
    }
}

class Car {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = new Engine('gasolina', 150);
    }
    
    arrancar() {
        this.motor.encender();
    }
}
```

## 📋 Ejercicios Prácticos

El archivo `ejercicios.js` contiene:

1. **Clases Básicas**: Creación y herencia de clases
2. **Prototipos**: Sistema de herencia prototípica
3. **This Context**: Diferentes contextos y soluciones
4. **Herencia Múltiple**: Mixins y composición
5. **Patrones de Diseño**: Singleton, Factory
6. **Propiedades Privadas**: Encapsulación con #
7. **Getters/Setters**: Control de acceso
8. **Métodos Estáticos**: Utilidades de clase
9. **Composición**: "has-a" sobre "is-a"
10. **Proyecto Integrador**: Sistema académico completo

## 🔗 Relación con Otros Módulos

- **Módulo 10**: Funciones (métodos, callbacks, higher-order)
- **Módulo 13**: ES6 Features (arrow functions, destructuring)
- **Módulo 14**: Async Programming (eventos asíncronos)
- **Módulo 12**: DOM Manipulation (eventos en el DOM)
- **Módulo 16**: Métodos modernos (array methods, object methods)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar clases ES6 para código moderno
- Usar `#` para propiedades verdaderamente privadas
- Preferir composición sobre herencia profunda
- Usar `super()` correctamente en constructores
- Usar arrow functions para mantener contexto
- Implementar patrones de diseño probados
- Validar parámetros en constructores

### ❌ Evitar
- Usar `var` en lugar de `let` y `const`
- Modificar prototipos de constructores nativos
- Olvidar `super()` en constructores de subclases
- Usar `this` en callbacks sin vincular contexto
- Crear jerarquías de herencia muy profundas
- Ignorar encapsulación y principios OOP

## 🎓 Nivel de Dificultad

- **Básico**: Clases simples, herencia básica, this en métodos
- **Intermedio**: Prototipos, patrones de diseño, composición
- **Avanzado**: Metaprogramación, patrones complejos, arquitectura

## 🛠️ Compatibilidad

- **Clases ES6**: ES2015+ (soporte universal)
- **Propiedades Privadas**: ES2022+ (navegadores modernos)
- **Prototipos**: ES5+ (soporte universal)
- **This**: ES5+ (con algunas diferencias entre navegadores)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Clases y Constructores** → Fundamentos de OOP
2. **Prototipos y Herencia** → Sistema de prototipos JavaScript
3. **This Keyword** → Comportamiento de this
4. **Patrones de Diseño** → Arquitectura de software
5. **Proyectos Integradores** → Aplicación completa

---

**💡 Tip**: La OOP en JavaScript es diferente a lenguajes clásicos como Java o C++. Entender el sistema de prototipos es clave para dominar JavaScript a nivel intermedio-avanzado. Las clases ES6 son azúcar sintáctico sobre el sistema de prototipos existente.
