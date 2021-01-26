import React, { useEffect, useRef, useState } from 'react';

import Illustration from '../illustration/illustration';
import IllustrationDeskop from '../illustration/illustrationDeskop';
import Questions from '../questions/asks';

import box from '../../assets/images/illustration-box-desktop.svg';

function Card() {
    const [isMobile, setIsMobile] = useState();

    // window.addEventListener('onresize', console.log(window.innerWidth));
    const illustration = useRef(null);
    illustration.current =
        window.innerWidth < 800 ? <Illustration /> : <IllustrationDeskop />;

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            isMobileHandler(e);
        });

        illustration.current = isMobile ? (
            <Illustration />
        ) : (
            <IllustrationDeskop />
        );

        return window.removeEventListener('resize', isMobileHandler);
    }, [isMobile]);

    const isMobileHandler = (e) => {
        if (e.currentTarget.innerWidth < 800) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    return (
        <div className="card">
            {illustration.current}
            <div className="content">
                <h1>FAQ</h1>
                <Questions />
            </div>
        </div>
    );
}

export default Card;
