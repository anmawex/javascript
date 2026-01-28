// DESTRUCTURING - ES6
// Extracción de valores de arrays y objetos de forma concisa

// === ARRAY DESTRUCTURING ===

// 1. Destructuring básico de arrays
let colores = ["rojo", "verde", "azul"];
let [color1, color2, color3] = colores;

console.log(color1); // "rojo"
console.log(color2); // "verde"
console.log(color3); // "azul"

// 2. Ignorar elementos
let numeros = [1, 2, 3, 4, 5];
let [primero, , tercero, , quinto] = numeros;

console.log(primero); // 1
console.log(tercero); // 3
console.log(quinto); // 5

// 3. Valores por defecto
let datos = ["Juan", 30];
let [nombreDatos, edadDatos, ciudadDatos = "No especificada"] = datos;

console.log(nombreDatos); // "Juan"
console.log(edadDatos); // 30
console.log(ciudadDatos); // "No especificada"

// 4. Rest operator con arrays
let puntos = [10, 20, 30, 40, 50];
let [primerPunto, ...restoPuntos] = puntos;

console.log(primerPunto); // 10
console.log(restoPuntos); // [20, 30, 40, 50]

// 5. Intercambio de variables sin variable temporal
let a = "primero";
let b = "segundo";

[a, b] = [b, a];

console.log(a); // "segundo"
console.log(b); // "primero"

// 6. Destructuring de arrays anidados
let matriz = [[1, 2], [3, 4], [5, 6]];
let [[primeraFila1, primeraFila2], [segundaFila1, segundaFila2]] = matriz;

console.log(primeraFila1, primeraFila2); // 1 2
console.log(segundaFila1, segundaFila2); // 3 4

// 7. Destructuring en funciones
function procesarCoordenadas([x, y]) {
    return `Coordenadas: x=${x}, y=${y}`;
}

console.log(procesarCoordenadas([10, 20])); // "Coordenadas: x=10, y=20"

// 8. Valores por defecto en parámetros de función
function crearUsuario([nombre = "Anónimo", edad = 0] = []) {
    return { nombre, edad };
}

console.log(crearUsuario(["María", 25])); // { nombre: "María", edad: 25 }
console.log(crearUsuario([])); // { nombre: "Anónimo", edad: 0 }
console.log(crearUsuario()); // { nombre: "Anónimo", edad: 0 }

// === OBJECT DESTRUCTURING ===

// 9. Destructuring básico de objetos
let persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Barcelona"
};

let { nombre: nombrePersona, edad: edadPersona, ciudad: ciudadPersona } = persona;

console.log(nombrePersona); // "Ana"
console.log(edadPersona); // 28
console.log(ciudadPersona); // "Barcelona"

// 10. Renombrar variables
let usuario = {
    nombreUsuario: "juanperez",
    email: "juan@ejemplo.com",
    rol: "admin"
};

let { nombreUsuario: username, email: correo, rol: role } = usuario;

console.log(username); // "juanperez"
console.log(correo); // "juan@ejemplo.com"
console.log(role); // "admin"

// 11. Valores por defecto en objetos
let producto = {
    nombre: "Laptop",
    precio: 999.99
};

let { nombre: nombreProd, precio, categoria = "General", stock = 0 } = producto;

console.log(nombreProd); // "Laptop"
console.log(precio); // 999.99
console.log(categoria); // "General" (valor por defecto)
console.log(stock); // 0 (valor por defecto)

// 12. Destructuring de objetos anidados
let estudiante = {
    info: {
        nombre: "Carlos",
        edad: 22
    },
    academico: {
        carrera: "Ingeniería",
        semestre: 6
    }
};

let { 
    info: { nombre: nombreEst, edad: edadEst },
    academico: { carrera, semestre }
} = estudiante;

console.log(nombreEst, edadEst); // "Carlos" 22
console.log(carrera, semestre); // "Ingeniería" 6

// 13. Rest operator con objetos
let configuracion = {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true,
    autoguardado: true,
    zoom: 1.2
};

let { tema, idioma, ...restoConfig } = configuracion;

console.log(tema); // "oscuro"
console.log(idioma); // "es"
console.log(restoConfig); // { notificaciones: true, autoguardado: true, zoom: 1.2 }

// 14. Destructuring en parámetros de función
function mostrarInfo({ nombre: nombreParam, edad: edadParam, ciudad = "No especificada" }) {
    console.log(`${nombreParam}, ${edadParam} años, de ${ciudad}`);
}

mostrarInfo({ nombre: "Laura", edad: 30, ciudad: "Madrid" });
mostrarInfo({ nombre: "Pedro", edad: 25 }); // Usa valor por defecto para ciudad

// 15. Destructuring con objetos existentes
let opciones = {
    metodo: "GET",
    headers: {
        "Content-Type": "application/json"
    }
};

