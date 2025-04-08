'use client';
import { useEffect, useState } from 'react';
import styles from './parkdescriptions.module.scss';

const items = [
  { title: 'Yosemite', content: 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Aliquam sit amet sollicitudin est. Suspendisse potenti. Donec porttitor tempor pulvinar. Sed congue elementum placerat. Maecenas nec rhoncus est. ' },
  { title: 'El Capitan', content: 'Mauris vel nisl ante. Vivamus sagittis ullamcorper quam, sit amet tincidunt enim sollicitudin ut. Vestibulum at elementum leo. Aliquam erat volutpat. Nullam magna orci, accumsan at arcu lobortis, volutpat cursus nisl. Suspendisse metus purus, gravida vehicula eros in, malesuada posuere magna.' },
  { title: 'High Sierra', content: 'Nulla ac dolor nibh. Vestibulum feugiat convallis posuere. Pellentesque vestibulum eleifend turpis vel consequat. Cras tempor turpis in nunc finibus sollicitudin. Morbi malesuada sodales urna, quis pulvinar nunc interdum ultrices. Nullam id risus velit. Ut fringilla eleifend mollis. Phasellus in dui tellus. Nam euismod mattis quam porttitor ornare.' },
  { title: 'Mojave', content: 'Integer tempor enim lacus, sit amet dapibus diam elementum et. Pellentesque congue libero id enim dignissim consequat. Fusce et sagittis magna, in feugiat felis. Sed volutpat, risus id ultricies blandit, arcu elit consectetur tellus, laoreet ornare purus nulla in ipsum. Praesent ac augue vitae turpis ullamcorper hendrerit eleifend in odio.' },
];

export default function ParkDescriptions() {
    const [isMobile, setIsMobile] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
  
    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);
  
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className={isMobile ? styles.mobileLayout : styles.desktopLayout}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <button
              className={styles.accordionHeader}
              onClick={() => isMobile && toggleAccordion(i)}
            >
              {item.title}
            </button>
            <div
              className={`${styles.accordionContent} ${
                !isMobile || openIndex === i ? styles.show : ''
              }`}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }