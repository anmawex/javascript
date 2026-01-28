// CLASES Y CONSTRUCTORES - ES6
// Programación Orientada a Objetos en JavaScript

// === CONCEPTOS FUNDAMENTALES ===

// 1. Clase básica con constructor
class Persona {
    // Constructor - método especial para crear e inicializar objetos
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.creadoEn = new Date();
    }
    
    // Método de instancia
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
    
    // Getter
    get info() {
        return `${this.nombre} (${this.edad} años)`;
    }
    
    // Setter
    set edad(nuevaEdad) {
        if (nuevaEdad > 0 && nuevaEdad < 150) {
            this.edad = nuevaEdad;
        } else {
            console.log('Edad no válida');
        }
    }
}

// Crear instancias de la clase
const persona1 = new Persona('Ana', 30);
const persona2 = new Persona('Juan', 25);

console.log(persona1.saludar()); // "Hola, soy Ana y tengo 30 años"
console.log(persona2.info); // "Juan (25 años)"
persona1.edad = 35; // Usa el setter

// === HERENCIA ===

// 2. Clase que hereda de otra
class Empleado extends Persona {
    constructor(nombre, edad, puesto, salario) {
        // Llamar al constructor de la clase padre con super()
        super(nombre, edad);
        
        // Propiedades específicas de Empleado
        this.puesto = puesto;
        this.salario = salario;
        this.contratado = true;
    }
    
    // Sobrescribir método de la clase padre
    saludar() {
        return `Hola, soy ${this.nombre}, ${this.puesto} y tengo ${this.edad} años`;
    }
    
    // Método específico de Empleado
    trabajar() {
        return `${this.nombre} está trabajando como ${this.puesto}`;
    }
    
    // Usar método del padre con super
    getSaludoCompleto() {
        const saludoPadre = super.saludar();
        return `${saludoPadre}. Mi puesto es ${this.puesto}.`;
    }
    
    // Getter calculado
    get salarioAnual() {
        return this.salario * 12;
    }
}

const empleado1 = new Empleado('María', 28, 'Desarrolladora', 50000);
console.log(empleado1.saludar()); // Usa método sobrescrito
console.log(empleado1.trabajar()); // Método propio
console.log(empleado1.getSaludoCompleto()); // Combina métodos
console.log(empleado1.salarioAnual); // 600000

// === PROPIEDADES Y MÉTODOS ESTÁTICOS ===

// 3. Propiedades y métodos estáticos
class Utilidad {
    // Propiedad estática
    static VERSION = '1.0.0';
    
    // Método estático - no necesita instancia
    static formatearFecha(fecha) {
        return fecha.toLocaleDateString('es-ES');
    }
    
    // Método estático para creación
    static crearId() {
        return Math.random().toString(36).substr(2, 9);
    }
    
    // Método de instancia
    duplicarNumero(numero) {
        return numero * 2;
    }
}

// Usar métodos estáticos sin crear instancia
console.log('Versión:', Utilidad.VERSION);
console.log('Fecha formateada:', Utilidad.formatearFecha(new Date()));
console.log('ID único:', Utilidad.crearId());

// Usar método de instancia
const util = new Utilidad();
console.log('Duplicado:', util.duplicarNumero(5));

// === PROPIEDADES PRIVADAS (CONVENCIONES) ===

// 4. Propiedades privadas con # (ES2022)
class CuentaBancaria {
    // Propiedades privadas
    #saldo;
    #titular;
    #numeroCuenta;
    
    constructor(titular, depositoInicial) {
        this.#titular = titular;
        this.#numeroCuenta = this.#generarNumeroCuenta();
        this.#saldo = depositoInicial;
    }
    
    #generarNumeroCuenta() {
        return 'XXXX-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    }
    
    // Método público para acceder a propiedad privada
    get saldo() {
        return this.#saldo;
    }
    
