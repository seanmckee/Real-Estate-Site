import React from "react";
import House from "../assets/Services/house.png";
import Apartment from "../assets/Services/apartment.png";
import Office from "../assets/Services/office.png";
import Parking from "../assets/Services/parking.png";
import Warehouse from "../assets/Services/warehouse.png";

const Services = () => {
  return (
    <div className="bg-slate-50 text-center">
      <p className="bg-blue-100 m-auto text-center p-2 w-[150px] text-sm text-blue-500 font-bold rounded-3xl mb-20">
        SERVICES
      </p>
      <h1 className="text-3xl font-bold text-[#4D5E80] m-20">
        Services For Maximum Efficiency
      </h1>
      <p className="text-[#7D8FB3] w-[50%] m-auto mb-10">
        We have developed a unique space where you can work and create. We
        thought of everything to the smallest detail. You will be able to
        conduct your business, conduct meetings, meetings
      </p>

      <ul className="flex justify-center pb-20">
        <li>
          <div className="bg-white p-8 rounded-full drop-shadow-md m-7">
            <img src={House} alt="House" className="" />
          </div>
          <p className="font-bold text-[#4D5E80]">House</p>
        </li>

        <li>
          <div className="bg-white p-8 rounded-full drop-shadow-md m-7">
            <img src={Apartment} alt="House" className="" />
          </div>
          <p className="font-bold text-[#4D5E80]">Apartment</p>
        </li>

        <li>
          <div className="bg-white p-8 rounded-full drop-shadow-md m-7">
            <img src={Office} alt="House" className="" />
          </div>
          <p className="font-bold text-[#4D5E80]">Office</p>
        </li>

        <li>
          <div className="bg-white p-8 rounded-full drop-shadow-md m-7">
            <img src={Warehouse} alt="House" className="" />
          </div>
          <p className="font-bold text-[#4D5E80]">Warehouse</p>
        </li>

        <li>
          <div className="bg-white px-9 py-7 rounded-full drop-shadow-md m-7">
            <img src={Parking} alt="House" className="" />
          </div>
          <p className="font-bold text-[#4D5E80]">Parking</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
