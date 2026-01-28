// EJERCICIOS PRÁCTICOS - ES6 FEATURES
// Template Literals, Destructuring, Spread/Rest, Optional Chaining

// === EJERCICIO 1: Template Literals ===
// Convierte las siguientes concatenaciones a template literals

// 1.1 Concatenación tradicional
function saludarTradicional(nombre, edad) {
    return "Hola, me llamo " + nombre + " y tengo " + edad + " años.";
}

// Convierte a template literal:
function saludarModerno(nombre, edad) {
    // Tu código aquí
}

// 1.2 HTML tradicional
function crearCardTradicional(usuario) {
    return "<div class='card'>" +
           "<h3>" + usuario.nombre + "</h3>" +
           "<p>Email: " + usuario.email + "</p>" +
           "<p>Edad: " + usuario.edad + "</p>" +
           "</div>";
}

// Convierte a template literal:
function crearCardModerno(usuario) {
    // Tu código aquí
}

// === EJERCICIO 2: Destructuring ===
// Usa destructuring para extraer valores

// 2.1 Array destructuring
let colores = ["rojo", "verde", "azul", "amarillo"];

// Extrae usando destructuring:
// - primerColor: "rojo"
// - segundoColor: "verde"  
// - restoColores: ["azul", "amarillo"]

// Tu código aquí:

// 2.2 Object destructuring
let producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    especificaciones: {
        ram: "16GB",
        almacenamiento: "512GB SSD"
    }
};

// Extrae usando destructuring:
// - nombreProducto: "Laptop"
// - precio: 999.99
// - ram: "16GB"
// - almacenamiento: "512GB SSD"

// Tu código aquí:

// 2.3 Destructuring en parámetros de función
function mostrarUsuario(usuario) {
    // Convierte para usar destructuring en parámetros
    // Extrae nombre, edad, ciudad (con valor por defecto "No especificada")
    // Tu código aquí
}

// === EJERCICIO 3: Spread y Rest ===
// Usa spread y rest operators

// 3.1 Combinar arrays con spread
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Combina los arrays y añade 0 al principio y 7 al final
// Tu código aquí:

// 3.2 Clonar objeto con spread
let original = { a: 1, b: 2, c: 3 };

// Crea una copia y modifica la copia
// copia.a = 10
// copia.d = 4
// Tu código aquí:

// 3.3 Rest parameters
function sumarNumeros() {
    // Convierte para usar rest parameters
    // Debe aceptar cualquier cantidad de números y sumarlos
    // Tu código aquí
}

// 3.4 Destructuring con rest
let datos = [1, 2, 3, 4, 5];

// Extrae el primer y último elemento, el resto en un array
// Tu código aquí:

// === EJERCICIO 4: Optional Chaining ===
// Usa optional chaining para acceso seguro

// 4.1 Acceso anidado seguro
let usuario = {
    nombre: "Ana",
    perfil: {
        edad: 28
        // dirección no existe
    }
};

// Obtén la ciudad del usuario de forma segura
// Si no existe, retorna "Ciudad no especificada"
// Tu código aquí:

// 4.2 API response
let apiResponse = {
    data: {
        usuarios: [
            { id: 1, nombre: "Juan", contacto: { email: "juan@ejemplo.com" } },
            { id: 2, nombre: "María" } // Sin contacto
        ]
    }
};

// Obtén el email del segundo usuario de forma segura
// Tu código aquí:

// 4.3 Llamada a método seguro
let objeto = {
    metodo: function() {
        return "Método ejecutado";
    }
    // metodo2 no existe
};

// Llama a metodo y metodo2 de forma segura
// Tu código aquí:

// === EJERCICIO 5: Combinación de Features ===
// Combina múltiples características ES6+

// 5.1 Función que procesa usuarios
function procesarUsuarios(usuarios) {
    // Usa destructuring, spread, template literals y optional chaining
    // Retorna un array con strings formateados:
    // "ID: X, Nombre: Y, Email: Z o 'Sin email'"
    // Tu código aquí
}

let usuarios = [
    { id: 1, nombre: "Ana", contacto: { email: "ana@ejemplo.com" } },
    { id: 2, nombre: "Juan" },
    { id: 3, nombre: "María", contacto: { email: "maria@ejemplo.com" } }
];

// 5.2 Actualización inmutable
function actualizarProducto(producto, actualizaciones) {
    // Usa spread para crear una copia actualizada
    // Si actualizaciones tiene especificaciones, combínalas con las existentes
    // Tu código aquí
}

let productoBase = {
    id: 1,
    nombre: "Laptop",
    precio: 999,
    especificaciones: {
        ram: "8GB",
        almacenamiento: "256GB"
    }
};

let actualizaciones = {
    precio: 899,
    especificaciones: {
        ram: "16GB"
        // almacenamiento se mantiene
    }
};

// 5.3 Validación con optional chaining
function validarDatos(datos) {
    // Usa optional chaining y nullish coalescing
    // Retorna un objeto con validaciones:
    // { nombreValido: boolean, emailValido: boolean, telefonoValido: boolean }
    // Considera que un campo es válido si existe y no está vacío
    // Tu código aquí
}

let datosPrueba = {
    nombre: "Juan",
    contacto: {
        email: "juan@ejemplo.com"
        // teléfono no existe
    }
};

// === EJERCICIO 6: Desafío Final ===
// Crea un sistema de gestión de productos

class GestorProductos {
    constructor() {
        this.productos = [];
        this.siguienteId = 1;
    }

