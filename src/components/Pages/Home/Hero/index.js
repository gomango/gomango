import React from "react";
import homeVideo from "../Hero/home.mp4";

function Hero() {
  return (
    <div className="hero">
      <video className="videoTag" autoPlay loop muted>
        <source src={homeVideo} type="video/mp4" muted={true} loop={true} />
      </video>
    </div>
  );
}

export default Hero;
