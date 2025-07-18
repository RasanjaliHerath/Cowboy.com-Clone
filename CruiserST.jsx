import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  viewport: { once: true, amount: 0.3 },
};

const CruiserST = () => {
  return (
    <div className="font-sans bg-[linear-gradient(180deg,#D8E7FB,#FFF8FB)]">
      <div className="w-screen min-h-[90vh] flex flex-col md:flex-row">

        {/* IMAGE LEFT SIDE */}
        <motion.div 
          className="w-full md:w-1/2"
          {...fadeUp}
        >
          <img 
            src="https://cdn.shopify.com/s/files/1/1772/1703/files/homepage-cruiser-st-breeze-highlight.png?v=1742193699&width=768"
            alt="Cruiser ST Breeze Highlight"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* TEXT RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12">
          
          <motion.h2 
            className="text-[2.2rem] font-normal text-gray-500 mb-7"
            {...fadeUp}
          >
            Cruiser ST
          </motion.h2>

          <motion.h1 
            className="text-[5rem] font-medium text-black leading-tight mb-7"
            {...fadeUp}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            Rise and share
          </motion.h1>

          <motion.div 
            className="flex flex-wrap items-center gap-2 mb-7"
            {...fadeUp}
          >
            <a 
              href="#" 
              className="px-7 py-3 bg-black text-white text-xs font-semibold uppercase rounded-full border border-black 
                hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Explore
            </a>

            <p className="text-lg font-normal text-gray-600 mr-4">From €2,999</p>
            <a 
              href="#" 
              className="text-sm font-medium text-black inline-flex items-center group"
            >
              Book a free test ride 
              <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all duration-300" />
            </a>
          </motion.div>

          <motion.div 
            className="flex items-start"
            {...fadeUp}
          >
            <div className="text-center px-5">
              <span className="text-sm text-gray-500 block mb-1">Find My Bike</span>
              <span className="text-base font-semibold text-black">Theft Detection</span>
            </div>
            <div className="w-px h-10 bg-gray-300 mx-2"></div>
            <div className="text-center px-5">
              <span className="text-sm text-gray-500 block mb-1">Custom AdaptivePower™</span>
              <span className="text-base font-semibold text-black">Automatic Assistance</span>
            </div>
            <div className="w-px h-10 bg-gray-300 mx-2"></div>
            <div className="text-center px-5">
              <span className="text-sm text-gray-500 block mb-1">Servicing Nearby</span>
              <span className="text-base font-semibold text-black">200+ Stores</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CruiserST;
