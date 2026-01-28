// MANIPULACIÓN DE CONTENIDO DEL DOM
// Leer, modificar y crear contenido en elementos HTML

// === LECTURA DE CONTENIDO ===

// 1. innerHTML vs textContent
const div = document.querySelector('#miDiv');

// innerHTML: incluye etiquetas HTML (peligroso con entrada de usuario)
console.log('innerHTML:', div.innerHTML);

// textContent: solo texto, sin etiquetas HTML (seguro)
console.log('textContent:', div.textContent);

// 2.innerText (similar a textContent pero con consideraciones de CSS)
console.log('innerText:', div.innerText);
// Diferencias:
// - innerText respeta CSS (display: none no se incluye)
// - innerText dispara reflow del navegador
// - textContent es más rápido y predecible

// === MODIFICACIÓN DE CONTENIDO ===

// 3. Cambiar texto
const titulo = document.querySelector('h1');
if (titulo) {
    titulo.textContent = 'Nuevo Título';
    console.log('Título modificado:', titulo.textContent);
}

// 4. Cambiar HTML (con precaución)
const contenedor = document.querySelector('#contenedor');
if (contenedor) {
    // ⚠️ Cuidado: solo con contenido confiable
    contenedor.innerHTML = '<p>Nuevo contenido <strong>con formato</strong></p>';
    
    // Para contenido dinámico, usar textContent o métodos seguros
    // contenedor.textContent = 'Texto seguro';
}

// 5. Agregar contenido sin reemplazar
const lista = document.querySelector('#miLista');
if (lista) {
    // Agregar al final del contenido existente
    lista.innerHTML += '<li>Nuevo item</li>';
    
    // Forma más segura para agregar elementos
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = 'Item seguro';
    lista.appendChild(nuevoLi);
}

// === CREACIÓN DE ELEMENTOS ===

// 6. createElement - forma recomendada
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Div creado dinámicamente';
nuevoDiv.className = 'nuevo-elemento';
nuevoDiv.id = 'div-dinamico';

// Agregar al DOM
document.body.appendChild(nuevoDiv);

// 7. Crear elementos con atributos
const enlace = document.createElement('a');
enlace.href = 'https://ejemplo.com';
enlace.textContent = 'Ir a ejemplo.com';
enlace.target = '_blank';
enlace.rel = 'noopener noreferrer';

document.body.appendChild(enlace);

// 8. Crear elementos complejos
const tarjeta = document.createElement('div');
tarjeta.className = 'tarjeta';

const tituloTarjeta = document.createElement('h3');
tituloTarjeta.textContent = 'Título de la tarjeta';

const contenidoTarjeta = document.createElement('p');
contenidoTarjeta.textContent = 'Contenido de la tarjeta';

const botonTarjeta = document.createElement('button');
botonTarjeta.textContent = 'Clickear';
botonTarjeta.className = 'btn btn-primary';

// Ensamblar la estructura
tarjeta.appendChild(tituloTarjeta);
tarjeta.appendChild(contenidoTarjeta);
tarjeta.appendChild(botonTarjeta);

document.body.appendChild(tarjeta);

// === MÉTODOS DE INSERCIÓN ===

// 9. appendChild - agrega al final
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Primer párrafo';
document.body.appendChild(parrafo1);

// 10. prepend - agrega al principio (ES6)
const contenedor2 = document.querySelector('#contenedor2');
if (contenedor2) {
    const nuevoElemento = document.createElement('div');
    nuevoElemento.textContent = 'Al principio';
    contenedor2.prepend(nuevoElemento);
}

// 11. before y after - insertar antes/después
const referencia = document.querySelector('#referencia');
if (referencia) {
    const antes = document.createElement('div');
    antes.textContent = 'Antes de la referencia';
    referencia.before(antes);
    
    const despues = document.createElement('div');
    despues.textContent = 'Después de la referencia';
    referencia.after(despues);
}

// === MÉTODOS DE ELIMINACIÓN ===

// 12. removeChild - forma tradicional
const elementoAEliminar = document.querySelector('#eliminar');
if (elementoAEliminar && elementoAEliminar.parentNode) {
    elementoAEliminar.parentNode.removeChild(elementoAEliminar);
}

// 13. remove - forma moderna (ES6)
const elementoAEliminar2 = document.querySelector('#eliminar2');
if (elementoAEliminar2) {
    elementoAEliminar2.remove();
}

// 14. Eliminar todos los hijos
const contenedorAVaciar = document.querySelector('#contenedor-vaciar');
if (contenedorAVaciar) {
    // Forma 1: innerHTML = ''
    // contenedorAVaciar.innerHTML = '';
    
    // Forma 2: removeChild (más segura)
    while (contenedorAVaciar.firstChild) {
        contenedorAVaciar.removeChild(contenedorAVaciar.firstChild);
    }
}

// === MANIPULACIÓN DE ATRIBUTOS ===

// 15. getAttribute y setAttribute
const imagen = document.querySelector('#miImagen');
if (imagen) {
    // Leer atributo
    const src = imagen.getAttribute('src');
    console.log('SRC de la imagen:', src);
    
    // Modificar atributo
    imagen.setAttribute('alt', 'Descripción de la imagen');
    imagen.setAttribute('title', 'Título de la imagen');
    
    // Verificar si existe un atributo
    const tieneAlt = imagen.hasAttribute('alt');
    console.log('¿Tiene alt?:', tieneAlt);
    
    // Eliminar atributo
    imagen.removeAttribute('title');
}

