import React from "react";
import SectionTitle from "./sectionTitle";

function HomeReel() {
  return (
    <div className="container">
      <SectionTitle title={"OUR WORK"} />
      <div className="vimeo row justify-content-center">
        <iframe
          src="https://player.vimeo.com/video/504626099"
          title="test"
          frameborder="0"
          fluid={false}
          width="1100px"
          height="640px"
          id="custom"
        ></iframe>
      </div>
    </div>
  );
}

export default HomeReel;
