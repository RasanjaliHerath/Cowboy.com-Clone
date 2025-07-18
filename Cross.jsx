import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Classic = () => {
  return (
    <div 
      className="font-sans"
      style={{
        background: 'linear-gradient(144deg,#343c3a 5%,#78807d 70%,#cbd1cf)'
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
              className="text-[2.2rem] font-normal text-white mb-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Cross
            </motion.h2>

            <motion.h1
              className="text-[5rem] font-medium text-white leading-tight mb-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             Built for<br></br> adventure
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

          {/* RIGHT SIDE */}
      <motion.div 
  className="flex-1 flex justify-center relative w-full md:w-1/2"  // half screen width on medium+
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.9,
    ease: [0.4, 0, 0.2, 1]
  }}
  style={{ minWidth: '50vw', minHeight: '80vh' }}  // force bigger container size
>
  <img 
    className="block pointer-events-none"
    decoding="auto"
    loading="lazy"
    fetchPriority="auto"
    alt="Cross Moss"
    src="https://cdn.shopify.com/s/files/1/1772/1703/files/cross-moss_749bed30-4208-491b-8e13-18b269f0fb55.png?v=1721720745"
    style={{ width: '100%', height: 'none%', maxWidth: 'none' }}  // remove max-width limit
  />
</motion.div>




        </div>
      </div>
    </div>
  );
};

export default Classic;
