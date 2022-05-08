<section id="articles">
	<ul>
		<li>
			<a href="https://medium.com/p/d0f1999ec71f" target="_blank"
				>5 Videos Junior Web Developers Should Watch</a
			>
			<p>May 5, 2022 on medium.com</p>
		</li>
		<li>
			<a href="https://medium.com/p/d0f1999ec71f" target="_blank">Stop Making Me Download Fonts</a>
			<p>May 8, 2022 on medium.com</p>
		</li>
		<li>
			<a href="https://medium.com/p/d0f1999ec71f" target="_blank"
				>How We Make Sure New Employees Find What They Are Looking For</a
			>
			<p>May 12, 2022 on medium.com</p>
		</li>
		<a href="#top" class="top-anchor">
			<p>Take me to the top</p>
			<img src="spaceship.svg" alt="A spaceship that takes you to the top of the page" /></a
		>
	</ul>
</section>

<style>
	section {
		background-color: #87d8e0;
		scroll-snap-align: start;
		display: grid;
		grid-template-columns: 12.5% 75% 12.5%;
		grid-template-rows: calc(100% - 7.6rem) 7.6rem;
		position: relative;
	}

	ul {
		list-style-type: none;
		padding-bottom: 7.6rem;
		grid-column-start: 2;
	}

	li {
		font-style: normal;
		font-weight: 400;
		font-size: 2rem;
		line-height: 140%;
		margin-bottom: 2rem;
	}

	li:last-of-type {
		margin: 0;
	}

	a {
		font-weight: 700;
	}

	p {
		margin: 0;
	}
	a:hover {
		text-decoration: underline;
	}

	a.top-anchor {
		position: absolute;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-style: normal;
		font-weight: 400;
		font-size: 1rem;
		line-height: 140%;
		text-transform: uppercase;
	}
	img {
		width: 10rem;
		transform: scaleX(-1);
	}

	@media (max-width: 899px) {
		li {
			font-size: 1.2rem;
		}

		img {
			width: 5rem;
		}
	}
</style>
