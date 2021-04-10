import React from "react";

import Header from "./header";
import HomeReel from "./homeReel";
import Services from "./services";
import Portfolio from "./portfolio";

import About from "./about";

function Home() {
  return (
    <div>
      <Header />
      <HomeReel />
      <About />
      <Portfolio />
      <Services />
    </div>
  );
}

export default Home;
