import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div style={{ display: 'flex', gap: '10px' }}>
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
