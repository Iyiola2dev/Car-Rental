

const LuxuryRide = () => {
  return (
    <div className=" bg-white h-screen w-screen p-20 flex flex-col gap-10">
      <div className="flex  flex-col justify-center items-center">
        <h3 className="font-bold text-2xl">How it works</h3>
        <p className="w-[57%] text-center text-sm font-normal">
          Renting a luxury car has never been easier. Our streamlined process
          makes it simple for you to book and confirm your vehicle of choice
          online
        </p>
      </div>
      <div className="flex-1 flex relative  ">
        <div className="flex  flex-col absolute top-10 left-5 gap-3 justify-center  z-10">
          <span className="rounded-2xl  w-[60%] px-6 py-5 flex gap-4 justify-center items-center bg-[white] border-gray-300 border">
            <button className="flex justify-center items-center py-6 bg-[#0F0F0F]/5 px-2 rounded-xl">
              <img
                className="w-10"
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1725395580/car-rentals/search-lg_utvzb8.png"
                alt=""
              />
            </button>
            <span className="flex flex-col gap-2">
              <h3 className="font-bold">Browse and Select</h3>
              <p className="text-wrap">
                Choose from our wide range of premium cars, select the pickup
                and return dates and locations that suit you best.
              </p>
            </span>
          </span>
          <span className="rounded-2xl  w-[60%] px-6 py-5 flex gap-4 justify-center items-center bg-[white] border-gray-300 border">
            <button className="flex justify-center items-center  py-6 bg-[#0F0F0F]/5 px-2 rounded-xl ">
              <img
                className="w-10"
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1725395580/car-rentals/calendar-check-02_ybxobw.png"
                alt=""
              />
            </button>
            <span className="flex flex-col gap-2">
              <h3 className="font-bold">Book and confirm</h3>
              <p className=" text-wrap">
                Book your desired car with just a few clicks and receive an
                instant confirmation via email or SMS.
              </p>
            </span>
          </span>
          <span className="rounded-2xl  w-[60%] px-6 py-5 flex gap-4 justify-center items-center bg-[white] border-gray-300 border">
            <button className="flex justify-center items-center  py-6 bg-[#0F0F0F]/5 px-2 rounded-xl">
              <img
                className="w-10"
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1725395580/car-rentals/face-happy_ysjuse.png"
                alt=""
              />
            </button>
            <span className="flex flex-col gap-2">
              <h3 className="font-bold">Enjoy your ride</h3>
              <p className=" text-wrap">
                Pick up your car at the designated location and enjoy your
                premium driving experience with our top-quality service.
              </p>
            </span>
          </span>
        </div>
        <div className="bg-[#0F0F0F]/5 px-[10rem] py-[7rem]  flex justify-center items-center rounded-2xl absolute right-0">
          <img
            className="h-[16rem]"
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1725294677/car-rentals/image_35_czk3bl.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LuxuryRide;
