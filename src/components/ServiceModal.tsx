import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Star, ChevronRight } from 'lucide-react';
import { ServiceItem, CategoryModalData } from '../types';

interface ServiceModalProps {
  category?: CategoryModalData | null;
  service?: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
  onViewAllCategoryServices?: (categoryId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  category,
  service,
  onClose,
  onBookService,
  onViewAllCategoryServices,
}) => {
  if (!category && !service) return null;

  const modalImages = category
    ? category.images
    : service?.images || ['/images/modal-facial-1.jpg', '/images/modal-facial-2.jpg'];

  const modalTitle = category ? category.title : (service ? service.title : '');
  const modalRating = category ? category.rating : (service ? service.rating : 4.9);

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
          className="relative bg-white text-black w-full max-w-4xl max-h-[92dvh] md:max-h-[88vh] shadow-2xl rounded-none z-10 grid grid-cols-1 md:grid-cols-12 border border-black/10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-black hover:text-white border border-black/10 flex items-center justify-center text-neutral-600 transition-colors shadow-2xs cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: 2 Stacked Images on Desktop, Compact Side-by-Side Dual-Photo Strip on Mobile */}
          <div className="md:col-span-5 p-3 sm:p-4 md:p-5 bg-neutral-50/70 border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-center shrink-0">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
              <div className="h-20 sm:h-24 md:h-48 lg:h-52 overflow-hidden bg-neutral-200">
                <img
                  src={modalImages[0] || '/images/modal-facial-1.jpg'}
                  alt={modalTitle}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-20 sm:h-24 md:h-48 lg:h-52 overflow-hidden bg-neutral-200">
                <img
                  src={modalImages[1] || '/images/modal-facial-2.jpg'}
                  alt={`${modalTitle} treatment`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Category Services List OR Single Service Details */}
          {category ? (
            <div className="md:col-span-7 p-3.5 sm:p-6 md:p-7 flex flex-col justify-between overflow-hidden min-h-0">
              {/* Category Header */}
              <div className="border-b border-black/10 pb-2.5 sm:pb-3.5 space-y-1 sm:space-y-1.5 shrink-0 pr-8">
                <div className="flex items-center gap-1.5 text-black font-bold text-xs">
                  <div className="flex text-black">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                    ))}
                  </div>
                  <span className="text-xs font-bold">{modalRating}</span>
                  <span className="text-neutral-400 font-normal ml-1">• {category.count}</span>
                </div>

                <h2 className="font-cobe font-extrabold uppercase text-lg sm:text-2xl md:text-3xl tracking-tight text-black leading-tight">
                  {modalTitle}
                </h2>

                <p className="text-xs text-neutral-600 leading-snug line-clamp-2">
                  {category.description}
                </p>
              </div>

              {/* Scrollable List of Specific Services */}
              <div className="flex-1 overflow-y-auto py-2 sm:py-3 pr-1 sm:pr-2 space-y-3 sm:space-y-4 max-h-[46vh] sm:max-h-[360px] md:max-h-[400px]">
                {category.subCategories.map((subCat) => (
                  <div key={subCat.id} className="space-y-1.5">
                    {/* Subcategory Header */}
                    <div className="text-[11px] sm:text-xs font-cobe font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100/90 px-2.5 py-1 border-l-2 border-black">
                      {subCat.title}
                    </div>

                    {/* Service Rows */}
                    <div className="divide-y divide-black/5">
                      {subCat.items.map((item) => (
                        <div
                          key={item.id}
                          className="py-2.5 sm:py-3 px-2 sm:px-2.5 hover:bg-neutral-50/80 transition-colors"
                        >
                          <div className="flex items-baseline justify-between gap-2.5">
                            <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                              <span className="font-product-sans font-bold text-xs sm:text-sm md:text-base text-black leading-tight">
                                {item.name}
                              </span>
                              {item.gender !== 'all' && (
                                <span className="text-[9px] sm:text-[10px] uppercase font-semibold px-1.5 py-0.2 rounded-xs bg-neutral-200/80 text-neutral-700">
                                  {item.gender}
                                </span>
                              )}
                            </div>
                            <span className="font-cobe font-bold text-xs sm:text-sm md:text-base text-black shrink-0">
                              {item.currency || '₹'}{item.price.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-neutral-600 mt-1 leading-snug">
                            {item.description || `Bespoke ${item.name} treatment delivered with premium organic formulas by Alora specialists.`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Footer Call-To-Action */}
              <div className="pt-2.5 sm:pt-3 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0 bg-white">
                <span className="text-neutral-500 font-medium text-center sm:text-left text-[11px] sm:text-xs">
                  Booking is done from our dedicated booking menu.
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onViewAllCategoryServices?.(category.id);
                  }}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 bg-black text-white font-product-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all rounded-full shadow-2xs active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Book in Services Menu</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Fallback single service display */
            service && (
              <div className="md:col-span-7 p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-black font-bold text-xs sm:text-sm">
                    <div className="flex text-black">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-bold">{service.rating}</span>
                  </div>

                  <h2 className="font-cobe font-extrabold uppercase text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight text-black pr-8">
                    {service.title}
                  </h2>

                  <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-black border-b border-black/10 pb-2">
                    <span className="font-cobe font-bold text-lg sm:text-xl text-black">
                      {service.currency || '₹'}{service.price}
                    </span>
                    <div className="flex items-center gap-1.5 text-neutral-700 text-xs sm:text-sm font-semibold">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-snug line-clamp-2">
                    {service.description}
                  </p>

                  <div className="pt-1">
                    <h4 className="font-cobe font-bold uppercase text-[11px] sm:text-xs tracking-wider text-black mb-0.5">
                      IDEAL FOR:
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-snug">
                      {service.idealFor}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                  <span className="text-neutral-500 font-medium text-center sm:text-left text-[11px] sm:text-xs">
                    Booking is done from our dedicated booking menu.
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      if (onViewAllCategoryServices) {
                        onViewAllCategoryServices(service.category);
                      } else {
                        onBookService(service);
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-800 transition-all rounded-full shadow-sm cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <span>Book in Services Menu</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
