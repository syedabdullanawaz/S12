import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden bg-neutral-900 flex flex-col justify-between">
      {/* Background Image with subtle zoom overlay */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Lunaria Beauty Salon Model"
          className="w-full h-full object-cover object-center brightness-95 contrast-[1.03]"
        />
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
      </motion.div>

      {/* Top Spacer for fixed header */}
      <div className="relative z-10 pt-24" />

      {/* Hero Subtitle & CTA (Bottom-Left) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-md text-white space-y-3"
        >
          <p className="text-sm md:text-base font-normal tracking-wide text-neutral-100/90 leading-relaxed">
            Your glow begins here. Welcome to Lunaria.
          </p>

          <div>
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2 text-base md:text-lg font-medium text-white border-b-2 border-white/80 pb-0.5 hover:border-white transition-all hover:translate-x-1"
            >
              <span>Book an Appointment</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Main Typography - BEAUTY SALON across bottom */}
      <div className="relative z-10 w-full overflow-hidden pb-4 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full flex justify-center items-center px-4"
        >
          <h1 className="font-display font-extrabold uppercase text-white tracking-tighter text-[11.5vw] sm:text-[11vw] leading-none select-none flex items-center justify-center gap-1 sm:gap-2">
            <span>BE</span>
            {/* Arch icon replacing the letter 'A' */}
            <span className="inline-flex items-center justify-center text-current">
              <span className="arch-icon scale-90 sm:scale-100 inline-block"></span>
            </span>
            <span>UTY</span>
            <span className="ml-3 sm:ml-6">SALON</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
