// PROMISES - ES6
// Manejo de operaciones asíncronas con Promesas

// === CONCEPTOS BÁSICOS ===

// 1. Estados de una Promise
// - Pending: estado inicial, ni cumplida ni rechazada
// - Fulfilled: operación completada exitosamente
// - Rejected: operación fallida
// - Settled: término genérico para fulfilled o rejected

// 2. Creación de una Promise básica
const miPrimeraPromise = new Promise((resolve, reject) => {
    // Simulación de operación asíncrona
    setTimeout(() => {
        const exito = true;
        
        if (exito) {
            resolve("¡Operación completada exitosamente!");
        } else {
            reject("Hubo un error en la operación");
        }
    }, 2000);
});

// 3. Consumo de una Promise
miPrimeraPromise
    .then(resultado => {
        console.log("Éxito:", resultado);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Operación finalizada (siempre se ejecuta)");
    });

// === PROMISES INMEDIATAS ===

// 4. Promise.resolve() - Promise que se resuelve inmediatamente
const promiseResuelta = Promise.resolve("Valor resuelto");
promiseResuelta.then(valor => console.log(valor)); // "Valor resuelto"

// 5. Promise.reject() - Promise que se rechaza inmediatamente
const promiseRechazada = Promise.reject("Valor rechazado");
promiseRechazada.catch(error => console.log(error)); // "Valor rechazado"

// === ENCADENAMIENTO DE PROMISES ===

// 6. Encadenamiento con then()
function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, nombre: `Usuario ${id}` });
        }, 1000);
    });
}

function obtenerPerfil(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ...usuario, edad: 25, ciudad: "Madrid" });
        }, 1000);
    });
}

function obtenerPosts(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, titulo: "Post 1", autor: usuario.nombre },
                { id: 2, titulo: "Post 2", autor: usuario.nombre }
            ]);
        }, 1000);
    });
}

// Encadenamiento tradicional
obtenerUsuario(1)
    .then(usuario => {
        console.log("Usuario obtenido:", usuario);
        return obtenerPerfil(usuario);
    })
    .then(perfil => {
        console.log("Perfil obtenido:", perfil);
        return obtenerPosts(perfil);
    })
    .then(posts => {
        console.log("Posts obtenidos:", posts);
    })
    .catch(error => {
        console.log("Error en el flujo:", error);
    });

// === PROMISE.ALL ===

// 7. Promise.all() - Ejecutar múltiples promesas en paralelo
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 1000));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
    .then(valores => {
        console.log("Todas las promesas resueltas:", valores);
        // [3, "foo", 42]
    })
    .catch(error => {
        console.log("Alguna promesa falló:", error);
    });

// 8. Promise.all() con operaciones asíncronas
function descargarDatos(urls) {
    const promesas = urls.map(url => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ url, datos: `Datos de ${url}` });
            }, Math.random() * 2000);
        });
    });

    return Promise.all(promesas);
}

const urls = ['https://api1.com', 'https://api2.com', 'https://api3.com'];
descargarDatos(urls)
    .then(resultados => {
        console.log("Todos los datos descargados:", resultados);
    });

// === PROMISE.RACE ===

// 9. Promise.race() - La primera promesa que se resuelva o rechace
const promesaRapida = new Promise(resolve => 
    setTimeout(() => resolve("Rápida"), 100)
);

const promesaLenta = new Promise(resolve => 
    setTimeout(() => resolve("Lenta"), 500)
);

const promesaError = new Promise((resolve, reject) => 
    setTimeout(() => reject("Error"), 200)
);

Promise.race([promesaRapida, promesaLenta])
    .then(resultado => {
        console.log("Ganadora:", resultado); // "Rápida"
    });

Promise.race([promesaLenta, promesaError])
    .then(resultado => {
        console.log("No se ejecuta");
    })
    .catch(error => {
        console.log("Error en race:", error); // "Error"
    });

// === PROMISE.ALLSETTLED (ES2020) ===

// 10. Promise.allSettled() - Espera a que todas terminen (éxito o error)
const promesa1Exito = Promise.resolve("Éxito 1");
const promesa2Error = Promise.reject("Error 2");
const promesa3Exito = Promise.resolve("Éxito 3");

Promise.allSettled([promesa1Exito, promesa2Error, promesa3Exito])
    .then(resultados => {
        console.log("Todas las promesas terminaron:");
        resultados.forEach((resultado, index) => {
            console.log(`Promesa ${index + 1}:`, resultado.status);
            if (resultado.status === 'fulfilled') {
                console.log("  Valor:", resultado.value);
            } else {
                console.log("  Razón:", resultado.reason);
            }
        });
    });

// === MÉTODOS ÚTILES ===

// 11. Crear una Promise que se resuelve después de un tiempo
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Uso práctico
console.log("Iniciando espera...");
esperar(2000).then(() => {
    console.log("Han pasado 2 segundos");
});

// 12. Promise con timeout
function promiseConTimeout(promise, ms) {
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error(`Timeout después de ${ms}ms`)), ms)
    );

    return Promise.race([promise, timeout]);
}

