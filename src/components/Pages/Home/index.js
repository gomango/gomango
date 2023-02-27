import React from "react";
import Hero from "./Hero";
import Portfolio from "./Sections/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="grand-container">
        <div className="about-us-container">
          {/* <p className="about-us-header"> */}
          <h1>Hello, World!</h1>
          <p>
            We are a team of passionate professionals in Video Production
            services! We have all the bells and whistles to capture cinematic
            weddings, edgy fashion films, dynamic music clips, and any branding
            promotional videos you have in mind. Leave a lasting impression and
            create treasured memories… with video production services from us!
          </p>
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default Home;
