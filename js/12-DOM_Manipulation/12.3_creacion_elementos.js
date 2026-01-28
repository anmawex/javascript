// CREACIÓN DE ELEMENTOS DEL DOM
// Formas de crear y agregar elementos dinámicamente

// === MÉTODOS BÁSICOS DE CREACIÓN ===

// 1. createElement - método fundamental
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Div creado con createElement';
nuevoDiv.className = 'mi-div';
nuevoDiv.id = 'div-unico';

console.log('Elemento creado:', nuevoDiv);
console.log('Nombre de etiqueta:', nuevoDiv.tagName);

// 2. createTextNode - para nodos de texto
const textoNode = document.createTextNode('Texto puro');
console.log('Nodo de texto:', textoNode);

// 3. createComment - para comentarios HTML
const comentario = document.createComment('Este es un comentario');
console.log('Comentario creado:', comentario);

// === INSERCIÓN EN EL DOM ===

// 4. appendChild - agregar al final
const body = document.body;
body.appendChild(nuevoDiv);

// 5. insertBefore - insertar antes de un elemento
const referencia = document.querySelector('#referencia');
if (referencia) {
    const nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = 'Insertado antes de referencia';
    referencia.parentNode.insertBefore(nuevoElemento, referencia);
}

// === MÉTODOS MODERNOS (ES6+) ===

// 6. prepend - insertar al principio
const contenedor = document.querySelector('#contenedor');
if (contenedor) {
    const primerElemento = document.createElement('h1');
    primerElemento.textContent = 'Título al principio';
    contenedor.prepend(primerElemento);
}

// 7. append - insertar al final (puede aceptar múltiples elementos)
if (contenedor) {
    const elemento1 = document.createElement('p');
    elemento1.textContent = 'Primer elemento';
    
    const elemento2 = document.createElement('p');
    elemento2.textContent = 'Segundo elemento';
    
    contenedor.append(elemento1, elemento2, 'Texto directo');
}

// 8. before y after - insertar antes/después
const target = document.querySelector('#target');
if (target) {
    const antes = document.createElement('div');
    antes.textContent = 'Antes del target';
    target.before(antes);
    
    const despues = document.createElement('div');
    despues.textContent = 'Después del target';
    target.after(despues);
}

// === CREACIÓN DE ELEMENTOS COMPLEJOS ===

// 9. Crear estructura anidada
function crearTarjeta(titulo, contenido, autor) {
    // Contenedor principal
    const tarjeta = document.createElement('article');
    tarjeta.className = 'tarjeta';
    
    // Encabezado
    const header = document.createElement('header');
    header.className = 'tarjeta-header';
    
    const tituloElemento = document.createElement('h2');
    tituloElemento.textContent = titulo;
    header.appendChild(tituloElemento);
    
    // Contenido
    const section = document.createElement('section');
    section.className = 'tarjeta-contenido';
    
    const parrafo = document.createElement('p');
    parrafo.textContent = contenido;
    section.appendChild(parrafo);
    
    // Footer
    const footer = document.createElement('footer');
    footer.className = 'tarjeta-footer';
    
    const spanAutor = document.createElement('span');
    spanAutor.textContent = `Autor: ${autor}`;
    footer.appendChild(spanAutor);
    
    // Ensamblar
    tarjeta.appendChild(header);
    tarjeta.appendChild(section);
    tarjeta.appendChild(footer);
    
    return tarjeta;
}

const miTarjeta = crearTarjeta('Título de la Tarjeta', 'Este es el contenido de la tarjeta.', 'Juan Pérez');
document.body.appendChild(miTarjeta);

// 10. Crear lista dinámicamente
function crearLista(items) {
    const ul = document.createElement('ul');
    ul.className = 'lista-dinamica';
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.className = 'item-lista';
        ul.appendChild(li);
    });
    
    return ul;
}

const frutas = ['Manzana', 'Banana', 'Naranja', 'Uva'];
const listaFrutas = crearLista(frutas);
document.body.appendChild(listaFrutas);

// === CLONACIÓN DE ELEMENTOS ===

