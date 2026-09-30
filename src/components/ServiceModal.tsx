import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Star } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookService }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs"
        />

        {/* Modal Card Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative bg-white text-black w-full max-w-4xl max-h-[92dvh] md:max-h-[90vh] shadow-2xl rounded-none z-10 grid grid-cols-1 md:grid-cols-12 border border-black/10 overflow-hidden md:overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-black hover:text-white border border-black/10 flex items-center justify-center text-neutral-600 transition-colors shadow-2xs cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: 2 Stacked Images on Desktop, Compact Side-by-Side Dual-Photo Strip on Mobile */}
          <div className="md:col-span-5 p-3 sm:p-4 md:p-5 bg-neutral-50/70 border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-center">
            {/* Mobile: 2 Compact Side-by-Side Photos (Height ~90px, fits within phone screen without scrolling) */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
              <div className="h-20 sm:h-24 md:h-48 lg:h-52 overflow-hidden bg-neutral-200">
                <img
                  src={service.images[0] || '/images/modal-facial-1.jpg'}
                  alt={service.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-20 sm:h-24 md:h-48 lg:h-52 overflow-hidden bg-neutral-200">
                <img
                  src={service.images[1] || '/images/modal-facial-2.jpg'}
                  alt={`${service.title} treatment`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Service Information */}
          <div className="md:col-span-7 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between space-y-2.5 sm:space-y-3.5 md:space-y-5">
            <div className="space-y-2 sm:space-y-2.5 md:space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 text-black font-bold text-xs sm:text-sm">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold">{service.rating}</span>
              </div>

              {/* Title */}
              <h2 className="font-cobe font-extrabold uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight text-black pr-8">
                {service.title}
              </h2>

              {/* Price & Duration */}
              <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-black border-b border-black/10 pb-2 md:pb-3">
                <span className="font-cobe font-bold text-lg sm:text-xl text-black">${service.price}</span>
                <div className="flex items-center gap-1.5 text-neutral-700 text-xs sm:text-sm font-semibold">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-neutral-700 leading-snug md:leading-relaxed font-normal line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                {service.description}
              </p>

              {/* IDEAL FOR: */}
              <div className="pt-0.5 md:pt-1">
                <h4 className="font-cobe font-bold uppercase text-[11px] sm:text-xs tracking-wider text-black mb-0.5">
                  IDEAL FOR:
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-snug">
                  {service.idealFor}
                </p>
              </div>

              {/* WHAT'S INVOLVED: */}
              <div className="pt-0.5 md:pt-1 space-y-1 sm:space-y-1.5 md:space-y-2.5">
                <h4 className="font-cobe font-bold uppercase text-[11px] sm:text-xs tracking-wider text-black mb-1 md:mb-2">
                  WHAT'S INVOLVED:
                </h4>

                <div className="space-y-1 sm:space-y-1.5 md:space-y-2 text-xs sm:text-sm">
                  {service.involved.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2 leading-snug">
                      <span className="text-black font-bold text-xs leading-none shrink-0 mt-0.5">▪</span>
                      <div>
                        <span className="font-bold text-black">{step.title}</span>
                        <p className="text-neutral-600 text-[11px] sm:text-xs leading-normal hidden sm:block">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="pt-2 sm:pt-3 md:pt-5 border-t border-black/10">
              <button
                onClick={() => {
                  onBookService(service);
                  onClose();
                }}
                className="w-full sm:w-auto px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-800 transition-colors shadow-md cursor-pointer active:scale-95"
              >
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
