import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

export const useCrazyAnimation = (delay: number = 0) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  console.log('Crazy animation state:', { isVisible, delay });
  
  return {
    elementRef,
    className: isVisible 
      ? 'animate-matrix-enter' 
      : 'opacity-0 transform translate-y-10',
    style: {
      animationDelay: isVisible ? `${delay}ms` : '0ms',
      animationFillMode: 'both',
      transformStyle: 'preserve-3d' as const,
      transition: 'opacity 0.3s ease'
    }
  };
};

export const useGlitchAnimation = (delay: number = 0) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  console.log('Glitch animation state:', { isVisible, delay });
  
  return {
    elementRef,
    className: isVisible 
      ? 'animate-matrix-enter' 
      : 'opacity-0 transform translate-y-10',
    glitchClass: isVisible ? 'animate-glitch-crazy' : '',
    style: {
      animationDelay: isVisible ? `${delay}ms` : '0ms',
      animationFillMode: 'both',
      transition: 'opacity 0.3s ease'
    }
  };
};

export const useMorphAnimation = (delay: number = 0) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  console.log('Morph animation state:', { isVisible, delay });
  
  return {
    elementRef,
    className: isVisible 
      ? 'animate-morph-wild' 
      : 'opacity-0 transform translate-y-10',
    style: {
      animationDelay: isVisible ? `${delay}ms` : '0ms',
      animationFillMode: 'both',
      transition: 'opacity 0.3s ease'
    }
  };
};