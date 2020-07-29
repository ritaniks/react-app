import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return <p>{message} Error Page</p>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
