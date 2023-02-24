import React from "react";

function FeedbackOptions({options, onLeaveFeedback}) { 
    return (
        options.map((name, index) => {
            return (
                    <button key={index+1} name={name} type="button" onClick={onLeaveFeedback}>
                        {name}
                    </button>
            )
        })
        
    )
}

export default FeedbackOptions