// 16. Propiedades directas (para atributos comunes)
const input = document.querySelector('#miInput');
if (input) {
    // Propiedades directas (más rápidas)
    input.value = 'Nuevo valor';
    input.type = 'email';
    input.placeholder = 'Correo electrónico';
    input.disabled = false;
    
    // Para atributos personalizados, usar getAttribute/setAttribute
    input.setAttribute('data-validacion', 'email');
}

// === MANIPULACIÓN DE CLASES CSS ===

// 17. className - manejo de clases como string
const elemento = document.querySelector('#miElemento');
if (elemento) {
    elemento.className = 'clase1 clase2 clase3';
    console.log('Clases:', elemento.className);
    
    // Agregar clase (forma manual)
    elemento.className += ' clase-adicional';
}

// 18. classList - API moderna para manejar clases
const elementoConClases = document.querySelector('#elemento-con-clases');
if (elementoConClases) {
    // Agregar clase
    elementoConClases.classList.add('nueva-clase');
    
    // Eliminar clase
    elementoConClases.classList.remove('clase-vieja');
    
    // Toggle clase (agrega si no existe, elimina si existe)
    elementoConClases.classList.toggle('clase-toggle');
    
    // Verificar si tiene una clase
    const tieneClase = elementoConClases.classList.contains('clase-especifica');
    console.log('¿Tiene la clase?:', tieneClase);
    
    // Reemplazar clase
    elementoConClases.classList.replace('clase-antigua', 'clase-nueva');
}

// === MANIPULACIÓN DE ESTILOS ===

// 19. style - propiedades CSS individuales
const boton = document.querySelector('#miBoton');
if (boton) {
    // Propiedades camelCase en JavaScript
    boton.style.backgroundColor = 'blue';
    boton.style.color = 'white';
    boton.style.padding = '10px 20px';
    boton.style.borderRadius = '5px';
    boton.style.border = 'none';
    
    // Leer estilo
    console.log('Color de fondo:', boton.style.backgroundColor);
}

// 20. getComputedStyle - estilos calculados
const elementoEstilizado = document.querySelector('#elemento-estilizado');
if (elementoEstilizado) {
    const estilos = window.getComputedStyle(elementoEstilizado);
    console.log('Color de texto calculado:', estilos.color);
    console.log('Fuente calculada:', estilos.fontFamily);
    console.log('Display calculado:', estilos.display);
}

// === TEMPLATES Y FRAGMENTOS ===

// 21. DocumentFragment - para inserciones eficientes
function agregarMuchosItems() {
    const fragment = document.createDocumentFragment();
    
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        li.className = 'item-lista';
        fragment.appendChild(li);
    }
    
    // Una sola inserción en el DOM
    const lista = document.querySelector('#lista-grande');
    if (lista) {
        lista.appendChild(fragment);
    }
}

// 22. Templates HTML
function crearTarjetaDesdeTemplate(datos) {
    const template = document.querySelector('#tarjeta-template');
    if (!template) return null;
    
    const clon = template.content.cloneNode(true);
    
    // Modificar contenido del clon
    clon.querySelector('.titulo').textContent = datos.titulo;
    clon.querySelector('.contenido').textContent = datos.contenido;
    clon.querySelector('.fecha').textContent = datos.fecha;
    
    return clon;
}

// === SEGURIDAD ===

// 23. Evitar XSS con innerHTML
function escaparHTML(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

const userInput = '<script>alert("XSS")</script>';
const contenidoSeguro = escaparHTML(userInput);
console.log('Contenido escapado:', contenidoSeguro);

// 24. textContent para contenido dinámico
function mostrarMensaje(mensaje) {
    const mensajeDiv = document.querySelector('#mensaje');
    if (mensajeDiv) {
        // Seguro: no interpreta HTML
        mensajeDiv.textContent = mensaje;
    }
}

// === BUENAS PRÁCTICAS ===

// 25. Preferir textContent sobre innerHTML para texto
// ✓ Seguro contra XSS
// ✓ Más rápido
// ✓ Predecible

// 26. Usar createElement en lugar de innerHTML cuando sea posible
// ✓ Más seguro
// ✓ Mejor rendimiento
// ✓ Mantiene referencias a elementos

// 27. Usar DocumentFragment para múltiples inserciones
// ✓ Mejor rendimiento
// ✓ Menos reflows del navegador

// 28. Cache de elementos
const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');

// 29. Verificar existencia antes de manipular
const elementoSeguro = document.querySelector('#elemento');
if (elementoSeguro && elementoSeguro.parentNode) {
    elementoSeguro.parentNode.removeChild(elementoSeguro);
}

// 30. Resumen
console.log(`
=== RESUMEN MANIPULACIÓN DE CONTENIDO ===
✓ Lectura: innerHTML vs textContent vs innerText
✓ Modificación: innerHTML (cuidado) vs textContent (seguro)
✓ Creación: createElement, appendChild, prepend
✓ Inserción: before, after, appendChild
✓ Eliminación: removeChild vs remove
✓ Atributos: getAttribute, setAttribute, propiedades directas
✓ Clases: className vs classList
✓ Estilos: style vs getComputedStyle
✓ Eficiencia: DocumentFragment para múltiples elementos
✓ Seguridad: textContent para contenido dinámico
✓ Buenas prácticas: caching, verificación, seguridad
`);
