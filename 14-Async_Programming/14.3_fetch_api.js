// FETCH API - ES6+
// API moderna para realizar peticiones HTTP

// === CONCEPTOS BÁSICOS ===

// 1. Sintaxis básica de fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Response:', response);
        return response.json(); // Convertir a JSON
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.log('Error:', error);
    });

// 2. Estructura de un Response
function analizarResponse(response) {
    console.log('Status:', response.status); // 200, 404, 500, etc.
    console.log('Status Text:', response.statusText); // "OK", "Not Found", etc.
    console.log('OK:', response.ok); // true si status es 200-299
    console.log('Headers:', response.headers);
    console.log('Type:', response.type); // "basic", "cors", "opaque"
}

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(analizarResponse);

// === MÉTODOS HTTP ===

// 3. GET (por defecto)
async function obtenerPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        console.log('Posts obtenidos:', posts.slice(0, 3)); // Primeros 3 posts
        return posts;
    } catch (error) {
        console.log('Error obteniendo posts:', error);
    }
}

// obtenerPosts();

// 4. POST - Crear recurso
async function crearPost(postData) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        
        if (!response.ok) {
            throw new Error(`Error creando post: ${response.status}`);
        }
        
        const nuevoPost = await response.json();
        console.log('Post creado:', nuevoPost);
        return nuevoPost;
    } catch (error) {
        console.log('Error creando post:', error);
    }
}

// crearPost({
//     title: 'Mi nuevo post',
//     body: 'Este es el contenido del post',
//     userId: 1
// });

// 5. PUT - Actualizar recurso completo
async function actualizarPost(id, postData) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        
        if (!response.ok) {
            throw new Error(`Error actualizando post: ${response.status}`);
        }
        
        const postActualizado = await response.json();
        console.log('Post actualizado:', postActualizado);
        return postActualizado;
    } catch (error) {
        console.log('Error actualizando post:', error);
    }
}

// actualizarPost(1, {
//     id: 1,
//     title: 'Título actualizado',
//     body: 'Contenido actualizado',
//     userId: 1
// });

// 6. PATCH - Actualizar parcialmente
async function parcharPost(id, datosParciales) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosParciales)
        });
        
        if (!response.ok) {
            throw new Error(`Error parchando post: ${response.status}`);
        }
        
        const postParchado = await response.json();
        console.log('Post parchado:', postParchado);
        return postParchado;
    } catch (error) {
        console.log('Error parchando post:', error);
    }
}

// parcharPost(1, { title: 'Solo título actualizado' });

// 7. DELETE - Eliminar recurso
async function eliminarPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error(`Error eliminando post: ${response.status}`);
        }
        
        // DELETE通常返回空响应
        console.log('Post eliminado, status:', response.status);
        return response.status === 200;
    } catch (error) {
        console.log('Error eliminando post:', error);
    }
}

// eliminarPost(1);

// === OPCIONES DE FETCH ===

// 8. Headers personalizados
async function peticionConHeaders() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer token-de-autenticacion',
                'X-Custom-Header': 'valor-personalizado',
                'Accept': 'application/json'
            }
        });
        
        const posts = await response.json();
        console.log('Posts con headers personalizados:', posts.length);
        return posts;
    } catch (error) {
        console.log('Error con headers:', error);
    }
}

// 9. Modo de solicitud (mode)
async function diferentesModos() {
    // CORS (por defecto) - peticiones cross-origin con CORS
    const responseCors = await fetch('https://jsonplaceholder.typicode.com/posts', {
        mode: 'cors'
    });
    
    // No-cors - peticiones opacas (limitado)
    // const responseNoCors = await fetch('https://ejemplo.com/api', {
    //     mode: 'no-cors'
    // });
    
    // Same-origin - solo mismo origen
    // const responseSameOrigin = await fetch('/api/local', {
    //     mode: 'same-origin'
    // });
    
    console.log('Modo CORS:', responseCors.mode);
}

// 10. Credenciales (cookies, HTTP authentication)
async function conCredenciales() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            credentials: 'include' // Incluir cookies
            // credentials: 'same-origin' // Solo mismo origen
            // credentials: 'omit' // No incluir cookies (por defecto)
        });
        
        const posts = await response.json();
        console.log('Posts con credenciales:', posts.length);
    } catch (error) {
        console.log('Error con credenciales:', error);
    }
}

// 11. Cache
async function conCache() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            cache: 'default' // Usa cache del navegador
            // cache: 'no-store' // No usa cache
            // cache: 'reload' // Siempre pide al servidor
            // cache: 'no-cache' // Revalida antes de usar cache
            // cache: 'force-cache' // Solo usa cache
        });
        
        const posts = await response.json();
        console.log('Posts con configuración de cache:', posts.length);
    } catch (error) {
        console.log('Error con cache:', error);
    }
}

// === MANEJO DE RESPUESTAS ===

// 12. Diferentes tipos de respuesta
async function diferentesTiposRespuesta() {
    // JSON
    const responseJson = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const jsonData = await responseJson.json();
    console.log('JSON:', jsonData.title);
    
    // Texto
    const responseText = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const textData = await responseText.text();
    console.log('Texto:', textData.substring(0, 100) + '...');
    
    // Blob (para archivos)
    const responseBlob = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const blobData = await responseBlob.blob();
    console.log('Blob:', blobData.size, 'bytes');
    
    // ArrayBuffer (para datos binarios)
    const responseArrayBuffer = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const arrayBufferData = await responseArrayBuffer.arrayBuffer();
    console.log('ArrayBuffer:', arrayBufferData.byteLength, 'bytes');
}

