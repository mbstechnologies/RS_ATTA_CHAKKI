import React from 'react';
import { categories } from '../../data/products';

export function ProductFilters({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 px-1">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all transform active:scale-95 ${
            activeCategory === cat.id
              ? 'bg-[#4A2C11] text-white shadow-lg shadow-[#4A2C11]/20 scale-105 border border-[#D59B2D]/50'
              : 'bg-white/90 text-[#3D230D] border border-[#F5E6B9] hover:bg-[#FFFBEB]'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
