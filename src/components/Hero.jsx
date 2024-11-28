import { React, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Hero1 from "../../assets/hero1.jpg";
import Hero2 from "../../assets/hero2.jpg";
import Hero3 from "../../assets/hero3.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const images = [Hero1, Hero2, Hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
 
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <main className="flex items-center justify-center mb-5">
      <section className="flex items-center justify-center font-yourFont lg:gap-36 gap-20 px-10 md:gap-13  sm:flex-col">
        {/*text section*/}
        <div>
          <div className="px-10 sm:px-20 sm:pt-10 md:px-2 lg:px-10">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
              className="text-6xl leading-[64px] mb-8"
            >
              <span className="font-bold text-[65px] text-primaryDark">
                Get paid early{" "}
              </span>
              save automatically all your pay.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="text-gray-400 mr-[8rem] mb-10 sm:mr-0"
            >
              Supports small businesses with simple invoicing, powerful
              intergrations, and cash flow management tools.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="flex"
            >
              <input
                type="email"
                placeholder="Your business email"
                className="sm:w-[70%] px-2 py-2 w-1/2 rounded-lg focus:outline-none border-2 border-bg-gray-300 placeholder:text-lg placeholder:text-blue-gray-400 border-solid"
              />
              <button className="flex items-center justify-center gap-3  w-[10rem] h-12 hover:scale-105 z-40 text-white py-2 text-lg px-2 bg-primaryDark rounded-lg ">
                Get Started{" "}
                <FaArrowUp className="relative rotate-[48deg] -top-1 font-thin " />
              </button>
            </motion.div>
          </div>
        </div>
        {/*image section*/}
        <div className="relative w-full h-[35rem] overflow-hidden sm:h-[25rem] sm:w-[70%]">
        <motion.div className="absolute inset-0 transition-transform duration-500">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: currentIndex === index ? 1 : 0, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: currentIndex === index ? 0 : 0.5, 
          }}
          className={`absolute w-full h-full object-cover rounded-full transition-opacity duration-500`}
        />
      ))}
    </motion.div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === index ? "bg-primaryDark" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
