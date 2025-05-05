/* SINTAXIS BÁSICA */

// fetch(url, options?)
//   .then(response => response.json()) // o .text(), .blob(), etc.
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// GET
fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then((res) => res.json())
	.then((data) => console.log(data));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		title: "foo",
		body: "bar",
		userId: 1,
	}),
})
	.then((res) => res.json())
	.then((data) => console.log(data));

// Opciones disponibles (init object)
fetch(url, {
	method: "GET" | "POST" | "PUT" | "DELETE",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(data),
	mode: "cors" | "no-cors" | "same-origin",
	credentials: "include" | "same-origin" | "omit",
	cache: "no-cache" | "reload" | "force-cache",
	redirect: "follow" | "manual" | "error",
});

// async await
// async function getPost() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   getPost();

// errores
// const res = await fetch(url);
// if (!res.ok) {
//   throw new Error(`Error HTTP: ${res.status}`);
// }
