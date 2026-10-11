import React from 'react';
import { Store, Zap, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductGrid } from '../components/products/ProductGrid';
import { RevealSection } from '../components/animations/RevealSection';

export function Products() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16 sm:pb-20 pt-20 sm:pt-28">
      {/* CATALOGUE HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="100% Fresh Chakki Products"
            title="Our Fresh Flour Range & Catalogue"
            description="Choose 1 kg, 5 kg, and 10 kg sealed packs according to your household requirements, or book custom wheat grinding."
          />
        </RevealSection>
      </section>

      {/* PRODUCT GRID WITH CATEGORY FILTERS & 3D MODAL */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection delay={0.1}>
          <ProductGrid />
        </RevealSection>
      </section>

      {/* SERVICE GUARANTEES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#D59B2D]/30 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-center">
            <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#D59B2D]/20 text-[#4A2C11] flex items-center justify-center">
                <Store className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A2C11]" />
              </div>
              <h4 className="font-bold text-[#4A2C11] text-sm sm:text-base">Instant Store Pickup</h4>
              <p className="text-xs text-[#3D230D]/75">Pre-book on WhatsApp and collect fresh warm flour with zero waiting</p>
            </div>

            <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#D59B2D]/20 text-[#4A2C11] flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A2C11]" />
              </div>
              <h4 className="font-bold text-[#4A2C11] text-sm sm:text-base">Fresh Milling Guarantee</h4>
              <p className="text-xs text-[#3D230D]/75">Milling begins only after your order is confirmed</p>
            </div>

            <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#D59B2D]/20 text-[#4A2C11] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A2C11]" />
              </div>
              <h4 className="font-bold text-[#4A2C11] text-sm sm:text-base">100% Satisfaction</h4>
              <p className="text-xs text-[#3D230D]/75">Dedicated resolution if you are not fully satisfied with taste or quality</p>
            </div>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
