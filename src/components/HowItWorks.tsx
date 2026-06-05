import React from "react";
import { CircleDot, Blend, Sparkles, Smile } from "lucide-react";
import { motion } from "motion/react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <CircleDot className="w-6 h-6 text-[#8B5E3C]" />,
      title: "Pick Your Donut",
      desc: "Choose our featherlight, cloud-soft warm mini donut. Placed fresh onto your event plate.",
      bg: "bg-[#FAF7F2]"
    },
    {
      num: "02",
      icon: <Blend className="w-6 h-6 text-[#E57C82]" />,
      title: "Dip in Sauce",
      desc: "Glaze the donut crown with smooth Belgian milk choco, sweet strawberry, or earthy pistachio glaze.",
      bg: "bg-[#FAF4EB]/80"
    },
    {
      num: "03",
      icon: <Sparkles className="w-6 h-6 text-[#8D9974]" />,
      title: "Add Toppings",
      desc: "Sprinkle with crunchy caramelized Biscoff, cookies crumbs, chocolate chips or mini marshmallows.",
      bg: "bg-[#FAF7F2]"
    },
    {
      num: "04",
      icon: <Smile className="w-6 h-6 text-amber-500" />,
      title: "Enjoy Sweet Bliss",
      desc: "Appreciate your custom culinary masterpiece! Perfect as a visual social asset and premium dessert.",
      bg: "bg-[#FAF4EB]/80"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-12 bg-white border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            The Guest Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3C2F2F]">
            Pick • Dip • Sprinkle • Enjoy
          </h2>
          <div className="w-24 h-0.5 bg-[#8B5E3C]/30 mx-auto mt-4" />
          <p className="text-[#3C2F2F]/70 text-sm mt-4 leading-relaxed font-sans">
            We don&apos;t just serve quality warm desserts—we invite your guests into a playful, aromatic journey of personalized taste customisation.
          </p>
        </div>

        {/* Elegant Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-6 sm:p-8 rounded-2xl border border-[#E5E1D8]/70 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${step.bg}`}
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E1D8] flex items-center justify-center shadow-3xs">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-serif font-bold italic text-[#8B5E3C]/20">
                    {step.num}
                  </span>
                </div>

                {/* Body Text */}
                <h3 className="text-lg font-serif font-bold text-[#3C2F2F] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3C2F2F]/75 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              {/* Decorative connector for large screens */}
              <div className="hidden lg:block h-1.5 w-full bg-radial from-[#8B5E3C]/15 to-transparent mt-6 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Real Wooden Booth highlight box */}
        <div className="mt-16 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E5E1D8] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/10 rounded-full blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-3">
              <span className="text-[#8B5E3C] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider block">★ Premium Attraction Setup</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3C2F2F]">
                Our Beautiful Wooden Dessert Booth
              </h3>
              <p className="text-xs sm:text-sm text-[#3C2F2F]/80 leading-relaxed max-w-3xl">
                Unlike ordinary wedding catering tables, our customized premium wooden stand is styled around a beautiful botanical aesthetic with natural timber beams, eucalyptus leaves, warm glow lantern lights, and curated glassware. It serves as an active visual magnet and a stellar photo spot!
              </p>
            </div>

            <div className="md:col-span-4 flex justify-end md:justify-center">
              <a 
                href={`https://wa.me/60136648159?text=Hi%20Tepi.Co%21%20I%20am%20interested%20in%20having%20the%20booth%20for%20my%20event.%20Please%20share%20details.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#8B5E3C] hover:bg-[#734D32] text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-sans px-6 py-3 rounded-xl transition-all shadow-md inline-block whitespace-nowrap"
              >
                Inquire on WhatsApp 💬
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
