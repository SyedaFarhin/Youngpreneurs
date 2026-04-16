import React from 'react';
import Link from 'next/link';

const AnimatedLink = ({ href, children, className, onClick, external }) => {
  const combinedClassName = `animated-underline ai-pointer ${className || ''}`;
  
  if (external) {
    return (
      <a 
        href={href}
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
      href={href}
      className={combinedClassName}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink; 