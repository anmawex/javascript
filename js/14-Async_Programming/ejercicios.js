// EJERCICIOS PRÁCTICOS - ASYNC PROGRAMMING
// Promises, Async/Await, Fetch API

// === EJERCICIO 1: Promises Básicas ===
// Crea funciones que retornen Promises

// 1.1 Promise que se resuelve después de un tiempo
function esperarYResolver(valor, ms) {
    // Retorna una Promise que se resuelve con 'valor' después de 'ms' milisegundos
    // Tu código aquí
}

// 1.2 Promise que se rechaza después de un tiempo
function esperarYRechazar(error, ms) {
    // Retorna una Promise que se rechaza con 'error' después de 'ms' milisegundos
    // Tu código aquí
}

// 1.3 Promise que se resuelve o rechaza aleatoriamente
function operacionInestable(valor) {
    // Retorna una Promise que tiene 70% de probabilidad de resolverse con 'valor'
    // y 30% de rechazar con "Error aleatorio"
    // Tu código aquí
}

// === EJERCICIO 2: Encadenamiento de Promises ===

// 2.1 Simula una cadena de operaciones asíncronas
function obtenerUsuario(id) {
    // Simula obtener un usuario después de 1 segundo
    // Retorna { id, nombre: `Usuario ${id}` }
    // Tu código aquí
}

function obtenerPerfil(usuario) {
    // Simula obtener el perfil después de 1 segundo
    // Retorna { ...usuario, edad: 25, ciudad: "Madrid" }
    // Tu código aquí
}

function obtenerPosts(usuario) {
    // Simula obtener posts después de 1 segundo
    // Retorna [{ id: 1, titulo: "Post 1", autor: usuario.nombre }]
    // Tu código aquí
}

// Encadena las tres funciones usando Promises
function flujoCompletoPromises(id) {
    // Tu código aquí
}

// === EJERCICIO 3: Async/Await ===

// 3.1 Convierte el flujo anterior a async/await
async function flujoCompletoAsync(id) {
    // Usa async/await en lugar de .then().catch()
    // Maneja errores con try-catch
    // Tu código aquí
}

// 3.2 Ejecución paralela con async/await
async function obtenerMultiplesUsuarios(ids) {
    // Obtiene múltiples usuarios en paralelo usando Promise.all
    // Retorna un array con todos los usuarios
    // Tu código aquí
}

// 3.3 Ejecución con límite de concurrencia
async function obtenerUsuariosConLimite(ids, limite = 2) {
    // Obtiene usuarios pero máximo 'limite' a la vez
    // Usa Promise.all pero procesa en lotes
    // Tu código aquí
}

// === EJERCICIO 4: Fetch API ===

// 4.1 Función GET básica
async function obtenerDatos(url) {
    // Usa fetch para obtener datos de la URL
    // Maneja errores HTTP (response.ok)
    // Convierte la respuesta a JSON
    // Tu código aquí
}

// 4.2 Función POST
async function crearDato(url, datos) {
    // Usa fetch para crear un nuevo recurso
    // Usa método POST
    // Configura headers apropiados
    // Convierte datos a JSON en el body
    // Tu código aquí
}

// 4.3 Función con timeout
async function fetchConTimeout(url, options = {}, timeout = 5000) {
    // Implementa timeout usando AbortController
    // Si la petición tarda más de 'timeout', cancelarla
    // Tu código aquí
}

// === EJERCICIO 5: Manejo Avanzado de Errores ===

// 5.1 Retry automático
async function fetchConRetry(url, options = {}, maxRetries = 3) {
    // Reintenta la petición hasta 'maxRetries' veces
    - Usa backoff exponencial (delay * 2 en cada reintento)
    - Solo reintentar en caso de error de red
    // Tu código aquí
}

// 5.2 Clase de errores personalizados
class ErrorDeAPI extends Error {
    constructor(message, status, data) {
        super(message);
        this.name = "ErrorDeAPI";
        this.status = status;
        this.data = data;
    }
}

async function llamarAPIConManejoDeErrores(url) {
    // Usa fetch y maneja diferentes tipos de errores
    - Lanza ErrorDeAPI para errores HTTP
    - Lanza Error de red para problemas de conexión
    // Tu código aquí
}

// 5.3 Validación de respuestas
async function obtenerYValidarUsuario(id) {
    // Obtiene un usuario y valida que tenga los campos requeridos
    - Campos requeridos: id, nombre, email
    - Si falta algún campo, lanza error específico
    // Tu código aquí
}

// === EJERCICIO 6: Utilidades y Patrones ===

// 6.1 Cache simple
class CacheAPI {
    constructor() {
        this.cache = new Map();
    }
    
    async obtener(url, fetchOptions = {}) {
        // Si el resultado está en cache, retornarlo
        // Si no, fetch y guardar en cache
        - Usa la URL como clave del cache
        - Considera tiempo de expiración (opcional)
        // Tu código aquí
    }
    
