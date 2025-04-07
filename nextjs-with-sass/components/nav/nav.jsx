'use client';

import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link href="/" className="navbar__logo">
                    Lorem Ipsum
                </Link>
                <ul className="navbar__links">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/work">Work</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}