<script>
	import AboutMe from './AboutMe.svelte';
	import Articles from './Articles.svelte';
	import Introduction from './Introduction.svelte';
	import Navigation from './Navigation.svelte';
	import Projects from './Projects.svelte';
</script>

<Navigation />
<main>
	<Introduction />
	<AboutMe />
	<Projects />
	<Articles />
</main>

<style>
    :global(html) {
        scroll-snap-type: y mandatory;
    }

	:global(body) {       
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		margin: 0;
		color: #1B1B1C;
	}
</style>
