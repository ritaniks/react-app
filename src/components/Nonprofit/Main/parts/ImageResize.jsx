import React from 'react';
import PropTypes from 'prop-types';

const ImageResize = ({ path }) => {
  return (
    <picture>
      <source media="(min-width: 1200px)" sizes="50vw" srcSet={path[1]} />
      <source media="(min-width: 992px)" srcSet={path[0]} />
      <img src={path[3]} alt={path[0]} style={{ width: ' 100%' }} />
    </picture>
  );
};

ImageResize.propTypes = {
  path: PropTypes.array.isRequired,
};

export default ImageResize;