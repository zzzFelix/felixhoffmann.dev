<script lang="ts">
	export let showTitle = false;
</script>

<header>
	{#if showTitle}
    <a href="/" ><h1>Felix Hoffmann</h1></a>
	{/if}
</header>

<style>
	h1 {
		font-weight: 600;
		font-size: 1rem;
		line-height: 160%;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
</style>
