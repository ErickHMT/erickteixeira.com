import styles from './Contact.module.css';
import Image from 'next/image'

export default function Contact() {
    return(
        <div className={styles.contactSection}>
            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h3>CONTATO</h3>
                    <p>erickhenriquemota@gmail.com</p>

                    <div>
                        <span className={styles.socialIcon}>
                            <Image src="/icons/instagram.svg" alt="Icone instagram" width={20} height={20} />
                        </span>
                        <span className={styles.socialIcon}>
                            <Image src="/icons/linkedin.svg" alt="Icone linkedin" width={20} height={20} />
                        </span>
                    </div>
                </div>
                <form name="contact" className={styles.contactForm} method="POST" netlify>
                    <input type="text" placeholder="Nome" name="name" />
                    <input type="email" placeholder="Email" name="email" />
                    <textarea placeholder="Mensagem" name="message" rows="8"></textarea>

                    <button className="formButton" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}