import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppOrderLink } from '../../utils/whatsapp';

export function FloatingWhatsAppButton() {
  const handleWhatsAppClick = () => {
    const link = createWhatsAppOrderLink({});
    window.open(link, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block whitespace-nowrap bg-[#3D230D] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-[#D59B2D]/40 transition-all">
        Order Fresh Atta on WhatsApp
      </div>

      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2E7D46] hover:bg-[#236337] text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-[#4A2C11]"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
}
