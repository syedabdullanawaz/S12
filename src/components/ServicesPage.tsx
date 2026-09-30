import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Search, ArrowLeft } from 'lucide-react';
import { fullServicesCategories, ServiceMainCategory } from '../data/fullServicesData';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  initialCategoryId?: string;
  onBackToHome: () => void;
  onBookServiceItem: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ initialCategoryId, onBackToHome, onBookServiceItem }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(initialCategoryId || 'hair-essentials');
  const [genderFilter, setGenderFilter] = useState<'all' | 'women' | 'men'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    'women-hair-cut': true,
    'global-colour': true,
    'hair-care-repair': true,
    'waxing-list': true,
    'facial-glow': true,
    'nail-care': true,
    'spa-therapies': true,
    'men-grooming-list': true,
    'mani-pedi-list': true,
  });

  const carouselRef = useRef<HTMLDivElement>(null);

  const selectedCategory =
    fullServicesCategories.find((cat) => cat.id === selectedCategoryId) || fullServicesCategories[0];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleAccordion = (subCatId: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [subCatId]: !prev[subCatId],
    }));
  };

  const handleBookClick = (item: { id: string; name: string; price: number; currency: string }) => {
    const serviceObj: ServiceItem = {
      id: item.id,
      title: item.name,
      price: item.price,
      duration: '45min',
      description: `Bespoke ${item.name} performed by senior stylists at Alora.`,
      category: 'skincare',
      rating: 4.9,
      idealFor: 'Instant perfection and premium care',
      involved: [
        {
          title: 'Consultation & Preparation',
          description: 'Personalized assessment of your needs and custom formula setup.',
        },
        {
          title: 'Treatment Execution',
          description: 'Expert technique using highest quality clinical products.',
        },
      ],
      images: ['/images/modal-facial-1.jpg', '/images/modal-facial-2.jpg'],
    };
    onBookServiceItem(serviceObj);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-black pb-20 font-sans selection:bg-black selection:text-white">
      {/* Top Bar Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-4 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="group inline-flex items-center gap-2 text-black font-semibold text-sm hover:text-neutral-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>

        {/* Search Input Bar (Desktop View) */}
        <div className="hidden md:flex items-center relative w-72">
          <Search className="w-4 h-4 absolute left-3.5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search for service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-black/15 rounded-full text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black shadow-xs transition-colors"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-2">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-cobe font-extrabold text-black mb-6 tracking-tight">
          Select Services
        </h1>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (MD and above) - Category Carousel & Full Accordion Cards   */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          {/* Horizontal Category Slider Bar */}
          <div className="relative mb-10 group">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-black/15 shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={carouselRef}
              className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {fullServicesCategories.map((cat) => {
                const isSelected = selectedCategoryId === cat.id;
                return (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-xl cursor-pointer transition-all duration-200 shrink-0 min-w-[110px] sm:min-w-[125px] ${
                      isSelected
                        ? 'bg-neutral-900 border-2 border-black shadow-md text-white'
                        : 'bg-white/80 border border-black/10 hover:border-black/30 hover:bg-white text-neutral-800'
                    }`}
                  >
                    <div
                      className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden mb-2.5 border-2 shadow-xs transition-transform ${
                        isSelected ? 'border-amber-400 scale-105 ring-2 ring-white/20' : 'border-black/15'
                      }`}
                    >
                      <img
                        src={cat.avatar}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className={`text-xs text-center leading-tight max-w-[100px] ${
                        isSelected ? 'text-white font-cobe font-bold' : 'text-neutral-800 font-medium'
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollCarousel('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-black/15 shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Active Category Heading */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-cobe font-bold text-black tracking-tight">
              {selectedCategory.name}
            </h2>

            {/* Gender Filter Pills (Desktop - No Emojis, Less Curved) */}
            <div className="flex items-center gap-1.5 bg-neutral-200/80 p-1 rounded-lg text-xs font-semibold border border-black/10">
              <button
                onClick={() => setGenderFilter('all')}
                className={`px-4 py-1.5 rounded-md transition-all ${
                  genderFilter === 'all'
                    ? 'bg-black text-white shadow-xs font-bold'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setGenderFilter('women')}
                className={`px-4 py-1.5 rounded-md transition-all ${
                  genderFilter === 'women'
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Women
              </button>
              <button
                onClick={() => setGenderFilter('men')}
                className={`px-4 py-1.5 rounded-md transition-all ${
                  genderFilter === 'men'
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Men
              </button>
            </div>
          </div>

          {/* SubCategories Accordions */}
          <div className="space-y-6">
            {selectedCategory.subCategories.map((subCat) => {
              const isOpen = openAccordions[subCat.id] !== false;

              // Filter items based on gender filter & search query
              const filteredItems = subCat.items.filter((item) => {
                const matchesGender =
                  genderFilter === 'all' || item.gender === 'all' || item.gender === genderFilter;
                const matchesSearch =
                  !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesGender && matchesSearch;
              });

              if (filteredItems.length === 0) return null;

              return (
                <div
                  key={subCat.id}
                  className="bg-white rounded-xl border border-black/10 shadow-xs overflow-hidden"
                >
                  {/* Accordion Header - Heading retains Cobe Bold */}
                  <div
                    onClick={() => toggleAccordion(subCat.id)}
                    className="p-5 sm:p-6 flex items-center justify-between cursor-pointer bg-white hover:bg-neutral-50/70 transition-colors border-b border-black/5"
                  >
                    <h3 className="font-cobe font-bold text-black text-lg sm:text-xl">
                      {subCat.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center text-neutral-800">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Accordion Content Body - Listings use Product Sans */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="divide-y divide-black/5"
                      >
                        {filteredItems.map((item) => (
                          <div
                            key={item.id}
                            className="p-5 sm:p-6 flex items-center justify-between hover:bg-neutral-50/40 transition-colors"
                          >
                            <div className="space-y-1">
                              <h4 className="font-product-sans font-bold text-black text-base sm:text-lg">
                                {item.name}
                              </h4>
                              <p className="font-cobe font-bold text-black text-base sm:text-lg">
                                {item.currency}
                                {item.price.toLocaleString()}
                              </p>
                            </div>

                            <button
                              onClick={() => handleBookClick(item)}
                              className="px-7 py-2 rounded-full border-2 border-black bg-white text-black font-product-sans font-bold text-sm hover:bg-black hover:text-white transition-all shadow-2xs hover:shadow-xs active:scale-95"
                            >
                              Book
                            </button>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< MD) - Exact Layout from User Phone Screenshot             */}
        {/* ========================================================================= */}
        <div className="md:hidden">
          {/* Top Search Bar */}
          <div className="relative mb-4">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-neutral-400" />
            <input
              type="text"
              placeholder="Search for service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/15 rounded-lg text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black shadow-xs transition-colors"
            />
          </div>

          {/* Gender Filter Buttons Bar - No Emojis, Less Curved */}
          <div className="flex items-center gap-3 mb-5">
            <button
              onClick={() => setGenderFilter(genderFilter === 'men' ? 'all' : 'men')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-semibold border transition-all flex items-center justify-center shadow-2xs ${
                genderFilter === 'men'
                  ? 'border-black bg-neutral-900 text-white font-bold shadow-xs'
                  : 'border-black/15 bg-white text-neutral-800 hover:border-black/40'
              }`}
            >
              Men
            </button>

            <button
              onClick={() => setGenderFilter(genderFilter === 'women' ? 'all' : 'women')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-semibold border transition-all flex items-center justify-center shadow-2xs ${
                genderFilter === 'women'
                  ? 'border-black bg-neutral-900 text-white font-bold shadow-xs'
                  : 'border-black/15 bg-white text-neutral-800 hover:border-black/40'
              }`}
            >
              Women
            </button>
          </div>

          {/* Split Screen Layout (Left Sidebar Categories + Right Main Feed) */}
          <div className="flex items-start gap-3 min-h-[500px]">
            {/* Left Vertical Category Sidebar */}
            <div className="w-20 sm:w-24 shrink-0 flex flex-col gap-3 py-1 overflow-y-auto max-h-[600px] no-scrollbar">
              {fullServicesCategories.map((cat) => {
                const isSelected = selectedCategoryId === cat.id;
                return (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-neutral-900 border border-black shadow-xs text-white'
                        : 'bg-white border border-black/10 hover:border-black/30 text-neutral-800'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden mb-1 border-2 transition-transform ${
                        isSelected ? 'border-amber-400 scale-105' : 'border-black/10'
                      }`}
                    >
                      <img
                        src={cat.avatar}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className={`text-[10px] text-center leading-tight max-w-[70px] ${
                        isSelected ? 'font-cobe font-bold text-white' : 'font-medium text-neutral-700'
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Main Content Area - Rounded XL */}
            <div className="flex-1 bg-white rounded-xl border border-black/10 p-4 shadow-xs max-h-[600px] overflow-y-auto">
              {selectedCategory.subCategories.map((subCat) => {
                const isOpen = openAccordions[subCat.id] !== false;

                const filteredItems = subCat.items.filter((item) => {
                  const matchesGender =
                    genderFilter === 'all' || item.gender === 'all' || item.gender === genderFilter;
                  const matchesSearch =
                    !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase());
                  return matchesGender && matchesSearch;
                });

                if (filteredItems.length === 0) return null;

                return (
                  <div key={subCat.id} className="mb-4 last:mb-0">
                    {/* Header - Heading retains Cobe Bold */}
                    <div
                      onClick={() => toggleAccordion(subCat.id)}
                      className="flex items-center justify-between py-2.5 border-b border-black/10 cursor-pointer"
                    >
                      <h4 className="font-cobe font-bold text-black text-sm">{subCat.title}</h4>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-neutral-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-600" />
                      )}
                    </div>

                    {/* Service Rows - Listings use Product Sans */}
                    {isOpen && (
                      <div className="divide-y divide-black/5 py-1">
                        {filteredItems.map((item) => (
                          <div
                            key={item.id}
                            className="py-3 flex items-center justify-between gap-2"
                          >
                            <div>
                              <p className="font-product-sans font-bold text-black text-xs sm:text-sm">
                                {item.name}
                              </p>
                              <p className="font-cobe font-bold text-black text-xs sm:text-sm mt-0.5">
                                {item.currency}
                                {item.price.toLocaleString()}
                              </p>
                            </div>

                            <button
                              onClick={() => handleBookClick(item)}
                              className="px-4 py-1 rounded-full border border-black bg-white text-black font-product-sans font-bold text-xs hover:bg-black hover:text-white transition-all shadow-2xs active:scale-95 shrink-0"
                            >
                              Book
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};
