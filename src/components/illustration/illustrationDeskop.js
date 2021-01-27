import React from 'react';

import box from '../../assets/images/illustration-box-desktop.svg';
import * as styles from './illustrationDeskop.module.css';

const IllustrationDeskop = (props) => {
    return (
        <div className={styles.illustrationWrapper}>
            <div className={styles.womanWrapper}>
                <div className={styles.woman}></div>
                <div
                    className={styles.shadow}
                    style={{
                        '--parallax': `${(props.cardHeight - 450) / 1.8}px`,
                    }}
                ></div>
            </div>
            <div className={styles.box}>
                <img src={box} alt="" />
            </div>
        </div>
    );
};

export default IllustrationDeskop;
