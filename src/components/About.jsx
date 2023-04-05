import React from "react";

const About = () => {
  return (
    <div name="About" className="text-center bg-slate-50 pt-20">
      <p className="bg-green-100 m-auto p-2 w-[150px] text-sm text-green-500 font-bold rounded-3xl mb-20">
        OUR STORY
      </p>
      <h1 className="text-3xl font-bold text-[#4D5E80] m-20">
        We Will Find the Best Option
      </h1>
      <p className="text-[#7D8FB3] w-[50%] m-auto mb-20">
        Real estate is "property consisting of land and the buildings on it,
        along with its natural resources such as crops, minerals or water,
        immovable property of this nature; an interest vested in this (also) an
        item of real property, (more generally) buildings or housing in general.
      </p>

      <ul className="flex flex-col md:flex-row items-center md:justify-center pb-20">
        <li className="bg-white py-[50px] px-20 rounded-md mx-2 w-[290px] drop-shadow-md my-2">
          <h2 className="font-bold text-lg text-[#4D5E80]">15 Years</h2>
          <p className="text-[#ADB8CC]">In Business</p>
        </li>
        <li className="bg-white py-[50px] px-20 rounded-md mx-2 w-[290px] drop-shadow-md my-2">
          <h2 className="font-bold text-lg text-[#4D5E80]">$1 Billion</h2>
          <p className="text-[#ADB8CC]">Property Brokered</p>
        </li>
        <li className="bg-white py-[50px] px-20 rounded-md mx-2 w-[290px] drop-shadow-md my-2">
          <h2 className="font-bold text-lg text-[#4D5E80]">10,000</h2>
          <p className="text-[#ADB8CC]">Transactions</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
