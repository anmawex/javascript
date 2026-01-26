// ASYNC/AWAIT - ES2017
// Azúcar sintáctico para trabajar con Promises

// === CONCEPTOS BÁSICOS ===

// 1. Función async básica
async function funcionAsyncBasica() {
    return "Hola desde función async";
}

// Las funciones async siempre retornan una Promise
funcionAsyncBasica().then(resultado => {
    console.log(resultado); // "Hola desde función async"
});

// 2. Await - esperar una Promise
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejemploAwait() {
    console.log("Iniciando...");
    await esperar(2000); // Espera 2 segundos
    console.log("Terminado después de 2 segundos");
}

ejemploAwait();

// 3. Capturar errores con try-catch
async function ejemploConError() {
    try {
        console.log("Intentando operación...");
        await new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Error intencional")), 1000)
        );
    } catch (error) {
        console.log("Error capturado:", error.message);
    } finally {
        console.log("Operación finalizada");
    }
}

ejemploConError();

// === COMPARACIÓN: PROMISES VS ASYNC/AWAIT ===

// 4. Versión con Promises
function obtenerUsuarioPromises(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, nombre: `Usuario ${id}` });
        }, 1000);
    });
}

function obtenerPerfilPromises(usuario) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ ...usuario, edad: 25, ciudad: "Madrid" });
        }, 1000);
    });
}

// Con Promesas (callback hell)
function flujoPromises() {
    obtenerUsuarioPromises(1)
        .then(usuario => {
            console.log("Usuario obtenido:", usuario);
            return obtenerPerfilPromises(usuario);
        })
        .then(perfil => {
            console.log("Perfil completo:", perfil);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

// 5. Versión con async/await
async function flujoAsyncAwait() {
    try {
        console.log("Obteniendo usuario...");
        const usuario = await obtenerUsuarioPromises(1);
        console.log("Usuario obtenido:", usuario);
        
        console.log("Obteniendo perfil...");
        const perfil = await obtenerPerfilPromises(usuario);
        console.log("Perfil completo:", perfil);
        
        return perfil;
    } catch (error) {
        console.log("Error en el flujo:", error);
        throw error; // Re-lanzar si es necesario
    }
}

// flujoPromises();
// flujoAsyncAwait();

// === AWAIT CON MÚLTIPLES OPERACIONES ===

// 6. Ejecución secuencial
async function secuencial() {
    console.log("Iniciando operaciones secuenciales...");
    
    const resultado1 = await esperar(1000);
    console.log("Operación 1 completada");
    
    const resultado2 = await esperar(1000);
    console.log("Operación 2 completada");
    
    const resultado3 = await esperar(1000);
    console.log("Operación 3 completada");
    
    console.log("Todas las operaciones secuenciales completadas");
}

// secuencial(); // Tarda 3 segundos en total

// 7. Ejecución paralela con Promise.all
async function paralelo() {
    console.log("Iniciando operaciones paralelas...");
    
    const [resultado1, resultado2, resultado3] = await Promise.all([
        esperar(1000),
        esperar(1000),
        esperar(1000)
    ]);
    
    console.log("Todas las operaciones paralelas completadas");
}

// paralelo(); // Tarda 1 segundo en total

// 8. Promise.allSettled con async/await
async function conAllSettled() {
    const promesas = [
        Promise.resolve("Éxito 1"),
        Promise.reject("Error 2"),
        Promise.resolve("Éxito 3")
    ];
    
    const resultados = await Promise.allSettled(promesas);
    
    resultados.forEach((resultado, index) => {
        if (resultado.status === 'fulfilled') {
            console.log(`Promesa ${index + 1}: ${resultado.value}`);
        } else {
            console.log(`Promesa ${index + 1} falló: ${resultado.reason}`);
        }
    });
}

// conAllSettled();

// === MANEJO AVANZADO DE ERRORES ===

// 9. Errores específicos con async/await
class ErrorDeAPI extends Error {
    constructor(message, codigo) {
        super(message);
        this.name = "ErrorDeAPI";
        this.codigo = codigo;
    }
}

async function llamarAPI(endpoint) {
    // Simulación de llamada API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (endpoint === "/error") {
                reject(new ErrorDeAPI("Error de API", 500));
            } else {
                resolve({ data: `Datos de ${endpoint}` });
            }
        }, 1000);
    });
}

async function consumirAPI() {
    try {
        const respuesta = await llamarAPI("/usuarios");
        console.log("Datos recibidos:", respuesta);
    } catch (error) {
        if (error instanceof ErrorDeAPI) {
            console.log(`Error de API (${error.codigo}): ${error.message}`);
        } else {
            console.log("Error general:", error.message);
        }
    }
}

// consumirAPI();

// 10. Retry con async/await
async function reintentarAsync(fn, maxIntentos = 3, delay = 1000) {
    let ultimoError;
    
    for (let intento = 1; intento <= maxIntentos; intento++) {
        try {
            return await fn();
        } catch (error) {
            ultimoError = error;
            console.log(`Intento ${intento} falló: ${error.message}`);
            
            if (intento < maxIntentos) {
                await esperar(delay);
            }
        }
    }
    
    throw ultimoError;
}

// Uso
async function operacionInestable() {
    if (Math.random() > 0.7) {
        return "Éxito";
    }
    throw new Error("Error aleatorio");
}

