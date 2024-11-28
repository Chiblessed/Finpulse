import { React, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Steps = () => {
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
        <section className="font-yourFont  bg-primaryDark sm:mx-0 sm:px-4 mx-14 px-10 rounded-xl pb-10 mb-10 mt-32">
          <h2 className="pt-10 text-primary text-lg font-thin uppercase">
            Steps
          </h2>
          <h1 className="text-5xl font-extrabold text-primaryLight md:pr-0 sm:pr-0 pr-[25rem] leading-[55px] mb-5">
            Maximize your returns with a Reserve account that generates.
          </h1>
          <div className="flex items-center justify-center gap-10 mt-10 sm:flex-col">
            <div className="bg-primaryDark px-6 rounded-xl shadow-colorTop">
              <h2 className="text-8xl font-extrabold text-primaryLight -z-30">
                1
              </h2>
              <div className="shadow-color rounded relative -top-6  bg-primaryDark">
                <h2 className="text-xl text-primaryLight pt-5 pb-3">
                  Open your account
                </h2>
                <p className="text-gray-300 mb-6">
                  Signup to finpulse and set up your account from the dashboard.
                </p>
              </div>
            </div>
            <div className="bg-primaryDark px-6 rounded-xl shadow-colorTop">
              <h2 className="text-8xl font-extrabold text-primaryLight -z-30">
                2
              </h2>
              <div className="shadow-color rounded relative -top-6  bg-primaryDark">
                <h2 className="text-xl text-primaryLight pt-5 pb-3">
                  Transfer your money
                </h2>
                <p className="text-gray-300 mb-6">
                  Move money from one account to another and start earning up.
                </p>
              </div>
            </div>
            <div className="bg-primaryDark px-6 rounded-xl shadow-colorTop">
              <h2 className="text-8xl font-extrabold text-primaryLight -z-30">
                3
              </h2>
              <div className="shadow-color rounded relative -top-6  bg-primaryDark">
                <h2 className="text-xl text-primaryLight pt-5 pb-3">
                  Watch your balance grow
                </h2>
                <p className="text-gray-300 mb-6">
                  {" "}
                  Accessed instantly and remain. insulated from market
                  volatility
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Steps;
