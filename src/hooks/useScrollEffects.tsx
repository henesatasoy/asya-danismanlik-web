import { useEffect, useState, useCallback, useRef } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolling: boolean;
  scrollProgress: number;
  isNearTop: boolean;
  isNearBottom: boolean;
  velocity: number;
}

interface ScrollOptions {
  threshold?: number;
  velocityThreshold?: number;
  debounceMs?: number;
  progressElement?: string;
}

export const useScrollEffects = (options: ScrollOptions = {}) => {
  const {
    threshold = 50,
    velocityThreshold = 5,
    debounceMs = 100,
    progressElement = 'body'
  } = options;

  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolling: false,
    scrollProgress: 0,
    isNearTop: true,
    isNearBottom: false,
    velocity: 0
  });

  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const velocityHistory = useRef<number[]>([]);

  const calculateVelocity = useCallback((currentY: number, timestamp: number) => {
    const deltaY = currentY - lastScrollY.current;
    const deltaTime = timestamp - lastTimestamp.current;
    const velocity = deltaTime > 0 ? Math.abs(deltaY / deltaTime) : 0;
    
    velocityHistory.current.push(velocity);
    if (velocityHistory.current.length > 5) {
      velocityHistory.current.shift();
    }
    
    return velocityHistory.current.reduce((a, b) => a + b, 0) / velocityHistory.current.length;
  }, []);

  const calculateScrollProgress = useCallback(() => {
    const element = document.querySelector(progressElement);
    if (!element) return 0;
    
    const windowHeight = window.innerHeight;
    const documentHeight = element.scrollHeight;
    const scrollTop = window.pageYOffset;
    const trackLength = documentHeight - windowHeight;
    
    return trackLength > 0 ? (scrollTop / trackLength) * 100 : 0;
  }, [progressElement]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset;
    const timestamp = Date.now();
    const velocity = calculateVelocity(currentScrollY, timestamp);
    const progress = calculateScrollProgress();
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const direction = currentScrollY > lastScrollY.current ? 'down' : 
                     currentScrollY < lastScrollY.current ? 'up' : null;

    setScrollState({
      scrollY: currentScrollY,
      scrollDirection: direction,
      isScrolling: true,
      scrollProgress: progress,
      isNearTop: currentScrollY < threshold,
      isNearBottom: currentScrollY > documentHeight - windowHeight - threshold,
      velocity
    });

    lastScrollY.current = currentScrollY;
    lastTimestamp.current = timestamp;

    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Set new timeout to detect scroll end
    scrollTimeout.current = setTimeout(() => {
      setScrollState(prev => ({ ...prev, isScrolling: false }));
    }, debounceMs);
  }, [threshold, debounceMs, calculateVelocity, calculateScrollProgress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  // Scroll to functions with easing
  const scrollToTop = useCallback((duration = 1000) => {
    const start = window.pageYOffset;
    const startTime = Date.now();

    const animateScroll = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic easing out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentPosition = start * (1 - easeOut);
      
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  const scrollToElement = useCallback((elementId: string, offset = 0, duration = 1000) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const start = window.pageYOffset;
    const target = element.offsetTop - offset;
    const distance = target - start;
    const startTime = Date.now();

    const animateScroll = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic easing in-out
      const easeInOut = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      const currentPosition = start + distance * easeInOut;
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return {
    ...scrollState,
    scrollToTop,
    scrollToElement,
    isHighVelocity: scrollState.velocity > velocityThreshold
  };
};

// Hook for intersection observer with scroll-based animations
export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, hasAnimated]);

  return { elementRef, isVisible, hasAnimated };
};

// Hook for parallax effects
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      
      setOffset(parallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { elementRef, offset };
};