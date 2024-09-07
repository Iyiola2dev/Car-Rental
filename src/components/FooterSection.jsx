import { BsDribbble, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const FooterSection = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white px-[3rem] border-t-slate-50 border-t py-7">
      <img
        className="h-3"
        src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1724925135/car-rentals/Heading_n3d73c.png"
        alt=""
      />
      <ul className="flex justify-center items-center gap-9 ">
        <li>Rent</li>
        <li>Share</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <div className="flex justify-center items-center gap-3 ">
        <button className="h-[25px] w-[25px]  px-1 py-2 rounded-full flex justify-center items-center  bg-gray-900 text-white">
          <BsInstagram className="text-[15px]" />
        </button>
        <button className="h-[25px] w-[25px]  px-1 py-2 rounded-full flex justify-center items-center  bg-gray-900 text-white">
          <BsDribbble className="text-[15px]" />
        </button>
        <button className="h-[25px] w-[25px]  px-1 py-2 rounded-full flex justify-center items-center  bg-gray-900 text-white">
          <BsTwitter className="text-[15px]" />
        </button>
        <button className="h-[25px] w-[25px]  px-1 py-2 rounded-full flex justify-center items-center  bg-gray-900 text-white">
          <BsYoutube className="text-[15px]" />
        </button>
      </div>
    </div>
  );
};

export default FooterSection;
