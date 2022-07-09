import React from 'react';
import propTypes from 'prop-types';

//depend on Component
import Image from '../atom/Image';
import Role from '../atom/Role';

// css
import './person.css';

const Circle = ({ className, family, src, alt, ...props }) => {
  return (
    <div
      className={
        className ? 'pseron--container '.concat(className) : 'person--container'
      }
    >
      <Image src={src} alt={alt} style={{ borderRadius: '50%' }} />
      {family.map(({ role, name }, idx) => {
        return <Role role={role} name={name} key={idx} />;
      })}
    </div>
  );
};

const Rectagle = ({ className, family, src, alt, ...props }) => {
  return (
    <div
      className={
        className ? 'pseron--container '.concat(className) : 'person--container'
      }
    >
      <Image src={src} alt={alt} />
      {family.map(({ role, name }, idx) => {
        return <Role role={role} name={name} key={idx} />;
      })}
    </div>
  );
};

const RoundedRectangle = ({ className, family, src, alt, ...props }) => {
  // need to add rounded logic
  return (
    <div
      className={
        className ? 'pseron--container '.concat(className) : 'person--container'
      }
    >
      <Image src={src} alt={alt} style={{ borderRadius: '20%' }} />
      {family.map(({ role, name }, idx) => {
        return <Role role={role} name={name} key={idx} />;
      })}
    </div>
  );
};

export default { Circle, Rectagle, RoundedRectangle };

const personPropTypes = {
  className: propTypes.string,
  src: propTypes.string.isRequired,
  alt: propTypes.string,
  family: propTypes.arrayOf(
    propTypes.shape({
      role: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
};

RoundedRectangle.propTypes = personPropTypes;
Circle.propTypes = personPropTypes;
Rectagle.propTypes = personPropTypes;
