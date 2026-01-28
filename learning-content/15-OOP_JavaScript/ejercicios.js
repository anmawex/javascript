// EJERCICIOS PRÁCTICOS - OOP JAVASCRIPT
// Clases, Prototipos, Herencia, This

// === EJERCICIO 1: CLASES BÁSICAS ===

// 1.1 Crear una clase Persona
class Persona {
    // Tu código aquí:
    // - Propiedades: nombre, edad, email
    // - Constructor para inicializar
    // - Método: presentarse()
    // - Getter: info
    // - Setter: edad (con validación 0-120)
}

// 1.2 Crear una clase Empleado que herede de Persona
class Empleado extends Persona {
    // Tu código aquí:
    // - Propiedades adicionales: puesto, salario
    // - Constructor que use super()
    // - Método: trabajar()
    // - Sobrescribir: presentarse()
    // - Getter: salarioAnual
}

// 1.3 Crear instancias y probar
const persona1 = new Persona('Ana', 30, 'ana@ejemplo.com');
const empleado1 = new Empleado('Juan', 28, 'juan@empresa.com', 'Desarrollador', 60000);

// Prueba aquí:
// console.log(persona1.presentarse());
// console.log(empleado1.presentarse());
// console.log(empleado1.trabajar());
// console.log(empleado1.salarioAnual);

// === EJERCICIO 2: PROTOTIPOS ===

// 2.1 Crear constructor con prototipo
function Animal(nombre) {
    // Tu código aquí:
    // - Propiedad: nombre
    // - Método: comer()
    // - Método: dormir()
}

// 2.2 Extender prototipo para Perro
// Tu código aquí:
// - Heredar de Animal
// - Agregar método: ladrar()
// - Sobrescribir: comer()

// 2.3 Crear instancias y probar
const perro = new Perro('Firulais');

// Prueba aquí:
// console.log(perro.comer());
// console.log(perro.dormir());
// console.log(perro.ladrar());

// === EJERCICIO 3: THIS CONTEXT ===

// 3.1 Función que pierde contexto
function crearProcesador() {
    this.datos = [1, 2, 3];
    
    return {
        procesar: function() {
            // Tu código aquí:
            // - Devuelve los datos procesados (duplicados)
            // - Usa map sobre this.datos
        },
        
        procesarArrow: () => {
            // Tu código aquí:
            // - Devuelve los datos procesados (triplicados)
            // - Usa map sobre this.datos
        }
    };
}

// 3.2 Solucionar problema de contexto
function crearProcesadorCorregido() {
    this.datos = [1, 2, 3];
    
    // Tu código aquí:
    // - Usa bind para mantener contexto
    // - O usa arrow functions
}

// 3.3 Probar pérdida y solución de contexto
const procesador1 = crearProcesador();
const procesador2 = crearProcesadorCorregido();

// Prueba aquí:
// console.log('Procesador 1:', procesador1.procesar()); // undefined
// console.log('Procesador 1 (arrow):', procesador1.procesarArrow()); // [2, 4, 6]
// console.log('Procesador 2:', procesador2.procesar()); // [2, 4, 6]

// === EJERCICIO 4: HERENCIA MÚLTIPLE ===

// 4.1 Crear mixins para comportamientos
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

// 4.2 Crear clase Ave que use mixins
class Ave {
    constructor(nombre) {
        // Tu código aquí
    }
    
    // Tu código aquí:
    // - Aplicar mixins volador y nadador al prototipo
}

// 4.3 Probar herencia múltiple
const aguila = new Ave('Águila');

// Prueba aquí:
// console.log(aguila.volar(100));
// console.log(aguila.nadar(50));

// === EJERCICIO 5: PATRONES DE DISEÑO ===

// 5.1 Implementar Singleton
class Database {
    // Tu código aquí:
    // - Constructor privado (solo se puede crear una instancia)
    // - Método estático getInstance()
    // - Métodos: connect(), disconnect(), query()
}

// 5.2 Probar Singleton
const db1 = Database.getInstance();
const db2 = Database.getInstance();

// Prueba aquí:
// console.log(db1 === db2); // true
// console.log(db1.connect());

// 5.3 Factory Pattern
class VehiculoFactory {
    // Tu código aquí:
    // - Método estático crear(tipo, marca, modelo)
    // - Soporta: 'coche', 'moto', 'bicicleta'
    // - Retorna instancia apropiada
}

