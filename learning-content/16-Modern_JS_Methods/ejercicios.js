// EJERCICIOS PRÁCTICOS - MODERN JS METHODS
// Array methods, String methods, Object methods

// === EJERCICIO 1: ARRAY METHODS ===

// 1.1 Trabajar con arrays de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Tu código aquí:
// - Obtener números pares con filter
// - Duplicar cada número con map
// - Sumar todos los números con reduce
// - Encontrar el primer número mayor que 5 con find
// - Verificar si todos son positivos con every
// - Verificar si hay algún número mayor que 8 con some

// 1.2 Trabajar con array de objetos
const usuarios = [
    { nombre: 'Ana', edad: 25, ciudad: 'Madrid', activo: true },
    { nombre: 'Juan', edad: 30, ciudad: 'Barcelona', activo: false },
    { nombre: 'María', edad: 28, ciudad: 'Valencia', activo: true },
    { nombre: 'Pedro', edad: 35, ciudad: 'Sevilla', activo: true }
];

// Tu código aquí:
// - Filtrar usuarios activos
// - Obtener solo nombres de usuarios activos
// - Agrupar usuarios por ciudad
// - Encontrar el usuario más joven
// - Calcular edad promedio
// - Verificar si todos son mayores de 20

// 1.3 Métodos de transformación
const datos = [1, 2, 3, 4, 5];

// Tu código aquí:
// - Crear array con números al cuadrado
// - Crear array con números pares al cuadrado
// - Aplanar array anidado [[1,2], [3,4], [5,6]]
// - Ordenar array descendente
// - Crear copia del array y revertirlo

// === EJERCICIO 2: STRING METHODS ===

// 2.1 Manipulación básica de strings
const texto = '   JavaScript es un lenguaje de programación   ';

// Tu código aquí:
// - Eliminar espacios al inicio y final
// - Convertir a mayúsculas
// - Verificar si contiene 'JavaScript'
// - Verificar si comienza con 'JavaScript'
// - Verificar si termina con 'programación'
// - Reemplazar 'JavaScript' por 'TypeScript'

// 2.2 Formateo y transformación
const codigo = '42';
const nombre = 'Juan';

// Tu código aquí:
// - Rellenar código con ceros a la izquierda (5 dígitos)
// - Rellenar nombre con espacios a la derecha (10 caracteres)
// - Repetir nombre 3 veces
// - Dividir texto en palabras
// - Unir palabras con guiones

// 2.3 Búsqueda y extracción
const html = '<div class="container"><p>Contenido</p></div>';

// Tu código aquí:
// - Extraer todas las etiquetas HTML
// - Verificar si contiene 'container'
// - Encontrar la posición de 'p>'
// - Reemplazar todas las etiquetas por vacío
// - Contar cuántas etiquetas hay

// === EJERCICIO 3: OBJECT METHODS ===

// 3.1 Conversión y manipulación de objetos
const persona = {
    nombre: 'Ana',
    edad: 25,
    ciudad: 'Madrid',
    email: 'ana@ejemplo.com',
    password: 'secreto123',
    activo: true
};

// Tu código aquí:
// - Obtener solo las claves
// - Obtener solo los valores
// - Obtener pares clave-valor
// - Crear objeto solo con propiedades públicas (sin password)
// - Crear objeto con claves en mayúsculas
// - Verificar si tiene propiedad 'email'

// 3.2 Combinación y copia de objetos
const defaults = {
    tema: 'claro',
    idioma: 'es',
    notificaciones: true,
    autoguardado: false
};

const userConfig = {
    tema: 'oscuro',
    autoguardado: true,
    zoom: 1.2
};

// Tu código aquí:
// - Combinar defaults con userConfig (userConfig tiene prioridad)
// - Crear copia profunda del resultado
// - Verificar si el resultado es extensible
// - Congelar el resultado
// - Intentar modificar propiedad congelada

// 3.3 Agrupación y transformación
const productos = [
    { id: 1, nombre: 'Laptop', categoria: 'Electrónica', precio: 999 },
    { id: 2, nombre: 'Mouse', categoria: 'Accesorios', precio: 29 },
    { id: 3, nombre: 'Teclado', categoria: 'Accesorios', precio: 79 },
    { id: 4, nombre: 'Monitor', categoria: 'Electrónica', precio: 299 }
];

