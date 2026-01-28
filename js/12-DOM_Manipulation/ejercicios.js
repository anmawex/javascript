// EJERCICIOS PRÁCTICOS - DOM MANIPULATION
// Selección, manipulación, creación y eventos

// === EJERCICIO 1: Selección de Elementos ===

// 1.1 Seleccionar elementos por diferentes métodos
function ejercicioSeleccion() {
    // Selecciona el elemento con id "header"
    // Tu código aquí:
    
    // Selecciona todos los elementos con clase "nav-item"
    // Tu código aquí:
    
    // Selecciona el primer párrafo
    // Tu código aquí:
    
    // Selecciona todos los enlaces que apuntan a https
    // Tu código aquí:
    
    // Selecciona el elemento con data-role="button"
    // Tu código aquí:
}

// 1.2 Verificar existencia de elementos
function verificarElementos() {
    // Verifica si existe el elemento con id "main-content"
    // Retorna true/false
    // Tu código aquí:
    
    // Verifica si hay elementos con clase "card"
    // Retorna la cantidad
    // Tu código aquí:
}

// === EJERCICIO 2: Manipulación de Contenido ===

// 2.1 Modificar texto y HTML
function modificarContenido() {
    // Cambia el texto del h1 a "Nuevo Título"
    // Tu código aquí:
    
    // Agrega un párrafo al final del div con id "content"
    // Usa textContent para seguridad
    // Tu código aquí:
    
    // Crea una lista de 3 items y agrégala al contenedor
    // Usa createElement para seguridad
    // Tu código aquí:
}

// 2.2 Trabajar con atributos
function manipularAtributos() {
    // Agrega el atributo "data-modificado" a todos los enlaces
    // Tu código aquí:
    
    // Cambia el placeholder del primer input a "Escribe aquí..."
    // Tu código aquí:
    
    // Verifica si una imagen tiene el atributo alt y agrégalo si no tiene
    // Tu código aquí:
}

// === EJERCICIO 3: Creación de Elementos ===

// 3.1 Crear tarjeta dinámica
function crearTarjeta(datos) {
    // Crea una tarjeta con la siguiente estructura:
    /*
    <div class="card">
        <h3 class="card-title">Título</h3>
        <p class="card-content">Contenido</p>
        <div class="card-footer">
            <span class="card-author">Autor</span>
        </div>
    </div>
    */
    // Usa los datos: {titulo, contenido, autor}
    // Tu código aquí:
}

// 3.2 Crear tabla dinámica
function crearTabla(datos) {
    // Crea una tabla con los datos proporcionados
    // datos es un array de objetos: [{id, nombre, email}, ...]
    // Debe tener encabezados: ID, Nombre, Email
    // Tu código aquí:
}

// 3.3 Crear formulario dinámico
function crearFormulario(campos) {
    // campos es un array de objetos:
    // [{nombre: "username", tipo: "text", etiqueta: "Usuario"}, ...]
    // Crea un formulario con todos los campos
    // Tu código aquí:
}

// === EJERCICIO 4: Estilos y Clases ===

// 4.1 Manipular clases CSS
function manipularClases() {
    // Agrega la clase "active" al primer elemento con clase "menu-item"
    // Tu código aquí:
    
    // Elimina la clase "hidden" de todos los elementos que la tengan
    // Tu código aquí:
    
    // Toggle la clase "expanded" en el elemento con id "sidebar"
    // Tu código aquí:
    
    // Verifica si el elemento con id "header" tiene la clase "fixed"
    // Tu código aquí:
}

// 4.2 Manipular estilos inline
function manipularEstilos() {
    // Cambia el color de fondo del body a #f0f0f0
    // Tu código aquí:
    
    // Oculta todos los elementos con clase "sidebar"
    // Tu código aquí:
    
    // Establece el font-size del h1 a 2rem
    // Tu código aquí:
}

// === EJERCICIO 5: Manejo de Eventos ===

// 5.1 Eventos básicos
function configurarEventosBasicos() {
    // Agrega un evento click al botón con id "btn-primary"
    // Debe mostrar un alert con "Botón primario clickeado"
    // Tu código aquí:
    
    // Agrega evento mouseover a todos los elementos con clase "card"
    // Debe agregar la clase "hover" al elemento
    // Tu código aquí:
    
    // Agrega evento mouseout para remover la clase "hover"
    // Tu código aquí:
}

// 5.2 Eventos de formulario
function configurarEventosFormulario() {
    // Agrega evento submit al formulario con id "contact-form"
    // Previene el envío y muestra los datos en consola
    // Tu código aquí:
    
    // Agrega evento input al campo con id "email"
    // Valida que contenga "@" en tiempo real
    // Tu código aquí:
    
    // Agrega evento change al select con id "country"
    // Muestra el país seleccionado en consola
    // Tu código aquí:
}

