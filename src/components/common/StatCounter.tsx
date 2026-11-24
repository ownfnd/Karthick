import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
  description?: string;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  end,
  suffix = '+',
  duration = 2000,
  label,
  description,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className={`relative group ${className}`}>
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-electric/20 via-accent-blue/20 to-accent-indigo/20 blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
      <div className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-background-card/90 backdrop-blur-md text-center">
        <div className="flex items-center justify-center gap-1 text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-accent-electric tracking-tight mb-2 font-mono">
          <span>{count}</span>
          <span className="text-accent-electric">{suffix}</span>
        </div>
        <div className="text-lg md:text-xl font-semibold text-white tracking-wide mb-1">
          {label}
        </div>
        {description && (
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
