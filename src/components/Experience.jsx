import { React, useRef } from "react";
import { BiTransfer } from "react-icons/bi";
import { AiFillBank } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
  //Animation
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "1.23 1"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityY = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <>
      <motion.main
        ref={targetRef}
        style={{
          scale: scaleY,
          opacity: opacityY,
        }}
      >
        <section className="bg-primaryDark   sm:mx-0 text-white mx-[4rem] mb-5 px-10 font-yourFont rounded-xl mt-14">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary text-lg pt-12"
          >
            Future Payment
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="flex items-center justify-between gap-20 lg:gap-20  md:gap-12 sm:flex-col sm:gap-5 mb-10"
          >
            <h2 className="text-[35px] lg:text-[45px] leading-[54px] text-primaryLight">
              Experience that grows with your scales.
            </h2>
            <p className="pl-[12rem] lg:pl-[5rem] lg:pr-14 md:pr-0 md:pl-0 sm:pl-0 sm:pr-0 pr-10 text-lg text-gray-300">
              Design a financial operating system that works for your business
              and streamlined cash flow management.
            </p>
          </motion.div>
          <div className="flex items-center justify-center gap-32 lg:gap-36 md:gap-10 sm:flex-col sm:gap-10">
            <div className="flex flex-col mb-10">
              <BiTransfer className="text-3xl mb-3 " />
              <h2 className="text-2xl mb-4 font-bold text-primaryLight">
                Free Transfer
              </h2>
              <p className="text-gray-400">
                Create a financial experience and automate repeat purchases by
                scheduling recurring payments.
              </p>
            </div>

            <div className="mb-10">
              <AiFillBank className="text-3xl mb-3 " />
              <h2 className="text-2xl mb-4 font-bold text-primaryLight">
                Multiple account
              </h2>
              <p className="text-gray-400">
                Run your operations with cash from your account and generate
                yield on funds stored in your account
              </p>
            </div>

            <div className="mb-10">
              <MdOutlineSecurity className="text-3xl mb-3 " />
              <h2 className="text-2xl mb-4 font-bold text-primaryLight">
                Unmatched security
              </h2>
              <p className="text-gray-400">
                Securely manage your finances with organization-wid MFA,
                card-locking and account-level controls.
              </p>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Experience;
