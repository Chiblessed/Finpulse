import { React, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const Trail = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "1.23 1"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityY = useTransform(scrollYProgress, [0, 1], [0.15, 1]);

  return (
    <>
      <motion.main
        ref={targetRef}
        style={{
          scale: scaleY,
          opacity: opacityY,
        }}
      >
        <section className="font-yourFont mt-20 sm:flex-col lg:px-14 bg-primaryDark flex items-center justify-around md:px-4  mx-14 sm:px-4 sm:mx-0 pb-14 px-20 gap-10 rounded-xl mb-10">
          <div className="flex flex-col md:w-[50rem] sm:w-[20rem] w-[50rem] pt-10">
            <h2 className="pt-2 text-primary text-lg font-thin uppercase">
              TRY IT NOW
            </h2>
            <h1 className="text-6xl pr-5 lg:pr-52 md:pr-0  sm:pr-0 text-primaryLight leading-[64px] mt-5 mb-5">
              Ready to level up your payment process?
            </h1>
            <p className="text-gray-400 lg:pr-[18rem] md:pr-0 pr-[15rem] sm:pr-0">
              Supports small businesses with simple invoicing, powerful
              intergrations, and cash flow management tools.
            </p>
          </div>
          <div className="flex">
            <button className="w-[170px] text-primaryLight bg-primary h-14 mr-5 rounded-xl">
              Get Started Now
            </button>
            <button className="w-[170px] border-[1px] border-solid text-primaryLight border-primary h-14 rounded-xl flex items-center justify-center gap-2">
              Learn More
              <FaArrowUp className="relative rotate-[48deg]" />
            </button>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Trail;
