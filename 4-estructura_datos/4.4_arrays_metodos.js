let array = ["c++", "c", "javascript", "java", "python", "ruby"];
console.log(array);

// agregar al final
array.push("go");
console.log(array);

// eliminar al final
array.pop();
console.log(array);

// agregar al inicio
array.unshift("c#");
console.log(array);

// eliminar al inicio
array.shift();
console.log(array);

// referencia de array
let frutas = ["Banana"];
let arrayEx = frutas; // guardamos la referencia del array original
console.log(arrayEx === frutas); // true
arrayEx.push("Pear"); // modificamos la referencia guardada del array original
console.log(frutas); // por ende el array original se modifica

// Declaramos un array vacío
let fruits = [];
// Asignamos un valor en el índice 99999
fruits[99999] = 5;
// Agregamos una propiedad arbitraria llamada 'age'
fruits.age = 25;
// Mostramos el contenido del array
console.log(fruits);

// Creamos un array limitado de tamaño 2
let arrayLimitado = new Array(2);
// Agregamos más elementos
arrayLimitado.push(1);
arrayLimitado.push(2);
arrayLimitado.push(3);
// Mostramos el array
console.log(arrayLimitado);

// investigar loops
