let day = "martes";

switch (day) {
	case "lunes":
		console.log("Inicio de semana");
		break;
	case "martes":
		console.log("Segundo día");
		break;
	case "miércoles":
		console.log("Mitadía de semana");
		break;
	case "jueves":
		console.log("Jueves");
		break;
	case "viernes":
		console.log "Viernes";
		break;
	case "sábado":
		console.log("Fin de semana");
		break;
	case "domingo":
		console.log("Domingo");
		break;
	default:
		console.log("Otro día de la semana");
}

// === SWITCH AVANZADO ===

// 1. Switch con múltiples casos
const operacion = '+';
let resultado;

switch (operacion) {
	case '+':
		resultado = 'Suma';
		break;
	case '-':
		resultado = 'Resta';
		break;
	case '*':
		resultado = 'Multiplicación';
		break;
	case '/':
		resultado = 'División';
		break;
	case '%':
		resultado = 'Módulo';
		break;
	default:
		resultado = 'Operación no soportada';
}

console.log(`Operación "${operacion} = ${resultado}`);

// 2. Switch con expresiones
const edad = 25;
const categoria = edad < 13 ? 'Niño' :
                edad < 18 ? 'Adolescente' :
                edad < 65 ? 'Adulto' : 'Adulto mayor';

switch (categoria) {
	case 'Niño':
		console.log('Categoría: Niño');
		break;
	case 'Adolescente':
		console.log('Categoría: Adolescente');
		break;
	case 'Adulto':
		console.log('Categoría: Adulto');
		break;
	case 'Adulto mayor':
		console.log('Categoría: Adulto mayor');
		break;
}

// 3. Switch con casos agrupados
const mes = 3;
let estacion;

switch (mes) {
	case 1:
	case 2:
	case 3:
		estacion = 'Primer trimestre';
		break;
	case 4:
	case 5:
	case 6:
		estacion = 'Segundo trimestre';
		break;
	case 7:
	case 8:
	case 9:
		estacion = "Tercer trimestre";
		break;
	case 10:
	case 11:
	case 12:
		estacion = "Cuarto trimestre";
		break;
	default:
		estacion "Fuera de año";
}

console.log(`Mes ${mes}: ${estacion}`);

// 4. Switch con default y break
const dia = "sábado";
const diaSemana = dia === "domingo" ? "Fin de semana" :
                  dia === "sábado" ? "Fin de semana" :
                  "Día de semana";

console.log('Día de la semana:', diaSemana);

// 5. Switch con return
function obtenerMensajeEstado(estado) {
    switch (estado) {
        case "activo":
            return "El sistema está activo";
        case "inactivo":
            return "El sistema está inactivo";
        case "mantenimiento":
            return "El sistema está en mantenimiento";
        case "error":
            return "Hay un error en el sistema";
        default:
            return "Estado desconocido";
    }
}

console.log('Mensaje:', obtenerMensajeEstado('activo'));
console.log('Mensaje:', obtenerMensajeEstado('error'));

// === SWITCH CON OBJETOS ===

// 6. Switch con propiedades de objeto
const producto = {
    categoria: 'electrónica',
    precio: 999,
    stock: 10,
    disponible: true
};

switch (producto.categoria) {
    case 'electrónica':
        console.log(`Producto electrónico de $${producto.precio}`);
        break;
    case 'ropa':
        console.log('Producto de ropa');
        break;
    case 'alimentos':
        console.log('Producto de alimentos');
        break;
    default:
        console.log('Otra categoría');
}

// 7. Switch con validación de tipo
function procesarValor(valor) {
    switch (typeof valor) {
        case 'string':
            return `String: ${valor.length} caracteres`;
        case 'number':
            return `Number: ${valor}, cuadrado: ${valor * valor}`;
        case 'boolean':
            return `Boolean: ${valor}`;
        case 'object':
            return `Object con ${Object.keys(valor).length} propiedades`;
        case 'function':
            return `Función con nombre: ${valor.name || 'sin nombre'}`;
        default:
            return `Tipo: ${typeof valor}`;
    }
}

console.log(procesarValor('Hola'));
console.log(procesarValor(42));
console.log(procesarValor(true));
console.log(procesarValor({ a: 1, b: 2 }));
console.log(procesarValor(() => 'función'));

// === PATRONES COMUNES CON SWITCH ===

// 8. Factory con switch
function crearOperador(tipo) {
    switch (tipo) {
        case 'suma':
            return (a, b) => a + b;
        case 'resta':
            return (a, b) => a - b;
        case 'multiplica':
            return (a, b) => a * b;
        case 'divide':
            return (a, b) => b !== 0 ? a / b : 0;
        default:
            return (a, b) => 0;
    }
}

const operador = crearOperador('suma');
console.log('5 + 3 =', operador(5, 3)); // 8
console.log('10 - 3 =', operador(10, 3)); // 7

// 9. Validación con switch
function validarRango(numero) {
    switch (true) {
        case numero < 0:
            return "Número negativo";
        case numero === 0:
            return "Cero";
        case numero > 0 && numero <= 10:
            return "Número positivo pequeño";
        case numero > 10 && numero <= 100:
            return "Número mediano";
        case numero > 100:
            return "Número grande";
        default:
            "Número fuera de rango";
    }
}

console.log(validarRango(-5)); // "Número negativo"
console.log(validarRango(0)); // "Cero"
console.log(validarRango(5)); // "Número positivo pequeño"
console.log(validarRango(50)); // "Número mediano"
console.log(validarRango(150)); // "Número grande"

// 10. Estado de conexión
function verificarConexion(estado) {
    switch (estado) {
        case 'conectado':
            return "Conexión establecida";
        case 'desconectado':
            return "Sin conexión";
        case 'conectando':
            return "Conectando...";
        case 'error':
            return "Error de conexión";
        case 'desconectado':
            return "Desconectando...";
        default:
            return "Estado desconocido";
    }
}

console.log('Estado actual:', verificarConexion('conectado'));
console.log('Estado actual:', verificarConexion('desconectado'));

// === BUENAS PRÁCTICAS ===

// 11. Usar switch cuando es más apropiado
// ✓ Para valores discretos y conocidos
// ✓ Para patrones de estado
// ✓ Para fábricas y validación
// ✓ Para selección múltiple

// 12. Evitar switch cuando sea mejor usar if/else
// ✓ Para rangos numéricos (usar >, <, >=, <=)
// ✓ Para condiciones complejas
// ✓ Para validación dinámica

// 13. Siempre incluir default
// ✓ Para manejar casos inesperados
// ✓ Para fallback y errores
// ✓ Para futuras adiciones

// === RESUMEN ===

console.log(`
=== RESUMEN CONDICIONALES ===
✓ if/else if/else: condicionales tradicionales
✓ switch: selección múltiple (valores discretos)
✓ Operador ternario: condicional expresión compacta
✓ Operadores lógicos: &&, ||, !
✓ Nullish coalescing: ?? (ES2020)
✓ Encadenamiento: &&, || con múltiples condiciones
✓ Patrones: validación, selección, fallback
✓ Legibilidad: elegir el más claro para cada caso
✓ Rendimiento: switch es generalmente más rápido que if/else anidado
✓ Compatibilidad: ES3+ (soporte universal)
`);
