
import VehicleFinder from "./VehicleFinder";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <img
        src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1724925380/car-rentals/image_23_ttqkts.png"
        alt=""
      />
      <h1 className="absolute  text-4xl text-white top-[10rem] w-[40%] text-center font-semibold">Discover the world on wheels with our car rental service</h1>
      <VehicleFinder/>
      
    </div>
  );
};

export default Hero;
