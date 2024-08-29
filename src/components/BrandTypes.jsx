import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BrandTypes = ({ title }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between font-bold">
        <p>{title}</p>
        <span className="flex gap-2 items-center ">
          <p>View all</p>
          <FaArrowRight />
        </span>
      </div>
      <div className="grid grid-cols-6 gap-5 grid-rows-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center py-8 px-14 gap-2 bg-[#0F0F0F]/5 rounded-lg hover:bg-[#0F0F0F]/10"
          >
            <img
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1724930781/car-rental/Vector_oafm3x.png"
              alt=""
              className="h-8 w-fit"
            />
            <p>Toyota</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandTypes;
