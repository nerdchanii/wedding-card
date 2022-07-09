import React from 'react';
import '../design/css/Atom.css';

function Button({ onclick, className, children, ...props }) {
  return (
    <button onClick={onclick} className={className}>
      {children}
    </button>
  );
}

export default Button;
