import React from 'react';

export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignClass} mb-6 sm:mb-10 lg:mb-12 space-y-2 sm:space-y-3`}>
      {eyebrow && (
        <p className="text-[#2E7D46] text-xs sm:text-sm font-extrabold tracking-wider uppercase">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#4A2C11] leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-sm sm:text-base lg:text-lg text-[#3D230D]/80 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