// 11. cloneNode - clonar elementos
const original = document.querySelector('#original');
if (original) {
    // Clon superficial (solo el elemento, no los hijos)
    const clonSuperficial = original.cloneNode(false);
    
    // Clon profundo (elemento y todos los descendientes)
    const clonProfundo = original.cloneNode(true);
    
    // Modificar el clon
    clonProfundo.id = 'clon-del-original';
    clonProfundo.querySelector('.titulo').textContent = 'Título del Clon';
    
    document.body.appendChild(clonProfundo);
}

// 12. importNode - importar desde otro documento
// Útil con iframes o documentos externos

// === TEMPLATES HTML ===

// 13. Usar templates para crear elementos
function crearElementoDesdeTemplate() {
    const template = document.querySelector('#mi-template');
    if (!template) return null;
    
    // Clonar el contenido del template
    const clon = template.content.cloneNode(true);
    
    // Modificar el contenido clonado
    const titulo = clon.querySelector('.titulo');
    if (titulo) titulo.textContent = 'Título desde Template';
    
    const contenido = clon.querySelector('.contenido');
    if (contenido) contenido.textContent = 'Contenido desde Template';
    
    return clon;
}

const elementoTemplate = crearElementoDesdeTemplate();
if (elementoTemplate) {
    document.body.appendChild(elementoTemplate);
}

// === DOCUMENT FRAGMENT ===

// 14. DocumentFragment para inserciones eficientes
function crearMuchosElementos() {
    const fragment = document.createDocumentFragment();
    
    // Crear 1000 elementos sin causar múltiples reflows
    for (let i = 1; i <= 1000; i++) {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = `Item ${i}`;
        fragment.appendChild(div);
    }
    
    // Una sola inserción en el DOM
    const contenedorItems = document.querySelector('#contenedor-items');
    if (contenedorItems) {
        contenedorItems.appendChild(fragment);
    }
    
    return fragment;
}

