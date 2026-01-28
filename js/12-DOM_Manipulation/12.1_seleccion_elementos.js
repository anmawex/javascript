// SELECCIÓN DE ELEMENTOS DEL DOM
// Diferentes formas de seleccionar elementos en el DOM

// === MÉTODOS TRADICIONALES ===

// 1. getElementById - Seleccionar por ID (más rápido)
// <div id="contenedor">Contenido</div>
const contenedor = document.getElementById('contenedor');
console.log('Elemento por ID:', contenedor);

// 2. getElementsByClassName - Seleccionar por clase (retorna HTMLCollection)
// <div class="item">Item 1</div>
// <div class="item">Item 2</div>
const items = document.getElementsByClassName('item');
console.log('Elementos por clase:', items);
console.log('Primer item:', items[0]);

// 3. getElementsByTagName - Seleccionar por etiqueta (retorna HTMLCollection)
// <p>Párrafo 1</p>
// <p>Párrafo 2</p>
const parrafos = document.getElementsByTagName('p');
console.log('Párrafos:', parrafos);
console.log('Cantidad de párrafos:', parrafos.length);

// 4. getElementsByName - Seleccionar por atributo name
// <input name="username" type="text">
// <input name="email" type="email">
const inputs = document.getElementsByName('username');
console.log('Inputs por name:', inputs);

// === MÉTODOS MODERNOS (querySelector/querySelectorAll) ===

// 5. querySelector - Seleccionar el primer elemento que coincide
// CSS Selector: cualquier selector CSS válido
const primerItem = document.querySelector('.item');
console.log('Primer item con querySelector:', primerItem);

const primerParrafo = document.querySelector('p');
console.log('Primer párrafo:', primerParrafo);

const botonEspecifico = document.querySelector('#miBoton.primary');
console.log('Botón específico:', botonEspecifico);

// 6. querySelectorAll - Seleccionar todos los elementos que coinciden
// Retorna NodeList (similar a array pero con métodos limitados)
const todosLosItems = document.querySelectorAll('.item');
console.log('Todos los items:', todosLosItems);
console.log('Cantidad de items:', todosLosItems.length);

const todosLosParrafos = document.querySelectorAll('p');
console.log('Todos los párrafos:', todosLosParrafos);

// === SELECTORES CSS AVANZADOS ===

// 7. Selectores combinados
const itemsDentroDeContenedor = document.querySelectorAll('#contenedor .item');
console.log('Items dentro de contenedor:', itemsDentroDeContenedor);

// 8. Selectores de atributos
const inputsRequeridos = document.querySelectorAll('input[required]');
console.log('Inputs requeridos:', inputsRequeridos);

const botonesConDataAtributo = document.querySelectorAll('button[data-action]');
console.log('Botones con data-action:', botonesConDataAtributo);

// 9. Selectores de pseudo-clases
const primerHijo = document.querySelector('li:first-child');
console.log('Primer hijo:', primerHijo);

const ultimoHijo = document.querySelector('li:last-child');
console.log('Último hijo:', ultimoHijo);

const elementosPares = document.querySelectorAll('li:nth-child(even)');
console.log('Elementos pares:', elementosPares);

// 10. Selectores de pseudo-elementos (no seleccionables con JavaScript)
// ::before, ::after, ::first-line, etc. no pueden ser seleccionados

// === DIFERENCIAS ENTRE HTMLCollection Y NodeList ===

// 11. HTMLCollection (getElementsByClassName, getElementsByTagName)
const coleccionHTML = document.getElementsByClassName('item');
console.log('HTMLCollection:', coleccionHTML);
// Es "live": se actualiza automáticamente si el DOM cambia
// No tiene métodos de array como forEach, map, filter

// 12. NodeList (querySelectorAll)
const coleccionNode = document.querySelectorAll('.item');
console.log('NodeList:', coleccionNode);
// Es "static": no se actualiza si el DOM cambia
// Modernamente tiene métodos de array (forEach, entries, keys, values)

