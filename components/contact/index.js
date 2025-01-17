import styles from './Contact.module.css';
import Image from 'next/image'

export default function Contact() {
    return(
        <div className={styles.contactSection} id="contact">
            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h3>CONTATO</h3>
                    <p>Sinta-se livre para entrar em contato comigo por qualquer rede social ou email :D</p>
                    <p>erickhenriquemota@gmail.com</p>

                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com/erickhmart/" rel="noreferrer" target="_blank" className={styles.socialIcon}>
                            <img src="/icons/instagram.svg" alt="Icone instagram" width={20} height={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/erickhmt/" rel="noreferrer" target="_blank" className={styles.socialIcon}>
                            <img src="/icons/linkedin.svg" alt="Icone linkedin" width={20} height={20} />
                        </a>
                    </div>
                </div>
                <form name="contact" className={styles.contactForm} method="POST" data-netlify="true">
                    <input type="hidden" name="contact" value="contact" />
                    <input type="text" placeholder="Nome" name="name" required/>
                    <input type="email" placeholder="Email" name="contactEmail" />
                    <input type="email" placeholder="Email" name="email" />
                    <textarea placeholder="Mensagem" name="message" rows="8" required></textarea>
                    <button className={styles.formButton} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}