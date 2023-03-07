import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description"
          content="Personal website of software engineer Felix Hoffmann. Find blog posts, conference talks, and side projects. Felix loves web development, accessibility, and Kubernetes." />
        <link rel="icon" type="image/svg+xml" href="/src/img/favicon.png" />
        <link rel="preload" href="/src/img/flame-design-science.gif" as="image" />
        <link rel="preload" href="/src/img/flame-no-connection.gif" as="image" />
        <link rel="preload" href="/src/img/flame-success.gif" as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Felix Hoffmann — software engineer</title>
      </Head>
      <div className="content-wrapper">
        <header>
          <a href="#main" className="hidden-a11y-link">Skip to content</a>
          <div className="heading">
            <h1>Felix Hoffmann</h1>
            <h2>Software engineer</h2>
          </div>
          <nav>
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#talks">Talks</a></li>
              <li><a href="#articles">Articles</a></li>
            </ul>
          </nav>
          <Image src="/src/img/astronaut.svg" alt="" className="astronaut" height="250" width="250"></Image>
          <img src="/src/img/astronaut.svg" alt="" id="astronaut" className="astronaut" height="250" width="250" />
          <img src="/src/img/astronaut-background.svg" alt="" className="astronaut" height="250" width="250" />
        </header>

        <main id="main">
          <section id="about">
            <div className="p-wrapper">
              <h3>Hello! 👋</h3>
              <p>I am passionate about web development, algorithms and data structures, and accessibility.</p>
              <p>Developing digital champions at <a href="https://www.iteratec.com" target="_blank"
                rel="noreferrer">iteratec</a>.</p>
              <p>Send me a message: <a href="mailto:hello@felixhoffmann.dev">hello@felixhoffmann.dev</a></p>
              <p className="socials socials-first"><img src="/src/img/github-mark.svg" alt="" width="25" height="25" /><a href="https://github.com/zzzFelix" target="_blank" rel="noreferrer">GitHub</a></p>
              <p className="socials"><img src="/src/img/twitter-logo.svg" alt="" width="25" height="25" /><a href="https://twitter.com/felixmhoffmann" target="_blank" rel="noreferrer">Twitter</a></p>
            </div>
            <div className="img-wrapper">
              <img src="src/img/felixhoffmann.png" alt="Felix Hoffmann working on his laptop" className="profile" width="200" height="200" />
              <small>Image courtesy of Guntram Fechtig and <a href="https://agent.sh" target="_blank" rel="noreferrer">AgentConf</a>.</small>
            </div>
          </section>

          <section id="projects">
            <h3>Projects</h3>
            <article id="snackathon">
              <h4>Wheel of Food-une</h4>
              <img tabIndex={0} id="success" src="src/img/flame-success-static.png"
                alt="Animation of a brain cheering. Plays on hover or focus." />
              <p>My team and I could not decide on where to eat lunch. We built a wheel of fortune to make the decision for
                us!</p>
              <p>Physical wheel, magnetic sensor, Raspberry Pi, e-paper display, and a Python script that spits out
                restaurants.</p>
              <a href="https://twitter.com/felixmhoffmann/status/1608128980590252033" target="_blank" rel="noreferrer">See
                picture</a>
            </article>

            <article id="iteraweb">
              <h4>Employee Dashboard</h4>
              <img tabIndex={0} id="design-science" src="src/img/flame-design-science-static.png"
                alt="Animation of a hand drawing on a blueprint. Plays on hover or focus." />
              <p>A customizable dashboard that contains links to and information about iteratec's internal services.</p>
              <p>Student project at University of Hamburg in cooperation with iteratec. Still used in production today.</p>
              <p>Vanilla JS, OAuth2, AWS</p>
              <a href="https://www.youtube.com/watch?v=6Zod9ig7AOw" target="_blank" rel="noreferrer">Watch video</a>
            </article>

            <article id="book-sort">
              <h4>Sorting Algorithm Visualizer</h4>
              <img tabIndex={0} id="no-connection" src="src/img/flame-no-connection-static.png"
                alt="Animation of man with a graph with broken connections as a brain. Plays on hover or focus." />
              <p>Sort books by color using different algorithms.</p>
              <p>Currently only supports bubble sort. It's a work-in-progress!</p>
              <p>VueJS, TypeScript</p>
              <a href="https://serene-swartz-5a3049.netlify.app/#/book-sort" target="_blank" rel="noreferrer">Demo</a>
            </article>
          </section>

          <section id="talks">
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

          <section id="articles">
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
        </main>

        <footer>
          <a href="#"><img src="/src/img/spaceship.svg" alt="A rocket that takes you to the top of the page." /></a>
        </footer>
      </div>
    </>
  )
}