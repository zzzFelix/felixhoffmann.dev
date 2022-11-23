<script>
	import Skeleton from '../Skeleton.svelte';
	import { background } from '../../store/background';

	background.update(() => "#e2c0d1");
</script>

<svelte:head><title>Talks — Felix Hoffmann</title></svelte:head>

<Skeleton><section>No talks yet.</section></Skeleton>
