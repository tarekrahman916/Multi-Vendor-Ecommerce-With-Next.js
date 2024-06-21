import React from "react";
import MarketCarousel from "./MarketCarousel";

export default function MarketList() {
  return (
    <div className="py-16">
      <div className="bg-slate-50 dark:bg-lime-900 dark:bg-sl rounded-lg p-4">
        <h2 className="py-2 text-center text-2xl text-slate-900 dark:text-slate-50 mb-4">
          Shop By Market
        </h2>
        {/* Market Slider */}
        <MarketCarousel />
      </div>
    </div>
  );
}
