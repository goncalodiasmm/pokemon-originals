<script>
	export let poke;
</script>

<a
	class="p-6 bg-gray-100 text-gray-900 text-center rounded-md shadow-sm hover:shadow-lg flex flex-col items-center"
	href={`/pokemon/${poke.id}`}
>
	<img
		src={poke.image}
		alt={poke.name}
	/>
	<h2 class="uppercase"><span class="text-gray-400">#{poke.id}.</span> {poke.name}</h2>
</a>
