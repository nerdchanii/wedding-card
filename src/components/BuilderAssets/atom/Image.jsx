import React from 'react';
import propTypes from 'prop-types';

function Image({ src, alt, className, ...props }) {
  return <img src={src} alt={alt} className={className} {...props} />;
}

export default Image;

Image.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string,
  className: propTypes.string,
};

Image.defaultProps = {
  alt: '',
  className: '',
  src: 'https://via.placeholder.com/150',
};
