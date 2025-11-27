import { useState, useEffect } from 'react';

export function useAnimatedCounter(target: string, duration: number = 2000) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // If the target is not a number (like "5+"), return it as is
    if (isNaN(parseInt(target))) {
      setCount(target as any);
      return;
    }
    
    const targetNumber = parseInt(target);
    const increment = targetNumber / (duration / 16); // 16ms per frame (~60fps)
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration]);
  
  return count;
}