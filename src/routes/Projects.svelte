<script lang="ts">
	const IMG_SUFFIX_ANIMATION = '.gif';
	const IMG_SUFFIX_STATIC = '-static.png';

	const startAnimation = (event: any) => {
		const id = getId(event);
		if (id) {
			const img = document.getElementById(id) as HTMLImageElement;
			img.src = img.src.replace(IMG_SUFFIX_STATIC, IMG_SUFFIX_ANIMATION);
		}
	};

	const stopAnimation = (event: any) => {
		const id = getId(event);
		if (id) {
			const img = document.getElementById(id) as HTMLImageElement;
			img.src = img.src.replace(IMG_SUFFIX_ANIMATION, IMG_SUFFIX_STATIC);
		}
	};

	const getId = (event: any): string | undefined => {
		return event.target?.id;
	};
</script>

<section id="projects">
	<article>
		<h2>Sorting Algorithm Visualizer</h2>
		<img
			tabindex="0"
			id="no-connection"
			src="flame-no-connection-static.png"
			alt="Decorative animation of a cartoon character. Plays on focus or mouse over."
			on:mouseover={startAnimation}
			on:focus={startAnimation}
			on:mouseout={stopAnimation}
			on:blur={stopAnimation}
		/>
		<p>Sort books by color using various sorting algorithms.</p>
		<a href="https://book-sort.felixhoffmann.dev" target="_blank">Demo</a>
	</article>

	<article>
		<h2>New Employee Dashboard</h2>
		<img
			tabindex="0"
			id="design-science"
			src="flame-design-science-static.png"
			alt="Decorative animation of a hand drawing on a blueprint. Plays on focus or mouse over."
			on:mouseover={startAnimation}
			on:focus={startAnimation}
			on:mouseout={stopAnimation}
			on:blur={stopAnimation}
		/>
		<p>Student project at University of Hamburg in cooperation with iteratec.</p>
		<a href="https://www.youtube.com/watch?v=6Zod9ig7AOw" target="_blank">Watch video</a>
	</article>

	<article>
		<h2>Piña Colada Machine</h2>
		<img
			tabindex="0"
			id="success"
			src="flame-success-static.png"
			alt="Decorative animation of a brain cheering. Plays on focus or mouse over."
			on:focus={startAnimation}
			on:blur={stopAnimation}
			on:mouseover={startAnimation}
			on:mouseout={stopAnimation}
		/>
		<p>Find recipes for incredible drinks. My first steps in React.</p>
		<a href="#not-yet">Code</a>
	</article>

	<img
		src="flame-design-science.gif"
		loading="lazy"
		alt="Invisible image used for preloading"
		aria-hidden="true"
		class="hidden"
	/>
	<img
		src="flame-no-connection.gif"
		loading="lazy"
		alt="Invisible image used for preloading"
		aria-hidden="true"
		class="hidden"
	/>
	<img
		src="flame-success.gif"
		loading="lazy"
		alt="Invisible image used for preloading"
		aria-hidden="true"
		class="hidden"
	/>
</section>

<style>
	section {
		background-color: #70efb2;
		scroll-snap-align: start;
		display: grid;
		grid-template-columns: 10% 20% 20% 20% 10%;
		gap: 5%;
		grid-template-rows: calc(100% - 7.6rem) 7.6rem;
		align-items: center;
		justify-content: center;
	}

	article {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}

	article:first-of-type {
		grid-column-start: 2;
	}

	img {
		width: 100%;
		max-width: 320px;
	}

	.hidden {
		width: 0;
		height: 0;
		opacity: 0;
	}

	h2 {
		word-spacing: 9999rem; /* ridiculous width to make sure line breaks after every word */
		font-size: 1.5rem;
		display: block;
		font-weight: 600;
		text-transform: uppercase;
	}
	p {
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	h2,
	p {
		font-style: normal;
		line-height: 105%;
		letter-spacing: 0.1rem;
	}

	a {
		font-size: 1rem;
		display: block;
		font-weight: 600;
		text-transform: uppercase;
		margin-top: 0.5rem;
	}

	@media (max-width: 899px) {
		section {
			grid-template-columns: 1rem calc(100% - 2rem) 1rem;
			gap: 0;
			grid-template-rows: 1fr 1fr 1fr;
			height: 300vh;
			min-height: 2100px;
			scroll-snap-align: none;
			padding-top: 0;
		}

		article {
			height: 100vh;
			scroll-snap-align: center;
			padding-top: 7.6rem;
			box-sizing: border-box;
		}

		article:first-of-type {
			grid-column-start: 2;
			grid-row-start: 1;
		}

		article:nth-of-type(2) {
			grid-column-start: 2;
			grid-row-start: 2;
		}

		article:last-of-type {
			grid-column-start: 2;
			grid-row-start: 3;
		}
	}
</style>
