import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Plan = () => {
  return (
    <>
      <main>
        <section className="font-yourFont flex flex-col  items-center justify-center mt-10">
          <h1 className="text-center text-primary text-lg font-medium">
            CHOOSE PLAN:
          </h1>
          <div className="flex sm:flex-col items-center justify-center gap-10 mb-10 mt-10">
            <div className="bg-primaryLight w-[30rem] lg:w-[30rem] sm:w-[22rem] md:w-[23rem] md:px-4 sm:px-4 px-10 rounded-2xl hover:shadow-colorz ">
              <h1 className=" pt-10 text-7xl font-semibold mb-20">Plus</h1>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-normal">N5000</h2>
                <FaArrowUp className="relative rotate-[48deg] text-3xl" />
              </div>
            </div>

            <div className="bg-primary w-[30rem] lg:w-[30rem] sm:w-[22rem] md:w-[23rem] md:px-4 sm:px-4 px-10 rounded-2xl hover:shadow-colorTop">
              <h1 className=" pt-10 text-7xl font-semibold mb-20 text-primaryLight">
                Premium
              </h1>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-normal text-primaryLight">
                  N15000
                </h2>
                <FaArrowUp className="relative rotate-[48deg] text-3xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Plan;
