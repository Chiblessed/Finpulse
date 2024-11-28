import React from "react";
import Logo from "../../assets/finpulse logo.png";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <footer className=" font-yourFont flex sm:flex-col md:mx-4 sm:gap-10 items-center md:gap-12 justify-center gap-52 lg:mx-16 lg:gap-52 sm:mx-0 mx-14">
          <img src={Logo} alt="" className=" w-60 " />
          <div className="flex items-center justify-center gap-20 md:gap-6 sm:gap-10 lg:gap-20">
            <div className="flex-col">
              <h2 className="text-primaryDark mb-3 text-xl cursor-pointer">
                Solutions
              </h2>
              <p className="text-gray-400 mb-1 cursor-pointer">
                Small Businesses
              </p>
              <p className="text-gray-400 mb-1 cursor-pointer">Freelancers</p>
              <p className="text-gray-400 mb-1 cursor-pointer">Customer</p>
              <p className="text-gray-400 mb-1 cursor-pointer">Taxes</p>
            </div>
            <div className="flex-col">
              <h2 className="text-primaryDark mb-3 text-xl cursor-pointer">
                Company
              </h2>
              <p className="text-gray-400 mb-1 cursor-pointer">About us</p>
              <p className="text-gray-400 mb-1 cursor-pointer">Career</p>
              <p className="text-gray-400 mb-1 cursor-pointer">Projects</p>
              <p className="text-gray-400 mb-1 cursor-pointer">Contact</p>
            </div>
            <div className="flex-col">
              <h2 className="text-primaryDark mb-3 text-xl cursor-pointer">
                Learn
              </h2>
              <p className="text-gray-400 mb-1 cursor-pointer">Blog</p>
              <p className="text-gray-400 mb-1 cursor-pointer">Ebooks</p>
              <p className="text-gray-400 mb-1 cursor-pointer">Guides</p>
              <p className="text-gray-400 mb-1 cursor-pointer">Templates</p>
            </div>
          </div>
          <div className="flex-col">
            <h2>Follow us on</h2>
            <div className="flex items-center justify-center gap-2 text-xl mt-3 cursor-pointer">
              <BsTwitterX />
              <FaLinkedinIn />
              <FaFacebook />
            </div>
          </div>
        </footer>
        <hr className="w-[70%]  mb-2 mt-5" />
        <p className="text-sm mb-10">
          &copy; Finpulse 2024. All Rights Reserved
        </p>
      </main>
    </>
  );
};

export default Footer;