    // Método público para modificar propiedad privada
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            console.log(`Depositados $${cantidad}. Nuevo saldo: $${this.#saldo}`);
        } else {
            console.log('Cantidad inválida para depósito');
        }
    }
    
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            console.log(`Retirados $${cantidad}. Nuevo saldo: $${this.#saldo}`);
            return true;
        } else {
            console.log('Fondos insuficientes o cantidad inválida');
            return false;
        }
    }
    
    get info() {
        return {
            titular: this.#titular,
            numeroCuenta: this.#numeroCuenta,
            saldo: this.#saldo
        };
    }
}

const cuenta = new CuentaBancaria('Juan Pérez', 1000);
console.log(cuenta.saldo); // 1000
cuenta.depositar(500); // 1500
cuenta.retirar(200); // 1300
console.log(cuenta.info);

// === MÉTODOS DE CLASE ===

// 5. Diferentes tipos de métodos
class Calculadora {
    // Método de instancia normal
    sumar(a, b) {
        return a + b;
    }
    
    // Método asíncrono
    async sumarAsync(a, b) {
        // Simular operación asíncrona
        await new Promise(resolve => setTimeout(resolve, 100));
        return a + b;
    }
    
    // Método generador
    *secuencia(inicio, fin, paso = 1) {
        for (let i = inicio; i <= fin; i += paso) {
            yield i;
        }
    }
    
    // Método estático
    static PI = 3.14159;
    
    static areaCirculo(radio) {
        return this.PI * radio * radio;
    }
}

const calc = new Calculadora();
console.log(calc.sumar(5, 3)); // 8

calc.sumarAsync(10, 20).then(resultado => {
    console.log('Suma asíncrona:', resultado); // 30
});

const secuencia = calc.secuencia(1, 5);
console.log(...secuencia); // [1, 2, 3, 4, 5]

console.log('Área del círculo:', Calculadora.areaCirculo(10)); // 314.159

// === GETTERS Y SETTERS ===

// 6. Getters y setters avanzados
class Rectangulo {
    constructor(ancho, alto) {
        this._ancho = ancho;
        this._alto = alto;
    }
    
    // Getter para área
    get area() {
        return this._ancho * this._alto;
    }
    
    // Getter para perímetro
    get perimetro() {
        return 2 * (this._ancho + this._alto);
    }
    
    // Getter para dimensiones
    get dimensiones() {
        return `${this._ancho} x ${this._alto}`;
    }
    
    // Setter para dimensiones
    set dimensiones(dimensiones) {
        const [ancho, alto] = dimensiones.split('x').map(n => parseInt(n.trim()));
        if (ancho > 0 && alto > 0) {
            this._ancho = ancho;
            this._alto = alto;
        } else {
            console.log('Dimensiones inválidas');
        }
    }
    
    // Setter con validación
    set escala(factor) {
        if (factor > 0) {
            this._ancho *= factor;
            this._alto *= factor;
        } else {
            console.log('Factor de escala inválido');
        }
    }
}

const rect = new Rectangulo(10, 5);
console.log('Área:', rect.area); // 50
console.log('Perímetro:', rect.perimetro); // 30
console.log('Dimensiones:', rect.dimensiones); // "10 x 5"

rect.dimensiones = '20 x 10'; // Usa el setter
console.log('Nueva área:', rect.area); // 200

rect.escala = 2; // Usa el setter
console.log('Dimensiones finales:', rect.dimensiones); // "40 x 20"

// === HERENCIA MÚLTIPLE (MIXINS) ===

// 7. Simular herencia múltiple con mixins
const volador = {
    volar(altura) {
        console.log(`${this.nombre} vuela a ${altura} metros`);
    }
};

const nadador = {
    nadar(profundidad) {
        console.log(`${this.nombre} nada a ${profundidad} metros`);
    }
};

class Ave {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// Aplicar mixins a la clase
Object.assign(Ave.prototype, volador, nadador);

const paloma = new Ave('Paloma');
paloma.volar(100); // "Paloma vuela a 100 metros"
paloma.nadar(5); // "Paloma nada a 5 metros"

// === CLASES ABSTRACTAS ===

// 8. Simular clase abstracta
class Animal {
    constructor(nombre) {
        if (this.constructor === Animal) {
            throw new Error('Animal es una clase abstracta y no puede ser instanciada');
        }
        this.nombre = nombre;
    }
    
