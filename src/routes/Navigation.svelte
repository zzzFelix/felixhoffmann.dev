<script lang="ts">
	import BurgerMenuIcon from './BurgerMenuIcon.svelte';

	let menuOpen = false;

	interface MenuEvent {
		open: boolean;
	}

	const toggleMenu = (event: CustomEvent<MenuEvent>) => {
		menuOpen = event.detail.open;
	};

	const closeMenu = () => {
		menuOpen = false;
	};
</script>

<a href="#about" class="hidden-a11y-link">Skip to content</a>

<BurgerMenuIcon open={menuOpen} on:menu={toggleMenu} />

<nav class={menuOpen ? 'open' : 'closed'}>
	<a href="#about" on:click={closeMenu}>About me</a>
	<a href="#projects" on:click={closeMenu}>Projects</a>
	<a href="#articles" on:click={closeMenu}>Articles</a>
</nav>

<style>
	.hidden-a11y-link {
		position: absolute;
		top: -5rem;
		transition: transform 1s;
		padding: 1rem 1rem 0.5rem;
		background: #04294f;
		color: #ffffff;
		border-radius: 0 0 1rem 1rem;
	}

	.hidden-a11y-link:focus {
		transform: translateY(3.3rem);
	}

	nav {
		position: fixed;
		text-align: right;
		padding: 3rem;
		width: calc(100% - 3rem - 3rem);
		z-index: 9;
	}

	a:first-of-type {
		grid-column-start: 2;
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

	@media (max-width: 899px), (max-height: 699px) {
		nav {
			height: 100vh;
			width: 10rem;
			right: 0;
			padding: 0;
			padding-top: 5rem;
			background: #fff;
		}

		nav.open {
			display: block;
		}

		nav.closed {
			display: none;
		}
	}
</style>
