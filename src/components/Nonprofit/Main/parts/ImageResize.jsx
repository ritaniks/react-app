import React from 'react';
import PropTypes from 'prop-types';

const ImageResize = ({ path }) => {
  return (
    <picture>
      <source media="(min-width: 1200px)" sizes="50vw" srcSet={path[1]} />
      <source media="(min-width: 992px)" srcSet={path[0]} />
      <img
        src={path[2]}
        alt={path[0]}
        srcSet={path[3]}
        style={{ width: ' 100%' }}
      />
    </picture>
  );
};

ImageResize.propTypes = {
  path: PropTypes.arrayOf().isRequired,
};

export default ImageResize;
