<section id="about">
	<img src="felix-hoffmann.png" alt="Headshot of Felix Hoffmann" />
	<article>
		<h2>Hi!</h2>
		<p>I am passionate about web development, accessibility, and algorithms and data structures.</p>
		<p>Developing digital champions at <a href="https://iteratec.com" target="_blank">iteratec</a>.</p>
		<p>Send me a message: <a href="mailto:hello@felixhoffmann.dev">hello@felixhoffmann.dev</a></p>
	</article>
</section>

<style>
	section {
		background-color: #f3e87e;
		scroll-snap-align: start;
		display: grid;
		grid-template-columns: auto 40rem 40rem auto;
		grid-template-rows: 7.6rem calc(100% - 7.6rem - 7.6rem) 7.6rem;
	}
	img {
		max-height: 90vh;
		align-self: end;
		grid-row-start: 3;
		grid-column-end: 3;
		grid-column-start: 1;
	}

	article {
		grid-row-start: 2;
		align-self: center;
		grid-column-start: 3;
	}

	article img {
		height: 2.8rem;
	}

	h2,
	a {
		font-weight: 600;
	}

	p {
		font-weight: 300;
	}

	h2,
	p {
		font-style: normal;
		font-size: 2rem;
		line-height: 140%;
	}
</style>
