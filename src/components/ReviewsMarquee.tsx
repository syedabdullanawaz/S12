import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

const REAL_GOOGLE_REVIEWS_ROW_1: ReviewItem[] = [
  {
    id: 'g-rev-1',
    name: 'Shruti Mukundan',
    role: 'Google Review',
    service: 'Haircut & Styling',
    rating: 5,
    comment: 'Extremely good service at Alora Salon HSR Layout. Staff is super professional and courteous. Got haircut & styling done, result was top notch!',
    date: 'Google Review',
  },
  {
    id: 'g-rev-2',
    name: 'Rashmi Hegde',
    role: 'Google Review',
    service: 'Hydra-Facial & Scalp Detox',
    rating: 5,
    comment: 'Visited Alora for Hydra facial and scalp detox spa. Wonderful experience, peaceful ambience and visible glow right away!',
    date: 'Google Review',
  },
  {
    id: 'g-rev-3',
    name: 'Aditi Nair',
    role: 'Google Review',
    service: 'Gel Manicure & Extensions',
    rating: 5,
    comment: 'Best salon in HSR Layout! The gel manicure and acrylic nail extensions were done with so much care. Highly recommend their services.',
    date: 'Google Review',
  },
  {
    id: 'g-rev-4',
    name: 'Niharika Patel',
    role: 'Google Review',
    service: 'Balayage Hair Colour',
    rating: 5,
    comment: 'Had a great hair coloring experience (balayage). The colorist took time to understand what I wanted. Super satisfied!',
    date: 'Google Review',
  },
];

const REAL_GOOGLE_REVIEWS_ROW_2: ReviewItem[] = [
  {
    id: 'g-rev-5',
    name: 'Karthik Sundaram',
    role: 'Google Review',
    service: "Men's Haircut & Beard Spa",
    rating: 5,
    comment: "Awesome experience for men’s haircut and precision beard styling. Clean setup and polite staff at Radhakrishnan Grand building.",
    date: 'Google Review',
  },
  {
    id: 'g-rev-6',
    name: 'Swati Deshmukh',
    role: 'Google Review',
    service: 'Rica Waxing & Pedicure',
    rating: 5,
    comment: 'Regular customer here for Rica organic waxing, cleanups and spa pedicure. Consistently great service every single time.',
    date: 'Google Review',
  },
  {
    id: 'g-rev-7',
    name: 'Tanvi Shah',
    role: 'Google Review',
    service: 'Radiance Facial & De-Tan Pack',
    rating: 5,
    comment: 'The facial massage and de-tan pack was so relaxing. Skin felt fresh and glowing. Definitely visiting again!',
    date: 'Google Review',
  },
  {
    id: 'g-rev-8',
    name: 'Pooja Sharma',
    role: 'Google Review',
    service: 'Hair Treatment & Conditioning',
    rating: 5,
    comment: 'Professional hair treatment and deep conditioning. My hair feels so soft and silky. Great hospitality in HSR Layout!',
    date: 'Google Review',
  },
];

