import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Feedback/Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={styles.container}>
    {options.map(option => (
      <button
        key={option}
        className={styles.button}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
