<script context="module" lang="ts">
	export const prerender = false;
</script>

<script lang="ts">
	// import Sandbox from '$lib/Sandbox.svelte';
	import ViewTxt from '$lib/texts/ViewTxt.svelte';
	// import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Accueil</title>
</svelte:head>

<section>
	<div class="container">
		<h1>Accueil</h1>

		<ViewTxt />

		<!-- <Sandbox  /> -->
	</div>

	<!-- <Counter /> -->
</section>

<style lang="scss">
	section {
		// margin: auto;
		// display: flex;
		// flex-direction: column;
		// justify-content: flex-start;
		// align-items: start;
		// flex: 1;
		* {
			text-align: left;
		}
	}
	// .container {

	// }

	h1 {
		width: 100%;
		text-align: center;
	}

	// .welcome {
	// 	position: relative;
	// 	width: 100%;
	// 	height: 0;
	// 	padding: 0 0 calc(100% * 495 / 2048) 0;
	// 	img {
	// 			position: absolute;
	// 			width: 100%;
	// 			height: 100%;
	// 			top: 0;
	// 			display: block;
	// }

	// }
	@media screen and (min-width: 769px) {
		.container {
			width: 769px;
			margin: auto;
		}
	}
</style>
