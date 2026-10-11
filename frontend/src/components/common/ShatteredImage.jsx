import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Clean Shattered Glass Image Effect Component
 */
export function ShatteredImage({
  imageSrc = "/hero_atta.png",
  altText = "Shuddh Chakki Atta",
  className = ""
}) {
  const [currentSrc, setCurrentSrc] = useState(imageSrc);

  const handleError = () => {
    if (currentSrc.endsWith('.png')) {
      setCurrentSrc('/hero_atta.jpg');
    }
  };

  const shards = [
    {
      id: "shard-main-tl",
      clipPath: "polygon(10% 8%, 52% 4%, 48% 48%, 8% 50%)",
      transform: "translate(0px, 0px)",
      floatDelay: 0,
      borderPoly: "10% 8%, 52% 4%, 48% 48%, 8% 50%"
    },
    {
      id: "shard-main-tr",
      clipPath: "polygon(55% 2%, 92% 10%, 96% 52%, 51% 45%)",
      transform: "translate(0px, 0px)",
      floatDelay: 0.3,
      borderPoly: "55% 2%, 92% 10%, 96% 52%, 51% 45%"
    },
    {
      id: "shard-main-bl",
      clipPath: "polygon(6% 54%, 47% 51%, 43% 94%, 14% 92%)",
      transform: "translate(0px, 0px)",
      floatDelay: 0.6,
      borderPoly: "6% 54%, 47% 51%, 43% 94%, 14% 92%"
    },
    {
      id: "shard-main-br",
      clipPath: "polygon(50% 48%, 94% 55%, 86% 96%, 46% 97%)",
      transform: "translate(0px, 0px)",
      floatDelay: 0.9,
      borderPoly: "50% 48%, 94% 55%, 86% 96%, 46% 97%"
    },
    {
      id: "shard-spike-top",
      clipPath: "polygon(35% 0%, 65% 0%, 53% 14%, 42% 12%)",
      transform: "translate(0px, -4px)",
      floatDelay: 0.4,
      borderPoly: "35% 0%, 65% 0%, 53% 14%, 42% 12%"
    },
    {
      id: "shard-float-tl",
      clipPath: "polygon(2% 18%, 10% 4%, 16% 24%)",
      transform: "translate(-8px, -8px)",
      floatDelay: 0.2,
      isOuter: true,
      borderPoly: "2% 18%, 10% 4%, 16% 24%"
    },
    {
      id: "shard-float-tr",
      clipPath: "polygon(86% 0%, 98% 14%, 82% 20%)",
      transform: "translate(8px, -8px)",
      floatDelay: 0.5,
      isOuter: true,
      borderPoly: "86% 0%, 98% 14%, 82% 20%"
    },
    {
      id: "shard-float-br",
      clipPath: "polygon(90% 78%, 100% 86%, 86% 98%)",
      transform: "translate(8px, 8px)",
      floatDelay: 0.8,
      isOuter: true,
      borderPoly: "90% 78%, 100% 86%, 86% 98%"
    },
    {
      id: "shard-float-bl",
      clipPath: "polygon(0% 74%, 12% 92%, 2% 98%)",
      transform: "translate(-8px, 8px)",
      floatDelay: 0.7,
      isOuter: true,
      borderPoly: "0% 74%, 12% 92%, 2% 98%"
    }
  ];

  return (
    <div className={`relative w-full h-[480px] sm:h-[550px] lg:h-[620px] select-none ${className}`}>
      <div className="relative w-full h-full">
        {shards.map((shard) => (
          <motion.div
            key={shard.id}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 3.5 + shard.floatDelay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: shard.floatDelay
              }
            }}
            transition={{ duration: 0.7, delay: shard.floatDelay * 0.15 }}
            className="absolute inset-0"
            style={{
              clipPath: shard.clipPath,
              transform: shard.transform,
              filter: shard.isOuter
                ? "drop-shadow(0 10px 15px rgba(61,35,13,0.3))"
                : "drop-shadow(0 15px 25px rgba(61,35,13,0.22))"
            }}
          >
            <img
              src={currentSrc}
              alt={altText}
              onError={handleError}
              className="w-full h-full object-cover object-center"
            />

            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/20 to-white/35"
              style={{ mixBlendMode: "overlay" }}
            />

            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <polygon
                points={shard.borderPoly}
                fill="none"
                stroke="rgba(254, 252, 232, 0.85)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <polygon
                points={shard.borderPoly}
                fill="none"
                stroke="rgba(213, 155, 45, 0.45)"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        ))}

        <div className="absolute top-2 right-2 z-20 px-4 py-2 rounded-full bg-[#FEFCE8]/90 backdrop-blur-md border border-[#D59B2D]/40 text-xs font-bold text-[#4A2C11] shadow-lg flex items-center gap-2 pointer-events-none">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D59B2D] animate-ping" />
          ✨ Traditional Stone Ground
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-[#FEFCE8]/92 backdrop-blur-md border border-[#D59B2D]/35 shadow-xl flex items-center justify-between pointer-events-none">
          <div>
            <div className="text-[11px] font-bold text-[#7A4E27] tracking-wider uppercase">
              Purity Guaranteed
            </div>
            <div className="text-base sm:text-lg font-extrabold text-[#4A2C11]">
              {altText} — 5 kg
            </div>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-[#4A2C11] text-[#FEFCE8] text-xs font-bold shadow">
            Ground on Order
          </div>
        </div>
      </div>
    </div>
  );
}
