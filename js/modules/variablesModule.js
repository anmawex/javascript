// Module Manager: Handles loading and managing modules

export const variablesModule = {
  
    id: '1-variables',
    title: 'Variables y Scope',
    description: 'Fundamentos de variables, declaración y scope en JavaScript',
    challenges: [
        // === NIVEL FÁCIL ===
        {
            id: '1-1',
            title: 'Tu Primera Variable',
            description: 'Declara una variable llamada "miNombre" y asígnale tu nombre.',
            initialCode: '// Declara tu variable aquí\nlet miNombre = ',
            solution: (code, sandbox) => {
                try {
                    return typeof sandbox.miNombre !== 'undefined' && typeof sandbox.miNombre === 'string';
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: let miNombre = "Tu nombre";'
        },
        {
            id: '1-2',
            title: 'Variables Numéricas',
            description: 'Crea una variable "edad" con tu edad y "altura" con tu altura en metros.',
            initialCode: '// Declara las variables numéricas\nlet edad = \nlet altura = ',
            solution: (code, sandbox) => {
                try {
                    return typeof sandbox.edad === 'number' && typeof sandbox.altura === 'number';
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: let edad = 25; let altura = 1.75;'
        },
        {
            id: '1-3',
            title: 'Variables Booleanas',
            description: 'Crea variables "esEstudiante" (true) y "esMayorDeEdad" (false).',
            initialCode: '// Declara las variables booleanas\nlet esEstudiante = \nlet esMayorDeEdad = ',
            solution: (code, sandbox) => {
                try {
                    return sandbox.esEstudiante === true && sandbox.esMayorDeEdad === false;
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: let esEstudiante = true; let esMayorDeEdad = false;'
        },
        {
            id: '1-4',
            title: 'Constantes',
            description: 'Crea una constante called "PI" con el valor 3.14159.',
            initialCode: '// Declara la constante\nconst PI = ',
            solution: (code, sandbox) => {
                try {
                    return sandbox.PI === 3.14159;
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: const PI = 3.14159;'
        },
        {
            id: '1-5',
            title: 'Múltiples Variables',
            description: 'Declara nombre, apellido y edad en una sola línea.',
            initialCode: '// Declara las tres variables en una línea\n',
            solution: (code, sandbox) => {
                try {
                    return typeof sandbox.nombre === 'string' && 
                            typeof sandbox.apellido === 'string' && 
                            typeof sandbox.edad === 'number';
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: let nombre = "Juan", apellido = "Pérez", edad = 25;'
        },
        {
            id: '1-6',
            title: 'Nombres de Variables',
            description: 'Crea variables usando camelCase: nombreUsuario, edadMaxima, estaActivo.',
            initialCode: '// Usa camelCase para nombrar las variables\nlet nombreUsuario = \nlet edadMaxima = \nlet estaActivo = ',
            solution: (code, sandbox) => {
                try {
                    return typeof sandbox.nombreUsuario !== 'undefined' && 
                            typeof sandbox.edadMaxima !== 'undefined' && 
                            sandbox.estaActivo === true;
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: let nombreUsuario = "Ana"; let edadMaxima = 65; let estaActivo = true;'
        },
        {
            id: '1-7',
            title: 'Reasignación de Variables',
            description: 'Crea una variable "contador" en 0, luego asígnale el valor 10.',
            initialCode: '// Inicializa y reasigna la variable\nlet contador = 0;\n// Ahora asígnale 10\n',
            solution: (code, sandbox) => {
                try {
                    return sandbox.contador === 10;
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: contador = 10;'
        },
        {
            id: '1-8',
            title: 'Constantes Inmutables',
            description: 'Intenta cambiar el valor de una constante (verás que da error).',
            initialCode: 'const VALOR_FIJO = 100;\n// Intenta cambiarlo (esto debería dar error)\nVALOR_FIJO = ',
            solution: (code, sandbox) => {
                try {
                    // This should fail, so we expect an error or the value to remain unchanged
                    return sandbox.VALOR_FIJO === 100;
                } catch (e) {
                    return true; // Error is expected for constants
                }
            },
            hint: 'Las constantes no pueden ser reasignadas. Esto generará un error.'
        },
        
        // === NIVEL MEDIO ===
        {
            id: '1-9',
            title: 'Scope Global',
            description: 'Crea una variable global y accede a ella desde diferentes partes.',
            initialCode: '// Variable global\nlet variableGlobal = "Soy global";\n\nfunction mostrarVariable() {\n    // Accede a la variable global aquí\n    return \n}',
            solution: (code, sandbox) => {
                try {
                    const mostrarVariable = sandbox.mostrarVariable;
                    return typeof mostrarVariable === 'function' && mostrarVariable() === "Soy global";
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: return variableGlobal;'
        },
        {
            id: '1-10',
            title: 'Shadowing de Variables',
            description: 'Crea una variable global y una local con el mismo nombre.',
            initialCode: 'let mensaje = "Global";\n\nfunction mostrarMensaje() {\n    let mensaje = "Local";\n    return mensaje; // ¿Cuál se retornará?\n}\n\n// ¿Qué retornará mostrarMensaje()?',
            solution: (code, sandbox) => {
                try {
                    return sandbox.mensaje === "Global" && sandbox.mostrarMensaje() === "Local";
                } catch (e) {
                    return false;
                }
            },
            hint: 'La variable local "sombrea" a la global dentro de la función.'
        },
        {
            id: '1-11',
            title: 'Scope de Función',
            description: 'Crea variables dentro de una función y accede a ellas.',
            initialCode: 'function crearVariables() {\n    let interna = "Solo visible aquí";\n    let numero = 42;\n    // Retorna ambas variables\n    return { interna, numero };\n}\n\n// Llama la función y guarda el resultado\nlet resultado = ',
            solution: (code, sandbox) => {
                try {
                    return typeof sandbox.resultado === 'object' && 
                            sandbox.resultado.interna === "Solo visible aquí" && 
                            sandbox.resultado.numero === 42;
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: let resultado = crearVariables();'
        },
        {
            id: '1-12',
            title: 'Variables no Declaradas',
            description: 'Intenta acceder a una variable que no existe.',
            initialCode: '// Intenta acceder a una variable no declarada\nconsole.log(variableInexistente);',
            solution: (code, sandbox) => {
                try {
                    // This should throw a ReferenceError
                    eval(code);
                    return false;
                } catch (e) {
                    return e.name === 'ReferenceError';
                }
            },
            hint: 'Esto generará un ReferenceError. Las variables deben declararse antes de usarlas.'
        },
        {
            id: '1-13',
            title: 'const vs let',
            description: 'Demuestra la diferencia entre const y let.',
            initialCode: 'let variableCambiante = 10;\nconst variableFija = 20;\n\n// Cambia la variable let\nvariableCambiante = \n\n// Intenta cambiar la const (fallará)\n// variableFija = 30; // Esto da error\n\nreturn variableCambiante;',
            solution: (code, sandbox) => {
                try {
                    return sandbox.variableCambiante === 15 && sandbox.variableFija === 20;
                } catch (e) {
                    return false;
                }
            },
            hint: 'Asigna 15 a variableCambiante. Las variables let pueden cambiar, las const no.'
        },
        {
            id: '1-14',
            title: 'Scope de Bloque con let',
            description: 'Usa let dentro de un bloque if.',
            initialCode: 'let externa = "Fuera del bloque";\n\nif (true) {\n    let interna = "Dentro del bloque";\n    // Aquí puedes usar ambas variables\n}\n\n// ¿Qué variables puedes usar aquí?',
            solution: (code, sandbox) => {
                try {
                    return sandbox.externa === "Fuera del bloque" && 
                            sandbox.interna === "Dentro del bloque";
                } catch (e) {
                    return false;
                }
            },
            hint: 'Solo "externa" es accesible fuera del bloque. "interna" solo existe dentro del if.'
        },
        {
            id: '1-15',
            title: 'Scope de Bloque con const',
            description: 'Usa const dentro de un bloque for.',
            initialCode: 'const constanteGlobal = "Global";\n\nfor (let i = 0; i < 3; i++) {\n    const constanteLocal = `Iteración ${i}`;\n    // Usa ambas constantes aquí\n}\n\n// ¿Qué constante puedes usar aquí?',
            solution: (code, sandbox) => {
                try {
                    return sandbox.constanteGlobal === "Global";
                } catch (e) {
                    return false;
                }
            },
            hint: 'Solo constanteGlobal es accesible fuera del for. constanteLocal solo existe en cada iteración.'
        },
        {
            id: '1-16',
            title: 'Hoisting con let',
            description: 'Demuestra el hoisting con let (error temporal).',
            initialCode: '// Esto dará error\nconsole.log(variable);\n\nlet variable = "Declarada después";\n\n// Ahora sí funciona\nconsole.log(variable);',
            solution: (code, sandbox) => {
                try {
                    // Should throw ReferenceError for the first console.log
                    eval(code);
                    return false;
                } catch (e) {
                    return e.name === 'ReferenceError';
                }
            },
            hint: 'let no tiene hoisting inicializado. Da "Temporal Dead Zone" error hasta la declaración.'
        },
        {
            id: '1-17',
            title: 'Hoisting con var',
            description: 'Demuestra el hoisting con var (comportamiento diferente).',
            initialCode: '// Esto funciona (aunque es undefined)\nconsole.log(variableVar);\n\nvar variableVar = "Declarada después";\n\nconsole.log(variableVar);',
            solution: (code, sandbox) => {
                try {
                    return sandbox.variableVar === "Declarada después";
                } catch (e) {
                    return false;
                }
            },
            hint: 'var sí tiene hoisting. Se eleva pero con valor undefined hasta la asignación.'
        },
        
        // === NIVEL DIFÍCIL ===
        {
            id: '1-18',
            title: 'IIFE Básico',
            description: 'Crea un IIFE para crear scope privado.',
            initialCode: '// Crea un IIFE que defina una variable privada\n(function() {\n    let privada = "Solo visible aquí";\n    // Expón la variable de forma controlada\n    window.variablePublica = privada.toUpperCase();\n})();\n\n// ¿Qué contiene variablePublica?',
            solution: (code, sandbox) => {
                try {
                    return sandbox.variablePublica === "SOLO VISIBLE AQUÍ";
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: window.variablePublica = privada.toUpperCase(); dentro del IIFE.'
        },
        {
            id: '1-19',
            title: 'Closure Simple',
            description: 'Crea una closure que mantenga estado.',
            initialCode: 'function crearContador() {\n    let contador = 0;\n    return function() {\n        contador++;\n        return contador;\n    };\n}\n\n// Crea una instancia del contador\nlet miContador = ',
            solution: (code, sandbox) => {
                try {
                    const miContador = sandbox.miContador;
                    return typeof miContador === 'function' && 
                            miContador() === 1 && 
                            miContador() === 2;
                } catch (e) {
                    return false;
                }
            },
            hint: 'Usa: let miContador = crearContador();'
        },
        {
            id: '1-20',
            title: 'Closure con Parámetros',
            description: 'Crea una closure que usa parámetros.',
            initialCode: 'function multiplicar(factor) {\n    return function(numero) {\n        return numero * factor;\n    };\n}\n\n// Crea funciones multiplicadoras\nlet duplicar = multiplicar(2);\nlet triplicar = multiplicar(3);\n\n// Úsalas\nlet resultado1 = duplicar(5);\nlet resultado2 = triplicar(5);\n\nreturn { resultado1, resultado2 };',
            solution: (code, sandbox) => {
                try {
                    return sandbox.resultado1 === 10 && sandbox.resultado2 === 15;
                } catch (e) {
                    return false;
                }
            },
            hint: 'Las closures "recuerdan" el factor parámetro y lo usan después.'
        },
        {
            id: '1-21',
            title: 'Scope Anidado',
            description: 'Trabaja con múltiples niveles de scope.',
            initialCode: 'let nivel1 = "Exterior";\n\nfunction nivel2() {\n    let nivel2 = "Medio";\n    \n    function nivel3() {\n        let nivel3 = "Interior";\n        // Accede a todos los niveles\n        return `${nivel3}, ${nivel2}, ${nivel1}`;\n    }\n    \n    return nivel3();\n}\n\nlet resultado = nivel2();',
            solution: (code, sandbox) => {
                try {
                    return sandbox.resultado === "Interior, Medio, Exterior";
                } catch (e) {
                    return false;
                }
            },
            hint: 'Las funciones internas pueden acceder a variables de scopes exteriores (lexical scope).'
        },
        {
            id: '1-22',
            title: 'Módulo con IIFE',
            description: 'Crea un módulo usando IIFE con método público y privado.',
            initialCode: 'const Calculadora = (function() {\n    let memoria = 0; // Variable privada\n    \n    function privada() {\n        return memoria * 2;\n    }\n    \n    return {\n        sumar: function(n) {\n            memoria += n;\n            return memoria;\n        },\n        obtenerMemoria: function() {\n            return memoria;\n        },\n        duplicarMemoria: function() {\n            return privada();\n        }\n    };\n})();\n\n// Usa el módulo\nCalculadora.sumar(5);\nCalculadora.sumar(3);\nlet memoriaActual = Calculadora.obtenerMemoria();\nlet duplicado = Calculadora.duplicarMemoria();\n\nreturn { memoriaActual, duplicado };',
            solution: (code, sandbox) => {
                try {
                    return sandbox.memoriaActual === 8 && sandbox.duplicado === 16;
                } catch (e) {
                    return false;
                }
            },
            hint: 'El IIFE crea un scope privado. Solo las funciones retornadas son públicas.'
        },
        {
            id: '1-23',
            title: 'Variable Shadowing Complejo',
            description: 'Analiza un caso complejo de shadowing.',
            initialCode: 'let x = "global";\n\nfunction externa() {\n    let x = "externa";\n    \n    function interna() {\n        let x = "interna";\n        return x;\n    }\n    \n    return interna() + " vs " + x;\n}\n\nlet resultado = externa();\nlet globalX = x;\n\nreturn { resultado, globalX };',
            solution: (code, sandbox) => {
                try {
                    return sandbox.resultado === "interna vs externa" && sandbox.globalX === "global";
                } catch (e) {
                    return false;
                }
            },
            hint: 'Cada x está en un scope diferente. La función interna usa su x, externa usa su x, y globalX usa la x global.'
        },
        {
            id: '1-24',
            title: 'const con Objetos',
            description: 'Demuestra que const con objetos permite modificar propiedades.',
            initialCode: 'const persona = {\n    nombre: "Ana",\n    edad: 25\n};\n\n// Modifica una propiedad (esto SÍ se puede)\npersona.edad = \n\n// Agrega una propiedad (esto SÍ se puede)\npersona.ciudad = "Madrid";\n\n// Intenta reasignar el objeto (esto NO se puede)\n// persona = {}; // Esto daría error\n\nreturn { edad: persona.edad, ciudad: persona.ciudad };',
            solution: (code, sandbox) => {
                try {
                    return sandbox.edad === 26 && sandbox.ciudad === "Madrid";
                } catch (e) {
                    return false;
                }
            },
            hint: 'const protege la referencia, no el contenido. Puedes modificar propiedades del objeto.'
        },
        {
            id: '1-25',
            title: 'Scope y Contexto this',
            description: 'Comprende cómo this afecta el scope.',
            initialCode: 'let objeto = {\n    valor: 100,\n    metodo: function() {\n        let valor = 200; // Variable local\n        return this.valor; // ¿Qué valor retorna?\n    }\n};\n\nlet resultado = objeto.metodo();',
            solution: (code, sandbox) => {
                try {
                    return sandbox.resultado === 100;
                } catch (e) {
                    return false;
                }
            },
            hint: 'this.valor se refiere a la propiedad del objeto, no a la variable local valor.'
        },
        {
            id: '1-26',
            title: 'Pattern Módulo Avanzado',
            description: 'Crea un módulo con getters y setters privados.',
            initial_code: 'const ContadorPrivado = (function() {\n    let _contador = 0;\n    \n    return {\n        incrementar: function() {\n            _contador++;\n            return this;\n        },\n        decrementar: function() {\n            _contador--;\n            return this;\n        },\n        valor: function() {\n            return _contador;\n        },\n        reset: function() {\n            _contador = 0;\n            return this;\n        }\n    };\n})();\n\n// Encadenamiento de métodos\nlet resultado = ContadorPrivado\n    .incrementar()\n    .incrementar()\n    .incrementar()\n    .valor();\n\nreturn resultado;',
            solution: (code, sandbox) => {
                try {
                    return sandbox.resultado === 3;
                } catch (e) {
                    return false;
                }
            },
            hint: 'El patrón módulo con IIFE permite crear variables privadas (_contador) y métodos públicos.'
        }
    ]
}

export function getCurrentModule() {
    // Logic to get the current module
}

export function setCurrentModule(module) {
    // Logic to set the current module
}

// Additional module management functions
