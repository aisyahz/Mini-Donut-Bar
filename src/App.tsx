import React, { useState } from "react";
import { WoodenBoothHero } from "./components/WoodenBoothHero";
import { HowItWorks } from "./components/HowItWorks";
import { MenuSection } from "./components/MenuSection";
import { PackagesSection } from "./components/PackagesSection";
import { FrozenSupplierSection } from "./components/FrozenSupplierSection";
import { WhatsappCTA } from "./components/WhatsappCTA";
import { siteContent } from "./siteContent";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Tag, 
  HelpCircle, 
  Phone, 
  Clock, 
  Smile, 
  ChevronRight, 
  Quote, 
  Heart, 
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How early in advance should we book the mini donut bar?",
      a: "We recommend booking at least 3 to 4 weeks in advance, especially for weekend wedding dates in KL and Selangor. This allows us to secure and styled-prepare your specific custom timber structure elements and logistics."
    },
    {
      q: "Do you provide on-site servers for the wedding reception?",
      a: "Yes! Our Signature and Deluxe packages come with 1 or 2 friendly, uniform-clad servers who will manage the setup, keep ingredients replenished, and assist your guests in dipping and decorating their mini donuts."
    },
    {
      q: "Are your ingredients Halal?",
      a: "Absolutely. All our dough mixes, Belgian chocolate block bases, glazes, and premium toppings are sourced exclusively from Certified Halal local and import suppliers."
    },
    {
      q: "Can we request custom themes or custom chalkboard greeting drawings?",
      a: "Yes! Our chalkboard team is happy to draw customized names (e.g. 'Sarah & Faiz Wedding') or themes for your event tabletop display at no extra cost in the Deluxe package."
    }
  ];

  return (
    <div className="bg-[#FAF7F2] font-sans text-[#3C2F2F] antialiased scroll-smooth selection:bg-[#8B5E3C]/20 selection:text-[#8B5E3C]">
      
      {/* 1. TOP AESTHETIC EVENT BRAND NAVIGATION BAR */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[#E5E1D8] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Branding Logo Motif */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#8B5E3C] flex items-center justify-center font-serif text-white font-bold text-lg sm:text-xl shadow-xs group-hover:scale-105 transition-transform">
                🍩
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-[#3C2F2F] text-lg sm:text-2xl leading-none tracking-tight">
                  {siteContent.brandName}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#5A5A40] font-bold font-mono mt-0.5">
                  Mini Donut Bar
                </span>
              </div>
            </a>

            {/* Middle Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#3C2F2F]/80">
              <a href="#how-it-works" className="hover:text-[#8B5E3C] transition-colors pb-1 border-b border-transparent hover:border-[#8B5E3C]/20Heading">The Experience</a>
              <a href="#booth-highlight" className="hover:text-[#8B5E3C] transition-colors pb-1 border-b border-transparent hover:border-[#8B5E3C]/20">The Wooden Booth</a>
              <a href="#menu-section" className="hover:text-[#8B5E3C] transition-colors pb-1 border-b border-transparent hover:border-[#8B5E3C]/20">Our Flavours</a>
              <a href="#our_packages_section" className="hover:text-[#8B5E3C] transition-colors pb-1 border-b border-transparent hover:border-[#8B5E3C]/20">Packages</a>
              <a href="#frozen_supplier_section" className="hover:text-[#8B5E3C] transition-colors pb-1 border-b border-transparent hover:border-[#8B5E3C]/20">Supplier Price</a>
            </div>

            {/* Quick Action Button */}
            <div className="flex items-center gap-3">
              <a 
                href={`${siteContent.whatsappMessageBase}?text=Hi%20Tepi.Co%21%20I%20would%20love%20to%20query%20about%20booking%20your%20donut%20bar%20booth%20for%20my%20event.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#8B5E3C] hover:bg-[#734D32] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest font-sans px-4 py-2.5 rounded-lg sm:rounded-xl transition-all shadow-xs"
                id="nav-whatsapp-cta"
              >
                Inquire Bar 💬
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* 2. PREMIUM HERO ATTRACTION */}
      <WoodenBoothHero />

      {/* 3. HOW IT WORKS (FOUR STEPS) */}
      <HowItWorks />

      {/* 4. EXCLUSIVE WOODEN BOOTH HIGHLIGHT SECTION */}
      <section id="booth-highlight" className="py-20 px-4 md:px-12 bg-white border-b border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Booth Characteristics Grid */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  Aesthetic Presentation
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3C2F2F]">
                  Designed to Elevate Your Venue Styling
                </h2>
                <div className="w-20 h-0.5 bg-[#8B5E3C]/30 mt-3" />
              </div>

              <p className="text-[#3C2F2F]/80 text-sm sm:text-base leading-relaxed">
                At Tepi.Co, we believe a dessert table should never look plain or industrialized. Our original, handcrafted **solid pine wood bar stand** immediately warm-ups the event visual canvas, turning simple mini donuts into a central engagement spot.
              </p>

              {/* List of custom luxury setup details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {siteContent.aboutBooth.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#FAF7F2] text-xs font-bold text-[#8B5E3C] flex items-center justify-center mt-1 scale-95 border border-[#E5E1D8]">
                      ★
                    </div>
                    <span className="text-xs sm:text-sm text-[#3C2F2F]/90 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Micro client quotes */}
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5E1D8] flex gap-3 italic text-xs text-gray-600 font-serif leading-relaxed relative">
                <Quote className="w-8 h-8 text-[#8B5E3C]/20 flex-shrink-0 absolute -top-3 left-4 scale-125" />
                <div className="pl-6 pt-1">
                  “Everyone was taking photos around the pine wood dessert booth! The warm candle highlights and botanical garland matches our boho wedding theme perfectly.”
                  <span className="block mt-1 font-sans font-bold text-[10px] uppercase text-[#8B5E3C] not-italic tracking-wider">— Aliah & Mir, Groom & Bride, Selangor</span>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive layout showcasing booth components and hotspots */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[520px] bg-[#FAF7F2]/60 rounded-3xl p-6 border border-[#E5E1D8]/80 space-y-6">
                
                <h3 className="text-lg font-serif font-bold text-[#3C2F2F] text-center mb-2 flex items-center justify-center gap-1.5">
                  <span>Interactive Booth Layout Breakdown</span>
                  <Sparkles className="w-4 h-4 text-[#8B5E3C]" />
                </h3>

                {/* Hotspots stack */}
                <div className="space-y-3.5">
                  {[
                    { title: "Wooden Display Pegboard Rack", desc: "Solid timber board that elegantly showcases fresh fluffy golden mini donut bases in high-fidelity stacks. Guests pick directly from here.", tag: "Interactive Area" },
                    { title: "Clay Sauce Dippers & Bottles", desc: "Bespoke terracotta bowls and food-grade squeeze bottles for drip decorations. Keeps chocolate smooth and hygienic.", tag: "Custom Stations" },
                    { title: "Apothecary Topping Glass Elements", desc: "Aesthetic glass jars loaded with Lotus Biscoff, crumbs, and sprinkles. Highlights look like traditional premium confectionery.", tag: "Glassware Styling" },
                    { title: "Florist Garland & Glow Highlights", desc: "Fresh eucalyptus stalks paired with romantic candle lantern blurs. Blends effortlessly into modern garden or hall styling.", tag: "Boho Touch" }
                  ].map((hot, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="bg-white p-4 rounded-2xl border border-[#E5E1D8] shadow-3xs flex gap-3 items-start cursor-pointer group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#5A5A40]/10 text-[#5A5A40] flex items-center justify-center text-xs font-bold font-mono">
                        0{idx + 1}
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center flex-wrap">
                          <h4 className="font-serif font-bold text-sm text-[#3C2F2F] group-hover:text-[#8B5E3C] transition-colors">{hot.title}</h4>
                          <span className="text-[8px] bg-amber-500/10 text-amber-700 px-2 rounded font-mono font-bold uppercase">{hot.tag}</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-snug">{hot.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center font-serif text-xs italic text-[#5A5A40] flex items-center justify-center gap-1.5">
                  <span>✨ 100% Mobile & Setup-Ready across KL & Selangor Valley</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SAUCE & TOPPING SHOWCASE MENU */}
      <MenuSection />

      {/* 6. OUR PACKAGE CARDS */}
      <PackagesSection />

      {/* 7. UPCOMING EVENT / REAL STORY SHOWCASE */}
      <section id="upcoming_event_section" className="py-20 px-4 md:px-12 bg-white border-b border-[#E5E1D8]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#8D9974] bg-[#8D9974]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 select-none">
              Live Showcase Agenda
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3C2F2F]">
              Our Next Event Highlights
            </h2>
            <div className="w-16 h-0.5 bg-[#8D9974] mx-auto mt-3" />
          </div>

          {/* Elegant card detailing Rinjani Majestic Wedding on 6 June 2026 */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-[#FAF7F2] rounded-3xl border border-[#E5E1D8] p-6 sm:p-10 shadow-sm relative overflow-hidden"
          >
            {/* Preparing Banner Badge */}
            <div className="absolute top-4 right-4 bg-[#8D9974] text-white text-[10px] uppercase font-mono font-bold tracking-widest px-3 py-1 rounded-md">
              Prep Stage
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Event Metadata: Left (8 columns) */}
              <div className="md:col-span-8 space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 text-[#8B5E3C] font-mono text-xs font-bold uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  <span>Upcoming Booking Showcase</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3C2F2F] tracking-tight">
                  Rinjani Majestic Celebration
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {siteContent.upcomingEvent.description} Follow our social reels as we install our bespoke botanical mini donut bar to charm wedding attendees of all ages.
                </p>

                {/* Grid details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white px-3 py-2 rounded-xl border border-gray-100 flex flex-col justify-center">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">Venue Match</span>
                    <span className="font-serif font-extrabold text-xs text-[#3C2F2F] mt-0.5">{siteContent.upcomingEvent.venue}</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-gray-100 flex flex-col justify-center">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">Planned Date</span>
                    <span className="font-serif font-extrabold text-xs text-[#3C2F2F] mt-0.5">{siteContent.upcomingEvent.date}</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-gray-100 flex flex-col justify-center">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">Tier Layout</span>
                    <span className="font-serif font-extrabold text-xs text-[#3C2F2F] mt-0.5">{siteContent.upcomingEvent.qty}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Booth illustration representation: Right (4 columns) */}
              <div className="md:col-span-4 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-[#8D9974]/10 border-2 border-dashed border-[#8D9974]/30 flex flex-col items-center justify-center text-center p-3 relative shadow-inner">
                  <div className="text-4xl mb-1 filter drop-shadow-sm select-none">🌸💍</div>
                  <span className="text-[10px] uppercase font-bold text-[#5A5A40] tracking-widest font-sans leading-none block">Boho Theme</span>
                  <span className="text-[8px] text-gray-400 font-mono tracking-widest uppercase mt-1 block">Tepi.Co</span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* 8. FROZEN SUPPLIER SECTIONS */}
      <FrozenSupplierSection />

      {/* 9. POPULAR ACCORDION FAQS */}
      <section className="py-20 px-4 md:px-12 bg-white border-b border-[#E5E1D8]">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Helpful Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3C2F2F]">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-[#8B5E3C]/30 mx-auto mt-3" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-[#E5E1D8] rounded-2xl bg-white overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center transition-all bg-[#FAF7F2]/35 hover:bg-[#FAF7F2] select-none"
                >
                  <span className="font-serif sm:text-base text-sm font-bold text-[#3C2F2F] tracking-tight pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#8B5E3C] transition-transform flex-shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 py-4 border-t border-[#E5E1D8]/60 text-xs sm:text-sm text-[#3C2F2F]/80 leading-relaxed bg-[#FAF7F2]/10 whitespace-pre-wrap">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. FINAL WHATSAPP CALL TO ACTION */}
      <WhatsappCTA />

      {/* 11. REFINED FOOTER */}
      <footer className="bg-white border-t border-[#E5E1D8] py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo brand info */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#8B5E3C] flex items-center justify-center font-serif text-white font-bold select-none text-base">
              🍩
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-[#3C2F2F] tracking-tight">{siteContent.brandName}</span>
              <span className="text-[8px] text-gray-400 block tracking-widest font-mono uppercase mt-0.5">MALAYSIAN DESSERT STAND</span>
            </div>
          </div>

          {/* Copyright description */}
          <div className="text-center text-[11px] text-gray-400">
            &copy; {new Date().getFullYear()} Tepi.Co Mini Donut Bar (KL & Selangor). Handcrafted wooden design for beautiful celebrations. All rights reserved.
          </div>

          {/* Aesthetic credentials and labels */}
          <div className="flex gap-4 text-xs font-mono font-bold text-[#5A5A40] uppercase">
            <span>🧁 Halal Always</span>
            <span>🌿 Premium Aesthetic</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
