import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Statement: React.FC = () => {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  return (
    <section className="py-24 md:py-36 bg-[#f7f6f2] text-black px-6 md:px-12 overflow-hidden border-b border-black/5">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Large Statement Title with Inline Image Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9 }}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase leading-[1.15] max-w-5xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2">
            <span>WE</span>
            <span className="inline-flex items-center h-[1.1em] px-1 overflow-hidden align-middle my-auto">
              <span className="w-12 sm:w-20 md:w-24 h-7 sm:h-11 md:h-12 rounded-full overflow-hidden border border-black/15 shadow-sm inline-block transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/skincare-card.jpg"
                  alt="Beauty thumbnail"
                  className="w-full h-full object-cover brightness-105"
                />
              </span>
            </span>
            <span>HELP CREATE</span>
          </div>

          <div className="mt-1 sm:mt-2">
            <span>MOMENTS OF BEAUTY</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2 mt-1 sm:mt-2">
            <span>FOR YOU</span>
            <span className="inline-flex items-center h-[1.1em] px-1 overflow-hidden align-middle my-auto">
              <span className="w-12 sm:w-20 md:w-24 h-7 sm:h-11 md:h-12 rounded-full overflow-hidden border border-black/15 shadow-sm inline-block transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/hair-card.jpg"
                  alt="Glow thumbnail"
                  className="w-full h-full object-cover brightness-105"
                />
              </span>
            </span>
            <span>AND</span>
          </div>

          <div className="mt-1 sm:mt-2">
            <span>YOUR GLOW</span>
          </div>
        </motion.div>

        {/* Subtitle Body Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 md:mt-14 max-w-2xl text-base md:text-lg text-neutral-700 leading-relaxed font-normal"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <button
            onClick={() => setReadMoreOpen(!readMoreOpen)}
            className="text-base font-semibold text-black border-b-2 border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
          >
            {readMoreOpen ? 'Show Less' : 'Read More'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
