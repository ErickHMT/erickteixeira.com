import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './GaleryImage.module.css';

export default function GaleryImage({image, openImageView, title}) {

    return(
        <div onClick={() => openImageView(image)} className={styles.galeryImageContainer}>
            <div className={styles.imageContent}>
                <div className={styles.textContent}>
                    <p>{ title }</p>
                </div>
            </div>
            <Image src={image} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
        </div>
    );
}