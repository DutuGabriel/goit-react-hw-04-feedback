import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <p style={{ fontSize: '18px', color: '#666' }}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
