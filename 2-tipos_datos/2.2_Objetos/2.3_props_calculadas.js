// propiedades calculadas

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("¿Qué computador llevarás? ", (computer) => {
	if (!computer.trim()) {
		console.log("No ingresaste ningún computador.");
		rl.close();
		return;
	}

	const bag = {
		[`${computer}Computer`]: 5,
	};

	console.log(`Cantidad de ${computer}Computer:`, bag[`${computer}Computer`]);
	rl.close();
});