// 15. Fragment con estructura compleja
function crearTablaConFragment(datos) {
    const fragment = document.createDocumentFragment();
    
    // Crear tabla
    const tabla = document.createElement('table');
    tabla.className = 'tabla-datos';
    
    // Crear encabezado
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    ['ID', 'Nombre', 'Email'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    tabla.appendChild(thead);
    
    // Crear cuerpo
    const tbody = document.createElement('tbody');
    
    datos.forEach(usuario => {
        const row = document.createElement('tr');
        
        // ID
        const tdId = document.createElement('td');
        tdId.textContent = usuario.id;
        row.appendChild(tdId);
        
        // Nombre
        const tdNombre = document.createElement('td');
        tdNombre.textContent = usuario.nombre;
        row.appendChild(tdNombre);
        
        // Email
        const tdEmail = document.createElement('td');
        tdEmail.textContent = usuario.email;
        row.appendChild(tdEmail);
        
        tbody.appendChild(row);
    });
    
    tabla.appendChild(tbody);
    fragment.appendChild(tabla);
    
    return fragment;
}

const usuarios = [
    { id: 1, nombre: 'Ana', email: 'ana@ejemplo.com' },
    { id: 2, nombre: 'Juan', email: 'juan@ejemplo.com' },
    { id: 3, nombre: 'María', email: 'maria@ejemplo.com' }
];

const tablaUsuarios = crearTablaConFragment(usuarios);
document.body.appendChild(tablaUsuarios);

// === CREACIÓN CON DATOS DINÁMICOS ===

// 16. Crear formulario dinámicamente
function crearFormulario(campos) {
    const form = document.createElement('form');
    form.className = 'formulario-dinamico';
    
    campos.forEach(campo => {
        const fieldset = document.createElement('fieldset');
        fieldset.className = 'campo';
        
        // Label
        const label = document.createElement('label');
        label.textContent = campo.label;
        label.setAttribute('for', campo.id);
        fieldset.appendChild(label);
        
        // Input
        const input = document.createElement('input');
        input.type = campo.tipo;
        input.id = campo.id;
        input.name = campo.nombre;
        input.placeholder = campo.placeholder || '';
        input.required = campo.requerido || false;
        
        if (campo.validaciones) {
            // Atributos de validación HTML5
            if (campo.validaciones.minlength) input.minLength = campo.validaciones.minlength;
            if (campo.validaciones.maxlength) input.maxLength = campo.validaciones.maxlength;
            if (campo.validaciones.pattern) input.pattern = campo.validaciones.pattern;
        }
        
        fieldset.appendChild(input);
        form.appendChild(fieldset);
    });
    
    // Botón de envío
    const boton = document.createElement('button');
    boton.type = 'submit';
    boton.textContent = 'Enviar';
    form.appendChild(boton);
    
    return form;
}

const camposFormulario = [
    {
        id: 'nombre',
        nombre: 'nombre',
        tipo: 'text',
        label: 'Nombre:',
        placeholder: 'Ingresa tu nombre',
        requerido: true,
        validaciones: { minlength: 2, maxlength: 50 }
    },
    {
        id: 'email',
        nombre: 'email',
        tipo: 'email',
        label: 'Email:',
        placeholder: 'correo@ejemplo.com',
        requerido: true
    },
    {
        id: 'edad',
        nombre: 'edad',
        tipo: 'number',
        label: 'Edad:',
        placeholder: '25',
        requerido: false
    }
];

const formularioDinamico = crearFormulario(camposFormulario);
document.body.appendChild(formularioDinamico);

// === CREACIÓN CON EVENTOS ===

// 17. Crear elementos con eventos adjuntos
function crearBotonConEvento(texto, accion) {
    const boton = document.createElement('button');
    boton.textContent = texto;
    boton.className = 'boton-con-evento';
    
    // Agregar evento click
    boton.addEventListener('click', accion);
    
    // Agregar evento hover
    boton.addEventListener('mouseenter', () => {
        boton.style.backgroundColor = '#007bff';
        boton.style.color = 'white';
    });
    
    boton.addEventListener('mouseleave', () => {
        boton.style.backgroundColor = '';
        boton.style.color = '';
    });
    
    return boton;
}

const botonAlerta = crearBotonConEvento('Mostrar Alerta', () => {
    alert('¡Botón clickeado!');
});

document.body.appendChild(botonAlerta);

// === CREACIÓN RESPONSIVA ===

// 18. Crear elementos que se adaptan al viewport
function crearImagenResponsiva(src, alt, sizes = []) {
    const picture = document.createElement('picture');
    
    // Crear sources para diferentes tamaños
    sizes.forEach(size => {
        const source = document.createElement('source');
        source.media = size.media;
        source.srcset = size.srcset;
        picture.appendChild(source);
    });
    
    // Img por defecto
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy'; // Lazy loading
    picture.appendChild(img);
    
    return picture;
}

// === BUENAS PRÁCTICAS ===

// 19. Usar DocumentFragment para múltiples inserciones
// ✓ Mejor rendimiento
// ✓ Menos reflows del navegador

// 20. Cache de elementos creados frecuentemente
function crearIcono(tipo) {
    const iconos = {
        'editar': '✏️',
        'eliminar': '🗑️',
        'guardar': '💾',
        'cancelar': '❌'
    };
    
    const span = document.createElement('span');
    span.className = `icono icono-${tipo}`;
    span.textContent = iconos[tipo] || '❓';
    
    return span;
}

// 21. Validar antes de crear
function crearElementoSeguro(tagName, attributes = {}) {
    if (typeof tagName !== 'string' || !tagName.trim()) {
        throw new Error('Nombre de etiqueta inválido');
    }
    
    const elemento = document.createElement(tagName);
    
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
            elemento.className = value;
        } else if (key === 'textContent') {
            elemento.textContent = value;
        } else {
            elemento.setAttribute(key, value);
        }
    });
    
    return elemento;
}

// 22. Resumen
console.log(`
=== RESUMEN CREACIÓN DE ELEMENTOS ===
✓ createElement: método fundamental para crear elementos
✓ appendChild: insertar al final (tradicional)
✓ prepend/append: insertar al principio/final (ES6+)
✓ before/after: insertar antes/después (ES6+)
✓ cloneNode: clonar elementos (superficial/profundo)
✓ DocumentFragment: inserciones eficientes
✓ Templates: reutilizar estructuras HTML
✓ Eventos: addEventListener para interactividad
✓ Atributos: setAttribute para propiedades personalizadas
✓ Buenas prácticas: fragmentos, caching, validación
✓ Seguridad: validar entradas, usar textContent
✓ Rendimiento: minimizar reflows del navegador
`);
