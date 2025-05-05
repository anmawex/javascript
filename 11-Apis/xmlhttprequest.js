const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		console.log(JSON.parse(xhr.responseText));
	}
};

xhr.send();

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

const data = {
	title: "foo",
	body: "bar",
	userId: 1,
};

xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 201) {
		console.log("Respuesta:", xhr.responseText);
	}
};

xhr.send(JSON.stringify(data));

xhr.onerror = function () {
	console.error("Ocurrió un error en la solicitud.");
};

xhr.ontimeout = function () {
	console.warn("La solicitud ha tardado demasiado.");
};

xhr.timeout = 5000; // 5 segundos

// métodos
// propiedades
// estados de readystate
