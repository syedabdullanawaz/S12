import React from 'react';
import { motion } from 'framer-motion';

const MAIN_FEATURE = {
  id: 'salon-1',
  src: '/images/salon/salon-1.webp',
  title: 'Luxury Styling Stations',
  caption: 'Spacious, ergonomic styling stations with warm ambient lighting and personal care.',
  badge: 'FEATURED SANCTUARY',
};

const SIDE_PICS = [
  {
    id: 'salon-2',
    src: '/images/salon/salon-2.webp',
    title: 'Hair Wash & Spa Lounge',
    caption: 'Reclining massage chairs for deep scalp detox & washes.',
  },
  {
    id: 'salon-3',
    src: '/images/salon/salon-3.webp',
    title: 'Private Facial Rooms',
    caption: 'Quiet, serene suites for skin & body spa rituals.',
  },
  {
    id: 'salon-4',
    src: '/images/salon/salon-4.webp',
    title: 'Modern Aesthetics',
    caption: 'Clean, minimalist design for pure relaxation.',
  },
];

export const SalonShowcase: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#f7f6f2] text-black border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 mb-2.5 inline-block font-mono"
          >
            HSR Layout • Bengaluru
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cobe font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-black"
          >
            OUR SALON & ATMOSPHERE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-neutral-600 text-sm sm:text-base max-w-xl mx-auto font-normal"
          >
            Step inside our serene, luxury sanctuary designed for peace, comfort, and personalized care.
          </motion.p>
        </div>

        {/* Asymmetric Layout: 1 Big Pic on Left, 3 Small Pics on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Big Featured Image on Left (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 group relative min-h-[360px] sm:min-h-[440px] lg:h-[540px] rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <img
              src={MAIN_FEATURE.src}
              alt={MAIN_FEATURE.title}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            {/* Top Badge */}
            <div className="absolute top-6 left-6">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md border border-white/30 text-white px-3.5 py-1.5 rounded-full">
                {MAIN_FEATURE.badge}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
              <h3 className="font-cobe font-extrabold uppercase text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white mb-2">
                {MAIN_FEATURE.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-lg">
                {MAIN_FEATURE.caption}
              </p>
            </div>
          </motion.div>

          {/* 3 Smaller Stacked Images on Right (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-4 lg:h-[540px]">
            {SIDE_PICS.map((pic, idx) => (
              <motion.div
                key={pic.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
                className="group relative h-40 sm:h-44 lg:h-[164px] rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={pic.src}
                  alt={pic.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-white">
                  <h4 className="font-cobe font-bold uppercase text-base sm:text-lg tracking-tight text-white mb-0.5">
                    {pic.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-300 font-normal line-clamp-1">
                    {pic.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalonShowcase;
