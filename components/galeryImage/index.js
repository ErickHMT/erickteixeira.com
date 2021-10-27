import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './GaleryImage.module.css';

export default function GaleryImage({image, openImageView, title, description}) {

    const openView = (image, title, description) => {
        openImageView(image, title, description);
    }

    return(
        <div onClick={() => openView(image, title, description)} className={styles.galeryImageContainer}>
            <div className={styles.imageContent}>
                <div className={styles.textContent}>
                    <p>{ title }</p>
                </div>
            </div>
            <Image src={image} placeholder="blur" width={500} height={500} layout="intrinsic" objectFit="cover" />
        </div>
    );
}