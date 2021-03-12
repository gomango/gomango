import React from "react";
import ReactPlayer from "react-player";

function About() {
  return (
    <div className="container">
      <h1 class="display-4">OUR WORK</h1>
      <div className="row align-items-center justify-content-center">
        {/* <ReactPlayer
            url="https://www.youtube.com/watch?v=PwPQILQyAPg&feature=youtu.be"
            fluid={false}
            width={1280}
            height={720}
          /> */}
        <iframe
          src="https://player.vimeo.com/video/504626099"
          title="test"
          width="1100"
          height="720"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>

        {/* <iframe src="https://player.vimeo.com/video/504626099" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/504626099">NYC vibes 2021</a> from <a href="https://vimeo.com/user129958158">GoManGo Studio</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
      </div>
    </div>
  );
}

export default About;
