import React from 'react';

function Img({ src, alt, className, ...props }) {
  return <img src={src} alt={alt} className={className} {...props} />;
}

export default Img;
