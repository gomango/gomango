import React from "react";
import SectionTitle from "../sectionTitle";

function HomeReel() {
  return (
    <div className="container">
      <SectionTitle title={"OUR WORK"} />
      <div className="row justify-content-center ">
        <div className="embed-responsive embed-responsive-16by9 mx-1">
          <iframe
            src="https://player.vimeo.com/video/531407800"
            title="test"
            frameborder="0"
            fluid={false}
            width="1100px"
            height="640px"
            id="custom"
            className="embed-responsive-item"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HomeReel;
