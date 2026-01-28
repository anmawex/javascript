// SYMBOL - Tipo Primitivo Único e Inmutable
// Introducido en ES6 para crear identificadores únicos

// === CREACIÓN DE SYMBOLS ===
// 1. Symbol básico
const simbolo1 = Symbol();
const simbolo2 = Symbol();

console.log(simbolo1); // Symbol()
console.log(simbolo2); // Symbol()
console.log(simbolo1 === simbolo2); // false (siempre son únicos)

// 2. Symbol con descripción
const simboloConDescripcion = Symbol('id_usuario');
const otroSimbolo = Symbol('id_usuario');

console.log(simboloConDescripcion); // Symbol(id_usuario)
console.log(simboloConDescripcion === otroSimbolo); // false (aunque tengan misma descripción)

// 3. Acceder a la descripción
console.log(simboloConDescripcion.description); // "id_usuario"

// === USOS PRINCIPALES ===

// 4. Como clave de objeto (propiedades privadas)
const usuario = {
	nombre: "Ana",
	edad: 30,
	[Symbol('id')]: 12345,
	[Symbol('token')]: "abc123xyz"
};

console.log(usuario.nombre); // "Ana"
console.log(usuario[Symbol('id')]); // undefined (no se puede acceder directamente)

// 5. Acceder a propiedades Symbol
const idSymbol = Symbol('id');
const tokenSymbol = Symbol('token');

const persona = {
	nombre: "Juan",
	[idSymbol]: 67890,
	[tokenSymbol]: "token_secreto"
};

console.log(persona[idSymbol]); // 67890
console.log(persona[tokenSymbol]); // "token_secreto"

// 6. Symbols no aparecen en iteraciones normales
for (let clave in persona) {
	console.log(clave); // solo "nombre", no los symbols
}

console.log(Object.keys(persona)); // ["nombre"]
console.log(Object.getOwnPropertyNames(persona)); // ["nombre"]

// 7. Obtener todos los symbols de un objeto
const symbolsPersona = Object.getOwnPropertySymbols(persona);
console.log(symbolsPersona); // [Symbol(id), Symbol(token)]
console.log(symbolsPersona.length); // 2

// 8. Acceder a todas las propiedades (incluyendo symbols)
function obtenerTodasLasPropiedades(obj) {
	const propiedadesNormales = Object.keys(obj);
	const propiedadesSymbol = Object.getOwnPropertySymbols(obj);
	
	return [
		...propiedadesNormales,
		...propiedadesSymbol.map(sym => sym.toString())
	];
}

console.log(obtenerTodasLasPropiedades(persona));
// ["nombre", "Symbol(id)", "Symbol(token)"]

// === SYMBOLS GLOBALES ===

// 9. Symbol.for() - Symbol global o registro
const simboloGlobal1 = Symbol.for('mi_clave');
const simboloGlobal2 = Symbol.for('mi_clave');

console.log(simboloGlobal1 === simboloGlobal2); // true (mismo symbol global)

const simboloLocal = Symbol('mi_clave');
console.log(simboloGlobal1 === simboloLocal); // false (local vs global)

// 10. Symbol.keyFor() - obtener clave de symbol global
console.log(Symbol.keyFor(simboloGlobal1)); // "mi_clave"
console.log(Symbol.keyFor(simboloLocal)); // undefined (no es global)

// === SYMBOLS PREDEFINIDOS ===

// 11. Symbol.iterator - para hacer objetos iterables
const miIterable = {
	datos: [1, 2, 3, 4],
	[Symbol.iterator]() {
		let indice = 0;
		const datos = this.datos;
		
		return {
			next() {
				if (indice < datos.length) {
					return { value: datos[indice++], done: false };
				}
				return { done: true };
			}
		};
	}
};

for (const valor of miIterable) {
	console.log(valor); // 1, 2, 3, 4
}

// 12. Symbol.toStringTag - personalizar toString()
const objetoPersonalizado = {
	nombre: "Objeto especial",
	[Symbol.toStringTag]: "MiObjeto"
};

console.log(objetoPersonalizado.toString()); // "[object MiObjeto]"
console.log(Object.prototype.toString.call(objetoPersonalizado)); // "[object MiObjeto]"

// 13. Symbol.toPrimitive - conversión a primitivo
const numeroPersonalizado = {
	valor: 42,
	[Symbol.toPrimitive](hint) {
		if (hint === 'number') return this.valor;
		if (hint === 'string') return `Número: ${this.valor}`;
		return this.valor;
	}
};

console.log(Number(numeroPersonalizado)); // 42
console.log(String(numeroPersonalizado)); // "Número: 42"
console.log(numeroPersonalizado + 10); // 52

// === CASOS DE USO PRÁCTICOS ===

// 14. Constantes enumeradas
const ESTADOS = {
	PENDIENTE: Symbol('pendiente'),
	APROBADO: Symbol('aprobado'),
	RECHAZADO: Symbol('rechazado')
};

function procesarPedido(estado) {
	switch (estado) {
		case ESTADOS.PENDIENTE:
			return "Pedido pendiente de revisión";
		case ESTADOS.APROBADO:
			return "Pedido aprobado";
		case ESTADOS.RECHAZADO:
			return "Pedido rechazado";
		default:
			return "Estado desconocido";
	}
}

console.log(procesarPedido(ESTADOS.APROBADO)); // "Pedido aprobado"

// 15. Métodos privados en clases (antes de #private)
class ContadorPrivado {
	constructor() {
		this[Symbol('contador')] = 0;
	}
	
	incrementar() {
		const simboloContador = Object.getOwnPropertySymbols(this)
			.find(sym => sym.description === 'contador');
		this[simboloContador]++;
	}
	
	obtenerValor() {
		const simboloContador = Object.getOwnPropertySymbols(this)
			.find(sym => sym.description === 'contador');
		return this[simboloContador];
	}
}

const contador = new ContadorPrivado();
contador.incrementar();
contador.incrementar();
console.log(contador.obtenerValor()); // 2

// === VERIFICACIÓN Y USOS AVANZADOS ===

// 16. Verificar si algo es un Symbol
function esSymbol(valor) {
	return typeof valor === 'symbol';
}

console.log(esSymbol(Symbol())); // true
console.log(esSymbol(Symbol('test'))); // true
console.log(esSymbol('string')); // false
console.log(esSymbol(123)); // false

// 17. Serialización (los symbols no se serializan)
const objetoConSymbol = {
	nombre: "test",
	[Symbol('secreto')]: "valor secreto"
};

console.log(JSON.stringify(objetoConSymbol)); // {"nombre":"test"} (el symbol se pierde)

// 18. Resumen
console.log(`
=== RESUMEN SYMBOL ===
✓ Tipo primitivo único e inmutable
✓ Siempre único: Symbol() !== Symbol()
✓ Symbol.for() para symbols globales compartidos
✓ Propiedades de objeto no enumerables
✓ Útiles para propiedades "privadas" y metaprogramación
✓ Symbols predefinidos: iterator, toStringTag, toPrimitive
✓ No se serializan en JSON
✓ Perfectos para constantes y metadatos
`);
