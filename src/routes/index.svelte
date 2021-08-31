<script context="module">
	export async function load() {
		const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
		const res = await fetch(url);
		const data = await res.json();

		const loadedPokemon = data.results.map((data, index, image) => {
			if (index + 1 < 10) {
				image = `https://www.serebii.net/pokemon/art/00${index + 1}.png`;
			} else if (index + 1 < 100) {
				image = `https://www.serebii.net/pokemon/art/0${index + 1}.png`;
			} else if (index + 1 < 1000) {
				image = `https://www.serebii.net/pokemon/art/${index + 1}.png`;
			}

			return {
				name: data.name,
				id: index + 1,
				image: image
			};
		});
		return {
			props: { pokemon: loadedPokemon }
		};
	}
</script>

<script>
	import PokeCard from '../components/PokeCard.svelte';
	export let pokemon;
	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = pokemon.filter((poke) =>
				poke.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemon];
		}
	}
</script>

<svelte:head>
	<title>Pokémon Originals | Home</title>
</svelte:head>
<div class="text-center">
	<h1 class="text-4xl uppercase font-bold">Pokémon Originals</h1>
	<p class="text-gray-500">a database of Pokémon nostalgia</p>
</div>
<input
	type="text"
	class="w-full border-2 py-2 px-4 rounded"
	placeholder="Search Pokémon"
	bind:value={searchTerm}
/>
<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{#each filteredPokemon as poke}
		<PokeCard {poke} />
	{/each}
</div>
