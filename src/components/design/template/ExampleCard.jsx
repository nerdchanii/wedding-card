import React from 'react';
import Card from '../molecules/Card';

function ExampleCard() {
  // api call
  const data = {
    id: 1,
    title: '알콩💟달콩',
    image: {
      src: 'https://via.placeholder.com/300x200',
      alt: 'placeholder',
    },
  };
  return <Card data={data} />;
}

export default ExampleCard;
