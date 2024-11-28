import React, { useState } from "react";
import Logo from "../../assets/finpulse logo.png";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-14 sm:px-2 sm:gap-20 h-24 font-yourFont">
      <div className="flex items-center justify-between  w-full ">
        <img
          src={Logo}
          alt="Logo"
          className="w-[150px] sm:w-[200px] sm:relative sm:-left-5"
        />

        <div className="hidden md:flex items-center gap-10 text-lg">
          <ul className="flex gap-10">
            <li className="hover:text-primary cursor-pointer hover:text-xl">
              Products
            </li>
            <li className="hover:text-primary cursor-pointer hover:text-xl">
              Customers
            </li>
            <li className="hover:text-primary cursor-pointer hover:text-xl">
              Pricing
            </li>
            <li className="hover:text-primary cursor-pointer hover:text-xl">
              Learn
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="border border-primaryDark hover:text-white hover:bg-primaryDark px-5 h-10 font-normal rounded-lg mr-3">
            Login
          </button>
          <button className="hover:border hover:border-primaryDark px-5 hover:bg-transparent hover:text-black font-medium h-10 rounded-lg mr-3 text-white bg-primaryDark">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? (
              <IoMdClose className="sm:text-3xl" />
            ) : (
              <FiMenu className="sm:text-3xl " />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 right-0 bg-primaryLight z-50 flex flex-col rounded-b-2xl shadow-colorz items-center py-4 md:hidden">
          <ul className="flex flex-col gap-10 text-center text-xl">
            <li className="hover:text-primary cursor-pointer">Products</li>
            <li className="hover:text-primary cursor-pointer">Customers</li>
            <li className="hover:text-primary cursor-pointer">Pricing</li>
            <li className="hover:text-primary cursor-pointer">Learn</li>
          </ul>
          <div className="flex flex-col gap-5 mt-4 mb-5">
            <button className="border border-primaryDark hover:text-white hover:bg-primaryDark px-5 h-10 font-normal rounded-lg">
              Login
            </button>
            <button className="hover:border hover:border-primaryDark px-5 hover:bg-transparent hover:text-black font-medium h-10 rounded-lg text-white bg-primaryDark">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
