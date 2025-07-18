import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CrossST = () => {
  return (
    <div 
      className="font-sans bg-[linear-gradient(.514turn,#695e5c_1.8%,#c2bcbb_51.51%,#b3aaa4_99.61%)] lg:bg-[linear-gradient(216deg,#645957_7.62%,#aea09e_45.4%,#edebeb_98.67%)]"
    >
      <div className="w-screen min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-5">

        {/* LEFT SIDE - IMAGE */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <img 
            className="block pointer-events-none"
            decoding="auto"
            loading="lazy"
            fetchPriority="auto"
            alt="Cross Moss"
            src="https://cdn.shopify.com/s/files/1/1772/1703/files/homepage-cross-st-mushroom-highlight.png?v=1742192621"
            style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
          />
        </motion.div>

        {/* RIGHT SIDE - CONTENT */}
        <motion.div 
          className="w-full md:w-1/2 max-w-[600px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <motion.h2
            className="text-[2.2rem] font-normal text-white mb-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Cross ST
          </motion.h2>

          <motion.h1
            className="text-[5rem] font-medium text-white leading-tight mb-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           Shockingly<br></br> smooth
          </motion.h1>

          <motion.div 
            className="flex flex-wrap items-center gap-2 mb-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a 
              href="#" 
              className="px-7 py-3 bg-white text-black text-xs font-semibold uppercase rounded-full border border-white 
                hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              Explore
            </a>

            <p className="text-lg font-normal text-[#E5E5E5] mr-4">From €3,999</p>
            <a 
              href="#" 
              className="text-sm font-medium text-white inline-flex items-center group"
            >
              Book a free test ride 
              <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all duration-300" />
            </a>
          </motion.div>

          <motion.div 
            className="flex items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center px-5">
              <span className="text-sm text-[#E5E5E5] block mb-1">Suspension</span>
              <span className="text-base font-semibold text-white">Fork & seatpost</span>
            </div>
            <div className="w-px h-10 bg-gray-300 mx-2"></div>
            <div className="text-center px-5">
              <span className="text-sm text-[#E5E5E5] block mb-1">Custom AdaptivePower™</span>
              <span className="text-base font-semibold text-white">Automatic Assistance</span>
            </div>
            <div className="w-px h-10 bg-gray-300 mx-2"></div>
            <div className="text-center px-5">
              <span className="text-sm text-[#E5E5E5] block mb-1">All-new battery</span>
              <span className="text-base font-semibold text-white">60-120 km range</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CrossST;
