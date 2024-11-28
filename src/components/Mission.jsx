import {React, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from 'framer-motion';



const Counter = ({ target, duration, isPercentage, isPlus }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const startCounting = () => {
    controls.start({ opacity: 1 });

    const increment = target / (duration * 60); // 60 frames per second
    let currentCount = 0;

    const countInterval = setInterval(() => {
      currentCount += increment;

      if (currentCount >= target) {
        currentCount = target;
        clearInterval(countInterval);
      }

      setCount(Math.floor(currentCount));
    }, 1000 / 60); 
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, target, duration]);

  return (
    <motion.h2
      ref={ref}
      className="text-8xl font-extrabold mb-2 text-primaryDark opacity-0"
      animate={controls}
    >
      {count.toLocaleString()}{isPercentage ? '%' : isPlus ? '+' : 'k'}
    </motion.h2>
  );
};


const Mission = () => {
  return (
    <>
      <main>
        <section className="font-yourFont text-center mt-20 flex flex-col items-center justify-center">
          <h2 className="text-primary text-lg font-medium">OUR MISSION</h2>
          <h1 className="text-5xl font-semibold mb-5 sm:w-[30.5rem] sm:text-center w-[33rem] leading-[60px]">
            We've helped innovative companies.
          </h1>
          <p className="text-gray-400 leading-[25px] w-[22.5rem]">
            Hundreds of all sizes and across all industries have made big
            improvements with us
          </p>
          <div className="flex sm:flex-col sm:gap-10 items-center justify-center mt-10 gap-20 mb-10">
            <div>
              <h1 className="text-8xl font-extrabold mb-2 text-primaryDark">
              <Counter target={24} duration={2} isPercentage={true} />
                      </h1>
              <p className="text-xl">Revenue business</p>
            </div>
            <div>
              <h2
              className="text-8xl font-extrabold mb-2 text-primaryDark">
                      <Counter target={180} duration={2} />
              </h2>
              <p className="text-xl">In annual revenue</p>
            </div>
            <div>
              <h2 className="text-8xl font-extrabold mb-2 text-primaryDark">
              <Counter target={10} duration={2} isPlus={true} />
              </h2>
              <p className="text-xl">Months of runway</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Mission;
