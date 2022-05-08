<nav>
	<a href="#about">About me</a>
	<a href="#projects">Projects</a>
	<a href="#articles">Articles</a>
</nav>

<style>
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
