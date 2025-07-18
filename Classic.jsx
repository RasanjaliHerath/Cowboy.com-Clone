import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Classic = () => {
  return (
    <div 
      className="font-sans"
      style={{
        backgroundImage: 'linear-gradient(225deg, #e7eae7 30.32%, #f6f0e9 100.3%)'
      }}
    >
      <div className="w-screen min-h-[90vh] flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full px-6 md:px-12">

          {/* LEFT SIDE */}
          <motion.div 
            className="max-w-[1200px] w-full md:w-1/2 ml-0 md:ml-[5%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.h2
              className="text-[2.2rem] font-normal text-gray-500 mb-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Classic
            </motion.h2>

            <motion.h1
              className="text-[5rem] font-medium text-black leading-tight mb-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lean into it
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
                className="px-7 py-3 bg-black text-white text-xs font-semibold uppercase rounded-full border border-black 
                  hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Explore
              </a>

              <p className="text-lg font-normal text-gray-600 mr-4">From €2,699</p>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div 
            className="flex-1 flex justify-center relative w-full md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <img 
              src="https://cdn.shopify.com/s/files/1/1772/1703/files/homepage-classic-black-highlight.png?v=1742192619&width=768"
              alt="Classic Black Highlight"
              className="w-4/5 min-h-[90vh] object-cover"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Classic;
