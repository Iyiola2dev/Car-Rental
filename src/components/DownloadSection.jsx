
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";

const DownloadSection = () => {
  return (
    <div className="flex flex-1 items-center px-[8rem] py-[5rem] gap-10 bg-black text-white ">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold" >Download our mobile app ⚡️</h3>
        <p className="w-[75%]">
          Get exclusive access to car rentals with our mobile app. Download now
          and experience convenience on the go.
        </p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button className="flex w-[193px] h-[55px] justify-center  items-center gap-2 bg-white text-black py-2 px-2 rounded-3xl">
          <IoLogoApple className=" text-[1.5rem]" />
          <span className="flex flex-col items-start">
            <h5 className="text-[9px] ">DOWNLOAD ON THE</h5>
            <h6  className="text-sm">APP STORE</h6>
          </span>
        </button>
        <button className="flex w-[193px] h-[55px] justify-center  items-center gap-2 bg-white text-black py-2 px-2 rounded-3xl">
          <FaGooglePlay className=" text-[1rem]" />
          <span className="flex flex-col items-start">
            <h5 className="text-[9px]">GET IT ON</h5>
            <h6 className="text-sm">GOOGLE PLAY</h6>
          </span>
        </button>
      </div>
    </div>
  );
};

export default DownloadSection;
