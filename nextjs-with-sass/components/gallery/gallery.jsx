'use client';

import React from 'react';
import Link from 'next/link';

export default function Gallery() {
    return (
        <div className="gallery__container">
            <h1>Hello gallery</h1>
            <img
                src="/img3.png"
                alt="Image"
                width={500}
                height={500}
                className="title__image"
            />
            <img
                src="/img4.png"
                alt="Image"
                width={500}
                height={500}
                className="title__image"
            />
            <img
                src="/img5.png"
                alt="Image"
                width={500}
                height={500}
                className="title__image"
            />
        </div>
    )
}