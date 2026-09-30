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
  image: string;
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
    image: '/images/services/hair-essential.jpg',
  },
  {
    id: 'mani-pedi-offer',
    categoryTag: 'MANI & PEDI RITUALS',
    discount: 'COMPLIMENTARY MASSAGE',
    title: 'Free Hand & Foot Spa with Mani-Pedi Combos',
    description: 'Treat your hands & feet to deep exfoliation, gel manicure, and a soothing aromatherapy oil massage.',
    promoCode: 'GLOWFEET',
    validUntil: 'This Week Only',
    image: '/images/services/mani-pedi.jpg',
  },
  {
    id: 'skincare-offer',
    categoryTag: 'SKIN CARE & GLOW',
    discount: 'FLAT 15% OFF',
    title: 'Hydra-Facial & 24K Gold Radiance Treatment',
    description: 'Deep pore purification and hyaluronic acid infusion for instant skin clarity, hydration, and event radiance.',
    promoCode: 'RADIANCE15',
    validUntil: 'Special Deal',
    image: '/images/services/skin-care.jpg',
  },
  {
    id: 'body-spa-offer',
    categoryTag: 'BODY RITUALS & SPA',
    discount: '25% OFF',
    title: 'Deep Tissue Relief & Thermal Stone Spa Wrap',
    description: 'Melt away chronic tension and detoxify skin with heated basalt stones and organic botanical oil wraps.',
    promoCode: 'SANCTUARY25',
    validUntil: 'Weekday Sanctuary',
    image: '/images/services/body-rituals.jpg',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
  }, []);

  // 3 seconds auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const currentOffer = OFFERS[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.02,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.6 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-[90vh] min-h-[600px] max-h-[850px] overflow-hidden bg-black text-white flex flex-col justify-end"
    >
      {/* 4K Ultra-Crisp Background Image Slider */}
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
          >
            <img
              src={currentOffer.image}
              alt={currentOffer.title}
              className="w-full h-full object-cover object-center contrast-[1.06] brightness-[0.95] saturate-[1.08] transform scale-[1.01]"
            />
            {/* Subtle Gradient Overlay solely at the bottom for sharp text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Bottom Content & Minimal Progress Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Left Side: Offer Title, Minimal White Tag, Promo Code & CTA */}
          <div className="md:col-span-8 lg:col-span-7 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentOffer.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-3"
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
                <p className="text-neutral-200 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed drop-shadow">
                  {currentOffer.description}
                </p>

                {/* Minimal Monochrome Promo Code & Claim CTA */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-xs sm:text-sm shadow-xl">
                    <span className="text-neutral-400 font-normal uppercase tracking-wider">Use Code:</span>
                    <span className="font-mono font-bold text-white tracking-widest text-sm sm:text-base">
                      {currentOffer.promoCode}
                    </span>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-white text-black font-cobe font-extrabold uppercase text-sm sm:text-base tracking-wider hover:bg-neutral-200 transition-all duration-300 shadow-2xl hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Claim Offer & Book</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
