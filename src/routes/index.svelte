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
	:global(*) {
		margin: 0;
		padding: 0;
	}
	
	:global(html) {
		scroll-snap-type: y mandatory;
	}

	@media (max-height: 699px) {
		:global(html) {
			scroll-snap-type: none;
		}
	}

	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		color: #1b1b1c;
	}

	:global(a) {
		color: #1b1b1c;
		text-decoration: none;
	}
	:global(main > *) {
		padding-top: 7.6rem;
		box-sizing: border-box;
		height: 100vh;
		min-height: 700px;
	}
</style>
