// PROTOTIPOS Y HERENCIA EN JAVASCRIPT
// Sistema de prototipos y herencia prototípica

// === CONCEPTO DE PROTOTIPO ===

// 1. Todo en JavaScript es un objeto con un prototipo
console.log('Prototipo de Object:', Object.prototype);
console.log('Prototipo de Array:', Array.prototype);
console.log('Prototipo de Function:', Function.prototype);

// 2. Los objetos heredan propiedades de su prototipo
const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
};

// Crear objeto usando Object.create con prototipo personalizado
const empleado = Object.create(persona);
empleado.puesto = 'Desarrollador';
empleado.salario = 50000;

console.log(empleado.nombre); // Heredado del prototipo
console.log(empleado.saludar()); // Heredado del prototipo
console.log(empleado.puesto); // Propiedad propia

// === CONSTRUCTOR FUNCTION Y PROTOTIPO ===

// 3. Función constructora con prototipo
function PersonaConstructor(nombre, edad) {
    // Propiedades de instancia
    this.nombre = nombre;
    this.edad = edad;
    this.creadoEn = new Date();
}

// Métodos en el prototipo (compartidos por todas las instancias)
PersonaConstructor.prototype.saludar = function() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
};

PersonaConstructor.prototype.cumplirAnios = function() {
    return new Date().getFullYear() - this.creadoEn.getFullYear();
};

// Crear instancias
const personaA = new PersonaConstructor('Ana', 25);
const personaB = new PersonaConstructor('Carlos', 32);

console.log(personaA.saludar()); // "Hola, soy Ana y tengo 25 años"
console.log(personaB.cumplirAnios()); // Años cumplidos

// Verificar que comparten el mismo prototipo
console.log(personaA.saludar === personaB.saludar); // true

// === HERENCIA PROTOTÍPICA ===

// 4. Herencia usando prototipos
function EmpleadoConstructor(nombre, edad, puesto, salario) {
    // Llamar al constructor padre
    PersonaConstructor.call(this, nombre, edad);
    
    // Propiedades específicas de empleado
    this.puesto = puesto;
    this.salario = salario;
}

// Establecer herencia prototípica
EmpleadoConstructor.prototype = Object.create(PersonaConstructor.prototype);
EmpleadoConstructor.prototype.constructor = EmpleadoConstructor;

// Sobrescribir método del prototipo padre
EmpleadoConstructor.prototype.saludar = function() {
    return `Hola, soy ${this.nombre}, ${this.puesto} y gano $${this.salario}`;
};

// Agregar método específico de empleado
EmpleadoConstructor.prototype.trabajar = function() {
    return `${this.nombre} está trabajando como ${this.puesto}`;
};

// Método que usa método del padre
EmpleadoConstructor.prototype.getInfoCompleta = function() {
    const saludoBase = PersonaConstructor.prototype.saludar.call(this);
    return `${saludoBase}. ${this.trabajar()}`;
};

const empleado1 = new EmpleadoConstructor('María', 28, 'Diseñadora', 45000);
console.log(empleado1.saludar()); // Usa método sobrescrito
console.log(empleado1.trabajar()); // Método propio
console.log(empleado1.getInfoCompleta()); // Combina métodos

// === PROTOTYPY CHAIN ===

// 5. Cadena de prototipos
function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.comer = function() {
    return `${this.nombre} está comiendo`;
};

Animal.prototype.dormir = function() {
    return `${this.nombre} está durmiendo`;
};

function Perro(nombre, raza) {
    Animal.call(this, nombre);
    this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function() {
    return `${this.nombre} (${this.raza}) ladra: ¡Guau!`;
};

// Sobrescribir método del prototipo padre
Perro.prototype.comer = function() {
    const accionBase = Animal.prototype.comer.call(this);
    return `${accionBase} como un buen perro`;
};

const perro1 = new Perro('Firulais', 'Labrador');
console.log(perro1.comer()); // "Firulais está comiendo como un buen perro"
console.log(perro1.dormir()); // "Firulais está durmiendo" (heredado)
console.log(perro1.ladrar()); // "Firulais (Labrador) ladra: ¡Guau!"

// === PROPIEDADES Y MÉTODOS ESTÁTICOS ===

// 6. Propiedades estáticas en constructores
function Matematicas() {}

Matematicas.PI = 3.14159;
Matematicas.E = 2.71828;

Matematicas.sumar = function(a, b) {
    return a + b;
};

Matematicas.multiplicar = function(a, b) {
    return a * b;
};

// Uso de propiedades estáticas
console.log('PI:', Matematicas.PI);
console.log('Suma:', Matematicas.sumar(5, 3));
console.log('Multiplicación:', Matematicas.multiplicar(4, 6));

// === INSTANCEOF Y PROTOTIPO ===

// 7. Verificar instancia y prototipo
console.log(perro1 instanceof Perro); // true
console.log(perro1 instanceof Animal); // true
console.log(perro1 instanceof Object); // true

console.log(perro1.constructor === Perro); // true
console.log(perro1.constructor.prototype === Perro.prototype); // true

// 8. hasOwnProperty vs propiedad heredada
console.log(perro1.hasOwnProperty('nombre')); // true (propiedad propia)
console.log(perro1.hasOwnProperty('comer')); // false (heredada del prototipo)
console.log('nombre' in perro1); // true (propiedad propia)
console.log('comer' in perro1); // true (propiedad heredada)

// === OBJECT.CREATE Y PROTOTIPOS ===

// 9. Object.create para crear objetos con prototipo específico
const prototipoVehiculo = {
    encender: function() {
        return `${this.marca} ${this.modelo} encendido`;
    },
    apagar: function() {
        return `${this.marca} ${this.modelo} apagado`;
    }
};

function crearVehiculo(marca, modelo, tipo) {
    const vehiculo = Object.create(prototipoVehiculo);
    vehiculo.marca = marca;
    vehiculo.modelo = modelo;
    vehiculo.tipo = tipo;
    vehiculo.encendido = false;
    return vehiculo;
}

const coche = crearVehiculo('Toyota', 'Corolla', 'coche');
const moto = crearVehiculo('Honda', 'CBR', 'moto');

console.log(coche.encender()); // "Toyota Corolla encendido"
console.log(moto.apagar()); // "Honda CBR apagado"

// === MODIFICACIÓN DINÁMICA DE PROTOTIPOS ===

// 10. Agregar métodos al prototipo dinámicamente
function ArrayExtendido() {
    // Agregar método personalizado a Array
    Array.prototype.primero = function() {
        return this.length > 0 ? this[0] : undefined;
    };
    
    Array.prototype.ultimo = function() {
        return this.length > 0 ? this[this.length - 1] : undefined;
    };
    
    Array.prototype.sumar = function() {
        return this.reduce((total, num) => total + num, 0);
    };
    
    Array.prototype.promedio = function() {
        return this.length > 0 ? this.sumar() / this.length : 0;
    };
}

// Extender prototipo de Array
ArrayExtendido();

const numeros = [1, 2, 3, 4, 5];
console.log('Primer número:', numeros.primero()); // 1
console.log('Último número:', numeros.ultimo()); // 5
console.log('Suma:', numeros.sumar()); // 15
console.log('Promedio:', numeros.promedio()); // 3

// === PROTOTIPOS Y CLASES ES6 ===

// 11. Relación entre clases ES6 y prototipos
class PersonaES6 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}

