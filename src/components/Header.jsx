import React, { useState } from "react";
import Background from "../assets/Header/Background.png";
import { RxTextAlignJustify } from "react-icons/rx";
import { FaLocationArrow, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="flex flex-col w-full relative">
      {/* Background Image */}
      <img
        className="w-screen z-[-1] bg-slate-50"
        src={Background}
        alt="background image"
      />

      {/* NavBar */}
      <div className="text-slate-100 absolute flex items-center text-lg font-bold top-0 w-screen h-[80px] justify-between mb-[200px]">
        <div className="flex items-center z-20">
          {!nav ? (
            <FaBars
              onClick={handleClick}
              size={25}
              className="ml-10 mr-10 md:hidden"
            />
          ) : (
            <FaTimes
              onClick={handleClick}
              size={25}
              className="ml-10 mr-10 md:hidden"
            />
          )}

          <h1 className="hidden md:block text-2xl mb-[2px] md:ml-9">
            Real Estate
          </h1>
        </div>

        <ul className="md:flex hidden mr-10">
          <li className="p-4">About</li>
          <li className="p-4">Services</li>
          <li className="p-4">Deals</li>
          <li className="p-4">Reviews</li>
          {/* <button className="px-4 ml-10 bg-orange-500 border-2 rounded-2xl hover:bg-slate-100 hover:border-orange-500 hover:text-orange-500">
                Get In Touch
              </button> */}
          <button className="bg-orange-500 rounded-full px-5">Contact</button>
        </ul>
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#4D5E80] flex flex-col justify-center items-center z-10 text-slate-50 font-semibold"
        }
      >
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Services</li>
        <li className="py-6 text-4xl">Deals</li>
        <li className="py-6 text-4xl">Reviews</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* middle section */}
      <div className="flex w-screen items-center justify-center flex-col absolute top-[25%] lg-[40%]">
        <p className="hidden sm:block bg-orange-500 p-2 text-center w-[150px] text-sm text-slate-50 font-bold rounded-3xl mb-5 xs:text-sm">
          REAL ESTATE
        </p>
        <h1 className="text-slate-50 w-[50%] text-center sm:text-3xl font-bold md:font-normal md:text-6xl text-xl">
          Invest in Real Estate with Our Company
        </h1>
        <div className="flex text-slate-50 flex-col md:flex-row justify-center m-auto md:mt-5 mt-2 ">
          <div className="flex m-auto text-xs md:mx-5">
            <FaLocationArrow className="hidden md:block pr-2" size={25} />
            <p>225 S 1st St Brooklyn, NY 11211</p>
          </div>
          <div className="flex m-auto text-xs md:mx-5">
            <FaPhoneAlt className="hidden md:block pr-2" size={25} />
            <p> (111)-111-1111</p>
          </div>
          <div className="flex m-auto text-xs md:mx-5">
            <MdEmail className="hidden md:block pr-2" size={25} />
            <p> hotel@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
