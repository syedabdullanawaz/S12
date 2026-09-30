import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '../types';

interface ServicesOverviewProps {
  onSelectService: (service: ServiceItem) => void;
  onViewAll: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService, onViewAll }) => {
  const categories: {
    id: string;
    title: string;
    count: string;
    image: string;
    iconSymbol: string;
    service: ServiceItem;
  }[] = [
    {
      id: 'hair-essential',
      title: 'Hair Essential',
      count: '13 services',
      image: '/images/services/hair-essential.jpg',
      iconSymbol: '✕',
      service: {
        id: 'hair-essential',
        title: 'HAIR ESSENTIAL & STYLING',
        price: 140,
        duration: '45min',
        description: 'Precision haircut, revitalizing botanical hair wash, and custom blowout styling tailored to your face shape and hair texture.',
        category: 'hair',
        rating: 4.9,
        idealFor: 'Routine hair health, split-end elimination, and bespoke styling',
        involved: [
          { title: 'Consultation & Scalp Check', description: 'Analysis of scalp vitality and hair density to select targeted formulas.' },
          { title: 'Nutrient Botanical Wash', description: 'Deep cleansing wash with sulfate-free organic botanicals and moisture seal.' },
          { title: 'Precision Shear Cut', description: 'Master stylist cut using advanced layering and texturizing techniques.' },
          { title: 'Luxury Blowout & Style', description: 'Heat-protected styling with radiant shine finishing serum.' },
        ],
        images: ['/images/services/hair-essential.jpg', '/images/services/hair-treatment.jpg'],
      },
    },
    {
      id: 'skin-care-acne',
      title: 'Skin Care & Acne',
      count: '5 services',
      image: '/images/services/skin-care.jpg',
      iconSymbol: '⌸',
      service: {
        id: 'really-good-facial',
        title: 'THE REALLY GOOD FACIAL',
        price: 140,
        duration: '60min',
        description: 'The 60-minute personalized facial that transforms your skin and renews your confidence.',
        category: 'skincare',
        rating: 4.9,
        idealFor: 'Monthly maintenance and promoting overall skin health',
        involved: [
          { title: 'Double Cleanse', description: 'Removes makeup, sweat, and dirt, leaving your skin fresh and ready for treatment.' },
          { title: 'Skin Analysis', description: 'Thorough evaluation of your skin type, condition, and specific needs to customize formulas.' },
          { title: 'Customized Treatments', description: 'The most effective active products and targeted techniques are used to address your unique skin concerns.' },
          { title: 'Hydration Seal', description: 'Finishing layer of bio-active peptides and soothing moisture to protect and enhance your skin barrier.' },
        ],
        images: ['/images/modal-facial-1.jpg', '/images/modal-facial-2.jpg'],
        featured: true,
      },
    },
    {
      id: 'waxing-laser',
      title: 'Waxing & Laser',
      count: '6 services',
      image: '/images/services/waxing-laser.jpg',
      iconSymbol: '✕',
      service: {
        id: 'waxing-laser',
        title: 'WAXING & PERMANENT LASER',
        price: 150,
        duration: '45min',
        description: 'Silky smooth skin with painless Rica organic waxing or medical-grade diode laser hair removal for long-lasting results.',
        category: 'body',
        rating: 4.9,
        idealFor: 'Long-term smooth skin, sensitive areas, and ingrown hair prevention',
        involved: [
          { title: 'Skin Preparation & Cleanse', description: 'Sanitization and calming pre-wax lotion to minimize sensitivity.' },
          { title: 'Targeted Hair Removal', description: 'Gentle organic strip-less waxing or precision diode laser pulsing.' },
          { title: 'Cooling Aloe & Chamomile', description: 'Soothing post-treatment application to calm redness immediately.' },
          { title: 'Moisture Barrier Restoration', description: 'Lightweight nourishing barrier balm to prevent irritation.' },
        ],
        images: ['/images/services/waxing-laser.jpg', '/images/body-card.jpg'],
      },
    },
    {
      id: 'brows-lashes-makeup',
      title: 'Brows, Lashes & Makeup',
      count: '6 services',
      image: '/images/services/brows-lashes-makeup.jpg',
      iconSymbol: '⌸',
      service: {
        id: 'brows-lashes-makeup',
        title: 'BROWS, LASHES & BESPOKE MAKEUP',
        price: 120,
        duration: '60min',
        description: 'Enhance your natural features with precision brow threading, semi-permanent lash extensions, and editorial makeup artistry.',
        category: 'skincare',
        rating: 5.0,
        idealFor: 'Eye contour definition, effortless daily beauty, and special events',
        involved: [
          { title: 'Facial Symmetry Mapping', description: 'Detailed brow mapping and lash curl consultation to fit your eyes.' },
          { title: 'Threading & Sculpting', description: 'Clean shaping and tinting using natural organic dyes.' },
          { title: 'Lash Extension Application', description: 'Individual faux-mink lash extensions applied with medical-grade adhesive.' },
          { title: 'Finishing Brow Setting', description: 'Nourishing keratin gel to hold brows in a feather-soft lift all day.' },
        ],
        images: ['/images/services/brows-lashes-makeup.jpg', '/images/services/hair-colour.jpg'],
      },
    },
    {
      id: 'nail-bar-extensions',
      title: 'Nail Bar & Extensions',
      count: '5 services',
      image: '/images/services/nail-bar.jpg',
      iconSymbol: '✕',
      service: {
        id: 'nail-bar-extensions',
        title: 'NAIL BAR & SCULPTED EXTENSIONS',
        price: 110,
        duration: '75min',
        description: 'Flawless acrylic and soft gel nail extensions with durable high-shine gel polish and custom minimalist nail art.',
        category: 'body',
        rating: 4.9,
        idealFor: 'Nail strengthening, length elongation, and long-lasting manicure aesthetics',
        involved: [
          { title: 'Cuticle Preparation', description: 'Gentle e-file cuticle care and nail plate dehydrating prep.' },
          { title: 'Nail Tip Sculpting', description: 'Seamless extension building tailored to your desired nail shape.' },
          { title: 'Multi-Layer Gel Polish', description: 'Chip-resistant gel polish cured under gentle LED light.' },
          { title: 'Cuticle Oil Infusion', description: 'Jojoba and vitamin E massage for cuticle hydration and health.' },
        ],
        images: ['/images/services/nail-bar.jpg', '/images/services/mani-pedi.jpg'],
      },
    },
    {
      id: 'mani-pedi',
      title: 'Mani & Pedi',
      count: '5 services',
      image: '/images/services/mani-pedi.jpg',
      iconSymbol: '⌸',
      service: {
        id: 'mani-pedi',
        title: 'ORGANIC SPA MANI & PEDI',
        price: 130,
        duration: '60min',
        description: 'Luxurious therapeutic soak, sea salt scrub exfoliation, warm towel wrap, and relaxing acupressure hand and foot massage.',
        category: 'body',
        rating: 4.9,
        idealFor: 'Callus softening, deep stress relief, and immaculate nail care',
        involved: [
          { title: 'Botanical Soak', description: 'Warm botanical foot bath infused with lavender and rose bath salts.' },
          { title: 'Sea Salt Exfoliation', description: 'Sloughs away dry skin, calluses, and restores silky softness.' },
          { title: 'Moisture Mask & Wrap', description: 'Warm towel compression with rich shea butter foot mask.' },
          { title: 'Acupressure Massage', description: 'Targeted reflexology to release tension and improve blood circulation.' },
        ],
        images: ['/images/services/mani-pedi.jpg', '/images/services/massage-spa.jpg'],
      },
    },
    {
      id: 'massage-spa',
      title: 'Massage & Spa',
      count: '5 services',
      image: '/images/services/massage-spa.jpg',
      iconSymbol: '✕',
      service: {
        id: 'massage-spa',
        title: 'AROMATHERAPY MASSAGE & SPA',
        price: 160,
        duration: '60min',
        description: 'Holistic full-body Swedish or deep tissue massage using warm essential oils to release chronic tension and restore tranquility.',
        category: 'body',
        rating: 5.0,
        idealFor: 'Full body muscle relaxation, fatigue relief, and mental tranquility',
        involved: [
          { title: 'Aroma Inhalation', description: 'Selection of custom organic essential oils matching your mood.' },
          { title: 'Warm Oil Effleurage', description: 'Rhythmic glide strokes warming muscle tissue and easing surface tension.' },
          { title: 'Deep Tissue Release', description: 'Focused acupressure on back, neck, and shoulder knots.' },
          { title: 'Warm Herbal Compress', description: 'Heated herbal pouch application to melt remaining muscle tightness.' },
        ],
        images: ['/images/services/massage-spa.jpg', '/images/services/body-rituals.jpg'],
      },
    },
    {
      id: 'mens-grooming',
      title: "Men's Grooming",
      count: '4 services',
      image: '/images/services/mens-grooming.jpg',
      iconSymbol: '⌸',
      service: {
        id: 'mens-grooming',
        title: "EXECUTIVE MEN'S GROOMING",
        price: 95,
        duration: '45min',
        description: 'Tailored executive haircut, straight razor beard sculpting with hot towel treatment, and invigorating scalp massage.',
        category: 'hair',
        rating: 4.8,
        idealFor: 'Sharp professional appearance, beard maintenance, and scalp revitalizing',
        involved: [
          { title: 'Style Consultation', description: 'Assessment of beard lines, face shape, and hair growth patterns.' },
          { title: 'Hot Towel Pre-Shave', description: 'Softens facial hair follicles and prepares skin for irritation-free shaving.' },
          { title: 'Precision Fade & Cut', description: 'Razor-sharp edging, beard shaping, and fade styling.' },
          { title: 'Scalp Tension Massage', description: 'Cooling menthol scalp tonic application and pressure point massage.' },
        ],
        images: ['/images/services/mens-grooming.jpg', '/images/services/hair-essential.jpg'],
      },
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#f7f6f2] text-black px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-cobe font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight text-black"
          >
            OUR SERVICES
          </motion.h2>
        </div>

        {/* 8 Grid Cards: 4x2 on PC, 2x4 on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => onSelectService(cat.service)}
              className="group relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[390px] rounded-none overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500"
            >
              {/* Card Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-3 sm:p-5 md:p-6 flex flex-col justify-end text-white">
                <div className="flex items-end justify-between w-full gap-1.5">
                  {/* Left Text */}
                  <div>
                    <h3 className="font-cobe font-bold uppercase text-xs sm:text-base md:text-lg lg:text-xl tracking-tight text-white mb-0.5 sm:mb-1 leading-tight sm:leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs md:text-sm text-neutral-300 font-normal tracking-wide">
                      {cat.count}
                    </p>
                  </div>

                  {/* Right Icon */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-white/30 bg-black/25 backdrop-blur-xs flex items-center justify-center text-white text-xs sm:text-sm md:text-base font-bold group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                    {cat.iconSymbol}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom View All Link */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={onViewAll}
            className="text-base sm:text-lg font-bold text-black border-b-2 border-black pb-0.5 hover:opacity-70 transition-opacity uppercase tracking-wider cursor-pointer"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};
