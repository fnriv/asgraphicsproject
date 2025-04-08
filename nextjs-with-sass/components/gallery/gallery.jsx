'use client';

import React from 'react';
import Link from 'next/link';
import styles from './gallery.module.scss';

export default function Gallery() {
    return (
        <div className={styles.gallery__container}>
            <div className={styles.diagonal__container}>
                <img
                    src="/img3.png"
                    alt="Park 2"
                    className={styles.img}
                />
                <img
                    src="/img4.png"
                    alt="Park 3"
                    className={styles.img}
                />
                <img
                    src="/img5.png"
                    alt="Park 4"
                    className={styles.img}
                />
            </div>
            
        </div>
    )
}