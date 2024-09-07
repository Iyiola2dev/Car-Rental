import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import data from "../../data.json";

const Review = () => {
  const reviews = data.filter((item) => item.reviews);
  const [review, setReviews] = useState(0);

  const handleNextReview = () => {
    setReviews((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevReview = ()=>{
    setReviews((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }
  return (
    <div className=" flex flex-col  px-[7rem] gap-6 py-[5rem]">
      <div className="flex justify-between items-center ">
        <p className="text-xl font-bold">What Our Customers Say</p>
        <div className="flex gap-3 ">
          <button onClick={handleNextReview} className="w-[30px] h-[30px] hover:bg-black hover:text-white bg-white text-black border border-black rounded-full flex justify-center items-center">
            <FaArrowRight />
          </button>
          <button onClick={handlePrevReview} className="w-[30px] h-[30px] hover:bg-black hover:text-white bg-white text-black border border-black rounded-full flex justify-center items-center">
            <FaArrowLeft />
          </button>
        </div>
      </div>
      <div className="w-[1050px] text-[20px] font-semibold">{`${reviews[review].reviews.text}`}</div>
      <div className="flex gap-5">
        <img
          className=" w-[55px] bg-black h-[55px] rounded-full flex justify-center items-center"
          src={`${reviews[review].reviews.image}`}
          alt=""
        />
        <div>
          <h3 className="font-bold text-lg">{reviews[review].reviews.name}</h3>
          <h5>{reviews[review].reviews.state}</h5>
        </div>
      </div>
    </div>
  );
};

export default Review;
