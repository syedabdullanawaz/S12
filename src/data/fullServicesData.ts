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
          {
            id: 'hc-basics',
            name: 'Haircut ( Basics )',
            price: 800,
            currency: '₹',
            gender: 'women',
            description: 'Customized precision haircut with revitalizing wash and quick dry for refreshed styling.',
          },
          {
            id: 'hc-advanced',
            name: 'Advanced Layered Cut',
            price: 1000,
            currency: '₹',
            gender: 'women',
            description: 'Multi-dimensional textured layers and face-framing cuts designed for natural bounce and volume.',
          },
          {
            id: 'hc-fringe',
            name: 'Fringe Cut & Bangs',
            price: 300,
            currency: '₹',
            gender: 'women',
            description: 'Quick precision trimming and shaping for curtain bangs, blunt fringes, or wispy layers.',
          },
          {
            id: 'hc-wash-setting',
            name: 'Shampoo, Wash & Blow Dry Setting',
            price: 600,
            currency: '₹',
            gender: 'women',
            description: 'Invigorating clarifying shampoo followed by salon-grade blowout styling with thermal protection.',
          },
          {
            id: 'hc-styling',
            name: 'Hairstyling ( Ironing & Curling )',
            price: 600,
            currency: '₹',
            gender: 'women',
            description: 'Professional thermal styling for sleek straight glass hair or soft cascading waves.',
          },
          {
            id: 'hc-extensions',
            name: 'Hair Extensions Fitting & Styling',
            price: 2500,
            currency: '₹',
            gender: 'women',
            description: 'Seamless fitting, blending, and thermal heat styling of premium hair extensions.',
          },
        ],
      },
      {
        id: 'men-hair-cut',
        title: 'Men Hair Cut & Shaving (4)',
        items: [
          {
            id: 'm-hc-classic',
            name: 'Classic Men Haircut',
            price: 450,
            currency: '₹',
            gender: 'men',
            description: 'Precision scissor and clipper cut tailored to your personal aesthetic and face structure.',
          },
          {
            id: 'm-beard-trim',
            name: 'Beard Trim & Precision Shaving',
            price: 350,
            currency: '₹',
            gender: 'men',
            description: 'Sharp razor lines, length trimming, and nourishing organic beard oil application.',
          },
          {
            id: 'm-combo',
            name: 'Haircut + Beard Styling Spa Combo',
            price: 700,
            currency: '₹',
            gender: 'men',
            description: 'Complete grooming package with custom haircut, beard sculpting, and hot towel finish.',
          },
          {
            id: 'm-shave-head',
            name: 'Royal Clean Shave & Head Massage',
            price: 600,
            currency: '₹',
            gender: 'men',
            description: 'Ultra-smooth clean shave paired with a deeply relaxing pressure-point head massage.',
          },
        ],
      },
      {
        id: 'hair-wash-spa',
        title: 'Shampoo, Conditioning & Braids (3)',
        items: [
          {
            id: 'hw-deep',
            name: 'Deep Conditioning Moisture Mask',
            price: 900,
            currency: '₹',
            gender: 'all',
            description: 'Intensive restorative hydration therapy repairing dull, brittle, and heat-stressed hair.',
          },
          {
            id: 'hw-scalp',
            name: 'Clarifying Scalp Detox Wash',
            price: 750,
            currency: '₹',
            gender: 'all',
            description: 'Exfoliating botanical scalp cleanse that removes buildup, unclogs pores, and stimulates growth.',
          },
          {
            id: 'hw-braids',
            name: 'Trendy Hair Braids & Styling',
            price: 1200,
            currency: '₹',
            gender: 'women',
            description: 'Artisanal Dutch, French, or festival braids crafted for lasting elegance and flair.',
          },
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
          {
            id: 'clr-balayage',
            name: 'Balayage & Ombre Hair Transformation',
            price: 5500,
            currency: '₹',
            gender: 'women',
            description: 'Hand-painted sun-kissed gradient transitions delivering natural, seamless dimension.',
          },
          {
            id: 'clr-global',
            name: 'Global Hair Colour ( Ammonia Free )',
            price: 3200,
            currency: '₹',
            gender: 'women',
            description: 'Full-head rich, luminous color using gentle ammonia-free conditioning formulas.',
          },
          {
            id: 'clr-root',
            name: 'Root Touch Up ( Grey Coverage )',
            price: 1500,
            currency: '₹',
            gender: 'all',
            description: 'Targeted root re-pigmentation ensuring 100% natural-looking grey coverage.',
          },
          {
            id: 'clr-highlights',
            name: 'Highlights ( Full Head Foil )',
            price: 4500,
            currency: '₹',
            gender: 'women',
            description: 'Precision full-head foil placements for high-contrast multi-tonal brilliance.',
          },
          {
            id: 'clr-streaks',
            name: 'Fashion Streak Highlights (Per Foil)',
            price: 450,
            currency: '₹',
            gender: 'all',
            description: 'Vibrant pop-color or accent blonde foil highlights on custom hair sections.',
          },
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
          {
            id: 'acne-clinical',
            name: 'Advanced Clinical Acne Clear Treatment',
            price: 2800,
            currency: '₹',
            gender: 'all',
            description: 'Targeted salicylic & tea-tree antibacterial treatment reducing active breakouts and inflammation.',
          },
          {
            id: 'face-detan-pack',
            name: 'Instaglow De-Tan Pack & Clean-up',
            price: 600,
            currency: '₹',
            gender: 'all',
            description: 'Potent botanical de-tan pack removing sun damage and restoring even skin tone.',
          },
          {
            id: 'face-o3',
            name: 'O3+ Professional Skin Brightening Facial',
            price: 2500,
            currency: '₹',
            gender: 'women',
            description: 'Oxygen-infused clinical treatment for immediate brightening and hyperpigmentation reduction.',
          },
          {
            id: 'face-hydra',
            name: 'Hydra-Facial Deep Pore Infusion',
            price: 3500,
            currency: '₹',
            gender: 'all',
            description: 'Multi-step vortex suction cleansing, chemical exfoliation, and antioxidant hydration.',
          },
          {
            id: 'face-gold',
            name: '24K Gold Radiance Facial',
            price: 2800,
            currency: '₹',
            gender: 'women',
            description: 'Opulent gold peptide infusion that boosts collagen, firmness, and natural luminosity.',
          },
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
          {
            id: 'wax-brazilian',
            name: 'Brazilian Waxing (Intimate Care)',
            price: 1800,
            currency: '₹',
            gender: 'women',
            description: 'Gentle, hygienic intimate waxing with soothing post-wax chamomile lotion.',
          },
          {
            id: 'wax-body-full',
            name: 'Full Body Waxing (Rica Organic Wax)',
            price: 2600,
            currency: '₹',
            gender: 'women',
            description: 'Complete full-body hair removal using premium Italian liposoluble Rica wax.',
          },
          {
            id: 'laser-underarms',
            name: 'Laser Hair Removal (Underarms Session)',
            price: 1500,
            currency: '₹',
            gender: 'all',
            description: 'Painless triple-wavelength diode laser session targeting stubborn underarm follicles.',
          },
          {
            id: 'laser-fullbody',
            name: 'Permanent Laser Hair Removal (Full Body)',
            price: 6500,
            currency: '₹',
            gender: 'all',
            description: 'Comprehensive medical-grade laser treatment for smooth, permanent hair reduction.',
          },
          {
            id: 'wax-rica-arms',
            name: 'Rica Liposoluble Full Arms Waxing',
            price: 800,
            currency: '₹',
            gender: 'women',
            description: 'Gentle strip wax leaving arms silky smooth without redness or irritation.',
          },
          {
            id: 'wax-rica-legs',
            name: 'Rica Liposoluble Full Legs Waxing',
            price: 1200,
            currency: '₹',
            gender: 'women',
            description: 'Smooth, nourishing leg hair removal enriched with natural vegetable oils.',
          },
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
          {
            id: 'brow-threading',
            name: 'Eyebrow Threading & Beautification',
            price: 100,
            currency: '₹',
            gender: 'women',
            description: 'Precision thread shaping creating clean, sharp arches tailored to your face.',
          },
          {
            id: 'lash-extensions',
            name: 'Eyelash Extensions ( Classic / Volume )',
            price: 2500,
            currency: '₹',
            gender: 'women',
            description: 'Lightweight premium silk lashes applied individually for breathtaking fullness.',
          },
          {
            id: 'microblading',
            name: 'Microblading Permanent Eyebrows',
            price: 7500,
            currency: '₹',
            gender: 'women',
            description: 'Semi-permanent feathering technique creating realistic hyper-natural hair strokes.',
          },
          {
            id: 'perm-makeup',
            name: 'Permanent Makeup ( Lip Blush & Eyeliner )',
            price: 6500,
            currency: '₹',
            gender: 'women',
            description: 'Subtle semi-permanent pigment wash defining lips and lash lines effortlessly.',
          },
          {
            id: 'makeup-party',
            name: 'Party Make-up & Hairstyling',
            price: 3500,
            currency: '₹',
            gender: 'women',
            description: 'Flawless camera-ready makeup with contouring, highlighter, and bespoke hairdo.',
          },
          {
            id: 'bridal-make-up',
            name: 'Bridal Services & Wedding Preparation',
            price: 12000,
            currency: '₹',
            gender: 'women',
            description: 'Luxury couture bridal transformation including HD airbrush makeup and veil setting.',
          },
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
          {
            id: 'nl-acrylic',
            name: 'Acrylic Nail Extensions (Full Set)',
            price: 2200,
            currency: '₹',
            gender: 'women',
            description: 'Durable sculpted acrylic tips with custom shaping and high-gloss topcoat.',
          },
          {
            id: 'nl-gel-manicure',
            name: 'Gel Manicure & Cuticle Care',
            price: 1200,
            currency: '₹',
            gender: 'women',
            description: 'Gentle cuticle grooming, nail buffing, and chip-free LED cured gel polish.',
          },
          {
            id: 'nl-gel-polish',
            name: 'Gel Polish Application',
            price: 800,
            currency: '₹',
            gender: 'women',
            description: 'Long-lasting vibrant gel color cured under UV-LED with mirror shine.',
          },
          {
            id: 'nl-cut-filing',
            name: 'Nail Cut, Filing & Polish Change',
            price: 300,
            currency: '₹',
            gender: 'all',
            description: 'Essential nail shaping, edge smoothing, and fresh regular polish application.',
          },
          {
            id: 'nl-removal',
            name: 'Safe Gel / Acrylic Extensions Removal',
            price: 400,
            currency: '₹',
            gender: 'women',
            description: 'Damage-free soak-off process followed by keratin strengthening nail serum.',
          },
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
          {
            id: 'mp-gel-mani',
            name: 'Gel Manicure & Hand Care',
            price: 1200,
            currency: '₹',
            gender: 'women',
            description: 'Exfoliating hand scrub, cuticle conditioning, and chip-resistant gel polish.',
          },
          {
            id: 'mp-mens-mani',
            name: "Men's Manicure & Hand Cleanse",
            price: 800,
            currency: '₹',
            gender: 'men',
            description: 'Deep cleansing hand soak, nail trim, callous buffing, and matte hydration.',
          },
          {
            id: 'mp-foot-massage',
            name: 'Hand & Foot Massage with Aromatherapy Oils',
            price: 1400,
            currency: '₹',
            gender: 'all',
            description: 'Therapeutic pressure-point reflexology releasing tension from tired feet and wrists.',
          },
          {
            id: 'mp-classic-p',
            name: 'Classic Spa Pedicure',
            price: 900,
            currency: '₹',
            gender: 'women',
            description: 'Warm herbal foot soak, pumice exfoliation, nail grooming, and gentle massage.',
          },
          {
            id: 'mp-ice-cream',
            name: 'Ice Cream Spa Mani-Pedi Combo',
            price: 2200,
            currency: '₹',
            gender: 'women',
            description: 'Indulgent gourmet manicure and pedicure featuring sweet whipped cream scrubs.',
          },
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
          {
            id: 'spa-aroma-oil',
            name: 'Aromatherapy Oils Body Massage (60 min)',
            price: 2800,
            currency: '₹',
            gender: 'all',
            description: 'Soothing rhythmic full-body massage using pure botanical essential oils.',
          },
          {
            id: 'spa-swedish',
            name: 'Swedish Body Massage & Spa (60 min)',
            price: 2500,
            currency: '₹',
            gender: 'all',
            description: 'Classic European long-stroke massage relieving muscular stiffness and stress.',
          },
          {
            id: 'spa-deeptissue',
            name: 'Deep Tissue Relief Massage (60 min)',
            price: 3000,
            currency: '₹',
            gender: 'all',
            description: 'Intensive firm-pressure therapy releasing chronic knots and postural tension.',
          },
          {
            id: 'spa-foot-massage',
            name: 'Relaxing Foot Massages & Reflexology (45 min)',
            price: 1200,
            currency: '₹',
            gender: 'all',
            description: 'Targeted nerve-zone reflexology restoring full-body balance and vitality.',
          },
          {
            id: 'spa-body-scrub',
            name: 'Exfoliating Body Scrub & Spa Polish',
            price: 2200,
            currency: '₹',
            gender: 'all',
            description: 'Full-body dead cell exfoliation leaving your skin polished, soft, and glowing.',
          },
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
          {
            id: 'mg-cut',
            name: 'Executive Men Haircut & Styling',
            price: 500,
            currency: '₹',
            gender: 'men',
            description: 'Tailored men haircut with consultation, rinse, and matte pomade styling.',
          },
          {
            id: 'mg-shave',
            name: 'Precision Shaving & Hot Towel Spa',
            price: 400,
            currency: '₹',
            gender: 'men',
            description: 'Traditional barber straight-razor shave with warm herbal steam towels.',
          },
          {
            id: 'mg-facial',
            name: 'Royal Charcoal Facial for Men',
            price: 1800,
            currency: '₹',
            gender: 'men',
            description: 'Activated charcoal detox extracting deep impurities and controlling excess sebum.',
          },
          {
            id: 'mg-mani',
            name: "Men's Manicure & Hand Massage",
            price: 800,
            currency: '₹',
            gender: 'men',
            description: 'Hand exfoliation, nail detailing, and tension-relieving knuckle massage.',
          },
        ],
      },
    ],
  },
];
