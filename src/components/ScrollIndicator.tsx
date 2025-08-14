import React from 'react';
import { useScrollEffects } from '@/hooks/useScrollEffects';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
  showProgress?: boolean;
  showButtons?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  className,
  showProgress = true,
  showButtons = true,
  position = 'right',
}) => {
  const { scrollProgress, scrollToTop, isNearTop, isNearBottom, scrollDirection, velocity } = useScrollEffects();

  const positionClasses = {
    top: 'top-0 left-0 right-0 h-1',
    bottom: 'bottom-0 left-0 right-0 h-1',
    left: 'left-0 top-0 bottom-0 w-1',
    right: 'right-0 top-0 bottom-0 w-1',
  };

  return (
    <div className={cn('fixed z-50', className)}>
      {showProgress && (
        <div className={cn('fixed bg-border/20 backdrop-blur-sm', positionClasses[position])}>
          <div
            className={cn(
              'bg-gradient-gold transition-all duration-300 ease-out transform-gpu',
              position === 'top' || position === 'bottom' ? 'h-full' : 'w-full',
              velocity > 10 ? 'shadow-gold' : ''
            )}
            style={{
              [position === 'top' || position === 'bottom' ? 'width' : 'height']: `${scrollProgress}%`,
              filter: velocity > 5 ? 'brightness(1.2)' : 'brightness(1)',
            }}
          />
        </div>
      )}

      {showButtons && (
        <div className="fixed right-6 bottom-6 flex flex-col gap-2">
          {!isNearTop && (
            <button
              onClick={() => scrollToTop(1200)}
              className={cn(
                'group w-12 h-12 rounded-full bg-primary/80 backdrop-blur-md text-primary-foreground',
                'shadow-elegant hover:shadow-gold transition-all duration-300',
                'hover:bg-gold hover:text-primary hover:scale-110',
                'transform-gpu animate-fade-in',
                scrollDirection === 'up' ? 'scale-110 shadow-gold' : 'scale-100'
              )}
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6 mx-auto group-hover:animate-bounce" />
            </button>
          )}

          {!isNearBottom && (
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className={cn(
                'group w-12 h-12 rounded-full bg-primary/80 backdrop-blur-md text-primary-foreground',
                'shadow-elegant hover:shadow-gold transition-all duration-300',
                'hover:bg-gold hover:text-primary hover:scale-110',
                'transform-gpu animate-fade-in',
                scrollDirection === 'down' ? 'scale-110 shadow-gold' : 'scale-100'
              )}
              aria-label="Scroll to bottom"
            >
              <ChevronDown className="w-6 h-6 mx-auto group-hover:animate-bounce" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// Floating scroll hint component
export const ScrollHint: React.FC<{ className?: string }> = ({ className }) => {
  const { isNearTop } = useScrollEffects();

  if (!isNearTop) return null;

  return (
    <div className={cn('fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in', className)}>
      <div className="flex flex-col items-center space-y-2 text-white/80">
        <span className="text-sm font-medium tracking-wide animate-pulse">Scroll down</span>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full p-1 animate-bounce">
          <div className="w-1 h-3 bg-white/60 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  );
};