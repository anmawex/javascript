function dividir(a, b) {
	if (b === 0) {
		throw new Error("No se puede dividir por cero");
	}
	return a / b;
}

try {
	console.log(dividir(10, 0));
} catch (error) {
	console.error(error.message);
}

// === THROW AVANZADO ===

// 1. Throw con diferentes tipos de errores
function validarNumero(numero) {
    if (typeof numero !== 'number') {
        throw new TypeError('Se esperaba un número');
    }
    if (isNaN(numero)) {
        throw new Error('El valor no es un número válido');
    }
    if (!isFinite(numero)) {
        throw new RangeError('El número debe ser finito');
    }
    return numero;
}

// 2. Throw con errores personalizados
class ValidationError extends Error {
    constructor(mensaje, campo, valor) {
        super(mensaje);
        this.campo = campo;
        this.valor = valor;
        this.timestamp = new Date();
    }
}

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s]+\.[^\s]+\.[^\s]+$/;
    if (!emailRegex.test(email)) {
        throw new ValidationError('Email inválido', 'email', email);
    }
    return email;
}

// 3. Throw con información adicional
function procesarUsuario(datos) {
    if (!datos.nombre || datos.nombre.trim() === '') {
        throw new ValidationError('El nombre es requerido', 'nombre', datos.nombre);
    }
    if (!datos.edad || datos.edad < 0 || datos.edad > 120) {
        throw new ValidationError('La edad debe estar entre 0 y 120', 'edad', datos.edad);
    }
    if (!datos.email || !validarEmail(datos.email)) {
        throw new ValidationError('Email inválido', 'email', datos.email);
    }
    return { ...datos, validado: true };
}

// 4. Throw en funciones asíncronas
async function obtenerDatosUsuario(id) {
    if (!id || id <= 0) {
        throw new Error('ID de usuario inválido');
    }
    
    try {
        // Simular llamada a API
        const response = await fetch(`/api/usuarios/${id}`);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error('Error de red');
        }
        throw error;
    }
}

// 5. Throw con contexto
function crearError(mensaje, contexto) {
    const error = new Error(mensaje);
    error.contexto = contexto;
    error.timestamp = new Date();
    return error;
}

function procesarConError(datos, contexto) {
    if (!datos) {
        throw crearError('Datos no proporcionados', contexto);
    }
    return datos;
}

// 6. Throw con código de error
class ApiError extends Error {
    constructor(mensaje, statusCode, codigo) {
        super(mensaje);
        this.statusCode = statusCode;
        this.codigo = codigo;
    }
}

function manejarRespuestaApi(respuesta) {
    if (respuesta.status === 404) {
        throw new ApiError('Recurso no encontrado', 404, 'NOT_FOUND');
    }
    if (respuesta.status === 401) {
        throw new ApiError('No autorizado', 401, 'UNAUTHORIZED');
    }
    if (respuesta.status === 500) {
        throw new ApiError('Error interno del servidor', 500, 'INTERNAL_ERROR');
    }
    return respuesta;
}

// 7. Throw con stack trace personalizado
function crearErrorConStack(mensaje, funcion) {
    const error = new Error(mensaje);
    error.funcion = funcion;
    error.stack = `${error.stack}\nEn función: ${funcion}`;
    return error;
}

function operacionRiesgosa(valor) {
    if (valor < 0) {
        throw crearErrorConStack('Valor negativo no permitido', 'operacionRiesgosa');
    }
    return Math.sqrt(valor);
}

// 8. Throw con validación múltiple
function validarProducto(producto) {
    const errores = [];
    
    if (!producto.nombre || producto.nombre.trim() === '') {
        errores.push('El nombre es requerido');
    }
    
    if (!producto.precio || producto.precio <= 0) {
        errores.push('El precio debe ser mayor que 0');
    }
    
    if (!producto.stock || producto.stock < 0) {
        errores.push('El stock no puede ser negativo');
    }
    
    if (errores.length > 0) {
        throw new ValidationError(errores.join('; '), 'producto', producto);
    }
    
    return producto;
}

