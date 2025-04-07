'use client';

import React from 'react';
import Link from 'next/link';
import localFont from 'next/font/local'
import styles from './nav.module.scss';

const myFont = localFont({
    src: '../../public/fonts/Graphik/Graphik_Family/Graphik-Black-Trial.otf',
    display: 'swap',
    preload: true,
})

export default function Nav() {
    return (
        <nav className={`navbar ${myFont.className}`}>
            <div className={styles.navbar__container}>
                <Link href="/" className="navbar__logo">
                    LOREM IPSUM
                </Link>
                <ul className={styles.navbar__links}>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/contact">CONTACT</Link>
                    </li>
                    <li>
                        <Link href="/work">WORK</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}