// TEMPLATE LITERALS (TEMPLATE STRINGS) - ES6
// Cadenas de texto con interpolación y multilínea

// === SINTAXIS BÁSICA ===

// 1. Template literals con backticks (`) en lugar de comillas
let nombre = "Juan";
let edad = 25;

// Forma tradicional (concatenación)
let mensajeTradicional = "Hola, me llamo " + nombre + " y tengo " + edad + " años.";

// Con template literals
let mensajeModern = `Hola, me llamo ${nombre} y tengo ${edad} años.`;

console.log(mensajeTradicional);
console.log(mensajeModern);

// === INTERPOLACIÓN DE EXPRESIONES ===

// 2. Interpolación de variables y expresiones
let producto = "Laptop";
let precio = 999.99;
let iva = 0.21;
let precioFinal = precio * (1 + iva);

let descripcion = `Producto: ${producto}
Precio base: $${precio}
IVA (21%): $${precio * iva}
Precio final: $${precioFinal.toFixed(2)}`;

console.log(descripcion);

// 3. Expresiones complejas
let x = 10, y = 5;
console.log(`Suma: ${x + y}`); // 15
console.log(`Multiplicación: ${x * y}`); // 50
console.log(`¿Es mayor? ${x > y ? 'Sí' : 'No'}`); // "Sí"
console.log(`Raíz cuadrada: ${Math.sqrt(x)}`); // 3.1622776601683795

// 4. Llamadas a funciones
function formatearNombre(nombre) {
	return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

let nombreCompleto = `Nombre formateado: ${formatearNombre("maría")}`;
console.log(nombreCompleto); // "Nombre formateado: María"

// === STRINGS MULTILÍNEA ===

// 5. Multilínea sin necesidad de \n
let htmlTradicional = "<div>\n" +
    "    <h1>Título</h1>\n" +
    "    <p>Contenido del párrafo</p>\n" +
    "</div>";

let htmlModern = `
<div>
    <h1>Título</h1>
    <p>Contenido del párrafo</p>
</div>
`;

console.log(htmlTradicional);
console.log(htmlModern);

// 6. Preservación de espacios y sangría
let poema = `
    En un lugar de la Mancha,
    de cuyo nombre no quiero acordarme,
    no ha mucho tiempo que vivía
    un hidalgo de los de lanza...
`;

console.log(poema);

// === EXPRESIONES EN TEMPLATE LITERALS ===

// 7. Operaciones aritméticas
let a = 15, b = 3;
console.log(`Operaciones con ${a} y ${b}:
Suma: ${a + b}
Resta: ${a - b}
Multiplicación: ${a * b}
División: ${a / b}
Módulo: ${a % b}`);

// 8. Expresiones condicionales
let puntuacion = 85;
let evaluacion = `Tu puntuación es ${puntuacion}. ${
    puntuacion >= 90 ? 'Excelente' :
    puntuacion >= 70 ? 'Bueno' :
    puntuacion >= 50 ? 'Regular' : 'Necesitas mejorar'
}`;

console.log(evaluacion);

// 9. Acceso a propiedades de objetos
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Ingeniera"
};

let presentacion = `${persona.nombre} es ${persona.profesion} de ${persona.ciudad} y tiene ${persona.edad} años.`;
console.log(presentacion);

// === TEMPLATE LITERALS ANIDADOS ===

// 10. Template literals dentro de template literals
function crearTarjeta(usuario) {
    return `
        <div class="tarjeta">
            <h3>${usuario.nombre}</h3>
            <p>Email: ${usuario.email}</p>
            <p>Edad: ${usuario.edad}</p>
            <div class="estado">
                ${usuario.activo ? 
                    `<span class="activo">✓ Activo</span>` : 
                    `<span class="inactivo">✗ Inactivo</span>`
                }
            </div>
        </div>
    `;
}

let usuario = {
    nombre: "Carlos",
    email: "carlos@ejemplo.com",
    edad: 28,
    activo: true
};

