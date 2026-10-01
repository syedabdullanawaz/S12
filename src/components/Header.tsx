import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenBooking: () => void;
  onScrollToServices: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onScrollToServices }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        mobileMenuOpen
          ? 'py-3 sm:py-4 bg-[#f7f6f2] border-b border-black/10 text-black shadow-xs'
          : scrolled
          ? 'py-3 sm:py-4 glass-nav shadow-sm border-b border-black/5 text-black'
          : 'py-5 sm:py-6 bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="relative flex items-center transition-opacity hover:opacity-85 h-10 sm:h-11 md:h-12"
          aria-label="Alora Home"
        >
          {/* White Logo (for transparent dark hero navbar) */}
          <img
            src="/images/logo_white.png"
            alt="Alora Logo"
            className={`h-10 sm:h-11 md:h-12 w-auto object-contain transition-opacity duration-300 ${
              scrolled || mobileMenuOpen ? 'opacity-0 pointer-events-none absolute left-0' : 'opacity-100'
            }`}
          />
          {/* Dark Logo (for scrolled glass navbar) */}
          <img
            src="/images/logo_dark.png"
            alt="Alora Logo"
            className={`h-10 sm:h-11 md:h-12 w-auto object-contain transition-opacity duration-300 ${
              scrolled || mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none absolute left-0'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-sm tracking-wide">
          <button
            onClick={onScrollToServices}
            className={`transition-colors hover:opacity-75 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Services
          </button>
          <a
            href="#why-choose-us"
            className={`transition-colors hover:opacity-75 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Why Choose Us
          </a>
          <a
            href="#contact"
            className={`transition-colors hover:opacity-75 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Contact & Location
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className={`group relative overflow-hidden px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
              scrolled
                ? 'bg-black text-white hover:bg-neutral-800'
                : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-black'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </span>
          </button>
        </div>

        {/* Mobile Menu Button - 3 Lines Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center ${
            scrolled || mobileMenuOpen
              ? 'text-black hover:bg-black/5'
              : 'text-white hover:bg-white/10'
          }`}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 stroke-[2.2]" />
          ) : (
            <Menu className="w-6 h-6 stroke-[2.2]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Darkened backdrop overlay below dropdown menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 top-0 bg-black/40 backdrop-blur-xs -z-10"
            />

            {/* Seamless Dropdown Menu attached flush to header bottom edge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 w-full bg-[#f7f6f2] border-b border-black/10 px-6 py-8 shadow-2xl text-black flex flex-col gap-6 -mt-[1px] z-20"
            >
              <button
                onClick={() => {
                  onScrollToServices();
                  setMobileMenuOpen(false);
                }}
                className="text-left font-display text-lg font-semibold tracking-wide"
              >
                Services
              </button>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg font-semibold tracking-wide"
              >
                Why Choose Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg font-semibold tracking-wide"
              >
                Contact & Location
              </a>

              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 bg-black text-white py-3.5 rounded-full font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
