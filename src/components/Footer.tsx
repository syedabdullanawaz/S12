import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const mapUrl = 'https://maps.google.com/?q=Alora+Salon+27th+Main+Rd+HSR+Layout+Bengaluru';

  return (
    <footer id="contact" className="bg-neutral-900 text-white pt-12 md:pt-16 pb-10 px-6 md:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info & Social */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block transition-opacity hover:opacity-85" aria-label="Alora Home">
              <img
                src="/images/logo_white.png"
                alt="Alora Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-normal">
              A luxury beauty sanctuary in HSR Layout. Experience bespoke haircare, skin treatments, gel manicures, acne care, and relaxing spa therapies.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 hover:border-white hover:text-white hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 hover:border-white hover:text-white hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location & Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cobe font-bold uppercase text-xs tracking-widest text-neutral-400">
              Studio Location & Contact
            </h4>
            <div className="text-sm text-neutral-300 space-y-3 leading-relaxed font-normal">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-neutral-400 group-hover:text-white shrink-0 mt-1 group-hover:scale-110 transition-all" />
                <span>
                  <strong className="text-white">Alora Luxury Salon</strong><br />
                  No 86, 2nd Floor, Radhakrishnan Grand,<br />
                  27th Main Rd, 1st Sector, HSR Layout,<br />
                  Bengaluru, Karnataka 560102
                </span>
              </a>

              <p className="flex items-center gap-2.5 pt-1 group">
                <Phone className="w-4 h-4 text-neutral-400 group-hover:text-white shrink-0 transition-colors" />
                <a href="tel:+916364217307" className="hover:text-white font-bold text-white transition-colors">
                  +91 63642 17307
                </a>
              </p>

              <p className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white shrink-0 transition-colors" />
                <a href="mailto:aloraluxurysalon@gmail.com" className="hover:text-white text-neutral-300 transition-colors">
                  aloraluxurysalon@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cobe font-bold uppercase text-xs tracking-widest text-neutral-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>Opening Hours</span>
            </h4>
            <div className="text-xs sm:text-sm text-neutral-300 space-y-2 font-normal">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span>Monday – Sunday</span>
                <span className="font-mono text-white font-semibold">09:00 AM – 09:00 PM</span>
              </div>
              <p className="text-xs text-neutral-400 pt-1 leading-normal">
                Open 7 days a week. Appointments & walk-ins welcome.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
          <p>© {new Date().getFullYear()} Alora Luxury Salon. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
