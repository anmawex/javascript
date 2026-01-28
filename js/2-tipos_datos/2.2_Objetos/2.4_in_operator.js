// Declaramos un objeto vacío
let user = {};

// Comprobamos si una propiedad 'propertyExist' es undefined
console.log(user.propertyExist === undefined);
// ✅ Resultado: true
// Explicación: Como 'propertyExist' no existe en 'user', su valor es undefined.

// Declaramos un objeto con propiedades
let user2 = { name: "Angel", age: 24 };

// Verificamos si la clave 'name' existe en user2
console.log("name" in user2);
// ✅ Resultado: true
// Explicación: El operador 'in' comprueba si una propiedad existe en el objeto (independientemente de su valor).

// Verificamos si la clave 'jkl' existe en user2
console.log("jkl" in user2);
// ✅ Resultado: false
// Explicación: La propiedad 'jkl' no existe en el objeto 'user2'.

// Declaramos un objeto donde 'test' tiene el valor undefined
let user3 = {
	test: undefined,
	// testX: 5, // (alternativa comentada)
};

// Comprobamos si 'test' es undefined
console.log(user3.test === undefined);
// ✅ Resultado: true

console.log("test" in user3);
// ✅ Resultado: true
// Explicación: Aquí comprobamos si la propiedad 'test' existe dentro de 'user3',
// sin importar si su valor es undefined o cualquier otro valor.
