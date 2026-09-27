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
    avatar: '/images/avatars/hair-essentials.jpg',
    subCategories: [
      {
        id: 'women-hair-cut',
        title: 'Women Hair Cut (5)',
        items: [
          { id: 'hc-basics', name: 'Haircut ( Basics )', price: 800, currency: '₹', gender: 'women' },
          { id: 'hc-advanced', name: 'Advanced Cut', price: 1000, currency: '₹', gender: 'women' },
          { id: 'hc-fringe', name: 'Fringe Cut', price: 300, currency: '₹', gender: 'women' },
          { id: 'hc-wash-setting', name: 'Wash & Setting', price: 600, currency: '₹', gender: 'women' },
          { id: 'hc-styling', name: 'Styling ( Ironing & Curling )', price: 600, currency: '₹', gender: 'women' },
        ],
      },
      {
        id: 'men-hair-cut',
        title: 'Men Hair Cut (3)',
        items: [
          { id: 'm-hc-classic', name: 'Classic Men Haircut', price: 450, currency: '₹', gender: 'men' },
          { id: 'm-beard-trim', name: 'Beard Trim & Styling', price: 350, currency: '₹', gender: 'men' },
          { id: 'm-combo', name: 'Haircut + Beard Combo', price: 700, currency: '₹', gender: 'men' },
        ],
      },
      {
        id: 'hair-wash-spa',
        title: 'Hair Wash & Nourishing Mask (3)',
        items: [
          { id: 'hw-deep', name: 'Deep Conditioning Moisture Mask', price: 900, currency: '₹', gender: 'all' },
          { id: 'hw-scalp', name: 'Clarifying Scalp Detox Wash', price: 750, currency: '₹', gender: 'all' },
          { id: 'hw-dandruff', name: 'Anti-Dandruff Spa Wash', price: 1100, currency: '₹', gender: 'all' },
        ],
      },
    ],
  },
  {
    id: 'hair-colour',
    name: 'Hair Colour',
    avatar: '/images/avatars/hair-colour.jpg',
    subCategories: [
      {
        id: 'global-colour',
        title: 'Global Colour & Highlights (4)',
        items: [
          { id: 'clr-global', name: 'Global Hair Colour ( Ammonia Free )', price: 3200, currency: '₹', gender: 'women' },
          { id: 'clr-root', name: 'Root Touch Up ( Grey Coverage )', price: 1500, currency: '₹', gender: 'all' },
          { id: 'clr-highlights', name: 'Highlights ( Full Head Foil )', price: 4500, currency: '₹', gender: 'women' },
          { id: 'clr-balayage', name: 'Balayage / Ombre Couture', price: 5500, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'treatments',
    name: 'Treatments',
    avatar: '/images/avatars/treatments.jpg',
    subCategories: [
      {
        id: 'hair-care-repair',
        title: 'Keratin & Protein Repair (4)',
        items: [
          { id: 'trt-keratin', name: 'Keratin Smooth Therapy', price: 4500, currency: '₹', gender: 'all' },
          { id: 'trt-cysteine', name: 'Cysteine Hair Smoothening', price: 5000, currency: '₹', gender: 'women' },
          { id: 'trt-botox', name: 'Botox Intense Hair Repair', price: 6000, currency: '₹', gender: 'women' },
          { id: 'trt-olaplex', name: 'Olaplex Bond Rebuilding Spa', price: 3500, currency: '₹', gender: 'all' },
        ],
      },
    ],
  },
  {
    id: 'waxing-threading',
    name: 'Waxing & Threading',
    avatar: '/images/avatars/waxing.jpg',
    subCategories: [
      {
        id: 'waxing-list',
        title: 'Facial & Body Hair Removal (5)',
        items: [
          { id: 'wax-eyebrow', name: 'Eyebrow Threading & Shaping', price: 100, currency: '₹', gender: 'women' },
          { id: 'wax-lips', name: 'Upper Lip & Chin Threading', price: 150, currency: '₹', gender: 'women' },
          { id: 'wax-fullface', name: 'Full Face Threading', price: 350, currency: '₹', gender: 'women' },
          { id: 'wax-rica-arms', name: 'Rica Liposoluble Full Arms Waxing', price: 800, currency: '₹', gender: 'women' },
          { id: 'wax-rica-legs', name: 'Rica Liposoluble Full Legs Waxing', price: 1200, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'face-detan',
    name: 'Face & De-Tan',
    avatar: '/images/avatars/face-detan.jpg',
    subCategories: [
      {
        id: 'facial-glow',
        title: 'Skin Brightening & Facials (5)',
        items: [
          { id: 'face-detan-pack', name: 'Instaglow De-Tan Pack', price: 600, currency: '₹', gender: 'all' },
          { id: 'face-o3', name: 'O3+ Professional Brightening Facial', price: 2500, currency: '₹', gender: 'women' },
          { id: 'face-hydra', name: 'Hydra-Facial Deep Infusion', price: 3500, currency: '₹', gender: 'all' },
          { id: 'face-cleanup', name: 'Deep Pore Cleansing Cleanup', price: 1200, currency: '₹', gender: 'all' },
          { id: 'face-gold', name: '24K Gold Radiance Facial', price: 2800, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'nail-bar',
    name: 'Nail Bar',
    avatar: '/images/avatars/nail-bar.jpg',
    subCategories: [
      {
        id: 'nail-care',
        title: 'Nail Care & Extensions (4)',
        items: [
          { id: 'nl-gel-polish', name: 'Gel Polish Application', price: 800, currency: '₹', gender: 'women' },
          { id: 'nl-acrylic', name: 'Acrylic Nail Extensions (Full Set)', price: 2200, currency: '₹', gender: 'women' },
          { id: 'nl-art', name: 'Custom Nail Art (Per Finger)', price: 150, currency: '₹', gender: 'women' },
          { id: 'nl-removal', name: 'Safe Gel / Acrylic Removal', price: 400, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
  {
    id: 'massage-spa',
    name: 'Massage Spa',
    avatar: '/images/avatars/massage-spa.jpg',
    subCategories: [
      {
        id: 'spa-therapies',
        title: 'Relaxing Body Therapies (4)',
        items: [
          { id: 'spa-swedish', name: 'Swedish Body Massage (60 min)', price: 2500, currency: '₹', gender: 'all' },
          { id: 'spa-deeptissue', name: 'Deep Tissue Relief Massage (60 min)', price: 3000, currency: '₹', gender: 'all' },
          { id: 'spa-aroma', name: 'Aromatherapy Stress Relief (60 min)', price: 2800, currency: '₹', gender: 'all' },
          { id: 'spa-foot', name: 'Foot Reflexology (30 min)', price: 1200, currency: '₹', gender: 'all' },
        ],
      },
    ],
  },
  {
    id: 'mens-grooming',
    name: "Men's Grooming",
    avatar: '/images/avatars/mens-grooming.jpg',
    subCategories: [
      {
        id: 'men-grooming-list',
        title: 'Grooming Essentials (4)',
        items: [
          { id: 'mg-cut', name: 'Executive Men Haircut', price: 500, currency: '₹', gender: 'men' },
          { id: 'mg-facial', name: 'Royal Charcoal Facial for Men', price: 1800, currency: '₹', gender: 'men' },
          { id: 'mg-beard', name: 'Beard Sculpting & Hot Towel Spa', price: 600, currency: '₹', gender: 'men' },
          { id: 'mg-head-massage', name: 'Ayurvedic Head Massage with Oil', price: 500, currency: '₹', gender: 'men' },
        ],
      },
    ],
  },
  {
    id: 'mani-pedi',
    name: 'Mani & Pedi',
    avatar: '/images/avatars/mani-pedi.jpg',
    subCategories: [
      {
        id: 'mani-pedi-list',
        title: 'Hand & Feet Care (4)',
        items: [
          { id: 'mp-classic-m', name: 'Classic Manicure', price: 700, currency: '₹', gender: 'women' },
          { id: 'mp-classic-p', name: 'Classic Pedicure', price: 900, currency: '₹', gender: 'women' },
          { id: 'mp-spa-pedi', name: 'Spa Organic Luxury Pedicure', price: 1400, currency: '₹', gender: 'women' },
          { id: 'mp-ice-cream', name: 'Ice Cream Spa Mani-Pedi Combo', price: 2200, currency: '₹', gender: 'women' },
        ],
      },
    ],
  },
];
