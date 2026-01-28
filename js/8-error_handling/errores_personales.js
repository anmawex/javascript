class DivisionPorCeroError extends Error {
	constructor(message) {
		super(message);
		this.name = "DivisionPorCeroError";
	}
}

function dividir(a, b) {
	if (b === 0) {
		throw new DivisionPorCeroError("No se puede dividir por cero");
	}
	return a / b;
}

try {
	dividir(5, 0);
} catch (error) {
	console.error(error.name); // DivisionPorCeroError
	console.error(error.message); // No se puede dividir por cero
}
