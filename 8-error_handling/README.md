# Error Handling - Manejo de Errores y Excepciones

Este módulo cubre el manejo de errores en JavaScript, desde try/catch básico hasta patrones avanzados de manejo de excepciones.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **error.js** - Creación y tipos de errores
- **throw.js** - Lanzamiento de errores
- **finally.js** - Bloque finally
- **errores_personales.js** - Errores personalizados
- **try_catch.js** - Patrones try-catch

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Manejo de Errores Básicos
- ✅ Usar `try/catch` para capturar errores
- ✅ Usar `throw` para lanzar errores personalizados
- ✅ Usar `finally` para código que siempre se ejecuta
- ✅ Entender la propagación de errores
- ✅ Crear errores personalizados con información adicional

### Errores Personalizados
- ✅ Crear clases de error personalizadas
- ✅ Extender la clase `Error` con propiedades adicionales
- ✅ Incluir información de contexto en errores
- ✅ Usar jerarquía de errores personalizados
- ✅ Implementar patrones de error específicos

### Patrones Avanzados
- ✅ Implementar validación robusta con errores
- ✅ Usar retry con backoff exponencial
- ✅ Implementar logging estructurado
✅ Centralizar manejo de errores
✅ Manejar errores asíncronos
✅ Crear fallbacks seguros

### Buenas Prácticas
- ✅ Siempre manejar errores específicos
- ✅ Incluir información útil en mensajes de error
- ✅ Documentar errores que pueden lanzar funciones
✅ Usar logging estructurado
 Evitar silenciar errores en producción

## 🚀 Características Cubiertas

### Tipos de Errores
- **Error**: Clase base para errores personalizados
- **TypeError**: Error de tipo de dato
- **ReferenceError**: Error de referencia no encontrada
- **SyntaxError**: Error de sintaxis
- **RangeError**: Error de rango
- **URIError**: Error en URI/URL
- **EvalError**: Error en eval()

### Patrones de Manejo
- **try-catch-finally**: Captura y limpieza
- **throw**: Lanzamiento de errores
- **Retry**: Reintentar operaciones fallidas
- **Fallback**: Valores por defecto seguros
- **Logging**: Registro estructurado de errores

### Errores Personalizados
- **ValidationError**: Error de validación de datos
- **ApiError**: Error de API con código de estado
- **DatabaseError**: Error de base de datos
- **NetworkError**: Error de red
- **TimeoutError**: Error de timeout

### Características de Errores
- **message**: Mensaje descriptivo del error
- **name**: Nombre del tipo de error
- **stack**: Traza de la pila de llamadas
- **cause**: Causa original del error (ES2022)
- **columnNumber**: Número de columna en el código

## 💡 Casos de Uso Prácticos

### Manejo de Errores Básico
```javascript
try {
    // Operación que puede fallar
    const resultado = JSON.parse(datosJson);
    return resultado;
} catch (error) {
    console.error('Error parseando JSON:', error.message);
    return null;
} finally {
    console.log('Intento de parseo finalizado');
}
```

### Errores Personalizados
```javascript
class ValidationError extends Error {
    constructor(mensaje, campo, valor) {
        super(mensaje);
        this.campo = campo;
        this.valor = valor;
        this.timestamp = new Date();
    }
    
    get detalles() {
        return {
            campo: this.campo,
            valor: this.valor,
            timestamp: this.timestamp,
            mensaje: this.message
        };
    }
}

throw new ValidationError('Email inválido', 'email', 'correo@invalido');
```

### Patrones Avanzados
```javascript
// Retry con backoff exponencial
async function reintentarOperacion(operacion, maxIntentos = 3) {
    let intento = 0;
    
    while (intento < maxIntentos) {
        try {
            return await operacion();
        } catch (error) {
            intento++;
            if (intento < maxIntentos) {
                console.log(`Intento ${intento}/${maxIntentos} falló, reintentando...`);
                await new Promise(resolve => setTimeout(resolve, 1000 * intento));
            }
        }
    }
    
    throw new Error(`Falló después de ${maxIntentos} intentos`);
}

// Validación robusta
function validarUsuario(datos) {
    const errores = [];
    
    if (!datos.nombre || datos.nombre.trim() === '') {
        errores.push('El nombre es requerido');
    }
    
    if (!datos.email || !datos.email.includes('@')) {
        errores.push('Email inválido');
    }
    
    if (!datos.edad || datos.edad < 0 || datos.edad > 120) {
        errores.push('Edad inválida');
    }
    
    if (errores.length > 0) {
        throw new ValidationError('Validación fallida', 'usuario', datos);
    }
    
    return datos;
}
```

