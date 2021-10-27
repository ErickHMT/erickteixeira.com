import styles from './Header.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div>
                    <h1><a href="#">Erick Teixeira</a></h1>
                    <h2>Ilustrador / front end developer</h2>
                </div>

                <ul className={styles.headerList}>
                    <li><AnchorLink className={styles.navItem} href="#portfolio">Portfolio</AnchorLink></li>
                    <li><AnchorLink className={styles.navItem} href="#about">Sobre Mim</AnchorLink></li>
                    <li><AnchorLink className={styles.navItem} href="#contact">Contato</AnchorLink></li>
                </ul>
            </div>
        </header>
    );
}