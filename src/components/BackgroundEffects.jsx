import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background dark grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Ambient gradient orbs with slow movement */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] animate-pulse-slow" 
      />
      <div 
        className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-violet-600/12 rounded-full blur-[140px] animate-pulse-slow" 
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute -bottom-40 left-1/3 w-[28rem] h-[28rem] bg-cyan-600/10 rounded-full blur-[130px] animate-pulse-slow" 
        style={{ animationDelay: '4s' }}
      />
      <div 
        className="absolute top-2/3 left-10 w-80 h-80 bg-emerald-600/8 rounded-full blur-[110px]" 
      />
    </div>
  );
}
