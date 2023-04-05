import React from "react";
import pic1 from "../assets/Review/pic1.png";
import pic2 from "../assets/Review/pic2.png";
import pic3 from "../assets/Review/pic3.png";

const Review = () => {
  return (
    <div className="bg-slate-50 text-center">
      <p className="bg-green-100 m-auto text-center p-2 w-[150px] text-sm text-green-500 font-bold rounded-3xl mb-20">
        REVIEWS
      </p>
      <h1 className="text-3xl font-bold text-[#4D5E80] m-20">
        Services for Maximum Efficiency
      </h1>
      <p className="text-[#7D8FB3] w-[50%] m-auto mb-10">
        We have developed a unique space where you can work and create. We
        thought of everything to the smallest detail. You will be able to
        conduct your business, conduct meetings, meetings.
      </p>

      <div className="flex flex-col lg:flex-row items-center lg:justify-center pb-20">
        <div>
          <div className="bg-white p-8 rounded-lg text-sm text-left w-[350px] mb-3 font-semibold text-[#7D8FB3] m-5 drop-shadow-md">
            <p>
              Thank you very much for the house found. This is an ideal option
              for our family at the location and price. The company employs real
              professionals who will always
            </p>
          </div>
          <div className="flex text-left">
            <img src={pic1} alt="" className="rounded-full mr-2 ml-8" />
            <div>
              <p className="font-bold text-sm text-[#7D8FB3]">
                Herbert Lindsey
              </p>
              <p className="text-[#ADB8CC] text-xs">New York, USA</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-8 rounded-lg text-sm text-left w-[350px] mb-3 font-semibold text-[#7D8FB3] m-5 drop-shadow-md">
            <p>
              A gentleman from New York discovered what he calls an “oversight”
              on the part of 99.9% of all marketers that allows him to get
              otherwise paid-for advertising at Google as well as all other
              search engines.
            </p>
          </div>
          <div className="flex text-left">
            <img src={pic2} alt="" className="rounded-full mr-2 ml-8" />
            <div>
              <p className="font-bold text-sm text-[#7D8FB3]">Noah Russell</p>
              <p className="text-[#ADB8CC] text-xs">New York, USA</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-8 rounded-lg text-sm text-left w-[350px] mb-3 font-semibold text-[#7D8FB3] m-5 drop-shadow-md">
            <p>
              For many of us, our very first experience of learning about the
              celestial bodies begins when we saw our first full moon in the
              sky. It is truly a magnificent view even
            </p>
          </div>
          <div className="flex text-left">
            <img src={pic3} alt="" className="rounded-full mr-2 ml-8" />
            <div>
              <p className="font-bold text-sm text-[#7D8FB3]">
                Nellie Griffith
              </p>
              <p className="text-[#ADB8CC] text-xs">New York, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
