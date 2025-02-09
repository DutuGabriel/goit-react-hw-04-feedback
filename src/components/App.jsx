import React, { useState, useMemo } from 'react';
import Feedback from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setFeedback(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const totalFeedback = useMemo(
    () => feedback.good + feedback.neutral + feedback.bad,
    [feedback]
  );
  const positivePercentage = useMemo(
    () =>
      totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0,
    [feedback.good, totalFeedback]
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
