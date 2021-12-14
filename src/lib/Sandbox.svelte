<script lang="ts">
	// your script goes here
	import Button from '$lib/actions/Button.svelte';
	type Shop = {
		name: string;
		quantity: number;
	};
	type Detail = {
		title: string;
		desc?: string;
	};

	const title: string = 'hello world';
	let nb = 0;
	let square;

	const toSquare = (val: any) => {
		changed = true;
		val = parseInt(val);

		square = val ** 2;
	};
	let newNumber;

	let changed: boolean = false;
	function captureKey(e) {
		console.log(e);
		if (e.key === 'Enter') toSquare(newNumber);
	}
	const obj: { name: string; age: number } = {
		name: 'Léonidas',
		age: 1
	};
	const shop: Shop[] = [
		{ name: 'tomates', quantity: 2 },
		{ name: 'poivron', quantity: 2 },
		{ name: 'carottes', quantity: 2 }
	];
	const detailledList: Detail[] = [
		{ title: 'titre', desc: 'contenu' },
		{ title: 'un autre titre', desc: 'dont voici un autre contenu' },
		{ title: 'exmple', desc: "d'article dans une liste détaillée" },
		{ title: 'titre sans contenu' }
	];
</script>

<svelte:window on:keydown={captureKey} />
<h2>{title.toUpperCase()}</h2>
<input type="text" bind:value={newNumber} />
<Button color="lime" on:click={() => toSquare(newNumber)}>calculer</Button>
{#if typeof square === 'number'}
	<p class="result">{square}</p>
{:else if changed && typeof square !== 'number'}
	<p class="result error">Il faut entrer un nombre!</p>
{:else}
	<p />
{/if}
<div>{obj.name}</div>
<div>{obj.age} an{obj.age > 1 ? 's' : ''}</div>

<ul>
	{#each shop as { name, quantity }}
		<li>{name}: {quantity}</li>
	{/each}
</ul>
{#each detailledList as { title, desc }}
	<dl>
		<dt>{title}</dt>
		<dd>{desc ? desc : ''}</dd>
	</dl>
{/each}

<style>
	h2 {
		font-size: 1.5em;
		font-weight: 200;
		text-align: center;
	}
	.error {
		color: darkred;
	}
	.result {
		font-weight: 400;
		font-size: 1.25em;
	}
	ul {
		padding: 8px 16px;
		list-style: none;
	}
	li {
		padding: 3px 16px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	/* dl {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  } */
	dt {
		font-weight: 500;
		font-variant: small-caps;
		text-transform: capitalize;
		font-size: 1.2em;
	}
	dd {
		font-weight: 200;
	}
</style>
