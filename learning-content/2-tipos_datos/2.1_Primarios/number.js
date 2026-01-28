// NUMBER - Tipo Primitivo Numérico
// JavaScript usa IEEE 754 de doble precisión (64 bits)

// === TIPOS DE NÚMEROS ===
// 1. Enteros y decimales
let edad = 30;
let precio = 19.99;
let temperatura = -5.5;
let cero = 0;
let negativo = -100;

console.log(edad, precio, temperatura, cero, negativo);

// 2. Notación científica
let grande = 1e6; // 1,000,000
let pequeno = 1e-6; // 0.000001
let muyGrande = 5.2e8; // 520,000,000

console.log(grande, pequeno, muyGrande);

// 3. Números especiales
let infinito = Infinity;
let menosInfinito = -Infinity;
let noEsNumero = NaN; // Not a Number

console.log(infinito, menosInfinito, noEsNumero);

// === OPERACIONES ARITMÉTICAS ===
// 4. Operaciones básicas
let a = 10, b = 3;
console.log(a + b); // 13 (suma)
console.log(a - b); // 7 (resta)
console.log(a * b); // 30 (multiplicación)
console.log(a / b); // 3.3333333333335 (división)
console.log(a % b); // 1 (módulo/resto)
console.log(a ** b); // 1000 (exponente)

// 5. Operadores de asignación
let x = 5;
x += 3; // x = x + 3 = 8
x -= 2; // x = x - 2 = 6
x *= 4; // x = x * 4 = 24
x /= 3; // x = x / 3 = 8
x %= 5; // x = x % 5 = 3

console.log(x);

// 6. Operadores de incremento/decremento
let contador = 5;
console.log(contador++); // 5 (post-incremento)
console.log(contador); // 6
console.log(++contador); // 7 (pre-incremento)
console.log(contador--); // 7 (post-decremento)
console.log(contador); // 6
console.log(--contador); // 5 (pre-decremento)

// === MÉTODOS DE NUMBER ===
// 7. Métodos estáticos
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10)); // false
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false

// 8. Conversión a número
console.log(Number("123")); // 123
console.log(Number("123.45")); // 123.45
console.log(Number("123abc")); // NaN
console.log(Number("")); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// 9. parseInt y parseFloat
console.log(parseInt("123")); // 123
console.log(parseInt("123.45")); // 123
console.log(parseInt("123abc")); // 123
console.log(parseInt("abc123")); // NaN
console.log(parseInt("0xFF")); // 255 (hexadecimal)
console.log(parseInt("101", 2)); // 5 (binario)

console.log(parseFloat("123.45")); // 123.45
console.log(parseFloat("123.45abc")); // 123.45
console.log(parseFloat("0xFF")); // 0 (no reconoce hex)

// 10. Métodos de instancia
let num = 123.456;
console.log(num.toFixed(2)); // "123.46" (string con 2 decimales)
console.log(num.toFixed(0)); // "123"
console.log(num.toPrecision(4)); // "123.5" (4 cifras significativas)
console.log(num.toExponential(2)); // "1.23e+2"

// 11. Formato con locale
let dinero = 1234.56;
console.log(dinero.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }));
console.log(dinero.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));

// === PRECISIÓN Y LÍMITES ===
// 12. Problemas de precisión
console.log(0.1 + 0.2); // 0.30000000000000004 (error de precisión)
console.log(0.1 + 0.2 === 0.3); // false

// Solución: usar toFixed para comparación
console.log((0.1 + 0.2).toFixed(1) === "0.3"); // true

// 13. Valores límite
console.log(Number.MAX_VALUE); // 1.79e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 14. Verificación de enteros seguros
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// 15. BigInt para números grandes
let grandeDemasiado = 123456789012345678901234567890n;
console.log(typeof grandeDemasiado); // "bigint"
console.log(grandeDemasiado + 1n); // 123456789012345678901234567891n

// === MATEMÁTICAS AVANZADAS ===
// 16. Objeto Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(27)); // 3
console.log(Math.pow(2, 3)); // 8
console.log(Math.abs(-5)); // 5
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.2)); // 5

// 17. Funciones trigonométricas
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1

// 18. Números aleatorios
console.log(Math.random()); // 0 <= x < 1
console.log(Math.floor(Math.random() * 10)); // 0-9
console.log(Math.floor(Math.random() * 10) + 1); // 1-10

// Función para rango aleatorio
function aleatorioEntre(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(aleatorioEntre(1, 100)); // número entre 1 y 100

// 19. Mínimo y máximo
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// 20. Resumen
console.log(`
=== RESUMEN NUMBER ===
✓ Números: enteros, decimales, notación científica
✓ Operaciones: aritméticas, asignación, incremento/decremento
✓ Métodos: parseInt, parseFloat, toFixed, toPrecision
✓ Valores especiales: NaN, Infinity, -Infinity
✓ Precisión: IEEE 754, cuidado con 0.1 + 0.2
✓ Límites: MAX_VALUE, SAFE_INTEGER
✓ Math: funciones matemáticas avanzadas
✓ BigInt: para números más allá de Number
`);
