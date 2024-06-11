import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    console.log(currentIndex);
    setRating(currentIndex);
  }
  function handleMouseEnter(currentIndex) {
    console.log(currentIndex);
    setHover(currentIndex);
  }
  function handleMouseLeave(currentIndex) {
    console.log(currentIndex);
    setHover(rating);
  }

  return (
    <>
    <div className="flex  justify-center items-center">

      <div className="text-2xl m-4">Star Rating</div>
      {[...Array(numberOfStars)].map((_, index) => {
        index = index + 1;
        return (
            <div >
            <FaStar
              key={index}
              className={
                  index <= (rating || hover) ? "text-yellow-400" : "text-black"
              }
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              />
          </div>
        );
        })}
    </div>
    </>
  );
}
