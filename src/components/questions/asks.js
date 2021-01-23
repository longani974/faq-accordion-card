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
            <Ask
                ask="What is the maximum file upload size?
"
                response="No more than 2GB. All files in your account must fit your allotted storage space.
"
            />
            <Ask
                ask="How do I reset my password?
"
                response="Click “Forgot password” from the login page or “Change password” from your profile page.
A reset link will be emailed to you."
            />
            <Ask
                ask="Can I cancel my subscription?
"
                response="Yes! Send us a message and we’ll process your request no questions asked.
"
            />
            <Ask
                ask="Do you provide additional support?
"
                response="Chat and email support is available 24/7. Phone lines are open during normal business hours.
"
            />
        </div>
    );
};

export default Asks;
