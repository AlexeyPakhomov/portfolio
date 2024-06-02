import { useEffect, useState } from 'react';

const useScroll = () => {
  const [height, setHeight] = useState(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setHeight(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return height;
};

export default useScroll;
