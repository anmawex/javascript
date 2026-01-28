// 1. podemos declarar múltiples variables en una linea
let nombre = "Angel",
	edad = 24,
	profesión = "Licenciado";
console.log(nombre);
console.log(edad);
console.log(profesión);

// 2. debemos nombrar bien las variables
let $nombreJefe = "Mario";
let _nombreAsistente = "Juanes";
console.log($nombreJefe);
console.log(_nombreAsistente);

// 3. se diferencia entre mayusculas y minusculas
const APELLIDO = "Ortega";
const apellido = "Casanares";
console.log(APELLIDO);
console.log(apellido);

/* 4. en las constantes los nombres normales (no en mayuscula) se útilizan cuando 
recibimos el valor en tiempo de ejecución */
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("users.json", "utf8"));
console.log(users);
