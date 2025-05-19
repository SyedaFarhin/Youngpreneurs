import React, { useState, useEffect } from 'react';
import '../styles/cursor.css';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    // Set up cursor type detection
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, .ai-pointer').forEach(el => {
        el.addEventListener('mouseenter', () => {
          setLinkHovered(true);
          setCursorType('pointer');
        });
        el.addEventListener('mouseleave', () => {
          setLinkHovered(false);
          setCursorType('default');
        });
      });

      document.querySelectorAll('.cursor-help').forEach(el => {
        el.addEventListener('mouseenter', () => setCursorType('help'));
        el.addEventListener('mouseleave', () => setCursorType('default'));
      });

      document.querySelectorAll('.cursor-wait').forEach(el => {
        el.addEventListener('mouseenter', () => setCursorType('wait'));
        el.addEventListener('mouseleave', () => setCursorType('default'));
      });

      document.querySelectorAll('.cursor-not-allowed').forEach(el => {
        el.addEventListener('mouseenter', () => setCursorType('not-allowed'));
        el.addEventListener('mouseleave', () => setCursorType('default'));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  const cursorClasses = `cursor-dot ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'link-hovered' : ''} ${cursorType}`;
  
  const cursorRingClasses = `cursor-ring ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'link-hovered' : ''} ${cursorType}`;

  return (
    <>
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div
        className={cursorRingClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
};

export default CursorEffect; 