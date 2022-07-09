import React from 'react';
import Image from '../atom/Image';
import './gallery.css';
function Type1({ images, ...props }) {
  //
  // 3x3 -> 1
  // 4x4 -> 1
  return (
    <div className="gallery">
      <div className="gallery-container">
        {images.map(({ src, alt }, idx) => (
          <Image
            key={idx * Math.random()}
            src={src}
            alt={alt}
            className={'gallery-item--1x1'}
            onClick={(e) => {
              console.log('click');
              e.target.classList.toggle('gallery-item--full');
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Type2({ images, ...props }) {
  //
  // 3x3 -> 1
  // 4x4 -> 1
  return (
    <div className="gallery">
      <div className="gallery-container">
        {images.map(({ src, alt }, idx) => (
          <Image
            key={idx * Math.random()}
            src={src}
            alt={alt}
            className={idx === 0 ? 'gallery-item--2x2' : 'gallery-item--1x1'}
            onClick={(e) => {
              console.log('click');
              e.target.classList.toggle('gallery-item--full');
            }}
          />
        ))}
      </div>
    </div>
  );
}
function Type3({ images, ...props }) {
  //
  // 3x3 -> 1
  // 4x4 -> 1
  return (
    <div className="gallery">
      <div className="gallery-container">
        {images.map(({ src, alt }, idx) => (
          <Image
            key={idx * Math.random()}
            src={src}
            alt={alt}
            className={idx === 0 ? 'gallery-item--2x2' : 'gallery-item--1x1'}
            onClick={(e) => {
              console.log('click');
              e.target.classList.toggle('gallery-item--full');
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default { Type1, Type2, Type3 };
