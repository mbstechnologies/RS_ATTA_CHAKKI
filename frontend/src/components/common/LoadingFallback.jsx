import React from 'react';

export function LoadingFallback({ message = "Loading freshness..." }) {
  return (
    <div className="w-full min-h-[300px] flex flex-col items-center justify-center p-8 bg-[#FEFCE8]">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-[#F5E6B9]" />
        <div className="absolute inset-0 rounded-full border-4 border-[#D59B2D] border-t-transparent animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-xl">
          🌾
        </div>
      </div>
      <p className="text-[#4A2C11] font-bold text-base animate-pulse">
        {message}
      </p>
    </div>
  );
}
