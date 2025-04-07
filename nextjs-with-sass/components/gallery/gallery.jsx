'use client';

import React from 'react';
import Link from 'next/link';
import styles from './gallery.module.scss';

export default function Gallery() {
    return (
        <div className={styles.gallery__container}>
            <img
                src="/img3.png"
                alt="Park 2"
                width={296}
                height={447}
                className={styles.img}
            />
            <img
                src="/img4.png"
                alt="Park 3"
                width={296}
                height={447}
                className={styles.img}
            />
            <img
                src="/img5.png"
                alt="Park 4"
                width={296}
                height={447}
                className={styles.img}
            />
        </div>
    )
}