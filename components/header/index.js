import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div>
                    <h1><a href="#">Erick Teixeira</a></h1>
                    <h2>Ilustrador / front end developer</h2>
                </div>

                <ul className={styles.headerList}>
                    <li><a className={styles.navItem} href="#portfolio">Portfolio</a></li>
                    <li><a className={styles.navItem} href="#about">Sobre Mim</a></li>
                    <li><a className={styles.navItem} href="#contact">Contato</a></li>
                </ul>
            </div>
        </header>
    );
}