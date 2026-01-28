const person = { name: "John", age: 30 };
for (const key in person) {
	console.log(key, person[key]);
}
// name John
// age 30

// No recorrer propiedades heredadas (?)
for (const key in person) {
	if (person.hasOwnProperty(key)) {
		console.log(key);
	}
}
