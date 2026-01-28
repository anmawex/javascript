try {
	// Código que puede lanzar un error
	// let result = JSON.parse('{"name": "Ana"}');
	let result = JSON.parse({ name: "Ana" });

	console.log(result.name);
} catch (error) {
	// Código que maneja el error
	console.error("Ocurrió un error:", error.message);
}
