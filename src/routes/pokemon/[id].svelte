<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();

		return {
			props: { poke: data }
		};
	}
</script>

<script>
	export let poke;
</script>

<div class="flex flex-col gap-4 items-center">
	<h1 class="text-4xl text-center uppercase font-bold">{poke.name}</h1>
	<img src={poke.image} alt={poke.name} class="w-32" />
	<p>{poke.types[0].type.name}</p>
	<p>{poke.types[1] ? poke.types[1].type.name : ''}</p>
	<h3>Stats</h3>
	<div class="flex">
		<div>
			{poke.stats[0].base_stat}
			{poke.stats[0].stat.name}
		</div>
		<div>
			{poke.stats[1].base_stat}
			{poke.stats[1].stat.name}
		</div>
		<div>
			{poke.stats[2].base_stat}
			{poke.stats[2].stat.name}
		</div>
		<div>
			{poke.stats[3].base_stat}
			{poke.stats[3].stat.name}
		</div>
		<div>
			{poke.stats[4].base_stat}
			{poke.stats[4].stat.name}
		</div>
		<div>
			{poke.stats[5].base_stat}
			{poke.stats[5].stat.name}
		</div>
	</div>
</div>
