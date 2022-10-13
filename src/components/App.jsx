import React, { Component } from 'react';
import Section from './Section';
import Statistic from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedbackState = el => {
    this.setState(prevState => ({ [el]: prevState[el] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const countPositiveFeedback = Math.round((good / total) * 100);

    return countPositiveFeedback ? countPositiveFeedback : 0;
  }

  render() {
    const totalCount = this.countTotalFeedback();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateFeedbackState}
          />
        </Section>
        <Section title={'Statistic'}>
          {totalCount ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalCount}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
