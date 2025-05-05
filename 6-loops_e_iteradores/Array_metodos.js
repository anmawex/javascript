const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num));
// 1,
// 2,
// 3

const doubled = numbers.map((num) => num * 2);
console.log(doubled);
// [2, 4, 6]

const even = numbers.filter((num) => num % 2 === 0);
console.log(even);
// [2]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// 6

console.log(numbers.some((num) => num > 2)); // true | alguno cumple condición
console.log(numbers.every((num) => num > 0)); // true | todos cumplen condición

const person = { name: "Alice", age: 25 };

Object.keys(person).forEach((key) => {
	console.log(key, person[key]);
});
// name Alice
// age 25
