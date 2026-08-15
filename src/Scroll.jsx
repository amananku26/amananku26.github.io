import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styles from './scroll.module.css';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.pageYOffset > 400);
    };

    if (typeof window === 'undefined') return undefined;

    window.addEventListener('scroll', checkScrollTop, { passive: true });
    checkScrollTop();

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const scrollTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FaArrowCircleUp
      className={styles.scrollTop}
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
    />
  );
};

export default ScrollArrow;
