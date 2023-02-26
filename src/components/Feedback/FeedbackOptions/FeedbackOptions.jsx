import React from "react";

import scss from './feedbackOptions.module.scss'

function FeedbackOptions({options, onLeaveFeedback}) { 
    return ( 
        options.map((name, index) => {
            return (
                    <button className={scss.btn} key={index+1} name={name} type="button" onClick={onLeaveFeedback}>
                        {name}
                    </button>
            )
        })
        
    )
}

export default FeedbackOptions