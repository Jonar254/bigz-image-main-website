import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToHashTarget = (hash) => {
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => scrollToHashTarget(hash), 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo({
      top: 0,
      behavior: 'instant' in window ? 'instant' : 'auto',
    });
    return undefined;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
