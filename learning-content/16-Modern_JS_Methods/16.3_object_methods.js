// MÉTODOS DE OBJECT MODERNOS - ES6+
// Métodos modernos para manipulación de objetos

// === MÉTODOS DE CREACIÓN Y COPIA ===

// 1. Object.assign - copiar propiedades de objetos
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const resultado = Object.assign(target, source);
console.log('Object.assign:', resultado); // { a: 1, b: 3, c: 4 }

// 2. Object.assign con múltiples fuentes
const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };
const obj3 = { w: 5, x: 6 };
const combinado = Object.assign({}, obj1, obj2, obj3);
console.log('Combinado:', combinado); // { x: 6, y: 3, z: 4, w: 5 }

// 3. Object.assign con propiedades no enumerables
const objNoEnumerables = {};
Object.defineProperty(objNoEnumerables, 'propiedadNoEnumerable', {
    value: 'secreto',
    enumerable: false
});
objNoEnumerables.propiedadNormal = 'visible';

console.log('Objeto original:', objNoEnumerables);
const copia = Object.assign({}, objNoEnumerables);
console.log('Copia (solo propiedades enumerables):', copia); // { propiedadNormal: 'visible' }

// === MÉTODOS DE CONVERSIÓN ===

// 4. Object.keys - obtener claves como array
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    activo: true
};

const claves = Object.keys(persona);
console.log('Claves:', claves); // ['nombre', 'edad', 'ciudad', 'activo']

// 5. Object.values - obtener valores como array
const valores = Object.values(persona);
console.log('Valores:', valores); // ['Juan', 30, 'Madrid', true]

// 6. Object.entries - obtener pares [clave, valor]
const entradas = Object.entries(persona);
console.log('Entradas:', entradas);
// [['nombre', 'Juan'], ['edad', 30], ['ciudad', 'Madrid'], ['activo', true]]

// 7. Object.fromEntries - crear objeto desde entradas
const objetoDesdeEntradas = Object.fromEntries(entradas);
console.log('Objeto desde entradas:', objetoDesdeEntradas);
// { nombre: 'Juan', edad: 30, ciudad: 'Madrid', activo: true }

// === MÉTODOS DE COMPARACIÓN ===

