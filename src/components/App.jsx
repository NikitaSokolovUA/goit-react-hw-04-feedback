import React, { Component } from "react";
import Statistic from "./Statistic";
import FeedbackOptions from "./FeedbackOptions";


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  

  updateFeedbackState= (el) => {
    this.setState(prevState => ({ [el]: prevState[el] + 1 }))
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state
    const total = this.countTotalFeedback()
    const  countPositiveFeedback = Math.round(good / total * 100)

    return countPositiveFeedback ? countPositiveFeedback : 0 

    
  }



  render() {
    const { good, neutral, bad } = this.state
    

    return <>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={this.updateFeedbackState} />
      <Statistic good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={ this.countPositiveFeedbackPercentage()} />
    </>
  }
}

export default App