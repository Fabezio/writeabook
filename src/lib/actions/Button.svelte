<script lang="ts">
	export let size = '';
	export let color = 'deepskyblue';
</script>

<div class="btn {size} {color}" on:click>
	<slot />
</div>

<style lang="scss">
	// .teal {
	//   background: teal;
	// }
</style>
