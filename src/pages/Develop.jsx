import React from 'react';
import propTypes from 'prop-types';

import Person from '../components/BuilderAssets/molecules/Person';
import SlideImages from '../components/BuilderAssets/molecules/SlideImages';
import Gallery from '../components/BuilderAssets/molecules/Gallery';

function Develop({ family }) {
  const imgsrc = 'http://via.placeholder.com/150.png';
  const imgtype = { src: imgsrc, alt: 'placeholder' };
  return (
    <div>
      <Person.Circle
        family={family}
        src="http://via.placeholder.com/150.png"
        alt="alt"
      />
      <Person.Rectagle
        family={family}
        src="http://via.placeholder.com/150.png"
        alt="alt"
      />
      <Person.RoundedRectangle
        family={family}
        src="http://via.placeholder.com/150.png"
        alt="alt"
      />
      <p>슬라이더</p>
      <SlideImages
        images={[
          'http://via.placeholder.com/150.png',
          'http://via.placeholder.com/150.png',
          'http://via.placeholder.com/150.png',
          'http://via.placeholder.com/150.png',
          'http://via.placeholder.com/150.png',
          'http://via.placeholder.com/150.png',
        ]}
      />
      <p>갤러리</p>
      <div style={{ display: 'block', width: '500px' }}>
        <Gallery.Type1 images={Array(3).fill(imgtype)} />
        <Gallery.Type2 images={Array(3).fill(imgtype)} />
        <Gallery.Type1 images={Array(3).fill(imgtype)} />
        <Gallery.Type1 images={Array(3).fill(imgtype)} />
        <Gallery.Type2 images={Array(3).fill(imgtype)} />
        <Gallery.Type2 images={Array(3).fill(imgtype)} />
      </div>
    </div>
  );
}

export default Develop;

Develop.propTypes = {
  family: propTypes.arrayOf(
    propTypes.shape({
      role: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
  images: propTypes.arrayOf(
    propTypes.shape({
      src: propTypes.string.isRequired,
      alt: propTypes.string,
    })
  ),
};

Develop.defaultProps = {
  family: [
    { role: 'father', name: 'John' },
    { role: 'mother', name: 'Jane' },
    { role: 'bride', name: 'Mary' },
  ],
};
