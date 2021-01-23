import React from "react";

import Illustration from "../illustration/illustration";
import Questions from "../questions/asks";

function card() {
    return (
        <div className="card">
            <Illustration />
            <div className="content">
                <h1>FAQ</h1>
                <Questions />
            </div>
        </div>
    );
}

export default card;
