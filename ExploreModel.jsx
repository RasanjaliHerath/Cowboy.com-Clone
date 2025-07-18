import React from "react";
import Logo from "../../assets/Images/Logo.jpg";
import { motion } from "framer-motion";

const ExploreModel = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.shopify.com/s/files/1/1772/1703/files/bcorp--hero_landscape.jpg?v=1736765021&width=1366')`
      }}
    >
      {/* Optional dark overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Certified B Corporation"
            className="h-32 w-auto object-contain"
          />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
          World first
        </h2>

        <p className="text-lg text-gray-100 mb-10">
          We’re the first e-bike producer to achieve B Corp status, thanks in
          part to initiatives like Circular, our carefully refurbished range
          that ensures all our bikes find a happy home.
        </p>

        <button className="nav-button">
          Learn more
        </button>
      </motion.div>
    </section>
  );
};

export default ExploreModel;
