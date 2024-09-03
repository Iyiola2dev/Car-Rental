import React from "react";

const LuxuryRide = () => {
  return (
    <div className=" bg-white h-screen w-screen p-20 flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center">
        <h3>How it works</h3>
        <p className="w-[57%] text-center">
          Renting a luxury car has never been easier. Our streamlined process
          makes it simple for you to book and confirm your vehicle of choice
          online
        </p>
      </div>
      <div className="flex-1 flex relative ">
        <div className="flex flex-col absolute top-3 left-0">
          <span className="rounded-lg border w-[50%] p-2">
            <button></button>
            <span>
              <h3>Browse and Select</h3>
              <p className=" text-wrap">
                Choose from our wide range of premium cars, select the pickup
                and return dates and locations that suit you best.
              </p>
            </span>
          </span>
          <span className="w-[50%] p-3">
            <button></button>
            <span>
              <h3>Book and confirm</h3>
              <p className=" text-wrap">
                Book your desired car with just a few clicks and receive an
                instant confirmation via email or SMS.
              </p>
            </span>
          </span>
          <span className="w-[53%] p-3">
            <button></button>
            <span>
              <h3>Enjoy your ride</h3>
              <p className=" text-wrap">
                Pick up your car at the designated location and enjoy your
                premium driving experience with our top-quality service.
              </p>
            </span>
          </span>
        </div>
        <div className="bg-[#0F0F0F]/5 px-[10rem] py-[7rem]  flex justify-center items-center rounded-2xl absolute right-0">
          <img
            className="h-[200px]"
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1725294677/car-rentals/image_35_czk3bl.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LuxuryRide;
