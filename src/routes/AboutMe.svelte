<section id="about">
	<img src="felix-hoffmann.webp" alt="Headshot of Felix Hoffmann" />
	<article>
		<h2>Hi!</h2>
		<p>I am passionate about web development, accessibility, and algorithms and data structures.</p>
		<p>
			Developing digital champions at <a href="https://iteratec.com" target="_blank" rel="noreferrer">iteratec</a>.
		</p>
		<p>Send me a message: <a href="mailto:hello@felixhoffmann.dev">hello@felixhoffmann.dev</a></p>
	</article>
</section>

<style>
	section {
		background-color: #f3e87e;
		scroll-snap-align: start;
		display: grid;
		grid-template-columns: 35% 5% 45% 15%;
		grid-template-rows: calc(100% - 7.6rem) 7.6rem;
		overflow: hidden;
	}

	img {
		max-width: 100%;
		max-height: 100vh;
		align-self: end;
		grid-row-start: 2;
		filter: grayscale(100%);
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
