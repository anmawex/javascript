// string
// coerción
let concatenación = "HOLA AGENTE" + 53;
console.log(typeof concatenación);

let value = true;
console.log(typeof value);

// conversión
let castingValue = String(value);
console.log(typeof castingValue);

// number
// coerción
let operación = "3" * "3";
console.log(typeof operación);

let numeroEnString = "723";
console.log(typeof numeroEnString);
// conversión
console.log(typeof Number(numeroEnString));

// conversión
console.log(Number("   123   "));
console.log(Number("123z"));
console.log(Number(true));
console.log(Number(false));

// boolean
// conversión
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hola"));
console.log(Boolean(""));
