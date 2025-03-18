import React from "react";
import HeaderSection from "../../HeaderSection";
import Video from "./Video";
import promo from "../Promo/promo-new.mp4";

const title = "To our Friends, Business Owners";
const text =
  "We specialize in bringing your brand's story to life, working hand-in-hand with over 50 of satisfied clients to perfectly capture the vision and emotion that drive your production. With cutting-edge camera technology, our filmmakers create stunning visuals that burst with vibrant colors and fluid movement, pushing your project to new heights. Paired with expert editing, our video production services will not only bring your creative ideas to life but also craft unforgettable moments that will leave a lasting impact on both you and your audience.";

const Promo = () => {
  return (
    <div>
      <div className="hero">
        <video className="videoTag" autoPlay loop muted>
          <source src={promo} type="video/mp4" muted={true} loop={true} />
        </video>
      </div>

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
