import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full h-screen h-[100dvh] min-h-[600px] overflow-hidden bg-neutral-900 flex flex-col justify-end">
      {/* Background Image with subtle zoom overlay */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <picture className="block w-full h-full">
          {/* PC / Desktop View */}
          <source media="(min-width: 768px)" srcSet="/images/alora_hero_bg_wide.jpg" />
          {/* Mobile View */}
          <img
            src="/images/alora_hero_bg_portrait.jpg"
            alt="Alora Beauty Salon Model"
            className="w-full h-full object-cover object-center brightness-95 contrast-[1.03]"
          />
        </picture>
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/15" />
      </motion.div>

      {/* Hero Subtitle & CTA (Positioned to Bottom-Left) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-2 md:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl text-white space-y-2 md:space-y-4"
        >
          {/* Mobile intro: 2 lines */}
          <div className="md:hidden font-cobe text-sm sm:text-base font-normal tracking-wide text-neutral-100/95 leading-snug">
            <p>Your glow begins here.</p>
            <p>Welcome to Alora.</p>
          </div>

          {/* PC intro: original single line paragraph */}
          <p className="hidden md:block font-cobe text-base sm:text-lg md:text-2xl lg:text-3xl font-normal md:font-medium tracking-wide text-neutral-100/95 leading-snug md:leading-relaxed">
            Your glow begins here. Welcome to Alora.
          </p>

          {/* Mobile CTA: clean underline */}
          <div className="md:hidden pt-0.5">
            <button
              onClick={onOpenBooking}
              className="font-cobe group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white border-b border-white pb-0.5 hover:border-neutral-300 transition-all cursor-pointer"
            >
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* PC CTA: original button with arrow */}
          <div className="hidden md:block">
            <button
              onClick={onOpenBooking}
              className="font-cobe group inline-flex items-center gap-2.5 text-base sm:text-lg md:text-xl lg:text-2xl font-medium md:font-bold text-white border-b-2 border-white/80 pb-1 hover:border-white transition-all hover:translate-x-1 cursor-pointer"
            >
              <span>Book an Appointment</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Main Typography - BEAUTY SALON: Stacked on mobile, original centered row on PC */}
      <div className="relative z-10 w-full overflow-hidden pb-3 sm:pb-4 md:pb-6">
        {/* Mobile View: Stacked BEAUTY / SALON scaled edge-to-edge left-to-right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="md:hidden w-full flex flex-col items-center px-1 overflow-hidden"
        >
          <h1 className="font-cobe font-extrabold uppercase text-white tracking-tight select-none flex flex-col items-center justify-center w-full">
            <span className="text-[24.2vw] leading-[0.82] block w-full text-center">
              BEAUTY
            </span>
            <span className="text-[28.1vw] leading-[0.82] block w-full text-center -mt-1 sm:-mt-2">
              SALON
            </span>
          </h1>
        </motion.div>

        {/* PC View: Exactly the original centered layout and sizing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="hidden md:flex w-full justify-center items-center px-4"
        >
          <h1 className="font-cobe font-extrabold uppercase text-white tracking-tighter text-[11.5vw] sm:text-[11vw] lg:text-[12vw] leading-none select-none flex items-center justify-center gap-3 sm:gap-6">
            <span>BEAUTY</span>
            <span>SALON</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
