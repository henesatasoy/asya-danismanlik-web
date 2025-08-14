import { useEffect, useState } from 'react';

interface FloatingElementProps {
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FloatingElement = ({ delay = 0, duration = 4, className = "", style }: FloatingElementProps) => {
  return (
    <div
      className={`absolute opacity-20 ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite ${delay}s`,
        animationDelay: `${delay}s`,
        ...style
      }}
    />
  );
};

export const FloatingElements = () => {
  const [elements] = useState(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 3,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el) => (
        <FloatingElement
          key={el.id}
          delay={el.delay}
          duration={el.duration}
          className={`w-${Math.floor(el.size/4)} h-${Math.floor(el.size/4)} bg-gradient-to-r from-gold/30 to-gold/10 rounded-full blur-sm`}
          style={{
            left: `${el.left}%`,
            top: `${el.top}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
          } as any}
        />
      ))}
    </div>
  );
};

export default FloatingElements;