// Las clases ES6 son azúcar sintáctico sobre prototipos
console.log('Prototipo de PersonaES6:', PersonaES6.prototype);
console.log('saludar en prototipo:', PersonaES6.prototype.saludar);

// Verificar que funciona igual que con constructores
const personaES6 = new PersonaES6('Laura', 27);
console.log(personaES6.saludar()); // "Hola, soy Laura"

// === PROPIEDAD prototype ===

// 12. La propiedad prototype es modificable
function Gato(nombre) {
    this.nombre = nombre;
}

Gato.prototype.maullar = function() {
    return `${this.nombre} maúlla: Miau`;
};

// Modificar el prototipo dinámicamente
Gato.prototype.dormir = function() {
    return `${this.nombre} está durmiendo en un lugar soleado`;
};

const gato = new Gato('Michi');
console.log(gato.maullar()); // "Michi maúlla: Miau"
console.log(gato.dormir()); // "Michi está durmiendo en un lugar soleado"

// === PROTOTIPOS Y HERENCIA MÚLTIPLE ===

// 13. Simular herencia múltiple con prototipos
const volador = {
    volar: function(altura) {
        return `${this.nombre} vuela a ${altura} metros`;
    }
};

const nadador = {
    nadar: function(profundidad) {
        return `${this.nombre} nada a ${profundidad} metros`;
    }
};

function Ave(nombre) {
    this.nombre = nombre;
}

// Copiar métodos de mixins al prototipo
Object.assign(Ave.prototype, volador, nadador);

const pato = new Ave('Pato');
console.log(pato.volar(10)); // "Pato vuela a 10 metros"
console.log(pato.nadar(5)); // "Pato nada a 5 metros"

// === INSPECCIÓN DE PROTOTIPOS ===

// 14. Recorrer la cadena de prototipos
function mostrarCadenaPrototipos(objeto) {
    let prototipo = Object.getPrototypeOf(objeto);
    const cadena = [];
    
    while (prototipo && prototipo !== Object.prototype) {
        cadena.push(prototipo.constructor.name || 'Object sin nombre');
        prototipo = Object.getPrototypeOf(prototipo);
    }
    
    cadena.push('Object.prototype');
    return cadena.join(' → ');
}

console.log('Cadena de prototipos:', mostrarCadenaPrototipos(perro1));
// "Perro → Animal → Object.prototype"

// 15. Verificar si un método existe en la cadena de prototipos
function tieneMetodo(objeto, nombreMetodo) {
    let prototipo = Object.getPrototypeOf(objeto);
    
    while (prototipo && prototipo !== Object.prototype) {
        if (prototipo.hasOwnProperty(nombreMetodo)) {
            return true;
        }
        prototipo = Object.getPrototypeOf(prototipo);
    }
    
    return false;
}

console.log('¿Tiene método ladrar?:', tieneMetodo(perro1, 'ladrar')); // true
console.log('¿Tiene método comer?:', tieneMetodo(perro1, 'comer')); // true
console.log('¿Tiene método inexistente?:', tieneMetodo(perro1, 'inexistente')); // false

// === RESUMEN ===

console.log(`
=== RESUMEN PROTOTIPOS Y HERENCIA ===
✓ Prototipo: objeto del cual heredan propiedades otros objetos
✓ __proto__: referencia al prototipo de un objeto
✓ prototype: propiedad del constructor que apunta al prototipo
✓ Object.create(): crear objeto con prototipo específico
✓ Herencia prototípica: objetos heredan de su prototipo
✓ new: crea instancia con prototipo del constructor
✓ instanceof: verifica si objeto es instancia de constructor
✓ hasOwnProperty: verifica si propiedad es propia (no heredada)
✓ in: verifica si propiedad existe (propia o heredada)
✓ Modificación dinámica: prototipos pueden modificarse en tiempo de ejecución
✓ Cadena de prototipos: __proto__ → prototype → prototype → ...
✓ Mixins: composición de comportamientos mediante Object.assign
✓ Clases ES6: azúcar sintáctico sobre sistema de prototipos
`);