// === CONVERSIÓN A ARRAYS ===

// 13. Convertir HTMLCollection a Array
const arrayDesdeHTMLCollection = Array.from(coleccionHTML);
console.log('Array desde HTMLCollection:', arrayDesdeHTMLCollection);

// 14. Convertir NodeList a Array
const arrayDesdeNodeList = Array.from(coleccionNode);
console.log('Array desde NodeList:', arrayDesdeNodeList);

// 15. Usar spread operator con NodeList
const arrayConSpread = [...coleccionNode];
console.log('Array con spread:', arrayConSpread);

// === BÚSQUEDA DENTRO DE ELEMENTOS ===

// 16. Limitar búsqueda a un contenedor específico
const contenedorEspecifico = document.querySelector('#miContenedor');
if (contenedorEspecifico) {
    const itemsDentro = contenedorEspecifico.querySelectorAll('.item');
    console.log('Items dentro de contenedor específico:', itemsDentro);
}

// 17. Búsqueda relativa
const primerDiv = document.querySelector('div');
if (primerDiv) {
    const parrafosDentroDelDiv = primerDiv.querySelectorAll('p');
    console.log('Párrafos dentro del primer div:', parrafosDentroDelDiv);
}

// === MÉTODOS DE NAVEGACIÓN DEL DOM ===

// 18. Navegación desde un elemento
const elemento = document.querySelector('.item');
if (elemento) {
    console.log('Elemento:', elemento);
    console.log('Padre:', elemento.parentElement);
    console.log('Hijos:', elemento.children);
    console.log('Primer hijo:', elemento.firstElementChild);
    console.log('Último hijo:', elemento.lastElementChild);
    console.log('Hermano anterior:', elemento.previousElementSibling);
    console.log('Hermano siguiente:', elemento.nextElementSibling);
}

// 19. Verificar si un elemento existe
const elementoExiste = document.querySelector('.clase-inexistente') !== null;
console.log('¿Existe el elemento?:', elementoExiste);

// 20. Verificar si un selector encontró elementos
const elementosEncontrados = document.querySelectorAll('.item');
const hayElementos = elementosEncontrados.length > 0;
console.log('¿Hay elementos?:', hayElementos);

// === BUENAS PRÁCTICAS ===

// 21. Usar el método más apropiado
// ✓ getElementById para IDs únicos (más rápido)
// ✓ querySelector para selectores complejos
// ✓ querySelectorAll para múltiples elementos
// ✓ getElementsByClassName cuando necesitas HTMLCollection live

// 22. Caching de selecciones
// Evita seleccionar el mismo elemento múltiples veces
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// 23. Verificar existencia antes de usar
const boton = document.querySelector('#miBoton');
if (boton) {
    boton.addEventListener('click', () => console.log('Botón clickeado'));
}

// 24. Usar selectores específicos para mejor rendimiento
// Evita selectores demasiado genéricos
// ✗ Mal: document.querySelectorAll('*')
// ✗ Mal: document.querySelectorAll('div')
// ✓ Bien: document.querySelectorAll('.clase-especifica')
// ✓ Bien: document.querySelector('#id-unico')

// 25. Resumen
console.log(`
=== RESUMEN SELECCIÓN DE ELEMENTOS ===
✓ getElementById(): por ID (más rápido)
✓ getElementsByClassName(): por clase (HTMLCollection live)
✓ getElementsByTagName(): por etiqueta (HTMLCollection live)
✓ getElementsByName(): por atributo name
✓ querySelector(): primer elemento que coincide
✓ querySelectorAll(): todos los elementos (NodeList static)
✓ Selectores CSS: cualquier selector CSS válido
✓ HTMLCollection vs NodeList: live vs static
✓ Navegación: parentElement, children, siblings
✓ Buenas prácticas: caching, verificación, selectores específicos
`);
