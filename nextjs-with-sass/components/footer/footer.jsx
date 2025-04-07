'use client';

import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <nav className="footer">
            <div className={styles.footer__container}>
                <Link href="/" className={styles.footer__logo}>
                    Made with ♡ by AS Graphic Studio
                </Link>
                <ul className={styles.footer__links}>
                    <li>
                        <Link href="/email">EMAIL</Link>
                    </li>
                    <li>
                        <Link href="/resume">RESUME</Link>
                    </li>
                    <li>
                        <Link href="/facebook">FACEBOOK</Link>
                    </li>
                    <li>
                        <Link href="/linkedin">LINKEDIN</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}