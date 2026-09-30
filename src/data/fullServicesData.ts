export interface ServiceSubCategory {
  id: string;
  title: string;
  items: {
    id: string;
    name: string;
    price: number;
    currency: string;
    gender: 'women' | 'men' | 'all';
    description?: string;
  }[];
}

export interface ServiceMainCategory {
  id: string;
  name: string;
  avatar: string;
  subCategories: ServiceSubCategory[];
}

export const fullServicesCategories: ServiceMainCategory[] = [
  {
    id: 'hair-essentials',
    name: 'Hair Essentials',
    avatar: '/images/services/hair-essential.jpg',
    subCategories: [
      {
        id: 'women-hair-cut',
        title: 'Women Hair Cut & Styling (6)',
        items: [
          { id: 'hc-basics', name: 'Haircut ( Basics )', price: 800, currency: '₹', gender: 'women' },
          { id: 'hc-advanced', name: 'Advanced Layered Cut', price: 1000, currency: '₹', gender: 'women' },
          { id: 'hc-fringe', name: 'Fringe Cut & Bangs', price: 300, currency: '₹', gender: 'women' },
          { id: 'hc-wash-setting', name: 'Shampoo, Wash & Blow Dry Setting', price: 600, currency: '₹', gender: 'women' },
          { id: 'hc-styling', name: 'Hairstyling ( Ironing & Curling )', price: 600, currency: '₹', gender: 'women' },
          { id: 'hc-extensions', name: 'Hair Extensions Fitting & Styling', price: 2500, currency: '₹', gender: 'women' },
        ],
      },
      {
        id: 'men-hair-cut',
        title: 'Men Hair Cut & Shaving (4)',
        items: [
          { id: 'm-hc-classic', name: 'Classic Men Haircut', price: 450, currency: '₹', gender: 'men' },
          { id: 'm-beard-trim', name: 'Beard Trim & Precision Shaving', price: 350, currency: '₹', gender: 'men' },
          { id: 'm-combo', name: 'Haircut + Beard Styling Spa Combo', price: 700, currency: '₹', gender: 'men' },
          { id: 'm-shave-head', name: 'Royal Clean Shave & Head Massage', price: 600, currency: '₹', gender: 'men' },
        ],
      },
      {
        id: 'hair-wash-spa',
        title: 'Shampoo, Conditioning & Braids (3)',
        items: [
          { id: 'hw-deep', name: 'Deep Conditioning Moisture Mask', price: 900, currency: '₹', gender: 'all' },
          { id: 'hw-scalp', name: 'Clarifying Scalp Detox Wash', price: 750, currency: '₹', gender: 'all' },
          { id: 'hw-braids', name: 'Trendy Hair Braids & Styling', price: 1200, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'hair-colour',
    name: 'Hair Colour',
    avatar: '/images/services/hair-colour.jpg',
    subCategories: [
      {
        id: 'global-colour',
        title: 'Balayage, Global & Highlights (5)',
        items: [
          { id: 'clr-balayage', name: 'Balayage & Ombre Hair Transformation', price: 5500, currency: '₹', gender: 'women' },
          { id: 'clr-global', name: 'Global Hair Colour ( Ammonia Free )', price: 3200, currency: '₹', gender: 'women' },
          { id: 'clr-root', name: 'Root Touch Up ( Grey Coverage )', price: 1500, currency: '₹', gender: 'all' },
          { id: 'clr-highlights', name: 'Highlights ( Full Head Foil )', price: 4500, currency: '₹', gender: 'women' },
          { id: 'clr-streaks', name: 'Fashion Streak Highlights (Per Foil)', price: 450, currency: '₹', gender: 'all' },
        ],
      },
    ],
  },
  {
    id: 'skin-acne-treatments',
    name: 'Skin Care & Acne',
    avatar: '/images/services/skin-care.jpg',
    subCategories: [
      {
        id: 'acne-facial-care',
        title: 'Acne Treatments & Clinical Facials (5)',
        items: [
          { id: 'acne-clinical', name: 'Advanced Clinical Acne Clear Treatment', price: 2800, currency: '₹', gender: 'all' },
          { id: 'face-detan-pack', name: 'Instaglow De-Tan Pack & Clean-up', price: 600, currency: '₹', gender: 'all' },
          { id: 'face-o3', name: 'O3+ Professional Skin Brightening Facial', price: 2500, currency: '₹', gender: 'women' },
          { id: 'face-hydra', name: 'Hydra-Facial Deep Pore Infusion', price: 3500, currency: '₹', gender: 'all' },
          { id: 'face-gold', name: '24K Gold Radiance Facial', price: 2800, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'waxing-laser',
    name: 'Waxing & Laser',
    avatar: '/images/services/waxing-laser.jpg',
    subCategories: [
      {
        id: 'waxing-body',
        title: 'Body Waxing & Permanent Laser Removal (6)',
        items: [
          { id: 'wax-brazilian', name: 'Brazilian Waxing (Intimate Care)', price: 1800, currency: '₹', gender: 'women' },
          { id: 'wax-body-full', name: 'Full Body Waxing (Rica Organic Wax)', price: 2600, currency: '₹', gender: 'women' },
          { id: 'laser-underarms', name: 'Laser Hair Removal (Underarms Session)', price: 1500, currency: '₹', gender: 'all' },
          { id: 'laser-fullbody', name: 'Permanent Laser Hair Removal (Full Body)', price: 6500, currency: '₹', gender: 'all' },
          { id: 'wax-rica-arms', name: 'Rica Liposoluble Full Arms Waxing', price: 800, currency: '₹', gender: 'women' },
          { id: 'wax-rica-legs', name: 'Rica Liposoluble Full Legs Waxing', price: 1200, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'eyebrow-lash-makeup',
    name: 'Brows, Lashes & Makeup',
    avatar: '/images/services/brows-lashes-makeup.jpg',
    subCategories: [
      {
        id: 'brow-lash-services',
        title: 'Eyebrow Beautification & Eyelashes (6)',
        items: [
          { id: 'brow-threading', name: 'Eyebrow Threading & Beautification', price: 100, currency: '₹', gender: 'women' },
          { id: 'lash-extensions', name: 'Eyelash Extensions ( Classic / Volume )', price: 2500, currency: '₹', gender: 'women' },
          { id: 'microblading', name: 'Microblading Permanent Eyebrows', price: 7500, currency: '₹', gender: 'women' },
          { id: 'perm-makeup', name: 'Permanent Makeup ( Lip Blush & Eyeliner )', price: 6500, currency: '₹', gender: 'women' },
          { id: 'makeup-party', name: 'Party Make-up & Hairstyling', price: 3500, currency: '₹', gender: 'women' },
          { id: 'bridal-make-up', name: 'Bridal Services & Wedding Preparation', price: 12000, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'nail-bar',
    name: 'Nail Bar & Extensions',
    avatar: '/images/services/nail-bar.jpg',
    subCategories: [
      {
        id: 'nail-care',
        title: 'Acrylic Nails, Gel Manicure & Extensions (5)',
        items: [
          { id: 'nl-acrylic', name: 'Acrylic Nail Extensions (Full Set)', price: 2200, currency: '₹', gender: 'women' },
          { id: 'nl-gel-manicure', name: 'Gel Manicure & Cuticle Care', price: 1200, currency: '₹', gender: 'women' },
          { id: 'nl-gel-polish', name: 'Gel Polish Application', price: 800, currency: '₹', gender: 'women' },
          { id: 'nl-cut-filing', name: 'Nail Cut, Filing & Polish Change', price: 300, currency: '₹', gender: 'all' },
          { id: 'nl-removal', name: 'Safe Gel / Acrylic Extensions Removal', price: 400, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'mani-pedi',
    name: 'Mani & Pedi',
    avatar: '/images/services/mani-pedi.jpg',
    subCategories: [
      {
        id: 'mani-pedi-list',
        title: 'Hand & Foot Massages, Mani & Pedi (5)',
        items: [
          { id: 'mp-gel-mani', name: 'Gel Manicure & Hand Care', price: 1200, currency: '₹', gender: 'women' },
          { id: 'mp-mens-mani', name: "Men's Manicure & Hand Cleanse", price: 800, currency: '₹', gender: 'men' },
          { id: 'mp-foot-massage', name: 'Hand & Foot Massage with Aromatherapy Oils', price: 1400, currency: '₹', gender: 'all' },
          { id: 'mp-classic-p', name: 'Classic Spa Pedicure', price: 900, currency: '₹', gender: 'women' },
          { id: 'mp-ice-cream', name: 'Ice Cream Spa Mani-Pedi Combo', price: 2200, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'massage-spa',
    name: 'Massage & Spa',
    avatar: '/images/services/massage-spa.jpg',
    subCategories: [
      {
        id: 'spa-therapies',
        title: 'Relaxing Spa & Foot Massages (5)',
        items: [
          { id: 'spa-aroma-oil', name: 'Aromatherapy Oils Body Massage (60 min)', price: 2800, currency: '₹', gender: 'all' },
          { id: 'spa-swedish', name: 'Swedish Body Massage & Spa (60 min)', price: 2500, currency: '₹', gender: 'all' },
          { id: 'spa-deeptissue', name: 'Deep Tissue Relief Massage (60 min)', price: 3000, currency: '₹', gender: 'all' },
          { id: 'spa-foot-massage', name: 'Relaxing Foot Massages & Reflexology (45 min)', price: 1200, currency: '₹', gender: 'all' },
          { id: 'spa-body-scrub', name: 'Exfoliating Body Scrub & Spa Polish', price: 2200, currency: '₹', gender: 'all' },
        ],
      },
    ],
  },
  {
    id: 'mens-grooming',
    name: "Men's Grooming",
    avatar: '/images/services/mens-grooming.jpg',
    subCategories: [
      {
        id: 'men-grooming-list',
        title: "Men's Shaving, Haircut & Manicure (4)",
        items: [
          { id: 'mg-cut', name: 'Executive Men Haircut & Styling', price: 500, currency: '₹', gender: 'men' },
          { id: 'mg-shave', name: 'Precision Shaving & Hot Towel Spa', price: 400, currency: '₹', gender: 'men' },
          { id: 'mg-facial', name: 'Royal Charcoal Facial for Men', price: 1800, currency: '₹', gender: 'men' },
          { id: 'mg-mani', name: "Men's Manicure & Hand Massage", price: 800, currency: '₹', gender: 'men' },
        ],
      },
    ],
  },
];
