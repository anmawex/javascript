// objetos
let user = new Object(); //constructor
let products = {}; //objeto literal

// acceso a un objeto
let player = {
	name: "Cristiano Ronaldo",
	equipo: "Al Nassar",
	"mira, puedo tener varias palabras": true, //recomendado la coma al final (add +)
};

let searchName = "name";
console.log("Nombre: " + player.name);
console.log(
	"Nombre: " + player.searchName
); /* la notación punto a diferencia de corchete, no funciona de esta manera*/

// agregar un valor
player.newData = "+800 goles";
console.log(player);

delete player.equipo;
console.log(player);

// notación de corchetes para acceder a keys con más de una palabra y separada
console.log(
	"key con varias palabras es: " + player["mira, puedo tener varias palabras"]
);

// limitaciones en los nombres (las palabras reservadas no importan)
let obj = {
	for: "soy un for",
	let: "soy un let",
	return: "soy un return",
};

console.log(obj.for + " " + obj.let + " " + obj.return);

// dentro de un objeto hay conversión en las key, por ejemplo un 0 puede pasar a ser "0"
// averiguar sobre __proto__ <
// podemos recorrer un objeto con for in