// Tu código aquí:
// - Agrupar productos por categoría
// - Calcular precio total por categoría
// - Encontrar producto más caro
// - Crear objeto con nombres de productos como claves y precios como valores
// - Filtrar productos por precio mayor a 100

// === EJERCICIO 4: COMBINACIÓN DE MÉTODOS ===

// 4.1 Procesamiento de datos complejos
const estudiantes = [
    { nombre: 'Ana', calificaciones: [8, 9, 7, 9], activo: true },
    { nombre: 'Juan', calificaciones: [6, 7, 8, 5], activo: true },
    { nombre: 'María', calificaciones: [9, 9, 8, 10], activo: false },
    { nombre: 'Pedro', calificaciones: [7, 8, 6, 7], activo: true }
];

// Tu código aquí:
// - Calcular promedio de calificaciones por estudiante
// - Filtrar solo estudiantes activos
// - Encontrar estudiante con mejor promedio
// - Agrupar por rango de promedio (excelente: >=9, bueno: >=7, regular: <7)
// - Crear reporte con nombres y promedios

// 4.2 Transformación de datos anidados
const datosAnidados = {
    usuarios: [
        { id: 1, info: { nombre: 'Ana', contacto: { email: 'ana@ejemplo.com', telefono: '123' } } },
        { id: 2, info: { nombre: 'Juan', contacto: { email: 'juan@ejemplo.com', telefono: '456' } } }
    ],
    configuracion: {
        tema: 'oscuro',
        idioma: 'es'
    }
};

// Tu código aquí:
// - Extraer todos los emails
// - Crear array de usuarios con formato simplificado
// - Obtener configuración como array de pares
// - Crear objeto inverso (email -> nombre)
// - Verificar si algún usuario no tiene teléfono

// === EJERCICIO 5: VALIDACIÓN Y LIMPIEZA ===

// 5.1 Validación de datos
const datosEntrada = [
    { nombre: 'Ana', edad: 25, email: 'ana@ejemplo.com' },
    { nombre: '', edad: -5, email: 'email-invalido' },
    { nombre: 'Juan', edad: 30, email: 'juan@ejemplo.com' },
    { nombre: 'María', edad: 150, email: '' }
];

// Tu código aquí:
// - Filtrar usuarios válidos (nombre no vacío, edad entre 0-120, email válido)
// - Limpiar datos (trim en nombre, corregir edad si es inválida)
// - Agrupar en válidos e inválidos
// - Crear reporte de errores
// - Generar array de nombres de usuarios válidos

// 5.2 Normalización de texto
const textos = [
    '  JAVASCRIPT  ',
    'python',
    '  TYPESCRIPT',
    'java  ',
    'RUST'
];

// Tu código aquí:
// - Normalizar todos los textos (trim, lowercase)
// - Filtrar lenguajes que contienen 'script'
// - Contar cuántos lenguajes tienen más de 4 caracteres
// - Crear string con todos los lenguajes separados por comas
// - Verificar si 'javascript' está en la lista

// === EJERCICIO 6: ALGORITMOS FUNCIONALES ===

// 6.1 Pipeline de procesamiento
function pipeline(valor, ...funciones) {
    // Tu código aquí:
    // - Implementar función pipeline que aplique funciones secuencialmente
}

// 6.2 Funciones de utilidad
const funciones = {
    duplicar: x => x * 2,
    sumarUno: x => x + 1,
    alCuadrado: x => x * x,
    esPar: x => x % 2 === 0,
    mayorQueDiez: x => x > 10
};

// Tu código aquí:
// - Usar pipeline para procesar número 5 con duplicar, sumarUno, alCuadrado
// - Crear función que filtre números pares y luego duplique
// - Implementar compose (composición de funciones)
// - Crear función que verifique si un número pasa todas las validaciones

// === EJERCICIO 7: PROYECTO INTEGRADOR ===

// 7.1 Sistema de gestión de inventario
class Inventario {
    constructor() {
        this.productos = [];
        this.ventas = [];
    }
    
    // Tu código aquí:
    // - agregarProducto(producto)
    // - venderProducto(id, cantidad)
    // - obtenerStock(id)
    // - productosBajoStock(limite)
    // - reporteVentas()
    // - productosPorCategoria()
}