// 5.4 Probar Factory
const coche = VehiculoFactory.crear('coche', 'Toyota', 'Corolla');
const moto = VehiculoFactory.crear('moto', 'Honda', 'CBR');

// Prueba aquí:
// console.log(coche.describir());
// console.log(moto.describir());

// === EJERCICIO 6: PROPIEDADES PRIVADAS ===

// 6.1 Clase con propiedades privadas (ES2022+)
class CuentaBancaria {
    constructor(saldoInicial) {
        // Tu código aquí:
        // - Propiedad privada #saldo
        // - Propiedad privada #titular
        // - Método privado #generarNumero()
    }
    
    // Tu código aquí:
    // - Métodos públicos: depositar(), retirar(), getSaldo()
    // - Getter para información segura
}

// 6.2 Probar propiedades privadas
const cuenta = new CuentaBancaria(1000);

// Prueba aquí:
// console.log(cuenta.getSaldo()); // 1000
// cuenta.depositar(500);
// console.log(cuenta.getSaldo()); // 1500
// cuenta.retirar(200);
// console.log(cuenta.getSaldo()); // 1300

// === EJERCICIO 7: GETTERS Y SETTERS ===

// 7.1 Clase con getters y setters
class Temperatura {
    constructor(celsius) {
        // Tu código aquí:
        // - Propiedad privada #celsius
        // - Inicializar con valor pasado
    }
    
    // Tu código aquí:
    // - Getter para celsius
    // - Getter para fahrenheit (calculado)
    // - Setter para celsius (con validación -273 a 1000)
    // - Setter para fahrenheit (con validación -459 a 2120)
}

// 7.2 Probar getters y setters
const temp = new Temperatura(25);

// Prueba aquí:
// console.log(temp.celsius); // 25
// console.log(temp.fahrenheit); // 77
// temp.celsius = 30;
// console.log(temp.fahrenheit); // 86
// temp.fahrenheit = 100;
// console.log(temp.celsius); // 37.78

// === EJERCICIO 8: MÉTODOS ESTÁTICOS ===

// 8.1 Clase con métodos estáticos
class Calculadora {
    // Tu código aquí:
    // - Constante estática PI
    // - Método estático sumar(a, b)
    // - Método estático restar(a, b)
    // - Método estático multiplicar(a, b)
    // - Método estático dividir(a, b)
}

// 8.2 Probar métodos estáticos
// Prueba aquí:
// console.log('PI:', Calculadora.PI);
// console.log('Suma:', Calculadora.sumar(5, 3));
// console.log('Resta:', Calculadora.restar(10, 4));
// console.log('Multiplicación:', Calculadora.multiplicar(6, 7));
// console.log('División:', Calculadora.divir(20, 4));

// === EJERCICIO 9: COMPOSICIÓN SOBRE HERENCIA ===

// 9.1 Componentes que pueden ser compuestos
class Motor {
    constructor(tipo, potencia) {
        // Tu código aquí
    }
    
    encender() {
        // Tu código aquí
    }
    
    apagar() {
        // Tu código aquí
    }
}

class Coche {
    constructor(marca, modelo) {
        // Tu código aquí:
        // - Composición: coche tiene un motor
        // - Usar Motor por defecto
    }
    
    arrancar() {
        // Tu código aquí:
        // - Encender motor si está apagado
        - Devolver mensaje de estado
    }
    
    detener() {
        // Tu código aquí:
        // - Apagar motor si está encendido
        - Devolver mensaje de estado
    }
}

// 9.2 Probar composición
const tesla = new Coche('Tesla', 'Model 3');

// Prueba aquí:
// console.log(tesla.arrancar());
// console.log(tesla.detener());
// console.log(tesla.motor.encendido); // false

// === EJERCICIO 10: PROYECTO INTEGRADOR ===

// 10.1 Sistema de gestión de estudiantes
class Estudiante {
    constructor(nombre, edad, grado) {
        // Tu código aquí:
        // - Propiedades básicas
        // - Array de calificaciones vacío
    }
    
    // Tu código aquí:
    // - agregarCalificacion(materia, nota)
    // - obtenerPromedio()
    // - estaAprobado()
}

// 10.2 Sistema de gestión de cursos
class Curso {
    constructor(nombre, codigo, creditos) {
        // Tu código aquí:
        // - Propiedades básicas
        // - Array de estudiantes inscritos
    }
    
    // Tu código aquí:
    // - inscribirEstudiante(estudiante)
    // - eliminarEstudiante(estudiante)
    - // obtenerEstudiantes()
    // - hayCupo()
}

