import styles from './talks.module.css';

export default function Talks() {
    return (
        <section id={styles.talks}>
            <h3>Talks</h3>
            <article>
                <h4>How To Blow Up a Kubernetes Cluster</h4>
                <p><a href="https://sched.co/1HyWp" target="_blank" rel="noreferrer">April 19, 2023 @ KubeCon + CloudNativeCon Europe, Amsterdam</a></p>
            </article>

            <article>
                <h4>Accessibility for All: The Benefits of Inclusive Design</h4>
                <p><a href="https://www.alpine-conferences.com/agent-conf-2023/schedule/" target="_blank" rel="noreferrer">February 23, 2023 @ AgentConf, Austria</a> • Lightning talk • <a href="https://talks.felixhoffmann.dev/a11y-lightning" target="_blank" rel="noreferrer">Slides</a></p>
                <p><a href="https://www.youtube.com/watch?v=e-Vm3qQKsuM&list=PL02pdjMT4gWy_4JSx3J-PGT2MPnOMajvF" target="_blank" rel="noreferrer">February 9, 2023 @ JSworld</a> • Full talk • <a href="https://talks.felixhoffmann.dev/a11y" target="_blank" rel="noreferrer">Slides</a></p>
            </article>
        </section>
    )
}