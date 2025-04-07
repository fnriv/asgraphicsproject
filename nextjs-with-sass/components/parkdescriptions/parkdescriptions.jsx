'use client';

import React from 'react';
import Link from 'next/link';
import styles from './parkdescriptions.module.scss';

export default function ParkDescriptions() {
    return (
        <div className={styles.park__container}>
            <div className={styles.park}>
                <h1 className={styles.park__heading}>Yosemite</h1>
                <p className={styles.park__paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. 
                    Nullam gravida eu elit at rutrum. Aliquam sit amet sollicitudin est. Suspendisse potenti. 
                    Donec porttitor tempor pulvinar. Sed congue elementum placerat. Maecenas nec rhoncus est. 
                </p>
            </div>
            <div className={styles.park}>
                <h1 className={styles.park__heading}>El Capitan</h1>
                <p className={styles.park__paragraph}>
                    Mauris vel nisl ante. Vivamus sagittis ullamcorper quam, sit amet tincidunt enim sollicitudin ut. 
                    Vestibulum at elementum leo. Aliquam erat volutpat. Nullam magna orci, accumsan at arcu lobortis, 
                    volutpat cursus nisl. Suspendisse metus purus, gravida vehicula eros in, malesuada posuere magna.
                </p>
            </div>
            <div className={styles.park}>
                <h1 className={styles.park__heading}>High Sierra</h1>
                <p className={styles.park__paragraph}>
                    Nulla ac dolor nibh. Vestibulum feugiat convallis posuere. Pellentesque vestibulum eleifend turpis 
                    vel consequat. Cras tempor turpis in nunc finibus sollicitudin. Morbi malesuada sodales urna, 
                    quis pulvinar nunc interdum ultrices. Nullam id risus velit. Ut fringilla eleifend mollis. 
                    Phasellus in dui tellus. Nam euismod mattis quam porttitor ornare.
                </p>
            </div>
            <div className={styles.park}>
                <h1 className={styles.park__heading}>Mojave</h1>
                <p className={styles.park__paragraph}>
                    Integer tempor enim lacus, sit amet dapibus diam elementum et. Pellentesque congue libero id enim dignissim consequat. 
                    Fusce et sagittis magna, in feugiat felis. Sed volutpat, risus id ultricies blandit, arcu elit consectetur tellus, 
                    laoreet ornare purus nulla in ipsum. Praesent ac augue vitae turpis ullamcorper hendrerit eleifend in odio.
                </p>
            </div>
        </div>
    )
}