import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle fine technical grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial gradient mask to fade grid smoothly towards edges */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle 800px at 50% -100px, rgba(0, 210, 255, 0.08), transparent 70%), radial-gradient(circle 600px at 100% 40%, rgba(99, 102, 241, 0.05), transparent 60%), radial-gradient(circle 700px at 0% 80%, rgba(59, 130, 246, 0.05), transparent 65%)',
        }}
      />

      {/* Top subtle glow bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-accent-electric/40 to-transparent blur-[1px]" />
    </div>
  );
};
