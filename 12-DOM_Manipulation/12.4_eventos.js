// EVENTOS EN EL DOM
// Manejo de eventos de usuario en JavaScript

// === CONCEPTOS BÁSICOS DE EVENTOS ===

// 1. ¿Qué es un evento?
// Los eventos son acciones o sucesos que ocurren en el DOM
// Ejemplos: click, mouseover, keypress, submit, load, etc.

// 2. Modelo de eventos: Event Bubbling y Capturing
/*
   Fase de Captura (descendente)
   ↓
   Elemento Padre → Elemento Hijo → Elemento Nieto
   ↓
   Fase Target (elemento objetivo)
   ↓
   Elemento Nieto → Elemento Hijo → Elemento Padre
   ↓
   Fase de Bubbling (ascendente)
*/

// === MÉTODOS TRADICIONALES ===

// 3. Event handlers en HTML (no recomendado)
// <button onclick="alert('Hola')">Clickeame</button>

// 4. Propiedad onclick (limitado)
const botonTradicional = document.querySelector('#boton-tradicional');
if (botonTradicional) {
    botonTradicional.onclick = function() {
        console.log('Botón clickeado con onclick');
    };
    
    // Problema: solo puede tener un handler
    botonTradicional.onclick = function() {
        console.log('Este reemplaza al anterior');
    };
}

// === MÉTODO MODERNO: addEventListener ===

// 5. addEventListener - forma recomendada
const botonModerno = document.querySelector('#boton-moderno');
if (botonModerno) {
    botonModerno.addEventListener('click', function(event) {
        console.log('Botón clickeado con addEventListener');
        console.log('Evento:', event);
    });
    
    // Se pueden agregar múltiples listeners
    botonModerno.addEventListener('click', function() {
        console.log('Segundo listener del mismo botón');
    });
}

// 6. Sintaxis con función nombrada
function manejarClick(event) {
    console.log('Click manejado por función nombrada');
    console.log('Target:', event.target);
    console.log('CurrentTarget:', event.currentTarget);
}

const botonFuncion = document.querySelector('#boton-funcion');
if (botonFuncion) {
    botonFuncion.addEventListener('click', manejarClick);
}

// 7. Arrow functions y this
const botonArrow = document.querySelector('#boton-arrow');
if (botonArrow) {
    botonArrow.addEventListener('click', (event) => {
        // 'this' no se refiere al elemento en arrow functions
        console.log('Arrow function - this:', this);
        console.log('Arrow function - event.target:', event.target);
    });
}

const botonNormal = document.querySelector('#boton-normal');
if (botonNormal) {
    botonNormal.addEventListener('click', function(event) {
        // 'this' se refiere al elemento en funciones normales
        console.log('Función normal - this:', this);
        console.log('Función normal - event.target:', event.target);
    });
}

// === TIPOS DE EVENTOS COMUNES ===

// 8. Eventos de mouse
const areaMouse = document.querySelector('#area-mouse');
if (areaMouse) {
    // click - clic completo
    areaMouse.addEventListener('click', (e) => {
        console.log('Click:', e.type);
    });
    
    // mousedown - botón presionado
    areaMouse.addEventListener('mousedown', (e) => {
        console.log('Mouse down:', e.button); // 0=izquierdo, 1=medio, 2=derecho
    });
    
    // mouseup - botón liberado
    areaMouse.addEventListener('mouseup', (e) => {
        console.log('Mouse up:', e.button);
    });
    
    // mouseover - entra al elemento (incluye hijos)
    areaMouse.addEventListener('mouseover', (e) => {
        console.log('Mouse over');
    });
    
    // mouseenter - entra al elemento (no incluye hijos)
    areaMouse.addEventListener('mouseenter', (e) => {
        console.log('Mouse enter');
    });
    
    // mouseout - sale del elemento (incluye hijos)
    areaMouse.addEventListener('mouseout', (e) => {
        console.log('Mouse out');
    });
    
    // mouseleave - sale del elemento (no incluye hijos)
    areaMouse.addEventListener('mouseleave', (e) => {
        console.log('Mouse leave');
    });
    
    // mousemove - movimiento del mouse
    areaMouse.addEventListener('mousemove', (e) => {
        console.log('Mouse move:', e.clientX, e.clientY);
    });
}

