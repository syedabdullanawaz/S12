import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ServiceItem, CategoryModalData } from '../types';
import { fullServicesCategories } from '../data/fullServicesData';

interface ServicesOverviewProps {
  onSelectCategory?: (category: CategoryModalData) => void;
  onSelectService?: (service: ServiceItem) => void;
  onViewAll: () => void;
}

const CATEGORY_CONFIGS = [
  {
    id: 'hair-essentials',
    title: 'Hair Essential',
    image: '/images/services/hair-essential.jpg',
    secondImage: '/images/services/hair-treatment.jpg',
    iconSymbol: '✕',
    rating: 4.9,
    description:
      'Precision haircut, revitalizing botanical hair wash, and custom blowout styling tailored to your face shape and hair texture.',
  },
  {
    id: 'skin-acne-treatments',
    title: 'Skin Care & Acne',
    image: '/images/services/skin-care.jpg',
    secondImage: '/images/modal-facial-1.jpg',
    iconSymbol: '⌸',
    rating: 4.9,
    description:
      'Clinical acne treatments, pore clarifying hydra-infusions, and de-tan skin rejuvenation facials.',
  },
  {
    id: 'waxing-laser',
    title: 'Waxing & Laser',
    image: '/images/services/waxing-laser.jpg',
    secondImage: '/images/body-card.jpg',
    iconSymbol: '✕',
    rating: 4.9,
    description:
      'Silky smooth skin with painless Rica organic waxing or medical-grade diode laser hair removal for long-lasting results.',
  },
  {
    id: 'eyebrow-lash-makeup',
    title: 'Brows, Lashes & Makeup',
    image: '/images/services/brows-lashes-makeup.jpg',
    secondImage: '/images/services/hair-colour.jpg',
    iconSymbol: '⌸',
    rating: 5.0,
    description:
      'Enhance your natural features with precision brow threading, semi-permanent lash extensions, and editorial makeup artistry.',
  },
  {
    id: 'nail-bar',
    title: 'Nail Bar & Extensions',
    image: '/images/services/nail-bar.jpg',
    secondImage: '/images/services/mani-pedi.jpg',
    iconSymbol: '✕',
    rating: 4.9,
    description:
      'Flawless acrylic and soft gel nail extensions with durable high-shine gel polish and custom minimalist nail art.',
  },
  {
    id: 'mani-pedi',
    title: 'Mani & Pedi',
    image: '/images/services/mani-pedi.jpg',
    secondImage: '/images/services/massage-spa.jpg',
    iconSymbol: '⌸',
    rating: 4.9,
    description:
      'Therapeutic soak, sea salt scrub exfoliation, warm towel wrap, and relaxing acupressure hand and foot massage.',
  },
  {
    id: 'massage-spa',
    title: 'Massage & Spa',
    image: '/images/services/massage-spa.jpg',
    secondImage: '/images/services/body-rituals.jpg',
    iconSymbol: '✕',
    rating: 5.0,
    description:
      'Holistic full-body Swedish or deep tissue massage using warm essential oils to release chronic tension and restore tranquility.',
  },
  {
    id: 'mens-grooming',
    title: "Men's Grooming",
    image: '/images/services/mens-grooming.jpg',
    secondImage: '/images/services/hair-essential.jpg',
    iconSymbol: '⌸',
    rating: 4.8,
    description:
      'Tailored executive haircut, straight razor beard sculpting with hot towel treatment, and invigorating scalp massage.',
  },
];

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSelectCategory,
  onSelectService,
  onViewAll,
}) => {
  // Memoize categories to avoid re-aggregating on every render
  const categories = useMemo(() => {
    return CATEGORY_CONFIGS.map((config) => {
      const fullCat = fullServicesCategories.find((c) => c.id === config.id);
      const subCategories = fullCat?.subCategories || [];
      const totalItems = subCategories.reduce((acc, sub) => acc + sub.items.length, 0);

      const modalData: CategoryModalData = {
        id: config.id,
        name: fullCat?.name || config.title,
        title: (fullCat?.name || config.title).toUpperCase(),
        count: `${totalItems} services`,
        rating: config.rating,
        description: config.description,
        images: [config.image, config.secondImage],
        subCategories: subCategories,
      };

      const fallbackService: ServiceItem = {
        id: config.id,
        title: (fullCat?.name || config.title).toUpperCase(),
        price: subCategories[0]?.items[0]?.price || 800,
        currency: subCategories[0]?.items[0]?.currency || '₹',
        duration: '45min',
        description: config.description,
        category: 'hair',
        rating: config.rating,
        idealFor: 'Routine beauty, grooming, and luxury salon care',
        involved: [
          { title: 'Personal Consultation', description: 'Expert consultation and styling assessment.' },
          { title: 'Treatment Procedure', description: 'Performed with premium organic products.' },
        ],
        images: [config.image, config.secondImage],
      };

      return {
        ...config,
        countText: `${totalItems} services`,
        modalData,
        fallbackService,
      };
    });
  }, []);

  const handleCardClick = (cat: (typeof categories)[0]) => {
    if (onSelectCategory) {
      onSelectCategory(cat.modalData);
    } else if (onSelectService) {
      onSelectService(cat.fallbackService);
    }
  };

  return (
    <section id="services-catalogue" className="py-14 sm:py-20 md:py-32 bg-[#f7f6f2] text-black px-3.5 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="font-cobe font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight text-black"
          >
            OUR SERVICES
          </motion.h2>
        </div>

        {/* 8 Grid Cards: 4x2 on PC, 2x4 on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-5 lg:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              onClick={() => handleCardClick(cat)}
              style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
              className="group relative h-[160px] sm:h-[260px] md:h-[350px] lg:h-[390px] rounded-none overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Card Image */}
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90 pointer-events-none" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-2.5 sm:p-5 md:p-6 flex flex-col justify-end text-white pointer-events-none">
                <div className="flex items-end justify-between w-full gap-1.5">
                  {/* Left Text */}
                  <div>
                    <h3 className="font-cobe font-bold uppercase text-[11px] sm:text-base md:text-lg lg:text-xl tracking-tight text-white mb-0.5 sm:mb-1 leading-tight sm:leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-neutral-300 font-normal tracking-wide">
                      {cat.countText}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom View All Link */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={onViewAll}
            className="text-base sm:text-lg font-bold text-black border-b-2 border-black pb-0.5 hover:opacity-70 transition-opacity uppercase tracking-wider cursor-pointer"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
