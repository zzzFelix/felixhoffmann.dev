<a href="#about" class="hidden-a11y-link">Skip to content</a>

<nav>
	<a href="#about">About me</a>
	<a href="#projects">Projects</a>
	<a href="#articles">Articles</a>
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
		z-index: 10;
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
		color: #1B1B1C;
		margin: 1.5rem;
	}

	@media (max-width: 899px), (max-height: 699px) {
		nav {
			display: none;
		}
	}
</style>
