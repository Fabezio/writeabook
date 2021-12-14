<script context="module">


// const res = fetch(content)
</script>

<script lang="ts">
	// import __dirname from "$lib/_Files";
	// console.log(__dirname)
	// import Button from '$lib/actions/Button.svelte';
	// import BtnGroup from '$lib/actions/BtnGroup.svelte';
// import path from 'path';
// import url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// export let __dirname
	
// import file from 'file'
import { Button, ButtonGroup, Input } from "sveltestrap";
	import { lorem } from './lorem';
	// import {enhance} from "$lib/form"
	// console.log(lorem)
	function handleKey (e) {
		if(e.key==="Enter") submitForm() 
		else return
	}
	function submitForm () {
		// const newObj = {text:entry}
		const newText = entry
		const isBold = bold?'fw-bold':''
		const isItalic = italic?'fst-italic':''
		const isUnderline = underline?'text-decoration-underline':''
		// const fonts = [isBold, isItalic, isUnderline]
		// let displayMU =  fonts.map(f=> `<${f}>`)
		content=[...content, {text:newText, textType, fonts: [isBold, isItalic, isUnderline], }]
		
		entry=""
		textType="p"
		bold=false
		italic=false
		underline=false
return content
	}
	let file = ""
	
	$: console.log(content)
	let content = []
	// content.push({text: lorem});
	let entry =""
	const  textTypes = "h1 h2 h3 h4 h5 h6".split(" ")
	console.log(textTypes)
	let textType = "p"
	let bold= false
	let italic= false
	let underline= false

	
	$: console.log(bold, italic, underline)


</script>
<svelte:window on:keydown={handleKey} />

<form on:submit|preventDefault={submitForm} >
	<div class="inline-form ">
		<textarea class="form-control" type="text" bind:value={entry}  />
		<select name="text-type" class="form-control" bind:value={textType} >
			<option value="-- type de texte --"  ></option>
			{#each textTypes as value}
			<option {value} >{value}</option>
				
			{/each}
		</select>
		<!-- <Input class="form-control" type="file" bind:value={file} placeholder="fichier ici" /> -->
		<ButtonGroup  size="" >
			<input type="checkbox"  name="font-type" bind:checked={bold} id="bold" class="btn-check" >
			<label for="bold"   class=" btn btn-secondary px-2" ><b>G</b></label>
			<input type="checkbox" name="font-type" bind:checked={italic} id="italic" class="btn-check" >
			<label for="italic" class="btn btn-secondary font-italic px-2" ><i>I</i></label>
			<input type="checkbox" name="font-type" bind:checked={underline} id="underline" class="btn-check" >
			<label for="underline" class="btn btn-secondary px-2" ><u>U</u></label>
			
		</ButtonGroup>
		<button class="btn btn-info" type="submit">ajouter</button>

	</div>
</form>
{#if content.length}
{#each content as {text, textType, fonts}}
{@html `<${textType} class="${fonts.join(" ")}">${text}</${textType}>`}
{/each}
<!-- <div>{text}</div> -->
	{:else}
	<p>{lorem}</p>
{/if}


<style>
	p {
		text-align: justify;
	}
</style>
