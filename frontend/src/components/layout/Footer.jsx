import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ShieldCheck, Heart, Mail } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export function Footer() {
  return (
    <footer className="bg-[#3D230D] text-[#FEFCE8] relative overflow-hidden pt-16 pb-12">
      {/* Decorative Golden Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3D230D] via-[#D59B2D] to-[#3D230D]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D59B2D]/20">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="RS Atta Chakki Logo"
                className="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-[#4A2C11] shadow-lg"
              />
              <div>
                <span className="block text-2xl font-extrabold text-[#FEFCE8] tracking-tight">
                  {siteConfig.brandName}
                </span>
                <span className="block text-xs text-[#D59B2D] font-semibold">
                  100% Fresh Atta
                </span>
              </div>
            </div>

            <p className="text-[#FEFCE8]/80 text-sm leading-relaxed pt-2">
              {siteConfig.subTagline}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D59B2D] bg-black/30 p-3 rounded-xl border border-[#D59B2D]/30">
              <ShieldCheck className="w-4 h-4 shrink-0 text-amber-400" />
              <span>100% Purity, Hygiene & Food Safety Guaranteed</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-[#D59B2D] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#FEFCE8]/80 hover:text-white hover:underline transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#FEFCE8]/80 hover:text-white hover:underline transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#FEFCE8]/80 hover:text-white hover:underline transition-all">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-[#FEFCE8]/80 hover:text-white hover:underline transition-all">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#FEFCE8]/80 hover:text-white hover:underline transition-all">
                  Contact & Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-base font-bold text-[#D59B2D] uppercase tracking-wider">
              Store Information
            </h4>
            <ul className="space-y-3 text-sm text-[#FEFCE8]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D59B2D] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D59B2D] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#D59B2D] transition-all font-semibold">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D59B2D] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#D59B2D] transition-all font-semibold break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D59B2D] shrink-0" />
                <span>{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FEFCE8]/60 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Dedicated to Your Family's Health</span>
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
