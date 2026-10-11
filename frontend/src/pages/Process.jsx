import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ChakkiScene } from '../components/three/ChakkiScene';
import { RevealSection } from '../components/animations/RevealSection';
import { Droplets, Sparkles, Lock, ShieldCheck } from 'lucide-react';

export function Process() {

  const storageTips = [
    {
      title: "Keep Moisture Away",
      desc: "Store flour in an air-tight container in a cool, dry, and well-ventilated pantry."
    },
    {
      title: "Avoid Wet Utensils",
      desc: "Always use a clean, dry spoon or scoop when taking out flour. Wet hands can induce moisture."
    },
    {
      title: "Protect from Direct Sun",
      desc: "Keep flour bags or containers away from direct sunlight and stove heat."
    },
    {
      title: "Best Before Duration",
      desc: "Consuming within 45 days of the grinding date offers peak aroma, flavor, and nutrition."
    }
  ];

  return (
    <div className="space-y-16 pb-20 pt-20 sm:pt-24">
      {/* PAGE HERO & MILLING PROCESS SCENE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-5">
        <RevealSection>
          <div className="text-center space-y-1.5 max-w-3xl mx-auto">
            <p className="text-[#2E7D46] text-xs sm:text-sm font-extrabold tracking-wider uppercase">
              From Field to Table
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E7D46] tracking-tight font-heading">
              Our Fresh Milling Process
            </h1>
            <p className="text-xs sm:text-sm text-[#7A4E27] max-w-2xl mx-auto">
              Learn how we combine modern hygiene with traditional stone chakki technology for ultimate quality.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <ChakkiScene />
        </RevealSection>
      </section>



      {/* BEST QUALITY PACKAGING SHOWCASE SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="Uncompromising Quality & Hygiene"
            title="How We Ensure Best Quality Packaging"
            description="Freshly ground atta loses nutrients if not protected properly. That is why RS Atta Chakki uses food-grade 3-layer moisture-lock packaging."
          />
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D59B2D]/30 shadow-xl bg-gradient-to-br from-[#FEFCE8] via-[#FFFBEB] to-[#FEFCE8]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: 03.png Packaging Image (Exact 1167/1347 aspect ratio, zero crop) */}
              <div className="lg:col-span-5 relative flex flex-col justify-center">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#D59B2D]/40 shadow-2xl group bg-[#FFFDE7] w-full max-w-md mx-auto aspect-[1167/1347]">
                  <img
                    src="/03.png"
                    alt="RS Kissan Fresh Atta - Premium Moisture-Lock Packaging"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Floating Bottom Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-white/20 text-white flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#D59B2D]" />
                      <div>
                        <span className="text-[11px] sm:text-xs font-bold block text-[#D59B2D] leading-tight">
                          3-Layer Sealed Packaging
                        </span>
                        <span className="text-[9px] sm:text-[10px] opacity-90 leading-tight">
                          Moisture-Lock • Aroma Preserved
                        </span>
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-black bg-[#2E7D46] px-2 py-0.5 rounded text-white shadow shrink-0 uppercase tracking-wider">
                      Food Grade
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Packaging Highlights in 2x2 Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-5 border border-[#F5E6B9] hover:border-[#D59B2D] transition-all hover:-translate-y-1 shadow-sm bg-white/70">
                  <div className="w-11 h-11 rounded-xl bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center mb-3">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#4A2C11] mb-1.5 font-heading">
                    Moisture & Humidity Lock
                  </h4>
                  <p className="text-xs text-[#3D230D]/80 leading-relaxed">
                    Multi-layer barrier keeps rain, humidity, and dampness out, ensuring the flour does not clump or spoil.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[#F5E6B9] hover:border-[#D59B2D] transition-all hover:-translate-y-1 shadow-sm bg-white/70">
                  <div className="w-11 h-11 rounded-xl bg-[#D59B2D]/20 text-[#D59B2D] flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#7A4E27]" />
                  </div>
                  <h4 className="text-base font-bold text-[#4A2C11] mb-1.5 font-heading">
                    Natural Aroma Preserved
                  </h4>
                  <p className="text-xs text-[#3D230D]/80 leading-relaxed">
                    The rich, nutty, sweet fragrance of stone-ground Sharbati wheat stays sealed inside for up to 60 days.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[#F5E6B9] hover:border-[#D59B2D] transition-all hover:-translate-y-1 shadow-sm bg-white/70">
                  <div className="w-11 h-11 rounded-xl bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center mb-3">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#4A2C11] mb-1.5 font-heading">
                    Tamper-Proof Heat Seal
                  </h4>
                  <p className="text-xs text-[#3D230D]/80 leading-relaxed">
                    Hermetically machine-sealed immediately after grinding to guarantee zero touch, zero dust, and zero adulteration.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[#F5E6B9] hover:border-[#D59B2D] transition-all hover:-translate-y-1 shadow-sm bg-white/70">
                  <div className="w-11 h-11 rounded-xl bg-[#D59B2D]/20 text-[#D59B2D] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#2E7D46]" />
                  </div>
                  <h4 className="text-base font-bold text-[#4A2C11] mb-1.5 font-heading">
                    100% Food-Grade Virgin
                  </h4>
                  <p className="text-xs text-[#3D230D]/80 leading-relaxed">
                    Certified virgin food-grade inner film ensures zero chemical contact, keeping the flour 100% natural and healthy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ATTA STORAGE GUIDELINES SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#D59B2D]/30 shadow-xl space-y-8 bg-gradient-to-br from-[#FEFCE8] via-[#FFFBEB] to-[#FEFCE8]">
            <div className="text-center space-y-2">
              <p className="text-[#2E7D46] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                💡 Helpful Storage Tips
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C11]">
                Guidelines for Keeping Atta Fresh
              </h3>
              <p className="text-xs sm:text-sm text-[#7A4E27]">
                Follow these simple storage practices to preserve nutrient quality and freshness for longer:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {storageTips.map((tip, i) => (
                <div key={i} className="bg-white/90 p-5 rounded-2xl border border-[#F5E6B9] space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#4A2C11]/10 text-[#4A2C11] flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <h4 className="font-bold text-[#4A2C11] text-sm">{tip.title}</h4>
                  <p className="text-xs text-[#3D230D]/75 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
