import React from 'react';

function Text({ children, className, ...props }) {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
}

export default Text;
