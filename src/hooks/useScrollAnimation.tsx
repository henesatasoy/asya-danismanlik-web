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

export const useStaggeredAnimation = (delay: number = 0, animationType: string = 'fade-in') => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return {
    elementRef,
    className: isVisible 
      ? `animate-${animationType}` 
      : 'opacity-0 translate-y-10',
    style: {
      animationDelay: isVisible ? `${delay}ms` : '0ms',
      animationFillMode: 'both'
    }
  };
};

// Farklı efekt türleri için yardımcı fonksiyonlar
export const useSlideLeftAnimation = (delay: number = 0) => useStaggeredAnimation(delay, 'slide-left');
export const useSlideRightAnimation = (delay: number = 0) => useStaggeredAnimation(delay, 'slide-right');
export const useScaleInAnimation = (delay: number = 0) => useStaggeredAnimation(delay, 'scale-in');
export const useRotateInAnimation = (delay: number = 0) => useStaggeredAnimation(delay, 'rotate-in');
export const useZoomInAnimation = (delay: number = 0) => useStaggeredAnimation(delay, 'zoom-in');
export const useFlipInAnimation = (delay: number = 0) => useStaggeredAnimation(delay, 'flip-in');
export const useElasticAnimation = (delay: number = 0) => useStaggeredAnimation(delay, 'elastic');