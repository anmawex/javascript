// THIS KEYWORD - CONTEXTO Y ENLACE
// Comportamiento de 'this' en diferentes contextos

// === THIS EN CONTEXTO GLOBAL ===

// 1. En modo estricto, this es undefined en contexto global
// En modo no estricto, this apunta al objeto global (window en navegadores)
console.log('This en contexto global:', this); // {} en Node.js, window en navegador

function contextoGlobal() {
    console.log('This en función (modo estricto):', this);
}

contextoGlobal(); // undefined en modo estricto

// === THIS EN FUNCIONES (MODO DE INVOCACIÓN) ===

// 2. THIS en funciones normales depende de cómo se invocan
function funcionNormal() {
    console.log('This en función normal:', this);
}

// Invocación directa (undefined en modo estricto)
funcionNormal(); // undefined

// Como método de objeto (apunta al objeto)
const objeto = {
    nombre: 'Objeto',
    metodo: funcionNormal,
    propiedad: this.nombre
};

objeto.metodo(); // apunta a objeto

// Con call (apunta al primer argumento)
funcionNormal.call({ nombre: 'Llamada con call' }); // apunta al objeto pasado

// Con apply (apunta al primer argumento)
funcionNormal.apply([{ nombre: 'Llamada con apply' }]); // apunta al array pasado

// Con bind (crea nueva función con this fijo)
const funcionBind = funcionNormal.bind({ nombre: 'Llamada con bind' });
funcionBind(); // apunta al objeto vinculado

// === THIS EN FUNCIONES FLECHA ===

// 3. Arrow functions: this léxico (heredado del contexto exterior)
const objetoArrow = {
    nombre: 'Objeto Arrow',
    metodoNormal: function() {
        console.log('Normal:', this.nombre); // 'Objeto Arrow'
        
        const arrow = () => {
            console.log('Arrow:', this.nombre); // 'Objeto Arrow' (heredado)
        };
        
        arrow();
    }
};

objetoArrow.metodoNormal();

// Arrow function en contexto global
const arrowGlobal = () => {
    console.log('Arrow global:', this); // {} en Node.js, window en navegador
};

arrowGlobal();

// === THIS EN CONSTRUCTORES ===

// 4. THIS en constructores (apunta a la instancia siendo creada)
function Persona(nombre) {
    this.nombre = nombre;
    this.edad = 0;
    
    // THIS dentro de métodos del constructor
    this.saludar = function() {
        return `Hola, soy ${this.nombre}`;
    };
    
    // THIS en arrow functions dentro del constructor (heredado del contexto exterior)
    this.saludarArrow = () => {
        return `Hola (arrow), soy ${this.nombre}`;
    };
}

const persona = new Persona('Juan');
console.log(persona.saludar()); // "Hola, soy Juan"
console.log(persona.saludarArrow()); // "Hola (arrow), soy Juan"

// === THIS EN MÉTODOS DE OBJETO ===

// 5. THIS en métodos de objeto (apunta al objeto)
const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    
    describir() {
        return `Este es un ${this.marca} ${this.modelo}`;
    },
    
    mostrarThis() {
        console.log('This en método:', this);
        console.log('This.marca:', this.marca);
    }
};

coche.describir(); // "Este es un Toyota Corolla"
coche.mostrarThis(); // apunta al objeto coche

// 6. THIS en métodos anidados
const estudiante = {
    nombre: 'Ana',
    cursos: ['Matemáticas', 'Física'],
    
    mostrarInfo() {
        console.log('Estudiante:', this.nombre);
        
        // THIS en función anidada normal
        function mostrarCursos() {
            console.log('Cursos (función normal):', this.cursos); // undefined (o global)
        }
        
        // THIS en arrow function anidada
        const mostrarCursosArrow = () => {
            console.log('Cursos (arrow):', this.cursos); // apunta a estudiante
        };
        
        mostrarCursos();
        mostrarCursosArrow();
    }
};

estudiante.mostrarInfo();

// === THIS EN EVENTOS DEL DOM ===

// 7. THIS en event handlers (apunta al elemento que disparó el evento)
const boton = document.createElement('button');
boton.textContent = 'Clickeame';

boton.addEventListener('click', function() {
    console.log('This en event handler (función normal):', this); // apunta al botón
    this.textContent = '¡Clickeado!';
});

// THIS en arrow function en event handler (heredado del contexto exterior)
const botonArrow = document.createElement('button');
botonArrow.textContent = 'Clickeame Arrow';

botonArrow.addEventListener('click', () => {
    console.log('This en event handler (arrow):', this); // apunta al contexto exterior
    // this.textContent = '¡Clickeado!'; // No modificaría el botón
});

// === THIS EN CALLBACKS ===

// 8. THIS en callbacks depende del contexto de ejecución
function ejecutarCallback(callback) {
    console.log('Ejecutando callback...');
    callback();
}

const contextoCallback = {
    nombre: 'Contexto',
    mostrar: function() {
        console.log('This en callback:', this.nombre);
    }
};

// Callback pierde el contexto original
ejecutarCallback(contextoCallback.mostrar); // undefined

