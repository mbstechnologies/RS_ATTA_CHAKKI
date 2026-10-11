import React, { useState } from 'react';

/**
 * Clean Hero Image Component with extension fallback
 */
export function HeroAttaScene({ brandName = "Shuddh Chakki Atta", weight = "5 kg" }) {
  const [imgSrc, setImgSrc] = useState("/hero_atta.png");

  const handleError = () => {
    if (imgSrc.endsWith(".png")) {
      setImgSrc("/hero_atta.jpg");
    } else if (imgSrc.endsWith(".jpg")) {
      setImgSrc("/hero_atta.jpeg");
    }
  };

  return (
    <div className="relative w-full h-[300px] xs:h-[360px] sm:h-[480px] lg:h-[620px] overflow-hidden rounded-2xl bg-[#FFFBEB]">
      <img
        src={imgSrc}
        alt={`${brandName} - ${weight}`}
        onError={handleError}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
