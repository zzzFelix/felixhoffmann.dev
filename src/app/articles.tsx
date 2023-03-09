import styles from "./articles.module.css";

export default function Articles() {
    return (
        <section id={styles.articles}>
            <h3>Articles</h3>
            <article>
                <h4>
                    <a href="https://betterprogramming.pub/when-load-testing-gives-a-false-sense-of-security-76527a644e29?sk=66682ada6929792015049d4ee6c90a82"
                        target="_blank" rel="noreferrer">When
                        Load Testing Gives a False Sense of Security</a>
                </h4>
                <p>8 July 2022 in Better Programming</p>
            </article>
            <article>
                <h4>
                    <a href="https://bootcamp.uxdesign.cc/should-designers-code-ada045c9071e?sk=f10bd31ee4b0fe6eca5d4c933b42d7d5"
                        target="_blank" rel="noreferrer">Should
                        designers code?</a>
                </h4>
                <p>24 June 2022 in Bootcamp</p>
            </article>
            <article>
                <h4>
                    <a href="https://uxdesign.cc/an-ode-to-system-fonts-84e90be1d68c?sk=7210270419cfc8490ab185ce0d8672c7"
                        target="_blank" rel="noreferrer">An ode
                        to system fonts</a>
                </h4>
                <p>19 June 2022 in UX Collective</p>
            </article>
            <article>
                <h4>
                    <a href="https://betterprogramming.pub/use-gym-tactics-to-become-a-better-developer-7ce2a3f842cc?sk=1ceab68066422016ddde7676272d6ae4"
                        target="_blank" rel="noreferrer">Use
                        Gym Tactics to Become a Better Developer</a>
                </h4>
                <p>15 June 2022 in Better Programming</p>
            </article>
            <article>
                <h4>
                    <a href="https://uxdesign.cc/create-an-accessible-hamburger-menu-869b0301cfd7?sk=eb36f22544517bad69794a1b75bf590a"
                        target="_blank" rel="noreferrer">Create
                        an accessible hamburger menu</a>
                </h4>
                <p>14 May 2022 in UX Collective</p>
            </article>
        </section>
    )
}