import styles from './About.module.css';

export default function About() {
    return(
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <h2>Sobre</h2>
                <h1><a href="#">Erick Teixeira</a></h1>
                <h2>Ilustrador / front end developer</h2>
            </div>
        </div>
    );
}