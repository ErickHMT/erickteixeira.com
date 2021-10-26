import styles from './Contact.module.css';
import Image from 'next/image'

export default function Contact() {
    return(
        <div className={styles.contactSection} id="contact">
            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h3>CONTATO</h3>
                    <p>erickhenriquemota@gmail.com</p>

                    <div>
                        <a href="https://www.instagram.com/erickhmart/" target="_blank" className={styles.socialIcon}>
                            <img src="/icons/instagram.svg" rel="noreferrer" alt="Icone instagram" width={20} height={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/erickhmt/" target="_blank" className={styles.socialIcon}>
                            <img src="/icons/linkedin.svg" rel="noreferrer" alt="Icone linkedin" width={20} height={20} />
                        </a>
                    </div>
                </div>
                <form name="contact" className={styles.contactForm} method="POST" data-netlify="true">
                    <input type="text" placeholder="Nome" name="name" />
                    <input type="email" placeholder="Email" name="email" />
                    <textarea placeholder="Mensagem" name="message" rows="8"></textarea>

                    <button className={styles.formButton} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}