// 9. Eventos de teclado
const inputTeclado = document.querySelector('#input-teclado');
if (inputTeclado) {
    // keydown - tecla presionada
    inputTeclado.addEventListener('keydown', (e) => {
        console.log('Key down:', e.key, e.code);
    });
    
    // keyup - tecla liberada
    inputTeclado.addEventListener('keyup', (e) => {
        console.log('Key up:', e.key, e.code);
    });
    
    // keypress - tecla que produce carácter (obsoleto)
    inputTeclado.addEventListener('keypress', (e) => {
        console.log('Key press:', e.key, e.charCode);
    });
    
    // Propiedades útiles del evento de teclado
    inputTeclado.addEventListener('keydown', (e) => {
        console.log('Tecla:', e.key);
        console.log('Código:', e.code);
        console.log('Ctrl:', e.ctrlKey);
        console.log('Shift:', e.shiftKey);
        console.log('Alt:', e.altKey);
        console.log('Meta:', e.metaKey);
        
        // Prevenir comportamiento por defecto
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('Enter presionado, comportamiento prevenido');
        }
    });
}

// 10. Eventos de formulario
const formulario = document.querySelector('#mi-formulario');
if (formulario) {
    // submit - envío de formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir envío real
        
        const datos = new FormData(formulario);
        console.log('Datos del formulario:');
        
        for (let [key, value] of datos.entries()) {
            console.log(`${key}: ${value}`);
        }
        
        // Validación
        const email = formulario.querySelector('#email');
        if (email && !email.value.includes('@')) {
            console.log('Email inválido');
            return;
        }
        
        console.log('Formulario válido');
    });
    
    // change - valor cambió
    const select = formulario.querySelector('#pais');
    if (select) {
        select.addEventListener('change', (e) => {
            console.log('País seleccionado:', e.target.value);
        });
    }
    
    // input - valor cambió (en tiempo real)
    const texto = formulario.querySelector('#texto');
    if (texto) {
        texto.addEventListener('input', (e) => {
            console.log('Texto:', e.target.value);
        });
    }
}

// === CONTROL DE EVENTOS ===

// 11. preventDefault() - prevenir comportamiento por defecto
const enlace = document.querySelector('#enlace-prevenir');
if (enlace) {
    enlace.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir navegación
        console.log('Enlace clickeado, pero no navega');
    });
}

const checkbox = document.querySelector('#checkbox-prevenir');
if (checkbox) {
    checkbox.addEventListener('click', (e) => {
        if (!confirm('¿Estás seguro?')) {
            e.preventDefault(); // Prevenir cambio de estado
        }
    });
}

// 12. stopPropagation() - detener propagación
const contenedorEventos = document.querySelector('#contenedor-eventos');
const botonInterno = document.querySelector('#boton-interno');

if (contenedorEventos) {
    contenedorEventos.addEventListener('click', (e) => {
        console.log('Click en contenedor');
    });
}

if (botonInterno) {
    botonInterno.addEventListener('click', (e) => {
        e.stopPropagation(); // Detener propagación
        console.log('Click en botón interno (no se propaga)');
    });
}

// 13. stopImmediatePropagation() - detener todos los listeners
const botonMultiples = document.querySelector('#boton-multiples');
if (botonMultiples) {
    botonMultiples.addEventListener('click', (e) => {
        console.log('Primer listener');
        e.stopImmediatePropagation(); // Detener otros listeners
    });
    
    botonMultiples.addEventListener('click', (e) => {
        console.log('Segundo listener (no se ejecuta)');
    });
}

// === EVENTOS DELEGADOS ===

// 14. Delegación de eventos - patrón eficiente
const lista = document.querySelector('#lista-delegada');
if (lista) {
    // Un solo listener para todos los items
    lista.addEventListener('click', (e) => {
        // Verificar si el clic fue en un item
        if (e.target.matches('li')) {
            console.log('Item clickeado:', e.target.textContent);
            
            // Resaltar item clickeado
            // Quitar clase de todos
            lista.querySelectorAll('li').forEach(item => {
                item.classList.remove('activo');
            });
            
            // Agregar clase al item clickeado
            e.target.classList.add('activo');
        }
    });
}

