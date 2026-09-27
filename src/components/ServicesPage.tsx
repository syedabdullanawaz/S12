import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Search, ArrowLeft, Crown } from 'lucide-react';
import { fullServicesCategories, ServiceMainCategory } from '../data/fullServicesData';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  onBackToHome: () => void;
  onBookServiceItem: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBackToHome, onBookServiceItem }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('hair-essentials');
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
      description: `Bespoke ${item.name} performed by senior stylists at Lunaria.`,
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20 font-sans">
      {/* Top Bar Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-4 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
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
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-xs focus:outline-none focus:border-sky-500 shadow-xs"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-2">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-sans tracking-tight">
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
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all"
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
                    className={`flex flex-col items-center justify-center p-3.5 rounded-2xl cursor-pointer transition-all duration-200 shrink-0 min-w-[110px] sm:min-w-[125px] ${
                      isSelected
                        ? 'bg-blue-50 border-2 border-blue-400 shadow-sm text-blue-900'
                        : 'bg-transparent border border-transparent hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div
                      className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden mb-2.5 border-2 shadow-xs ${
                        isSelected ? 'border-sky-500 scale-105' : 'border-slate-200'
                      }`}
                    >
                      <img
                        src={cat.avatar}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className={`text-xs font-semibold text-center leading-tight max-w-[100px] ${
                        isSelected ? 'text-sky-900 font-bold' : 'text-slate-800'
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
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Active Category Heading */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {selectedCategory.name}
            </h2>

            {/* Gender Filter Pills (Desktop) */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full text-xs font-semibold">
              <button
                onClick={() => setGenderFilter('all')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  genderFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setGenderFilter('women')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  genderFilter === 'women'
                    ? 'bg-pink-500 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                👩 Women
              </button>
              <button
                onClick={() => setGenderFilter('men')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  genderFilter === 'men'
                    ? 'bg-sky-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                👨 Men
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
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden"
                >
                  {/* Accordion Header */}
                  <div
                    onClick={() => toggleAccordion(subCat.id)}
                    className="p-5 sm:p-6 flex items-center justify-between cursor-pointer bg-white hover:bg-slate-50/80 transition-colors border-b border-slate-100"
                  >
                    <h3 className="font-bold text-slate-900 text-lg sm:text-xl">
                      {subCat.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Accordion Content Body */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="divide-y divide-slate-100"
                      >
                        {filteredItems.map((item) => (
                          <div
                            key={item.id}
                            className="p-5 sm:p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                          >
                            <div className="space-y-1">
                              <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                                {item.name}
                              </h4>
                              <p className="font-extrabold text-sky-600 text-base sm:text-lg">
                                {item.currency}
                                {item.price.toLocaleString()}
                              </p>
                            </div>

                            <button
                              onClick={() => handleBookClick(item)}
                              className="px-7 py-2 rounded-full border border-sky-500 text-sky-600 font-bold text-sm hover:bg-sky-500 hover:text-white transition-all shadow-2xs hover:shadow-xs active:scale-95"
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
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-sky-500 shadow-xs"
            />
          </div>

          {/* Gender Filter Buttons Bar */}
          <div className="flex items-center gap-3 mb-5">
            <button
              onClick={() => setGenderFilter('men')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                genderFilter === 'men'
                  ? 'border-sky-500 bg-sky-50 text-sky-700'
                  : 'border-slate-200 bg-white text-slate-700'
              }`}
            >
              <span>👨</span>
              <span>Men</span>
            </button>

            <button
              onClick={() => setGenderFilter('women')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                genderFilter === 'women'
                  ? 'border-pink-400 bg-pink-50 text-pink-700'
                  : 'border-pink-200 bg-white text-pink-600'
              }`}
            >
              <span>👩</span>
              <span>Women</span>
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
                    className={`flex flex-col items-center p-2 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-blue-50 border border-blue-300 shadow-2xs'
                        : 'bg-white border border-transparent'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden mb-1 border ${
                        isSelected ? 'border-sky-500 ring-2 ring-sky-200' : 'border-slate-200'
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
                        isSelected ? 'font-bold text-sky-900' : 'text-slate-700 font-medium'
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Main Content Area */}
            <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs max-h-[600px] overflow-y-auto">
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
                    {/* Header */}
                    <div
                      onClick={() => toggleAccordion(subCat.id)}
                      className="flex items-center justify-between py-2 border-b border-slate-100 cursor-pointer"
                    >
                      <h4 className="font-bold text-slate-900 text-sm">{subCat.title}</h4>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </div>

                    {/* Service Rows */}
                    {isOpen && (
                      <div className="divide-y divide-slate-100 py-1">
                        {filteredItems.map((item) => (
                          <div
                            key={item.id}
                            className="py-3 flex items-center justify-between gap-2"
                          >
                            <div>
                              <p className="font-bold text-slate-900 text-xs sm:text-sm">
                                {item.name}
                              </p>
                              <p className="font-bold text-sky-600 text-xs sm:text-sm mt-0.5">
                                {item.currency}
                                {item.price.toLocaleString()}
                              </p>
                            </div>

                            <button
                              onClick={() => handleBookClick(item)}
                              className="px-4 py-1 rounded-full border border-sky-500 text-sky-600 font-bold text-xs hover:bg-sky-500 hover:text-white transition-all shadow-2xs active:scale-95 shrink-0"
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

          {/* Bottom LUXE Savings Banner */}
          <div className="mt-6 bg-slate-900 text-white rounded-xl p-3 flex items-center justify-center gap-2 text-xs font-semibold shadow-md">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Save more with <strong className="text-amber-400">LUXE</strong> membership</span>
          </div>
        </div>
      </div>
    </div>
  );
};
