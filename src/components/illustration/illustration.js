import React, { useState, useEffect } from 'react';

import woman from '../../assets/images/illustration-woman-online-mobile.svg';
import bgMobile from '../../assets/images/bg-pattern-mobile.svg';

import styles from './illustration.module.css';

import { parallax } from '../../utils';

const Illustration = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        parallax(6, 35, setScrollPosition);
    }, []);

    return (
        <div
            style={{ '--parallax': scrollPosition + 'px' }}
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
