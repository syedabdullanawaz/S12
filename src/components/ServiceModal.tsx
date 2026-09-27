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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm"
        />

        {/* Modal Card Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white text-black w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-none z-10 grid grid-cols-1 md:grid-cols-12 border border-black/10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column - 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-2 p-4 bg-neutral-50">
            <div className="h-48 sm:h-56 overflow-hidden">
              <img
                src={service.images[0] || '/images/modal-facial-1.jpg'}
                alt={service.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-48 sm:h-56 overflow-hidden">
              <img
                src={service.images[1] || '/images/modal-facial-2.jpg'}
                alt={`${service.title} treatment`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column - Service Information */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-black font-bold text-sm">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <span className="ml-1 text-sm font-semibold">{service.rating}</span>
              </div>

              {/* Title */}
              <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl tracking-tight leading-none text-black">
                {service.title}
              </h2>

              {/* Price & Duration */}
              <div className="flex items-center gap-4 text-base font-bold text-black border-b border-black/10 pb-4">
                <span className="text-xl font-extrabold">${service.price}</span>
                <span className="text-neutral-300">|</span>
                <div className="flex items-center gap-1.5 text-neutral-700 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                {service.description}
              </p>

              {/* IDEAL FOR: */}
              <div className="pt-2">
                <h4 className="font-display font-bold uppercase text-xs tracking-wider text-black mb-1">
                  IDEAL FOR:
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal">
                  {service.idealFor}
                </p>
              </div>

              {/* WHAT'S INVOLVED: */}
              <div className="pt-2 space-y-2.5">
                <h4 className="font-display font-bold uppercase text-xs tracking-wider text-black mb-2">
                  WHAT'S INVOLVED:
                </h4>

                <div className="space-y-3 text-xs sm:text-sm">
                  {service.involved.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-black font-bold text-base leading-none">■</span>
                      <div>
                        <span className="font-bold text-black">{step.title}</span>
                        <p className="text-neutral-600 text-xs sm:text-sm leading-normal">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="pt-6 border-t border-black/10">
              <button
                onClick={() => {
                  onBookService(service);
                  onClose();
                }}
                className="w-full sm:w-auto px-10 py-4 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-800 transition-colors shadow-md"
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
