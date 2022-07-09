import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../Img';
import Text from '../Text';
import './Card.css';

function Card({ data, ...props }) {
  const { id, title, image } = data;
  return (
    <div className="Card--container">
      <Img src={image.src} alt={image.alt} className={'Card--image'} />
      <Text className="Card--text">
        <Link to={`/example/${id}`}>{title}</Link>
      </Text>
    </div>
  );
}

export default Card;
