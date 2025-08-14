import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useParallax } from '@/hooks/useScrollEffects';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.5,
  direction = 'up',
  backgroundImage,
  overlay = false,
  overlayOpacity = 0.4,
}) => {
  const { elementRef, offset } = useParallax(speed);
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn('relative overflow-hidden', className)}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: getTransform(),
          }}
        />
      )}
      
      {overlay && (
        <div
          className="absolute inset-0 bg-primary"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Enhanced floating elements component
interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  duration?: number;
  delay?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className,
  intensity = 10,
  duration = 3,
  delay = 0,
}) => {
  return (
    <div
      className={cn('animate-float', className)}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--float-intensity': `${intensity}px`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

// Magnetic interaction component
export const MagneticElement: React.FC<{
  children: ReactNode;
  className?: string;
  strength?: number;
}> = ({ children, className, strength = 0.3 }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      
      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      element.style.transform = 'translate(0px, 0px)';
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [strength, isHovered]);

  return (
    <div
      ref={elementRef}
      className={cn('transition-transform duration-200 ease-out', className)}
    >
      {children}
    </div>
  );
};