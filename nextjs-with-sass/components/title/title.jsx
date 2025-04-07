'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './title.module.scss';

export default function Title() {
    return (
        <div className={styles.title__container}>
            <img
                src="/img2.png"
                alt="Image"
                // width={500}
                // height={500}
                className="title__image"
            />
            <div className={styles.title__text}> Lorem Ipsum </div>
        </div>
    )
}