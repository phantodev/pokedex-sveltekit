<script>
	export let poke;
</script>

<section>
	<a
		class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
		href={`/pokeman/${poke.id}`}
	>
		<img src={poke.image} alt={poke.name} /><br />
		{poke.name}
	</a>
</section>
