import React from 'react';
import { motion } from 'framer-motion';

interface ServicesOverviewProps {
  onSelectCategory: (categoryId: 'skincare' | 'body' | 'hair') => void;
  onViewAll: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectCategory, onViewAll }) => {
  const categories = [
    {
      id: 'skincare' as const,
      title: 'SKIN CARE',
      count: '24 services',
      image: '/images/skincare-card.jpg',
      iconSymbol: '✕',
    },
    {
      id: 'body' as const,
      title: 'BODY RITUALS',
      count: '18 services',
      image: '/images/body-card.jpg',
      iconSymbol: '⌸',
    },
    {
      id: 'hair' as const,
      title: 'HAIR TREATMENTS',
      count: '12 services',
      image: '/images/hair-card.jpg',
      iconSymbol: '✕',
    },
  ];

  return (
    <section className="py-24 bg-[#f7f6f2] text-black px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl tracking-tight text-black"
          >
            OUR SERVICES
          </motion.h2>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative h-[480px] sm:h-[540px] rounded-none overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Card Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex items-end justify-between w-full">
                  {/* Left Text */}
                  <div>
                    <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl tracking-tight text-white mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-neutral-300 font-normal tracking-wide">
                      {cat.count}
                    </p>
                  </div>

                  {/* Right Icon */}
                  <div className="w-10 h-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white text-lg font-bold group-hover:bg-white group-hover:text-black transition-all duration-300">
                    {cat.iconSymbol}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom View All Link */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewAll}
            className="text-lg font-bold text-black border-b-2 border-black pb-0.5 hover:opacity-70 transition-opacity uppercase tracking-wider"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};
