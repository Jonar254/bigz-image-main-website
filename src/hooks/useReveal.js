import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll hook. Returns a ref to attach and an `inView` boolean.
 * The IntersectionObserver disconnects after the element first enters view.
 */
const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

export default useReveal;
