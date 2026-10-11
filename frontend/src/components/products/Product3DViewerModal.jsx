import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import { X, ShoppingBag, Check, ShieldCheck, Star, CalendarCheck, RotateCw } from 'lucide-react';
import { AttaPackaging } from '../three/AttaPackaging';
import { WheatParticles } from '../three/WheatParticles';
import { useCart } from '../../context/CartContext';
import { createWhatsAppOrderLink } from '../../utils/whatsapp';

export function Product3DViewerModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(
    product.sizes.findIndex((s) => s.recommended) > -1
      ? product.sizes.findIndex((s) => s.recommended)
      : 0
  );

  const currentSizeObj = product.sizes[selectedSizeIndex] || product.sizes[0];

  const bagScale = currentSizeObj.weight.includes('1')
    ? 0.8
    : currentSizeObj.weight.includes('10')
      ? 1.15
      : 1.0;

  const handleWhatsAppBuy = () => {
    const link = createWhatsAppOrderLink({
      singleProduct: {
        ...product,
        selectedSize: currentSizeObj.weight,
        price: currentSizeObj.price,
        quantity: 1
      }
    });
    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#FEFCE8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#D59B2D]/40 my-4 sm:my-8">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-white text-[#3D230D] transition-all shadow-md hover:scale-105"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: 3D Canvas */}
          <div className="lg:col-span-6 h-[260px] sm:h-[380px] lg:h-[580px] relative bg-gradient-to-b from-[#4A2C11]/15 via-[#FEFCE8] to-[#FFFBEB]">
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 text-[11px] sm:text-xs font-bold text-[#4A2C11] shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D59B2D] animate-ping" />
              <RotateCw className="w-3.5 h-3.5 text-[#4A2C11]" />
              <span>360° Interactive (Drag to Rotate)</span>
            </div>

            <Canvas camera={{ position: [0, 0.2, 4.8], fov: 42 }}>
              <ambientLight intensity={0.9} />
              <directionalLight position={[5, 8, 5]} intensity={1.8} color="#FFFBEB" />
              <directionalLight position={[-5, -2, -4]} intensity={0.4} color="#4A2C11" />

              <Suspense fallback={null}>
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                  <AttaPackaging
                    brandName={product.name}
                    weight={currentSizeObj.weight}
                    colorTheme={product.colorTheme || '#4A2C11'}
                    scale={bagScale}
                  />
                </Float>
                <WheatParticles count={15} />
                <ContactShadows position={[0, -1.4, 0]} opacity={0.5} scale={6} blur={2} />
              </Suspense>

              <OrbitControls enableZoom={true} minDistance={3} maxDistance={7} />
            </Canvas>

            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-[#4A2C11] shadow-md border border-[#D59B2D]/30 whitespace-nowrap">
              Selected 3D Size: {currentSizeObj.weight}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-6 p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#2E7D46] font-extrabold text-xs uppercase tracking-wider">
                  {product.badgeText || 'Fresh Ground'}
                </span>
                <div className="flex items-center gap-1 text-amber-600 text-sm font-semibold">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-[#7A4E27] text-xs">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-[#4A2C11] mb-1">
                {product.name}
              </h2>
              <p className="text-[#7A4E27] text-sm font-medium mb-4">
                {product.tagline}
              </p>

              <p className="text-[#3D230D]/80 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Package Size Selector */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-[#4A2C11] mb-2.5">
                  Select Pack Size:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((sz, idx) => (
                    <button
                      key={sz.weight}
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`relative p-3 rounded-xl border text-center transition-all ${selectedSizeIndex === idx
                          ? 'border-[#4A2C11] bg-[#4A2C11] text-white shadow-md font-bold'
                          : 'border-[#F5E6B9] bg-white text-[#3D230D] hover:border-[#D59B2D]'
                        }`}
                    >
                      {sz.recommended && selectedSizeIndex !== idx && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#D59B2D] text-[10px] font-bold text-white shadow">
                          Best Value
                        </span>
                      )}
                      <div className="text-sm">{sz.weight}</div>
                      <div className={`text-base font-bold mt-1 ${selectedSizeIndex === idx ? 'text-[#D59B2D]' : 'text-[#4A2C11]'}`}>
                        ₹{sz.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Savings */}
              <div className="flex items-baseline gap-3 mb-6 p-4 rounded-2xl bg-[#FFFBEB] border border-[#D59B2D]/20">
                <span className="text-3xl font-extrabold text-[#4A2C11]">
                  ₹{currentSizeObj.price}
                </span>
                {currentSizeObj.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ₹{currentSizeObj.originalPrice}
                  </span>
                )}
                {currentSizeObj.originalPrice && (
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                    Save ₹{currentSizeObj.originalPrice - currentSizeObj.price}
                  </span>
                )}
              </div>

              {/* Key Features */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold text-[#7A4E27] uppercase tracking-wider">
                  Key Features:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#3D230D]">
                      <Check className="w-4 h-4 text-[#4A2C11] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#F5E6B9] space-y-3">
              <button
                onClick={handleWhatsAppBuy}
                className="w-full py-3.5 px-4 rounded-xl bg-[#2E7D46] hover:bg-[#236337] text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <CalendarCheck className="w-5 h-5 text-[#D59B2D]" />
                Pre-Book for Store Pickup (WhatsApp)
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#7A4E27]">
                <ShieldCheck className="w-4 h-4 text-[#4A2C11]" />
                100% Satisfaction Guarantee | Fresh Ground & Sealed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
