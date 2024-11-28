import React from 'react';

export default function GlowingText({ children, color = "neon-blue", className = "" }) {
  const colorClass = `text-${color}`;
  return (
    <span className={`${colorClass} drop-shadow-[0_0_10px_rgba(0,243,255,0.3)] ${className}`}>
      {children}
    </span>
  );
}