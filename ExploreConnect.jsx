import React from "react";
import { motion } from "framer-motion";

const IMAGE_HEIGHT = "100vh";
const IMAGE_WIDTH = 1050;

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ExploreConnect = () => {
  return (
    <section className="bg-gray-100 py-20 px-0 flex flex-col items-center justify-center text-center">
      <div className="flex items-start w-full overflow-x-auto">
        {/* 1st image (left corner) */}
        <motion.div
          className="overflow-hidden rounded-md lg:rounded-2xl mt-9"
          style={{ width: IMAGE_WIDTH / 2, height: IMAGE_HEIGHT, marginTop: "200px" }}
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/1772/1703/files/app-2015--highlight-1.png?v=1747165635"
            alt=""
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              objectFit: "cover",
              objectPosition: "right",
            }}
          />
        </motion.div>

        {/* 2nd image */}
        <motion.img
          className="rounded-md lg:rounded-2xl mt-0"
          src="https://cdn.shopify.com/s/files/1/1772/1703/files/app-2015--highlight-2.png?v=1747165635"
          alt=""
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
            objectFit: "contain",
            marginTop: "100px",
          }}
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* 3rd image */}
        <motion.img
          className="rounded-md lg:rounded-2xl mt-3"
          src="https://cdn.shopify.com/s/files/1/1772/1703/files/app-2015--highlight-3.png?v=1747165696"
          alt=""
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
            objectFit: "contain",
            marginTop: "300px",
          }}
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* 4th image */}
        <motion.img
          className="rounded-md lg:rounded-2xl mt-0"
          src="https://cdn.shopify.com/s/files/1/1772/1703/files/app-2015--highlight-4.png?v=1747165634"
          alt=""
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
            objectFit: "contain",
            marginTop: "100px",
          }}
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* 5th image (right corner) */}
        <motion.div
          className="overflow-hidden rounded-md lg:rounded-2xl ml-auto mt-6"
          style={{ width: IMAGE_WIDTH / 2, height: IMAGE_HEIGHT, marginTop: "200px" }}
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/1772/1703/files/app-2015--highlight-5.png?v=1747165634"
            alt=""
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              objectFit: "cover",
              objectPosition: "left",
            }}
          />
        </motion.div>
      </div>

      {/* Rest of your content */}
      <div className="mt-10" />
      <motion.div
        className="mb-8"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-black text-white rounded-full p-4 inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.2L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-6"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        More than an electric bike
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 max-w-2xl mb-10"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        The Cowboy app is your daily companion on the road. Enjoy turn-by-turn
        Google Maps navigation, rest easy with Find My Bike and compete on
        leaderboards. Take Cowboy Connect to for the ultimate connected e-bike
        experience including Theft Alerts, Crash Detection and much more.
      </motion.p>

      <motion.a
        href="#"
        className="px-7 py-3 bg-black text-white text-xs font-semibold uppercase rounded-full border border-black 
                  hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Explore Connect
      </motion.a>
    </section>
  );
};

export default ExploreConnect;
