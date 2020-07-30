import React from 'react';
import PropTypes from 'prop-types';

const ErrorPage = ({ message }) => {
  return <h2>{message} Error Page</h2>;
};

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorPage;
