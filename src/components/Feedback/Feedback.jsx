import React from "react";



import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";

import scss from '../Feedback/feedback.module.scss'

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    eventBtn = (event) => {
        const { name } = event.target;
        this.setState((prevState) => {
            return {
                [name]: prevState[name] + 1
            }
        })
    }

    countTotalFeedback = () => {
            return  this.state.bad + this.state.neutral + this.state.good
    }
    countPositiveFeedbackPercentage = () => {
        return `${Math.round((this.state.good * 100) / this.countTotalFeedback())}%`
    }
    

    render() {
        const total = this.countTotalFeedback()
        const positiveFeedback = this.countPositiveFeedbackPercentage()
        const options = Object.keys(this.state)
        return (
            <div>
                {/* <Section title=""> */}
                    <h2>Please leave feedback</h2>
                
                    <FeedbackOptions options={options} onLeaveFeedback={this.eventBtn} />
                
                    <h2>Statistics</h2>
                
                    {total > 0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positiveFeedback={positiveFeedback} /> : <Notification message="There is no feedback"></Notification> }
                {/* </Section> */}
            </div>
            
        )
    }
}


export default Feedback