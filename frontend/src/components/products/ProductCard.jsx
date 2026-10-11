import React, { useState } from 'react';
import { Star, CalendarCheck } from 'lucide-react';
import { FlourSackIcon } from '../common/CustomIcons';
import { createWhatsAppOrderLink } from '../../utils/whatsapp';

export function ProductCard({ product }) {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(
    product.sizes.findIndex((s) => s.recommended) > -1
      ? product.sizes.findIndex((s) => s.recommended)
      : 0
  );

  const selectedSizeObj = product.sizes[selectedSizeIndex] || product.sizes[0];

  const handlePreBook = () => {
    const link = createWhatsAppOrderLink({
      singleProduct: {
        name: product.name,
        selectedSize: selectedSizeObj.weight,
        quantity: 1
      }
    });
    window.open(link, '_blank');
  };

  return (
    <div className="group glass-card rounded-3xl p-5 hover:shadow-2xl transition-all duration-300 border border-[#F5E6B9] flex flex-col justify-between relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{ backgroundColor: product.colorTheme || '#4A2C11' }}
      />

      <div>
        <div className="flex items-center justify-between mb-3 pt-1">
          <span className="text-[#2E7D46] font-extrabold text-xs uppercase tracking-wider">
            {product.badgeText || 'Fresh Ground'}
          </span>
          <div className="flex items-center gap-1 text-amber-600 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Product Visual Container with Premium Custom SVG Icon */}
        <div className="relative h-44 rounded-2xl bg-gradient-to-b from-[#FEFCE8] via-[#FFFBEB] to-[#FEF9E7] border border-[#F5E6B9] flex flex-col items-center justify-center p-4 mb-4 overflow-hidden group-hover:border-[#D59B2D]/50 transition-all">
          <div className="absolute w-24 h-24 bg-[#D59B2D]/15 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-white/90 border border-[#D59B2D]/35 shadow-md flex items-center justify-center p-3 mb-2.5 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300">
              <FlourSackIcon className="w-full h-full text-[#D59B2D]" color="#D59B2D" />
            </div>
            <span className="px-3 py-1 rounded-full bg-white/95 text-[#4A2C11] font-bold text-xs shadow-xs border border-[#F5E6B9]">
              {product.name} ({selectedSizeObj.weight})
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#4A2C11] mb-1 group-hover:text-[#D59B2D] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#7A4E27] font-semibold mb-2">
          {product.tagline}
        </p>
        <p className="text-xs text-[#3D230D]/75 line-clamp-2 leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="mb-4">
          <label className="block text-[11px] font-bold text-[#4A2C11] mb-1.5 uppercase">
            Pack Size:
          </label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((sz, idx) => (
              <button
                key={sz.weight}
                onClick={() => setSelectedSizeIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedSizeIndex === idx
                    ? 'bg-[#4A2C11] text-white shadow-sm'
                    : 'bg-[#FFFBEB] text-[#3D230D] hover:bg-[#D59B2D]/30 border border-[#F5E6B9]'
                }`}
              >
                {sz.weight}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[#F5E6B9]">
        <button
          onClick={handlePreBook}
          className="w-full py-3 px-4 rounded-xl bg-[#2E7D46] hover:bg-[#236337] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 group"
        >
          <CalendarCheck className="w-4 h-4 text-[#D59B2D] group-hover:scale-110 transition-transform" />
          <span>Book for Pickup ({selectedSizeObj.weight})</span>
        </button>
      </div>
    </div>
  );
}
