let age = 20;

if (age >= 18) {
    console.log("Eres mayor de edad");
} else if (age >= 13) {
    console.log("Eres adolescente");
} else {
    console.log("Eres un niño");
}

// === CONDICIONALES AVANZADAS ===

// 1. Condicional ternario anidado
const edad2 = 25;
const mensaje = edad2 >= 18 ? 
    (edad2 >= 65 ? "Adulto mayor" : "Adulto") : 
    (edad2 >= 13 ? "Adolescente" : "Niño");

console.log('Mensaje ternario anidado:', mensaje);

// 2. Condicional con múltiples condiciones
const puntuacion = 85;
const resultado = puntuacion >= 90 ? "Excelente" :
                   puntuacion >= 80 ? "Muy bueno" :
                   puntuacion >= 70 ? "Bueno" :
                   puntuacion >= 60 ? "Regular" : "Necesitas mejorar";

console.log('Evaluación:', resultado);

// 3. Condicional con operadores lógicos
const usuario = {
    nombre: 'Juan',
    edad: 30,
    activo: true,
    premium: false
};

const puedeAcceder = usuario.edad >= 18 && usuario.activo && !usuario.premium;
console.log('¿Puede acceder?:', puedeAcceder);

// 4. Condicional con operadores de comparación
const valor1 = 10;
const valor2 = '10';

const comparacion = valor1 == valor2 ? "Iguales (con coerción)" : "Diferentes";
console.log('Comparación:', comparacion);

const comparacionEstricta = valor1 === valor2 ? "Iguales (estricto)" : "Diferentes";
console.log('Comparación estricta:', comparacionEstricta);

// 5. Condicional con cortocircuito
const nombre = '';
const saludo = nombre || "Invitado";
console.log('Saludo:', saludo);

const edad3 = 0;
const edadValida = edad3 || "No especificada";
console.log('Edad válida:', edadValida);

// 6. Condicional con nullish coalescing (ES2020)
const valorNulo = null;
const valorIndefinido = undefined;
const valorDefecto = "defecto";

const resultado1 = valorNulo ?? "Es nulo";
const resultado2 = valorIndefinido ?? "Es indefinido";
const resultado3 = valorDefecto ?? "Es defecto";

console.log('Nullish coalescing:');
console.log('null ?? "Es nulo":', resultado1);
console.log('undefined ?? "Es indefinido":', resultado2);
console.log('"defecto" ?? "Es defecto":', resultado3);

// 7. Condicional con encadenamiento lógico
const hora = 14;
const esDia = hora >= 6 && hora < 18;
const esFinDeSemana = hora >= 18 && hora <= 23;

let estadoDia;
if (esDia) {
    estadoDia = "Buenos días";
} else if (esFinDeSemana) {
    estadoDia = "Buenas tardes";
} else {
    estadoDia = "Buenas noches";
}

console.log('Estado del día:', estadoDia);

// 8. Condicional con objeto vacío
const configuracion = {
    tema: 'oscuro',
    idioma: 'es',
    notificaciones: true
};

const tieneConfiguracion = Object.keys(configuracion).length > 0;
console.log('¿Tiene configuración?:', tieneConfiguracion);

// 9. Condicional con array vacío
const elementos = [];
const hayElementos = elementos.length > 0;
console.log('¿Hay elementos?:', hayElementos);

// 10. Condicional con expresiones complejas
const numero = 42;
const esPar = numero % 2 === 0;
const esPositivo = numero > 0;
const esMenorQue50 = numero < 50;
const esMultiploDe3 = numero % 3 === 0;

const analisis = esPar && esPositivo && !esMenorQue50 && !esMultiploDe3 ? 
    "Es un número par positivo menor de 50 no múltiplo de 3" :
    "Otro tipo de número";

console.log('Análisis del número:', analisis);

// === PATRONES COMUNES ===

// 11. Validación de formulario
function validarFormulario(datos) {
    const errores = [];
    
    if (!datos.nombre || datos.nombre.trim() === '') {
        errores.push('El nombre es requerido');
    }
    
    if (!datos.email || !datos.email.includes('@')) {
        errores.push('El email es inválido');
    }
    
    if (!datos.edad || datos.edad < 0 || datos.edad > 120) {
        errores.push('La edad debe estar entre 0 y 120');
    }
    
    return {
        esValido: errores.length === 0,
        errores
    };
}

const datosFormulario = {
    nombre: 'Juan',
    email: 'juan@ejemplo.com',
    edad: 30
};

const validacion = validarFormulario(datosFormulario);
console.log('¿Formulario válido?:', validacion.esValido);
if (!validacion.esValido) {
    console.log('Errores:', validacion.errores);
}

// 12. Selección de acción basada en estado
const estado = 'cargando';
let accion;

switch (estado) {
    case 'cargando':
        accion = 'Mostrar spinner';
        break;
    case 'listo':
        accion = 'Mostrar tabla';
        break;
    case 'error':
        accion = 'Mostrar error';
        break;
    default:
        accion = 'Mostrar contenido';
}

console.log('Acción:', accion);

// 13. Condicional con fallback
function obtenerColorPreferido(preferencia) {
    const colores = {
        'rojo': '#FF0000',
        'verde': '#00FF00',
        'azul': '#0000FF',
        'negro': '#000000',
        'gris': '#808080'
    };
    
    return colores[preferencia.toLowerCase()] || colores['gris'];
}

console.log('Color preferido (rojo):', obtenerColorPreferido('rojo'));
console.log('Color preferido (morado):', obtenerColorPreferido('morado'));
console.log('Color preferido (inexistente):', obtenerColorPreferido('amarillo'));

// 14. Condicional con validación de tipo
function procesarDato(dato) {
    if (typeof dato === 'string') {
        return dato.toUpperCase();
    } else if (typeof dato === 'number') {
        return dato.toFixed(2);
    } else if (typeof dato === 'boolean') {
        return dato ? 'VERDADERO' : 'FALSO';
    } else {
        return 'Tipo no soportado';
    }
}

console.log('String:', procesarDato('hola'));
console.log('Number:', procesarDato(42.567));
console.log('Boolean:', procesarDato(true));
console.log('Array:', procesarDato([1, 2, 3]));
console.log('Object:', procesarDato({ a: 1 }));

// 15. Condicional con asignación
let x = 10;
const resultado2 = x > 5 ? 'Mayor que 5' : 'Menor o igual a 5';
console.log('Resultado:', resultado2);

// === RESUMEN ===

console.log(`
=== RESUMEN CONDICIONALES ===
if/else if/else: condicionales tradicionales
switch: selección múltiple
Operador ternario: condicional expresión compacta
Operadores lógicos: &&, ||, !
Cortocircuito: ||, ?? (nullish coalescing)
Encadenamiento: &&, || con múltiples condiciones
Validación: patrones comunes de validación
Fallback: valores por defecto con ||
Type checking: typeof para validación de tipos
Asignación condicional: ? : en asignaciones
Patrones: validación, selección, fallback
Legibilidad: elegir el más claro para cada caso
Rendimiento: cortocircuito para evaluación eficiente
Compatibilidad: soporte universal
`);
