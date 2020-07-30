import React from 'react';
import PropTypes from 'prop-types';

const ErrorPage = ({ message }) => {
  return <p>{message} Error Page</p>;
};

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorPage;
