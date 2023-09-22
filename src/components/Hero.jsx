import React from "react";
import coverImage from "../assets/cover.jpeg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/***overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
          <h1 className="px-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            The <span className="text-green-600">Best</span>
          </h1>
          <h1 className="px-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="text-green-600">Momo</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={coverImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
