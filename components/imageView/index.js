import styles from './ImageView.module.css';
import Image from 'next/image'

export default function ImageView({imageSelected, closeImageView}) {

    return (
        <>
            { imageSelected != {} ? (
                <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                        <div onClick={() => closeImageView()} className={styles.closeIcon}>
                            <img src="/icons/close.svg" alt="Icone linkedin" width={20} height={20} />
                        </div>
                        <img src={imageSelected.src} className={styles.image} width="500px" height="500px" layout="fixed" objectFit={'contain'} />
                    </div>
                </div>
            ) : null}
        </>
    );
}
