import { useState, useEffect } from 'react';

function useOnScreen(options) {
  const [visible, setVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, visible];
}

export default useOnScreen;
