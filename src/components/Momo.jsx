import React, { useState } from "react";
import { data } from "../data/data.js";

function Momo() {
  const [momos, setmomos] = useState(data);
  //filter type
  const filterType = (category) => {
    setmomos(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  //filter by price
  const filterPrice = (price) => {
    return item.price === price;
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-green-600 font-bold text-4xl text-center ">
        Top Rated Menu Items
      </h1>
      {/*** filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/**filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setmomos(data)}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("vegeterian")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Vegan
            </button>
            <button className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              Vegeterian
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Chicken
            </button>
            <button className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              Sides
            </button>
          </div>
        </div>

        {/*** filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("£")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              £
            </button>
            <button className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              £
            </button>
            <button className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              £
            </button>
            <button className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              £
            </button>
            <button className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              £
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {momos.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-green-600 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Momo;
