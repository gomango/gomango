import React, { useState } from "react";
import ReactPlayer from "react-player";
import FsLightbox from "fslightbox-react";
import { videos } from "./videos";

import CategoryTitle from "./categoryTitle";

function MorePortfolio() {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          {videos.map((video) => (
            <div className="col-sm-3 my-3">
              <iframe
                src={video.src}
                onClick={() => setToggler(!toggler)}
                alt="videos"
              />
              <p>lorem ipsum</p>
            </div>
          ))}
        </div>
      </div>

      <CategoryTitle title={"Weddings | Love Stories | Elopements"} />
      <div className="row">
        <div className="col-sm-3 my-3">
          <iframe
            src={"https://player.vimeo.com/video/518208505"}
            onClick={() => setToggler(!toggler)}
            alt="videos"
          />
        </div>
      </div>

      <CategoryTitle title={"Events"} />
      <CategoryTitle title={"Promo"} />
      <CategoryTitle title={"Short Clips"} />

      <FsLightbox
        toggler={toggler}
        sources={[
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/518208505"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/518204943"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/518204466"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/511192172"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/511191798"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/511190836"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/510495937"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/509971080"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/508258604"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/505056584"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/505046110"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,

          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/504626099"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>,
        ]}
      />
    </div>
  );
}

export default MorePortfolio;
