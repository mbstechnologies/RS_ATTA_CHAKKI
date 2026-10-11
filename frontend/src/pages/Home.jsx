import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, CheckCircle2, Star, Leaf, Zap, PackageCheck, HeartPulse, MessageCircle, Wheat } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { HeroAttaScene } from '../components/three/HeroAttaScene';
import { ChakkiScene } from '../components/three/ChakkiScene';
import { ProductGrid } from '../components/products/ProductGrid';
import { SectionHeading } from '../components/common/SectionHeading';
import { RevealSection } from '../components/animations/RevealSection';
import { createWhatsAppOrderLink } from '../utils/whatsapp';
import { WheatGrainIcon, FlourSackIcon, ChakkiStoneIcon } from '../components/common/CustomIcons';

const badgeIconMap = {
  Leaf: WheatGrainIcon,
  Zap,
  PackageCheck,
  HeartPulse,
};

export function Home() {
  const handleWhatsAppHeroOrder = () => {
    const link = createWhatsAppOrderLink({});
    window.open(link, '_blank');
  };


  const testimonials = [
    {
      quote: "Shuddh Chakki Atta makes extremely soft and flavorful rotis. The best part is that it is ground fresh right after placing the order!",
      name: "Sunita Sharma",
      location: "Chatta Mill Chauraha, Lucknow",
      rating: 5
    },
    {
      quote: "Their 7-grain multigrain flour has been amazing for my health and blood sugar control. Digests easily and tastes delicious!",
      name: "Rajesh Verma",
      location: "Madiyava, Lucknow",
      rating: 5
    },
    {
      quote: "They also clean and grind our own farm wheat with absolute honesty and cleanliness. Highly trustworthy chakki service!",
      name: "Kamlesh Gupta",
      location: "Jankipuram, Lucknow",
      rating: 5
    }
  ];
  return (
    <div className="space-y-24 pb-20 pt-24 sm:pt-28 relative overflow-hidden">
      {/* Full-bleed left Wheat Grain Watermark starting at screen edge left-0 */}
      <div className="absolute top-[430px] left-0 opacity-25 pointer-events-none text-[#4A2C11] hidden lg:block z-0">
        <WheatGrainIcon className="w-80 h-80" color="#4A2C11" />
      </div>

      {/* PAGE HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            <RevealSection yOffset={-20}>
              <p className="text-[#2E7D46] text-sm sm:text-base font-extrabold tracking-wide uppercase">
                Trusted Freshness for Your Family
              </p>
            </RevealSection>

            <RevealSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold text-[#2E7D46] leading-tight lg:leading-[73.44px] tracking-tight font-heading">
                {siteConfig.tagline}
              </h1>
            </RevealSection>

            <RevealSection delay={0.2}>
              <p className="text-lg text-[#3D230D]/80 leading-relaxed font-normal">
                {siteConfig.subTagline}
              </p>
            </RevealSection>

            <RevealSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={handleWhatsAppHeroOrder}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#2E7D46] hover:bg-[#236337] text-white font-bold text-base shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
                >
                  <ShoppingBag className="w-5 h-5 text-[#D59B2D]" />
                  <span>Order Atta Now</span>
                </button>

                <Link
                  to="/process"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/90 hover:bg-white text-[#2E7D46] font-bold text-base border border-[#D59B2D]/40 shadow-md flex items-center justify-center gap-2 transition-all hover:border-[#2E7D46]"
                >
                  <span>Our Grinding Process</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </RevealSection>

            {/* Micro Trust Points */}
            <RevealSection delay={0.4}>
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#F5E6B9] text-center lg:text-left">
                <div>
                  <div className="text-2xl font-black text-[#2E7D46]">100%</div>
                  <div className="text-xs text-[#7A4E27] font-semibold">Pure Sharbati Wheat</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#2E7D46]">0%</div>
                  <div className="text-xs text-[#7A4E27] font-semibold">Maida or Chemicals</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#2E7D46]">Pickup</div>
                  <div className="text-xs text-[#7A4E27] font-semibold">Store Pre-Booking</div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Right Column: Hero Scene */}
          <div className="lg:col-span-6 relative">
            <RevealSection delay={0.2} yOffset={30}>
              <HeroAttaScene brandName={siteConfig.brandName} weight="5 kg" />
            </RevealSection>
          </div>
        </div>
      </section>

      {/* TRUST HIGHLIGHTS BADGES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.trustBadges.map((badge) => {
              const IconComp = badgeIconMap[badge.iconName] || Leaf;
              return (
                <div
                  key={badge.id}
                  className="glass-card rounded-2xl p-6 border border-[#F5E6B9] hover:border-[#D59B2D] transition-all hover:-translate-y-1 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center mb-4 shadow-inner">
                    <IconComp className="w-6 h-6 text-[#2E7D46]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2E7D46] mb-1 font-heading">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-[#3D230D]/75 leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </RevealSection>
      </section>

      {/* FAMILY TRUST & PURITY STORY - FULL WINDOW SLIDE (CREAM BG) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FEFCE8] via-[#FFFDF0] to-[#FEFCE8] border-y border-[#D59B2D]/25 relative overflow-hidden">
        {/* Decorative Chakki Stone watermark in bottom-left background */}
        <div className="absolute -bottom-10 -left-6 sm:-bottom-8 sm:left-4 lg:bottom-0 lg:left-12 opacity-25 pointer-events-none text-[#D59B2D]">
          <ChakkiStoneIcon className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80" color="#D59B2D" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Family Illustration (Exact 3:2 aspect ratio, zero crop) */}
            <div className="lg:col-span-6 relative flex flex-col justify-center">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D59B2D]/40 shadow-2xl group bg-[#DE8E42] w-full aspect-[3/2]">
                <img
                  src="/img_1.jpeg"
                  alt="R.S. Kissan Fresh Atta - Happy Family Eating Fresh Rotis"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
                />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-white/20 text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Wheat className="w-4 h-4 sm:w-5 sm:h-5 text-[#D59B2D]" />
                    <div>
                      <span className="text-[11px] sm:text-xs font-bold block text-[#D59B2D] leading-tight">R.S. Kissan Fresh Atta</span>
                      <span className="text-[9px] sm:text-[10px] opacity-90 leading-tight">Swasth Parivar Ki Pehli Pasand</span>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-black bg-[#2E7D46] px-2 py-0.5 rounded text-white shadow shrink-0 uppercase tracking-wider">
                    100% Pure
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Compelling Story & Key Highlights (Open narrative layout) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <p className="text-[#2E7D46] text-xs sm:text-sm font-extrabold tracking-wider uppercase">
                  Har Ghar Ki Khushhali
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4A2C11] font-heading leading-tight">
                  Har Roti Me Maa Ke Haath Ka Swaad Aur Shuddh Poshan
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#3D230D]/85 leading-relaxed font-normal">
                Bina kisi chemical, maida ya preservatives ke, seedhe khet ke chune huye Sharbati gehu se bani naram aur phooli rotiya. R.S. Kissan Fresh Atta deta hai aapke bachhon aur poore parivar ko behtar paachan, natural bran fiber aur bharpoor energy.
              </p>

              {/* Seamless Purity Points without Cards */}
              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#4A2C11]">Rotiya Rahe Ghanto Naram & Phooli</h4>
                    <p className="text-xs sm:text-sm text-[#7A4E27] leading-relaxed">Natural wheat moisture aur gluten quality rotiyon ko lamba samay tak soft banaye rakhti hai.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#4A2C11]">100% Chokar (Fiber) & Vitamins Intact</h4>
                    <p className="text-xs sm:text-sm text-[#7A4E27] leading-relaxed">Dheemi gati ki chakki peesayi se aate ke zaroori poshak tatva bilkul surakshit rehte hain.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#4A2C11]">Booking Par Taaza Peesayi</h4>
                    <p className="text-xs sm:text-sm text-[#7A4E27] leading-relaxed">Mahino purana packaged packet nahi, pre-booking hote hi store pickup ke liye taaza peesa jata hai.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleWhatsAppHeroOrder}
                  className="px-7 py-3.5 rounded-2xl bg-[#2E7D46] hover:bg-[#236337] text-white font-bold text-sm shadow-xl hover:shadow-2xl flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D59B2D]" />
                  <span>Pre-Book Fresh Atta</span>
                </button>

                <a
                  href="#products"
                  className="px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FFFBEB] text-[#4A2C11] border border-[#D59B2D]/40 font-bold text-sm shadow-xs flex items-center gap-2 transition-all hover:border-[#2E7D46]"
                >
                  <span>View Our Flour Range</span>
                  <ArrowRight className="w-4 h-4 text-[#2E7D46]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SHOWCASE */}
      <section id="products" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Flour Sack SVG Watermark in right margin with mouth facing upwards */}
        <div className="absolute -top-6 -right-24 lg:-right-32 opacity-20 pointer-events-none text-[#4A2C11] transform rotate-12 hidden lg:block">
          <FlourSackIcon className="w-80 h-96" color="#4A2C11" />
        </div>
        <RevealSection>
          <SectionHeading
            eyebrow="Freshly Ground Products"
            title="Our Popular Flour Range"
            description="Choose fresh stone-ground whole wheat and multigrain flour tailored for your family's taste and nutrition."
          />
        </RevealSection>

        <RevealSection delay={0.2}>
          <ProductGrid limit={3} />
        </RevealSection>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2E7D46] text-white font-bold text-sm hover:bg-[#236337] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>See All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FRESH GRINDING STORYTELLING SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Chakki Stone SVG Watermark in right margin space */}
        <div className="absolute top-4 -right-20 lg:-right-32 opacity-25 pointer-events-none text-[#4A2C11] hidden lg:block">
          <ChakkiStoneIcon className="w-72 h-72" color="#4A2C11" />
        </div>
        <RevealSection>
          <SectionHeading
            eyebrow="Traditional Stone Chakki"
            title="Slow Grinding, Real Nutrition"
            description="We use traditional cold stone milling instead of high-speed roller mills to preserve the natural vitamins, bran fiber, and rich wheat taste."
          />
        </RevealSection>

        <RevealSection delay={0.2}>
          <ChakkiScene />
        </RevealSection>
      </section>


      {/* WHY CHOOSE US & QUALITY COMMITMENT - FULL WINDOW SLIDE (CREAM BG) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FEFCE8] via-[#FFFDF0] to-[#FEFCE8] border-y border-[#D59B2D]/25 relative overflow-hidden">
        {/* Subtle decorative wheat watermark in corner */}
        <div className="absolute -bottom-10 -right-10 opacity-15 pointer-events-none text-[#D59B2D] hidden lg:block">
          <WheatGrainIcon className="w-96 h-96" color="#D59B2D" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Compelling Story & Clear Value Points (Open narrative, cream theme) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-[#2E7D46] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                  Shuddhata Ka Vishwas • 100% Purity
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#4A2C11] font-heading">
                  Kyun Chune {siteConfig.brandName} Ka Taaza Atta?
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#3D230D]/85 leading-relaxed font-normal">
                Har parivar ki sehat shuddh bhojan se shuru hoti hai. Market ke packaged aate me maida, preservatives aur chemical additives milaye jaate hain jo mahino tak godaam me pade rehte hain. Hum dete hain 100% khet se chuna hua Sharbati gehu, jo aapke order par taaza chakki me peesa jata hai taaki aapko mile swasth paachan, natural bran fiber aur maa ke haath ki naram rotiyon ka asali swaad.
              </p>

              {/* Seamless Purity Points without Cards */}
              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#4A2C11]">0% Milawat — Zero Maida & Zero Preservatives</h4>
                    <p className="text-xs sm:text-sm text-[#7A4E27] leading-relaxed">
                      Koi artificial chemicals ya sasta anaaj nahi. Sirf 100% saaf aur gehun ke natural poshak tatva.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#4A2C11]">Order Par Taaza Peesayi — No Warehouse Stale Flour</h4>
                    <p className="text-xs sm:text-sm text-[#7A4E27] leading-relaxed">
                      Hum mahino purana packet nahi bechte. Order aate hi taaza pees kar store pickup ya delivery ke liye taiyar kiya jata hai.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#4A2C11]">Traditional Cold Stone Milling — Vitamins & Bran Intact</h4>
                    <p className="text-xs sm:text-sm text-[#7A4E27] leading-relaxed">
                      Dheemi gati ki patthar chakki aate ko garam nahi hone deti, jisse aate ki khushbu aur fiber surakshit rehte hain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#2E7D46]/10 text-[#2E7D46] flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#4A2C11]">Hygienic 3-Layer Moisture-Lock Packaging</h4>
                    <p className="text-xs sm:text-sm text-[#7A4E27] leading-relaxed">
                      Food-grade virgin packaging jo nami aur dhool se bachakar taazgi ko lamba samay tak seal rakhti hai.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleWhatsAppHeroOrder}
                  className="px-7 py-3.5 rounded-2xl bg-[#2E7D46] hover:bg-[#236337] text-white font-bold text-sm shadow-xl hover:shadow-2xl flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D59B2D]" />
                  <span>Order Fresh Atta on WhatsApp</span>
                </button>

                <Link
                  to="/process"
                  className="px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FFFBEB] text-[#4A2C11] border border-[#D59B2D]/40 font-bold text-sm shadow-xs flex items-center gap-2 transition-all hover:border-[#2E7D46]"
                >
                  <span>Dekhein Hamari Peesayi Vidhi</span>
                  <ArrowRight className="w-4 h-4 text-[#2E7D46]" />
                </Link>
              </div>
            </div>

            {/* Right Column: img_04.png Pure Aata Poster Image (Exact 1:1 square ratio, zero crop) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-[#D59B2D]/40 shadow-2xl group bg-[#3B1F0F]">
                <img
                  src="/img_04.png"
                  alt="Pure Aata - RS Aata Chakki Quality Commitment"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="Customer Trust"
            title="What Our Customers Say"
            description="Read what our regular customers say about the aroma, taste, and freshness of our stone-ground flour."
          />
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 border border-[#F5E6B9] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-[#3D230D]/85 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F5E6B9] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#2E7D46] font-heading">{t.name}</span>
                  <span className="text-[#7A4E27]">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* WHATSAPP CTA BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#D59B2D]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#FEFCE8] via-[#FFFBEB] to-[#FEFCE8]">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E7D46] font-heading">
                Order Freshly Ground Atta Today!
              </h3>
              <p className="text-sm text-[#7A4E27]">
                Send a quick message on WhatsApp and collect freshly ground flour at our store.
              </p>
            </div>

            <button
              onClick={handleWhatsAppHeroOrder}
              className="px-8 py-4 rounded-full bg-[#2E7D46] hover:bg-[#236337] text-white font-bold text-base shadow-xl flex items-center gap-3 transition-all shrink-0 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Order Instantly on WhatsApp</span>
            </button>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
