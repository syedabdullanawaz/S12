import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export interface OfferSlide {
  id: string;
  categoryTag: string;
  discount: string;
  title: string;
  description: string;
  promoCode: string;
  validUntil: string;
  mobileImage: string;
  desktopImage: string;
}

const OFFERS: OfferSlide[] = [
  {
    id: 'haircut-offer',
    categoryTag: 'HAIR ESSENTIALS',
    discount: '20% OFF',
    title: 'Precision Haircut & Advanced Styling',
    description: 'Transform your style with bespoke cuts, luxury shampoo wash, and blow-dry setting by master hair stylists.',
    promoCode: 'ALORA20',
    validUntil: 'Limited Time Offer',
    mobileImage: '/images/services/hair-essential.jpg',
    desktopImage: '/images/offers_desktop/facial-desktop.jpg',
  },
  {
    id: 'mani-pedi-offer',
    categoryTag: 'MANI & PEDI RITUALS',
    discount: 'COMPLIMENTARY MASSAGE',
    title: 'Free Hand & Foot Spa with Mani-Pedi Combos',
    description: 'Treat your hands & feet to deep exfoliation, gel manicure, and a soothing aromatherapy oil massage.',
    promoCode: 'GLOWFEET',
    validUntil: 'This Week Only',
    mobileImage: '/images/services/mani-pedi.jpg',
    desktopImage: '/images/offers_desktop/nail-desktop.jpg',
  },
  {
    id: 'skincare-offer',
    categoryTag: 'SKIN CARE & GLOW',
    discount: 'FLAT 15% OFF',
    title: 'Hydra-Facial & 24K Gold Radiance Treatment',
    description: 'Deep pore purification and hyaluronic acid infusion for instant skin clarity, hydration, and event radiance.',
    promoCode: 'RADIANCE15',
    validUntil: 'Special Deal',
    mobileImage: '/images/services/skin-care.jpg',
    desktopImage: '/images/offers_desktop/skincare-desktop.jpg',
  },
  {
    id: 'body-spa-offer',
    categoryTag: 'BODY RITUALS & SPA',
    discount: '25% OFF',
    title: 'Deep Tissue Relief & Thermal Stone Spa Wrap',
    description: 'Melt away chronic tension and detoxify skin with heated basalt stones and organic botanical oil wraps.',
    promoCode: 'SANCTUARY25',
    validUntil: 'Weekday Sanctuary',
    mobileImage: '/images/services/body-rituals.jpg',
    desktopImage: '/images/offers_desktop/spa-desktop.jpg',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Pre-load all offer images into browser memory to eliminate image decode lag
  useEffect(() => {
    OFFERS.forEach((offer) => {
      const imgM = new Image();
      imgM.src = offer.mobileImage;
      const imgD = new Image();
      imgD.src = offer.desktopImage;
    });
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
  }, []);

  const goToSlide = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // 3 seconds auto-scroll interval (optimized for low-end devices and smooth pacing)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const currentOffer = OFFERS[currentIndex];

  // Pure hardware-accelerated GPU transitions (no scale resampling, no spring physics)
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.45, ease: 'easeOut' },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.35, ease: 'easeIn' },
      },
    }),
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative w-full h-[90vh] min-h-[580px] max-h-[850px] overflow-hidden bg-black text-white flex flex-col justify-end select-none"
    >
      {/* Background Image Slider with hardware-accelerated transforms */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentOffer.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
            style={{ willChange: 'transform, opacity' }}
          >
            <picture className="block w-full h-full">
              {/* Desktop specific offer image */}
              <source media="(min-width: 768px)" srcSet={currentOffer.desktopImage} />
              {/* Mobile specific offer image (no heavy CSS filters for silky smooth 60fps) */}
              <img
                src={currentOffer.mobileImage}
                alt={currentOffer.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </picture>
            {/* Smooth gradient overlay for contrast and crisp typography without GPU filter overhead */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Bottom Content & Slide Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Left Side: Offer Title, Minimal White Tag, Promo Code & CTA */}
          <div className="md:col-span-8 lg:col-span-8 space-y-3 sm:space-y-4">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`content-${currentOffer.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="space-y-2.5 sm:space-y-3"
              >
                {/* Minimalist White Discount Badge & Validity */}
                <div className="inline-flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white text-black font-cobe font-black uppercase tracking-wider text-xs sm:text-sm shadow-md">
                    <Tag className="w-3.5 h-3.5 fill-black" />
                    {currentOffer.discount}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium uppercase tracking-widest drop-shadow">
                    {currentOffer.validUntil}
                  </span>
                </div>

                {/* Offer Title */}
                <h2 className="font-cobe font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] drop-shadow-md">
                  {currentOffer.title}
                </h2>

                {/* Offer Description */}
                <p className="text-neutral-200 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed drop-shadow line-clamp-2 sm:line-clamp-none">
                  {currentOffer.description}
                </p>

                {/* Promo Code & Claim CTA (No backdrop-blur to keep mobile GPUs fast) */}
                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg bg-neutral-950/85 border border-white/20 text-xs sm:text-sm shadow-lg">
                    <span className="text-neutral-400 font-normal uppercase tracking-wider text-[11px] sm:text-xs">Use Code:</span>
                    <span className="font-mono font-bold text-white tracking-widest text-xs sm:text-sm md:text-base">
                      {currentOffer.promoCode}
                    </span>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white text-black font-cobe font-extrabold uppercase text-xs sm:text-sm md:text-base tracking-wider hover:bg-neutral-200 transition-all duration-300 shadow-2xl active:scale-95 cursor-pointer"
                  >
                    <span>Claim Offer & Book</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Slide Indicator Bars */}
          <div className="md:col-span-4 lg:col-span-4 flex items-center justify-start md:justify-end gap-2 pt-2 md:pt-0">
            {OFFERS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-400 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-9 sm:w-12 bg-white shadow-xs'
                    : 'w-2.5 sm:w-3 bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
