import styles from './page.module.css'
import Header from './header'
import About from './about'
import Projects from './projects'
import Talks from './talks'
import Articles from './articles'
import Footer from './footer'

export default function Home() {
  return (
    <div className={styles['content-wrapper']}>
      <Header></Header>
      <main id={styles.main}>
        <About></About>
        <Projects></Projects>
        <Talks></Talks>
        <Articles></Articles>
        <Footer></Footer>
      </main>
    </div>
  )
}
