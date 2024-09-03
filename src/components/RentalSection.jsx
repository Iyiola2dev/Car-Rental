import React from "react";

import CarRentalSection from "./CarRentalSection";
import { FaArrowRight } from "react-icons/fa";

const RentalSection = () => {
  return (
    <div className="bg-[#0F0F0F]/5 h-fit w-screen py-20 px-10 flex flex-col items-center gap-10 mt-[15rem]">
      <div className="flex flex-col justify-center items-center gap-5 pt-6">
        <div className=" flex flex-col justify-center items-center w-[55%] text-center gap-3 ">
          <h1 className="font-semibold text-2xl">
            Our Impressive Collection of Cars
          </h1>
          <p>
            Ranging from elegant sedans to powerful sports cars, all carefully
            selected to provide our customers with the ultimate driving
            experience.
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <button className="border rounded-3xl hover:bg-black hover:text-white text-black bg-white py-2 px-4">
            Popular Car
          </button>
          <button className="border rounded-3xl hover:bg-black hover:text-white text-black bg-white py-2 px-4">
            Luxury Car
          </button>
          <button className="border rounded-3xl hover:bg-black hover:text-white text-black bg-white py-2 px-4">
            Vintage Car
          </button>
          <button className="border rounded-3xl hover:bg-black hover:text-white text-black bg-white py-2 px-4">
            Family Car
          </button>
          <button className="border rounded-3xl hover:bg-black hover:text-white text-black bg-white py-2 px-4">
            Off-Road Car
          </button>
        </div>
      </div>
      <CarRentalSection />
      <button className="border font-semibold text-sm rounded-3xl hover:bg-white hover:text-black text-white bg-black py-3 px-6 flex justify-center items-center gap-2">
        <span> See all Cars</span>
        
          <FaArrowRight />
        
      </button>
    </div>
  );
};

export default RentalSection;
