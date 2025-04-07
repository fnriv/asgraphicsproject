'use client';

import React from 'react';
import Link from 'next/link';
import styles from './introduction.module.scss';

export default function Introduction() {
    return (
        <div className={styles.intro__container}>
            <div className={styles.heading}>Sed volutpat, risus id ultricies blandit, arcu elit consectetur tellus, 
                laoreet ornare purus nulla in ipsum ac augue vitae turpis.</div>
            <div className={styles.paragraph}>Mauris vel nisl ante. Vivamus sagittis ullamcorper quam, sit amet tincidunt enim sollicitudin ut. 
                Vestibulum at elementum leo. Aliquam erat volutpat. Nullam magna orci, accumsan at arcu lobortis, 
                volutpat cursus nisl. Suspendisse metus purus, gravida vehicula eros in, malesuada posuere magna.</div>
        </div>
    )
}