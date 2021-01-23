import React from "react";

import Ask from "./ask";

const Asks = () => {
    return (
        <div className="asksAccordion">
            <Ask
                ask="How many team members can I invite?
"
                response="You can invite up to 2 additional users on the Free plan. There is no limit on 
team members for the Premium plan."
            />
        </div>
    );
};

export default Asks;
