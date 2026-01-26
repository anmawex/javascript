let edad = 20;
// operador ternario
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";

// === OPERADORES CONDICIONALES AVANZADOS ===

// 1. Operador ternario anidado
const edad2 = 25;
const categoria = edad2 >= 65 ? "Adulto mayor" : 
                  edad2 >= 18 ? "Adulto" : 
                  edad2 >= 13 ? "Adolescente" : "Niño";

console.log('Categoría:', categoria);

// 2. Operador ternario con expresiones complejas
const puntuacion = 85;
const resultado = puntuacion >= 90 ? "Excelente" :
                   puntuacion >= 80 ? "Muy bueno" :
                   puntuacion >= 70 ? "Bueno" :
                   puntuacion >= 60 ? "Regular" : "Necesitas mejorar";

console.log('Evaluación:', resultado);

// 3. Operador ternario con funciones
const esPar = (numero) => numero % 2 === 0;
const mensajeNumero = (num) => esPar(num) ? `${num} es par` : `${num} es impar`;

console.log('Mensaje número:', mensajeNumero(7)); // "7 es impar"
console.log('Mensaje número:', mensajeNumero(8)); // "8 es par"

// 4. Operador ternario con objetos
const usuario = {
    nombre: 'Juan',
    edad: 30,
    activo: true
};

const saludo = usuario.activo ? 
    `Hola ${usuario.nombre}` : 
    'Usuario inactivo';

console.log('Saludo:', saludo);

// 5. Operador ternario con arrays
const numeros = [1, 2, 3, 4, 5];
const primerElemento = numeros.length > 0 ? numeros[0] : 'Array vacío';

console.log('Primer elemento:', primerElemento);

// 6. Operador ternario con nullish coalescing
const valor = null;
const resultado2 = valor ?? 'Valor nulo';

console.log('Resultado nullish:', resultado2);

// 7. Operador ternario vs if/else
function procesarEdad(edad) {
    // Con if/else
    if (edad >= 18) {
        return 'Mayor de edad';
    } else {
        return 'Menor de edad';
    }
    
    // Con operador ternario
    return edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
}

// 8. Operador ternario anidado (evitar en código real)
const nivel = 75;
const nivelTexto = nivel >= 90 ? 'Excelente' :
                   nivel >= 80 ? 'Muy bueno' :
                   nivel >= 70 ? 'Bueno' :
                   nivel >= 60 ? 'Regular' : 'Insuficiente';

console.log('Nivel:', nivelTexto);

// 9. Operador ternario con asignación
let x = 10;
const esPositivo = x > 0 ? 'positivo' : 'negativo';

console.log('¿Es positivo?:', esPositivo);

// 10. Operador ternario con booleanos
const estaConectado = true;
const estado = estaConectado ? 'En línea' : 'Desconectado';

console.log('Estado:', estado);

// === OPERADORES LÓGICOS ===

// 11. Operador AND (&&)
const a = true;
const b = false;
console.log('a && b:', a && b); // false

// 12. Operador OR (||)
console.log('a || b:', a || b); // true

// 13. Operador NOT (!)
console.log('!a:', !a); // false

// 14. Cortocircuito con AND
const nombre = '';
const saludo2 = nombre && `Hola ${nombre}`;
console.log('Saludo 2:', saludo2); // "" (vacío)

const nombre2 = 'Juan';
const saludo3 = nombre2 && `Hola ${nombre2}`;
console.log('Saludo 3:', saludo3); // "Hola Juan"

// 15. Cortocircuito con OR
const valorDefecto = null;
const valorFinal = valorDefecto || 'Valor por defecto';
console.log('Valor final:', valorFinal); // "Valor por defecto"

const valorDefecto2 = 'valor real';
const valorFinal2 = valorDefecto2 || 'Valor por defecto';
console.log('Valor final 2:', valorFinal2); // "valor real"

// 16. Nullish coalescing (??)
const valorNulo = null;
const valorIndefinido = undefined;
const valorCero = 0;
const valorVacio = '';

console.log('null ?? "defecto":', valorNulo ?? 'defecto'); // "defecto"
console.log('undefined ?? "defecto":', valorIndefinido ?? 'defecto'); // "defecto"
console.log('0 ?? "defecto":', valorCero ?? 'defecto'); // 0
console.log('"" ?? "defecto":', valorVacio ?? 'defecto'); // ""

// 17. Diferencia entre || y ??
const valorFalso = 0;
console.log('0 || "defecto":', valorFalso || 'defecto'); // "defecto"
console.log('0 ?? "defecto":', valorFalso ?? 'defecto'); // 0