// 10.3 Sistema de gestión académica
class SistemaAcademico {
    constructor() {
        // Tu código aquí:
        // - Arrays para estudiantes y cursos
        // - Métodos para gestionar ambos
    }
    
    // Tu código aquí:
    // - agregarEstudiante(estudiante)
    // - agregarCurso(curso)
    - inscribirEstudianteEnCurso(estudiante, curso)
    - obtenerPromedioEstudiante(estudiante)
    - obtenerEstudiantesPorCurso(curso)
}

// 10.4 Probar sistema integrado
const sistema = new SistemaAcademico();

// Crear estudiantes
const estudiante1 = new Estudiante('Ana', 20, 'Segundo');
const estudiante2 = new Estudiante('Juan', 22, 'Tercero');
const estudiante3 = new Estudiante('María', 21, 'Segundo');

// Crear cursos
const curso1 = new Curso('Matemáticas', 'MAT101', 4);
const curso2 = new Curso('Física', 'FIS101', 3);
const curso3 = new Curso('Química', 'QUI101', 3);

// Probar sistema
// sistema.agregarEstudiante(estudiante1);
// sistema.agregarEstudiante(estudiante2);
// sistema.agregarEstudiante(estudiante3);
// sistema.agregarCurso(curso1);
// sistema.agregarCurso(curso2);
// sistema.agregarCurso(curso3);

// Inscribir estudiantes en cursos
// sistema.inscribirEstudianteEnCurso(estudiante1, curso1);
// estudiante1.agregarCalificacion('Matemáticas', 9);
// estudiante1.agregarCalificacion('Física', 8);

// sistema.inscribirEstudianteEnCurso(estudiante2, curso1);
// estudiante2.agregarCalificacion('Matemáticas', 7);
// estudiante2.agregarCalificacion('Física', 9);

// sistema.inscribirEstudianteEnCurso(estudiante3, curso2);
// estudiante3.agregarCalificacion('Física', 10);
// estudiante3.agregarCalificacion('Química', 8);

// Verificar resultados
// console.log('Promedio Ana:', sistema.obtenerPromedioEstudiante(estudiante1));
// console.log('Estudiantes en Matemáticas:', sistema.obtenerEstudiantesPorCurso(curso1));
// console.log('¿Ana está aprobada?', estudiante1.estaAprobado());

// === RESPUESTAS Y SOLUCIONES ===
// Descomenta la siguiente sección para ver las soluciones

