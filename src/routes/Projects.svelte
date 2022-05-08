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
			alt="Animation of a cartoon character. Plays on focus or mouseover."
			on:mouseover={startAnimation}
			on:focus={startAnimation}
			on:mouseout={stopAnimation}
			on:blur={stopAnimation}
		/>
		<p>Sort books by color using various sorting algorithms.</p>
	</article>

	<article>
		<h2>New Employee Dashboard</h2>
		<img
			tabindex="0"
			id="design-science"
			src="flame-design-science-static.png"
			alt="Animation of a hand drawing on a blueprint. Plays on focus or mouseover."
			on:mouseover={startAnimation}
			on:focus={startAnimation}
			on:mouseout={stopAnimation}
			on:blur={stopAnimation}
		/>
		<p>Student project at University of Hamburg in cooperation with iteratec.</p>
	</article>

	<article>
		<h2>Piña Colada Machine</h2>
		<img
			tabindex="0"
			id="success"
			src="flame-success-static.png"
			alt="Animation of a brain cheering. Plays on focus or mouseover."
			on:focus={startAnimation}
			on:blur={stopAnimation}
			on:mouseover={startAnimation}
			on:mouseout={stopAnimation}
		/>
		<p>Find recipes for incredible drinks. My first steps in React.</p>
	</article>

	<img src="flame-design-science.gif" loading="lazy" alt="Invisible image used for preloading" aria-hidden="true" class="hidden"> 
	<img src="flame-no-connection.gif" loading="lazy" alt="Invisible image used for preloading" aria-hidden="true" class="hidden"> 
	<img src="flame-success.gif" loading="lazy" alt="Invisible image used for preloading" aria-hidden="true" class="hidden"> 
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
		padding: 2rem 0.2rem;
	}

	article:first-of-type {
		grid-column-start: 2;
	}

	img {
		width: 100%;
		max-width: 320px;
	}

	.hidden {
		display: none;
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
	}

	h2,
	p {
		font-style: normal;
		line-height: 105%;
		letter-spacing: 0.1rem;
	}
</style>
