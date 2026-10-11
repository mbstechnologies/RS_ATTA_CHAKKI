import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Phone, Menu } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { useCart } from '../../context/CartContext';
import { MobileNav } from './MobileNav';
import { WheatGrainIcon } from '../common/CustomIcons';

export function Header() {
  const location = useLocation();
  const { openCart, totalItemsCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/process', label: 'Our Process' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40 py-4 sm:py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* 1. Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="RS Atta Chakki Logo"
              className="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-[#4A2C11] shadow-sm group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="block text-xl sm:text-2xl font-black text-[#2E7D46] tracking-tight leading-none font-heading">
                {siteConfig.brandName}
              </span>
              <span className="block text-[11px] text-[#7A4E27] font-semibold tracking-wider mt-0.5">
                100% Fresh Atta
              </span>
            </div>
          </Link>

          {/* 2. Center Navigation Links (Slightly larger font size) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[17px] lg:text-[19px] font-bold transition-all relative py-1 ${
                    isActive
                      ? 'text-[#2E7D46] font-heading font-extrabold'
                      : 'text-[#3D230D] hover:text-[#2E7D46]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2E7D46] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right Action Buttons */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:flex items-center gap-2 text-[#4A2C11] hover:text-[#2E7D46] text-[15px] font-bold transition-colors"
            >
              <Phone className="w-4.5 h-4.5 text-[#2E7D46]" />
              <span>Call Us</span>
            </a>

            <button
              onClick={openCart}
              className="relative p-1.5 text-[#4A2C11] hover:text-[#2E7D46] transition-colors active:scale-95"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-6.5 h-6.5 text-[#2E7D46]" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#D59B2D] text-white text-[10px] font-extrabold flex items-center justify-center shadow">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* MBS Technologies Agency Link & Logo (Right to Cart Button) */}
            <a
              href="https://mbstechnologies.indevs.in/"
              target="_blank"
              rel="noopener noreferrer"
              title="Developed by MBS Technologies"
              className="flex items-center gap-1.5 p-1 sm:px-2.5 sm:py-1 rounded-xl bg-white/85 hover:bg-white border border-[#D59B2D]/40 hover:border-[#2E7D46] shadow-xs hover:shadow-md transition-all group shrink-0"
            >
              <img
                src="/mbs_logo.png"
                alt="MBS Technologies Logo"
                className="w-6 h-6 sm:w-6.5 sm:h-6.5 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="hidden md:inline text-[11px] font-black text-[#4A2C11] group-hover:text-[#2E7D46] transition-colors">
                MBS Tech
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-1 text-[#4A2C11] hover:text-[#2E7D46]"
              aria-label="Navigation Menu"
            >
              <Menu className="w-6.5 h-6.5" />
            </button>
          </div>

        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