// 8. Object.is - comparación estricta
console.log('Object.is({}, {})); // true
console.log(Object.is([], [])); // false
console.log(Object.is(() => {})); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false

// 9. Object.is vs ===
const objA = { a: 1 };
const objB = { a: 1 };
console.log('objA === objB:', objA === objB); // false
console.log('Object.is(objA, objB):', Object.is(objA, objB)); // false

// === MÉTODOS DE PROPIEDADES ===

// 10. Object.defineProperty - definir propiedad con descriptores
const configuracion = {};
Object.defineProperty(configuracion, 'version', {
    value: '1.0.0',
    writable: false,
    configurable: true,
    enumerable: true
});

console.log('Configuración:', configuracion);
console.log('Configuración.version:', configuracion.version); // '1.0.0'

// 11. Object.defineProperties - definir múltiples propiedades
const producto = {};
Object.defineProperties(producto, {
    id: {
        value: 123,
        writable: false,
        enumerable: true
    },
    nombre: {
        value: 'Laptop',
        writable: true,
        enumerable: true
    },
    precio: {
        value: 999.99,
        writable: true,
        enumerable: true
    },
    codigoInterno: {
        value: 'ABC123',
        writable: false,
        enumerable: false
    }
});

console.log('Producto:', producto);
console.log('Claves enumerables:', Object.keys(producto)); // ['id', 'nombre', 'precio']

// 12. Object.getOwnPropertyDescriptor - obtener descriptor de propiedad
const descriptor = Object.getOwnPropertyDescriptor(producto, 'nombre');
console.log('Descriptor de nombre:', descriptor);
// { value: 'Laptop', writable: true, enumerable: true, configurable: false }

// 13. Object.getOwnPropertyDescriptors - obtener todos los descriptores
const descriptores = Object.getOwnPropertyDescriptors(producto);
console.log('Todos los descriptores:', descriptores);

// === MÉTODOS DE PROTOTIPOS ===

// 14. Object.getPrototypeOf - obtener prototipo de objeto
const array = [1, 2, 3];
const prototipoArray = Object.getPrototypeOf(array);
console.log('Prototipo de array:', prototipoArray); // Array.prototype

// 15. Object.setPrototypeOf - establecer prototipo de objeto
const animal = {
    comer: function() {
        return `${this.nombre} está comiendo`;
    }
};

const perro = Object.create(animal);
perro.nombre = 'Firulais';
console.log('Perro come:', perro.comer()); // "Firulais está comiendo"

// 16. Object.setPrototypeOf - cambiar prototipo dinámicamente
const gato = { nombre: 'Michi' };
Object.setPrototypeOf(gato, animal);
console.log('Gato come:', gato.comer()); // "Michi está comiendo"

// === MÉTODOS DE PROPIEDADES ===

// 17. Object.getOwnPropertyNames - obtener todas las propiedades (enumerables y no enumerables)
const objetoConNoEnumerables = {};
objetoConNoEnumerables.propiedadVisible = 'visible';
Object.defineProperty(objetoConNoEnumerables, 'propiedadOculta', {
    value: 'oculta',
    enumerable: false
});

const todasLasPropiedades = Object.getOwnPropertyNames(objetoConNoEnumerables);
console.log('Todas las propiedades:', todasLasPropiedades); // ['propiedadVisible', 'propiedadOculta']

// 18. Object.getOwnPropertySymbols - obtener propiedades símbolo
const simbolo = Symbol('descripcion');
const objetoConSimbolos = {
    [simbolo]: 'valor del símbolo',
    propiedadNormal: 'valor normal'
};

const simbolos = Object.getOwnPropertySymbols(objetoConSimbolos);
console.log('Símbolos:', simbolos); // [Symbol(descripcion)]

// 19. Object.keys vs Object.getOwnPropertyNames
const objetoMixto = {
    a: 1,
    b: 2
};
Object.defineProperty(objetoMixto, 'c', {
    value: 3,
    enumerable: false
});

console.log('Keys (solo enumerables):', Object.keys(objetoMixto)); // ['a', 'b']
console.log('Property names (todas):', Object.getOwnPropertyNames(objetoMixto)); // ['a', 'b', 'c']

// === MÉTODOS DE CONGELAMIENTO ===

// 20. Object.freeze - congelar objeto (no se puede modificar)
const objetoCongelado = { a: 1, b: 2 };
Object.freeze(objetoCongelado);

objetoCongelado.c = 3; // Ignorado en modo estricto
console.log('Objeto congelado:', objetoCongelado); // { a: 1, b: 2 }

// 21. Object.isFrozen - verificar si está congelado
console.log('¿Está congelado?:', Object.isFrozen(objetoCongelado)); // true

// 22. Object.seal - sellar objeto (no se pueden agregar/eliminar propiedades)
const objetoSellado = { x: 1, y: 2 };
Object.seal(objetoSellado);

objetoSellado.z = 3; // Ignorado en modo estricto
delete objetoSellado.x; // Ignorado en modo estricto
objetoSellado.y = 3; // Permitido
console.log('Objeto sellado:', objetoSellado); // { x: 1, y: 3 }

// 23. Object.isSealed - verificar si está sellado
console.log('¿Está sellado?:', Object.isSealed(objetoSellado)); // true

// 24. Object.preventExtensions - prevenir adición de propiedades
const objetoSinExtensiones = { a: 1 };
Object.preventExtensions(objetoSinExtensiones);

objetoSinExtensiones.b = 2; // Ignorado en modo estricto
objetoSinExtensiones.a = 2; // Permitido
console.log('Objeto sin extensiones:', objetoSinExtensiones); // { a: 2 }

// 25. Object.isExtensible - verificar si es extensible
console.log('¿Es extensible?:', Object.isExtensible(objetoSinExtensiones)); // false

// === MÉTODOS DE CREACIÓN ===

// 26. Object.create - crear objeto con prototipo específico
const prototipoPersona = {
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
};

const personaDesdePrototipo = Object.create(prototipoPersona);
personaDesdePrototipo.nombre = 'Ana';
console.log('Persona desde prototipo:', personaDesdePrototipo.saludar()); // "Hola, soy Ana"

// 27. Object.create con propiedades
const personaConPropiedades = Object.create(prototipoPersona, {
    nombre: {
        value: 'Juan',
        writable: true,
        enumerable: true,
        configurable: true
    },
    edad: {
        value: 30,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

console.log('Persona con propiedades:', personaConPropiedades);
console.log('Saludo:', personaConPropiedades.saludar()); // "Hola, soy Juan"

// === MÉTODOS DE VALIDACIÓN ===

// 28. Object.hasOwn - verificar si propiedad es propia (ES2022)
const objetoConHerencia = Object.create({ propiedadHeredada: 'heredado' });
objetoConHerencia.propiedadPropia = 'propia';

console.log('¿Tiene propiedad propia?:', Object.hasOwn(objetoConHerencia, 'propiedadPropia')); // true
console.log('¿Tiene propiedad heredada?:', Object.hasOwn(objetoConHerencia, 'propiedadHeredada')); // false

// 29. hasOwnProperty vs Object.hasOwn
console.log('hasOwnProperty:', objetoConHerencia.hasOwnProperty('propiedadPropia')); // true
console.log('Object.hasOwn:', Object.hasOwn(objetoConHerencia, 'propiedadPropia')); // true

// === MÉTODOS DE GRUPO ===

// 30. Object.groupBy - agrupar propiedades por criterio (ES2022)
const usuarios = [
    { nombre: 'Ana', edad: 25, rol: 'admin' },
    { nombre: 'Juan', edad: 30, rol: 'usuario' },
    { nombre: 'María', edad: 28, rol: 'admin' },
    { nombre: 'Pedro', edad: 35, rol: 'usuario' }
];

const usuariosPorRol = Object.groupBy(usuarios, usuario => usuario.rol);
console.log('Usuarios por rol:', usuariosPorRol);
// {
//   admin: [
//     { nombre: 'Ana', edad: 25, rol: 'admin' },
//     { nombre: 'María', edad: 28, rol: 'admin' }
//   ],
//   usuario: [
//     { nombre: 'Juan', edad: 30, rol: 'usuario' },
//     { nombre: 'Pedro', edad: 35, rol: 'usuario' }
//   ]
// }

// === MÉTODOS DE TRANSFORMACIÓN ===

// 31. Transformación de objetos con map
const datosOriginales = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

const datosTransformados = Object.fromEntries(
    Object.entries(datosOriginales).map(([clave, valor]) => [
        clave.toUpperCase(),
        valor
    ])
);

console.log('Datos transformados:', datosTransformados);
// { NOMBRE: 'Juan', EDAD: 30, CIUDAD: 'Madrid' }

// 32. Filtrar propiedades de objeto
const datosCompletos = {
    nombre: 'Ana',
    edad: 25,
    email: 'ana@ejemplo.com',
    password: 'secreto',
    activo: true
};

const datosPublicos = Object.fromEntries(
    Object.entries(datosCompletos).filter(([clave]) => 
        !['password', 'activo'].includes(clave)
    )
);

console.log('Datos públicos:', datosPublicos);
// { nombre: 'Ana', edad: 25, email: 'ana@ejemplo.com' }

// === MÉTODOS DE COMPARACIÓN ===

// 33. Comparación profunda de objetos
function compararObjetos(obj1, obj2) {
    const claves1 = Object.keys(obj1);
    const claves2 = Object.keys(obj2);
    
    if (claves1.length !== claves2.length) {
        return false;
    }
    
    for (const clave of claves1) {
        if (!obj2.hasOwnProperty(clave)) {
            return false;
        }
        
        if (typeof obj1[clave] === 'object' && typeof obj2[clave] === 'object') {
            if (!compararObjetos(obj1[clave], obj2[clave])) {
                return false;
            }
        } else if (obj1[clave] !== obj2[clave]) {
            return false;
        }
    }
    
    return true;
}

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log('ObjA y ObjB iguales?:', compararObjetos(objA, objB)); // true
console.log('ObjA y ObjC iguales?:', compararObjetos(objA, objC)); // false

// === RESUMEN ===

console.log(`
=== RESUMEN MÉTODOS DE OBJECT ===
✓ Creación: Object.create, Object.assign
✓ Conversión: Object.keys, Object.values, Object.entries, Object.fromEntries
✓ Comparación: Object.is, comparación profunda
✓ Propiedades: defineProperty, defineProperties, getOwnPropertyDescriptor
✓ Prototipos: getPrototypeOf, setPrototypeOf
✓ Congelamiento: freeze, seal, preventExtensions
✓ Validación: isFrozen, isSealed, isExtensible
✓ Búsqueda: getOwnPropertyNames, getOwnPropertySymbols
✓ Agrupación: Object.groupBy (ES2022)
✓ Transformación: map, filter con Object.entries/fromEntries
✓ Herencia: Object.create con prototipos
✓ Descriptores: writable, enumerable, configurable
✓ Símbolos: getOwnPropertySymbols
✓ Validación: Object.hasOwn (ES2022)
✓ Inmutabilidad: freeze, seal, preventExtensions
✓ Performance: métodos nativos optimizados
✓ Compatibilidad: ES5+ (soporte universal)
✓ Modernos: Object.groupBy, Object.hasOwn (ES2022)
`);
