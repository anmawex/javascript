const error = new Error("Algo salió mal");
console.log(error);

// errores nativos
/*
Error
ReferenceError
TypeError
SyntaxError
RangeError
URIError
EvalError
*/

// extract trace
function nivelUno() {
	nivelDos();
}

function nivelDos() {
	throw new Error("Algo se rompió");
}

try {
	nivelUno();
} catch (error) {
	console.log(error.stack);
}

// propiedades personalizadas (POO)
class ApiError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.name = "ApiError";
		this.statusCode = statusCode;
	}
}

try {
	throw new ApiError("No autorizado", 401);
} catch (error) {
	console.log(error.statusCode); // 401
}