    // Método abstracto (debe ser implementado por subclases)
    hacerSonido() {
        throw new Error('El método hacerSonido debe ser implementado por la subclase');
    }
    
    // Método concreto
    dormir() {
        return `${this.nombre} está durmiendo`;
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    
    // Implementar método abstracto
    hacerSonido() {
        return `${this.nombre} (un ${this.raza}) ladra: ¡Guau!`;
    }
    
    // Método adicional
    moverCola() {
        return `${this.nombre} mueve la cola felizmente`;
    }
}

const perro = new Perro('Firulais', 'Labrador');
console.log(perro.hacerSonido()); // "Firulais (un Labrador) ladra: ¡Guau!"
console.log(perro.dormir()); // "Firulais está durmiendo"
console.log(perro.moverCola()); // "Firulais mueve la cola felizmente"

// === COMPOSICIÓN SOBRE HERENCIA ===

// 9. Composición: "has-a" en lugar de "is-a"
class Motor {
    constructor(tipo, potencia) {
        this.tipo = tipo;
        this.potencia = potencia;
        this.encendido = false;
    }
    
    encender() {
        this.encendido = true;
        return `Motor ${this.tipo} encendido (${this.potencia} HP)`;
    }
    
    apagar() {
        this.encendido = false;
        return `Motor ${this.tipo} apagado`;
    }
}

class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        // Composición: el coche "tiene un" motor
        this.motor = new Motor('gasolina', 150);
    }
    
    arrancar() {
        if (!this.motor.encendido) {
            return this.motor.encender() + '. ¡Coche listo para conducir!';
        }
        return 'El coche ya está en marcha';
    }
    
    detener() {
        if (this.motor.encendido) {
            return this.motor.apagar() + '. Coche detenido.';
        }
        return 'El coche ya está detenido';
    }
}

const miCoche = new Coche('Toyota', 'Corolla');
console.log(miCoche.arrancar()); // "Motor gasolina encendido (150 HP). ¡Coche listo para conducir!"
console.log(miCoche.detener()); // "Motor gasolina apagado. Coche detenido."

// === FACTORY PATTERN ===

// 10. Factory Method
class Vehiculo {
    constructor(marca, modelo, tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
    }
    
    static crear(tipo, marca, modelo) {
        switch (tipo.toLowerCase()) {
            case 'coche':
                return new Coche(marca, modelo);
            case 'moto':
                return new Moto(marca, modelo);
            case 'bicicleta':
                return new Bicicleta(marca, modelo);
            default:
                throw new Error(`Tipo de vehículo no soportado: ${tipo}`);
        }
    }
    
    describir() {
        return `${this.marca} ${this.modelo} (${this.tipo})`;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo, 'moto');
    }
}

class Bicicleta extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo, 'bicicleta');
    }
}

// Uso del factory
const coche = Vehiculo.crear('coche', 'Honda', 'Civic');
const moto = Vehiculo.crear('moto', 'Yamaha', 'R1');
const bici = Vehiculo.crear('bicicleta', 'Trek', 'Marlin');

console.log(coche.describir()); // "Honda Civic (coche)"
console.log(moto.describir()); // "Yamaha R1 (moto)"
console.log(bici.describir()); // "Trek Marlin (bicicleta)"

// === RESUMEN ===

console.log(`
=== RESUMEN CLASES Y CONSTRUCTORES ===
✓ class: palabra clave para definir clases
✓ constructor: método especial para inicializar objetos
✓ extends: herencia de clases
✓ super: llamar al constructor padre
✓ static: propiedades y métodos estáticos
✓ #: propiedades privadas (ES2022)
✓ get/set: getters y setters
✓ this: referencia a la instancia actual
✓ new: operador para crear instancias
✓ Herencia: reutilización de código
✓ Composición: "has-a" sobre "is-a"
✓ Factory Pattern: creación controlada de objetos
✓ Clases abstractas: simuladas con JavaScript
✓ Mixins: composición de comportamientos
`);