// 18. Operador lógico con asignación (ES2020)
let x1 = true;
x1 &&= false; // equivalente a x1 = x1 && false
console.log('x1 &&= false:', x1); // false

let y1 = false;
y1 ||= true; // equivalente a y1 = y1 || true
console.log('y1 ||= true:', y1); // true

let z1 = null;
z1 ??= 'defecto'; // equivalente a z1 = z1 ?? 'defecto'
console.log('z1 ??= "defecto":', z1); // "defecto"

// === OPERADORES BITWISE ===

// 19. Operador AND bitwise (&)
const a1 = 5;  // 0101
const b1 = 3;  // 0011
console.log('5 & 3:', a1 & b1); // 1 (0001)

// 20. Operador OR bitwise (|)
console.log('5 | 3:', a1 | b1); // 7 (0111)

// 21. Operador XOR bitwise (^)
console.log('5 ^ 3:', a1 ^ b1); // 6 (0110)

// 22. Operador NOT bitwise (~)
console.log('~5:', ~a1); // -6

// 23. Desplazamiento a la izquierda (<<)
console.log('5 << 1:', a1 << 1); // 10 (1010)

// 24. Desplazamiento a la derecha (>>)
console.log('5 >> 1:', a1 >> 1); // 2 (0010)

// 25. Desplazamiento a la derecha sin signo (>>>)
console.log('-5 >>> 1:', -5 >>> 1); // 2147483646

// === OPERADORES DE ASIGNACIÓN ===

// 26. Asignación compuesta
let x2 = 10;
x2 += 5;  // x2 = x2 + 5
console.log('x += 5:', x2); // 15

x2 -= 3;  // x2 = x2 - 3
console.log('x -= 3:', x2); // 12

x2 *= 2;  // x2 = x2 * 2
console.log('x *= 2:', x2); // 24

x2 /= 3;  // x2 = x2 / 3
console.log('x /= 3:', x2); // 8

x2 %= 3;  // x2 = x2 % 3
console.log('x %= 3:', x2); // 2

// 27. Asignación compuesta con bitwise
let y2 = 5;
y2 &= 3;  // y2 = y2 & 3
console.log('y &= 3:', y2); // 1

y2 |= 2;  // y2 = y2 | 2
console.log('y |= 2:', y2); // 3

y2 ^= 1;  // y2 = y2 ^ 1
console.log('y ^= 1:', y2); // 2

y2 <<= 1; // y2 = y2 << 1
console.log('y <<= 1:', y2); // 4

y2 >>= 1; // y2 = y2 >> 1
console.log('y >>= 1:', y2); // 2

// === OPERADORES DE COMPARACIÓN ===

// 28. Comparación estricta (===)
console.log('5 === "5":', 5 === '5'); // false
console.log('5 === 5:', 5 === 5); // true

// 29. Comparación no estricta (==)
console.log('5 == "5":', 5 == '5'); // true
console.log('5 == 5:', 5 == 5); // true

// 30. Desigualdad estricta (!==)
console.log('5 !== "5":', 5 !== '5'); // true
console.log('5 !== 5:', 5 !== 5); // false

// 31. Desigualdad no estricta (!=)
console.log('5 != "5":', 5 != '5'); // false
console.log('5 != 5:', 5 != 5); // false

// 32. Operadores relacionales
console.log('5 > 3:', 5 > 3); // true
console.log('5 < 3:', 5 < 3); // false
console.log('5 >= 5:', 5 >= 5); // true
console.log('5 <= 3:', 5 <= 3); // false

// === RESUMEN ===

console.log(`
=== RESUMEN OPERADORES Y EXPRESIONES ===
✓ Operador ternario: condicional ? valor1 : valor2
✓ Operadores lógicos: &&, ||, !
✓ Cortocircuito: evaluación corta con && y ||
✓ Nullish coalescing: ?? (ES2020)
✓ Operadores bitwise: &, |, ^, ~, <<, >>, >>>
✓ Asignación compuesta: +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=
✓ Comparación: ===, !==, ==, !=, >, <, >=, <=
✓ Asignación lógica: &&=, ||=, ??= (ES2020)
✓ Precedencia: orden de evaluación de operadores
✓ Cortocircuito: para evaluación eficiente
✓ Type coercion: conversión automática de tipos
✓ Compatibilidad: ES1+ (soporte universal)
✓ Modernos: ??, &&=, ||=, ??= (ES2020)
`);
