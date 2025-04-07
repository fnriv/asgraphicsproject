'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Title() {
    return (
        <div className="title__container">
            <h1>Hello title</h1>
            <img
                src="/img2.png"
                alt="Image"
                width={500}
                height={500}
                className="title__image"
            />
            
        </div>
    )
}