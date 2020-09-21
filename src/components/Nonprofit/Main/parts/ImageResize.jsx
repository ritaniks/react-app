import React from 'react';
import PropTypes from 'prop-types';

const ImageResize = ({ path }) => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={`${path[0]}, ${path[1]} 2x`} />
      <img
        src={path[2]}
        alt={path[0]}
        srcSet={`${path[2]}, ${path[3]} 2x`}
        style={{ width: ' 100%' }}
      />
    </picture>
  );
};

ImageResize.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ImageResize;
