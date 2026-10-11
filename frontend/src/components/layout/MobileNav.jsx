import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, ShoppingBag } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { useCart } from '../../context/CartContext';

export function MobileNav({ isOpen, onClose, navLinks }) {
  const location = useLocation();
  const { openCart, totalItemsCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="absolute top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#FEFCE8] p-6 shadow-2xl flex flex-col justify-between border-l border-[#D59B2D]/30">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#F5E6B9] mb-6">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="RS Atta Chakki Logo"
                className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-[#4A2C11]"
              />
              <div>
                <span className="font-extrabold text-base text-[#2E7D46] block leading-none">
                  {siteConfig.brandName}
                </span>
                <span className="text-[10px] text-[#7A4E27] font-semibold tracking-wide block mt-0.5">
                  100% Fresh Atta
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white text-[#3D230D] border border-[#F5E6B9]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-2xl font-bold text-base transition-all ${isActive
                      ? 'bg-[#4A2C11] text-white shadow-md'
                      : 'text-[#3D230D] hover:bg-[#FFFBEB]'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="pt-6 border-t border-[#F5E6B9] space-y-3">
          <button
            onClick={() => {
              onClose();
              openCart();
            }}
            className="w-full py-3 px-4 rounded-xl bg-[#D59B2D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow"
          >
            <ShoppingBag className="w-4 h-4" />
            View Cart ({totalItemsCount} items)
          </button>

          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full py-3 px-4 rounded-xl border border-[#4A2C11] text-[#4A2C11] font-bold text-sm flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now ({siteConfig.phone})
          </a>

          <div className="pt-2 text-center">
            <a
              href="https://mbstechnologies.indevs.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#7A4E27] hover:text-[#2E7D46] font-bold"
            >
              <img src="/mbs_logo.png" alt="MBS Tech" className="w-4 h-4 object-contain inline" />
              <span>Made by MBS Technologies</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
