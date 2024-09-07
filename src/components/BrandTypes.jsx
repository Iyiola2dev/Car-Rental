
import { FaArrowRight } from "react-icons/fa";
import data from "../../data.json";

const BrandTypes = ({ title }) => {
  const brandTypes = data.filter((item) => item.brandType);
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
        {brandTypes.map((items) => (
          <div
            key={items.brandType.id}
            className="flex flex-col justify-center items-center py-8 px-5 gap-2 bg-[#0F0F0F]/5 rounded-lg hover:bg-[#0F0F0F]/10"
          >
            <div className="justify-center items-center flex flex-col gap-5">
              <img
                className="h-[36px] "
                src={items.brandType.images.webp}
                alt={items.brandType.name}
              />
              <h3 className="font-semibold">{items.brandType.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandTypes;
