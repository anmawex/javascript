// Immediately Invoked Function Expression.
// Expresión de Función Invocada Inmediatamente.

// Problema: no hay alcance de bloque
for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1000);
}

// Solución: crear un ámbito privado
for (var i = 0; i < 3; i++) {
	(function (i) {
		setTimeout(() => console.log(i), 1000);
	})(i);
}
// utilizamos una función anonima
// esta función es una expresión de función
