import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, Wheat, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { SectionHeading } from '../components/common/SectionHeading';
import { RevealSection } from '../components/animations/RevealSection';
import { WheatGrainIcon } from '../components/common/CustomIcons';

export function About() {
  const galleryItems = [
    {
      title: "100% Sharbati Grain Selection",
      desc: "Strict selection of heavy, spotless wheat directly harvested from farms.",
      tag: "Raw Material"
    },
    {
      title: "Traditional Stone Milling",
      desc: "Slow-speed cold grinding ensuring natural proteins and vitamins stay intact.",
      tag: "Grinding Tech"
    },
    {
      title: "Best Quality Packaging",
      desc: "Food-grade moisture-proof sealed packaging to protect freshness and aroma.",
      tag: "Safety Packing"
    },
    {
      title: "100% Pure & Healthy",
      desc: "Freshly milled wholesome flour rich in natural fibers and nutrients.",
      tag: "Nutrition"
    }
  ];

  return (
    <div className="space-y-20 pb-20 pt-24 sm:pt-28">
      {/* HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#D59B2D]/30 shadow-2xl bg-gradient-to-br from-[#FEFCE8] via-[#FFFBEB] to-[#FEFCE8] relative overflow-hidden">
          {/* Subtle background grain watermark on the right */}
          <div className="absolute -right-8 -bottom-8 opacity-15 pointer-events-none text-[#D59B2D] hidden lg:block">
            <WheatGrainIcon className="w-72 h-72" color="#D59B2D" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-[#2E7D46] text-xs sm:text-sm font-bold uppercase tracking-wider">
                Our Legacy & Story
              </p>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4A2C11] leading-tight">
                A Time-Tested Promise of Purity & Taste
              </h1>

              <p className="text-lg text-[#3D230D]/80 leading-relaxed font-normal">
                {siteConfig.brandName} is not just a business; it is our family commitment to provide every household with unadulterated, nutritious, and fresh flour.
              </p>
            </div>

            {/* Right Side: Official Website Logo Badge */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D59B2D]/20 to-[#2E7D46]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-48 sm:w-56 lg:w-64 aspect-[1575/998] rounded-3xl bg-white/95 border-2 border-[#D59B2D]/40 shadow-xl flex items-center justify-center p-4 sm:p-5 transition-transform duration-300 hover:scale-105">
                  <img
                    src="/logo.png"
                    alt={`${siteConfig.brandName} Logo`}
                    className="w-full h-full object-contain drop-shadow-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STORY & MISSION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <RevealSection>
              <p className="text-[#2E7D46] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                How We Started
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C11]">
                Why We Founded {siteConfig.brandName}
              </h2>
              <p className="text-[#3D230D]/80 text-base leading-relaxed">
                Today, packaged warehouse flour sold in markets is often mixed with maida or stored for months, stripping away its natural aroma, fiber, and nutrition.
              </p>
              <p className="text-[#3D230D]/80 text-base leading-relaxed">
                We solved this problem by reviving authentic stone milling paired with 100% pure Sharbati wheat. We grind fresh only after receiving your order and deliver directly to your kitchen.
              </p>
            </RevealSection>
          </div>

          <div className="lg:col-span-6">
            <RevealSection delay={0.2}>
              <div className="glass-card rounded-3xl p-8 border border-[#F5E6B9] shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#D59B2D]" />
                  <h3 className="text-xl font-bold text-[#4A2C11]">Our Mission & Commitment</h3>
                </div>

                <ul className="space-y-4 text-sm text-[#3D230D]">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4A2C11] shrink-0 mt-0.5" />
                    <span>To ensure 100% pure natural nutrition in every single bite.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4A2C11] shrink-0 mt-0.5" />
                    <span>Traditional stone grinding free from preservatives or maida adulteration.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4A2C11] shrink-0 mt-0.5" />
                    <span>Zero compromise on hygiene, customer health, and taste.</span>
                  </li>
                </ul>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* REAL STORE & CHAKKI SETUP SHOWCASE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="Our Real Store & Mill"
            title="Visit Our Traditional Stone Chakki"
            description="Take a look inside our clean, modern flour milling facility and our neighborhood store location."
          />
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Store & Milling Machine Photo (img_03.png: 1278x1231 natural shape, zero crop) */}
            <div className="lg:col-span-8">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D59B2D]/40 shadow-2xl group bg-[#FEFCE8] aspect-[1278/1231] w-full">
                <img
                  src="/img_03.png"
                  alt="RS Aata Chakki - Clean Milling Setup and Storefront"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
                />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10 bg-black/65 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/20 text-white flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#FEFCE8]">
                      RS Aata Chakki — Store & Milling Unit
                    </h4>
                    <p className="text-[11px] sm:text-xs text-white/80">
                      Traditional stone grinding in a 100% dust-free, hygienic environment
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold bg-[#2E7D46] px-2.5 py-1 rounded-full text-white shrink-0 shadow">
                    Verified Mill
                  </span>
                </div>
              </div>
            </div>

            {/* Landmark Signboard Photo (img_05.jpeg: 814x1600 natural shape, zero crop) */}
            <div className="lg:col-span-4 flex flex-col justify-start">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D59B2D]/40 shadow-2xl group bg-[#FEFCE8] aspect-[814/1600] w-full max-w-[340px] mx-auto lg:max-w-none">
                <img
                  src="/img_05.jpeg"
                  alt="आर. एस. किसान आटा चक्की - Store Landmark Signboard"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-[#FEFCE8]">
                      आर. एस. किसान आटा चक्की
                    </h4>
                    <p className="text-[10px] text-white/80">
                      Neighborhood landmark signboard
                    </p>
                  </div>
                  <span className="text-[9px] font-bold bg-[#D59B2D] px-2 py-0.5 rounded text-white shrink-0">
                    Store Landmark
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Physical Visit Trust Card below both images */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-[#F5E6B9] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-[#2E7D46]" />
              </div>
              <div>
                <h4 className="font-bold text-[#4A2C11] text-sm sm:text-base">
                  Transparent Milling in Front of Your Eyes
                </h4>
                <p className="text-xs sm:text-sm text-[#3D230D]/80 leading-relaxed">
                  Visit our store anytime between 8:00 AM to 8:00 PM. Choose your wheat grains, watch them ground fresh on authentic stone chakki, and take home hot, fragrant flour with total confidence.
                </p>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="px-5 py-2.5 rounded-xl bg-[#2E7D46] hover:bg-[#236337] text-white text-xs font-bold shrink-0 shadow transition-all whitespace-nowrap"
            >
              Call for Directions
            </a>
          </div>
        </RevealSection>
      </section>

      {/* PROCESS GALLERY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="Hygiene & Quality"
            title="Our Mill Operation Standards"
            description="Our objective is not merely to sell flour, but to empower a healthier lifestyle for your loved ones."
          />
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 border border-[#F5E6B9] shadow-md hover:shadow-xl transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#D59B2D]/20 text-[#4A2C11] flex items-center justify-center">
                  <Wheat className="w-6 h-6 text-[#4A2C11]" />
                </div>
                <span className="text-[#2E7D46] font-bold text-xs uppercase tracking-wider block">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-[#4A2C11]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#3D230D]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <div className="bg-[#4A2C11] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FEFCE8]">
              Experience Real Freshness & Taste!
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base">
              Explore our range of Shuddh Sharbati and Multigrain flours and place your order today.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D59B2D] text-white font-bold text-base shadow-lg hover:bg-amber-600 transition-all transform hover:scale-105"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