// 15. Delegación con botones dinámicos
const panelBotones = document.querySelector('#panel-botones');
if (panelBotones) {
    panelBotones.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            const accion = e.target.dataset.action;
            
            switch (accion) {
                case 'crear':
                    console.log('Acción: crear');
                    break;
                case 'editar':
                    console.log('Acción: editar');
                    break;
                case 'eliminar':
                    console.log('Acción: eliminar');
                    break;
            }
        }
    });
}

// === EVENTOS AVANZADOS ===

// 16. Eventos personalizados (CustomEvent)
const disparador = document.querySelector('#disparador-evento');
const receptor = document.querySelector('#receptor-evento');

if (disparador && receptor) {
    disparador.addEventListener('click', () => {
        // Crear evento personalizado
        const eventoPersonalizado = new CustomEvent('datosActualizados', {
            detail: {
                usuario: 'Juan',
                timestamp: Date.now(),
                accion: 'actualización'
            }
        });
        
        // Disparar evento
        receptor.dispatchEvent(eventoPersonalizado);
    });
    
    receptor.addEventListener('datosActualizados', (e) => {
        console.log('Evento personalizado recibido:', e.detail);
    });
}

// 17. Eventos del DOM (load, DOMContentLoaded)
// DOMContentLoaded - cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado');
});

// load - cuando todos los recursos (imágenes, scripts) están cargados
window.addEventListener('load', () => {
    console.log('Página completamente cargada');
});

// 18. Eventos de ventana
window.addEventListener('resize', (e) => {
    console.log('Ventana redimensionada:', window.innerWidth, window.innerHeight);
});

window.addEventListener('scroll', (e) => {
    console.log('Scroll posición:', window.scrollY);
});

// 19. Eventos de foco
const inputs = document.querySelectorAll('input[type="text"]');
inputs.forEach(input => {
    input.addEventListener('focus', (e) => {
        e.target.classList.add('enfocado');
    });
    
    input.addEventListener('blur', (e) => {
        e.target.classList.remove('enfocado');
    });
});

// === REMOCIÓN DE EVENT LISTENERS ===

// 20. Remover event listeners
const botonRemover = document.querySelector('#boton-remover');
let contadorClicks = 0;

function contarClicks(e) {
    contadorClicks++;
    console.log(`Click ${contadorClicks}`);
    
    if (contadorClicks >= 3) {
        console.log('Removiendo listener después de 3 clicks');
        botonRemover.removeEventListener('click', contarClicks);
    }
}

if (botonRemover) {
    botonRemover.addEventListener('click', contarClicks);
}

// 21. Remover con función anónima (usando AbortController)
const botonAbortar = document.querySelector('#boton-abortar');
const controller = new AbortController();

if (botonAbortar) {
    botonAbortar.addEventListener('click', () => {
        console.log('Listener será abortado en 3 segundos');
        setTimeout(() => {
            controller.abort();
            console.log('Listener abortado');
        }, 3000);
    });
    
    // Listener con señal de abortación
    document.addEventListener('mousemove', (e) => {
        console.log('Mouse movido:', e.clientX, e.clientY);
    }, { signal: controller.signal });
}

// === BUENAS PRÁCTICAS ===

// 22. Usar delegación de eventos para elementos dinámicos
// ✓ Mejor rendimiento
// ✓ Funciona con elementos agregados después

// 23. Usar data attributes para información adicional
// ✓ Semántica HTML
// ✓ Fácil acceso con dataset

// 24. Prevenir comportamientos por defecto cuando sea necesario
// ✓ Formularios
// ✓ Enlaces
// ✓ Teclas especiales

// 25. Limpiar event listeners cuando sea necesario
// ✓ En single page applications
// ✓ Para evitar memory leaks

// 26. Resumen
console.log(`
=== RESUMEN DE EVENTOS ===
✓ Eventos: acciones del usuario en el DOM
✓ addEventListener: método moderno recomendado
✓ Tipos: mouse, keyboard, form, window, custom
✓ Control: preventDefault(), stopPropagation()
✓ Delegación: patrón eficiente para múltiples elementos
✓ Eventos personalizados: CustomEvent, dispatchEvent
✓ Remoción: removeEventListener, AbortController
✓ Ciclo de vida: load, DOMContentLoaded, unload
✓ Buenas prácticas: delegación, data attributes, limpieza
`);
