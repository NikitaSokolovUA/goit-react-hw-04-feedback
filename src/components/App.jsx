import { useState } from 'react';
import Section from './Section';
import Statistic from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedbackState(el) {
    setFeedback(prevState => ({ ...prevState, [el]: prevState[el] + 1 }));
  }

  function getTotalCount() {
    return Object.values(feedback).reduce((prev, number) => {
      return prev + number;
    }, 0);
  }

  function getPositiveFedbackPercent() {
    return Math.round((feedback.good / getTotalCount()) * 100);
  }

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={updateFeedbackState}
        />
      </Section>
      <Section title={'Statistic'}>
        {getTotalCount() ? (
          <Statistic
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={getTotalCount()}
            positivePercentage={getPositiveFedbackPercent()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
