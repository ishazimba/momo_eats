import React from "react";
import { data } from "../data/data.js";

function Momo() {
  console.log(data);
  return (
    <div>
      <h1>Top Rated Menu Items</h1>
      {/*** filter row */}
      <div>
        {/**filter type */}
        <div>
          <p>Filter Type</p>
          <div>
            <button>All</button>
            <button>Vegan</button>
            <button>Vegeterian</button>
            <button>Chicken</button>
            <button>Sides</button>
          </div>
        </div>

        {/*** filter price */}
        <div>
          <p>Filter Price</p>
          <div>
            <button>£</button>
            <button>£</button>
            <button>£</button>
            <button>£</button>
            <button>£</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Momo;