// Uso
const operacionLarga = new Promise(resolve => 
    setTimeout(() => resolve("Completado"), 3000)
);

promiseConTimeout(operacionLarga, 2000)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error.message)); // "Timeout después de 2000ms"

// 13. Retry con Promises
function reintentar(fn, maxIntentos = 3) {
    return new Promise((resolve, reject) => {
        let intentos = 0;

        function intentar() {
            intentos++;
            fn()
                .then(resolve)
                .catch(error => {
                    if (intentos < maxIntentos) {
                        console.log(`Intento ${intentos} falló, reintentando...`);
                        setTimeout(intentar, 1000);
                    } else {
                        reject(error);
                    }
                });
        }

        intentar();
    });
}

// Uso
function operacionInestable() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.7) {
            resolve("Éxito");
        } else {
            reject("Error aleatorio");
        }
    });
}

reintentar(operacionInestable)
    .then(resultado => console.log("Éxito después de reintentos:", resultado))
    .catch(error => console.log("Todos los intentos fallaron:", error));

// === MANEJO DE ERRORES AVANZADO ===

// 14. Propagación de errores en cadenas
new Promise((resolve, reject) => {
    reject(new Error("Error inicial"));
})
    .then(() => {
        // No se ejecuta
    })
    .catch(error => {
        console.log("Error capturado:", error.message);
        throw new Error("Error secundario"); // Lanza nuevo error
    })
    .then(() => {
        // No se ejecuta
    })
    .catch(error => {
        console.log("Error secundario capturado:", error.message);
    });

// 15. Errores específicos
class ErrorDeRed extends Error {
    constructor(message) {
        super(message);
        this.name = "ErrorDeRed";
    }
}

class ErrorDeValidacion extends Error {
    constructor(message) {
        super(message);
        this.name = "ErrorDeValidacion";
    }
}

function procesarDatos(datos) {
    return new Promise((resolve, reject) => {
        if (!datos) {
            reject(new ErrorDeValidacion("Datos requeridos"));
        } else if (datos.length === 0) {
            reject(new ErrorDeRed("No se pudieron obtener los datos"));
        } else {
            resolve(datos);
        }
    });
}

procesarDatos(null)
    .catch(error => {
        if (error instanceof ErrorDeValidacion) {
            console.log("Error de validación:", error.message);
        } else if (error instanceof ErrorDeRed) {
            console.log("Error de red:", error.message);
        } else {
            console.log("Error desconocido:", error.message);
        }
    });

// === PATRONES COMUNES ===

// 16. Conversión de callbacks a Promises
function callbackASync(callback) {
    setTimeout(() => {
        callback(null, "Resultado del callback");
    }, 1000);
}

// Convertir a Promise
function promisificar(callback) {
    return new Promise((resolve, reject) => {
        callback((error, resultado) => {
            if (error) {
                reject(error);
            } else {
                resolve(resultado);
            }
        });
    });
}

promisificar(callbackASync)
    .then(resultado => console.log("Callback promisificado:", resultado));

// 17. Promise que devuelve otra Promise
function obtenerDatosUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, nombre: `Usuario ${id}` });
        }, 1000);
    });
}

function obtenerDetallesUsuario(usuario) {
    // Esta función retorna otra Promise
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ...usuario, detalles: "Detalles adicionales" });
        }, 1000);
    });
}

// El then automáticamente desenvuelve la Promise
obtenerDatosUsuario(1)
    .then(usuario => obtenerDetallesUsuario(usuario))
    .then(detalles => console.log("Detalles completos:", detalles));

// === BUENAS PRÁCTICAS ===

// 18. Siempre manejar errores
function buenaPractica() {
    return Promise.resolve("datos")
        .then(datos => {
            // Procesar datos
            return datos.toUpperCase();
        })
        .catch(error => {
            // Siempre tener un catch
            console.error("Error procesando datos:", error);
            return "valor por defecto"; // Valor de recuperación
        });
}

// 19. Evitar el callback hell
// ✓ Bueno: encadenamiento de Promises
obtenerUsuario(1)
    .then(obtenerPerfil)
    .then(obtenerPosts)
    .then(posts => console.log(posts))
    .catch(error => console.error(error));

// ✗ Malo: callback hell
/*
obtenerUsuario(1, (usuario) => {
    obtenerPerfil(usuario, (perfil) => {
        obtenerPosts(perfil, (posts) => {
            console.log(posts);
        }, (error) => {
            console.error(error);
        });
    }, (error) => {
        console.error(error);
    });
}, (error) => {
    console.error(error);
});
*/

// 20. Resumen
console.log(`
=== RESUMEN PROMISES ===
✓ Estados: pending, fulfilled, rejected, settled
✓ Creación: new Promise((resolve, reject) => {})
✓ Consumo: .then(), .catch(), .finally()
✓ Encadenamiento: .then().then().catch()
✓ Promise.all(): todas deben exitar
✓ Promise.race(): la primera en terminar
✓ Promise.allSettled(): espera a todas (éxito o error)
✓ Manejo de errores: .catch() y propagación
✓ Patrones: retry, timeout, promisificación
✓ Fundamental para async/await y código moderno
`);
