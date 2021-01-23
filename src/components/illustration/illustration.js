import React, { useState, useEffect } from 'react';

import woman from '../../assets/images/illustration-woman-online-mobile.svg';
import bgMobile from '../../assets/images/bg-pattern-mobile.svg';

import styles from './illustration.module.css';

const Illustration = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
            // console.log(scrollPosition);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div
            style={{ '--parallax': scrollPosition / 8 + 'px' }}
            className={`illustration ${styles.container}`}
        >
            <div className={styles.woman}>
                <img src={woman} alt="" />
            </div>
            <div className={styles.shadow}>
                <img src={bgMobile} alt="" />
            </div>
        </div>
    );
};

export default Illustration;
