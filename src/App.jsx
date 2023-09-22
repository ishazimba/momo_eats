import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeadlineCard from "./components/HeadlineCard";
import Momo from "./components/Momo";

import Category from "./components/category";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HeadlineCard />
      <Momo />
      <Category />
    </>
  );
}

export default App;
