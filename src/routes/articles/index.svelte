<script>
	import Skeleton from '../Skeleton.svelte';
	import { background } from '../../store/background';

	background.update(() => "#87d8e0");
</script>

<svelte:head><title>Articles — Felix Hoffmann</title></svelte:head>

<Skeleton>
	<section>
		<ul>
			<li>
				<a
					href="https://betterprogramming.pub/when-load-testing-gives-a-false-sense-of-security-76527a644e29?sk=66682ada6929792015049d4ee6c90a82"
					target="_blank"
					rel="noreferrer">When Load Testing Gives a False Sense of Security</a
				>
				<p>July 8, 2022 in Better Programming</p>
			</li>
			<li>
				<a
					href="https://bootcamp.uxdesign.cc/should-designers-code-ada045c9071e?sk=f10bd31ee4b0fe6eca5d4c933b42d7d5"
					target="_blank"
					rel="noreferrer">Should designers code?</a
				>
				<p>June 24, 2022 in Bootcamp</p>
			</li>
			<li>
				<a
					href="https://uxdesign.cc/an-ode-to-system-fonts-84e90be1d68c?sk=7210270419cfc8490ab185ce0d8672c7"
					target="_blank"
					rel="noreferrer">An ode to system fonts</a
				>
				<p>June 19, 2022 in UX Collective</p>
			</li>
			<li>
				<a
					href="https://betterprogramming.pub/use-gym-tactics-to-become-a-better-developer-7ce2a3f842cc?sk=1ceab68066422016ddde7676272d6ae4"
					target="_blank"
					rel="noreferrer">Use Gym Tactics to Become a Better Developer</a
				>
				<p>June 15, 2022 in Better Programming</p>
			</li>
			<li>
				<a
					href="https://uxdesign.cc/create-an-accessible-hamburger-menu-869b0301cfd7?sk=eb36f22544517bad69794a1b75bf590a"
					target="_blank"
					rel="noreferrer">Create an accessible hamburger menu</a
				>
				<p>May 14, 2022 in UX Collective</p>
			</li>
		</ul>
	</section>
</Skeleton>

<style>
	section {
		display: grid;
		grid-template-rows: 1fr auto 1fr;
		padding-left: 3rem;
	}

	ul {
		list-style-type: none;
		grid-row-start: 2;
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

	@media (max-width: 899px) {
		li {
			font-size: 1.2rem;
		}
	}
</style>
