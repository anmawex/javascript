// OPTIONAL CHAINING (?.) - ES2020
// Acceso seguro a propiedades anidadas

// === PROBLEMA SIN OPTIONAL CHAINING ===

// 1. Acceso anidado tradicional (peligroso)
let usuario = {
    nombre: "Ana",
    perfil: {
        edad: 28,
        direccion: {
            ciudad: "Madrid",
            pais: "España"
        }
    }
};

// Acceso seguro tradicional
let ciudad = usuario && usuario.perfil && usuario.perfil.direccion && usuario.perfil.direccion.ciudad;
console.log(ciudad); // "Madrid"

// 2. Problema con propiedades inexistentes
let usuarioIncompleto = {
    nombre: "Juan",
    perfil: {
        edad: 30
        // No tiene dirección
    }
};

// Esto causaría error sin verificación
// let ciudadInexistente = usuarioIncompleto.perfil.direccion.ciudad; // TypeError

// Acceso seguro tradicional
let ciudadSegura = usuarioIncompleto && usuarioIncompleto.perfil && usuarioIncompleto.perfil.direccion && usuarioIncompleto.perfil.direccion.ciudad;
console.log(ciudadSegura); // undefined

// === OPTIONAL CHAINING BÁSICO ===

// 3. Optional chaining con objetos
let usuario2 = {
    nombre: "María",
    perfil: {
        edad: 25,
        // dirección no existe
    }
};

// Con optional chaining
let ciudad2 = usuario2?.perfil?.direccion?.ciudad;
console.log(ciudad2); // undefined (no hay error)

// 4. Optional chaining con arrays
let productos = [
    { id: 1, nombre: "Laptop", especificaciones: { ram: "16GB" } },
    { id: 2, nombre: "Mouse" } // Sin especificaciones
];

let ramPrimerProducto = productos[0]?.especificaciones?.ram;
console.log(ramPrimerProducto); // "16GB"

let ramSegundoProducto = productos[1]?.especificaciones?.ram;
console.log(ramSegundoProducto); // undefined

// 5. Optional chaining con índices de array
let datos = [
    { valor: 10 },
    null,
    undefined,
    { valor: 30 }
];

let valor1 = datos[0]?.valor; // 10
let valor2 = datos[1]?.valor; // undefined
let valor3 = datos[2]?.valor; // undefined
let valor4 = datos[3]?.valor; // 30
let valor5 = datos[4]?.valor; // undefined (índice no existe)

console.log(valor1, valor2, valor3, valor4, valor5);

// === OPTIONAL CHAINING AVANZADO ===

// 6. Optional chaining con funciones
let api = {
    usuario: {
        obtener: function(id) {
            return id === 1 ? { nombre: "Ana" } : null;
        },
        // eliminar no existe
    }
};

// Llamada segura a método
let resultado = api.usuario?.obtener?.(1);
console.log(resultado); // { nombre: "Ana" }

let resultado2 = api.usuario?.eliminar?.(1);
console.log(resultado2); // undefined (el método no existe)

// 7. Optional chaining con expresiones complejas
let configuracion = {
    app: {
        api: {
            endpoints: {
                usuarios: "/api/users",
                productos: "/api/products"
            }
        }
    }
};

// Acceso a endpoint dinámicamente
let tipo = "usuarios";
let endpoint = configuracion?.app?.api?.endpoints?.[tipo];
console.log(endpoint); // "/api/users"

// 8. Optional chaining con operadores de asignación
let obj = {};
obj?.propiedad?.subpropiedad = "valor"; // No asigna nada porque la cadena es undefined

console.log(obj); // {}

// === COMBINACIÓN CON OTROS OPERADORES ===

// 9. Optional chaining + nullish coalescing (??)
let usuario3 = {
    nombre: "Carlos",
    perfil: {
        // edad no existe
    }
};

let edad = usuario3?.perfil?.edad ?? "No especificada";
console.log(edad); // "No especificada"

// 10. Optional chaining + operador lógico OR (||)
let nombre = usuario3?.perfil?.nombre || "Anónimo";
console.log(nombre); // "Anónimo" (porque perfil.nombre no existe)

// 11. Diferencia entre ?? y ||
let valorNulo = null;
let valorCero = 0;
let valorVacio = "";
let valorFalso = false;

// Con ?? (solo actúa con null/undefined)
console.log(valorNulo ?? "defecto"); // "defecto"
console.log(valorCero ?? "defecto"); // 0
console.log(valorVacio ?? "defecto"); // ""
console.log(valorFalso ?? "defecto"); // false

// Con || (actúa con todos los falsy)
console.log(valorNulo || "defecto"); // "defecto"
console.log(valorCero || "defecto"); // "defecto"
console.log(valorVacio || "defecto"); // "defecto"
console.log(valorFalso || "defecto"); // "defecto"

// === APLICACIONES PRÁCTICAS ===

