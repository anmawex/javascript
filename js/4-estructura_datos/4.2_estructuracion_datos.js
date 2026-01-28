// SEO, estructura de datos y almacenamiento estructurado de datos
// hay un ejemplo en el tema de variables

// convertir json a objeto y viceversa
const jsonString = '{"nombre": "Juan", "edad": 30}';
console.log(JSON.parse(jsonString));

const usuario = { nombre: "Ana", edad: 28 };
console.log(JSON.stringify(usuario));
console.log(JSON.stringify(usuario, null, 2));
console.log(JSON.stringify(usuario, ["nombre"]));

// -> JSON con apis
// -> local storage
// -> JSON con fetch y envío de datos
// -> Errores comunes de trabajar con json
