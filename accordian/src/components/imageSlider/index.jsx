import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url}) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const FetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl} `);
      const data = await response.json();

      console.log(data);

      setImages(data);
      setLoading(false)
      console.log(images);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchImages(url);
  }, url);

  if(loading){
    return <h1>Loading data please wait...</h1>
  }
  if(errorMessage){
    return <h1>Error Occured {errorMessage}</h1>
  }
  const handleNext = () => {
    setCurrentSlide(currentSlide  === images.length - 1 ? 0 : currentSlide + 1);
  };
  const handlePrevious = () => {
    setCurrentSlide(currentSlide  === 0 ? images.length - 1:  currentSlide - 1);
  };

  return (
    <>
    <div className="flex items-center justify-center h-screen">

      <div className="flex justify-center items-center relative   h-96 w-1/2">

        <BsArrowLeftCircleFill
          size={40}
          onClick={handlePrevious}
          className="absolute  cursor-pointer left-4 "
          />

        {images && images.length
          ? images.map((img, index) => {
            return (
              <img
                  key={img.id}
                  src={img.download_url}
                  alt={img.download_url}
                  width={"100%"}
                  height={"100%"}
                  className= {currentSlide === index ? " rounded-xl shadow-lg" : "hidden"}
                />
              );
              })
          : null}

        <BsArrowRightCircleFill
          size={40}
          onClick={handleNext}
          className="absolute  cursor-pointer right-4 "
        />

        <span className="flex absolute bottom-12 gap-2 ">
          {images && images.length   
            ? images.map((_,index) => (
              <button
              key={index}
              className={ currentSlide === index ?   "bg-slate-500 h-4 w-4 rounded-3xl cursor-pointer border-none outline-none" : "bg-white h-4 w-4 rounded-3xl cursor-pointer border-none outline-none"}
                onClick={()=>setCurrentSlide(index)}>
                
                </button>
                
            ))
            
                : null} 
                
        </span>
      </div>
                </div>
    </>
  );
}