/*
// SOLUCIÓN EJERCICIO 1:
class Persona {
    constructor(nombre, edad, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.creadoEn = new Date();
    }
    
    presentarse() {
        return `Hola, soy ${this.nombre} (${this.edad} años) y mi email es ${this.email}`;
    }
    
    get info() {
        return `${this.nombre} (${this.edad} años) - ${this.email}`;
    }
    
    set edad(nuevaEdad) {
        if (nuevaEdad >= 0 && nuevaEdad <= 120) {
            this.edad = nuevaEdad;
        } else {
            console.log('Edad inválida. Debe estar entre 0 y 120 años.');
        }
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, email, puesto, salario) {
        super(nombre, edad, email);
        this.puesto = puesto;
        this.salario = salario;
    }
    
    trabajar() {
        return `${this.nombre} está trabajando como ${this.puesto}`;
    }
    
    presentarse() {
        return `Hola, soy ${this.nombre}, ${this.puesto} y tengo ${this.edad} años`;
    }
    
    get salarioAnual() {
        return this.salario * 12;
    }
}

// SOLUCIÓN EJERCICIO 2:
function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.comer = function() {
    return `${this.nombre} está comiendo`;
};

Animal.prototype.dormir = function() {
    return `${this.nombre} está durmiendo`;
};

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;
Perro.prototype.ladrar = function() {
    return `${this.nombre} ladra: ¡Guau!`;
};

Perro.prototype.comer = function() {
    const accionBase = Animal.prototype.comer.call(this);
    return `${accionBase} como un buen perro`;
};

// SOLUCIÓN EJERCICIO 3:
function crearProcesador() {
    this.datos = [1, 2, 3];
    
    return {
        procesar: function() {
            return this.datos.map(num => num * 2);
        },
        
        procesarArrow: () => {
            return this.datos.map(num => num * 3);
        }
    };
}

function crearProcesadorCorregido() {
    this.datos = [1, 2, 3];
    
    return {
        procesar: function() {
            return this.datos.map(num => num * 2);
        }.bind(this),
        
        procesarArrow: () => {
            return this.datos.map(num => num * 3);
        }
    };
}

// SOLUCIÓN EJERCICIO 4:
class Ave {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

Object.assign(Ave.prototype, volador, nadador);

// SOLUCIÓN EJERCICIO 5:
class Database {
    constructor() {
        if (Database.instancia) {
            return Database.instancia;
        }
        
        this.conectado = false;
        Database.instancia = this;
    }
    
    static getInstance() {
        if (!Database.instancia) {
            Database.instancia = new Database();
        }
        return Database.instancia;
    }
    
    connect() {
        if (!this.conectado) {
            console.log('Conectado a la base de datos');
            this.conectado = true;
        } else {
            console.log('Ya está conectado');
        }
    }
    
    disconnect() {
        if (this.conectado) {
            console.log('Desconectado de la base de datos');
            this.conectado = false;
        }
    }
    
    query(sql) {
        if (!this.conectado) {
            throw new Error('No conectado a la base de datos');
        }
        console.log(`Ejecutando: ${sql}`);
        return `Resultado de: ${sql}`;
    }
}

class VehiculoFactory {
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
}

class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = new Motor('gasolina', 150);
        this.encendido = false;
    }
    
    arrancar() {
        if (!this.encendido) {
            this.motor.encender();
            this.encendido = true;
            return `${this.marca} ${this.modelo} encendido`;
        }
        return `${this.marca} ${this.modelo} ya está encendido`;
    }
    
    detener() {
        if (this.encendido) {
            this.motor.apagar();
            this.encendido = false;
            return `${this.marca} ${this.modelo} apagado`;
        }
        return `${this.marca} ${this.modelo} ya está apagado`;
    }
    
    describir() {
        return `${this.marca} ${this.modelo} (motor: ${this.motor.tipo} ${this.motor.potencia} HP)`;
    }
}

class Moto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = new Motor('gasolina', 100);
        this.encendido = false;
    }
    
    encender() {
        if (!this.encendido) {
            this.motor.encender();
            this.encendido = true;
            return `${this.marca} ${this.modelo} encendido`;
        }
        return `${this.marca} ${this.modelo} ya está encendido`;
    }
    
    detener() {
        if (this.encendido) {
            this.motor.apagar();
            this.encendido = false;
            return `${this.marca} ${this.modelo} apagado`;
        }
        return `${this.marca} ${this.modelo} ya está apagado`;
    }
    
    describir() {
        return `${this.marca} ${this.modelo} (motor: ${this.motor.tipo} ${this.motor.potencia} HP)`;
    }
}

class Bicicleta {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }
    
    pedalear() {
        this.encendido = true;
        return `${this.marca} ${this.modelo} en movimiento`;
    }
    
    detener() {
        this.encendido = false;
        return `${this.marca ${this.modelo} detenido`;
    }
    
    describir() {
        return `${this.marca} ${this.modelo}`;
    }
}

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

// SOLUCIÓN EJERCICIO 6:
class CuentaBancaria {
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
        this.#titular = 'Titular por defecto';
        this.#numeroCuenta = this.#generarNumeroCuenta();
    }
    
    #generarNumeroCuenta() {
        return 'CTA-' + Math.random().toString(36).substr(2, 10).toUpperCase();
    }
    
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            console.log(`Depositados $${cantidad}. Saldo actual: $${this.#saldo}`);
        } else {
            console.log('Cantidad inválida para depósito');
        }
    }
    
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            console.log(`Retirados $${cantidad}. Saldo actual: $${this.#saldo}`);
            return true;
        } else {
            console.log('Fondos insuficientes o cantidad inválida');
            return false;
        }
    }
    
    get saldo() {
        return this.#saldo;
    }
    
    get info() {
        return {
            titular: this.#titular,
            numeroCuenta: this.#numeroCuenta,
            saldo: this.#saldo
        };
    }
}

// SOLUCIÓN EJERCICIO 7:
class Temperatura {
    constructor(celsius) {
        this.#celsius = celsius;
    }
    
    get celsius() {
        return this.#celsius;
    }
    
    get fahrenheit() {
        return (this.#celsius * 9/5) + 32;
    }
    
    set celsius(celsius) {
        if (celsius >= -273 && celsius <= 1000) {
            this.#celsius = celsius;
        } else {
            console.log('Temperatura Celsius inválida. Debe estar entre -273°C y 1000°C');
        }
    }
    
    set fahrenheit(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5/9;
        this.celsius = celsius;
    }
}

// SOLUCIÓN EJERCICIO 8:
class Calculadora {
    static PI = 3.14159;
    
    static sumar(a, b) {
        return a + b;
    }
    
    static restar(a, b) {
        return a - b;
    }
    
    static multiplicar(a, b) {
        return a * b;
    }
    
    static dividir(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }
}

// SOLUCIÓN EJERCICIO 9:
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
        this.motor = new Motor('gasolina', 150);
        this.encendido = false;
    }
    
    arrancar() {
        if (!this.motor.encendido) {
            this.motor.encender();
            this.encendido = true;
            return `${this.marca} ${this.modelo} encendido`;
        }
        return `${this.marca} ${this.modelo} ya está encendido`;
    }
    
    detener() {
        if (this.motor.encendido) {
            this.motor.apagar();
            this.encendido = false;
            return `${this.marca} ${this.modelo} apagado`;
        }
        return `${this.marca} ${this.modelo} ya está detenido`;
    }
    
    describir() {
        return `${this.marca} ${this.modelo} (motor: ${this.motor.tipo} ${this.motor.potencia} HP)`;
    }
}

// SOLUCIÓN EJERCICIO 10:
class Estudiante {
    constructor(nombre, edad, grado) {
        this.nombre = nombre;
        this.edad = edad;
        this.grado = grado;
        this.calificaciones = [];
    }
    
    agregarCalificacion(materia, nota) {
        if (nota >= 0 && nota <= 10) {
            this.calificaciones.push({ materia, nota });
        } else {
            console.log('Nota inválida. Debe estar entre 0 y 10.');
        }
    }
    
    obtenerPromedio() {
        if (this.calificaciones.length === 0) {
            return 0;
        }
        const suma = this.calificaciones.reduce((total, cal) => total + cal.nota, 0);
        return suma / this.calificaciones.length;
    }
    
    estaAprobado() {
        return this.obtenerPromedio() >= 6;
    }
}

class Curso {
    constructor(nombre, codigo, creditos) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.creditos = creditos;
        this.estudiantes = [];
    }
    
    inscribirEstudiante(estudiante) {
        if (!this.estudiantes.includes(estudiante)) {
            this.estudiantes.push(estudiante);
            return true;
        }
        return false;
    }
    
    eliminarEstudiante(estudiante) {
        const index = this.estudiantes.indexOf(estudiante);
        if (index > -1) {
            this.estudiantes.splice(index, 1);
            return true;
        }
        return false;
    }
    
    obtenerEstudiantes() {
        return [...this.estudiantes];
    }
    
    hayCupo() {
        return this.estudiantes.length < 30; // Límite de 30 estudiantes
    }
}

class SistemaAcademico {
    constructor() {
        this.estudiantes = [];
        this.cursos = [];
    }
    
    agregarEstudiante(estudiante) {
        if (!this.estudiantes.includes(estudiante)) {
            this.estudiantes.push(estudiante);
            return true;
        }
        return false;
    }
    
    agregarCurso(curso) {
        if (!this.cursos.includes(curso)) {
            this.cursos.push(curso);
            return true;
        }
        return false;
    }
    
    inscribirEstudianteEnCurso(estudiante, curso) {
        if (!this.estudiantes.includes(estudiante) || !this.cursos.includes(curso)) {
            console.log('Estudiante o curso no encontrado');
            return false;
        }
        
        if (!curso.hayCupo()) {
            console.log('El curso está lleno');
            return false;
        }
        
        if (!curso.inscribirEstudiante(estudiante)) {
            console.log('El estudiante ya está inscrito en este curso');
            return false;
        }
        
        if (!estudiante.agregarCalificacion(curso.nombre, 5)) {
            console.log('Error al agregar calificación');
            return false;
        }
        
        return true;
    }
    
    obtenerPromedioEstudiante(estudiante) {
        if (!this.estudiantes.includes(estudiante)) {
            return 0;
        }
        
        const estudianteEncontrado = this.estudiantes.find(e => e === estudiante);
        return estudianteEncontrado.obtenerPromedio();
    }
    
    obtenerEstudiantesPorCurso(curso) {
        if (!this.cursos.includes(curso)) {
            return [];
        }
        
        const cursoEncontrado = this.cursos.find(c => c === curso);
        return cursoEncontrado.obtenerEstudiantes();
    }
}
*/