// 5.3 Eventos de teclado
function configurarEventosTeclado() {
    // Agrega evento keydown al input con id "search"
    // Si presiona Enter, ejecuta una búsqueda
    // Tu código aquí:
    
    // Agrega evento keypress al input con id "numbers-only"
    // Solo permite números (prevenir otros caracteres)
    // Tu código aquí:
    
    // Agrega evento keyup al textarea con id "message"
    // Muestra el contador de caracteres en tiempo real
    // Tu código aquí:
}

// === EJERCICIO 6: Eventos Avanzados ===

// 6.1 Delegación de eventos
function configurarDelegacion() {
    // Configura un solo listener en el contenedor con id "button-container"
    // Debe manejar clicks en todos los botones dentro
    // Usa data-action para determinar la acción
    // Tu código aquí:
}

// 6.2 Eventos personalizados
function configurarEventosPersonalizados() {
    // Crea un evento personalizado "usuarioActualizado"
    // Dispararlo cuando se actualice un formulario de usuario
    // Tu código aquí:
}

// 6.3 Drag and Drop básico
function configurarDragAndDrop() {
    // Implementa drag and drop básico:
    // - Elemento con id "draggable" debe ser arrastrable
    // - Elemento con id "dropzone" debe recibir el elemento
    // - Muestra mensajes en consola durante el proceso
    // Tu código aquí:
}

// === EJERCICIO 7: Proyecto Integrador ===

// 7.1 Todo List Manager
class TodoManager {
    constructor(containerId) {
        // Tu código aquí:
        // - Guardar referencia al contenedor
        // - Inicializar array de todos
        // - Configurar eventos
    }
    
    agregarTodo(texto) {
        // Tu código aquí:
        // - Validar que el texto no esté vacío
        // - Crear elemento todo
        // - Agregar al DOM y al array
    }
    
    eliminarTodo(id) {
        // Tu código aquí:
        // - Eliminar del DOM
        // - Eliminar del array
    }
    
    toggleTodo(id) {
        // Tu código aquí:
        // - Cambiar estado completado/no completado
        // - Actualizar clases CSS
    }
    
    render() {
        // Tu código aquí:
        // - Renderizar todos los todos
        // - Limpiar y reconstruir el DOM
    }
}

// 7.2 Modal Manager
class ModalManager {
    constructor() {
        // Tu código aquí:
        // - Crear estructura del modal
        // - Agregar al DOM (oculto)
        // - Configurar eventos
    }
    
    mostrar(contenido) {
        // Tu código aquí:
        // - Mostrar el modal
        // - Insertar contenido
        // - Bloquear scroll del body
    }
    
    ocultar() {
        // Tu código aquí:
        // - Ocultar el modal
        // - Restaurar scroll
    }
    
    configurarEventos() {
        // Tu código aquí:
        // - Click en botón cerrar
        // - Click fuera del modal
        - // Tecla Escape
    }
}

// === PRUEBAS ===
// Descomenta para probar tus soluciones

/*
// Prueba Ejercicio 1
ejercicioSeleccion();
console.log("¿Existe main-content?:", verificarElementos());

// Prueba Ejercicio 2
modificarContenido();
manipularAtributos();

// Prueba Ejercicio 3
const tarjeta = crearTarjeta({
    titulo: "Mi Tarjeta",
    contenido: "Este es el contenido de mi tarjeta",
    autor: "Juan Pérez"
});
document.body.appendChild(tarjeta);

const tabla = crearTabla([
    {id: 1, nombre: "Ana", email: "ana@ejemplo.com"},
    {id: 2, nombre: "Juan", email: "juan@ejemplo.com"}
]);
document.body.appendChild(tabla);

// Prueba Ejercicio 4
manipularClases();
manipularEstilos();

// Prueba Ejercicio 5
configurarEventosBasicos();
configurarEventosFormulario();
configurarEventosTeclado();

// Prueba Ejercicio 6
configurarDelegacion();
configurarEventosPersonalizados();
configurarDragAndDrop();

// Prueba Ejercicio 7
const todoManager = new TodoManager('todo-container');
todoManager.agregarTodo('Aprender JavaScript');
todoManager.agregarTodo('Construir un proyecto');
todoManager.agregarTodo('Dominar el DOM');

const modalManager = new ModalManager();
modalManager.mostrar('<h2>Título del Modal</h2><p>Contenido del modal</p>');
*/

// === RESPUESTAS Y SOLUCIONES ===
// Descomenta la siguiente sección para ver las soluciones