// Solución con bind
const callbackBind = contextoCallback.mostrar.bind(contextoCallback);
ejecutarCallback(callbackBind); // 'Contexto'

// === THIS EN CLASES ES6 ===

// 9. THIS en clases ES6 (apunta a la instancia)
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    
    calcularArea() {
        return this.ancho * this.alto;
    }
    
    mostrarDimensiones() {
        console.log(`Dimensiones: ${this.ancho} x ${this.alto}`);
        console.log('Área:', this.calcularArea());
    }
}

const rect = new Rectangulo(10, 5);
rect.mostrarDimensiones(); // apunta a la instancia rect

// 10. THIS en métodos estáticos (undefined en clases)
class Utilidad {
    static mostrarThis() {
        console.log('This en método estático:', this); // undefined
    }
    
    static crearConThis(contexto) {
        return {
            contexto: contexto,
            mostrar: function() {
                console.log('Contexto pasado:', this.contexto);
            }
        };
    }
}

Utilidad.mostrarThis(); // undefined

const objetoConThis = Utilidad.crearConThis('Contexto externo');
objetoConThis.mostrar(); // 'Contexto externo'

// === PROBLEMAS COMUNES CON THIS ===

// 11. Pérdida de contexto en callbacks
const datos = {
    usuarios: ['Ana', 'Juan', 'María'],
    procesar: function() {
        console.log('Procesando usuarios:', this.usuarios);
        
        setTimeout(function() {
            console.log('Usuarios en timeout:', this.usuarios); // undefined
        }, 1000);
        
        // Solución 1: guardar referencia a this
        const self = this;
        setTimeout(function() {
            console.log('Usuarios en timeout (con self):', self.usuarios);
        }, 2000);
        
        // Solución 2: usar arrow function
        setTimeout(() => {
            console.log('Usuarios en timeout (arrow):', this.usuarios);
        }, 3000);
    }
};

datos.procesar();

// 12. THIS en constructores devueltos
function CreadorDeObjetos() {
    this.valor = 'inicial';
    
    return {
        getValor: function() {
            return this.valor; // undefined si no se usa bind/apply/call
        },
        
        getValorBind: function() {
            return this.valor; // 'inicial' si se usa bind
        }.bind(this)
    };
}

const obj1 = CreadorDeObjetos();
console.log(obj1.getValor()); // undefined

const obj2 = CreadorDeObjetos();
console.log(obj2.getValorBind()); // 'inicial'

// === PATRONES ÚTILES CON THIS ===

// 13. Patrón Module para evitar problemas con this
const modulo = (function() {
    let variablePrivada = 'privada';
    
    return {
        getVariable: function() {
            return variablePrivada;
        },
        
        setVariable: function(valor) {
            variablePrivada = valor;
        },
        
        getThis: function() {
            return this; // apunta al objeto retornado
        }
    };
})();

console.log('Variable privada:', modulo.getVariable());
console.log('This en módulo:', modulo.getThis());

// 14. Patrón Factory con this
function crearTipo(tipo) {
    switch (tipo) {
        case 'persona':
            return function(nombre, edad) {
                this.nombre = nombre;
                this.edad = edad;
                this.tipo = 'persona';
            };
            
        case 'producto':
            return function(nombre, precio) {
                this.nombre = nombre;
                this.precio = precio;
                this.tipo = 'producto';
            };
            
        default:
            return function() {
                this.tipo = 'desconocido';
            };
    }
}

const CrearPersona = crearTipo('persona');
const persona1 = new CrearPersona('Laura', 30);
console.log(persona1); // {nombre: 'Laura', edad: 30, tipo: 'persona'}

// === INSPECCIÓN DE THIS ===

// 15. Verificar el valor de this en diferentes contextos
function inspeccionarThis() {
    console.log('Tipo de this:', typeof this);
    console.log('This es:', this);
    console.log('Constructor:', this?.constructor?.name);
    
    if (this === window) {
        console.log('This es el objeto window');
    } else if (this === global) {
        console.log('This es el objeto global');
    } else if (this === undefined) {
        console.log('This es undefined');
    }
}

// Probar this en diferentes contextos
inspeccionarThis(); // Contexto global

const obj = {
    nombre: 'Objeto',
    inspeccionar: inspeccionarThis
};
obj.inspeccionarThis(); // Contexto de objeto

// === RESUMEN ===

console.log(`
=== RESUMEN THIS KEYWORD ===
✓ Contexto global: window (navegador) o global (Node.js)
✓ Función normal: depende de invocación (call, apply, bind)
✓ Arrow function: léxico, heredado del contexto exterior
✓ Constructor: apunta a la instancia siendo creada
✓ Método de objeto: apunta al objeto dueño
✓ Event handler: apunta al elemento que disparó el evento
✓ Clase ES6: apunta a la instancia
✓ Método estático: undefined
✓ Bind: crea nueva función con this fijo
✓ Call/Apply: invoca función con this específico
✓ Problema común: pérdida de contexto en callbacks
✓ Solución: arrow functions o bind/apply/call
✓ Modo estricto: más predecible, this undefined en funciones globales
`);
