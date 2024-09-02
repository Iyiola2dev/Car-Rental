import React from "react";
import { FaArrowRight } from "react-icons/fa";
import data from "../../data.json";

const BodyTypes = ({ title }) => {
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
        {data.map((items) => (
          <div
            key={items.id}
            className="flex flex-col justify-center items-center py-8 px-5 gap-2 bg-[#0F0F0F]/5 rounded-lg hover:bg-[#0F0F0F]/10"
          >
            <div className="justify-center items-center flex flex-col gap-5">
              <img  className="h-[36px] w-" src={items.images.webp2} alt="" />
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyTypes
