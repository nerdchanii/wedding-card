import React from 'react';
import propTypes from 'prop-types';

function Role({ role, name, className, ...props }) {
  return (
    <p className={className}>
      <span>{role}</span>
      <span>{name}</span>
    </p>
  );
}

export default Role;

Role.propTypes = {
  role: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
};
