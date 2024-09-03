import React from 'react'
import data from "../../data.json";

const CarRentalSection = () => {
    const carModels = data.filter((item) => item.CarModel);
  return (
    <div className="grid grid-cols-3 ">
    {carModels.map((items) => (
      <div
        className="flex-1 flex flex-col gap-6 px-3 py-6"
        key={items.CarModel.id}
      >
        <div className="bg-white flex flex-col gap-3 w-full p-2 justify-center items-center rounded-2xl hover:border hover:border-black">
          <img
            className="h-[180px] w-[270px]"
            src={items.CarModel.images.webp}
            alt=""
          />
          <div className="flex flex-col gap-3 w-fit px-2 ">
            <h4 className="font-semibold">{items.CarModel.name}</h4>
            <h2 className="font-bold text-2xl">
              78.90 <span className="text-lg font-light">/day</span>
            </h2>
            <div className="flex items-center justify-center gap-5 bg-[#0F0F0F]/5 rounded-xl p-3 text-sm">
              <div className=" flex flex-col items-center justify-center">
                <img
                  className="h-5"
                  src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1725361887/car-rentals/speedometer-01_epwolh.png"
                  alt=""
                />
                <span>4000</span>
              </div>
              <div className=" flex flex-col items-center justify-center ">
                <img
                  className="h-5"
                  src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1725361887/car-rentals/manual-gearbox_agiwxi.png"
                  alt=""
                />
                <span>Auto</span>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <img
                  className="h-5"
                  src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1725361887/car-rentals/users-01_i9ir62.png"
                  alt=""
                />
                <span>4 Person</span>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <img
                  className="h-5"
                  src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1725361887/car-rentals/gas-station_d8gxmn.png"
                  alt=""
                />
                <span>Electric</span>
              </div>
            </div>
            <button className="px-8 py-2 rounded-2xl bg-white text-black  hover:bg-black hover:text-white border border-black">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default CarRentalSection