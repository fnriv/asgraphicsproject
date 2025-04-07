'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <nav className="footer">
            <div className="footer__container">
                <Link href="/" className="footer__logo">
                    Made with love by AS Graphic Studio
                </Link>
                <ul className="footer__links">
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