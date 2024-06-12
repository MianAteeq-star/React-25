import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0)

  const FetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${getUrl}? page= ${page} & limit=${limit} `
      );
      const data = await response.json();

      console.log(data);

      if (data) {
        setImages(data);
        setLoading(false);
      }
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

  const handleNext= () => {
    setCurrentSlide(currentSlide + 1)

  }
  const handlePrevious= () => {
    setCurrentSlide(currentSlide - 1)

  }

  return (
    <>
      <div>Image slider</div>
      <div className="relative">
        <BsArrowRightCircleFill onClick={handleNext} className="absolute bg-slate-100 cursor-pointer top-52" />

        {images && images.length
          ? images.map((img) => {
              return (
                <img
                key={img.id}
                  src={img.download_url}
                  alt={img.download_url}
                  width={"100%"}
                  />
              );
              })
              : null}

            <BsArrowLeftCircleFill  onClick={handlePrevious} className="absolute bg-slate-200 cursor-pointer  top-52" />
  
        <span className="rounded-full w-8 h-8 bg-black absolute bottom-3">
          {images && images.length
            ? images.map((_, index) => {
                <button key={index}></button>;
              })
            : null}
        </span>
      </div>
    </>
  );
}
