import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ children }) => (
  <h1>This is example. So say: {children}</h1>
);

Example.defaultProps = {
  children: '',
};

Example.propTypes = {
  children: PropTypes.string,
};

export default Example;
