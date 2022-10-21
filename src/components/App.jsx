import { useState, useEffect } from 'react';
import Section from './Section';
import Statistic from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [posPercent, setPosPercent] = useState(0);

  function updateFeedbackState(el) {
    switch (el) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    setTotalCount(good + neutral + bad);
    setPosPercent(Math.round((good / totalCount) * 100));
  }, [good, neutral, bad, totalCount]);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={updateFeedbackState}
        />
      </Section>
      <Section title={'Statistic'}>
        {totalCount ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positivePercentage={posPercent}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
