import React from "react";

const AboutCars = () => {
  return (
    <div className="bg-black py-10 flex flex-col items-center mt-[8rem] text-white gap-10 mx-auto">
      <div className="flex flex-col  items-center mx-auto  gap-4">
        <h2 className="text-2xl font-bold">Our Services & Benefits</h2>
        <p className="font-extralight text-sm w-[720px] text-center">
          To make renting easy and hassle-free, we provide a variety of services
          and advantages. We have you covered with a variety of vehicles and
          flexible rental terms.
        </p>
      </div>
      <div className="flex  gap-10  ">
        <div className="flex  flex-col items-center gap-2 w-[384px] mx-auto">
          <span className="w-8 h-8 rounded-full bg-white"></span>
          <h5 className="font-semibold">Quality Choice</h5>
          <p className=" text-sm text-center w-[384px]">
            We offer a wide range of high-quality vehicles to choose from,
            including luxury cars, SUVs, vans, and more.
          </p>
        </div>
        <div className="flex flex-col w-[384px] items-center gap-2 mx-auto">
          <span className="w-8 h-8 rounded-full bg-white"></span>
          <h5 className="font-semibold">Affordable Prices</h5>
          <p className=" text-sm text-center w-[384px]">
            Our rental rates are highly competitive and affordable, allowing our
            customers to enjoy their trips without breaking the bank.
          </p>
        </div>
        <div className="flex flex-col items-center w-[384px]  gap-2 mx-auto">
          <span className="w-8 h-8 rounded-full bg-white"></span>
          <h5 className="font-semibold">Convenient Online Booking</h5>
          <p className=" text-sm text-center w-[384px]">
            With our easy-to-use online booking system, customers can quickly
            and conveniently reserve their rental car from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCars;
