import React from "react";

import Header from "./home-page/header";
import HomeReel from "./home-page/homeReel";
import Services from "./home-page/services";
import Portfolio from "./home-page/portfolio";
import About from "./home-page/about";

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
