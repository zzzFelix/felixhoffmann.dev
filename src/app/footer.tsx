import Image from "next/image"
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <a href="#"><Image src="/spaceship.svg" alt="A rocket that takes you to the top of the page." width="150" height="150"></Image></a>
        </footer>
    )
}