import { HiOutlineMenuAlt4 } from "react-icons/hi";

const NavBar = () => {
  return (
    <nav
      className={`flex justify-between items-center px-10 py-8 fixed left-0 right-0 z-30  text-white text-sm bg-slate-800/35`}
    >
      <HiOutlineMenuAlt4 className="text-2xl" />

      <img
        className="h-3"
        src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1724925135/car-rentals/Heading_n3d73c.png"
        alt=""
      />

      <div className="flex border-2 border-white rounded-2xl px-3 py-1.5 gap-1">
        <button className="hover:border-b hover:border-b-white cursor-pointer">
          Login
        </button>
        <span>/</span>
        <button className="hover:border-b hover:border-b-white cursor-pointer">
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
