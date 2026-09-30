import React from 'react';
import { ArrowUpRight, Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const mapUrl = "https://maps.google.com/?q=Alora+Salon+27th+Main+Rd+HSR+Layout+Bengaluru";

  return (
    <footer id="contact" className="bg-neutral-900 text-white pt-16 md:pt-24 pb-12 px-6 md:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Contact Form Section matching reference Screen 4 (Mobile Only) */}
        <div className="md:hidden pb-12 border-b border-neutral-800 grid grid-cols-1 gap-8 items-start mb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center px-4 py-1 border border-neutral-700 rounded-full text-xs font-semibold tracking-widest uppercase text-neutral-300">
              GET IN TOUCH
            </div>
            <h2 className="font-cobe font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-white">
              <span>WE'D</span><br />
              <span>LOVE TO</span><br />
              <span>HEAR</span><br />
              <span>FROM YOU</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent to the concierge.'); }} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Full name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
                  className="w-full bg-transparent border-b border-neutral-700 py-2.5 text-white placeholder-neutral-500 focus:outline-hidden focus:border-white transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  className="w-full bg-transparent border-b border-neutral-700 py-2.5 text-white placeholder-neutral-500 focus:outline-hidden focus:border-white transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Message*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Say Hi!"
                  className="w-full bg-transparent border-b border-neutral-700 py-2.5 text-white placeholder-neutral-500 focus:outline-hidden focus:border-white transition-colors text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3.5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Send Message →
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="inline-block transition-opacity hover:opacity-85" aria-label="Alora Home">
              <img
                src="/images/logo_white.png"
                alt="Alora Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              A luxury beauty sanctuary in HSR Layout. Experience bespoke haircare, skin treatments, gel manicures, acne care, and relaxing spa therapies.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-neutral-200 transition-colors"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Location & Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cobe font-bold uppercase text-xs tracking-widest text-neutral-400">
              Studio Location & Address
            </h4>
            <div className="text-sm text-neutral-300 space-y-3 leading-relaxed font-normal">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-amber-400 transition-colors group"
              >
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  <strong>Alora Salon</strong><br />
                  No 86, 2nd Floor, Radhakrishnan Grand,<br />
                  27th Main Rd, 1st Sector, HSR Layout,<br />
                  Bengaluru, Karnataka 560102
                </span>
              </a>

              <p className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:06364217307" className="hover:text-amber-400 font-bold text-white transition-colors">
                  063642 17307 / +91 63642 17307
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>contact@alorasalon.com</span>
              </p>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-cobe font-bold uppercase text-xs tracking-widest text-neutral-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Opening Hours</span>
            </h4>
            <div className="text-xs sm:text-sm text-neutral-300 space-y-2 font-normal">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span>Monday – Sunday</span>
                <span className="font-mono text-amber-400 font-semibold">09:00 AM – 09:00 PM</span>
              </div>
              <p className="text-xs text-neutral-400 pt-1">
                Open 7 days a week. Appointments and walk-ins welcome.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Alora Salon HSR Layout. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
