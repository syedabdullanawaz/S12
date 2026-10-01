import React from 'react';
import { motion } from 'framer-motion';

const SALON_PICS = [
  {
    id: 'salon-1',
    src: '/images/salon/salon-1.webp',
    title: 'Luxury Styling Chairs',
    caption: 'Spacious, ergonomic styling stations with warm lighting and personal care.',
  },
  {
    id: 'salon-2',
    src: '/images/salon/salon-2.webp',
    title: 'Hair Wash & Spa Lounge',
    caption: 'Reclining massage wash chairs for deep scalp treatments and hair washes.',
  },
  {
    id: 'salon-3',
    src: '/images/salon/salon-3.webp',
    title: 'Private Facial Rooms',
    caption: 'Peaceful, quiet private suites designed for clinical facials & body spa rituals.',
  },
  {
    id: 'salon-4',
    src: '/images/salon/salon-4.webp',
    title: 'Modern Aesthetics',
    caption: 'Clean, elegant sanctuary built for your relaxation and comfort.',
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

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_PICS.map((pic, idx) => (
            <motion.div
              key={pic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={pic.src}
                alt={pic.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="font-cobe font-bold uppercase text-lg sm:text-xl tracking-tight text-white mb-1">
                  {pic.title}
                </h3>
                <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                  {pic.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonShowcase;
