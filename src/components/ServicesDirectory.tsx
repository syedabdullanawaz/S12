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
        {/* Main Section Heading: OUR (SERVICES) SERVICES */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-black inline-flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
            <span>OUR</span>
            {/* Center bracket badge */}
            <span className="inline-flex items-center px-4 py-1 border border-black/30 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase my-auto bg-white/50 backdrop-blur-xs">
              SERVICES
            </span>
            <span>SERVICES</span>
          </h2>
        </div>

        {/* Top Filter Cards Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {serviceCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`relative h-44 rounded-none p-6 flex flex-col justify-between cursor-pointer border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'border-black bg-neutral-900 text-white shadow-lg'
                    : 'border-black/20 bg-white text-black hover:border-black/60'
                }`}
              >
                {/* Active Background Texture for ALL or tab image */}
                {isActive && cat.id === 'all' && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={cat.bgImage}
                      alt={cat.title}
                      className="w-full h-full object-cover brightness-50 contrast-125 opacity-90"
                    />
                  </div>
                )}

                <div className="relative z-10 flex items-start justify-between w-full">
                  <div>
                    <h4 className="font-display font-bold uppercase text-lg sm:text-xl tracking-tight">
                      {cat.title}
                    </h4>
                    <p className={`text-xs mt-1 ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {cat.count} services
                    </p>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-none border flex items-center justify-center font-bold text-xs ${
                      isActive ? 'border-white/40 text-white' : 'border-black/20 text-black'
                    }`}
                  >
                    {cat.iconType === 'circle' ? '●' : cat.iconType === 'square-grid' ? '⌸' : '✕'}
                  </div>
                </div>

                <div className="relative z-10 flex justify-end items-center">
                  <span className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-black'}`}>
                    {isActive ? 'Selected' : 'View →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Category Description Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-5">
            <h3 className="font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight">
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
                  alt="Lunaria Facial Treatment"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                  <span className="text-xs uppercase tracking-widest text-neutral-300 font-semibold block mb-1">
                    Signature Method
                  </span>
                  <h4 className="font-display font-bold text-xl uppercase tracking-tight">
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
                  <span className="font-display font-bold text-sm tracking-widest uppercase text-black">
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
        <div className="flex items-start justify-between gap-4 mb-3">
          <h4 className="font-display font-bold uppercase text-lg sm:text-xl tracking-tight leading-snug group-hover:text-black">
            {service.title}
          </h4>
          <span className="font-display font-extrabold text-lg text-black">
            ${service.price}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-4 font-normal">
          {service.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-black/10 mt-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
          <Clock className="w-3.5 h-3.5" />
          <span>{service.duration}</span>
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-black group-hover:translate-x-1 transition-transform">
          Details →
        </span>
      </div>
    </motion.div>
  );
};
