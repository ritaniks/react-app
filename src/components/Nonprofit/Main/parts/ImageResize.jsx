import React from 'react';
import PropTypes from 'prop-types';

const ImageResize = ({ path }) => {
  return (
    <picture>
      <source media="(min-width: 1600px)" srcSet={path[1]} />
      <source media="(min-width: 768px)" srcSet={path[0]} />
      <img
        src={path[2]}
        alt={path[2]}
        style={{ maxWidth: '100%' }}
        srcSet={path[3]}
      />
    </picture>
  );
};

ImageResize.propTypes = {
  path: PropTypes.array.isRequired,
};

export default ImageResize;
