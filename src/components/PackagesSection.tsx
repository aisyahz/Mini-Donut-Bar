import React from "react";
import { siteContent, Package } from "../siteContent";
import { Check, MessageSquare, Flame } from "lucide-react";
import { motion } from "motion/react";

export const PackagesSection: React.FC = () => {
  const getWhatsappUrl = (pkg: Package) => {
    const text = `Hi Tepi.Co! I am interested in booking the "${pkg.name}" packages (${pkg.donutsCount} Mini Donuts) for my event. Please let me know its availability! Thank you!`;
    return `${siteContent.whatsappMessageBase}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="our_packages_section" className="py-20 px-4 md:px-12 bg-white border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Simple Pricing Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3C2F2F]">
            Our Packages
          </h2>
          <div className="w-24 h-0.5 bg-[#8B5E3C]/30 mx-auto mt-4" />
          <p className="text-[#3C2F2F]/70 text-sm mt-4 leading-relaxed font-sans">
            Ready to delight guests? Choose a volume that matches your guest crowd. No hidden charges—includes full booth setup, florist decor, friendly server, and premium items.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteContent.packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative bg-[#FAF7F2]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all ${
                pkg.isPopular 
                  ? "border-[#8B5E3C] border-2 shadow-lg bg-white -translate-y-2" 
                  : "border-[#E5E1D8] shadow-2xs hover:shadow-md hover:border-[#8B5E3C]/60"
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#8B5E3C] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-white text-[#8B5E3C]" />
                  <span>Popular Pick</span>
                </div>
              )}

              <div>
                {/* Name & Count Header */}
                <div className="text-center md:text-left mb-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3C2F2F]">{pkg.name}</h3>
                  <div className="flex justify-center md:justify-start items-baseline gap-2 mt-2">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-[#8B5E3C]">{pkg.price}</span>
                    <span className="text-xs text-gray-500 font-sans font-medium">/ complete session</span>
                  </div>
                </div>

                {/* Main Event Stats pills */}
                <div className="grid grid-cols-3 gap-2 bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E5E1D8]/60 mb-6 text-center">
                  <div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#3C2F2F]">{pkg.donutsCount}</span>
                    <span className="text-[9px] uppercase tracking-tighter text-gray-400 block font-bold">Donuts</span>
                  </div>
                  <div className="border-x border-dashed border-[#E5E1D8]">
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#3C2F2F]">{pkg.saucesCount}</span>
                    <span className="text-[9px] uppercase tracking-tighter text-gray-400 block font-bold">Sauces</span>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#3C2F2F]">{pkg.toppingsCount}</span>
                    <span className="text-[9px] uppercase tracking-tighter text-gray-400 block font-bold">Toppings</span>
                  </div>
                </div>

                {/* Feature Bullet List */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#8B5E3C]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-[#8B5E3C]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#3C2F2F]/85 font-sans leading-tight">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire CTA Button */}
              <a 
                href={getWhatsappUrl(pkg)}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3.5 rounded-xl text-center text-xs sm:text-sm font-bold uppercase tracking-wider font-sans flex items-center justify-center gap-2 transition-all ${
                  pkg.isPopular 
                    ? "bg-[#8B5E3C] hover:bg-[#734D32] text-white shadow-md hover:shadow-lg" 
                    : "bg-white hover:bg-[#F3EDE4] text-[#3C2F2F] border border-[#E5E1D8]"
                }`}
                id={`btn-pkg-inquire-${pkg.id}`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>

            </motion.div>
          ))}
        </div>

        {/* Simple Note under Packages */}
        <div className="mt-12 text-center text-[11px] sm:text-xs text-gray-400 leading-normal max-w-lg mx-auto">
          Need a larger custom event volume (500+ mini donuts)? Or have special wedding color requirements? Talk directly to us on WhatsApp, and we will happily curate a custom booth layout for you.
        </div>

      </div>
    </section>
  );
};
