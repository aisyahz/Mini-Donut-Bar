import React from "react";
import { siteContent } from "../siteContent";
import { MessageCircle, Gift, Star, Instagram } from "lucide-react";
import { motion } from "motion/react";

export const WhatsappCTA: React.FC = () => {
  const whatsappUrl = `${siteContent.whatsappMessageBase}?text=Hi%20Tepi.Co%21%20I%20would%20love%20to%20book/discuss%20a%20mini%20donut%20bar%20booth%20for%20my%20upcoming%20event.%20Let%20us%20chat%21`;

  return (
    <section id="whatsapp-cta-section" className="bg-[#3C2F2F] text-[#FAF7F2] py-20 px-4 md:px-12 relative overflow-hidden border-t border-b border-[#A06A3B]/20">
      
      {/* Decorative Golden Ambient Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#8D9974]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        <div className="space-y-3">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-1 bg-[#8B5E3C] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm"
          >
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>Make Your Event Sweeter with {siteContent.brandName}</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF7F2] leading-tight">
            Ready to Delight Your Guests?
          </h2>
          <p className="text-[#FAF7F2]/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Let your guests pick, dip, sprinkle, and enjoy their own customizable warm mini donuts. Book our beautiful boutique wooden booth today to secure your event date!
          </p>
        </div>

        {/* WhatsApp Big CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-[#FAF7F2] hover:bg-[#F3EDE4] text-[#3C2F2F] font-serif font-bold text-base sm:text-lg px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            id="btn-whatsapp-final-cta"
          >
            <kbd className="text-xl">💬</kbd> Book via WhatsApp Now
          </motion.a>

          {/* Social connection reminder */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-[#FAF7F2]/60 select-none">
            <span className="flex items-center gap-1">
              📞 +60 13-664 8159
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              📍 serving KL & Selangor
            </span>
            <span className="hidden sm:inline">•</span>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#FAF7F2] flex items-center gap-1 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" /> @tepi.co
            </a>
          </div>
        </div>

        {/* Decorative Scallop Border style line */}
        <div className="pt-4 overflow-hidden opacity-25 select-none pointer-events-none text-xs tracking-[0.4em] font-mono whitespace-nowrap">
          🍩 • 🍩 • 🍩 • 🍩 • 🍩 • 🍩 • 🍩 • 🍩 • 🍩 • 🍩 • 🍩 • 🍩 • 🍩
        </div>

      </div>
    </section>
  );
};
