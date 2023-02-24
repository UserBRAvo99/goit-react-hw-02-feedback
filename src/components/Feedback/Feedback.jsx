import React from "react";

import scss from '../Feedback/feedback.module.scss'

class Feedback extends React.Component {

    //  state - властивість екземпляра, не потребує конструктора(в реакті)
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

 
// в event приходить кросс-браузерна обгортка реакта(але на ньому є таргет і всі інші властивості)
    eventGood = (event) => {
        // метод setState() - оновлюю потрібне значення state
        //  аргумент який отримує setState (в данному випадку колбек функцію, яка в свою чергу отримує prevState - тобто попередне значення state.good )
        this.setState((prevState) => {
            return {
                good: prevState.good + 1
            }
        })
    }
    eventNeutral = (event) => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1
            }
        })
    }
    eventBad = (event) =>  {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1
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
        return (
            <div>
                <h2>Please leave feedback</h2>
                <div>
                    <button type="button" onClick={this.eventGood}>Good</button>
                    <button type="button" onClick={this.eventNeutral}>Neutral</button>
                    <button type="button" onClick={this.eventBad}>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {positiveFeedback}</li>
                </ul>
                </div>
            </div>
            
        )
    }
}


export default Feedback