/*
// SOLUCIÓN EJERCICIO 1:
function ejercicioSeleccion() {
    const header = document.getElementById('header');
    const navItems = document.getElementsByClassName('nav-item');
    const primerParrafo = document.querySelector('p');
    const enlacesHttps = document.querySelectorAll('a[href^="https"]');
    const botonRole = document.querySelector('[data-role="button"]');
}

function verificarElementos() {
    const existeMain = document.getElementById('main-content') !== null;
    const cantidadCards = document.getElementsByClassName('card').length;
    return { existeMain, cantidadCards };
}

// SOLUCIÓN EJERCICIO 2:
function modificarContenido() {
    const h1 = document.querySelector('h1');
    if (h1) h1.textContent = 'Nuevo Título';
    
    const content = document.getElementById('content');
    if (content) {
        const p = document.createElement('p');
        p.textContent = 'Párrafo agregado dinámicamente';
        content.appendChild(p);
    }
    
    const container = document.getElementById('content');
    if (container) {
        const ul = document.createElement('ul');
        ['Item 1', 'Item 2', 'Item 3'].forEach(texto => {
            const li = document.createElement('li');
            li.textContent = texto;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }
}

function manipularAtributos() {
    const enlaces = document.querySelectorAll('a');
    enlaces.forEach(enlace => enlace.setAttribute('data-modificado', 'true'));
    
    const primerInput = document.querySelector('input');
    if (primerInput) primerInput.placeholder = 'Escribe aquí...';
    
    const imagenes = document.querySelectorAll('img');
    imagenes.forEach(img => {
        if (!img.hasAttribute('alt')) {
            img.setAttribute('alt', 'Imagen descriptiva');
        }
    });
}

// SOLUCIÓN EJERCICIO 3:
function crearTarjeta(datos) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = datos.titulo;
    
    const content = document.createElement('p');
    content.className = 'card-content';
    content.textContent = datos.contenido;
    
    const footer = document.createElement('div');
    footer.className = 'card-footer';
    
    const author = document.createElement('span');
    author.className = 'card-author';
    author.textContent = datos.autor;
    
    footer.appendChild(author);
    card.appendChild(title);
    card.appendChild(content);
    card.appendChild(footer);
    
    return card;
}

function crearTabla(datos) {
    const table = document.createElement('table');
    
    // Encabezado
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['ID', 'Nombre', 'Email'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Cuerpo
    const tbody = document.createElement('tbody');
    datos.forEach(item => {
        const row = document.createElement('tr');
        
        const tdId = document.createElement('td');
        tdId.textContent = item.id;
        
        const tdNombre = document.createElement('td');
        tdNombre.textContent = item.nombre;
        
        const tdEmail = document.createElement('td');
        tdEmail.textContent = item.email;
        
        row.appendChild(tdId);
        row.appendChild(tdNombre);
        row.appendChild(tdEmail);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    
    return table;
}

function crearFormulario(campos) {
    const form = document.createElement('form');
    
    campos.forEach(campo => {
        const fieldset = document.createElement('fieldset');
        
        const label = document.createElement('label');
        label.textContent = campo.etiqueta;
        label.setAttribute('for', campo.nombre);
        
        const input = document.createElement('input');
        input.type = campo.tipo;
        input.name = campo.nombre;
        input.id = campo.nombre;
        input.placeholder = campo.etiqueta;
        
        fieldset.appendChild(label);
        fieldset.appendChild(input);
        form.appendChild(fieldset);
    });
    
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Enviar';
    form.appendChild(submit);
    
    return form;
}

// SOLUCIÓN EJERCICIO 4:
function manipularClases() {
    const primerMenuItem = document.querySelector('.menu-item');
    if (primerMenuItem) primerMenuItem.classList.add('active');
    
    const elementosHidden = document.querySelectorAll('.hidden');
    elementosHidden.forEach(el => el.classList.remove('hidden'));
    
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('expanded');
    
    const header = document.getElementById('header');
    const tieneFixed = header ? header.classList.contains('fixed') : false;
}

function manipularEstilos() {
    document.body.style.backgroundColor = '#f0f0f0';
    
    const sidebars = document.querySelectorAll('.sidebar');
    sidebars.forEach(sidebar => sidebar.style.display = 'none');
    
    const h1 = document.querySelector('h1');
    if (h1) h1.style.fontSize = '2rem';
}

// SOLUCIÓN EJERCICIO 5:
function configurarEventosBasicos() {
    const btnPrimary = document.getElementById('btn-primary');
    if (btnPrimary) {
        btnPrimary.addEventListener('click', () => {
            alert('Botón primario clickeado');
        });
    }
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseout', () => {
            card.classList.remove('hover');
        });
    });
}

function configurarEventosFormulario() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            console.log('Datos del formulario:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        });
    }
    
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('input', (e) => {
            const email = e.target.value;
            const isValid = email.includes('@');
            emailInput.style.borderColor = isValid ? 'green' : 'red';
        });
    }
    
    const countrySelect = document.getElementById('country');
    if (countrySelect) {
        countrySelect.addEventListener('change', (e) => {
            console.log('País seleccionado:', e.target.value);
        });
    }
}

function configurarEventosTeclado() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                console.log('Buscando:', searchInput.value);
            }
        });
    }
    
    const numbersInput = document.getElementById('numbers-only');
    if (numbersInput) {
        numbersInput.addEventListener('keypress', (e) => {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        });
    }
    
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        messageTextarea.addEventListener('keyup', (e) => {
            const contador = e.target.value.length;
            console.log(`Caracteres: ${contador}`);
        });
    }
}

// SOLUCIÓN EJERCICIO 6:
function configurarDelegacion() {
    const container = document.getElementById('button-container');
    if (container) {
        container.addEventListener('click', (e) => {
            if (e.target.matches('button')) {
                const accion = e.target.dataset.action;
                console.log('Acción:', accion);
                
                switch (accion) {
                    case 'save':
                        console.log('Guardando...');
                        break;
                    case 'delete':
                        console.log('Eliminando...');
                        break;
                    case 'edit':
                        console.log('Editando...');
                        break;
                }
            }
        });
    }
}

function configurarEventosPersonalizados() {
    const form = document.querySelector('#user-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const evento = new CustomEvent('usuarioActualizado', {
                detail: {
                    usuario: 'Juan',
                    timestamp: Date.now()
                }
            });
            
            document.dispatchEvent(evento);
        });
    }
    
    document.addEventListener('usuarioActualizado', (e) => {
        console.log('Usuario actualizado:', e.detail);
    });
}

function configurarDragAndDrop() {
    const draggable = document.getElementById('draggable');
    const dropzone = document.getElementById('dropzone');
    
    if (draggable) {
        draggable.draggable = true;
        
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            console.log('Iniciando arrastre');
        });
        
        draggable.addEventListener('dragend', (e) => {
            console.log('Arrastre terminado');
        });
    }
    
    if (dropzone) {
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            dropzone.classList.add('drag-over');
        });
        
        dropzone.addEventListener('dragleave', (e) => {
            dropzone.classList.remove('drag-over');
        });
        
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('drag-over');
            dropzone.appendChild(draggable);
            console.log('Elemento soltado');
        });
    }
}

// SOLUCIÓN EJERCICIO 7:
class TodoManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.todos = [];
        this.nextId = 1;
        this.render();
        this.configurarEventos();
    }
    
    agregarTodo(texto) {
        if (!texto.trim()) return;
        
        const todo = {
            id: this.nextId++,
            texto: texto.trim(),
            completado: false
        };
        
        this.todos.push(todo);
        this.render();
    }
    
    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.render();
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completado = !todo.completado;
            this.render();
        }
    }
    
    render() {
        this.container.innerHTML = '';
        
        this.todos.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.className = `todo ${todo.completado ? 'completed' : ''}`;
            todoElement.dataset.id = todo.id;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completado;
            checkbox.addEventListener('change', () => this.toggleTodo(todo.id));
            
            const texto = document.createElement('span');
            texto.textContent = todo.texto;
            
            const eliminar = document.createElement('button');
            eliminar.textContent = 'Eliminar';
            eliminar.addEventListener('click', () => this.eliminarTodo(todo.id));
            
            todoElement.appendChild(checkbox);
            todoElement.appendChild(texto);
            todoElement.appendChild(eliminar);
            
            this.container.appendChild(todoElement);
        });
    }
    
    configurarEventos() {
        const input = document.createElement('input');
        input.placeholder = 'Nuevo todo...';
        
        const boton = document.createElement('button');
        boton.textContent = 'Agregar';
        
        boton.addEventListener('click', () => {
            this.agregarTodo(input.value);
            input.value = '';
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.agregarTodo(input.value);
                input.value = '';
            }
        });
        
        this.container.parentNode.insertBefore(input, this.container);
        this.container.parentNode.insertBefore(boton, this.container);
    }
}

class ModalManager {
    constructor() {
        this.modal = this.crearModal();
        this.overlay = this.crearOverlay();
        this.configurarEventos();
    }
    
    crearModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <div class="modal-body"></div>
            </div>
        `;
        modal.style.display = 'none';
        document.body.appendChild(modal);
        return modal;
    }
    
    crearOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.style.display = 'none';
        document.body.appendChild(overlay);
        return overlay;
    }
    
    mostrar(contenido) {
        const body = this.modal.querySelector('.modal-body');
        body.innerHTML = contenido;
        
        this.modal.style.display = 'block';
        this.overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    ocultar() {
        this.modal.style.display = 'none';
        this.overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    configurarEventos() {
        const closeBtn = this.modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.ocultar());
        
        this.overlay.addEventListener('click', () => this.ocultar());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.ocultar();
        });
    }
}
*/
