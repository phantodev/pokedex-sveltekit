<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
</script>

<div class="p-8 max-w-6xl mx-auto">
	<Navbar />
	<div class="w-full flex justify-center my-5"><img src="/logo.png" alt="Logo Pokedex" /></div>
	<slot />
</div>
