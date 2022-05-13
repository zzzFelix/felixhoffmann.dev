<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let open = false;

	const toggleMenu = () => {
		open = !open;
		dispatch('menu', {
			open
		});
	};
</script>

<button
	class={open ? 'menu-button open' : 'menu-button'}
	on:click={toggleMenu}
	aria-label="Open the menu"
>
	<p>Menu</p>
	<div aria-hidden="true">
		<div class="bar1" />
		<div class="bar2" />
		<div class="bar3" />
	</div>
</button>

<style>
	.menu-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		cursor: pointer;
		border: none;
		background: none;
		display: grid;
		grid-template-columns: auto 35px;
		align-items: center;
		grid-gap: 0.5rem;
		z-index: 10;
	}

	.menu-button.open {
		position: fixed;
	}

	p {
		font-size: 1rem;
	}

	.bar1 {
		grid-row-start: 1;
	}

	.bar1,
	.bar2,
	.bar3 {
		width: 35px;
		height: 5px;
		background-color: #1b1b1c;
		margin: 6px 0;
		transition: 0.4s;
		grid-column-start: 2;
	}

	/* Rotate first bar */
	.open .bar1 {
		transform: rotate(-45deg) translate(-8px, 8px);
	}

	/* Fade out the second bar */
	.open .bar2 {
		opacity: 0;
	}

	/* Rotate last bar */
	.open .bar3 {
		transform: rotate(45deg) translate(-8px, -7px);
	}

	@media (min-width: 899px) and (min-height: 699px) {
		.menu-button {
			display: none;
		}
	}
</style>
