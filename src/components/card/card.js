import React, { useEffect, useState } from 'react';

import Illustration from '../illustration/illustration';
import IllustrationDeskop from '../illustration/illustrationDeskop';
import Questions from '../questions/asks';

function Card() {
    const [isMobile, setIsMobile] = useState();
    const [cardHeight, setcardHeight] = useState();

    // window.addEventListener('onresize', console.log(window.innerWidth));
    // const illustration = useRef(null);
    // const card = useRef(null);
    // illustration.current =
    //     window.innerWidth < 800 ? <Illustration /> : <IllustrationDeskop />;

    useEffect(() => {
        if (!isMobile) {
            const card = document.querySelector('.card');
            const cardResizeObserver = new ResizeObserver(
                (card) => setcardHeight(card[0].borderBoxSize[0].blockSize)
                // console.log(card[0].borderBoxSize[0].blockSize)
            );
            cardResizeObserver.observe(card);
            return () => cardResizeObserver.unobserve(card);
        }
    }, [isMobile]);

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            isMobileHandler(e);
        });
        // illustration.current = isMobile ? (
        //     <Illustration />
        // ) : (
        //     <IllustrationDeskop cardHeight={cardHeight} />
        // );

        return window.removeEventListener('resize', isMobileHandler);
    }, [isMobile]);

    const isMobileHandler = (e) => {
        if (e.currentTarget.innerWidth < 800) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    const illustration = isMobile ? (
        <Illustration />
    ) : (
        <IllustrationDeskop cardHeight={cardHeight} />
    );
    return (
        <div className="card">
            {illustration}
            <div className="content">
                <h1>FAQ</h1>
                <Questions />
            </div>
        </div>
    );
}

export default Card;
