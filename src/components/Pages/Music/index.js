import React from "react";
import HeaderSection from "../../HeaderSection";
import Video from "./Video";
// import fashion from "../Fashion/fashion.mp4";

const title = "Dear Artists";
const text =
  "Make your next performance unforgettable and capture it in stunning video quality with us! Get in touch to experience the highest quality audio and visual experience for your performance.";

const Music = () => {
  return (
    <div>
      <video className="videoTag" autoPlay loop muted>
        {/* <source src={fashion} type="video/mp4" muted={true} loop={true} /> */}
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

export default Music;
