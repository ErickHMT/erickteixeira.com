import styles from './ImageView.module.css';
import Image from 'next/image'

export default function ImageView({imageSelected, closeImageView}) {

    return (
        <>
            { imageSelected != {} ? (
                <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                        <div onClick={() => closeImageView()} className={styles.closeIcon}>
                            <img src="/icons/close.svg" alt="Fechar imagem" width={40} height={40} />
                        </div>
                        <img src={imageSelected.src} className={styles.image} />
                    </div>
                </div>
            ) : null}
        </>
    );
}
