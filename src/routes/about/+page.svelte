<script>
	import { background } from '../../store/background';
	import { showTitle } from '../../store/title';

	background.update(() => '#f3e87e');
	showTitle.update(() => true);
</script>

<svelte:head><title>About me — Felix Hoffmann</title></svelte:head>
<svelte:body class="background" />

<section>
	<img src="felix-hoffmann.webp" alt="Headshot of Felix Hoffmann" />
	<article>
		<h2>Hi!</h2>
		<p>I am passionate about web development, accessibility, and algorithms and data structures.</p>
		<p>
			Developing digital champions at <a
				href="https://iteratec.com"
				target="_blank"
				rel="noreferrer">iteratec</a
			>.
		</p>
		<p>Send me a message: <a href="mailto:hello@felixhoffmann.dev">hello@felixhoffmann.dev</a></p>
	</article>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 35% 5% 45% 15%;
	}

	img {
		max-width: 78%;
		align-self: end;
		filter: grayscale(100%);
		position: relative;
		bottom: -3rem;
		left: -3rem;
	}

	article {
		grid-row-start: 1;
		grid-column-start: 3;
		align-self: center;
	}

	h2,
	a {
		font-weight: 600;
	}

	p {
		font-weight: 300;
		margin: 1em 0;
	}

	h2,
	p {
		font-style: normal;
		font-size: 2rem;
		line-height: 140%;
	}

	@media (max-width: 899px) {
		section {
			grid-template-columns: 1rem calc(100% - 2rem) 1rem;
			grid-template-rows: 50% 50%;
		}

		img {
			grid-row-start: 2;
			grid-column-start: 1;
			grid-column-end: 3;
			max-height: 100%;
		}

		article {
			grid-row-start: 1;
			grid-column-start: 2;
		}

		h2,
		p {
			font-size: 1.2rem;
		}
	}
</style>