    // Usa spread/rest/destructuring/template literals
    agregar(productoData) {
        // Tu código aquí:
        // - Usa destructuring para extraer nombre, precio, categoria
        // - Usa valores por defecto si no se proporcionan
        // - Usa spread para crear el producto completo
        // - Retorna el producto agregado
    }

    obtener(id) {
        // Tu código aquí:
        // - Usa find y optional chaining
        // - Retorna el producto o null
    }

    actualizar(id, actualizaciones) {
        // Tu código aquí:
        // - Usa spread para actualizar inmutablemente
        // - Usa destructuring si es necesario
        // - Retorna el producto actualizado o null
    }

    listar(categoria) {
        // Tu código aquí:
        // - Usa filter con optional chaining
        // - Usa template literals para formatear
        // - Retorna array de strings formateados
    }
}

// === PRUEBAS ===
// Descomienta para probar tus soluciones

/*
// Prueba Ejercicio 1
console.log(saludarModerno("Ana", 25));
console.log(crearCardModerno({ nombre: "Juan", email: "juan@ejemplo.com", edad: 30 }));

// Prueba Ejercicio 2
console.log(primerColor, segundoColor, restoColores);
console.log(nombreProducto, precio, ram, almacenamiento);
mostrarUsuario({ nombre: "María", edad: 28, ciudad: "Madrid" });

// Prueba Ejercicio 3
console.log(arrayCombinado);
console.log(copia);
console.log(sumarNumeros(1, 2, 3, 4, 5));
console.log(primero, ultimo, medio);

// Prueba Ejercicio 4
console.log(ciudadUsuario);
console.log(emailSegundoUsuario);
console.log(resultadoMetodo1, resultadoMetodo2);

// Prueba Ejercicio 5
console.log(procesarUsuarios(usuarios));
console.log(actualizarProducto(productoBase, actualizaciones));
console.log(validarDatos(datosPrueba));

// Prueba Ejercicio 6
const gestor = new GestorProductos();
const prod1 = gestor.agregar({ nombre: "Laptop", precio: 999, categoria: "Electrónica" });
const prod2 = gestor.agregar({ nombre: "Mouse", categoria: "Accesorios" }); // sin precio
console.log(gestor.obtener(1));
console.log(gestor.actualizar(1, { precio: 899 }));
console.log(gestor.listar("Electrónica"));
*/

// === RESPUESTAS Y SOLUCIONES ===
// Descomenta la siguiente sección para ver las soluciones

/*
// SOLUCIÓN EJERCICIO 1:
function saludarModerno(nombre, edad) {
    return `Hola, me llamo ${nombre} y tengo ${edad} años.`;
}

function crearCardModerno(usuario) {
    return `
        <div class="card">
            <h3>${usuario.nombre}</h3>
            <p>Email: ${usuario.email}</p>
            <p>Edad: ${usuario.edad}</p>
        </div>
    `;
}

// SOLUCIÓN EJERCICIO 2:
let [primerColor, segundoColor, ...restoColores] = colores;

let { 
    nombre: nombreProducto, 
    precio, 
    especificaciones: { ram, almacenamiento } 
} = producto;

function mostrarUsuario({ nombre, edad, ciudad = "No especificada" }) {
    console.log(`${nombre}, ${edad} años, de ${ciudad}`);
}

// SOLUCIÓN EJERCICIO 3:
let arrayCombinado = [0, ...array1, ...array2, 7];

let copia = { ...original, a: 10, d: 4 };

function sumarNumeros(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

let [primero, ...medio, ultimo] = datos;

// SOLUCIÓN EJERCICIO 4:
let ciudadUsuario = usuario?.perfil?.direccion?.ciudad ?? "Ciudad no especificada";

let emailSegundoUsuario = apiResponse?.data?.usuarios?.[1]?.contacto?.email;

let resultadoMetodo1 = objeto?.metodo?.();
let resultadoMetodo2 = objeto?.metodo2?.();

// SOLUCIÓN EJERCICIO 5:
function procesarUsuarios(usuarios) {
    return usuarios.map(({ id, nombre, contacto: { email } = {} }) => 
        `ID: ${id}, Nombre: ${nombre}, Email: ${email || 'Sin email'}`
    );
}

function actualizarProducto(producto, actualizaciones) {
    return {
        ...producto,
        ...actualizaciones,
        especificaciones: {
            ...producto.especificaciones,
            ...actualizaciones.especificaciones
        }
    };
}

function validarDatos(datos) {
    return {
        nombreValido: !!datos?.nombre?.trim(),
        emailValido: !!datos?.contacto?.email?.trim(),
        telefonoValido: !!datos?.contacto?.telefono?.trim()
    };
}

// SOLUCIÓN EJERCICIO 6:
class GestorProductos {
    constructor() {
        this.productos = [];
        this.siguienteId = 1;
    }

    agregar({ nombre, precio = 0, categoria = "General" }) {
        const producto = {
            id: this.siguienteId++,
            nombre,
            precio,
            categoria,
            creado: new Date()
        };
        this.productos.push(producto);
        return producto;
    }

    obtener(id) {
        return this.productos.find(p => p.id === id) ?? null;
    }

    actualizar(id, actualizaciones) {
        const index = this.productos.findIndex(p => p.id === id);
        if (index === -1) return null;
        
        this.productos[index] = {
            ...this.productos[index],
            ...actualizaciones,
            especificaciones: {
                ...this.productos[index].especificaciones,
                ...actualizaciones.especificaciones
            }
        };
        return this.productos[index];
    }

    listar(categoria) {
        return this.productos
            .filter(p => p.categoria === categoria)
            .map(({ id, nombre, precio }) => 
                `#${id}: ${nombre} - $${precio}`
            );
    }
}
*/
