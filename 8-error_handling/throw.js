function dividir(a, b) {
	if (b === 0) {
		throw new Error("No se puede dividir por cero");
	}
	return a / b;
}

try {
	console.log(dividir(10, 0));
} catch (error) {
	console.error(error.message);
}
