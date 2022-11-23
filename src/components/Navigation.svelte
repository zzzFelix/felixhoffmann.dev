<script lang="ts">
	import { page } from '$app/stores';
	import BurgerMenuIcon from './BurgerMenuIcon.svelte';

	let menuOpen = false;

	interface MenuEvent {
		open: boolean;
	}

	const toggleMenu = (event: CustomEvent<MenuEvent>) => {
		menuOpen = event.detail.open;
	};
</script>

<BurgerMenuIcon open={menuOpen} on:menu={toggleMenu} />

<nav class={menuOpen ? 'open' : 'closed'} aria-expanded={menuOpen}>
	<a href="/about" class:active={$page.url.pathname.includes('/about')}>About me</a>
	<a href="/projects" class:active={$page.url.pathname.includes('/projects')}>Projects</a>
	<a href="/articles" class:active={$page.url.pathname.includes('/articles')}>Articles</a>
</nav>

<style>
	nav {
		text-align: right;
	}

	a {
		font-weight: 600;
		font-size: 1rem;
		line-height: 160%;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		margin: 1.5rem;
	}

	a.active {
		text-decoration: underline;
	}

	@media (max-width: 899px), (max-height: 699px) {
		nav {
			background: #fff;
			grid-column-end: 3;
			grid-column-start: 1;
			padding: 0.5rem;
			margin-top: 1rem;
		}

		nav.open {
			display: block;
		}

		nav.closed {
			display: none;
		}
	}
</style>
