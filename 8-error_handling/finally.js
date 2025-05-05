try {
	let result = riskyFunction();
} catch (error) {
	console.error(error);
} finally {
	console.log("Este código siempre se ejecuta");
}
