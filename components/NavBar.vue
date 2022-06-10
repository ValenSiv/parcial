
let navbar = {
	props: ['brand', 'p1', 'p2', 'p3', 'carrito'],
	template: // html
	`<nav style="display:flex">
	<h2>{{ carrito }}</h2>
	<h1 style="color:red">{{ brand }}</h1>
	<p> {{ p1 }}</p>
	<p> {{ p2 }} </p>
	<p> {{ p3 }} </p>

	</nav>`
}