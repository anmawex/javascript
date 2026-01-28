// problema: necesito los códigos en el orden de creación
let codes = {
	49: "Germany",
	41: "Switzerland",
	44: "Great Britain",
	1: "USA",
};

for (let code in codes) {
	console.log(code);
}

// solución: no tener keys que sean enteros
let codes2 = {
	"+49": "Germany",
	"+41": "Switzerland",
	"+44": "Great Britain",
	"+1": "USA",
};

for (let code in codes2) {
	console.log(code);
}
