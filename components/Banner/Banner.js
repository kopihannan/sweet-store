import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Banner = () => {
  const slides = [
    {
      url: "https://www.deshghuri.com/wp-content/uploads/2016/03/sweet-shop-in-Dhaka.jpg",
    },
    {
      url: "https://www.daily-sun.com/assets/news_images/2016/05/19/thumbnails/Bangladesh-Dredging1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[780px] m-auto py-10 px-4 relative group">
      <div className="absolute text-white text-center top-1/3 left-1/2 -translate-x-2/4">
        <div className="w-full left-0 right-0 ">
          <h1 className="text-center text-6xl font-bold text-white mb-6">
            BEST SWEETS STORE
          </h1>
          <p className="font-medium text-sm">
            Sweets with various types and names are found in Bangladesh. Most of
            the districts <br /> of Bangladesh have individual sweets with an
            individual name.
          </p>
          <button className="bg-gradient-to-r from-[#FF6D28] to-[#EA047E] rounded-md px-7 py-3 mt-5 hover:from-[#d34300] hover:to-[#af005d]">
            Shop Now
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
