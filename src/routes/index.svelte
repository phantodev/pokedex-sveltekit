<script>
	import PokeCard from '../components/pokeCard.svelte';
	import { pokemon } from '../stores/pokestore';
	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((poke) => poke.name.includes(searchTerm));
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<div>
	<input
		bind:value={searchTerm}
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
		type="text"
		placeholder="Search your Pokemon here..."
	/>
</div>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as poke}
		<PokeCard {poke} />
	{/each}
</div>

<style>
</style>
