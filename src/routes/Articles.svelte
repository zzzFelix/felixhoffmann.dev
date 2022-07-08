<section id="articles">
	<ul>
		<li>
			<a href="https://betterprogramming.pub/when-load-testing-gives-a-false-sense-of-security-76527a644e29?sk=66682ada6929792015049d4ee6c90a82" target="_blank">When Load Testing Gives a False Sense of Security</a>
			<p>July 8, 2022 in Better Programming</p>
		</li>
		<li>
			<a href="https://bootcamp.uxdesign.cc/should-designers-code-ada045c9071e?sk=f10bd31ee4b0fe6eca5d4c933b42d7d5" target="_blank">Should designers code?</a>
			<p>June 24, 2022 in Bootcamp</p>
		</li>
		<li>
			<a href="https://uxdesign.cc/an-ode-to-system-fonts-84e90be1d68c?sk=7210270419cfc8490ab185ce0d8672c7" target="_blank">An ode to system fonts</a>
			<p>June 19, 2022 in UX Collective</p>
		</li>
		<li>
			<a href="https://betterprogramming.pub/use-gym-tactics-to-become-a-better-developer-7ce2a3f842cc?sk=1ceab68066422016ddde7676272d6ae4" target="_blank">Use Gym Tactics to Become a Better Developer</a>
			<p>June 15, 2022 in Better Programming</p>
		</li>
		<li>
			<a href="https://uxdesign.cc/create-an-accessible-hamburger-menu-869b0301cfd7?sk=eb36f22544517bad69794a1b75bf590a" target="_blank">Create an accessible hamburger menu</a>
			<p>May 14, 2022 in UX Collective</p>
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
