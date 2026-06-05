import React from "react";
import { siteContent } from "../siteContent";
import { Sparkles, Leaf, Eye, Droplet } from "lucide-react";
import { motion } from "motion/react";

export const MenuSection: React.FC = () => {
  return (
    <section id="menu-section" className="py-20 px-4 md:px-12 bg-[#FAF7F2] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#5A5A40] bg-[#5A5A40]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Gourmet Station Flavours
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3C2F2F]">
            Choose Your Sauce & Toppings
          </h2>
          <div className="w-24 h-0.5 bg-[#8B5E3C]/30 mx-auto mt-4" />
          <p className="text-[#3C2F2F]/70 text-sm mt-4 leading-relaxed font-sans">
            Curate an extraordinary dessert feast. Our ingredients are sourced premium to ensure non-cloying, light sweetness perfectly balanced for guests of all ages.
          </p>
        </div>

        {/* Both Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SAUCE CARD: Columns 1 to 5 */}
          <div className="lg:col-span-5 bg-white border border-[#E5E1D8] rounded-3xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6 border-b border-[#FAF7F2] pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#8B5E3C]/10 flex items-center justify-center">
                <Droplet className="w-5 h-5 text-[#8B5E3C]" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#3C2F2F]">Velvety Dipping Sauces</h3>
                <p className="text-[10px] sm:text-xs text-[#8B5E3C] font-mono font-extrabold uppercase tracking-wider">Premium Satin Coats</p>
              </div>
            </div>

            <div className="space-y-4">
              {siteContent.sauces.map((sauce) => (
                <div 
                  key={sauce.id} 
                  className="flex gap-4 p-4 rounded-xl hover:bg-[#FAF7F2] transition-colors group border border-transparent hover:border-[#E5E1D8]/40"
                >
                  {/* Sauce Swivel Indicator */}
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full ${sauce.color} shadow-xs ring-4 ring-[#FAF7F2]`} />
                  </div>
                  
                  {/* Sauce Bio */}
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#3C2F2F] group-hover:text-[#8B5E3C] transition-colors flex items-center gap-1.5">
                      {sauce.name}
                      {sauce.id === "pistachio" && (
                        <span className="text-[8px] bg-[#8D9974]/20 text-[#8D9974] px-1.5 py-0.5 rounded uppercase tracking-wider font-sans font-bold">Aesthetic Best</span>
                      )}
                    </h4>
                    <p className="text-xs text-[#3C2F2F]/70 mt-1 leading-relaxed">
                      {sauce.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sauce Footer details */}
            <div className="mt-6 pt-4 border-t border-[#FAF7F2] flex items-center gap-2 text-[10px] text-gray-500 font-mono">
              <span>● Non-cloying recipe</span>
              <span>● Halal certified materials</span>
            </div>
          </div>

          {/* TOPPING CARD: Columns 6 to 12 */}
          <div className="lg:col-span-7 bg-white border border-[#E5E1D8] rounded-3xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6 border-b border-[#FAF7F2] pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#5A5A40]/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#5A5A40]" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#3C2F2F]">Artisan Crunch & Marshmallows</h3>
                <p className="text-[10px] sm:text-xs text-[#5A5A40] font-mono font-extrabold uppercase tracking-wider">Apothecary Customizers</p>
              </div>
            </div>

            {/* Topping Grid with details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteContent.toppings.map((top) => {
                let emoji = "✨";
                if (top.id.includes("sugar")) emoji = "❄️";
                else if (top.id.includes("oreo")) emoji = "🍪";
                else if (top.id.includes("choc-rice") || top.id.includes("chocolate")) emoji = "🍫";
                else if (top.id.includes("rainbow")) emoji = "🌈";
                else if (top.id.includes("lotus")) emoji = "🍂";
                else if (top.id.includes("chips")) emoji = "🍬";
                else if (top.id.includes("crispy")) emoji = "🟡";
                else if (top.id.includes("marshmallow")) emoji = "☁️";

                return (
                  <div 
                    key={top.id}
                    className="p-3.5 rounded-xl bg-[#FAF7F2]/50 hover:bg-[#FAF7F2] border border-[#E5E1D8]/40 hover:border-[#E5E1D8]/80 transition-colors flex items-start gap-3 group"
                  >
                    <div className="text-lg bg-white rounded-lg p-1.5 border border-gray-100 flex items-center justify-center shadow-3xs group-hover:scale-110 transition-transform">
                      {emoji}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#3C2F2F] group-hover:text-[#8B5E3C] transition-colors">
                        {top.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                        {top.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Styling statement box */}
            <div className="mt-8 bg-[#FAF7F2] p-4 rounded-2xl border border-dashed border-[#E5E1D8] flex items-center gap-2.5">
              <span className="text-xs text-[#8B5E3C] mt-0.5 leading-relaxed font-sans block">
                ⭐ <strong>Guest Experience Tip:</strong> Suggest guests combine <strong>Belgian Milk Choco</strong> with crunchy <strong>Lotus crumbs</strong> for a premium caramelized crunch that melts seamlessly into the warm dough.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
