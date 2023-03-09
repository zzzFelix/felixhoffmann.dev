import styles from './about.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <section id={styles.about}>
            <div className={styles['p-wrapper']}>
                <h3>Hello! 👋</h3>
                <p>I am passionate about web development, algorithms and data structures, and accessibility.</p>
                <p>Developing digital champions at <a href="https://www.iteratec.com" target="_blank"
                    rel="noreferrer">iteratec</a>.</p>
                <p>Send me a message: <a href="mailto:hello@felixhoffmann.dev">hello@felixhoffmann.dev</a></p>
                <p className={[styles['socials-first'], styles.socials].join(' ')}>
                    <Image src="github-mark.svg" alt="" width="25" height="25"></Image><a href="https://github.com/zzzFelix" target="_blank" rel="noreferrer">GitHub</a></p>
                <p className={styles.socials}>
                    <Image src="/twitter-logo.svg" alt="" width="25" height="25"></Image><a href="https://twitter.com/felixmhoffmann" target="_blank" rel="noreferrer">Twitter</a>
                </p>
            </div>
            <div className={styles['img-wrapper']}>
                <Image src="/felixhoffmann.png" alt="Felix Hoffmann working on his laptop" className={styles.profile} width="200" height="200"></Image>
                <small>Image courtesy of Guntram Fechtig and <a href="https://agent.sh" target="_blank" rel="noreferrer">AgentConf</a>.</small>
            </div>
        </section>
    )
}