    limpiar() {
        // Limpia todo el cache
        // Tu código aquí
    }
}

// 6.2 API Client completo
class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.headers = {
            'Content-Type': 'application/json'
        };
    }
    
    // Implementa métodos para todos los verbos HTTP
    async get(endpoint) {
        // Tu código aquí
    }
    
    async post(endpoint, data) {
        // Tu código aquí
    }
    
    async put(endpoint, data) {
        // Tu código aquí
    }
    
    async patch(endpoint, data) {
        // Tu código aquí
    }
    
    async delete(endpoint) {
        // Tu código aquí
    }
    
    // Método genérico para peticiones
    async request(endpoint, options = {}) {
        // Tu código aquí
    }
}

// 6.3 Procesamiento de streaming
async function procesarStreamResponse(url) {
    // Procesa una respuesta grande usando streaming
    - Usa response.body.getReader()
    - Procesa los datos chunk por chunk
    - Muestra progreso de descarga
    // Tu código aquí
}

// === EJERCICIO 7: Desafío Final ===

// 7.1 Sistema de gestión de posts
class PostManager {
    constructor(apiURL) {
        this.apiURL = apiURL;
        this.cache = new CacheAPI();
        this.client = new APIClient(apiURL);
    }
    
    // Implementa métodos para gestionar posts
    async obtenerTodos() {
        // Obtiene todos los posts, usando cache si es posible
        // Tu código aquí
    }
    
    async obtenerPorId(id) {
        // Obtiene un post específico
        // Tu código aquí
    }
    
    async crear(postData) {
        // Crea un nuevo post
        // Invalida el cache de todos los posts
        // Tu código aquí
    }
    
    async actualizar(id, postData) {
        // Actualiza un post existente
        // Actualiza el cache
        // Tu código aquí
    }
    
    async eliminar(id) {
        // Elimina un post
        - Actualiza cache
        - Retorna boolean indicando éxito
        // Tu código aquí
    }
    
    async buscar(termino) {
        // Busca posts por término
        - Usa fetch con query parameters
        - Implementa cache para búsquedas
        // Tu código aquí
    }
}

// === PRUEBAS ===
// Descomenta para probar tus soluciones

/*
// Prueba Ejercicio 1
esperarYResolver("Hola", 1000).then(console.log);
esperarYRechazar("Error", 1000).catch(console.log);

// Prueba Ejercicio 2
flujoCompletoPromises(1)
    .then(resultado => console.log("Flux completo:", resultado))
    .catch(error => console.log("Error:", error));

// Prueba Ejercicio 3
flujoCompletoAsync(1)
    .then(resultado => console.log("Flux async:", resultado))
    .catch(error => console.log("Error:", error));

obtenerMultiplesUsuarios([1, 2, 3])
    .then(usuarios => console.log("Múltiples usuarios:", usuarios));

// Prueba Ejercicio 4
obtenerDatos("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log("Datos:", data))
    .catch(error => console.log("Error:", error));

// Prueba Ejercicio 5
fetchConRetry("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log("Con retry:", data))
    .catch(error => console.log("Error final:", error));

// Prueba Ejercicio 6
const cache = new CacheAPI();
cache.obtener("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log("Con cache:", data));

// Prueba Ejercicio 7
const postManager = new PostManager("https://jsonplaceholder.typicode.com");
postManager.obtenerTodos()
    .then(posts => console.log("Posts:", posts.length));
*/

// === RESPUESTAS Y SOLUCIONES ===
// Descomenta la siguiente sección para ver las soluciones

