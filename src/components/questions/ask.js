import React, { useEffect, useRef, useState } from "react";

import arrowDown from "../../assets/images/icon-arrow-down.svg";

const Ask = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const [resStyle, setResStyle] = useState({
        // visibility: "hidden",
        height: "100%",
    });
    const [rotateArrow, setRotateArrow] = useState({
        transform: "rotate(0deg)",
    });
    const [spacingBottom, setSpacingBottom] = useState({
        paddingBottom: "18px",
    });
    const [spacingBetween, setSpacingBetween] = useState({
        marginBottom: "0px",
    });

    const inner = useRef();

    useEffect(() => {
        // console.log(inner.current.scrollHeight);
        if (isClicked) {
            setResStyle({ height: inner.current.scrollHeight + "px" });
            setRotateArrow({ transform: "rotate(180deg)" });
            setSpacingBottom({ paddingBottom: "16px" });
            setSpacingBetween({ marginBottom: "12px" });
        } else {
            setResStyle({ height: "0" });
            setRotateArrow({ transform: "rotate(0deg)" });
            setSpacingBottom({ paddingBottom: "18px" });
            setSpacingBetween({ marginBottom: "0px" });
        }
    }, [isClicked]);

    const clickHandler = () => {
        setIsClicked((prevState) => !prevState);
    };

    return (
        <div className="askResponse" style={spacingBottom}>
            <div className="askWrapper" style={spacingBetween}>
                <div className="ask">{props.ask}</div>
                <div className="askBtn" style={rotateArrow}>
                    <img src={arrowDown} alt="^" onClick={clickHandler} />
                </div>
            </div>
            <div style={resStyle} className="response" ref={inner}>
                <p>{props.response}</p>
            </div>
        </div>
    );
};

export default Ask;
