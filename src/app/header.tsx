import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="#main" className={styles['hidden-a11y-link']}>Skip to content</a>
            <div className={styles.heading}>
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
            <Image src="/astronaut.svg" alt="" id={styles.astronaut} className={styles.astronaut} height="250" width="250" priority></Image>
            <Image src="/astronaut-background.svg" alt="" className={styles.astronaut} height="250" width="250" priority></Image>
        </header>
    )
}
