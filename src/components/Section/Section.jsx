import React, { Component } from "react";
import Statistic from "../Statistic";
import FeedbackOptions from "../FeedbackOptions";
import Notification from "../Notification";
import { SectionBox, Title } from "./Section.styled";
import PropTypes from 'prop-types';


class Section extends Component {

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
      const { title } = this.props
      const totalCount =this.countTotalFeedback()
    

      return <>
          <SectionBox>
        <Title>{title}</Title>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.updateFeedbackState} />
          <Title>Statistic</Title>
          { totalCount
              ? <Statistic good={good}
                    neutral={neutral}
                    bad={bad}
                    total={totalCount}
                  positivePercentage={this.countPositiveFeedbackPercentage()} />
              : <Notification message={ "There is no feedback" } />}
        </SectionBox>
    </>
  }
}

export default Section

Section.propTypes = {
    title: PropTypes.string.isRequired,
}