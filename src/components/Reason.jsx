import { React, useRef } from "react";
import { AiFillBank } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import Graph from "../../assets/graph.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Reason = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end center", "1.23 1"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const otherX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const otherY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <>
      <main>
        <section className="font-yourFont mb-10">
          <h1 className="text-center text-primary mt-24">Why us?</h1>
          <h2 className="text-center text-5xl sm:text-4xl font-black mt-3">
            Why they perfer Finpulse?
          </h2>
          <div className="grid grid-cols-2 place-items-center px-44 md:px-10 sm:grid-cols-1 sm:px-10 sm:place-items-center gap-1 mt-20">
            <motion.div
              ref={targetRef}
              style={{
                opacity: opacity,
                x,
              }}
              className="sm:pl-3 pl-10  bg-primaryLight w-[30rem] lg:w-[35rem] lg:py-10 md:w-[20rem] sm:w-[22.5rem] py-2 rounded-xl "
            >
              <h1 className="text-8xl font-extrabold mb-10 text-primary pt-10">
                3k+
              </h1>
              <h2 className="text-3xl sm:pr-0 sm:text-2xl sm:pb-3 lg:pr-32 pr-10">
                Businesses already running on Finpulse
              </h2>
            </motion.div>

            <motion.div
              ref={targetRef}
              style={{
                opacity: opacity,
                x: otherX,
              }}
              className=" sm:pl-0 pl-10 bg-primaryLight w-[32rem] lg:w-[35rem] md:w-[23rem] sm:w-[22.5rem] py-3 rounded-xl"
            >
              <h1 className="text-3xl mb-5 pr-5 leading-[40px] sm:px-3 sm:pb-3 font-medium pt-10">
                Instant withdraw from your funds at any time.
              </h1>
              <div className="md:justify-between flex items-center justify-center gap-3 lg:pr-40 md:pr-0 pr-32 sm:pr-120">
                <img
                  src={Logo}
                  alt=""
                  className="w-40 rounded-full relative left-10 md:left-2 sm:left-10"
                />
                <BiTransfer className="text-6xl mb-3 font-thin text-gray-400 " />
                <AiFillBank className="text-6xl mb-3 text-primaryDark  " />
              </div>
            </motion.div>

            <motion.div
              ref={targetRef}
              style={{
                opacity: opacity,
                y: otherY,
              }}
              className=" sm:flex-col sm:w-[22.5rem] lg:px-14 lg:w-[75rem] md:w-[45rem] md:px-4 flex items-center justify-center gap-10 px-14 sm:px-0 sm:pt-10 mt-5 pl-10 md:pl-4 sm:pl-5 w-[63rem] bg-primaryLight py-5 rounded-xl col-span-2 sm:col-span-1"
            >
              <div>
                <h2 className="text-4xl  font-bold mb-3">
                  No assets volatility
                </h2>
                <p className="text-gray-400 pr-36 lg:pr-44 md:pr-10 sm:pr-0">
                  Generates returns on your cash reserves without making any
                  investments.
                </p>
              </div>
              <div>
                <img src={Graph} alt="" className="rounded-xl" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Reason;
