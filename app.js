// JavaScript Learning Platform - Main Application
class LearningPlatform {
    constructor() {
        this.currentModule = null;
        this.currentChallenge = null;
        this.editor = null;
        this.progress = this.loadProgress();
        this.modules = this.loadModules();
        
        this.init();
    }

    init() {
        this.setupEditor();
        this.setupEventListeners();
        this.renderModuleNavigation();
        this.updateProgressBar();
    }

    // Load modules from existing folder structure
    loadModules() {
        return [
            {
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
            },
            {
                id: '2-tipos_datos',
                title: 'Tipos de Datos',
                description: 'Tipos primitivos y objetos en JavaScript',
                challenges: [
                    {
                        id: '2-1',
                        title: 'Números y Cadenas',
                        description: 'Crea una variable "edad" con tu edad y "mensaje" con un saludo.',
                        initialCode: '// Crea las variables aquí\nlet edad = \nlet mensaje = ',
                        solution: (code, sandbox) => {
                            try {
                                return typeof sandbox.edad === 'number' && typeof sandbox.mensaje === 'string';
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: let edad = 25; let mensaje = "Hola";'
                    }
                ]
            },
            {
                id: '3-casting',
                title: 'Casting',
                description: 'Conversión entre diferentes tipos de datos',
                challenges: [
                    {
                        id: '3-1',
                        title: 'Conversión a Número',
                        description: 'Convierte la cadena "123" a número usando parseInt().',
                        initialCode: 'let texto = "123";\nlet numero = ',
                        solution: (code, sandbox) => {
                            try {
                                return sandbox.numero === 123 && typeof sandbox.numero === 'number';
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: parseInt(texto)'
                    }
                ]
            },
            {
                id: '4-estructura_datos',
                title: 'Estructuras de Datos',
                description: 'Arrays y objetos para organizar información',
                challenges: [
                    {
                        id: '4-1',
                        title: 'Crear un Array',
                        description: 'Crea un array llamado "frutas" con 3 frutas diferentes.',
                        initialCode: '// Crea el array aquí\nlet frutas = ',
                        solution: (code, sandbox) => {
                            try {
                                return Array.isArray(sandbox.frutas) && sandbox.frutas.length === 3;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: let frutas = ["manzana", "banana", "naranja"];'
                    }
                ]
            },
            {
                id: '5-comparaciones',
                title: 'Comparaciones y Operadores',
                description: 'Operadores de comparación y lógicos',
                challenges: [
                    {
                        id: '5-1',
                        title: 'Comparación Igual',
                        description: 'Comprueba si 5 es igual a "5" usando == y ===.',
                        initialCode: 'let resultado1 = (5 == "5");\nlet resultado2 = (5 === "5");',
                        solution: (code, sandbox) => {
                            try {
                                return sandbox.resultado1 === true && sandbox.resultado2 === false;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: '== compara valores, === compara valores y tipos'
                    }
                ]
            },
            {
                id: '6-loops_e_iteradores',
                title: 'Loops e Iteradores',
                description: 'Bucles para repetir acciones',
                challenges: [
                    {
                        id: '6-1',
                        title: 'For Loop',
                        description: 'Usa un bucle for para mostrar los números del 1 al 5.',
                        initialCode: 'for (let i = 1; i <= 5; i++) {\n    // Tu código aquí\n}',
                        solution: (code, sandbox) => {
                            try {
                                let output = [];
                                const originalLog = console.log;
                                console.log = (...args) => output.push(args.join(' '));
                                
                                // Execute code in sandbox context
                                const func = new Function('console', `
                                    ${code}
                                `);
                                func({ log: console.log });
                                
                                console.log = originalLog;
                                return output.length === 5 && output[0] === '1' && output[4] === '5';
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: console.log(i); dentro del bucle'
                    }
                ]
            },
            {
                id: '7-condicionales',
                title: 'Condicionales',
                description: 'Toma decisiones con if/else y switch',
                challenges: [
                    {
                        id: '7-1',
                        title: 'If/Else',
                        description: 'Comprueba si un número es mayor que 10.',
                        initialCode: 'let numero = 15;\nif (numero > 10) {\n    // Tu código aquí\n}',
                        solution: (code, sandbox) => {
                            try {
                                let result = false;
                                const originalLog = console.log;
                                console.log = (...args) => {
                                    if (args[0] === 'Es mayor que 10') result = true;
                                };
                                
                                // Execute code in sandbox context
                                const func = new Function('console', `
                                    ${code}
                                `);
                                func({ log: console.log });
                                
                                console.log = originalLog;
                                return result;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: console.log("Es mayor que 10");'
                    }
                ]
            },
            {
                id: '8-error_handling',
                title: 'Manejo de Errores',
                description: 'Try/catch para manejar errores',
                challenges: [
                    {
                        id: '8-1',
                        title: 'Try/Catch',
                        description: 'Usa try/catch para manejar un posible error.',
                        initialCode: 'try {\n    let resultado = JSON.parse("texto inválido");\n} catch (error) {\n    // Tu código aquí\n}',
                        solution: (code, sandbox) => {
                            try {
                                let caught = false;
                                const originalLog = console.log;
                                console.log = (...args) => {
                                    if (args[0].includes('Error')) caught = true;
                                };
                                
                                // Execute code in sandbox context
                                const func = new Function('console', `
                                    ${code}
                                `);
                                func({ log: console.log });
                                
                                console.log = originalLog;
                                return caught;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: console.log("Error capturado:", error.message);'
                    }
                ]
            },
            {
                id: '9-ope_y_exp',
                title: 'Operadores y Expresiones',
                description: 'Operadores aritméticos, de asignación y expresiones',
                challenges: [
                    {
                        id: '9-1',
                        title: 'Operadores Aritméticos',
                        description: 'Realiza operaciones matemáticas básicas.',
                        initialCode: 'let a = 10, b = 5;\nlet suma = a + b;\nlet resta = a - b;\nlet multiplicacion = a * b;\nlet division = a / b;',
                        solution: (code, sandbox) => {
                            try {
                                return sandbox.suma === 15 && sandbox.resta === 5 && sandbox.multiplicacion === 50 && sandbox.division === 2;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Los operadores básicos son +, -, *, /'
                    }
                ]
            },
            {
                id: '10-funciones',
                title: 'Funciones',
                description: 'Declaración y uso de funciones',
                challenges: [
                    {
                        id: '10-1',
                        title: 'Función Básica',
                        description: 'Crea una función que sume dos números.',
                        initialCode: 'function sumar(a, b) {\n    // Tu código aquí\n}',
                        solution: (code, sandbox) => {
                            try {
                                const sumar = sandbox.sumar;
                                return typeof sumar === 'function' && sumar(3, 4) === 7;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: return a + b;'
                    }
                ]
            },
            {
                id: '11-Apis',
                title: 'APIs y Fetch',
                description: 'Consumo de APIs asíncronas',
                challenges: [
                    {
                        id: '11-1',
                        title: 'Fetch Básico',
                        description: 'Realiza una petición fetch a una API.',
                        initialCode: 'fetch("https://jsonplaceholder.typicode.com/posts/1")\n    .then(response => response.json())\n    .then(data => console.log(data.title));',
                        solution: (code) => {
                            // Simulación - en realidad esto haría una petición real
                            return code.includes('fetch') && code.includes('.then');
                        },
                        hint: 'Fetch devuelve una promesa, usa .then() para manejarla'
                    }
                ]
            },
            {
                id: '12-DOM_Manipulation',
                title: 'Manipulación del DOM',
                description: 'Interactuar con elementos HTML',
                challenges: [
                    {
                        id: '12-1',
                        title: 'Seleccionar Elementos',
                        description: 'Selecciona un elemento por su id.',
                        initialCode: '// Selecciona un elemento con id="miElemento"\nlet elemento = ',
                        solution: (code) => {
                            try {
                                // Simulación - en realidad necesitaríamos un DOM real
                                return code.includes('getElementById') || code.includes('querySelector');
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: document.getElementById("miElemento")'
                    }
                ]
            },
            {
                id: '13-ES6_Features',
                title: 'Características ES6',
                description: 'Template literals, destructuring, spread/rest',
                challenges: [
                    {
                        id: '13-1',
                        title: 'Template Literals',
                        description: 'Usa template literals para crear un mensaje.',
                        initialCode: 'let nombre = "Juan";\nlet edad = 25;\nlet mensaje = ',
                        solution: (code, sandbox) => {
                            try {
                                return sandbox.mensaje.includes('Juan') && sandbox.mensaje.includes('25') && sandbox.mensaje.includes('`');
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: let mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;'
                    }
                ]
            },
            {
                id: '14-Async_Programming',
                title: 'Programación Asíncrona',
                description: 'Promesas, async/await',
                challenges: [
                    {
                        id: '14-1',
                        title: 'Crear una Promesa',
                        description: 'Crea una promesa que se resuelva con "Hola Mundo".',
                        initialCode: 'let miPromesa = new Promise((resolve, reject) => {\n    // Tu código aquí\n});',
                        solution: (code, sandbox) => {
                            try {
                                return sandbox.miPromesa instanceof Promise;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: resolve("Hola Mundo"); dentro del constructor'
                    }
                ]
            },
            {
                id: '15-OOP_JavaScript',
                title: 'Programación Orientada a Objetos',
                description: 'Clases, herencia y prototipos',
                challenges: [
                    {
                        id: '15-1',
                        title: 'Crear una Clase',
                        description: 'Crea una clase Persona con constructor.',
                        initialCode: 'class Persona {\n    constructor(nombre, edad) {\n        // Tu código aquí\n    }\n}',
                        solution: (code, sandbox) => {
                            try {
                                const Persona = sandbox.Persona;
                                const persona = new Persona("Juan", 25);
                                return persona.nombre === "Juan" && persona.edad === 25;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: this.nombre = nombre; this.edad = edad;'
                    }
                ]
            },
            {
                id: '16-Modern_JS_Methods',
                title: 'Métodos Modernos de JavaScript',
                description: 'Métodos de arrays, strings y objetos modernos',
                challenges: [
                    {
                        id: '16-1',
                        title: 'Array.map()',
                        description: 'Usa map() para duplicar cada número en un array.',
                        initialCode: 'let numeros = [1, 2, 3, 4, 5];\nlet duplicados = numeros.map(numero => ',
                        solution: (code, sandbox) => {
                            try {
                                return Array.isArray(sandbox.duplicados) && 
                                       sandbox.duplicados.length === 5 && 
                                       sandbox.duplicados[0] === 2 && 
                                       sandbox.duplicados[4] === 10;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: numero * 2'
                    }
                ]
            }
        ];
    }

    setupEditor() {
        this.editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
            mode: 'javascript',
            theme: 'monokai',
            lineNumbers: false,
            autoCloseBrackets: true,
            matchBrackets: true,
            indentUnit: 4,
            tabSize: 4,
            lineWrapping: true,
            lineNumberFormatter: (line) => line,
            gutters: []
        });

        // Remove auto-run on change - only run when button is clicked
        // let timeout;
        // this.editor.on('change', () => {
        //     clearTimeout(timeout);
        //     timeout = setTimeout(() => {
        //         if (this.currentChallenge) {
        //             this.runCode();
        //         }
        //     }, 1000);
        // });
    }

    setupEventListeners() {
        document.getElementById('runCode').addEventListener('click', () => this.runCode());
        document.getElementById('resetCode').addEventListener('click', () => this.resetCode());
        document.getElementById('showHint').addEventListener('click', () => this.showHint());
        document.getElementById('clearConsole').addEventListener('click', () => this.clearConsole());
        document.getElementById('nextChallenge').addEventListener('click', () => this.nextChallenge());
        
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });
        
        document.getElementById('expandTheory').addEventListener('click', () => this.toggleTheoryExpansion());
        
        // Toggle buttons
        document.getElementById('toggleNavigation').addEventListener('click', () => this.toggleChallengeNavigation());
        document.getElementById('toggleDescription').addEventListener('click', () => this.toggleChallengeDescription());
    }

    renderModuleNavigation() {
        const moduleNav = document.getElementById('moduleNav');
        moduleNav.innerHTML = '';

        this.modules.forEach(module => {
            const moduleItem = document.createElement('div');
            moduleItem.className = 'module-item';
            moduleItem.dataset.moduleId = module.id;
            
            const completedChallenges = this.getCompletedChallenges(module.id);
            const totalChallenges = module.challenges.length;
            const isCompleted = completedChallenges === totalChallenges;
            
            if (isCompleted) {
                moduleItem.classList.add('completed');
            }
            
            moduleItem.innerHTML = `
                <span>${module.title}</span>
                <span class="badge">${completedChallenges}/${totalChallenges}</span>
            `;
            
            moduleItem.addEventListener('click', () => this.selectModule(module.id));
            moduleNav.appendChild(moduleItem);
        });
    }

    selectModule(moduleId) {
        this.currentModule = this.modules.find(m => m.id === moduleId);
        
        // Update UI
        document.querySelectorAll('.module-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-module-id="${moduleId}"]`).classList.add('active');
        
        // Update module info
        document.getElementById('moduleTitle').textContent = this.currentModule.title;
        document.getElementById('moduleDescription').textContent = this.currentModule.description;
        
        // Load theory content
        this.loadModuleTheory(moduleId);
        
        // Don't auto-select any challenge - let user choose manually
        this.currentChallenge = null;
        this.currentChallengeIndex = null;
        
        // Show challenge area and tab navigation
        document.getElementById('moduleInfo').style.display = 'none';
        document.getElementById('tabNavigation').style.display = 'flex';
        document.getElementById('challengeArea').style.display = 'block';
        document.getElementById('theoryArea').style.display = 'none';
        document.getElementById('successMessage').style.display = 'none';
        
        // Switch to challenge tab and show navigation, but no challenge selected
        this.switchTab('challenge');
        this.updateChallengeNavigation(); // Create and show navigation initially
        
        // Show placeholder message instead of challenge content
        this.showChallengePlaceholder();
    }

    loadChallenge(challengeIndex) {
        if (!this.currentModule || challengeIndex >= this.currentModule.challenges.length) {
            return;
        }
        
        // Check if challenge is unlocked
        if (!this.isChallengeUnlocked(challengeIndex)) {
            this.showLockedMessage(challengeIndex);
            return;
        }
        
        this.currentChallenge = this.currentModule.challenges[challengeIndex];
        this.currentChallengeIndex = challengeIndex;
        
        // Update challenge UI
        document.getElementById('challengeTitle').textContent = this.currentChallenge.title;
        document.getElementById('challengeDescription').innerHTML = `
            <h4>${this.currentChallenge.title}</h4>
            <p>${this.currentChallenge.description}</p>
        `;
        
        // Set editor content
        this.editor.setValue(this.currentChallenge.initialCode);
        
        // Clear console and results
        this.clearConsole();
        document.getElementById('testResults').style.display = 'none';
        
        // Hide navigation when selecting a challenge, but keep header and description
        this.hideChallengeNavigation();
        this.showChallengeHeader();
        this.showChallengeDescription();
    }

    runCode() {
        if (!this.currentChallenge) return;
        
        const code = this.editor.getValue();
        this.clearConsole();
        
        try {
            // Capture console.log output
            let output = [];
            const originalLog = console.log;
            console.log = (...args) => {
                output.push(args.join(' '));
                this.addToConsole(args.join(' '), 'log');
            };
            
            // Execute code
            eval(code);
            
            // Restore console.log
            console.log = originalLog;
            
            // Show console output
            if (output.length === 0) {
                this.addToConsole('✅ Código ejecutado correctamente (sin salida)', 'success');
            }
            
            // Run tests
            this.runTests(code);
            
        } catch (error) {
            this.addToConsole(`❌ Error: ${error.message}`, 'error');
        }
    }

    runTests(code) {
        if (!this.currentChallenge || !this.currentChallenge.solution) return;
        
        const testResults = document.getElementById('testResults');
        const testResultsContent = document.getElementById('testResultsContent');
        
        try {
            // Simple and direct approach
            const variables = {};
            
            // Execute code in a controlled environment
            const func = new Function(`
                try {
                    ${code}
                    return {
                        ${this.extractVariableNames(code)}
                    };
                } catch (e) {
                    return { error: e.message };
                }
            `);
            
            const result = func();
            
            // Debug: show result
            console.log('Test result:', result);
            
            // Run solution test with result
            const passed = this.currentChallenge.solution(code, result);
            
            testResults.style.display = 'block';
            testResultsContent.innerHTML = `
                <div class="test-item ${passed ? 'test-pass' : 'test-fail'}">
                    <span class="test-icon">${passed ? '✅' : '❌'}</span>
                    <div>
                        <strong>${passed ? '¡Correcto!' : 'Intenta de nuevo'}</strong>
                        <p>${passed ? 'Has resuelto el reto correctamente' : 'Tu código no cumple con los requisitos'}</p>
                        ${!passed ? '<p><small>💡 Revisa que estés declarando las variables con los nombres correctos</small></p>' : ''}
                    </div>
                </div>
            `;
            
            if (passed) {
                this.markChallengeCompleted();
                // Update navigation immediately after marking as completed
                this.updateChallengeNavigation();
                setTimeout(() => this.showSuccess(), 1000);
            }
            
        } catch (error) {
            testResults.style.display = 'block';
            testResultsContent.innerHTML = `
                <div class="test-item test-fail">
                    <span class="test-icon">❌</span>
                    <div>
                        <strong>Error en la validación</strong>
                        <p>${error.message}</p>
                        <p><small>💡 Asegúrate de completar el código correctamente</small></p>
                    </div>
                </div>
            `;
        }
    }

    extractVariableNames(code) {
        const variables = [];
        
        // Extract variable names from declarations
        const letMatches = code.match(/let\s+(\w+)/g);
        const constMatches = code.match(/const\s+(\w+)/g);
        const varMatches = code.match(/var\s+(\w+)/g);
        
        [...(letMatches || []), ...(constMatches || []), ...(varMatches || [])].forEach(match => {
            const varName = match.split(' ')[1];
            if (!variables.includes(varName)) {
                variables.push(varName);
            }
        });
        
        return variables.map(varName => `${varName}: typeof ${varName} !== 'undefined' ? ${varName} : undefined`).join(',\n                        ');
    }

    markChallengeCompleted() {
        const key = `${this.currentModule.id}-${this.currentChallenge.id}`;
        if (!this.progress.completedChallenges) {
            this.progress.completedChallenges = [];
        }
        
        if (!this.progress.completedChallenges.includes(key)) {
            this.progress.completedChallenges.push(key);
            this.saveProgress();
            this.updateProgressBar();
            this.renderModuleNavigation();
        }
    }

    showSuccess() {
        document.getElementById('challengeArea').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // Check if there's a next challenge
        const nextIndex = this.currentChallengeIndex + 1;
        const hasNextChallenge = nextIndex < this.currentModule.challenges.length;
        const hasNextModule = this.modules.findIndex(m => m.id === this.currentModule.id) < this.modules.length - 1;
        
        if (!hasNextChallenge && !hasNextModule) {
            // Last challenge of all modules
            document.getElementById('nextChallenge').textContent = '🎉 ¡Completado!';
            document.getElementById('nextChallenge').disabled = true;
        } else if (!hasNextChallenge && hasNextModule) {
            // Last challenge of current module
            document.getElementById('nextChallenge').textContent = 'Siguiente Módulo →';
        }
    }

    nextChallenge() {
        // Confirm before moving to next challenge
        const nextIndex = this.currentChallengeIndex + 1;
        const hasNextChallenge = nextIndex < this.currentModule.challenges.length;
        const hasNextModule = this.modules.findIndex(m => m.id === this.currentModule.id) < this.modules.length - 1;
        
        let message = '';
        if (hasNextChallenge) {
            message = `¿Quieres pasar al siguiente ejercicio del módulo "${this.currentModule.title}"?`;
        } else if (hasNextModule) {
            const currentModuleIndex = this.modules.findIndex(m => m.id === this.currentModule.id);
            const nextModule = this.modules[currentModuleIndex + 1];
            message = `¡Módulo "${this.currentModule.title}" completado! ¿Quieres pasar al siguiente módulo "${nextModule.title}"?`;
        } else {
            message = '¡Has completado todos los módulos! 🎉';
        }
        
        if (hasNextChallenge || hasNextModule) {
            if (confirm(message)) {
                if (hasNextChallenge) {
                    this.loadChallenge(nextIndex);
                    document.getElementById('challengeArea').style.display = 'block';
                    document.getElementById('successMessage').style.display = 'none';
                } else {
                    // Module completed, go to next module
                    const currentModuleIndex = this.modules.findIndex(m => m.id === this.currentModule.id);
                    this.selectModule(this.modules[currentModuleIndex + 1].id);
                }
            }
        } else {
            // Last challenge of all modules - just show completion
            alert('🎉 ¡Felicidades! Has completado todos los módulos de JavaScript');
        }
    }

    resetCode() {
        if (this.currentChallenge) {
            this.editor.setValue(this.currentChallenge.initialCode);
            this.clearConsole();
            document.getElementById('testResults').style.display = 'none';
        }
    }

    showHint() {
        if (this.currentChallenge && this.currentChallenge.hint) {
            this.addToConsole(`💡 Pista: ${this.currentChallenge.hint}`, 'info');
        }
    }

    addToConsole(message, type = 'log') {
        const consoleOutput = document.getElementById('consoleOutput');
        const logEntry = document.createElement('div');
        logEntry.className = `console-log console-${type}`;
        logEntry.textContent = message;
        consoleOutput.appendChild(logEntry);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    clearConsole() {
        document.getElementById('consoleOutput').innerHTML = '';
    }

    updateProgressBar() {
        const totalChallenges = this.modules.reduce((total, module) => total + module.challenges.length, 0);
        const completedChallenges = this.progress.completedChallenges ? this.progress.completedChallenges.length : 0;
        const percentage = Math.round((completedChallenges / totalChallenges) * 100);
        
        document.getElementById('progressFill').style.width = `${percentage}%`;
        document.getElementById('progressText').textContent = `${percentage}% Completado`;
    }

    getCompletedChallenges(moduleId) {
        if (!this.progress.completedChallenges) return 0;
        
        return this.progress.completedChallenges.filter(challengeId => 
            challengeId.startsWith(moduleId)
        ).length;
    }

    saveProgress() {
        localStorage.setItem('learningProgress', JSON.stringify(this.progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('learningProgress');
        return saved ? JSON.parse(saved) : { completedChallenges: [] };
    }
}

// Initialize the platform when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.platform = new LearningPlatform();
});

// Tab switching and theory loading methods
LearningPlatform.prototype.switchTab = function(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Show/hide corresponding areas
    if (tabName === 'challenge') {
        document.getElementById('challengeArea').style.display = 'flex';
        document.getElementById('theoryArea').style.display = 'none';
        this.showChallengeNavigation(); // Show navigation when switching to challenges tab
        this.showChallengeHeader(); // Show header when switching to challenges tab
    } else if (tabName === 'theory') {
        document.getElementById('challengeArea').style.display = 'none';
        document.getElementById('theoryArea').style.display = 'flex';
    }
};

LearningPlatform.prototype.isChallengeUnlocked = function(challengeIndex) {
    const key = `${this.currentModule.id}-${this.currentModule.challenges[challengeIndex].id}`;
    
    // First challenge is always unlocked
    if (challengeIndex === 0) return true;
    
    // Challenge is unlocked if previous one is completed
    const previousKey = `${this.currentModule.id}-${this.currentModule.challenges[challengeIndex - 1].id}`;
    return this.progress.completedChallenges && this.progress.completedChallenges.includes(previousKey);
};

LearningPlatform.prototype.showLockedMessage = function(challengeIndex) {
    const challenge = this.currentModule.challenges[challengeIndex];
    const previousChallenge = this.currentModule.challenges[challengeIndex - 1];
    
    const modal = document.createElement('div');
    modal.className = 'locked-modal';
    modal.innerHTML = `
        <div class="locked-content">
            <h3>🔒 Ejercicio Bloqueado</h3>
            <p><strong>${challenge.title}</strong></p>
            <p>Debes completar primero:</p>
            <p><strong>"${previousChallenge.title}"</strong></p>
            <button class="btn btn-primary" onclick="this.closest('.locked-modal').remove()">Entendido</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 3000);
};

LearningPlatform.prototype.showChallengePlaceholder = function() {
    // Clear challenge area and show placeholder
    document.getElementById('challengeTitle').textContent = 'Selecciona un Ejercicio';
    document.getElementById('challengeDescription').innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h3>📝 Elige un ejercicio para comenzar</h3>
            <p>Usa la navegación de ejercicios para seleccionar el reto que quieres resolver.</p>
            <p>Los ejercicios bloqueados se desbloquearán a medida que completes los anteriores.</p>
        </div>
    `;
    
    // Clear editor
    this.editor.setValue('// Selecciona un ejercicio de la navegación para comenzar');
    
    // Clear console and results
    this.clearConsole();
    document.getElementById('testResults').style.display = 'none';
    
    // Show header and description for placeholder
    this.showChallengeHeader();
    this.showChallengeDescription();
};

LearningPlatform.prototype.hideChallengeHeader = function() {
    const header = document.querySelector('.challenge-header');
    if (header) {
        header.style.display = 'none';
    }
};

LearningPlatform.prototype.showChallengeHeader = function() {
    const header = document.querySelector('.challenge-header');
    if (header) {
        header.style.display = 'flex';
    }
};

LearningPlatform.prototype.toggleChallengeDescription = function() {
    const description = document.getElementById('challengeDescription');
    const toggleBtn = document.getElementById('toggleDescription');
    
    if (description.style.display === 'none') {
        this.showChallengeDescription();
    } else {
        this.hideChallengeDescription();
    }
};

LearningPlatform.prototype.hideChallengeDescription = function() {
    const description = document.getElementById('challengeDescription');
    const toggleBtn = document.getElementById('toggleDescription');
    if (description) {
        description.style.display = 'none';
    }
    if (toggleBtn) {
        toggleBtn.textContent = '📖 Ver Enunciado';
    }
};

LearningPlatform.prototype.showChallengeDescription = function() {
    const description = document.getElementById('challengeDescription');
    const toggleBtn = document.getElementById('toggleDescription');
    if (description) {
        description.style.display = 'block';
    }
    if (toggleBtn) {
        toggleBtn.textContent = '📖 Ocultar Enunciado';
    }
};

LearningPlatform.prototype.toggleChallengeNavigation = function() {
    const existingNav = document.querySelector('.challenge-navigation');
    const toggleBtn = document.getElementById('toggleNavigation');
    
    if (existingNav) {
        if (existingNav.style.display === 'none') {
            this.showChallengeNavigation();
            toggleBtn.textContent = '📋 Ocultar Ejercicios';
        } else {
            this.hideChallengeNavigation();
            toggleBtn.textContent = '📋 Ver Ejercicios';
        }
    } else {
        // Create navigation if it doesn't exist
        this.updateChallengeNavigation();
        toggleBtn.textContent = '📋 Ocultar Ejercicios';
    }
};

LearningPlatform.prototype.hideChallengeNavigation = function() {
    const existingNav = document.querySelector('.challenge-navigation');
    if (existingNav) {
        existingNav.style.display = 'none';
    }
    const toggleBtn = document.getElementById('toggleNavigation');
    if (toggleBtn) {
        toggleBtn.textContent = '📋 Ver Ejercicios';
    }
};

LearningPlatform.prototype.showChallengeNavigation = function() {
    const existingNav = document.querySelector('.challenge-navigation');
    if (existingNav) {
        existingNav.style.display = 'block';
    }
    const toggleBtn = document.getElementById('toggleNavigation');
    if (toggleBtn) {
        toggleBtn.textContent = '📋 Ocultar Ejercicios';
    }
};

LearningPlatform.prototype.updateChallengeNavigation = function() {
    if (!this.currentModule) return;
    
    // Remove existing navigation if any
    const existingNav = document.querySelector('.challenge-navigation');
    if (existingNav) {
        existingNav.remove();
    }
    
    // Create challenge navigation
    const navContainer = document.createElement('div');
    navContainer.className = 'challenge-navigation';
    
    const navHTML = `
        <h4>📋 Navegación de Ejercicios</h4>
        <div class="challenge-list">
            ${this.currentModule.challenges.map((challenge, index) => {
                const isCompleted = this.isChallengeCompleted(challenge.id);
                const isUnlocked = this.isChallengeUnlocked(index);
                const isCurrent = index === this.currentChallengeIndex;
                
                let statusIcon = '🔒';
                let statusClass = 'locked';
                let clickAction = '';
                
                if (isCompleted) {
                    statusIcon = '✅';
                    statusClass = 'completed';
                    clickAction = `onclick="platform.loadChallenge(${index})"`;
                } else if (isUnlocked) {
                    statusIcon = '📝';
                    statusClass = isCurrent ? 'current' : 'available';
                    clickAction = `onclick="platform.loadChallenge(${index})"`;
                }
                
                return `
                    <div class="challenge-item ${statusClass}" ${clickAction}>
                        <span class="challenge-status">${statusIcon}</span>
                        <div class="challenge-info">
                            <span class="challenge-number">${index + 1}</span>
                            <span class="challenge-title">${challenge.title}</span>
                        </div>
                        ${isCompleted ? '<span class="challenge-replay">🔄</span>' : ''}
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    navContainer.innerHTML = navHTML;
    
    // Insert after challenge header
    const challengeHeader = document.querySelector('.challenge-header');
    if (challengeHeader) {
        challengeHeader.parentNode.insertBefore(navContainer, challengeHeader.nextSibling);
    }
};

LearningPlatform.prototype.isChallengeCompleted = function(challengeId) {
    const key = `${this.currentModule.id}-${challengeId}`;
    return this.progress.completedChallenges && this.progress.completedChallenges.includes(key);
};

LearningPlatform.prototype.loadModuleTheory = function(moduleId) {
    const theoryContent = document.getElementById('theoryContent');
    const theoryTitle = document.getElementById('theoryTitle');
    
    // Show loading state
    theoryContent.innerHTML = '<p>Cargando documentación...</p>';
    theoryTitle.textContent = `Documentación - ${this.currentModule.title}`;
    
    // Try to load README.md from the module folder
    const readmePath = `${moduleId}/README.md`;
    
    fetch(readmePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('README.md no encontrado');
            }
            return response.text();
        })
        .then(markdown => {
            // Convert markdown to HTML
            const html = marked.parse(markdown);
            theoryContent.innerHTML = html;
        })
        .catch(error => {
            // Fallback: show module description
            theoryContent.innerHTML = `
                <div class="theory-fallback">
                    <h2>${this.currentModule.title}</h2>
                    <p>${this.currentModule.description}</p>
                    <br>
                    <p><em>No se encontró archivo README.md para este módulo. La documentación detallada no está disponible.</em></p>
                    <br>
                    <h3>Contenido del Módulo</h3>
                    <ul>
                        ${this.currentModule.challenges.map(challenge => 
                            `<li><strong>${challenge.title}</strong>: ${challenge.description}</li>`
                        ).join('')}
                    </ul>
                </div>
            `;
        });
};

LearningPlatform.prototype.toggleTheoryExpansion = function() {
    const theoryContent = document.getElementById('theoryContent');
    const expandBtn = document.getElementById('expandTheory');
    
    if (theoryContent.style.maxHeight === 'none') {
        theoryContent.style.maxHeight = '600px';
        theoryContent.style.overflowY = 'auto';
        expandBtn.textContent = '📖 Expandir';
    } else {
        theoryContent.style.maxHeight = 'none';
        theoryContent.style.overflowY = 'visible';
        expandBtn.textContent = '📖 Contraer';
    }
};
