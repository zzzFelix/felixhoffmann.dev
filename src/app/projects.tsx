import Image from "next/image";
import styles from "./projects.module.css";

export default function Projects() {
    return (
        <section id={styles.projects}>
            <h3>Projects</h3>
            <article id={styles.snackathon}>
                <h4>Wheel of Food-une</h4>
                <Image tabIndex={0} id={styles.success} src="/flame-success-static.png"
                    alt="Animation of a brain cheering. Plays on hover or focus." width="100" height="100"></Image>
                <p>My team and I could not decide on where to eat lunch. We built a wheel of fortune to make the decision for
                    us!</p>
                <p>Physical wheel, magnetic sensor, Raspberry Pi, e-paper display, and a Python script that spits out
                    restaurants.</p>
                <a href="https://twitter.com/felixmhoffmann/status/1608128980590252033" target="_blank" rel="noreferrer">See
                    picture</a>
            </article>

            <article id={styles.iteraweb}>
                <h4>Employee Dashboard</h4>
                <Image tabIndex={0} id={styles['design-science']} src="/flame-design-science-static.png" width="100" height="100"
                    alt="Animation of a hand drawing on a blueprint. Plays on hover or focus."></Image>
                <p>A customizable dashboard that contains links to and information about iteratec&apos;s internal services.</p>
                <p>Student project at University of Hamburg in cooperation with iteratec. Still used in production today.</p>
                <p>Vanilla JS, OAuth2, AWS</p>
                <a href="https://www.youtube.com/watch?v=6Zod9ig7AOw" target="_blank" rel="noreferrer">Watch video</a>
            </article>

            <article id={styles['book-sort']}>
                <h4>Sorting Algorithm Visualizer</h4>
                <Image tabIndex={0} id={styles['no-connection']} src="/flame-no-connection-static.png" width="100" height="100"
                    alt="Animation of man with a graph with broken connections as a brain. Plays on hover or focus."></Image>
                <p>Sort books by color using different algorithms.</p>
                <p>Currently only supports bubble sort. It&apos;s a work-in-progress!</p>
                <p>VueJS, TypeScript</p>
                <a href="https://serene-swartz-5a3049.netlify.app/#/book-sort" target="_blank" rel="noreferrer">Demo</a>
            </article>
        </section>
    )
}