// 9. Throw con estado
class EstadoError extends Error {
    constructor(mensaje, estado) {
        super(mensaje);
        this.estado = estado;
    }
}

function procesarEstado(estado) {
    if (estado === 'error') {
        throw new EstadoError('El sistema está en estado de error', estado);
    }
    if (estado === 'mantenimiento') {
        throw new EstadoError('El sistema está en mantenimiento', estado);
    }
    return `Procesando en estado: ${estado}`;
}

// 10. Throw con retry
class RetryError extends Error {
    constructor(mensaje, intentos, maxIntentos) {
        super(mensaje);
        this.intentos = intentos;
        this.maxIntentos = maxIntentos;
    }
}

async function operacionConRetry(maxIntentos = 3) {
    let intentos = 0;
    
    while (intentos < maxIntentos) {
        try {
            intentos++;
            // Simular operación que puede fallar
            if (Math.random() < 0.7) {
                throw new Error('Operación fallida');
            }
            return 'Operación exitosa';
        } catch (error) {
            if (intentos >= maxIntentos) {
                throw new RetryError(
                    `Operación falló después de ${maxIntentos} intentos`,
                    intentos,
                    maxIntentos
                );
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

// === EJEMPLOS DE USO ===

// 11. Ejemplo completo de validación
function ejemploValidacion() {
    try {
        const usuario = {
            nombre: 'Juan',
            edad: 25,
            email: 'juan@ejemplo.com'
        };
        
        const usuarioValidado = procesarUsuario(usuario);
        console.log('Usuario validado:', usuarioValidado);
        
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error('Error de validación:', error.message);
            console.error('Campo:', error.campo);
            console.error('Valor:', error.valor);
        } else {
            console.error('Error general:', error.message);
        }
    }
}

// 12. Ejemplo con API
async function ejemploApi() {
    try {
        const datos = await obtenerDatosUsuario(123);
        console.log('Datos del usuario:', datos);
    } catch (error) {
        if (error instanceof ApiError) {
            console.error('Error de API:', error.message);
            console.error('Código:', error.codigo);
            console.error('Status:', error.statusCode);
        } else {
            console.error('Error general:', error.message);
        }
    }
}

// === BUENAS PRÁCTICAS ===

// 13. Siempre incluir información útil en el error
function buenaPracticaError(valor, contexto) {
    if (!valor) {
        throw new Error(`Valor inválido en ${contexto}. Se esperaba un valor no nulo.`);
    }
    return valor;
}

// 14. Usar tipos específicos de errores
function buenaPracticaTipos(numero) {
    if (typeof numero !== 'number') {
        throw new TypeError(`Se esperaba un número, se recibió: ${typeof numero}`);
    }
    if (isNaN(numero)) {
        throw new Error('El valor no es un número válido');
    }
    return numero;
}

// 15. Documentar los errores que puede lanzar una función
/**
 * Divide dos números
 * @param {number} a - Dividendo
 * @param {number} b - Divisor
 * @returns {number} Resultado de la división
 * @throws {Error} Si b es 0
 * @throws {TypeError} Si a o b no son números
 */
function dividirConDocumentacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Ambos parámetros deben ser números');
    }
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

// === RESUMEN ===

console.log(`
=== RESUMEN THROW ===
✓ throw: lanzar errores manualmente
✓ Error: clase base para errores personalizados
✓ TypeError: error de tipo de dato
✓ RangeError: error de rango
✓ ValidationError: error de validación personalizado
✓ ApiError: error de API personalizado
✓ RetryError: error con información de reintento
✓ EstadoError: error con información de estado
✓ Contexto: incluir información útil en errores
✓ Documentación: documentar errores que puede lanzar una función
✓ Tipos específicos: usar tipos específicos de errores
✓ Información: incluir información útil en el mensaje de error
✓ Stack trace: información de la pila de llamadas
✓ Compatibilidad: ES3+ (soporte universal)
`);