/*
// SOLUCIÓN EJERCICIO 1:
function esperarYResolver(valor, ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(valor), ms);
    });
}

function esperarYRechazar(error, ms) {
    return new Promise((_, reject) => {
        setTimeout(() => reject(error), ms);
    });
}

function operacionInestable(valor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(valor);
            } else {
                reject("Error aleatorio");
            }
        }, 1000);
    });
}

// SOLUCIÓN EJERCICIO 2:
function obtenerUsuario(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, nombre: `Usuario ${id}` });
        }, 1000);
    });
}

function obtenerPerfil(usuario) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ ...usuario, edad: 25, ciudad: "Madrid" });
        }, 1000);
    });
}

function obtenerPosts(usuario) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([{ id: 1, titulo: "Post 1", autor: usuario.nombre }]);
        }, 1000);
    });
}

function flujoCompletoPromises(id) {
    return obtenerUsuario(id)
        .then(usuario => obtenerPerfil(usuario))
        .then(perfil => obtenerPosts(perfil));
}

// SOLUCIÓN EJERCICIO 3:
async function flujoCompletoAsync(id) {
    try {
        const usuario = await obtenerUsuario(id);
        const perfil = await obtenerPerfil(usuario);
        const posts = await obtenerPosts(perfil);
        return posts;
    } catch (error) {
        console.log("Error en flujo:", error);
        throw error;
    }
}

async function obtenerMultiplesUsuarios(ids) {
    const promesas = ids.map(id => obtenerUsuario(id));
    return Promise.all(promesas);
}

async function obtenerUsuariosConLimite(ids, limite = 2) {
    const resultados = [];
    
    for (let i = 0; i < ids.length; i += limite) {
        const lote = ids.slice(i, i + limite);
        const promesasLote = lote.map(id => obtenerUsuario(id));
        const resultadosLote = await Promise.all(promesasLote);
        resultados.push(...resultadosLote);
    }
    
    return resultados;
}

// SOLUCIÓN EJERCICIO 4:
async function obtenerDatos(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.log("Error obteniendo datos:", error);
        throw error;
    }
}

async function crearDato(url, datos) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.log("Error creando dato:", error);
        throw error;
    }
}

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
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
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

// SOLUCIÓN EJERCICIO 5:
async function fetchConRetry(url, options = {}, maxRetries = 3) {
    let lastError;
    let delay = 1000;
    
    for (let i = 0; i <= maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            lastError = error;
            
            if (i < maxRetries && error.name !== 'AbortError') {
                console.log(`Intento ${i + 1} falló, reintentando en ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2;
            }
        }
    }
    
    throw lastError;
}

async function llamarAPIConManejoDeErrores(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new ErrorDeAPI(
                `Error HTTP ${response.status}: ${response.statusText}`,
                response.status,
                errorData
            );
        }
        
        return await response.json();
    } catch (error) {
        if (error instanceof ErrorDeAPI) {
            throw error;
        }
        
        if (error.name === 'TypeError') {
            throw new Error("Error de red: no se pudo conectar al servidor");
        }
        
        throw error;
    }
}

async function obtenerYValidarUsuario(id) {
    const usuario = await obtenerUsuario(id);
    
    const camposRequeridos = ['id', 'nombre', 'email'];
    const camposFaltantes = camposRequeridos.filter(campo => !(campo in usuario));
    
    if (camposFaltantes.length > 0) {
        throw new Error(`Campos requeridos faltantes: ${camposFaltantes.join(', ')}`);
    }
    
    return usuario;
}

// SOLUCIÓN EJERCICIO 6:
class CacheAPI {
    constructor() {
        this.cache = new Map();
    }
    
    async obtener(url, fetchOptions = {}) {
        if (this.cache.has(url)) {
            console.log("Cache hit para:", url);
            return this.cache.get(url);
        }
        
        console.log("Cache miss para:", url);
        const datos = await obtenerDatos(url);
        this.cache.set(url, datos);
        return datos;
    }
    
    limpiar() {
        this.cache.clear();
    }
}

class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.headers = {
            'Content-Type': 'application/json'
        };
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
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: { ...this.headers, ...options.headers },
            ...options
        };
        
        const response = await fetch(url, config);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    }
}

async function procesarStreamResponse(url) {
    const response = await fetch(url);
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let resultado = '';
    let descargado = 0;
    
    const contentLength = response.headers.get('content-length');
    const total = contentLength ? parseInt(contentLength) : 0;
    
    while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        resultado += decoder.decode(value, { stream: true });
        descargado += value.length;
        
        if (total > 0) {
            const porcentaje = Math.round((descargado / total) * 100);
            console.log(`Progreso: ${porcentaje}%`);
        }
    }
    
    return resultado;
}

// SOLUCIÓN EJERCICIO 7:
class PostManager {
    constructor(apiURL) {
        this.apiURL = apiURL;
        this.cache = new CacheAPI();
        this.client = new APIClient(apiURL);
    }
    
    async obtenerTodos() {
        const cacheKey = `${this.apiURL}/posts`;
        return await this.cache.obtener(cacheKey);
    }
    
    async obtenerPorId(id) {
        const cacheKey = `${this.apiURL}/posts/${id}`;
        return await this.cache.obtener(cacheKey);
    }
    
    async crear(postData) {
        const nuevoPost = await this.client.post('/posts', postData);
        this.cache.limpiar(); // Invalidar cache
        return nuevoPost;
    }
    
    async actualizar(id, postData) {
        const postActualizado = await this.client.put(`/posts/${id}`, postData);
        
        // Actualizar cache
        const cacheKey = `${this.apiURL}/posts/${id}`;
        this.cache.cache.set(cacheKey, postActualizado);
        
        return postActualizado;
    }
    
    async eliminar(id) {
        await this.client.delete(`/posts/${id}`);
        
        // Actualizar cache
        const cacheKey = `${this.apiURL}/posts/${id}`;
        this.cache.cache.delete(cacheKey);
        
        return true;
    }
    
    async buscar(termino) {
        const cacheKey = `${this.apiURL}/posts?search=${termino}`;
        return await this.cache.obtener(cacheKey);
    }
}
*/