## 📋 Ejercicios Práncios

Cada archivo contiene ejercicios para reforzar el aprendizaje:

### error.js
1. **Creación de Errores**: Diferentes tipos de errores
2. **Stack Trace**: Entender la pila de llamadas
3. **Propiedades**: Propiedades de los objetos error
4. **Jerarquía**: Clases de error personalizadas
5. **Throw vs Return**: Cuándo lanzar vs retornar error

### throw.js
1. **Throw Básico**: Lanzamiento de errores simples
2. **Throw con Contexto**: Errores con información adicional
3. **Throw Asíncrono**: Lanzar errores en funciones asíncronas
4. **Throw con Validación**: Errores de validación
5. **Throw con Estado**: Errores con información de estado

### finally.js
1. **Finally Básico**: Uso de finally
2. **Finally con Recursos**: Limpieza de recursos
3. **Finally con Excepciones**: Manejo de excepciones con finally
4. **Finally con Promesas**: finally en código asíncrono
5. **Finally con Bucles**: finally en bucles

### errores_personales.js
1. **ApiError**: Error de API con código de estado
2. **DatabaseError**: Error de base de datos
3. **NetworkError**: Error de red
4. **ValidationError**: Error de validación
5. **TimeoutError**: Error de timeout

### try_catch.js
1. **Try-Catch Básico**: Captura de errores simples
2. **Try-Catch Anidado**: Captura de errores anidados
3. **Try-Catch-Finally**: Uso de finally
4. **Try-Catch con Diferentes Tipos**: Manejo específico por tipo
5. **Try-Catch Asíncrono**: Manejo de errores en async/await

## 🔗 Relación con Otros Módulos

- **Módulo 1**: Variables (errores en variables)
- **Módulo 2**: Tipos de Datos (errores de tipos)
- **Módulo 3**: Casting (errores de conversión)
- **Módulo 7**: Condicionales (errores en condiciones)
- **Módulo 10**: Funciones (errores en funciones)
- **Módulo 14**: Async Programming (errores asíncronos)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Siempre manejar errores específicos cuando sea posible
- Incluir información útil en mensajes de error
- Usar `finally` para limpieza de recursos
- Documentar errores que pueden lanzar funciones
- Usar logging estructurado para depuración
- Validar entrada de usuario robustamente

### ❌ Evitar
- Silenciar errores en producción
- Usar `catch (error) { }` vacío
- Lanzar errores genéricos sin contexto
- Ignorar errores críticos
- No validar entrada de usuario

## 🎓 Nivel de Dificultad

- **Básico**: try/catch básico y errores simples
- **Intermedio**: Errores personalizados y patrones
- **Avanzado**: Patrones complejos y asíncronos

## 🛠️ Compatibilidad

- **try/catch/finally**: ES3+ (soporte universal)
- **Error**: ES1+ (soporte universal)
- **throw**: ES1+ (soporte universal)
- **Error Types**: ES6+ (soporte universal)
- **Stack Trace**: ES6+ (soporte universal)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Básico** → try/catch, throw, finally
2. **Intermedio** -> Errores personalizados, patrones
3. **Avanzado** -> Errores asíncronos, logging
4. **Práctica** → Ejercicios y casos reales
5. **Maestría** -> Patrones robustos y centralización

---

**💡 Tip**: El manejo de errores es fundamental para aplicaciones robustas. Siempre valida la entrada del usuario y maneja errores específicos en lugar de errores genéricos. Usa `try/catch/finally` para limpieza de recursos y considera usar patrones como retry y fallback para mayor robustez.