// 7.2 Analizador de texto
class AnalizadorTexto {
    constructor(texto) {
        this.texto = texto;
    }
    
    // Tu código aquí:
    // - contarPalabras()
    // - contarCaracteres()
    // - palabraMasLarga()
    // - frecuenciaPalabras()
    // - promedioLongitudPalabras()
    // - esPalindromo()
}

// === PRUEBAS ===
// Descomenta para probar tus soluciones

/*
// Prueba Ejercicio 1
console.log('=== EJERCICIO 1 ===');
const pares = numeros.filter(n => n % 2 === 0);
console.log('Pares:', pares);
const duplicados = numeros.map(n => n * 2);
console.log('Duplicados:', duplicados);
const suma = numeros.reduce((a, b) => a + b, 0);
console.log('Suma:', suma);

// Prueba Ejercicio 2
console.log('=== EJERCICIO 2 ===');
const textoLimpio = texto.trim();
console.log('Texto limpio:', textoLimpio);
const mayusculas = textoLimpio.toUpperCase();
console.log('Mayúsculas:', mayusculas);

// Prueba Ejercicio 3
console.log('=== EJERCICIO 3 ===');
const claves = Object.keys(persona);
console.log('Claves:', claves);
const valores = Object.values(persona);
console.log('Valores:', valores);

// Prueba Ejercicio 4
console.log('=== EJERCICIO 4 ===');
const promedios = estudiantes.map(e => ({
    nombre: e.nombre,
    promedio: e.calificaciones.reduce((a, b) => a + b, 0) / e.calificaciones.length
}));
console.log('Promedios:', promedios);

// Prueba Ejercicio 5
console.log('=== EJERCICIO 5 ===');
const validos = datosEntrada.filter(d => 
    d.nombre.trim() && d.edad > 0 && d.edad < 120 && d.email.includes('@')
);
console.log('Válidos:', validos);

// Prueba Ejercicio 6
console.log('=== EJERCICIO 6 ===');
const resultado = pipeline(5, funciones.duplicar, funciones.sumarUno, funciones.alCuadrado);
console.log('Pipeline:', resultado);

// Prueba Ejercicio 7
console.log('=== EJERCICIO 7 ===');
const inventario = new Inventario();
inventario.agregarProducto({ id: 1, nombre: 'Laptop', stock: 10, precio: 999 });
inventario.agregarProducto({ id: 2, nombre: 'Mouse', stock: 50, precio: 29 });
inventario.venderProducto(1, 2);
console.log('Stock Laptop:', inventario.obtenerStock(1));

const analizador = new AnalizadorTexto('Hola mundo, este es un texto de prueba');
console.log('Palabras:', analizador.contarPalabras());
console.log('Palabra más larga:', analizador.palabraMasLarga());
*/

// === RESPUESTAS Y SOLUCIONES ===
// Descomenta la siguiente sección para ver las soluciones

