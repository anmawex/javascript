/* 
1. las funciones traen su this, este depende de donde se llama la función no donde se
define 
2. en funciones flechas el this se comporta diferente <
*/
const persona = {
	nombre: "Luis",
	saludar: function () {
		console.log(`Hola, soy ${this.nombre}`);
	},
};

persona.saludar();
