import { useState, useEffect } from 'react';

export function useSize() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
      const hendleResize = () => {
        setWindowSize(window.innerWidth);
      };
      const time = () => {
        setTimeout(hendleResize, 5000)
      } 
      window.addEventListener("resize", time);
      return () => {
        window.removeEventListener("resize", time);
      }
    }, [])
    return windowSize
  }