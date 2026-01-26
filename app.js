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
                        title: 'Constantes',
                        description: 'Crea una constante llamada "PI" con el valor 3.14159.',
                        initialCode: '// Declara la constante aquí\nconst PI = ',
                        solution: (code, sandbox) => {
                            try {
                                return sandbox.PI === 3.14159;
                            } catch (e) {
                                return false;
                            }
                        },
                        hint: 'Usa: const PI = 3.14159;'
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

        // Auto-run on change (debounced)
        let timeout;
        this.editor.on('change', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (this.currentChallenge) {
                    this.runCode();
                }
            }, 1000);
        });
    }

    setupEventListeners() {
        document.getElementById('runCode').addEventListener('click', () => this.runCode());
        document.getElementById('resetCode').addEventListener('click', () => this.resetCode());
        document.getElementById('showHint').addEventListener('click', () => this.showHint());
        document.getElementById('clearConsole').addEventListener('click', () => this.clearConsole());
        document.getElementById('nextChallenge').addEventListener('click', () => this.nextChallenge());
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
        
        // Start first challenge
        this.loadChallenge(0);
        
        // Show challenge area
        document.getElementById('moduleInfo').style.display = 'none';
        document.getElementById('challengeArea').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    }

    loadChallenge(challengeIndex) {
        if (!this.currentModule || challengeIndex >= this.currentModule.challenges.length) {
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
            
            // Run tests
            this.runTests(code);
            
        } catch (error) {
            this.addToConsole(`Error: ${error.message}`, 'error');
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
    }

    nextChallenge() {
        const nextIndex = this.currentChallengeIndex + 1;
        if (nextIndex < this.currentModule.challenges.length) {
            this.loadChallenge(nextIndex);
            document.getElementById('challengeArea').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        } else {
            // Module completed, go to next module
            const currentModuleIndex = this.modules.findIndex(m => m.id === this.currentModule.id);
            if (currentModuleIndex < this.modules.length - 1) {
                this.selectModule(this.modules[currentModuleIndex + 1].id);
            }
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
    new LearningPlatform();
});
