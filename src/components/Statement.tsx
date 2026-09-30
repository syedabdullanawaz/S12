import React, { useState } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import SplitText from './SplitText';

export const Statement: React.FC = () => {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  return (
    <section className="py-24 md:py-36 bg-[#f7f6f2] text-black px-6 md:px-12 overflow-hidden border-b border-black/5">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Large Statement Title with Inline Image Badges and SplitText Animation */}
        <div className="font-cobe font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase leading-[1.15] max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2">
            <SplitText
              text="WE"
              tag="span"
              className="inline-block"
              delay={30}
              duration={0.8}
            />
            {/* Cutout Hair Dryer */}
            <span className="inline-flex items-center justify-center align-middle mx-1 sm:mx-2 md:mx-3 my-auto">
              <img
                src="/images/hair_dryer.png"
                alt="Luxury Salon Hair Dryer"
                className="h-9 sm:h-14 md:h-18 lg:h-22 w-auto object-contain transform -rotate-12 hover:scale-115 hover:-rotate-6 transition-all duration-300 drop-shadow-md select-none cursor-pointer"
              />
            </span>
            <SplitText
              text="HELP CREATE"
              tag="span"
              className="inline-block"
              delay={30}
              duration={0.8}
            />
          </div>

          <div className="mt-1 sm:mt-2">
            <SplitText
              text="MOMENTS OF BEAUTY"
              tag="span"
              className="inline-block"
              delay={30}
              duration={0.8}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2 mt-1 sm:mt-2">
            <SplitText
              text="FOR YOU"
              tag="span"
              className="inline-block"
              delay={30}
              duration={0.8}
            />
            {/* Cutout Scissors */}
            <span className="inline-flex items-center justify-center align-middle mx-1 sm:mx-2 md:mx-3 my-auto">
              <img
                src="/images/scissors.png"
                alt="Professional Hairdressing Scissors"
                className="h-9 sm:h-14 md:h-18 lg:h-22 w-auto object-contain transform rotate-12 hover:scale-115 hover:rotate-6 transition-all duration-300 drop-shadow-md select-none cursor-pointer"
              />
            </span>
            <SplitText
              text="AND"
              tag="span"
              className="inline-block"
              delay={30}
              duration={0.8}
            />
          </div>

          <div className="mt-1 sm:mt-2">
            <SplitText
              text="YOUR GLOW"
              tag="span"
              className="inline-block"
              delay={30}
              duration={0.8}
            />
          </div>
        </div>



        {/* Subtitle Body Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 md:mt-14 max-w-2xl text-base md:text-lg text-neutral-700 leading-relaxed font-normal"
        >
          <p>
            Alora is a premier luxury beauty salon located in HSR Layout, Bengaluru, offering expert care for hair, skin, body, and nails. We provide personalized consultations to select treatments that precisely address each client's individual needs.
          </p>

          {readMoreOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed"
            >
              Our sanctuary in Radhakrishnan Grand blends organic aromatherapy oils with cutting-edge non-invasive clinical aesthetic techniques. From acne treatments and balayage to gel manicures and relaxing spa therapies, every session is performed with skill and care.
            </motion.p>
          )}
        </motion.div>

        {/* Read More Button on PC (Original Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 hidden md:block"
        >
          <button
            onClick={() => setReadMoreOpen(!readMoreOpen)}
            className="text-base font-semibold text-black border-b-2 border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors cursor-pointer"
          >
            {readMoreOpen ? 'Show Less' : 'Read More'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
