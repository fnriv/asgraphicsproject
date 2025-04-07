'use client';

import React from 'react';
import Link from 'next/link';

export default function ParkDescriptions() {
    return (
        <div className="parkdescriptions__container">
            <div className='park_container'>
                <h1>Park 1</h1>
                <p>Description of Park 1</p>
            </div>
            <div className='park_container'>
                <h1>Park 2</h1>
                <p>Description of Park 2</p>
            </div>
            <div className='park_container'>
                <h1>Park 3</h1>
                <p>Description of Park 3</p>
            </div>
            <div className='park_container'>
                <h1>Park 4</h1>
                <p>Description of Park 4</p>
            </div>
        </div>
    )
}