import React from "react";
import HeaderSection from "../../HeaderSection";
import Video from "./Video";
import promo from "../Promo/promo-new.mp4";

const title = "To our Friends, Business Owners";
const text =
  "With our unique ability to capture the life of your brand, our team works closely with you to perfectly capture the vision and emotion that you desire in your production. Our filmmakers employ the latest camera technologies to give you vibrant colors and dynamic movements, taking your production to the next level. With the highest quality editing, our video production service will help you bring your creative vision to life and create the perfect memories for you and your audience.";

const Promo = () => {
  return (
    <div>
      <video className="videoTag" autoPlay loop muted>
        <source src={promo} type="video/mp4" muted={true} loop={true} />
      </video>
      <div className="grand-container">
        <HeaderSection title={title} text={text} />
      </div>

      <div className="parent-video">
        <Video />
      </div>
    </div>
  );
};

export default Promo;