let { metodo, headers: { "Content-Type": contentType } } = opciones;

console.log(metodo); // "GET"
console.log(contentType); // "application/json"

// === COMBINACIÓN AVANZADA ===

// 16. Destructuring mixto (arrays y objetos)
let datosMixtos = [
    { id: 1, nombre: "Producto A", precio: 100 },
    { id: 2, nombre: "Producto B", precio: 200 }
];

let [
    { id: id1, nombre: nombre1 },
    { id: id2, nombre: nombre2 }
] = datosMixtos;

console.log(id1, nombre1); // 1 "Producto A"
console.log(id2, nombre2); // 2 "Producto B"

// 17. Destructuring en bucles
let usuarios = [
    { nombre: "Ana", edad: 28 },
    { nombre: "Juan", edad: 32 },
    { nombre: "María", edad: 25 }
];

for (let { nombre, edad } of usuarios) {
    console.log(`${nombre} tiene ${edad} años`);
}

// 18. Destructuring con métodos de array
let productos2 = [
    { nombre: "Laptop", precio: 999, disponible: true },
    { nombre: "Mouse", precio: 29, disponible: false },
    { nombre: "Teclado", precio: 79, disponible: true }
];

let productosDisponibles = productos2
    .filter(({ disponible }) => disponible)
    .map(({ nombre, precio }) => ({ nombre, precio }));

console.log(productosDisponibles);
// [{ nombre: "Laptop", precio: 999 }, { nombre: "Teclado", precio: 79 }]

// === APLICACIONES PRÁCTICAS ===

// 19. Configuración de componentes
function crearBoton(config = {}) {
    const {
        texto = "Botón",
        color = "azul",
        tamaño = "mediano",
        onClick = () => console.log("Clic en botón")
    } = config;

    return {
        texto,
        color,
        tamaño,
        onClick,
        render: () => `<button class="${color} ${tamaño}">${texto}</button>`
    };
}

let boton1 = crearBoton({ texto: "Aceptar", color: "verde" });
let boton2 = crearBoton({ texto: "Cancelar", tamaño: "grande" });

console.log(boton1.render());
console.log(boton2.render());

// 20. API responses
async function obtenerUsuario(id) {
    // Simulación de API
    const response = {
        data: {
            id: 1,
            nombre: "Juan Pérez",
            email: "juan@ejemplo.com",
            perfil: {
                rol: "usuario",
                permisos: ["leer", "escribir"]
            }
        },
        status: 200
    };

    const { 
        data: { 
            nombre, 
            email, 
            perfil: { rol, permisos } 
        } 
    } = response;

    return { nombre, email, rol, permisos };
}

// obtenerUsuario(1).then(console.log);

// 21. Clonación y combinación de objetos
function actualizarUsuario(usuarioActual, actualizaciones) {
    const { id, ...restoActual } = usuarioActual;
    const usuarioActualizado = { ...restoActual, ...actualizaciones };
    return { id, ...usuarioActualizado };
}

let usuarioOriginal = { id: 1, nombre: "Ana", edad: 28 };
let actualizaciones = { edad: 29, ciudad: "Madrid" };

let usuarioActualizado = actualizarUsuario(usuarioOriginal, actualizaciones);
console.log(usuarioActualizado);
// { id: 1, nombre: "Ana", edad: 29, ciudad: "Madrid" }

// === BUENAS PRÁCTICAS ===

// 22. Usar destructuring para valores múltiples
function obtenerCoordenadas() {
    return [10, 20, 30];
}

// En lugar de:
// let coords = obtenerCoordenadas();
// let x = coords[0];
// let y = coords[1];
// let z = coords[2];

// Usar:
let [x, y, z] = obtenerCoordenadas();

// 23. Valores por defecto sensatos
function procesarDatos(datos = {}) {
    const {
        pagina = 1,
        limite = 10,
        orden = 'asc',
        filtros = {}
    } = datos;

    return { pagina, limite, orden, filtros };
}

// 24. Evitar destructuring excesivo
// ✓ Bueno: extraer solo lo necesario
const { nombre, email } = usuario;

// ✗ Evitar: extraer demasiadas propiedades anidadas
// const { a: { b: { c: { d: { e } } } } } = objeto;

// 25. Resumen
console.log(`
=== RESUMEN DESTRUCTURING ===
✓ Arrays: [var1, var2] = array
✓ Objetos: { prop1, prop2 } = objeto
✓ Renombrar: { prop: nuevoNombre } = objeto
✓ Valores por defecto: { prop = valor } = objeto
✓ Rest operator: [...rest] = array, {...rest} = objeto
✓ Anidado: { prop: { subProp } } = objeto
✓ En funciones: function({ prop }) {}
✓ Intercambio: [a, b] = [b, a]
✓ Más legible y conciso que acceso tradicional
✓ Fundamental para código ES6+ moderno
`);
