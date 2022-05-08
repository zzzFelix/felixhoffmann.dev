<section>
	<article>
		<h1>Felix Hoffmann</h1>
		<p>Software Engineer</p>
	</article>
	<img src="astronaut.svg" alt="Decorative animation of an astronaut" id="astronaut" />
	<img src="astronaut-background.svg" alt="Background for astronaut" />
	<span class="keyboard">Press arrow down key</span>
	<span class="touch">Scroll down</span>
</section>

<style>
	section {
		background-color: #e2c0d1;
		scroll-snap-align: start;
		display: grid;
		grid-template-columns: auto 25rem 25rem auto;
		grid-template-rows: 7.6rem 1fr 5fr 7.6rem;
	}

	article {
		grid-column-start: 2;
		grid-row-start: 3;
		justify-self: start;
	}

	@keyframes astronaut {
		from {
			transform: translateX(-0.1rem) translateY(-0.5rem);
		}
		to {
			transform: rotate(10deg) translateX(0.1rem) translateY(0.5rem);
		}
	}
	#astronaut {
		z-index: 1;
		animation: astronaut 5s linear 0s infinite alternate;
		animation-timing-function: linear;
		animation-fill-mode: both;
	}

	img {
		grid-row-start: 3;
		grid-column-start: 3;
		justify-self: end;
		width: 80%;
		max-width: 20rem;
		margin-top: -9%;
		align-self: start;
	}

	h1,
	p {
		margin: 0;
		color: #04294f;
		text-transform: uppercase;
		font-size: 2rem;
		line-height: 150%;
		letter-spacing: 0.1em;
	}

	@keyframes reveal {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	h1 {
		align-self: end;
		font-style: normal;
		font-weight: 600;
	}

	p {
		font-weight: 300;
	}

	span {
		grid-row-start: 4;
		grid-column-start: 2;
		grid-column-end: 4;
		justify-self: center;
		align-self: center;
		text-align: center;
		margin: 3rem 3rem 4rem;
		font-weight: 600;
		font-size: 1rem;
		line-height: 160%;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		animation: reveal 2s ease-in 0s 1;
		animation-fill-mode: backwards;
	}

	.touch {
		display: none;
	}

	@media (max-height: 699px), (hover: none) {
		.keyboard {
			display: none;
		}

		.touch {
			display: inline;
		}
	}

	@media (max-width: 899px) {
		section {
			grid-template-columns: 1rem calc(100% - 2rem) 1rem;
			grid-template-rows: calc(50% - 3.8rem) calc(50% - 3.8rem) 7.6rem;
		}

		article {
			grid-column-start: 2;
			grid-row-start: 1;
		}

		img {
			grid-column-start: 2;
			grid-row-start: 2;
		}

		span {
			grid-column-start: 2;
			grid-row-start: 3;
		}

		article,
		img,
		span,
		h1,
		p {
			justify-self: center;
			text-align: center;
		}
	}
</style>
