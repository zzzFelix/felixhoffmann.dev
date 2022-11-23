<script lang="ts">
	import Header from '../components/Header.svelte';
	import Navigation from '../components/Navigation.svelte';
	import { background } from '../store/background';
	import { showTitle } from '../store/title';

	let backgroundColor: String;
	background.subscribe((value) => {
		backgroundColor = value;
	});

	let showTitleInHeader: boolean;
	showTitle.subscribe((value) => {
		showTitleInHeader = value;
	});
</script>

<div class="main-container" style="--background-color: {backgroundColor}">
	<a href="#main" class="hidden-a11y-link">Skip to content</a>

	<div class="header-nav-container">
		<Header showTitle={showTitleInHeader} />
		<Navigation />
	</div>

	<main id="main"><slot /></main>
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		color: #1b1b1c;
	}

	:global(a) {
		text-decoration: none;
	}

	.main-container {
		background-color: var(--background-color);
		padding: 3rem;
	}

	.hidden-a11y-link {
		position: absolute;
		top: -5rem;
		transition: transform 0.5s;
		padding: 1rem 1rem 0.5rem;
		background: #04294f;
		color: #ffffff;
		border-radius: 0 0 1rem 1rem;
	}

	.hidden-a11y-link:focus {
		transform: translateY(4.5rem);
	}

	.header-nav-container {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
	}

	main {
		margin-top: 3rem;
	}

	:global(main > *) {
		min-height: calc(100vh - 10.6rem);
	}
</style>