// 12. API responses
function procesarRespuestaAPI(respuesta) {
    const usuario = respuesta?.data?.usuario;
    const nombre = usuario?.nombre ?? "Usuario desconocido";
    const email = usuario?.contacto?.email ?? "Sin email";
    const telefono = usuario?.contacto?.telefono ?? "Sin teléfono";
    
    return { nombre, email, telefono };
}

let respuestaAPI = {
    data: {
        usuario: {
            nombre: "Ana",
            contacto: {
                email: "ana@ejemplo.com"
                // teléfono no existe
            }
        }
    }
};

console.log(procesarRespuestaAPI(respuestaAPI));
// { nombre: "Ana", email: "ana@ejemplo.com", telefono: "Sin teléfono" }

// 13. Configuración de componentes
function getConfiguracion(componente, config) {
    return {
        visible: config?.componentes?.[componente]?.visible ?? true,
        color: config?.componentes?.[componente]?.estilos?.color ?? "blue",
        tamaño: config?.componentes?.[componente]?.estilos?.tamaño ?? "medium"
    };
}

let configApp = {
    componentes: {
        boton: {
            visible: true,
            estilos: {
                color: "red"
                // tamaño no existe
            }
        }
        // input no existe
    }
};

console.log(getConfiguracion("boton", configApp));
// { visible: true, color: "red", tamaño: "medium" }

console.log(getConfiguracion("input", configApp));
// { visible: true, color: "blue", tamaño: "medium" }

// 14. Validación de formularios
function validarCampo(datos, campo) {
    const valor = datos?.[campo];
    const reglas = datos?.validacion?.[campo];
    
    if (!valor || !reglas) return { valido: false, error: "Campo no encontrado" };
    
    const requerido = reglas?.requerido ?? false;
    const longitudMinima = reglas?.longitudMinima ?? 0;
    
    if (requerido && !valor.trim()) {
        return { valido: false, error: "Campo requerido" };
    }
    
    if (valor.length < longitudMinima) {
        return { valido: false, error: `Mínimo ${longitudMinima} caracteres` };
    }
    
    return { valido: true };
}

let formData = {
    nombre: "Ana",
    email: "ana@ejemplo.com",
    validacion: {
        nombre: {
            requerido: true,
            longitudMinima: 2
        },
        email: {
            requerido: true,
            longitudMinima: 5
        }
    }
};

console.log(validarCampo(formData, "nombre")); // { valido: true }
console.log(validarCampo(formData, "telefono")); // { valido: false, error: "Campo no encontrado" }

// 15. Navegación segura en objetos complejos
function obtenerRutaSegura(objeto, ruta, defecto = null) {
    return ruta.split('.').reduce((actual, clave) => {
        return actual?.[clave] ?? defecto;
    }, objeto);
}

let objetoComplejo = {
    nivel1: {
        nivel2: {
            nivel3: {
                valor: "encontrado"
            }
        }
    }
};

console.log(obtenerRutaSegura(objetoComplejo, "nivel1.nivel2.nivel3.valor")); // "encontrado"
console.log(obtenerRutaSegura(objetoComplejo, "nivel1.nivel2.noexiste.valor")); // null
console.log(obtenerRutaSegura(objetoComplejo, "nivel1.noexiste.nivel3.valor", "defecto")); // "defecto"

// === BUENAS PRÁCTICAS ===

// 16. Cuándo usar optional chaining
// ✓ Para acceso a propiedades que pueden no existir
// ✓ Con respuestas de API externas
// ✓ En configuración opcional
// ✓ Para validar datos de entrada

// 17. Cuándo NO usar optional chaining
// ✗ Cuando sabes que la propiedad debe existir
// ✗ Para ocultar errores reales que deberían ser manejados
// ✗ En performance crítico (tiene un pequeño overhead)

// 18. Combinación con try-catch
function obtenerDatosSeguros(api, id) {
    try {
        return api?.usuarios?.obtener?.(id) ?? null;
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        return null;
    }
}

// 19. Optional chaining en React (ejemplo conceptual)
/*
function UserProfile({ user }) {
    return (
        <div>
            <h1>{user?.profile?.name ?? 'Guest'}</h1>
            <p>{user?.profile?.email ?? 'No email'}</p>
            <p>{user?.address?.city ?? 'No city'}</p>
        </div>
    );
}
*/

// 20. Resumen
console.log(`
=== RESUMEN OPTIONAL CHAINING ===
✓ Operador: ?. para acceso seguro
✓ Objetos: obj?.prop?.subprop
✓ Arrays: arr?.[0]?.prop
✓ Funciones: obj?.method?.()
✓ Detiene la ejecución si encuentra null/undefined
✓ Retorna undefined si la cadena se rompe
✓ Perfecto con nullish coalescing (??)
✓ Evita TypeError en acceso anidado
✓ Más legible que encadenados de &&
✓ Fundamental para JavaScript moderno
`);
