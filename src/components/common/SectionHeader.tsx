import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        alignment === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-4 border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.12)] ${
            alignment === 'center' ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-electric animate-ping" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
