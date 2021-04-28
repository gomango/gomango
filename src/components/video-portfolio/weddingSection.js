import React from "react";
import { videos } from "../media-links/weddings";
import SectionTitle from "../sectionTitle";

function WeddingSection(props) {
  return (
    <>
      <SectionTitle title={"Weddings | Love Stories | Elopements"} />
      <div className="row justify-content-center">
        {videos.map((video, id) => (
          <div className="col-sm-5 my-1 mx-1 embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={video.src}
              allowfullscreen
              allow="fullscreen"
              mozallowfullscreen
              webkitallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}

export default WeddingSection;
