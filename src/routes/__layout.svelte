<script>
	import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="p-8 max-w-6xl mx-auto flex flex-col gap-8">
	<Nav />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
