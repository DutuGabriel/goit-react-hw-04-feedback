import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section style={{ marginBottom: '20px', textAlign: 'center' }}>
    <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
