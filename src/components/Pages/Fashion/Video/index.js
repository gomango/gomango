import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import { fashionVideos } from "./fashion-video-links";

function Video() {
  return (
    <div className="container mb-3 video-grid">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
        {fashionVideos.map((video) => (
          <a
            href={video.video}
            data-lg-size="1280-720"
            data-src={video.video}
            data-poster={video.poster}
            data-sub-html={video.sub}
            className="video-container"
          >
            <img
              alt={video.alt}
              className="img-fluid col-sm-6 thumbnail "
              src={video.poster}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default Video;
