// Comparación no estricta -> ==
console.log(5 == "5"); // true (string '5' se convierte a número 5)
console.log(null == undefined); // true (caso especial, se consideran iguales)
console.log(false == 0); // true (false se convierte a 0)
console.log("" == 0); // true ('' se convierte a 0)
console.log([] == false); // true (array vacío se convierte a '' y luego a 0)

// Comparación estricta -> ===
// (utilizar este siempre, salvo un caso especial usa el anterior)
console.log(5 === "5"); // false (número vs string)
console.log(false === 0); // false
console.log(null === undefined); // false
console.log([] === false); // false
console.log(5 === 5); // true

// casos especiales
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(Number.isNaN(NaN)); // true

// comparación con objeto de javascript
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false (¡detalle que ni `===` detecta!)

// objetos y arrays
const a = [1, 2];
const b = [1, 2];
console.log(a === b); // false (no son el mismo objeto en memoria)

// referencio la memoria
const c = a;
console.log(a === c); // true (misma referencia)

// Recordar que también hay metodos: includes(), indexOf()

// Consejo extra
if ([]) console.log("Truthy!"); // [] es truthy
if ({}) console.log("Truthy!"); // {} es truthy
if (0) console.log("Falsy!"); // no se ejecuta
if ("") console.log("Falsy!"); // no se ejecuta
