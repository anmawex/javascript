// fibonacci - guardar resultados ya calculados
const cache = {}; //

function fib(n) {
	//5
	if (n <= 1) return n; //
	if (cache[n]) return cache[n];
	cache[n] = fib(n - 1) + fib(n - 2);
	return cache[n];
}
console.log(fib(5));
console.log(cache);

// 0 1 1 2 3
