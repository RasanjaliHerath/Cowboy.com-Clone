import React from "react";
import { motion } from "framer-motion";

const Designed = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center text-white px-6 py-20"
      style={{
        backgroundImage: `url(https://cdn.shopify.com/s/files/1/1772/1703/files/assembled-in-france_portrait.jpg?v=1739809088&width=768)`
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content with animations */}
      <motion.div
        className="relative z-10 max-w-xl text-left pl-4 md:pl-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-lg font-medium mb-2 text-[#E5E5E5]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Designed in Belgium
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Now assembled in France
        </motion.h1>
<motion.button
  className="px-7 py-3 bg-white text-[#222] text-xs font-semibold uppercase rounded-full border border-white 
    hover:bg-[#222] hover:text-white hover:border-[#222] transition-all duration-300"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  Learn more
</motion.button>

      </motion.div>
    </section>
  );
};

export default Designed;