console.log(crearTarjeta(usuario));

// === FUNCIONES CON TEMPLATE LITERALS ===

// 11. Funciones que retornan template literals
function generarTabla(datos) {
    return `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                ${datos.map(item => `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.nombre}</td>
                        <td>$${item.precio.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

let productos = [
    { id: 1, nombre: "Laptop", precio: 999.99 },
    { id: 2, nombre: "Mouse", precio: 29.99 },
    { id: 3, nombre: "Teclado", precio: 79.99 }
];

console.log(generarTabla(productos));

// === TAGGED TEMPLATES ===

// 12. Introducción a tagged templates
function etiquetar(cadenas, ...valores) {
    console.log("Cadenas:", cadenas);
    console.log("Valores:", valores);
    return "Procesado con tagged template";
}

let resultado = etiquetar`Hola ${nombre}, tienes ${edad} años`;
console.log(resultado);

// 13. Tagged template personalizado
function mayusculas(cadenas, ...valores) {
    let resultado = '';
    
    for (let i = 0; i < cadenas.length; i++) {
        resultado += cadenas[i];
        if (i < valores.length) {
            resultado += valores[i].toString().toUpperCase();
        }
    }
    
    return resultado;
}

let texto = mayusculas`hola ${nombre}, bienvenido a ${"javascript"}`;
console.log(texto); // "hola JUAN, bienvenido a JAVASCRIPT"

// 14. Tagged template para escaping HTML
function escaparHTML(cadenas, ...valores) {
    let resultado = '';
    
    for (let i = 0; i < cadenas.length; i++) {
        resultado += cadenas[i];
        if (i < valores.length) {
            let valor = valores[i];
            if (typeof valor === 'string') {
                valor = valor
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
            }
            resultado += valor;
        }
    }
    
    return resultado;
}

let inputUsuario = "<script>alert('hackeado')</script>";
let seguro = escaparHTML`Entrada del usuario: ${inputUsuario}`;
console.log(seguro); // "Entrada del usuario: &lt;script&gt;alert('hackeado')&lt;/script&gt;"

// === APLICACIONES PRÁCTICAS ===

// 15. Generación de URLs
function crearURL(base, params) {
    const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    
    return `${base}?${queryString}`;
}

let url = crearURL`https://api.example.com/users`({
    page: 1,
    limit: 10,
    search: "juan pérez"
});

console.log(url);

// 16. Formateo de fechas
function formatearFecha(fecha) {
    const opciones = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return fecha.toLocaleDateString('es-ES', opciones);
}

let fechaActual = new Date();
let mensajeFecha = `Fecha actual: ${formatearFecha(fechaActual)}`;
console.log(mensajeFecha);

// 17. Logs y debugging
function log(mensaje, datos = {}) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${mensaje}`, datos);
}

log`Usuario inició sesión`({ usuario: "juan", ip: "192.168.1.1" });

// === VENTAJAS Y BUENAS PRÁCTICAS ===

// 18. Ventajas sobre concatenación tradicional
// ✓ Más legibles y mantenibles
// ✓ Soporte nativo para multilínea
// ✓ Interpolación de expresiones
// ✓ Menos propenso a errores
// ✓ Mejor rendimiento en algunos casos

// 19. Buenas prácticas
// ✓ Usar para strings que contienen variables
// ✓ Preferir sobre concatenación con +
// ✓ Cuidado con inyección de código (usar escaping)
// ✓ Usar tagged templates para procesamiento personalizado

// 20. Resumen
console.log(`
=== RESUMEN TEMPLATE LITERALS ===
✓ Sintaxis: backticks (\`) en lugar de comillas
✓ Interpolación: ${expresion}
✓ Multilínea: sin necesidad de \\n
✓ Expresiones: variables, operaciones, funciones
✓ Tagged templates: procesamiento personalizado
✓ Más legibles y mantenibles
✓ Soporte nativo en ES6+
✓ Ideales para HTML, URLs, mensajes, etc.
`);
