import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { ServiceItem } from '../types';
import { serviceCategories } from '../data/servicesData';

interface ServicesDirectoryProps {
  selectedCategory: 'all' | 'skincare' | 'body' | 'hair';
  onCategoryChange: (cat: 'all' | 'skincare' | 'body' | 'hair') => void;
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesDirectory: React.FC<ServicesDirectoryProps> = ({
  selectedCategory,
  onCategoryChange,
  services,
  onSelectService,
}) => {
  const currentCategoryObj = serviceCategories.find((c) => c.id === selectedCategory) || serviceCategories[1];

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section id="services-catalogue" className="py-24 bg-[#f7f6f2] text-black px-6 md:px-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Section Heading: (SERVICES) + SERVICES on Mobile, OUR (SERVICES) SERVICES on PC */}
        <div className="text-center mb-10 md:mb-12">
          {/* Mobile Heading */}
          <div className="md:hidden">
            <div className="inline-flex items-center px-4 py-1 border border-black/30 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 bg-white/50 backdrop-blur-xs">
              SERVICES
            </div>
            <h2 className="font-cobe font-extrabold uppercase text-4xl tracking-tighter text-black">
              SERVICES
            </h2>
          </div>

          {/* PC Heading: Exactly the original layout */}
          <h2 className="hidden md:inline-flex font-cobe font-extrabold uppercase sm:text-6xl lg:text-7xl tracking-tighter text-black items-center justify-center flex-wrap gap-x-4 gap-y-2">
            <span>OUR</span>
            {/* Center bracket badge */}
            <span className="inline-flex items-center px-4 py-1 border border-black/30 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase my-auto bg-white/50 backdrop-blur-xs">
              SERVICES
            </span>
            <span>SERVICES</span>
          </h2>
        </div>

        {/* Top Filter Cards Bar: Stacked vertically on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 md:mb-16">
          {serviceCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`group relative h-28 sm:h-32 md:h-44 rounded-none p-4 sm:p-5 md:p-6 flex flex-col justify-end cursor-pointer border transition-all duration-300 overflow-hidden bg-white ${
                  isActive
                    ? 'border-2 border-black shadow-sm'
                    : 'border border-black/25 hover:border-black'
                }`}
              >
                {/* Sliding Image from bottom to top on hover, or visible on active */}
                <div className={`absolute inset-0 z-0 transition-transform duration-500 ease-out pointer-events-none ${
                  isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                }`}>
                  <img
                    src={cat.bgImage}
                    alt={cat.title}
                    className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
                  />
                  {/* Atmospheric gradient overlay to ensure text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                </div>

                {/* Content at the bottom */}
                <div className="relative z-10 flex items-end justify-between w-full">
                  <div>
                    <h4 className={`font-cobe font-bold uppercase text-base sm:text-lg md:text-xl tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-black group-hover:text-white'
                    }`}>
                      {cat.title}
                    </h4>
                    <p className={`text-xs mt-0.5 transition-colors duration-300 font-medium ${
                      isActive ? 'text-neutral-200' : 'text-neutral-500 group-hover:text-neutral-200'
                    }`}>
                      {cat.count} services
                    </p>
                  </div>

                  {/* Icon */}
                  <div className={`transition-colors duration-300 font-bold text-base sm:text-lg select-none pb-0.5 ${
                    isActive ? 'text-white' : 'text-black group-hover:text-white'
                  }`}>
                    {cat.iconType === 'circle' ? '○' : cat.iconType === 'square-grid' ? '⌸' : '✕'}
                  </div>
                </div>

                {/* Active indicator bar at top */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-black z-10" />
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Category Description Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-5">
            <h3 className="font-cobe font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              {currentCategoryObj.title}
            </h3>
          </div>
          <div className="lg:col-span-7 space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>{currentCategoryObj.description}</p>
            <p className="text-neutral-600 text-sm sm:text-base">
              {currentCategoryObj.subDescription}
            </p>
          </div>
        </div>

        {/* Services Cards Layout Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Render First Set of Services */}
            {filteredServices.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} onClick={() => onSelectService(service)} />
            ))}

            {/* Featured Image Block (in middle of grid like video) */}
            {filteredServices.length >= 4 && (
              <div className="md:col-span-2 lg:col-span-2 h-[340px] relative overflow-hidden group shadow-xs">
                <img
                  src="/images/skincare-featured.jpg"
                  alt="Alora Facial Treatment"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                  <span className="text-xs uppercase tracking-widest text-neutral-300 font-semibold block mb-1">
                    Signature Method
                  </span>
                  <h4 className="font-cobe font-bold text-xl uppercase tracking-tight">
                    Pure Botanical Science
                  </h4>
                </div>
              </div>
            )}

            {/* Decorative Bracket Badge Block in Grid */}
            {filteredServices.length >= 4 && (
              <div className="md:col-span-1 lg:col-span-1 h-[340px] bg-white border border-black/15 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-full border-t border-b border-black/20 py-8 my-auto flex flex-col items-center justify-center">
                  <span className="text-2xl font-serif text-neutral-400 mb-2">(</span>
                  <span className="font-cobe font-bold text-sm tracking-widest uppercase text-black">
                    OUR SERVICES
                  </span>
                  <span className="text-2xl font-serif text-neutral-400 mt-2">)</span>
                </div>
              </div>
            )}

            {/* Render Remaining Services */}
            {filteredServices.slice(4).map((service) => (
              <ServiceCard key={service.id} service={service} onClick={() => onSelectService(service)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Individual Service Card Component
const ServiceCard: React.FC<{ service: ServiceItem; onClick: () => void }> = ({ service, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="bg-white border border-black/15 p-6 md:p-7 flex flex-col justify-between h-[340px] cursor-pointer hover:border-black transition-all shadow-xs hover:shadow-md group relative overflow-hidden"
    >
      <div>
        <h4 className="font-cobe font-bold uppercase text-lg sm:text-xl tracking-tight leading-snug group-hover:text-black mb-2">
          {service.title}
        </h4>

        {/* Price & Duration Row */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-cobe font-bold text-lg text-black">
            ${service.price}
          </span>
          {/* Duration beside price on hover (desktop) or always visible on mobile */}
          <div className="flex md:hidden md:group-hover:flex items-center gap-1.5 text-xs font-semibold text-neutral-600 transition-all duration-200">
            <Clock className="w-3.5 h-3.5 text-neutral-500" />
            <span>{service.duration}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-4 font-normal">
          {service.description}
        </p>
      </div>

      {/* Bottom Area */}
      <div className="pt-2 flex items-center justify-between min-h-[44px]">
        {/* Unhovered state on desktop: shows duration at bottom left */}
        <div className="hidden md:group-hover:hidden md:flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
          <Clock className="w-3.5 h-3.5" />
          <span>{service.duration}</span>
        </div>

        {/* Hovered state on desktop & default on mobile: [Book Now] + Learn More */}
        <div className="flex md:hidden md:group-hover:flex items-center gap-4 transition-all duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="px-4 py-2 bg-black text-white text-xs font-bold tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            Book Now
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="text-xs font-semibold text-black hover:underline cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};
