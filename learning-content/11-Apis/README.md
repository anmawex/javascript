# APIs Web - Comunicación con Servidores

Este módulo cubre las APIs web en JavaScript, desde XMLHttpRequest tradicional hasta Fetch API moderna, para comunicación con servidores y servicios web.

## 📁 Archivos del Módulo

### 📝 Conceptos Fundamentales
- **fetch.js** - Fetch API moderna
- **index.html** - Página de demostración
- **xmlhttprequest.js** - XMLHttpRequest tradicional

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

### Fetch API
- ✅ Usar `fetch()` para hacer peticiones HTTP
- ✅ Manejar diferentes métodos HTTP: GET, POST, PUT, DELETE
- ✅ Trabajar con headers y opciones de configuración
- ✅ Manejar respuestas JSON y texto
- ✅ Usar async/await con Fetch API
- ✅ Manejar errores y respuestas no exitosas

### XMLHttpRequest
- ✅ Entener el objeto XMLHttpRequest
- ✅ Hacer peticiones GET y POST
- ✅ Manejar eventos: onload, onerror, onprogress
- ✅ Trabajar con estados readyState
- ✅ Comparar con Fetch API

### Conceptos HTTP
- ✅ Entender métodos HTTP: GET, POST, PUT, DELETE, PATCH
- ✅ Trabajar con headers: Content-Type, Authorization
- ✅ Entender códigos de estado HTTP
- ✅ Usar query parameters y URL encoding
- ✅ Manejar CORS y políticas de seguridad

### Patrones de API
- ✅ Implementar autenticación con tokens
- ✅ Manejar paginación de resultados
- ✅ Implementar retry y timeout
- ✅ Usar interceptores para logging
- ✅ Crear wrappers de API reutilizables

## 🚀 Características Cubiertas

### Fetch API
- **fetch()**: Función principal para peticiones
- **Response**: Objeto que representa la respuesta
- **Request**: Objeto que representa la petición
- **Headers**: Objeto para manejar cabeceras
- **Body**: Stream para manejar cuerpo de petición/respuesta

### XMLHttpRequest
- **XMLHttpRequest**: Objeto para peticiones AJAX
- **open()**: Inicializar petición
- **send()**: Enviar petición
- **setRequestHeader()**: Establecer cabeceras
- **readyState**: Estados de la petición

### Métodos HTTP
- **GET**: Obtener recursos
- **POST**: Crear recursos
- **PUT**: Actualizar recursos completamente
- **PATCH**: Actualizar recursos parcialmente
- **DELETE**: Eliminar recursos

### Códigos de Estado
- **2xx**: Éxito (200, 201, 204)
- **3xx**: Redirección (301, 302, 304)
- **4xx**: Error del cliente (400, 401, 403, 404)
- **5xx**: Error del servidor (500, 502, 503)

## 💡 Casos de Uso Prácticos

### Fetch API Básico
```javascript
// GET request
async function obtenerUsuario(id) {
    try {
        const response = await fetch(`/api/usuarios/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const usuario = await response.json();
        return usuario;
    } catch (error) {
        console.error('Error obteniendo usuario:', error);
        throw error;
    }
}

// POST request
async function crearUsuario(datos) {
    try {
        const response = await fetch('/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const usuarioCreado = await response.json();
        return usuarioCreado;
    } catch (error) {
        console.error('Error creando usuario:', error);
        throw error;
    }
}
```

### XMLHttpRequest
```javascript
// GET request con XMLHttpRequest
function obtenerUsuarioXHR(id) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', `/api/usuarios/${id}`);
        xhr.setRequestHeader('Accept', 'application/json');
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                try {
                    const usuario = JSON.parse(xhr.responseText);
                    resolve(usuario);
                } catch (error) {
                    reject(error);
                }
            } else {
                reject(new Error(`HTTP error! status: ${xhr.status}`));
            }
        };
        
        xhr.onerror = function() {
            reject(new Error('Network error'));
        };
        
        xhr.send();
    });
}
```

### Wrapper de API
```javascript
class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.headers = {
            'Content-Type': 'application/json',
        };
    }
    
    setAuthToken(token) {
        this.headers['Authorization'] = `Bearer ${token}`;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: this.headers,
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }
    
    async get(endpoint) {
        return this.request(endpoint);
    }
    
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

// Uso
const api = new ApiClient('https://api.example.com');
api.setAuthToken('tu-token-aqui');
```

## 📋 Ejercicios Prácticos

### fetch.js
1. **GET Básico**: Obtener datos de una API
2. **POST con JSON**: Enviar datos JSON
3. **POST con FormData**: Enviar datos de formulario
4. **Manejo de Errores**: Capturar y manejar errores
5. **Headers Personalizados**: Establecer cabeceras
6. **AbortController**: Cancelar peticiones
7. **Timeout**: Implementar timeout
8. **Retry**: Reintentar peticiones fallidas
9. **Paginación**: Manejar resultados paginados
10. **Autenticación**: Implementar auth con tokens

### xmlhttprequest.js
1. **GET Básico**: Obtener datos con XHR
2. **POST con JSON**: Enviar datos JSON
3. **Manejo de Eventos**: onload, onerror, onprogress
4. **Estados readyState**: Manejar diferentes estados
5. **Comparación**: XHR vs Fetch

### index.html
1. **Demostración**: Página con ejemplos funcionales
2. **Interfaz**: Botones para probar diferentes peticiones
3. **Resultados**: Mostrar respuestas en la página
4. **Errores**: Mostrar errores en la interfaz

## 🔗 Relación con Otros Módulos

- **Módulo 8**: Error Handling (manejo de errores en APIs)
- **Módulo 10**: Funciones (callbacks y async/await)
- **Módulo 14**: Async Programming (conceptos asíncronos)
- **Módulo 12**: DOM Manipulación (actualizar DOM con datos de API)
- **Módulo 15**: OOP (clases para wrappers de API)

## ⚡ Mejores Prácticas

### ✅ Recomendado
- Usar Fetch API sobre XMLHttpRequest
- Usar async/await sobre callbacks
- Validar respuestas antes de usar datos
- Manejar errores específicos
- Implementar timeout y retry
- Usar interceptores para logging
- Autenticar peticiones seguras

### ❌ Evitar
- Ignorar errores de red
- Enviar datos sensibles sin encriptación
- Olvidar validar respuestas
- No manejar CORS apropiadamente
- Dejar peticiones sin timeout
- Exponer credenciales en el cliente

## 🎓 Nivel de Dificultad

- **Básico**: GET y POST simples
- **Intermedio**: Manejo de errores y configuración
- **Avanzado**: Patrones complejos y optimización

## 🛠️ Compatibilidad

- **XMLHttpRequest**: ES5+ (soporte universal)
- **Fetch API**: ES6+ (soporte universal en navegadores modernos)
- **Async/Await**: ES2017+ (soporte universal)
- **AbortController**: ES2017+ (soporte universal)

## 🔄 Flujo de Aprendizaje Sugerido

1. **Básico** → GET y POST simples
2. **Intermedio** → Manejo de errores y configuración
3. **Avanzado** → Patrones complejos y optimización
4. **Práctica** → Proyectos reales con APIs
5. **Maestría** -> Arquitectura de API y patrones avanzados

---

**💡 Tip**: Fetch API es la forma moderna y preferida de hacer peticiones HTTP en JavaScript. Es más simple y poderosa que XMLHttpRequest. Siempre valida las respuestas y maneja errores apropiadamente. Considera crear un wrapper de API reutilable para proyectos grandes.
