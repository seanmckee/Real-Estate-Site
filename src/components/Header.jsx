import React from "react";
import Background from "../assets/Header/Background.png";
import { RxTextAlignJustify } from "react-icons/rx";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex flex-col w-screen relative">
      {/* Background Image */}
      <img
        className="w-screen z-[-1] bg-slate-50"
        src={Background}
        alt="background image"
      />

      {/* NavBar */}
      <div className="text-slate-100 absolute flex items-center text-lg font-bold top-0 w-screen h-[80px] justify-between mb-[200px]">
        <div className="flex items-center">
          <RxTextAlignJustify size={35} className="ml-10 mr-10" />
          <h1 className="text-2xl">Real Estate</h1>
        </div>

        <ul className="flex mr-10">
          <li className="p-4">About</li>
          <li className="p-4">Services</li>
          <li className="p-4">Review</li>
          <li className="p-4">Contacts</li>
          {/* <button className="px-4 ml-10 bg-orange-500 border-2 rounded-2xl hover:bg-slate-100 hover:border-orange-500 hover:text-orange-500">
                Get In Touch
              </button> */}
          <button className="bg-orange-500">Get In Touch</button>
        </ul>
      </div>

      {/* middle section */}
      <div className="flex w-screen items-center justify-center flex-col absolute top-[40%]">
        <p className="bg-orange-500 p-2 text-center w-[150px] text-sm text-slate-50 font-bold rounded-3xl mb-5">
          REAL ESTATE
        </p>
        <h1 className="text-slate-50 w-[50%] text-center text-6xl">
          Invest in Real Estate with Our Company
        </h1>
        <div className="flex text-slate-50">
          <div className="flex m-3">
            <FaLocationArrow className="pr-2" size={25} />
            <p>225 S 1st St Brooklyn, NY 11211</p>
          </div>
          <div className="flex m-3">
            <FaPhoneAlt className="pr-2" size={25} />
            <p> (111)-111-1111</p>
          </div>
          <div className="flex m-3">
            <MdEmail className="pr-2" size={25} />
            <p> hotel@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
