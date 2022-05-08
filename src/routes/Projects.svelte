<script lang="ts">
	const IMG_SUFFIX_ANIMATION = '.gif';
	const IMG_SUFFIX_STATIC = '-static.png';
	let lastAnimation: string | null = null;

	const startAnimation = (event: any) => {
		if (getId(event) === lastAnimation) return;
		if (lastAnimation) {
			stopAnimation(lastAnimation);
		}
		changeUrl(event);
	};

	const getId = (event: any): string | undefined => {
		let id;
		const classList = event.target?.classList as DOMTokenList;
		if (classList.contains('success')) {
			id = 'success';
		} else if (classList.contains('design-science')) {
			id = 'design-science';
		} else if (classList.contains('no-connection')) {
			id = 'no-connection';
		}
		return id;
	}

	const stopAnimation = (id: string) => {
		const img = document.getElementById(id) as HTMLImageElement;
		img.src = img.src.replace(IMG_SUFFIX_ANIMATION, IMG_SUFFIX_STATIC);
	};

	const changeUrl = (event: any) => {
		let id;
		const classList = event.target?.classList as DOMTokenList;
		if (classList.contains('success')) {
			id = 'success';
		} else if (classList.contains('design-science')) {
			id = 'design-science';
		} else if (classList.contains('no-connection')) {
			id = 'no-connection';
		}
		if (id != null) {
			lastAnimation = id;
			const img = document.getElementById(id) as HTMLImageElement;
			img.src = img.src.replace(IMG_SUFFIX_STATIC, IMG_SUFFIX_ANIMATION);
		}
	};
</script>

<section id="projects">
	<a href="#not-yet" on:mouseover={startAnimation} on:focus={startAnimation} class="no-connection">
		<article class="no-connection">
			<h2 class="no-connection">Sorting Algorithm Visualizer</h2>
			<img  class="no-connection" id="no-connection" src="flame-no-connection-static.png" alt="Animated cartoon character" />
			<p class="no-connection">Sort books by color using various sorting algorithms.</p>
		</article>
	</a>

	<a href="#not-yet" on:mouseover={startAnimation} on:focus={startAnimation} class="design-science">
		<article class="design-science">
			<h2 class="design-science">New Employee Dashboard</h2>
			<img class="design-science" id="design-science" src="flame-design-science-static.png" alt="Animated hand drawing on a blueprint" />
			<p class="design-science">Student project at University of Hamburg in cooperation with iteratec.</p>
		</article>
	</a>

	<a href="#not-yet" on:mouseover={startAnimation} on:focus={startAnimation} class="success">
		<article class="success">
			<h2 class="success">Piña Colada Machine</h2>
			<img class="success" id="success" src="flame-success-static.png" alt="Animated brain cheering" />
			<p class="success">Find recipes for incredible drinks. My First steps in React.</p>
		</article>
	</a>

	<link rel="preload" as="image" href="flame-design-science.gif">
	<link rel="preload" as="image" href="flame-no-connection.gif">
	<link rel="preload" as="image" href="flame-success.gif">
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
	
	a, article {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}

	a {
		padding: 2rem 0.2rem;
	}

	a:first-of-type {
		grid-column-start: 2;
	}

	article:hover > h2 {
		text-decoration: underline;
	}

	img {
		width: 100%;
		max-width: 320px;
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
