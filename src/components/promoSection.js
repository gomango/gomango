import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import SectionTitle from "./sectionTitle";

import { videos } from "./media-links/promo";

function PromoSection(props) {
  const [toggler, setToggler] = useState(false);

  const videoURL = videos.map((video) => (
    <iframe
      src={video.src}
      id="vimeo"
      width="1280px"
      height="720px"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
  ));

  console.log(videoURL);
  return (
    <>
      <SectionTitle title={"Music"} />
      <div className="row">
        {videos.map((video) => (
          <div className="col-sm-3 my-1">
            <iframe src={video.src} alt="videos" frameborder="0" />
          </div>
        ))}
      </div>
      <div className="row justify-content-end">
        <button
          className="btn btn-outline-dark"
          onClick={() => setToggler(!toggler)}
        >
          VIEW ALL
        </button>
      </div>

      <FsLightbox toggler={toggler} sources={videoURL} />
    </>
  );
}

export default PromoSection;
