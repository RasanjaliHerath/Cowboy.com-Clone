import React from "react";
import { motion } from "framer-motion";

const TakeQuizModel = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 flex flex-col items-center justify-center text-center">
      <p className="text-lg text-gray-700 mb-4">
        Which Cowboy is right for you?
      </p>
      <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        Meet your Match
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        Not sure which Cowboy to choose? Take our quiz to find your best fit.
      </p>
     <button className="
  px-8 py-4 
  bg-black text-white 
  text-xs font-semibold uppercase 
  cursor-pointer 
  transition-all duration-300 ease-in-out 
  no-underline 
  inline-block text-center 
  rounded-full 
  border border-black 
  mr-2
  hover:bg-white hover:text-black hover:border-[#fcfcfc]
">
  Take the quiz
</button>

    </section>
  );
};

export default TakeQuizModel;