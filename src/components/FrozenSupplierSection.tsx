import React from "react";
import { siteContent } from "../siteContent";
import { Sparkles, ShoppingBag, Coffee, Star } from "lucide-react";
import { motion } from "motion/react";

export const FrozenSupplierSection: React.FC = () => {
  const whatsappUrl = `${siteContent.whatsappMessageBase}?text=Hi%20Tepi.Co%21%20I%20would%20love%20to%20get%20more%20information%20about%20your%20Frozen%20Mini%20Donut%20solutions%20and%20wholesale%20prices.`;

  return (
    <section id="frozen_supplier_section" className="bg-[#F3EDE4] py-16 border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side text & list info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 select-none">
                Wholesale Supplier
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3C2F2F]">
                {siteContent.supplierInfo.title}
              </h2>
              <div className="w-20 h-0.5 bg-[#8B5E3C]/30 mt-3" />
            </div>

            <p className="text-[#3C2F2F]/80 text-sm sm:text-base leading-relaxed font-sans">
              {siteContent.supplierInfo.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {siteContent.supplierInfo.targetAudiences.map((aud, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 bg-white/70 hover:bg-white p-3 rounded-xl border border-[#E5E1D8]/50 transition-colors shadow-3xs"
                >
                  <div className="text-sm">🧁</div>
                  <span className="text-xs sm:text-sm font-semibold text-[#3C2F2F]">{aud}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B5E3C] hover:bg-[#734D32] text-white font-bold uppercase tracking-wider font-sans px-8 py-4 rounded-xl transition-all text-xs sm:text-sm shadow-md hover:-translate-y-0.5"
                id="btn-whatsapp-supplier"
              >
                <kbd className="opacity-75 font-mono text-xs">💬</kbd> {siteContent.supplierInfo.ctaText}
              </a>
            </div>
          </div>

          {/* Right Side visual box with vector display style */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E5E1D8] p-6 sm:p-8 rounded-[28px] shadow-sm relative overflow-hidden"
            >
              {/* Premium star badge */}
              <div className="absolute top-4 right-4 bg-amber-500 text-white rounded-full p-1.5 leading-none shadow-sm animate-pulse">
                <Star className="w-3.5 h-3.5 fill-white text-amber-500" />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Frozen Concept</span>
                <h3 className="text-lg font-serif font-bold text-[#3C2F2F]">Pre-Fried Fluffy Recipe</h3>
                
                {/* Simulated visual diagram */}
                <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#E5E1D8]/60 flex items-center justify-between gap-4">
                  
                  {/* Left: Box with frozen donuts */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-12 border-2 border-dashed border-[#8B5E3C]/40 bg-white rounded-lg flex items-center justify-around px-1 relative">
                      <span className="text-xs opacity-80">🍩</span>
                      <span className="text-xs opacity-80">🍩</span>
                      <span className="text-[6px] font-bold text-[#8B5E3C] absolute bottom-1 text-center">TEPI BOX</span>
                    </div>
                    <span className="text-[8px] text-[#8B5E3C] uppercase tracking-widest font-extrabold mt-1.5 font-mono">1. Frozen Delivery</span>
                  </div>

                  {/* Arrow */}
                  <div className="text-neutral-300 font-bold">➔</div>

                  {/* Middle: Heat */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-amber-50 rounded-full border border-amber-200 flex items-center justify-center relative">
                      <span className="text-lg">🔥</span>
                      <span className="absolute -top-1 right-0 text-[8px] bg-red-500 text-white px-1 rounded-sm">30s</span>
                    </div>
                    <span className="text-[8px] text-amber-600 uppercase tracking-widest font-extrabold mt-1.5 font-mono">2. Short Bake</span>
                  </div>

                  {/* Arrow */}
                  <div className="text-neutral-300 font-bold">➔</div>

                  {/* Right: Perfect donut */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full border border-emerald-200 flex items-center justify-center relative shadow-3xs">
                      <span className="text-xl">✨🍩</span>
                    </div>
                    <span className="text-[8px] text-emerald-600 uppercase tracking-widest font-extrabold mt-1.5 font-mono">3. Glaze & Serve</span>
                  </div>

                </div>

                <ul className="space-y-2 text-xs text-[#3C2F2F]/80">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold">✓</span>
                    <span>Crisp exterior, cloud-soft inside after heating.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold">✓</span>
                    <span>Zero wastage—only warm up what you sell!</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold">✓</span>
                    <span>Long freezer shelf life (up to 3 months).</span>
                  </li>
                </ul>

              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
