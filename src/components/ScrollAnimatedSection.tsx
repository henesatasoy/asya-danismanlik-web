import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollEffects';
import { cn } from '@/lib/utils';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate' | 'flip' | 
             'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 
             'zoom-in' | 'zoom-out' | 'rotate-in' | 'fade-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const animationClasses = {
  fadeUp: {
    initial: 'opacity-0 translate-y-12',
    animate: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    initial: 'opacity-0 -translate-y-12',
    animate: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    initial: 'opacity-0 translate-x-12',
    animate: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    initial: 'opacity-0 -translate-x-12',
    animate: 'opacity-100 translate-x-0',
  },
  scale: {
    initial: 'opacity-0 scale-90',
    animate: 'opacity-100 scale-100',
  },
  rotate: {
    initial: 'opacity-0 rotate-12',
    animate: 'opacity-100 rotate-0',
  },
  flip: {
    initial: 'opacity-0 rotateY-180',
    animate: 'opacity-100 rotateY-0',
  },
  'slide-up': {
    initial: 'opacity-0 translate-y-16',
    animate: 'opacity-100 translate-y-0',
  },
  'slide-down': {
    initial: 'opacity-0 -translate-y-16',
    animate: 'opacity-100 translate-y-0',
  },
  'slide-left': {
    initial: 'opacity-0 translate-x-16',
    animate: 'opacity-100 translate-x-0',
  },
  'slide-right': {
    initial: 'opacity-0 -translate-x-16',
    animate: 'opacity-100 translate-x-0',
  },
  'zoom-in': {
    initial: 'opacity-0 scale-75',
    animate: 'opacity-100 scale-100',
  },
  'zoom-out': {
    initial: 'opacity-0 scale-125',
    animate: 'opacity-100 scale-100',
  },
  'rotate-in': {
    initial: 'opacity-0 rotate-12 scale-90',
    animate: 'opacity-100 rotate-0 scale-100',
  },
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
};

export const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true,
}) => {
  const { elementRef, isVisible, hasAnimated } = useScrollAnimation(threshold);
  
  const shouldAnimate = once ? hasAnimated : isVisible;
  const animationConfig = animationClasses[animation];
  
  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all ease-out transform-gpu',
        shouldAnimate ? animationConfig.animate : animationConfig.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Staggered animation container
interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: ScrollAnimatedSectionProps['animation'];
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className,
  staggerDelay = 100,
  animation = 'fadeUp',
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollAnimatedSection
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollAnimatedSection>
      ))}
    </div>
  );
};