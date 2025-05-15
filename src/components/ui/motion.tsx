import React from 'react';

interface MotionProps {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  children: React.ReactNode;
  className?: string;
}

export const motion: React.FC<MotionProps> = ({ 
  children, 
  initial, 
  animate, 
  transition, 
  className = '' 
}) => {
  // Simple implementation of motion effects using CSS transitions
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  const getStyles = () => {
    if (!isVisible) {
      return {
        opacity: initial?.opacity ?? 1,
        transform: `translateX(${initial?.x ?? 0}px) translateY(${initial?.y ?? 0}px)`,
      };
    }
    
    return {
      opacity: animate?.opacity ?? 1,
      transform: `translateX(${animate?.x ?? 0}px) translateY(${animate?.y ?? 0}px)`,
      transition: `all ${transition?.duration ?? 0.3}s ${transition?.delay ? `${transition.delay}s` : '0s'} ease-out`,
    };
  };

  return (
    <div 
      ref={ref}
      className={className}
      style={getStyles()}
    >
      {children}
    </div>
  );
};

import { motion } from 'framer-motion';