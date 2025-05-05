// scope global: para los tres tipos de variable
const direccionBarrio = "Cra 8a #2-27";
let direccionBarrio2 = "Cra 9a #2-27";
var direccionBarrio3 = "Cra 10a #2-27";

if (true) {
	function mostrarDireccionBarrio() {
		console.log(direccionBarrio);
		console.log(direccionBarrio2);
		console.log(direccionBarrio3);
	}
}
mostrarDireccionBarrio();

// scope de función: para los tres tipos de variable
function ejemploCorrecto() {
	if (true) {
		var x = 10; // Scope de función
		let y = 20; // Scope de bloque (solo vive dentro del if)
		const z = 30; // Scope de bloque (solo vive dentro del if)
		console.log(x); // ✅ 10
		console.log(y); // ✅ 20
		console.log(z); // ✅ 30
	}

	console.log(x); // ✅ 10 (porque var tiene scope de función)
	// console.log(y); // ❌ Error: y no está definido (let tiene scope de bloque)
	// console.log(z); // ❌ Error: z no está definido (const tiene scope de bloque)
}

ejemploCorrecto();

function ejemploIncorrecto() {
	if (true) {
		var x = 10;
		let y = 20;
		const z = 30;
	}

	console.log(x); /* ✅ 10 (aunque esté fuera del if, porque var no respeta el
	                bloque, solo la función)*/
	console.log(y); // ❌ Error: y no está definido
	console.log(z); // ❌ Error: z no está definido
}

ejemploIncorrecto();

// scope de bloque: solo para let y const
if (true) {
	let nombreEstudiante = "Angel";
}
console.log(nombreEstudiante);
