import React, { useState, useEffect } from "react";
import { siteContent } from "../siteContent";
import { Sparkles, Heart, Star, ChevronRight, Check, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SetupImg from "../assets/images/Setup.jpeg";

type BoothPart = "rack" | "sauce" | "topping" | "signage" | null;

export const WoodenBoothShowcase: React.FC = () => {
  const [hoveredPart, setHoveredPart] = useState<BoothPart>(null);
  const [sprinkles, setSprinkles] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Generate randomized falling sprinkles for background ambient feel
  useEffect(() => {
    const list = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      delay: Math.random() * 6, // entry delay
      color: ["#FAF4EB", "#E57C82", "#8D9974", "#8B5E3C", "#F59E0B"][i % 5]
    }));
    setSprinkles(list);
  }, []);

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleScrollToPackages = () => {
    document.getElementById("our_packages_section")?.scrollIntoView({ behavior: "smooth" });
  };

  const hotspotDetails = {
    rack: {
      title: "🪵 Solid Pine Donut Rack",
      subtitle: "The Main Visual Anchor",
      description: "A gorgeous 3-tier stepped solid pine pegboard display showing tall, fluffy stacks of golden mini donuts. Guests can pick their fluffy bases directly from this elevated rustic platform.",
      icon: "🪵",
      colorTheme: "border-amber-700 bg-amber-50"
    },
    sauce: {
      title: "🍫 Silky Sauce Glaze Station",
      subtitle: "Custom-Squeezed Sweetness",
      description: "Equipped with premium squeezable bottles and terracotta glaze drenchers filled with silky warm Belgian chocolate, sweet garden strawberry, and earthy pistachio glazes.",
      icon: "🍫",
      colorTheme: "border-rose-300 bg-rose-50"
    },
    topping: {
      title: "🍪 Apothecary Topping Bar",
      subtitle: "Gourmet Confectionery Pots",
      description: "Features sparkling glass apothecary jars packed with crisp caramelized Biscoff crumbs, roasted almond chips, rainbow star sprinkles, and soft cushions of mini marshmallows.",
      icon: "🍪",
      colorTheme: "border-emerald-600 bg-emerald-50"
    },
    signage: {
      title: "📸 Bespoke Chalkboard Signage",
      subtitle: "Hand-Calligraphed Table Easel",
      description: "A cute rustic easel blackboard personalized with elegant calligraphic branding tailored to match your specific wedding theme, monogram, or event color palette.",
      icon: "📸",
      colorTheme: "border-neutral-500 bg-neutral-50"
    }
  };

  // Safe toggler for mobile taps
  const handlePartSelect = (part: BoothPart) => {
    if (hoveredPart === part) {
      setHoveredPart(null);
    } else {
      setHoveredPart(part);
    }
  };

  return (
    <section id="booth-highlight" className="py-16 sm:py-24 px-4 md:px-12 bg-gradient-to-b from-[#FAF7F2] to-[#F1EDE4] border-b border-[#E5E1D8] overflow-hidden relative">
      {/* Visual Enhancers: Keyframe styles for bulbs and glows */}
      <style>{`
        @keyframes lights-pulsing {
          0%, 100% {
            box-shadow: 0 0 6px #f59e0b, 0 0 14px #fbbf24;
            background-color: #fbbf24;
            filter: brightness(1.2);
          }
          50% {
            box-shadow: 0 0 18px #f59e0b, 0 0 32px #f59e0b, 0 0 8px #fff;
            background-color: #fca5a5;
            filter: brightness(1.5);
          }
        }
        .glowing-bulb {
          animation: lights-pulsing 2s ease-in-out infinite;
        }
        @keyframes float-booth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .booth-float {
          animation: float-booth 6s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0.4; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .pulse-outer-ring {
          animation: pulse-ring 2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        }
        @keyframes fall {
          0% { transform: translateY(-30px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(500px) rotate(360deg); opacity: 0; }
        }
        .falling-sprinkle {
          animation: fall 7s linear infinite;
        }
        @keyframes wiggle-bottle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        .wiggle-bottle {
          animation: wiggle-bottle 1.4s ease-in-out infinite;
        }
        @keyframes jar-glow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04) translateY(-2px); }
        }
        .jar-glow {
          animation: jar-glow 2s ease-in-out infinite;
        }
        @keyframes sign-sway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(2deg); }
        }
        .sign-sway {
          animation: sign-sway 3s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative falling background sprinkles */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none overflow-hidden select-none z-0">
        {sprinkles.map((spr) => (
          <div
            key={spr.id}
            className="falling-sprinkle absolute w-[5px] h-[10px] rounded-full"
            style={{
              left: `${spr.left}%`,
              backgroundColor: spr.color,
              animationDelay: `${spr.delay}s`,
              top: "-20px"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Title & Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#8B5E3C] bg-[#8B5E3C]/10 px-4 py-1.5 rounded-full inline-block mb-3"
          >
            Aesthetic Event Anchor
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3C2F2F] tracking-tight"
          >
            The Original Wooden Booth Setup
          </motion.h2>
          <div className="w-20 h-0.5 bg-[#8B5E3C]/40 mx-auto mt-4" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#3C2F2F]/80 text-xs sm:text-sm mt-3.5 max-w-xl mx-auto leading-relaxed font-sans font-medium"
          >
            Interact with our premium components below. Click/tap the glowing hotspots or the badges on your phone to explore.
          </motion.p>
        </div>

        {/* 60% Width Grand Visually Centered Display Container */}
        <div className="w-full max-w-[840px] mx-auto flex flex-col items-center relative select-none">
          
          {/* Backlighting Soft Spotlight Glow behind the booth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[650px] h-[280px] sm:h-[450px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* MAIN FLOATING BOOTH CONTAINER */}
          <div className="w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="booth-float w-full relative aspect-[14/11] sm:aspect-[16/11] bg-[#FAF7F2] border-3 sm:border-4 border-[#3C2F2F] rounded-[24px] sm:rounded-[48px] p-2 sm:p-6 shadow-2xl sm:shadow-3xl transition-all duration-500"
            >
              
              {/* Ambient Leaf Foliage on Top Beam */}
              <span className="absolute top-8 sm:top-12 left-[10%] sm:left-[12%] text-xs sm:text-lg opacity-85 z-20">🌿</span>
              <span className="absolute top-10 sm:top-[52px] left-[20%] sm:left-[25%] text-[10px] sm:text-sm opacity-60 z-20">🌿</span>
              <span className="absolute top-8 sm:top-12 right-[10%] sm:right-[12%] text-xs sm:text-lg opacity-85 z-20">🌿</span>
              <span className="absolute top-10 sm:top-[52px] right-[20%] sm:right-[25%] text-[10px] sm:text-sm opacity-60 z-20">🌿</span>

              {/* FAIRY LIGHTS WIRE & BULBS */}
              <div className="absolute top-2 sm:top-4 inset-x-4 sm:inset-x-12 flex justify-between px-3 sm:px-6 z-20 pointer-events-none select-none">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center relative">
                    {/* Wire hook */}
                    <div className="w-[1px] sm:w-[1.5px] h-1.5 sm:h-3 bg-neutral-800 opacity-80" />
                    {/* Glowing mini bulb with warm pulsing box-shadow */}
                    <div 
                      className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full glowing-bulb shadow-lg -mt-1 border border-amber-100" 
                      style={{ animationDelay: `${i * 0.3}s` }} 
                    />
                    {/* Hanging leaf elements on specific bulbs */}
                    {i % 3 === 0 && (
                      <span className="absolute text-[6px] sm:text-[9px] -bottom-2 sm:-bottom-[14px] text-emerald-800 font-sans opacity-75">🌿</span>
                    )}
                  </div>
                ))}
              </div>

              {/* WOODEN COLUMNS (THE PILLARS) */}
              <div className="absolute left-[6%] sm:left-[7%] top-[10%] bottom-[16%] sm:bottom-[20%] w-3 sm:w-6 bg-gradient-to-r from-[#8B5E3C] to-[#5C3A21] border-2 sm:border-3 border-[#3C2F2F] rounded-t-xs sm:rounded-t-lg z-10 shadow-lg" />
              <div className="absolute right-[6%] sm:right-[7%] top-[10%] bottom-[16%] sm:bottom-[20%] w-3 sm:w-6 bg-gradient-to-r from-[#8B5E3C] to-[#5C3A21] border-2 sm:border-3 border-[#3C2F2F] rounded-t-xs sm:rounded-t-lg z-10 shadow-lg" />

              {/* TOP HEADER WOODEN SIGNBOARD BEAM */}
              <div className="absolute top-[8%] left-[4%] right-[4%] h-7 sm:h-12 bg-gradient-to-b from-[#3C2F2F] to-[#251D1D] rounded-md sm:rounded-xl border border-[#8B5E3C] sm:border-3 shadow-md flex items-center justify-between px-2 sm:px-6 z-15 select-none text-white font-mono">
                <span className="text-[6px] sm:text-[11px] font-extrabold text-amber-300 tracking-[0.1em] sm:tracking-[0.25em] flex items-center gap-0.5 sm:gap-1">
                  ✨ TEPI.CO
                </span>
                <span className="text-[7px] sm:text-[12px] font-serif italic text-cream font-bold tracking-wider leading-none">
                  Luxury Donut Bar
                </span>
                <span className="text-[6px] sm:text-[11px] font-extrabold text-amber-300 tracking-[0.1em] sm:tracking-[0.25em] flex items-center gap-0.5 sm:gap-1">
                  KL ✨
                </span>
              </div>

              {/* THE BOOTH STAGE (INNER AREA) */}
              <div className="relative w-full h-[85%] mt-6 sm:mt-12 flex flex-col justify-end">
                
                {/* BACKYARD GREENERY & BOTANICAL LINES */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex justify-center items-start pt-3 sm:pt-6">
                  <span className="text-sm sm:text-xl">🌿</span>
                  <span className="text-base sm:text-2xl mt-2 sm:mt-4">🌸</span>
                  <span className="text-sm sm:text-xl ml-6 sm:ml-12">🌿</span>
                  <span className="text-sm sm:text-2xl mt-1 sm:mt-2 ml-10 sm:ml-20">🌿</span>
                </div>

                {/* SECTION A: WOODEN DISPLAY RACK (CENTERED ELEMENT) */}
                <div 
                  className={`absolute bottom-[10%] left-[24%] right-[24%] h-[56%] bg-gradient-to-b from-[#FAF4EB]/95 to-[#EFE7D8]/95 border-2 sm:border-3 border-[#3C2F2F] rounded-[16px] sm:rounded-[32px] p-1.5 sm:p-4 flex flex-col items-center justify-around shadow-xl transition-all duration-300 cursor-pointer ${
                    hoveredPart === "rack" 
                      ? "scale-105 shadow-[0_0_20px_rgba(139,94,60,0.3)] border-amber-700 bg-amber-50/90 z-25" 
                      : "hover:border-[#8B5E3C]/60"
                  }`}
                  onMouseEnter={() => setHoveredPart("rack")}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => handlePartSelect("rack")}
                >
                  <div className="text-center font-serif text-[6px] sm:text-[11px] font-bold text-[#8B5E3C] tracking-wide py-0.5 px-1 sm:px-2 bg-amber-100/50 rounded-full border border-amber-200">
                    ★ PINERY ★
                  </div>

                  {/* THE WOODEN RACK Ledges & Fluffy Donuts */}
                  <div className="w-full flex flex-col gap-1 sm:gap-2.5 items-center">
                    
                    {/* LEVEL 1: TOP STEP */}
                    <div className="flex flex-col items-center">
                      <div className="bg-[#3C2F2F] h-1 sm:h-2 w-[50px] sm:w-[100px] rounded-full flex justify-around px-1 sm:px-2">
                        <div className="w-0.5 sm:w-1.5 h-1.5 sm:h-3 bg-[#8B5E3C] -mt-0.5 sm:-mt-1 rounded-sm" />
                      </div>
                      <div className="flex gap-1 sm:gap-3 -mt-3.5 sm:-mt-5 z-10 overflow-visible">
                        {[1, 2].map((i) => (
                          <div 
                            key={i} 
                            className={`w-[14px] h-[14px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#FBCA8C] border sm:border-2 border-[#3C2F2F] relative shadow-xs sm:shadow-md ${
                              hoveredPart === "rack" ? "animate-bounce" : ""
                            }`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                          >
                            <div className="absolute inset-[1px] sm:inset-[2px] bg-[#E57C82] rounded-full">
                              <div className="w-1 sm:w-3 h-1 sm:h-3 bg-[#FAF4EB] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* LEVEL 2: MIDDLE STEP */}
                    <div className="flex flex-col items-center">
                      <div className="bg-[#3C2F2F] h-1 sm:h-2 w-[80px] sm:w-[160px] rounded-full flex justify-around px-2 sm:px-4">
                        <div className="w-0.5 sm:w-1.5 h-1.5 sm:h-3 bg-[#8B5E3C] -mt-0.5 sm:-mt-1 rounded-sm" />
                        <div className="w-0.5 sm:w-1.5 h-1.5 sm:h-3 bg-[#8B5E3C] -mt-0.5 sm:-mt-1 rounded-sm" />
                      </div>
                      <div className="flex gap-1 sm:gap-2.5 -mt-3.5 sm:-mt-5 z-10">
                        {["bg-[#FAF4EB]", "bg-[#8D9974]", "bg-[#E57C82]"].map((color, i) => (
                          <div 
                            key={i} 
                            className={`w-[14px] h-[14px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#FBCA8C] border sm:border-2 border-[#3C2F2F] relative shadow-xs sm:shadow-md ${
                              hoveredPart === "rack" ? "animate-bounce" : ""
                            }`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            <div className={`absolute inset-[1px] sm:inset-[2px] ${color} rounded-full`}>
                              <div className="w-1 sm:w-3 h-1 sm:h-3 bg-[#FAF4EB] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* LEVEL 3: BOTTOM STEP */}
                    <div className="flex flex-col items-center">
                      <div className="bg-[#3C2F2F] h-1 sm:h-2 w-[110px] sm:w-[220px] rounded-full flex justify-around px-3 sm:px-6">
                        <div className="w-0.5 sm:w-1.5 h-1.5 sm:h-3 bg-[#8B5E3C] -mt-0.5 sm:-mt-1 rounded-sm" />
                        <div className="w-0.5 sm:w-1.5 h-1.5 sm:h-3 bg-[#8B5E3C] -mt-0.5 sm:-mt-1 rounded-sm" />
                      </div>
                      <div className="flex gap-0.5 sm:gap-2 -mt-3 sm:-mt-5 z-10">
                        {["bg-[#8D9974]", "bg-[#5C3A21]", "bg-[#FAF4EB]", "bg-[#E57C82]"].map((color, i) => (
                          <div 
                            key={i} 
                            className={`w-[12px] h-[12px] sm:w-[30px] sm:h-[30px] rounded-full bg-[#FBCA8C] border sm:border-2 border-[#3C2F2F] relative shadow-xs ${
                              hoveredPart === "rack" ? "animate-bounce" : ""
                            }`}
                            style={{ animationDelay: `${i * 0.25}s` }}
                          >
                            <div className={`absolute inset-[1px] sm:inset-[2px] ${color} rounded-full`}>
                              <div className="w-0.5 sm:w-2.5 h-0.5 sm:h-2.5 bg-[#FAF4EB] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>


                {/* SECTION B: SAUCE STATION (LEFT COZY CORNER) */}
                <div 
                  className={`absolute bottom-[10%] left-[3%] w-[19%] h-[38%] p-1 sm:p-3 border rounded-xl sm:rounded-2xl flex flex-col justify-end items-center transition-all duration-300 cursor-pointer ${
                    hoveredPart === "sauce" 
                      ? "scale-108 border-[#8B5E3C] bg-white shadow-xl z-25" 
                      : "border-transparent text-[#3C2F2F]"
                  }`}
                  onMouseEnter={() => setHoveredPart("sauce")}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => handlePartSelect("sauce")}
                >
                  <div className="w-full h-1 sm:h-2 bg-[#8B5E3C] border sm:border-2 border-[#3C2F2F] rounded-full mb-1 sm:mb-2" />
                  <div className="flex gap-0.5 sm:gap-1.5 items-end justify-center">
                    {[
                      { color: "bg-[#3C2F2F]", label: "C", height: "h-6 sm:h-14", width: "w-2 sm:w-5" },
                      { color: "bg-[#E57C82]", label: "S", height: "h-6 sm:h-14", width: "w-2 sm:w-5" },
                      { color: "bg-[#8D9974]", label: "P", height: "h-5 sm:h-13", width: "w-2 sm:w-5" }
                    ].map((bot, idx) => (
                      <div 
                        key={idx} 
                        className={`flex flex-col items-center transition-all ${hoveredPart === "sauce" ? "wiggle-bottle" : ""}`}
                        style={{ animationDelay: `${idx * 0.15}s` }}
                      >
                        <div className="w-0.5 bg-white border border-[#3C2F2F] rounded-t-xs -mb-[1px] z-10 h-1 sm:h-2" />
                        <div className={`${bot.width} ${bot.height} ${bot.color} rounded-xs border sm:border-2 border-[#3C2F2F] relative shadow-inner flex items-center justify-center`}>
                          <span className="text-[4px] sm:text-[5px] text-white/50 font-mono font-bold leading-none">{bot.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


                {/* SECTION C: TOPPING BAR (RIGHT COZY CORNER) */}
                <div 
                  className={`absolute bottom-[10%] right-[3%] w-[19%] h-[38%] p-1 sm:p-3 border rounded-xl sm:rounded-2xl flex flex-col justify-end items-center transition-all duration-300 cursor-pointer ${
                    hoveredPart === "topping" 
                      ? "scale-108 border-[#8B5E3C] bg-white shadow-xl z-25" 
                      : "border-transparent text-[#3C2F2F]"
                  }`}
                  onMouseEnter={() => setHoveredPart("topping")}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => handlePartSelect("topping")}
                >
                  <div className="w-full h-0.5 sm:h-1.5 bg-[#5A5A40] border border-[#3C2F2F] rounded-full mb-1 sm:mb-3" />
                  <div className="flex gap-0.5 sm:gap-1.5 items-end justify-center">
                    {[
                      { emoji: "🍪" },
                      { emoji: "🌈" },
                      { emoji: "☁️" }
                    ].map((jar, idx) => (
                      <div 
                        key={idx} 
                        className={`flex flex-col items-center transition-all ${hoveredPart === "topping" ? "jar-glow" : ""}`}
                        style={{ animationDelay: `${idx * 0.2}s` }}
                      >
                        <div className="w-1.5 sm:w-3 h-1 bg-[#8B5E3C] border border-[#251D1D] rounded-t-xs -mb-[1px] z-10" />
                        <div className="w-2.5 sm:w-5.5 h-5 sm:h-12 bg-white/70 backdrop-blur-3xs rounded-b-md border sm:border-2 border-[#3C2F2F] flex items-center justify-center relative">
                          <span className="text-[7px] sm:text-[10px] leading-none">{jar.emoji}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


                {/* SECTION D: TABLE SIGNAGE (EASEL STAND chalkboard ON THE TOP FRONT) */}
                <div 
                  className={`absolute bottom-[10%] left-[45%] w-[12%] h-[24%] flex flex-col justify-end items-center transition-all duration-300 cursor-pointer ${
                    hoveredPart === "signage" 
                      ? "scale-105 rotate-1 shadow-md z-25" 
                      : "sign-sway text-[#3C2F2F]"
                  }`}
                  onMouseEnter={() => setHoveredPart("signage")}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => handlePartSelect("signage")}
                >
                  <div className="w-full h-full bg-[#5C3A21]/90 rounded-md border sm:border-2 border-[#3C2F2F] p-0.5 relative shadow-lg">
                    <div className="w-full h-full bg-[#1E293B] rounded-xs flex items-center justify-center font-mono select-none overflow-hidden">
                      <span className="text-[3px] sm:text-[5px] text-yellow-100 font-extrabold tracking-tighter leading-none uppercase">TEPI</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* HOVER PULSING OPTICAL MARKERS (HOTSPOTS) OVERLAY */}

              {/* Hotspot 1: Wooden Rack */}
              <div 
                className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30"
                onMouseEnter={() => setHoveredPart("rack")}
                onClick={() => handlePartSelect("rack")}
              >
                <div className="relative flex items-center justify-center cursor-pointer">
                  <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500/30 pulse-outer-ring" />
                  <button 
                    className={`w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[10px] sm:text-sm font-bold shadow-xl border transition-all duration-300 ${
                      hoveredPart === "rack" 
                        ? "bg-amber-600 text-white border-white scale-110" 
                        : "bg-[#8B5E3C] text-[#FAF7F2] border-[#FAF7F2]/80"
                    }`}
                  >
                    🪵
                  </button>
                </div>
              </div>

              {/* Hotspot 2: Sauce Station */}
              <div 
                className="absolute bottom-[28%] left-[12%] z-30"
                onMouseEnter={() => setHoveredPart("sauce")}
                onClick={() => handlePartSelect("sauce")}
              >
                <div className="relative flex items-center justify-center cursor-pointer">
                  <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#E57C82]/30 pulse-outer-ring" />
                  <button 
                    className={`w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[10px] sm:text-sm font-bold shadow-xl border transition-all duration-300 ${
                      hoveredPart === "sauce" 
                        ? "bg-rose-500 text-white border-white scale-110 relative z-30" 
                        : "bg-[#E57C82] text-white border-[#FAF7F2]/80"
                    }`}
                  >
                    🍫
                  </button>
                </div>
              </div>

              {/* Hotspot 3: Topping Bar */}
              <div 
                className="absolute bottom-[28%] right-[11%] z-30"
                onMouseEnter={() => setHoveredPart("topping")}
                onClick={() => handlePartSelect("topping")}
              >
                <div className="relative flex items-center justify-center cursor-pointer">
                  <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#8D9974]/30 pulse-outer-ring" />
                  <button 
                    className={`w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[10px] sm:text-sm font-bold shadow-xl border transition-all duration-300 ${
                      hoveredPart === "topping" 
                        ? "bg-emerald-600 text-white border-white scale-110" 
                        : "bg-[#8D9974] text-white border-[#FAF7F2]/80"
                    }`}
                  >
                    🍪
                  </button>
                </div>
              </div>

              {/* Hotspot 4: Event Signage */}
              <div 
                className="absolute bottom-[22%] left-[39%] z-30"
                onMouseEnter={() => setHoveredPart("signage")}
                onClick={() => handlePartSelect("signage")}
              >
                <div className="relative flex items-center justify-center cursor-pointer">
                  <div className="absolute w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-neutral-400/30 pulse-outer-ring" />
                  <button 
                    className={`w-5 h-5 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[8px] sm:text-xs font-bold shadow-xl border transition-all duration-300 ${
                      hoveredPart === "signage" 
                        ? "bg-neutral-700 text-white border-white scale-110" 
                        : "bg-neutral-500 text-white border-[#FAF7F2]/80"
                    }`}
                  >
                    📸
                  </button>
                </div>
              </div>


              {/* TABLE FRONT LEDGE BOARD (RUSTIC DEEP CREAM TABLE CLOTH) */}
              <div className="absolute bottom-0 left-[2%] right-[2%] h-[12%] bg-[#F3EDE4] border-t-2 sm:border-t-4 border-[#3C2F2F] rounded-b-[20px] sm:rounded-b-[40px] z-10 flex flex-col justify-between p-1 sm:p-2 select-none">
                <div className="w-full text-center text-[4px] sm:text-[7px] leading-none text-[#3C2F2F]/20 select-none tracking-[1px] sm:tracking-[2.5px] overflow-hidden whitespace-nowrap">
                  ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄
                </div>
                <div className="w-full flex justify-between items-center text-[5px] sm:text-[9px] font-sans font-bold text-[#8B5E3C] uppercase tracking-wider px-1 sm:px-2">
                  <span>★ Wedding Spotlight</span>
                  <span className="bg-[#3C2F2F] text-[#FAF7F2] px-1 sm:px-2.5 py-0.5 rounded-sm text-[4px] sm:text-[8px] font-mono tracking-widest font-black uppercase">
                    BAR
                  </span>
                  <span>Tepi.co Aesthetic ★</span>
                </div>
              </div>

              {/* FLOATING HOVER TOOLTIPS WITH TRANSITION */}
              <AnimatePresence>
                {hoveredPart && (
                  <motion.div
                    key={hoveredPart}
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute z-40 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-current shadow-xl sm:shadow-2xl ${hotspotDetails[hoveredPart].colorTheme} text-[#3C2F2F] text-left`}
                    style={{
                      // Max size for tooltip, responsive layout widths
                      width: "84%",
                      maxWidth: "280px",
                      // Place beautifully absolute at top-1/2 or center-left relative on desktop,
                      // and fixed on mobile to prevent clipping issues.
                      top: "22%",
                      left: "50%",
                      transform: "translateX(-50%)"
                    }}
                  >
                    {/* Compact Close Button for Tooltip (very helpful on mobile!) */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setHoveredPart(null);
                      }}
                      className="absolute top-2 right-2 text-[#3C2F2F]/50 hover:text-[#3C2F2F] p-1 rounded-full bg-white/20 hover:bg-white/60 transition-colors"
                      title="Hide description"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2 mb-1.5 pr-4">
                      <span className="text-sm sm:text-xl">{hotspotDetails[hoveredPart].icon}</span>
                      <div>
                        <h4 className="font-serif font-black text-xs sm:text-sm text-[#3C2F2F] leading-tight">
                          {hotspotDetails[hoveredPart].title}
                        </h4>
                        <p className="text-[8px] sm:text-[10px] uppercase font-bold text-[#8B5E3C] tracking-wider leading-none mt-0.5">
                          {hotspotDetails[hoveredPart].subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-[10.5px] sm:text-xs text-gray-700 leading-relaxed font-sans mt-1">
                      {hotspotDetails[hoveredPart].description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

          {/* DUAL COMFORT PANEL: Elegant pills below the booth (excellent navigation for mobile touch / manual selector) */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5 justify-center w-full max-w-[620px] px-2 mt-4 select-text">
            {[
              { key: "rack", label: "🪵 Wooden Display Rack", color: "hover:bg-amber-50" },
              { key: "sauce", label: "🍫 Sauce Station", color: "hover:bg-rose-50" },
              { key: "topping", label: "🍪 Topping Bar", color: "hover:bg-emerald-50" },
              { key: "signage", label: "📸 Custom Signage", color: "hover:bg-neutral-100" }
            ].map((chip) => (
              <button
                key={chip.key}
                onMouseEnter={() => setHoveredPart(chip.key as BoothPart)}
                onMouseLeave={() => setHoveredPart(null)}
                onClick={() => handlePartSelect(chip.key as BoothPart)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold font-sans border transition-all duration-300 ${
                  hoveredPart === chip.key
                    ? "bg-[#8B5E3C] text-white border-[#8B5E3C] shadow-md transform -translate-y-0.5 scale-105"
                    : `bg-white text-[#3C2F2F] border-[#E5E1D8] ${chip.color} active:bg-[#F3EDE4]`
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

        </div>

        {/* Real-Life Physical Event Setup Photo Overview Grid */}
        <div className="mt-14 sm:mt-18 bg-white max-w-4xl mx-auto rounded-2xl sm:rounded-[32px] border border-[#E5E1D8] shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0 transition-all duration-300 hover:shadow-xl">
          
          {/* Photo Frame Column (Click to View Full Screen Indicator) */}
          <div className="md:col-span-6 relative overflow-hidden bg-[#FAF7F2] p-5 sm:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E5E1D8]">
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="relative group w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-4 border-white rotate-[-1deg] hover:rotate-0 hover:scale-[1.01] transition-all duration-500 cursor-zoom-in"
              title="Click to view full screen"
            >
              <img 
                src={SetupImg} 
                alt="Tepi.Co Wooden Donut Booth Physical Setup" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Dark Hover Dim Overlay with Magnifying Glass Cue */}
              <div className="absolute inset-0 bg-[#3C2F2F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 text-[#3C2F2F] px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-350">
                  <ZoomIn className="w-4 h-4 text-[#8B5E3C]" />
                  <span>View Full Screen</span>
                </div>
              </div>
              
              {/* Ribbon tag / sticker look */}
              <div className="absolute top-3 right-3 bg-[#8B5E3C] text-white px-3 py-1 rounded-md text-[9px] font-sans font-bold uppercase tracking-widest shadow-md">
                Live Preview 📸
              </div>
            </div>
          </div>

          {/* Description & Premium Details Column */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-center space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full inline-block mb-3.5">
                Physical Event Deco Overview
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3C2F2F] tracking-tight">
                Our Real-Life Wedding & Party Setup
              </h3>
              <div className="w-12 h-0.5 bg-[#8B5E3C]/40 mt-2" />
            </div>

            <p className="text-xs sm:text-sm text-[#3C2F2F]/80 leading-relaxed font-sans">
              This photograph captures our real physical wooden mini donut station styled live at an event venue. Our structured pine timber boards, natural warm illumination, and curated apothecary elements combine to create an elegant social hub that elevates any setting.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex gap-3 items-start">
                <span className="text-emerald-700 font-extrabold text-sm bg-emerald-50 w-5 h-5 rounded-full flex items-center justify-center border border-emerald-200">✓</span>
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#3C2F2F]">Handcrafted Aesthetic Elements</h4>
                  <p className="text-[11.5px] text-gray-500">Includes our signature solid timber board, organic fresh leaf garlands, and warm candlelanterns.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-emerald-700 font-extrabold text-sm bg-emerald-50 w-5 h-5 rounded-full flex items-center justify-center border border-emerald-200">✓</span>
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#3C2F2F]">Social Media Hub</h4>
                  <p className="text-[11.5px] text-gray-500">Provides a premium visual backdrop where guests love taking pictures with their sweet customized creations.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* DETAILED LIGHTBOX MODAL WITH ZOOM CONTROL, EXIT CLUES AND FADE ANIMATIONS */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-zinc-950/95 backdrop-blur-md p-4 select-none"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between text-zinc-100 p-2 relative z-10 self-stretch">
              <div className="flex flex-col">
                <span className="text-xs text-amber-400 font-extrabold tracking-[0.2em] font-mono leading-none">TEPI.CO DECO PREVIEW</span>
                <span className="text-[10px] text-zinc-400 font-sans mt-1">Wooden Mini Donut Booth physical photo</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(false);
                }}
                className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white rounded-full transition-colors flex items-center justify-center outline-none shadow-xl"
                title="Close full-screen image (Exit Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Imaged Frame */}
            <div className="flex-1 flex items-center justify-center relative overflow-hidden self-stretch max-h-[80vh] py-3">
              <motion.div
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 400 }}
                className="max-h-full max-w-full p-2 relative"
                onClick={(e) => e.stopPropagation()} // block auto closing on image click
              >
                <img 
                  src={SetupImg} 
                  alt="Tepi.Co Wooden Donut Booth Physical Setup Fullscreen view" 
                  className="rounded-xl border border-zinc-800 max-h-[75vh] max-w-[90vw] md:max-w-[70vw] object-contain shadow-[0_0_80px_rgba(0,0,0,0.8)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Bottom info banner */}
            <div className="w-full max-w-md mx-auto text-center p-3 relative z-10 self-stretch">
              <div className="bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-2xl px-6 py-3.5 text-xs sm:text-sm font-sans flex flex-col items-center shadow-2xl">
                <p className="font-serif italic text-zinc-100">“Truly a premium wedding attraction!”</p>
                <span className="text-[10px] text-amber-500 font-bold uppercase mt-1.5 tracking-widest font-mono">★ Close view by clicking background or Esc ★</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