// reintentarAsync(operacionInestable)
//     .then(resultado => console.log("Éxito:", resultado))
//     .catch(error => console.log("Todos los intentos fallaron:", error));

// === PATRONES COMUNES ===

// 11. Bucle con async/await
async function procesarArray(items) {
    console.log("Procesando array de forma secuencial...");
    
    for (const item of items) {
        await esperar(500);
        console.log(`Procesado: ${item}`);
    }
    
    console.log("Array procesado completamente");
}

// procesarArray(["A", "B", "C"]);

// 12. Bucle con procesamiento paralelo
async function procesarArrayParalelo(items) {
    console.log("Procesando array en paralelo...");
    
    const promesas = items.map(async (item) => {
        await esperar(500);
        return `Procesado: ${item}`;
    });
    
    const resultados = await Promise.all(promesas);
    
    console.log("Resultados paralelos:", resultados);
}

// procesarArrayParalelo(["A", "B", "C"]);

// 13. Límite de concurrencia
async function procesarConLimite(items, limite = 2) {
    const resultados = [];
    
    for (let i = 0; i < items.length; i += limite) {
        const lote = items.slice(i, i + limite);
        const promesasLote = lote.map(async (item) => {
            await esperar(1000);
            return `Procesado: ${item}`;
        });
        
        const resultadosLote = await Promise.all(promesasLote);
        resultados.push(...resultadosLote);
    }
    
    return resultados;
}

// procesarConLimite(["A", "B", "C", "D", "E"], 2);

// === UTILIDADES Y PATRONES ===

// 14. Timeout con async/await
async function conTimeout(promise, ms) {
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error(`Timeout después de ${ms}ms`)), ms)
    );
    
    return Promise.race([promise, timeout]);
}

async function operacionConTimeout() {
    try {
        const resultado = await conTimeout(esperar(3000), 2000);
        console.log("Operación completada:", resultado);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// operacionConTimeout();

// 15. Cache con async/await
class CacheSimple {
    constructor() {
        this.cache = new Map();
    }
    
    async obtener(key, fn) {
        if (this.cache.has(key)) {
            console.log("Cache hit para:", key);
            return this.cache.get(key);
        }
        
        console.log("Cache miss para:", key);
        const resultado = await fn();
        this.cache.set(key, resultado);
        return resultado;
    }
}

const cache = new CacheSimple();

async function obtenerDatosCacheados(id) {
    return await cache.obtener(`usuario_${id}`, async () => {
        await esperar(1000); // Simulación de llamada lenta
        return { id, nombre: `Usuario ${id}` };
    });
}

// Primera llamada (cache miss)
// obtenerDatosCacheados(1).then(console.log);
// Segunda llamada (cache hit)
// setTimeout(() => obtenerDatosCacheados(1).then(console.log), 2000);

// 16. Encadenamiento de operaciones condicionales
async function flujoCondicional(usuario) {
    try {
        const datosUsuario = await obtenerUsuarioPromises(usuario.id);
        
        if (datosUsuario.rol === 'admin') {
            const datosAdmin = await obtenerDatosAdmin(datosUsuario.id);
            return { ...datosUsuario, ...datosAdmin };
        } else {
            const datosBasicos = await obtenerDatosBasicos(datosUsuario.id);
            return { ...datosUsuario, ...datosBasicos };
        }
    } catch (error) {
        console.log("Error en flujo condicional:", error);
        return null;
    }
}

// Funciones simuladas
function obtenerDatosAdmin(id) {
    return Promise.resolve({ permisos: ['leer', 'escribir', 'eliminar'] });
}

function obtenerDatosBasicos(id) {
    return Promise.resolve({ permisos: ['leer'] });
}

// flujoCondicional({ id: 1, rol: 'admin' }).then(console.log);

// === BUENAS PRÁCTICAS ===

// 17. Siempre usar try-catch en funciones async
async function buenaPracticaAsync(datos) {
    try {
        const procesado = await procesarDatos(datos);
        return procesado;
    } catch (error) {
        console.error("Error procesando datos:", error);
        throw error; // O retornar valor por defecto
    }
}

function procesarDatos(datos) {
    return Promise.resolve(datos.toUpperCase());
}

// 18. No mezclar callbacks con async/await
// ✓ Bueno
async function ejemploBueno() {
    const resultado = await algunaPromise();
    return resultado;
}

// ✗ Evitar
async function ejemploMalo() {
    algunaPromise().then(resultado => {
        // No hacer esto dentro de async
        return resultado;
    });
}

// 19. Manejar promesas que no son realmente promesas
async function manejarNoPromesas(valor) {
    // await funciona con cualquier valor, no solo promesas
    const resultado = await valor; // Si no es promise, lo retorna directamente
    return resultado;
}

manejarNoPromesas("Hola").then(console.log); // "Hola"
manejarNoPromesas(Promise.resolve("Mundo")).then(console.log); // "Mundo"

// 20. Resumen
console.log(`
=== RESUMEN ASYNC/AWAIT ===
✓ async function: siempre retorna una Promise
✓ await: pausa ejecución hasta que Promise se resuelva
✓ try-catch: manejo de errores síncrono
✓ Promise.all(): ejecución paralela
✓ Promise.allSettled(): esperar a todas
✓ Más legible que .then().catch()
✓ Permite usar estructuras de control normales
✓ Fundamental para código asíncrono moderno
✓ Base para APIs modernas (fetch, etc.)
✓ Compatible con todas las características de Promises
`);
