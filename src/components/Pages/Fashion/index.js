import React from "react";
import HeaderSection from "../../HeaderSection";
import Video from "./Video";
import fashion from "../Fashion/new-fashion.mp4";

const title = "To all Fashionistas";
const text =
  "Bring your fashion brand to life with our videography services that capture attention of your customers, deliver high-quality, visually engaging videos tailored to the needs and desires of your style. ";

const Fashion = () => {
  return (
    <div>
      <video className="videoTag" autoPlay loop muted>
        <source src={fashion} type="video/mp4" muted={true} loop={true} />
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

export default Fashion;
