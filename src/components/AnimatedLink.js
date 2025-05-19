import React from 'react';
import { Link } from 'react-router-dom';

const AnimatedLink = ({ to, children, className, onClick, external }) => {
  const combinedClassName = `animated-underline ai-pointer ${className || ''}`;
  
  if (external) {
    return (
      <a 
        href={to}
        className={combinedClassName}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      to={to}
      className={combinedClassName}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink; 