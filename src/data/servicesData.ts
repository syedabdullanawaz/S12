import { ServiceCategory, ServiceItem } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'all',
    title: 'ALL',
    count: 54,
    description: 'Explore our complete collection of bespoke beauty, skincare, body, and hair rituals.',
    subDescription: 'Tailored precisely for your individual needs by certified skin specialists.',
    bgImage: '/images/oil-card.jpg',
    iconType: 'circle',
  },
  {
    id: 'skincare',
    title: 'SKIN CARE',
    count: 24,
    description: 'Inspired by nature, light, and the soft rhythm of self-care, our skin treatments are designed to restore balance, nourish deeply, and reveal your natural radiance.',
    subDescription: 'Whether you seek a glow before a big event or long-term skin health, each treatment is performed with intention and care.',
    bgImage: '/images/skincare-card.jpg',
    iconType: 'cross',
  },
  {
    id: 'body',
    title: 'BODY RITUALS',
    count: 18,
    description: 'Rejuvenating full-body therapy crafted to release deep muscle tension, detoxify skin tissue, and restore inner harmony.',
    subDescription: 'Indulge in botanical wraps, targeted lymphatic drainage, and heated stone rituals in our tranquil sanctuary.',
    bgImage: '/images/body-card.jpg',
    iconType: 'square-grid',
  },
  {
    id: 'hair',
    title: 'HAIR TREATMENTS',
    count: 12,
    description: 'Restorative hair and scalp care formulated with pure active nutrients to rebuild hair fiber structure, vitality, and silky brilliance.',
    subDescription: 'From clinical scalp detoxes to high-gloss intensive bond rebuilding treatments.',
    bgImage: '/images/hair-card.jpg',
    iconType: 'cross',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'really-good-facial',
    title: 'THE REALLY GOOD FACIAL',
    price: 140,
    duration: '60min',
    description: 'The 60-minute personalized facial that transforms your skin and renews your confidence.',
    category: 'skincare',
    rating: 4.9,
    idealFor: 'Monthly maintenance and promoting overall skin health',
    involved: [
      {
        title: 'Double Cleanse',
        description: 'Removes makeup, sweat, and dirt, leaving your skin fresh and ready for treatment.',
      },
      {
        title: 'Skin Analysis',
        description: 'Thorough evaluation of your skin type, condition, and specific needs to customize formulas.',
      },
      {
        title: 'Customized Treatments',
        description: 'The most effective active products and targeted techniques are used to address your unique skin concerns.',
      },
      {
        title: 'Hydration Seal',
        description: 'Finishing layer of bio-active peptides and soothing moisture to protect and enhance your skin barrier.',
      },
    ],
    images: ['/images/modal-facial-1.jpg', '/images/modal-facial-2.jpg'],
    featured: true,
  },
  {
    id: 'dermaplaning',
    title: 'DERMAPLANING',
    price: 120,
    duration: '60min',
    description: 'Removes dead skin and peach fuzz for a soft, smooth, radiant finish.',
    category: 'skincare',
    rating: 4.8,
    idealFor: 'Instant smooth texture and flawless makeup application',
    involved: [
      {
        title: 'Gentle Cleansing',
        description: 'Prepares the skin surface by removing top oil and debris.',
      },
      {
        title: 'Surgical Blade Exfoliation',
        description: 'Skilled blade stroke technique removing fine vellus hair and dead stratum corneum.',
      },
      {
        title: 'Calming Serum Mask',
        description: 'Infuses hyaluronic acid and botanical antioxidants to soothe instantly.',
      },
    ],
    images: ['/images/skincare-featured.jpg', '/images/modal-facial-1.jpg'],
  },
  {
    id: 'enzyme-exfoliation',
    title: 'ENZYME EXFOLIATION',
    price: 110,
    duration: '45min',
    description: 'Manual pore cleansing to remove blackheads, congestion, and impurities.',
    category: 'skincare',
    rating: 4.9,
    idealFor: 'Sensitive skin needing deep gentle enzymatic pore purification',
    involved: [
      {
        title: 'Fruit Enzyme Peel',
        description: 'Natural papaya and pineapple enzymes gently break down keratin proteins.',
      },
      {
        title: 'Manual Extraction',
        description: 'Targeted decongestion of pores without irritation.',
      },
    ],
    images: ['/images/modal-facial-2.jpg', '/images/skincare-card.jpg'],
  },
  {
    id: 'high-frequency',
    title: 'HIGH FREQUENCY',
    price: 90,
    duration: '30min',
    description: 'Calms acne, boosts healing, and improves circulation using gentle electrical currents.',
    category: 'skincare',
    rating: 4.7,
    idealFor: 'Acne-prone skin, breakout reduction, and rapid healing',
    involved: [
      {
        title: 'Ozone Thermal Current',
        description: 'Enriches oxygen supply to eliminate acne-causing bacteria deep below the skin surface.',
      },
    ],
    images: ['/images/modal-facial-1.jpg', '/images/modal-facial-2.jpg'],
  },
  {
    id: 'purelift-technology',
    title: 'PURELIFT TECHNOLOGY',
    price: 160,
    duration: '60min',
    description: 'Microcurrent lifts and tones facial muscles for firmer, younger-looking skin.',
    category: 'skincare',
    rating: 5.0,
    idealFor: 'Non-invasive facial lifting, jawline contouring and elasticity enhancement',
    involved: [
      {
        title: 'Microcurrent Muscle Stimulation',
        description: 'Patented high-frequency electrical pulses stimulate facial muscle tone and ATP energy.',
      },
    ],
    images: ['/images/skincare-featured.jpg', '/images/modal-facial-1.jpg'],
  },
  {
    id: 'cryo-globe-massage',
    title: 'CRYO GLOBE MASSAGE',
    price: 95,
    duration: '30min',
    description: 'Cooling globes reduce puffiness, soothe inflammation, and boost circulation.',
    category: 'skincare',
    rating: 4.9,
    idealFor: 'Depuffing morning swelling, soothing redness and constricting enlarged pores',
    involved: [
      {
        title: 'Cryo-Therapeutic Sculpting',
        description: 'Sub-zero ergonomic glass globes drain lymph nodes and tighten skin contours.',
      },
    ],
    images: ['/images/modal-facial-2.jpg', '/images/skincare-featured.jpg'],
  },
  {
    id: 'muscle-tension-relief',
    title: 'MUSCLE TENSION RELIEF',
    price: 160,
    duration: '45min',
    description: 'Deep facial massage releases muscle tension and supports skin vitality.',
    category: 'skincare',
    rating: 4.8,
    idealFor: 'Jaw clenching (TMJ) relief, stress facial tightness, and natural plumpness',
    involved: [
      {
        title: 'Intra-Oral & Myofascial Release',
        description: 'Specialized deep tissue pressure point massage targeting masseter and cheek muscles.',
      },
    ],
    images: ['/images/modal-facial-1.jpg', '/images/skincare-card.jpg'],
  },
  {
    id: 'detox-body-wrap',
    title: 'DETOX BODY WRAP',
    price: 180,
    duration: '75min',
    description: 'Mineral-rich seaweed and volcanic clay wrap that draws out toxins and firms skin.',
    category: 'body',
    rating: 4.9,
    idealFor: 'Body detoxifying, skin smoothing, and fluid drainage',
    involved: [
      {
        title: 'Exfoliating Body Scrub',
        description: 'Prepares pores with marine salt crystals.',
      },
      {
        title: 'Thermal Cocoon',
        description: 'Infrared thermal wrap accelerating ingredient absorption.',
      },
    ],
    images: ['/images/body-card.jpg', '/images/oil-card.jpg'],
  },
  {
    id: 'hot-stone-ritual',
    title: 'HOT STONE RITUAL',
    price: 190,
    duration: '90min',
    description: 'Heated smooth basalt stones warm muscles and melt away deep rooted stress.',
    category: 'body',
    rating: 5.0,
    idealFor: 'Total relaxation, chronic back tension, and mental stillness',
    involved: [
      {
        title: 'Basalt Thermal Placement',
        description: 'Heat therapy along energy meridian lines.',
      },
    ],
    images: ['/images/body-card.jpg', '/images/oil-card.jpg'],
  },
  {
    id: 'keratin-smoothing',
    title: 'KERATIN SMOOTHING',
    price: 250,
    duration: '120min',
    description: 'Protective protein treatment eliminating frizz while restoring glossy silkiness.',
    category: 'hair',
    rating: 4.9,
    idealFor: 'Frizz reduction, hair strengthening, and effortless daily styling',
    involved: [
      {
        title: 'Keratin Infusion',
        description: 'Seals amino acid proteins into the hair cuticles with precision heat.',
      },
    ],
    images: ['/images/hair-card.jpg', '/images/skincare-featured.jpg'],
  },
  {
    id: 'scalp-detox-spa',
    title: 'SCALP DETOX SPA',
    price: 120,
    duration: '45min',
    description: 'Deep exfoliating scalp scrub with tea tree and peppermint oil massage.',
    category: 'hair',
    rating: 4.8,
    idealFor: 'Scalp health, product buildup removal, and follicle activation',
    involved: [
      {
        title: 'Salicylic Scalp Scrub',
        description: 'Removes sebum deposits and dead skin cells.',
      },
    ],
    images: ['/images/hair-card.jpg', '/images/oil-card.jpg'],
  },
];
