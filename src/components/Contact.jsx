import React from "react";

const Contact = () => {
  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <div className="text-center bg-slate-50">
      <p className="bg-blue-100 m-auto text-center p-2 w-[150px] text-sm text-blue-500 font-bold rounded-3xl mb-20">
        CONTACT
      </p>
      <h1 className="text-3xl font-bold text-[#4D5E80] m-20">
        Get In Touch Now
      </h1>
      <p className="text-[#7D8FB3] w-[50%] m-auto mb-10">
        We have developed a unique space where you can work and create. We
        thought of everything to the smallest detail. You will be able to
        conduct your business, conduct meetings, meetings
      </p>

      <form action="" className="">
        <div className=" mx-auto grid lg:grid-cols-2 w-[50%] gap-8 mb-5">
          <input
            type="text"
            className="rounded-full h-[50px] drop-shadow-md !outline-none lg:ml-20 pl-8"
            placeholder="First Name"
          />
          <input
            type="text"
            className="rounded-full h-[50px] drop-shadow-md !outline-none lg:mr-20 pl-8"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="rounded-full h-[50px] drop-shadow-md !outline-none lg:ml-20 pl-8"
            placeholder="Email"
          />
          <input
            type="text"
            className=" rounded-full h-[50px] drop-shadow-md !outline-none lg:mr-20 pl-8"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className=" rounded-full h-[50px] drop-shadow-md !outline-none pl-8 lg:col-span-2 lg:mx-20"
            placeholder="Your Message"
          />
        </div>

        <br />
        <button
          onClick={submitForm}
          className="bg-blue-800 text-white rounded-full px-8 py-5 font-semibold hover:bg-blue-600"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default Contact;
