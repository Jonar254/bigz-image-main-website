import { useEffect, useState } from 'react';

/**
 * Returns scroll-progress (0..1) for a section as it passes through
 * the configured start/end viewport thresholds.
 */
const useScrollProgress = (sectionRef, { startVh = 0.8, endVh = 0.1 } = {}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const computeProgress = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const start = winH * startVh;
      const end = winH * endVh;
      const t = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setProgress(t);
    };
    computeProgress();
    window.addEventListener('scroll', computeProgress, { passive: true });
    return () => window.removeEventListener('scroll', computeProgress);
  }, [sectionRef, startVh, endVh]);

  return progress;
};

export default useScrollProgress;
