import React from "react";
import { siteContent } from "../siteContent";
import { Sparkles, ArrowRight, MapPin, TentTree, Instagram, Heart } from "lucide-react";
import { motion } from "motion/react";

export const WoodenBoothHero: React.FC = () => {
  const handleScrollToPackages = () => {
    document.getElementById("our_packages_section")?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappUrl = `${siteContent.whatsappMessageBase}?text=Hi%20Tepi.Co%21%20I%20would%20love%20to%20query%20about%20booking%20your%20Wooden%20Donut%20Booth%20for%20my%20event.`;

  return (
    <div id="hero_section" className="relative bg-[#FAF7F2] overflow-hidden border-b border-[#E5E1D8]">
      {/* Decorative Warm Backlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Heading, badges, intro */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-center lg:text-left">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 bg-[#8B5E3C]/10 text-[#8B5E3C] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Based in KL / Selangor</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#3C2F2F] tracking-tight font-bold leading-tight"
              >
                Mini Donut Bar <br />
                <span className="text-[#8B5E3C] italic font-serif-elegant font-normal font-serif">by Tepi.Co</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-lg font-serif text-[#8B5E3C] font-semibold tracking-wide uppercase"
              >
                {siteContent.brandTagline}
              </motion.p>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#3C2F2F]/80 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed font-sans"
            >
              Interactive wooden mini donut dessert bar for weddings, birthdays, corporate events, and celebrations. Let your guests design their own dreamy snack!
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#8B5E3C] hover:bg-[#734D32] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wider uppercase font-sans"
                id="btn-whatsapp-hero"
              >
                <kbd className="opacity-75 font-mono text-xs">💬</kbd> WhatsApp Us Now
              </a>
              
              <button 
                onClick={handleScrollToPackages}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3EDE4] text-[#3C2F2F] border border-[#E5E1D8] px-8 py-3.5 rounded-xl font-bold transition-all text-sm tracking-wider uppercase font-sans shadow-2xs"
                id="btn-packages-hero"
              >
                View Packages <ArrowRight className="w-4 h-4 text-[#8B5E3C]" />
              </button>
            </motion.div>

            {/* Quick mini-badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4 text-xs font-semibold text-[#5A5A40] uppercase font-sans"
            >
              <span className="bg-[#FAF7F2] border border-[#E5E1D8] px-3 py-1 rounded-md mb-1 shadow-2xs flex items-center gap-1">
                🧁 Pick • Dip • Sprinkle
              </span>
              <span className="bg-[#FAF7F2] border border-[#E5E1D8] px-3 py-1 rounded-md mb-1 shadow-2xs flex items-center gap-1">
                💍 Elegant Aesthetic Style
              </span>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Beautiful Responsive Interactive Wooden Booth Vector Setup */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center relative py-6">
            
            {/* Visual Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[620px] bg-[#F3EDE4] border border-[#E5E1D8] p-4 sm:p-6 rounded-[32px] shadow-xl relative"
            >
              {/* String Lights on top of frame */}
              <div className="absolute -top-1 left-4 right-4 flex justify-between px-6 pointer-events-none select-none z-20">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-0.5 h-3 bg-neutral-400" />
                    <motion.div 
                      animate={{ opacity: [1, 0.6, 1], scale: [1, 1.1, 1] }}
                      transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-3.5 h-3.5 rounded-full bg-amber-300 shadow-[0_0_12px_#F59E0B] -mt-1 border border-amber-200"
                    />
                  </div>
                ))}
              </div>

              {/* Main SVG Render of the Booth */}
              <div className="bg-[#FAF7F2] rounded-[24px] border border-[#E5E1D8]/60 p-4 sm:p-6 flex flex-col items-center relative overflow-hidden select-none">
                
                {/* Backdrop Florals Frame */}
                <div className="absolute top-2 left-2 text-[#5A5A40]/30 text-lg flex gap-1 pointer-events-none">🌿 🍂</div>
                <div className="absolute top-2 right-2 text-[#5A5A40]/30 text-lg flex gap-1 pointer-events-none">🍂 🌿</div>

                {/* Booth Chalk Header */}
                <div className="bg-[#3C2F2F] border-2 border-[#A06A3B] px-5 py-1.5 rounded-md shadow-md text-white text-center mb-8 rotate-[-1deg] relative z-10 hover:rotate-1 hover:scale-105 transition-all max-w-[200px]">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-amber-200 block leading-tight">TEPI.CO</span>
                  <span className="text-sm font-serif italic text-amber-50">Mini Donut Bar</span>
                </div>

                {/* Wooden Display Stand Representation using CSS Grid/Flex */}
                <div className="w-full flex justify-between gap-4 max-w-[480px] pt-2">
                  
                  {/* Left Column: Golden Donut peg matrix */}
                  <div className="flex-1 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E5E1D8] relative shadow-sm flex flex-col items-center">
                    <span className="text-[9px] uppercase tracking-wider text-[#8B5E3C] font-bold mb-3 font-sans">Wooden Rack</span>
                    
                    {/* Peg Mockup */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 1, rot: -5, col: "bg-[#FBCA8C]", size: "scale-100" },
                        { id: 2, rot: 12, col: "bg-[#FBCA8C]", size: "scale-90" },
                        { id: 3, rot: -15, col: "bg-[#FBCA8C]", size: "scale-105" },
                        { id: 4, rot: 25, col: "bg-[#FBCA8C]", size: "scale-95" },
                        { id: 5, rot: -8, col: "bg-[#FBCA8C]", size: "scale-100" },
                        { id: 6, rot: 0, col: "bg-[#FBCA8C]", size: "scale-90" }
                      ].map(( donut ) => (
                        <motion.div 
                          key={donut.id}
                          whileHover={{ scale: 1.15, rotate: donut.rot + 10 }}
                          className={`relative cursor-pointer ${donut.col} w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full flex items-center justify-center shadow-md border-b-2 border-[#d99a4e] overflow-hidden ${donut.size}`}
                          style={{ transform: `rotate(${donut.rot}deg)` }}
                        >
                          {/* Donut bite circle in middle */}
                          <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] bg-[#FAF7F2] rounded-full border border-[#FAF7F2] shadow-inner flex items-center justify-center">
                            <div className="w-[4px] h-[4px] bg-[#E5E1D8] rounded-full" />
                          </div>
                          {/* Mini decorative color glazes on donut */}
                          {donut.id === 1 && <div className="absolute inset-0 bg-[#5C3A21]/30 pointer-events-none rounded-full" />}
                          {donut.id === 3 && <div className="absolute inset-0 bg-[#E57C82]/35 pointer-events-none rounded-full" />}
                          {donut.id === 5 && <div className="absolute inset-0 bg-[#8D9974]/35 pointer-events-none rounded-full" />}
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-4 bg-[#F3EDE4] border border-[#E5E1D8] rounded-lg px-2.5 py-1 text-[8.5px] uppercase font-bold text-[#8B5E3C] tracking-wide text-center">
                      Freshly Fried On-site
                    </div>
                  </div>

                  {/* Right Column: Interaction items (Sauce bottles & Toppings jars) */}
                  <div className="w-[45%] flex flex-col gap-3">
                    
                    {/* Sauce Dipping Bar */}
                    <div className="bg-white border border-[#E5E1D8] p-3 rounded-2xl flex flex-col items-center shadow-xs">
                      <span className="text-[8px] uppercase tracking-widest text-[#5A5A40] font-bold mb-2 font-mono">Dipping Bar</span>
                      
                      {/* Interactive squeeze sauce bottles mockup */}
                      <div className="flex justify-around w-full gap-1.5">
                        {[
                          { name: "Choc", col: "bg-[#5C3A21] text-amber-100" },
                          { name: "Strawberry", col: "bg-[#E57C82] text-white" },
                          { name: "Pistachio", col: "bg-[#8D9974] text-[#FAF7F2]" }
                        ].map((sauce, idx) => (
                          <div key={idx} className="flex flex-col items-center cursor-pointer group">
                            {/* Squeeze nozzle */}
                            <div className="w-1.5 h-2 bg-neutral-300 rounded-t-sm" />
                            {/* Bottle body */}
                            <motion.div 
                              whileHover={{ scale: 1.08, y: -2 }}
                              className={`w-7 h-10 sm:w-8 sm:h-12 rounded-lg ${sauce.col} flex items-center justify-center relative shadow-xs p-0.5 border border-black/5`}
                            >
                              <span className="text-[5.5px] font-bold uppercase tracking-tighter leading-none text-center transform scale-90">{sauce.name}</span>
                            </motion.div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Gourmet Topping Jars */}
                    <div className="bg-white border border-[#E5E1D8] p-3 rounded-2xl flex flex-col items-center shadow-xs">
                      <span className="text-[8px] uppercase tracking-widest text-[#5A5A40] font-bold mb-2 font-mono">Topping Jars</span>
                      
                      {/* Glass jars setup */}
                      <div className="flex justify-around w-full gap-2 pt-1">
                        {[
                          { emoji: "🍪", label: "Lotus" },
                          { emoji: "☁️", label: "Marshmallow" },
                          { emoji: "🌈", label: "Rainbow" }
                        ].map((top, idx) => (
                          <motion.div 
                            key={idx}
                            whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 5 : -5 }}
                            className="flex flex-col items-center cursor-pointer"
                          >
                            {/* Glass Jar Lid */}
                            <div className="w-5 h-1.5 bg-[#A06A3B]/40 rounded-t-sm border border-neutral-300" />
                            {/* Glass Jar Body */}
                            <div className="w-[26px] h-7 sm:w-[28px] sm:h-8 rounded-b-lg border-x border-b border-neutral-200 bg-neutral-50/50 flex items-center justify-center shadow-2xs relative">
                              <span className="text-xs">{top.emoji}</span>
                            </div>
                            <span className="text-[7px] text-[#A06A3B] uppercase tracking-wider font-extrabold mt-1">{top.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

                {/* Bottom elegant tablecloth & booth stand element */}
                <div className="w-full h-8 mt-5 border-t-4 border-[#A06A3B] bg-[#FAF7F2] relative rounded-b-md">
                  {/* Scalloped Lace table hanger */}
                  <div className="absolute top-0 inset-x-0 h-2 bg-[#E57C82]/10 flex justify-between px-1.5 pointer-events-none overflow-hidden text-[6px] text-[#8B5E3C] leading-none select-none">
                    • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
                  </div>
                  
                  {/* Decorative chalkboard tabletop plate sign */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#3C2F2F] text-white px-3 py-1 rounded text-[7.5px] uppercase font-mono tracking-widest border border-amber-300/40">
                    🌿 Fresh & Sweet Bar
                  </div>
                </div>

              </div>

              {/* Informational table footer label */}
              <div className="mt-4 flex items-center justify-between text-xs px-2 text-[#3C2F2F]/80">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5E3C]" />
                  <span>KL & Selangor Venue</span>
                </span>
                <span className="flex items-center gap-1">
                  <TentTree className="w-3.5 h-3.5 text-[#5A5A40]" />
                  <span>Aesthetic Setup</span>
                </span>
              </div>

            </motion.div>
            
          </div>

        </div>
      </div>
    </div>
  );
};
