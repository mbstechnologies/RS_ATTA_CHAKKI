import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export function ChakkiScene() {
  const [activeStage, setActiveStage] = useState(1);

  const stageData = {
    1: {
      image: "/01.png",
      tag: "Stage 01: Grain Selection",
      title: "1. Clean & Heavy Wheat Grains Intake",
      desc: "100% pure Sharbati wheat grains are triple-screened and vacuum cleaned to eliminate dust, chaff, and impurities before entering the hopper.",
      features: [
        "100% Authentic MP Sharbati Wheat",
        "Triple-tier Vacuum Dust & Chaff Screening",
        "Hand-inspected for Highest Purity"
      ]
    },
    2: {
      image: "/02.png",
      tag: "Stage 02: Traditional Grinding",
      title: "2. Traditional Low-RPM Stone Milling",
      desc: "Grinding takes place between natural stone wheels at low RPM. This cold-pressed milling prevents heat, preserving natural Vitamin B, E, and wholesome bran fiber.",
      features: [
        "Low RPM Cold-Pressed Milling",
        "Preserves Vitamins, Minerals & Bran Fiber",
        "Soft & Aromatic Flour Consistency"
      ]
    },
    3: {
      image: "/03.png",
      tag: "Stage 03: Fresh Flour Collection",
      title: "3. Fresh Aromatic Flour Output & Sifting",
      desc: "Warm, fresh whole wheat flour exits smoothly through the chute, naturally aerated and inspected before entering the packaging station.",
      features: [
        "Natural Aroma & Golden Color Preserved",
        "Retains 100% Coarse & Fine Fiber Balance",
        "Zero Additives, Preservatives or Chemicals"
      ]
    }
  };

  const totalStages = 3;

  const handlePrev = () => {
    setActiveStage((prev) => (prev === 1 ? totalStages : prev - 1));
  };

  const handleNext = () => {
    setActiveStage((prev) => (prev === totalStages ? 1 : prev + 1));
  };

  return (
    <div className="w-full glass-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 border border-[#D59B2D]/30 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        {/* Left Column: Stage Photos (Replaces 3D model) */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <div className="relative w-full max-w-[500px] h-[270px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FAF5EA] to-[#F5EED8] border border-[#E8D4A2] shadow-xl group flex items-center justify-center p-2 sm:p-3">
            <img
              src={stageData[activeStage].image}
              alt={stageData[activeStage].title}
              key={activeStage}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain transition-all duration-500 group-hover:scale-[1.01]"
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#4A2C11] shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 z-10 border border-[#D59B2D]/30"
              aria-label="Previous Stage"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#4A2C11] shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 z-10 border border-[#D59B2D]/30"
              aria-label="Next Stage"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Stage Description & Controls */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[#2E7D46] font-extrabold text-xs uppercase tracking-wider">
              Milling & Packaging Process
            </span>
            <span className="text-xs text-[#7A4E27] font-semibold">
              Step {activeStage} of 3
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-[#4A2C11] font-heading leading-tight">
            {stageData[activeStage].title}
          </h3>

          <p className="text-[#3D230D]/85 leading-relaxed text-xs sm:text-sm">
            {stageData[activeStage].desc}
          </p>

          {/* Key Feature Checkpoints */}
          <div className="space-y-1.5 pt-1">
            {stageData[activeStage].features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#3D230D]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D46] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Stage Selector Buttons */}
          <div className="pt-3 border-t border-[#F5E6B9] flex items-center justify-between">
            <div className="flex gap-2">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setActiveStage(num)}
                  className={`w-9 h-9 rounded-xl font-black text-xs sm:text-sm transition-all duration-200 ${
                    activeStage === num
                      ? 'bg-[#2E7D46] text-white shadow-lg scale-105'
                      : 'bg-[#F5E6B9] text-[#3D230D] hover:bg-[#D59B2D]/40'
                  }`}
                >
                  0{num}
                </button>
              ))}
            </div>

            <span className="text-xs text-[#2E7D46] font-bold">
              Click 01, 02, 03
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
