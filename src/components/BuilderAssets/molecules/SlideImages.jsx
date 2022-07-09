import React from 'react';
import Image from '../atom/Image';
import './slide.css';
const Slide = ({ className, images, ...props }) => {
  return (
    <div
      className={className ? 'slide'.concat(' ', className).trim() : 'slide'}
      {...props}
    >
      <div className="container">
        {images.map((image, idx) => {
          return (
            <Image
              src={image.src}
              alt={image.alt}
              key={idx}
              className={'slide-images'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