// 13. Streaming responses
async function streamingResponse() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Usar el reader para procesar el stream
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let resultado = '';
        
        while (true) {
            const { done, value } = await reader.read();
            
            if (done) break;
            
            resultado += decoder.decode(value, { stream: true });
            console.log('Chunk recibido:', value.length, 'bytes');
        }
        
        console.log('Streaming completado, total:', resultado.length, 'caracteres');
    } catch (error) {
        console.log('Error en streaming:', error);
    }
}

// === ERRORES Y MANEJO ===

// 14. Manejo de errores HTTP
async function manejarErroresHTTP() {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1', // 200 OK
        'https://jsonplaceholder.typicode.com/posts/999999', // 404 Not Found
        'https://jsonplaceholder.typicode.com/endpoint-que-no-existe' // 404
    ];
    
    for (const url of urls) {
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                switch (response.status) {
                    case 400:
                        console.log(`${url}: Bad Request - Datos inválidos`);
                        break;
                    case 401:
                        console.log(`${url}: Unauthorized - No autorizado`);
                        break;
                    case 403:
                        console.log(`${url}: Forbidden - Prohibido`);
                        break;
                    case 404:
                        console.log(`${url}: Not Found - Recurso no encontrado`);
                        break;
                    case 500:
                        console.log(`${url}: Internal Server Error`);
                        break;
                    default:
                        console.log(`${url}: Error HTTP ${response.status}`);
                }
                continue;
            }
            
            const data = await response.json();
            console.log(`${url}: Éxito - ${data.title || 'Sin título'}`);
            
        } catch (error) {
            console.log(`${url}: Error de red - ${error.message}`);
        }
    }
}

// manejarErroresHTTP();

// 15. Timeout en peticiones fetch
async function fetchConTimeout(url, options = {}, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new Error(`Timeout después de ${timeout}ms`);
        }
        
        throw error;
    }
}

// Uso
// fetchConTimeout('https://jsonplaceholder.typicode.com/posts/1')
//     .then(data => console.log('Datos:', data))
//     .catch(error => console.log('Error:', error));

// === UTILIDADES Y PATRONES ===

// 16. Wrapper para fetch con manejo de errores
class APIClient {
    constructor(baseURL = 'https://jsonplaceholder.typicode.com') {
        this.baseURL = baseURL;
        this.defaultHeaders = {
            'Content-Type': 'application/json'
        };
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: { ...this.defaultHeaders, ...options.headers },
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            // Determinar cómo parsear la respuesta
            const contentType = response.headers.get('content-type');
            
            if (contentType?.includes('application/json')) {
                return await response.json();
            } else if (contentType?.includes('text/')) {
                return await response.text();
            } else {
                return await response.blob();
            }
            
        } catch (error) {
            console.log(`Error en ${config.method || 'GET'} ${url}:`, error);
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
    
    async patch(endpoint, data) {
        return this.request(endpoint, {
            method: 'PATCH',
            body: JSON.stringify(data)
        });
    }
    
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

// Uso del APIClient
const api = new APIClient();

// api.get('/posts/1')
//     .then(post => console.log('Post:', post))
//     .catch(error => console.log('Error:', error));

// api.post('/posts', { title: 'Nuevo post', body: 'Contenido', userId: 1 })
//     .then(post => console.log('Creado:', post))
//     .catch(error => console.log('Error:', error));

// 17. Retry automático
async function fetchConRetry(url, options = {}, maxRetries = 3, delay = 1000) {
    let lastError;
    
    for (let i = 0; i <= maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            lastError = error;
            
            if (i < maxRetries) {
                console.log(`Intento ${i + 1} falló, reintentando en ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2; // Backoff exponencial
            }
        }
    }
    
    throw lastError;
}

// 18. Cancelación de peticiones
async function fetchCancelable(url) {
    const controller = new AbortController();
    
    // Simular cancelación después de 1 segundo
    setTimeout(() => {
        console.log('Cancelando petición...');
        controller.abort();
    }, 1000);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        
        const data = await response.json();
        console.log('Datos recibidos:', data);
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Petición cancelada');
        } else {
            console.log('Error:', error);
        }
    }
}

// === BUENAS PRÁCTICAS ===

// 19. Siempre verificar response.ok
async function buenaPractica1() {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
}

// 20. Usar async/await en lugar de .then().catch()
async function buenaPractica2() {
    try {
        const response = await fetch('/api/data');
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Datos:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// 21. Resumen
console.log(`
=== RESUMEN FETCH API ===
✓ fetch(url, options): función principal
✓ Métodos: GET, POST, PUT, PATCH, DELETE
✓ Opciones: headers, mode, credentials, cache
✓ Response: .json(), .text(), .blob(), .arrayBuffer()
✓ Manejo de errores: response.ok, try-catch
✓ AbortController: cancelar peticiones
✓ Streaming: procesar respuestas grandes
✓ Más moderno que XMLHttpRequest
✓ Basado en Promises
✓ Fundamental para aplicaciones web modernas
`);
