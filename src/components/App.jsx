import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleReaction = reaction => {
    this.setState(state => ({ ...state, [reaction]: ++state[reaction] }));
  };

  countTotalFeedback = () => {
    let result = 0;

    for (const property in this.state) {
      result += this.state[property];
    }

    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const totalReaction = this.countTotalFeedback();

    if (!totalReaction) return 0;

    return (100 * this.state.good) / totalReaction;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 20,
          color: '#010101',
          padding: '1rem',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleReaction}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title="Statistics">
          <div>
            {!totalFeedback ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={totalFeedback}
                positivePercentage={positiveFeedbackPercentage}
              />
            )}
          </div>
        </Section>
      </div>
    );
  }
}

export { App };
