import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Award,
  Leaf,
  Clock,
  ArrowRight,
  Gem,
  CheckCircle2,
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking?: () => void;
}

const PILLARS = [
  {
    number: '01',
    icon: Award,
    title: 'Senior Master Specialists',
    description:
      'Every stylist and aesthetician at Alora possesses over a decade of verified craft, trained in global precision cutting, balayage, and clinical dermatological care.',
  },
  {
    number: '02',
    icon: Leaf,
    title: 'Certified Botanical & Organic',
    description:
      'We exclusively utilize ammonia-free hair colours, pure Italian liposoluble Rica waxes, and botanical skin infusions that nurture your body without harsh toxins.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Bespoke 1-on-1 Consultation',
    description:
      'No rushed appointments. Every session begins with a diagnostic texture, tone, and facial structure assessment to craft results unique to you.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Hospital-Grade Hygiene Protocol',
    description:
      'We adhere to strict autoclave tool sterilization, single-use biodegradable client disposables, and sterile sanitization between every single appointment.',
  },
  {
    number: '05',
    icon: Gem,
    title: 'Transparent Luxury, No Hidden Upsells',
    description:
      'Upfront pricing with complete integrity. The price you see in our catalogue is exactly what you pay, with zero unexpected charges or pushy sales.',
  },
  {
    number: '06',
    icon: Clock,
    title: 'Serene Sanctuary in HSR Layout',
    description:
      'Designed as a tranquil oasis away from city noise. Enjoy ergonomic leather styling chairs, peaceful acoustic ambience, and artisanal gourmet refreshments.',
  },
];

const STATS = [
  { value: '4.6★', label: 'Google Rating', sub: '120+ Verified Reviews' },
  { value: '15K+', label: 'Delighted Clients', sub: 'Across Bengaluru' },
  { value: '100%', label: 'Clean Formulations', sub: 'Zero Harsh Chemicals' },
  { value: '7 Days', label: 'Open Daily', sub: '09:00 AM – 09:00 PM' },
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="why-choose-us"
      className="relative py-16 sm:py-24 md:py-32 bg-[#f7f6f2] text-black px-4 sm:px-6 md:px-12 border-t border-black/10 overflow-hidden"
    >
      {/* Anchor for header navigation */}
      <span id="about" className="absolute -top-20 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 mb-2.5 sm:mb-3.5 inline-block"
          >
            The Alora Standard
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cobe font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight text-black leading-[1.08]"
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We redefined the traditional salon experience into an intentional sanctuary.
            Where master craftsmanship, ethical formulations, and personalized luxury converge.
          </motion.p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
                className="group relative bg-white p-6 sm:p-8 rounded-none border border-black/10 hover:border-black transition-all duration-300 shadow-2xs hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-black group-hover:text-white text-black flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-cobe font-bold uppercase text-base sm:text-lg md:text-xl tracking-tight text-black mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Banner: Image + Live Stats + Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="bg-black text-white rounded-none border border-black overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: Atmospheric Editorial Image */}
          <div className="lg:col-span-5 relative h-60 sm:h-72 lg:h-full min-h-[260px] overflow-hidden">
            <img
              src="/images/services/hair-treatment.jpg"
              alt="Alora Luxury Haircare Ritual"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20 text-neutral-200">
                HSR Layout • Bengaluru
              </span>
            </div>
          </div>

          {/* Right Column: Statistics & Action */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                Commitment to Excellence
              </span>
              <h3 className="font-cobe font-extrabold uppercase text-xl sm:text-3xl md:text-4xl tracking-tight text-white mb-4 leading-tight">
                Experience the Difference in Every Detail
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal max-w-xl">
                Whether visiting for a signature haircut, botanical scalp detox, acne-clearing facial,
                or a relaxing full-body massage, you are in the hands of dedicated artisans.
              </p>
            </div>

            {/* 4 Key Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-8 pt-6 border-t border-neutral-800">
              {STATS.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-cobe font-extrabold text-xl sm:text-2xl md:text-3xl text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-neutral-300 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-500 font-normal">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-product-sans font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all rounded-full shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-neutral-400 font-normal">
                Walk-ins & scheduled bookings welcome daily.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
