import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Search, ArrowLeft, X } from 'lucide-react';
import { fullServicesCategories } from '../data/fullServicesData';
import { ServiceItem } from '../types';

export interface SelectedServiceCartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  categoryName: string;
  subCategoryTitle: string;
  gender?: 'women' | 'men' | 'all';
}

interface ServicesPageProps {
  initialCategoryId?: string;
  onBackToHome: () => void;
  onBookServiceItem: (service: ServiceItem, allServices?: ServiceItem[]) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialCategoryId,
  onBackToHome,
  onBookServiceItem,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    initialCategoryId || 'hair-essentials'
  );
  const [genderFilter, setGenderFilter] = useState<'all' | 'women' | 'men'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<SelectedServiceCartItem[]>([]);
  const [isMobileSummaryOpen, setIsMobileSummaryOpen] = useState(false);

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

  const toggleSelectItem = (
    item: { id: string; name: string; price: number; currency: string; gender?: 'women' | 'men' | 'all' },
    categoryName: string,
    subCategoryTitle: string
  ) => {
    setSelectedItems((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      if (exists) {
        return prev.filter((p) => p.id !== item.id);
      } else {
        return [
          ...prev,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            currency: item.currency || '₹',
            categoryName,
            subCategoryTitle,
            gender: item.gender,
          },
        ];
      }
    });
  };

  const removeSelectedItem = (id: string) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = selectedItems.reduce((acc, item) => acc + item.price, 0);

  const handleContinueBooking = () => {
    if (selectedItems.length === 0) return;
    const primary = selectedItems[0];

    const combinedServiceObj: ServiceItem = {
      id: selectedItems.map((item) => item.id).join('-'),
      title:
        selectedItems.length === 1
          ? primary.name
          : `${primary.name} + ${selectedItems.length - 1} more (${selectedItems.length} treatments)`,
      price: totalAmount,
      currency: primary.currency || '₹',
      duration: `${selectedItems.length * 40}min`,
      description: `Selected treatments: ${selectedItems.map((i) => i.name).join(', ')}. Performed by senior specialists at Alora.`,
      category: 'hair',
      rating: 4.9,
      idealFor: 'Custom multi-service salon experience',
      involved: selectedItems.map((item) => ({
        title: item.name,
        description: `Bespoke ${item.name} session with premium organic salon care.`,
      })),
      images: ['/images/modal-facial-1.jpg', '/images/modal-facial-2.jpg'],
    };

    onBookServiceItem(combinedServiceObj);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-black pb-28 sm:pb-20 font-sans selection:bg-black selection:text-white">
      {/* Top Bar Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-4 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="group inline-flex items-center gap-2 text-black font-semibold text-sm hover:text-neutral-600 transition-colors cursor-pointer"
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
        {/* DESKTOP VIEW (MD and above) - Category Carousel & 2-Column Grid           */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          {/* Horizontal Category Slider Bar */}
          <div className="relative mb-10 group">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-black/15 shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer"
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
                        ? 'bg-white border-2 border-black shadow-sm text-black scale-105'
                        : 'bg-white/80 border border-black/10 hover:border-black/30 hover:bg-white text-neutral-800'
                    }`}
                  >
                    <div
                      className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden mb-2.5 border-2 shadow-xs transition-transform ${
                        isSelected ? 'border-black scale-105 ring-2 ring-black/10' : 'border-black/15'
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
                        isSelected ? 'text-black font-cobe font-bold' : 'text-neutral-800 font-medium'
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
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-black/15 shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Active Category Heading & Gender Filter Pills */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-cobe font-bold text-black tracking-tight">
              {selectedCategory.name}
            </h2>

            {/* Gender Filter Pills */}
            <div className="flex items-center gap-1.5 bg-neutral-200/80 p-1 rounded-lg text-xs font-semibold border border-black/10">
              <button
                onClick={() => setGenderFilter('all')}
                className={`px-4 py-1.5 rounded-md transition-all cursor-pointer ${
                  genderFilter === 'all'
                    ? 'bg-black text-white shadow-xs font-bold'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setGenderFilter('women')}
                className={`px-4 py-1.5 rounded-md transition-all cursor-pointer ${
                  genderFilter === 'women'
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Women
              </button>
              <button
                onClick={() => setGenderFilter('men')}
                className={`px-4 py-1.5 rounded-md transition-all cursor-pointer ${
                  genderFilter === 'men'
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Men
              </button>
            </div>
          </div>

          {/* 2-Column Grid: Services (Left) + Summary Box (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: SubCategories Accordions */}
            <div className="md:col-span-7 lg:col-span-8 space-y-6">
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
                  <div
                    key={subCat.id}
                    className="bg-white rounded-xl border border-black/10 shadow-xs overflow-hidden"
                  >
                    {/* Accordion Header */}
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

                    {/* Accordion Content Body */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="divide-y divide-black/5"
                        >
                          {filteredItems.map((item) => {
                            const isItemSelected = selectedItems.some((s) => s.id === item.id);

                            return (
                              <div
                                key={item.id}
                                className={`p-5 sm:p-6 flex items-center justify-between transition-colors ${
                                  isItemSelected ? 'bg-neutral-50/70' : 'hover:bg-neutral-50/40'
                                }`}
                              >
                                <div className="space-y-1.5 pr-4">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <h4 className="font-product-sans font-bold text-black text-base sm:text-lg">
                                      {item.name}
                                    </h4>
                                    {item.gender !== 'all' && (
                                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-black/5">
                                        {item.gender}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[11px] uppercase font-semibold text-neutral-400">
                                      PRICE
                                    </span>
                                    <p className="font-cobe font-bold text-black text-base sm:text-lg">
                                      {item.currency}
                                      {item.price.toLocaleString()}
                                    </p>
                                  </div>
                                </div>

                                <button
                                  onClick={() =>
                                    toggleSelectItem(item, selectedCategory.name, subCat.title)
                                  }
                                  className={`px-6 py-2 rounded-lg font-product-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shrink-0 active:scale-95 cursor-pointer shadow-xs ${
                                    isItemSelected
                                      ? 'bg-black text-white'
                                      : 'border border-black/25 bg-white text-black hover:border-black hover:bg-neutral-50'
                                  }`}
                                >
                                  {isItemSelected ? (
                                    <>
                                      <span>✓</span>
                                      <span>SELECTED</span>
                                    </>
                                  ) : (
                                    <>
                                      <span className="text-sm font-black">+</span>
                                      <span>SELECT</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Summary Box (Reference Image 1) */}
            <div className="md:col-span-5 lg:col-span-4 sticky top-6">
              <div className="bg-white rounded-2xl border border-black/10 p-5 sm:p-6 shadow-sm space-y-5">
                {/* Summary Header */}
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <h3 className="font-cobe font-extrabold text-lg sm:text-xl text-black uppercase tracking-tight">
                    Summary
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-black/5">
                    {selectedItems.length} {selectedItems.length === 1 ? 'Selected' : 'Selected'}
                  </span>
                </div>

                {/* Studio Info Card */}
                <div className="bg-neutral-50 p-3.5 rounded-xl border border-black/5 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-neutral-600">
                    <span>Studio:</span>
                    <span className="font-bold text-black">Alora Luxury Salon</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-600">
                    <span>Location:</span>
                    <span className="font-bold text-black">HSR Layout, Bengaluru</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-600">
                    <span>Experience:</span>
                    <span className="font-bold text-black">Master Specialists</span>
                  </div>
                </div>

                {/* Selected Services List */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    SELECTED SERVICES ({selectedItems.length})
                  </div>

                  {selectedItems.length === 0 ? (
                    <div className="p-5 rounded-xl border border-dashed border-black/15 text-center text-xs text-neutral-500 py-8">
                      <div>No services selected yet.</div>
                      <div className="text-[11px] text-neutral-400 mt-1">
                        Click <span className="font-bold text-black">+ SELECT</span> on any service to add it.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                      {selectedItems.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 bg-neutral-50/80 rounded-xl border border-black/10 flex items-center justify-between gap-2 transition-all hover:bg-neutral-100/70"
                        >
                          <div className="space-y-0.5 min-w-0 pr-2">
                            <h5 className="font-product-sans font-bold text-xs sm:text-sm text-black truncate">
                              {item.name}
                            </h5>
                            <p className="text-[10px] text-neutral-500 truncate">
                              {item.categoryName}
                            </p>
                          </div>

                          <div className="flex items-center gap-2.5 shrink-0">
                            <span className="font-cobe font-bold text-xs sm:text-sm text-black">
                              {item.currency}{item.price.toLocaleString()}
                            </span>
                            <button
                              onClick={() => removeSelectedItem(item.id)}
                              aria-label={`Remove ${item.name}`}
                              className="w-5 h-5 rounded-full hover:bg-black hover:text-white text-neutral-400 flex items-center justify-center text-xs transition-colors cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Estimated Total & CTA */}
                <div className="border-t border-black/10 pt-4 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-neutral-600">
                      Estimated Total:
                    </span>
                    <span className="font-cobe font-black text-xl sm:text-2xl text-black">
                      ₹{totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-normal">
                    *Includes personalized consultation, custom formulas, and luxury salon care.
                  </p>

                  <button
                    onClick={handleContinueBooking}
                    disabled={selectedItems.length === 0}
                    className="w-full py-3.5 bg-black text-white font-cobe font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all shadow-md active:scale-98 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {selectedItems.length > 0
                      ? `CONTINUE TO BOOKING (${selectedItems.length} SELECTED)`
                      : 'SELECT SERVICES TO CONTINUE'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< MD) - Split Screen Layout & Expandable Bottom Summary Bar  */}
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

          {/* Gender Filter Buttons Bar */}
          <div className="flex items-center gap-3 mb-5">
            <button
              onClick={() => setGenderFilter(genderFilter === 'men' ? 'all' : 'men')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-semibold border transition-all flex items-center justify-center shadow-2xs cursor-pointer ${
                genderFilter === 'men'
                  ? 'border-black bg-neutral-900 text-white font-bold shadow-xs'
                  : 'border-black/15 bg-white text-neutral-800 hover:border-black/40'
              }`}
            >
              Men
            </button>

            <button
              onClick={() => setGenderFilter(genderFilter === 'women' ? 'all' : 'women')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-semibold border transition-all flex items-center justify-center shadow-2xs cursor-pointer ${
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
                        ? 'bg-white border-2 border-black shadow-xs text-black scale-[1.02]'
                        : 'bg-white border border-black/10 hover:border-black/30 text-neutral-800'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden mb-1 border-2 transition-transform ${
                        isSelected ? 'border-black scale-105 ring-1 ring-black/15' : 'border-black/10'
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
                        isSelected ? 'font-cobe font-bold text-black' : 'font-medium text-neutral-700'
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Main Content Area */}
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
                    {/* Header */}
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

                    {/* Service Rows with + SELECT / ✓ SELECTED */}
                    {isOpen && (
                      <div className="divide-y divide-black/5 py-1">
                        {filteredItems.map((item) => {
                          const isItemSelected = selectedItems.some((s) => s.id === item.id);

                          return (
                            <div
                              key={item.id}
                              className={`py-3 px-1.5 flex items-center justify-between gap-2 rounded-lg transition-colors ${
                                isItemSelected ? 'bg-neutral-50/80' : ''
                              }`}
                            >
                              <div className="min-w-0 pr-1">
                                <p className="font-product-sans font-bold text-black text-xs sm:text-sm">
                                  {item.name}
                                </p>
                                <p className="font-cobe font-bold text-black text-xs sm:text-sm mt-0.5">
                                  {item.currency}
                                  {item.price.toLocaleString()}
                                </p>
                              </div>

                              <button
                                onClick={() =>
                                  toggleSelectItem(item, selectedCategory.name, subCat.title)
                                }
                                className={`px-3 sm:px-4 py-1.5 rounded-lg font-product-sans font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer ${
                                  isItemSelected
                                    ? 'bg-black text-white shadow-xs'
                                    : 'border border-black/25 bg-white text-black hover:border-black'
                                }`}
                              >
                                {isItemSelected ? (
                                  <>
                                    <span>✓</span>
                                    <span>SELECTED</span>
                                  </>
                                ) : (
                                  <>
                                    <span>+</span>
                                    <span>SELECT</span>
                                  </>
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE FLOATING BOTTOM BAR (Always visible & docked to viewport on mobile) */}
      {/* ========================================================================= */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-black/15 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] px-4 py-3 flex items-center justify-between gap-3"
        style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
      >
        {/* Left: Selected count & details toggle or placeholder */}
        {selectedItems.length > 0 ? (
          <button
            type="button"
            onClick={() => setIsMobileSummaryOpen(true)}
            className="text-left flex flex-col justify-center cursor-pointer group"
          >
            <div className="flex items-center gap-1 text-xs text-neutral-600 font-bold uppercase tracking-wider">
              <span>{selectedItems.length} SELECTED</span>
              <span className="text-[10px] text-black font-semibold underline group-hover:text-neutral-700 inline-flex items-center">
                DETAILS ⌃
              </span>
            </div>
            <div className="font-cobe font-extrabold text-base text-black leading-tight mt-0.5">
              ₹{totalAmount.toLocaleString()}
            </div>
          </button>
        ) : (
          <div className="text-left flex flex-col justify-center select-none">
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-bold uppercase tracking-wider">
              <span>0 SELECTED</span>
              <span className="text-[10px] text-neutral-400 font-medium">
                • ₹0
              </span>
            </div>
            <div className="font-cobe text-xs text-neutral-500 font-medium leading-tight mt-0.5">
              Select treatments above
            </div>
          </div>
        )}

        {/* Right: Continue CTA */}
        <button
          type="button"
          onClick={handleContinueBooking}
          disabled={selectedItems.length === 0}
          className={`px-5 py-2.5 rounded-lg font-cobe font-bold text-xs uppercase tracking-wider transition-all shadow-sm ${
            selectedItems.length > 0
              ? 'bg-black text-white active:scale-95 cursor-pointer hover:bg-neutral-800'
              : 'bg-neutral-200 text-neutral-400 cursor-not-allowed shadow-none'
          }`}
        >
          CONTINUE TO BOOKING
        </button>
      </div>

      {/* Mobile Bottom Sheet Drawer */}
      <AnimatePresence>
        {isMobileSummaryOpen && selectedItems.length > 0 && (
          <>
            {/* Dimmed Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileSummaryOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
            />

            {/* Drawer Container */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#f7f6f2] rounded-t-2xl border-t border-black/15 shadow-2xl p-5 max-h-[85vh] flex flex-col justify-between"
              style={{ paddingBottom: 'max(20px, env(safe-area-inset-bottom))' }}
            >
              <div className="space-y-4 overflow-y-auto pr-1">
                {/* Centered Drag Indicator */}
                <div className="w-12 h-1 bg-neutral-300 rounded-full mx-auto" />

                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <h4 className="font-cobe font-extrabold text-sm uppercase tracking-wider text-black">
                    SELECTED SUMMARY
                  </h4>
                  <button
                    type="button"
                    onClick={() => setIsMobileSummaryOpen(false)}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md border border-black/15 bg-white text-neutral-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Close</span>
                    <span>⌄</span>
                  </button>
                </div>

                {/* Studio Info Block */}
                <div className="bg-white p-3.5 rounded-xl border border-black/10 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-neutral-600">
                    <span>Studio:</span>
                    <span className="font-bold text-black">Alora Luxury Salon</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-600">
                    <span>Location:</span>
                    <span className="font-bold text-black">HSR Layout, Bengaluru</span>
                  </div>
                </div>

                {/* Selected Services List */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    SELECTED SERVICES ({selectedItems.length})
                  </div>

                  <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                    {selectedItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 bg-white rounded-xl border border-black/10 flex items-center justify-between gap-2"
                      >
                        <div className="space-y-0.5 min-w-0 pr-2">
                          <h5 className="font-product-sans font-bold text-xs sm:text-sm text-black truncate">
                            {item.name}
                          </h5>
                          <p className="text-[10px] text-neutral-500 truncate">
                            {item.categoryName}
                          </p>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0">
                          <span className="font-cobe font-bold text-xs sm:text-sm text-black">
                            {item.currency}{item.price.toLocaleString()}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeSelectedItem(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="w-5 h-5 rounded-full hover:bg-black hover:text-white text-neutral-400 flex items-center justify-center text-xs transition-colors cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Bar in Drawer */}
              <div className="pt-4 border-t border-black/10 mt-3 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase font-bold text-neutral-500">
                    {selectedItems.length} SELECTED
                  </div>
                  <div className="font-cobe font-extrabold text-base text-black">
                    ₹{totalAmount.toLocaleString()}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileSummaryOpen(false);
                    handleContinueBooking();
                  }}
                  className="px-6 py-3 bg-black text-white font-cobe font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm active:scale-95 cursor-pointer"
                >
                  CONTINUE TO BOOKING
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
