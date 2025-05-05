function a() {
	b();
}
function b() {
	c();
}
function c() {
	console.log("Hola");
}
a(); // a -> b -> c -> "Hola"
// LIFO -> last in, first out