/*
// SOLUCIÓN EJERCICIO 1:
const pares = numeros.filter(n => n % 2 === 0);
const duplicados = numeros.map(n => n * 2);
const suma = numeros.reduce((a, b) => a + b, 0);
const mayorQueCinco = numeros.find(n => n > 5);
const todosPositivos = numeros.every(n => n > 0);
const hayMayorOcho = numeros.some(n => n > 8);

const usuariosActivos = usuarios.filter(u => u.activo);
const nombresActivos = usuariosActivos.map(u => u.nombre);
const usuariosPorCiudad = usuarios.reduce((acc, u) => {
    if (!acc[u.ciudad]) acc[u.ciudad] = [];
    acc[u.ciudad].push(u);
    return acc;
}, {});
const masJoven = usuarios.reduce((joven, u) => u.edad < joven.edad ? u : joven);
const edadPromedio = usuarios.reduce((sum, u) => sum + u.edad, 0) / usuarios.length;
const todosMayoresVeinte = usuarios.every(u => u.edad > 20);

const cuadrados = datos.map(n => n * n);
const paresCuadrado = datos.filter(n => n % 2 === 0).map(n => n * n);
const anidado = [[1,2], [3,4], [5,6]];
const aplanado = anidado.flat();
const ordenadoDescendente = [...datos].sort((a, b) => b - a);
const copiaRevertida = [...datos].reverse();

// SOLUCIÓN EJERCICIO 2:
const textoLimpio = texto.trim();
const mayusculas = textoLimpio.toUpperCase();
const contieneJS = textoLimpio.includes('JavaScript');
const comienzaConJS = textoLimpio.startsWith('JavaScript');
const terminaConProgramacion = textoLimpio.endsWith('programación');
const reemplazado = textoLimpio.replace('JavaScript', 'TypeScript');

const codigoRellenado = codigo.padStart(5, '0');
const nombreRellenado = nombre.padEnd(10, ' ');
const nombreRepetido = nombre.repeat(3);
const palabras = textoLimpio.split(' ');
const unidas = palabras.join('-');

const etiquetas = [...html.matchAll(/<[^>]+>/g)].map(match => match[0]);
const tieneContainer = html.includes('container');
const posicionP = html.indexOf('p>');
const sinEtiquetas = html.replace(/<[^>]+>/g, '');
const cantidadEtiquetas = etiquetas.length;

// SOLUCIÓN EJERCICIO 3:
const claves = Object.keys(persona);
const valores = Object.values(persona);
const entradas = Object.entries(persona);
const datosPublicos = Object.fromEntries(
    Object.entries(persona).filter(([clave]) => clave !== 'password')
);
const clavesMayusculas = Object.fromEntries(
    Object.entries(persona).map(([clave, valor]) => [clave.toUpperCase(), valor])
);
const tieneEmail = 'email' in persona;

const combinado = { ...defaults, ...userConfig };
const copiaProfunda = JSON.parse(JSON.stringify(combinado));
const esExtensible = Object.isExtensible(copiaProfunda);
Object.freeze(copiaProfunda);
const intentoModificacion = () => { copiaProfunda.tema = 'nuevo'; };

const productosPorCategoria = productos.reduce((acc, p) => {
    if (!acc[p.categoria]) acc[p.categoria] = [];
    acc[p.categoria].push(p);
    return acc;
}, {});

const totalPorCategoria = Object.fromEntries(
    Object.entries(productosPorCategoria).map(([cat, prods]) => [
        cat,
        prods.reduce((sum, p) => sum + p.precio, 0)
    ])
);

const masCaro = productos.reduce((caro, p) => p.precio > caro.precio ? p : caro);
const nombresPrecios = Object.fromEntries(
    productos.map(p => [p.nombre, p.precio])
);
const mayoresCien = productos.filter(p => p.precio > 100);

// SOLUCIÓN EJERCICIO 4:
const promedios = estudiantes.map(e => ({
    nombre: e.nombre,
    promedio: e.calificaciones.reduce((a, b) => a + b, 0) / e.calificaciones.length,
    activo: e.activo
}));

const activos = promedios.filter(e => e.activo);
const mejorPromedio = activos.reduce((mejor, e) => e.promedio > mejor.promedio ? e : mejor);

const porRango = promedios.reduce((acc, e) => {
    const rango = e.promedio >= 9 ? 'excelente' : e.promedio >= 7 ? 'bueno' : 'regular';
    if (!acc[rango]) acc[rango] = [];
    acc[rango].push(e);
    return acc;
}, {});

const reporte = activos.map(e => `${e.nombre}: ${e.promedio.toFixed(2)}`);

const emails = datosAnidados.usuarios.map(u => u.info.contacto.email);
const usuariosSimplificados = datosAnidados.usuarios.map(u => ({
    id: u.id,
    nombre: u.info.nombre,
    email: u.info.contacto.email
}));
const configArray = Object.entries(datosAnidados.configuracion);
const emailANombre = Object.fromEntries(
    datosAnidados.usuarios.map(u => [u.info.contacto.email, u.info.nombre])
);
const sinTelefono = datosAnidados.usuarios.some(u => !u.info.contacto.telefono);

// SOLUCIÓN EJERCICIO 5:
const validos = datosEntrada.filter(d => 
    d.nombre.trim() && 
    d.edad > 0 && d.edad < 120 && 
    d.email.includes('@') && d.email.includes('.')
);

const limpios = datosEntrada.map(d => ({
    ...d,
    nombre: d.nombre.trim(),
    edad: d.edad < 0 || d.edad > 120 ? 25 : d.edad
}));

const agrupados = limpios.reduce((acc, d) => {
    const esValido = d.nombre && d.edad > 0 && d.edad < 120 && d.email.includes('@');
    if (!acc[esValido ? 'validos' : 'invalidos']) acc[esValido ? 'validos' : 'invalidos'] = [];
    acc[esValido ? 'validos' : 'invalidos'].push(d);
    return acc;
}, {});

const errores = agrupados.invalidos.map(d => ({
    nombre: d.nombre,
    errores: [
        !d.nombre ? 'Nombre vacío' : null,
        d.edad <= 0 || d.edad >= 120 ? 'Edad inválida' : null,
        !d.email.includes('@') ? 'Email inválido' : null
    ].filter(Boolean)
}));

const nombresValidos = agrupados.validos.map(d => d.nombre);

const normalizados = textos.map(t => t.trim().toLowerCase());
const conScript = normalizados.filter(t => t.includes('script'));
const masDeCuatro = normalizados.filter(t => t.length > 4);
const unidos = normalizados.join(', ');
const tieneJS = normalizados.includes('javascript');

// SOLUCIÓN EJERCICIO 6:
function pipeline(valor, ...funciones) {
    return funciones.reduce((acc, fn) => fn(acc), valor);
}

const filtrarParesDuplicar = arr => arr.filter(funciones.esPar).map(funciones.duplicar);

function compose(...funciones) {
    return (valor) => funciones.reduceRight((acc, fn) => fn(acc), valor);
}

const pasaValidaciones = x => Object.values(funciones).every(fn => typeof fn === 'function' ? fn(x) : true);

// SOLUCIÓN EJERCICIO 7:
class Inventario {
    constructor() {
        this.productos = [];
        this.ventas = [];
    }
    
    agregarProducto(producto) {
        this.productos.push({ ...producto, stockInicial: producto.stock });
    }
    
    venderProducto(id, cantidad) {
        const producto = this.productos.find(p => p.id === id);
        if (!producto || producto.stock < cantidad) {
            return false;
        }
        
        producto.stock -= cantidad;
        this.ventas.push({
            id,
            cantidad,
            fecha: new Date(),
            precioUnitario: producto.precio
        });
        return true;
    }
    
    obtenerStock(id) {
        const producto = this.productos.find(p => p.id === id);
        return producto ? producto.stock : 0;
    }
    
    productosBajoStock(limite) {
        return this.productos.filter(p => p.stock < limite);
    }
    
    reporteVentas() {
        return this.ventas.reduce((acc, v) => {
            const producto = this.productos.find(p => p.id === v.id);
            acc.totalVentas += v.cantidad * v.precioUnitario;
            acc.cantidadVentas += v.cantidad;
            return acc;
        }, { totalVentas: 0, cantidadVentas: 0 });
    }
    
    productosPorCategoria() {
        return this.productos.reduce((acc, p) => {
            if (!acc[p.categoria]) acc[p.categoria] = [];
            acc[p.categoria].push(p);
            return acc;
        }, {});
    }
}

class AnalizadorTexto {
    constructor(texto) {
        this.texto = texto;
    }
    
    contarPalabras() {
        return this.texto.trim().split(/\s+/).length;
    }
    
    contarCaracteres() {
        return this.texto.length;
    }
    
    palabraMasLarga() {
        const palabras = this.texto.trim().split(/\s+/);
        return palabras.reduce((larga, palabra) => 
            palabra.length > larga.length ? palabra : larga, ''
        );
    }
    
    frecuenciaPalabras() {
        const palabras = this.texto.toLowerCase().trim().split(/\s+/);
        return palabras.reduce((acc, palabra) => {
            acc[palabra] = (acc[palabra] || 0) + 1;
            return acc;
        }, {});
    }
    
    promedioLongitudPalabras() {
        const palabras = this.texto.trim().split(/\s+/);
        const totalLongitud = palabras.reduce((sum, p) => sum + p.length, 0);
        return totalLongitud / palabras.length;
    }
    
    esPalindromo() {
        const limpio = this.texto.toLowerCase().replace(/[^a-z0-9]/g, '');
        return limpio === limpio.split('').reverse().join('');
    }
}
*/