export const ReviewsMarquee: React.FC = () => {
  const googleMapsUrl = "https://maps.google.com/?q=Alora+Beauty+Salon+HSR+Layout+Bengaluru";

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#f7f6f2] text-black overflow-hidden border-t border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-6 sm:mb-10 md:mb-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Interactive Google Review Pill Badge */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border border-black/15 bg-white shadow-sm hover:shadow-md hover:border-black/30 transition-all duration-300 group cursor-pointer mb-3 sm:mb-5"
          >
            {/* Multi-colored Google G Icon */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>

            {/* 5 Gold Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Rating text */}
            <span className="text-xs sm:text-sm font-medium text-neutral-800 flex items-center gap-1.5">
              <span>Rated</span>
              <strong className="font-extrabold text-black text-sm sm:text-base">4.6</strong>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400 group-hover:text-black transition-colors ml-0.5" />
            </span>
          </a>

          {/* Title */}
          <h2 className="font-cobe font-extrabold uppercase text-2xl sm:text-4xl md:text-5xl tracking-tight text-black">
            GOOGLE REVIEWS & FEEDBACK
          </h2>
          <p className="mt-1.5 sm:mt-2.5 text-neutral-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal">
            Real guest experiences from Alora Salon in HSR Layout, Bengaluru.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container with Side Fade Overlay */}
      <div className="relative w-full space-y-3.5 sm:space-y-6">
        {/* Soft Side Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-44 bg-gradient-to-r from-[#f7f6f2] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-44 bg-gradient-to-l from-[#f7f6f2] to-transparent z-10" />

        {/* Row 1: Slow Scroll Left */}
        <div className="flex w-full overflow-hidden select-none group gap-3.5 sm:gap-6">
          <div
            className="flex shrink-0 gap-3.5 sm:gap-6 py-1 sm:py-2 animate-marquee-scroll-left"
            style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}
          >
            {[...REAL_GOOGLE_REVIEWS_ROW_1, ...REAL_GOOGLE_REVIEWS_ROW_1].map((review, idx) => (
              <ReviewCard key={`g1-a-${review.id}-${idx}`} review={review} googleMapsUrl={googleMapsUrl} />
            ))}
          </div>
          <div
            className="flex shrink-0 gap-3.5 sm:gap-6 py-1 sm:py-2 animate-marquee-scroll-left"
            aria-hidden="true"
            style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}
          >
            {[...REAL_GOOGLE_REVIEWS_ROW_1, ...REAL_GOOGLE_REVIEWS_ROW_1].map((review, idx) => (
              <ReviewCard key={`g1-b-${review.id}-${idx}`} review={review} googleMapsUrl={googleMapsUrl} />
            ))}
          </div>
        </div>

        {/* Row 2: Slow Scroll Right */}
        <div className="flex w-full overflow-hidden select-none group gap-3.5 sm:gap-6">
          <div
            className="flex shrink-0 gap-3.5 sm:gap-6 py-1 sm:py-2 animate-marquee-scroll-right"
            style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}
          >
            {[...REAL_GOOGLE_REVIEWS_ROW_2, ...REAL_GOOGLE_REVIEWS_ROW_2].map((review, idx) => (
              <ReviewCard key={`g2-a-${review.id}-${idx}`} review={review} googleMapsUrl={googleMapsUrl} />
            ))}
          </div>
          <div
            className="flex shrink-0 gap-3.5 sm:gap-6 py-1 sm:py-2 animate-marquee-scroll-right"
            aria-hidden="true"
            style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}
          >
            {[...REAL_GOOGLE_REVIEWS_ROW_2, ...REAL_GOOGLE_REVIEWS_ROW_2].map((review, idx) => (
              <ReviewCard key={`g2-b-${review.id}-${idx}`} review={review} googleMapsUrl={googleMapsUrl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard: React.FC<{ review: ReviewItem; googleMapsUrl: string }> = ({ review, googleMapsUrl }) => {
  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ contain: 'content' }}
      className="w-[260px] sm:w-[340px] md:w-[380px] shrink-0 bg-white border border-black/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-xs hover:shadow-md hover:border-black/20 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between cursor-pointer group/card block"
    >
      <div>
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 group-hover/card:text-black transition-colors" />
        </div>

        {/* Comment Text */}
        <p className="text-neutral-800 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed font-normal mb-2.5 sm:mb-4 line-clamp-3 sm:line-clamp-none">
          "{review.comment}"
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="pt-2.5 sm:pt-3.5 md:pt-4 border-t border-neutral-100 flex items-center justify-between">
        <div>
          <h4 className="font-cobe font-bold text-xs sm:text-sm md:text-base text-black uppercase tracking-tight">
            {review.name}
          </h4>
          <span className="text-[10px] sm:text-xs text-neutral-500 font-medium block">
            {review.service}
          </span>
        </div>

        {/* Google Badge Tag */}
        <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] sm:text-[11px] font-medium text-neutral-600">
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span>Google</span>
        </div>
      </div>
    </a>
  );
};

export default ReviewsMarquee;
