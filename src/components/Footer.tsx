import React from 'react';
import { ArrowUpRight, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="contact" className="bg-neutral-900 text-white pt-24 pb-12 px-6 md:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-wider uppercase text-white">
              LUNARIA<span className="text-amber-500">.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              A sanctuary for modern women. Experience bespoke skincare, soothing body rituals, and high-performance hair therapy in an atmosphere of quiet luxury.
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

          {/* Location & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold uppercase text-xs tracking-widest text-neutral-400">
              Studio Location
            </h4>
            <div className="text-sm text-neutral-300 space-y-2 leading-relaxed font-normal">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-amber-500 shrink-0" />
                <span>742 Fifth Avenue, 4th Floor<br />New York, NY 10019</span>
              </p>
              <p className="flex items-center gap-2 pt-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+1 (212) 555-0198</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>concierge@lunariastudio.com</span>
              </p>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display font-bold uppercase text-xs tracking-widest text-neutral-400">
              Hours of Tranquility
            </h4>
            <div className="text-xs sm:text-sm text-neutral-300 space-y-2 font-normal">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span>Monday – Friday</span>
                <span className="font-mono text-neutral-400">09:00 AM – 08:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span>Saturday</span>
                <span className="font-mono text-neutral-400">09:00 AM – 06:00 PM</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="font-mono text-neutral-400">10:00 AM – 05:00 PM</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Lunaria Studio. All rights reserved.</p>
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
