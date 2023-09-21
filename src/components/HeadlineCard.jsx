import React from "react";
import steamMomo from "../assets/steammomo.png";
import chillyMomo from "../assets/chillymomo.png";
import greenMomo from "../assets/greenmomo.png";
import jholMomo from "../assets/jholmomo.png";
import openMomo from "../assets/openmomo.jpeg";
import kotheMomo from "../assets/kothemomo.jpg";
import buckwheatMomo from "../assets/buckwheatmomo.jpeg";
import tandooriMomo from "../assets/tandoorimomo.jpg";
import paneerMomo from "../assets/paneermomo.png";

function HeadlineCard() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/**Card */}
      <div className="rounded-xl relative">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Sun's out, steamed momo's out
          </p>
          <p className="px-2 ">Steam Momo</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={steamMomo}
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Hot and Spicy</p>
          <p className="px-2 ">Chilly Momo</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={chillyMomo}
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Drowned in a Bowl of Jhol Achar
          </p>
          <p className="px-2 ">Jhol Momo</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={jholMomo}
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Open for You To Pour Sauce
          </p>
          <p className="px-2 ">Open Momo</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={openMomo}
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Spinach blended with flour
          </p>
          <p className="px-2 ">Green Momo</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={greenMomo}
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Healthy, Light, and Delicious
          </p>
          <p className="px-2 ">Buckwheat Momo</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={buckwheatMomo}
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Lip smacking combo</p>
          <p className="px-2 ">Tandoori Momo</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={tandooriMomo}
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Burst of cheese flavor</p>
          <p className="px-2 ">Paneer Momo</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={paneerMomo}
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Half Fried and Half Steamed
          </p>
          <p className="px-2 ">Kothey Momo</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={kotheMomo}
          alt=""
        />
      </div>
    </div>
  );
}

export default HeadlineCard;
