import Image from 'next/image'
import styles from './About.module.css';

import profileImg from '../../public/img/profile.jpg'

export default function About() {
    return(
        <div className={styles.aboutContainer} id="about">
            <div className={styles.aboutContent}>
                <Image className={styles.profileImage} src={profileImg} placeholder="blur" width={150} height={150} layout="fixed" objectFit="cover" />
                <div className={styles.aboutInfo}>
                    <h2>Sobre</h2>
                    <p>Meu nome é Erick Teixeira, nasci em Porangatu-GO e hoje atuo profissionalmente como desenvolvedor frontend e estudo ilustração no tempo livre.</p>
                    <p>Em 2016 decidi começar a aprofundar meus estudos em desenho e ilustração e desde então venho aos poucos estudando e aplicando o que venho aprendendo. Amo trabalhos que envolvam criatividade e costumo fantasiar bastante sobre novas ideias (Jogos, em particular)    </p>
                </div>
            </div>
        </div>
    );
}