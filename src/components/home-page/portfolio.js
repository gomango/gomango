import React from "react";
import SectionTitle from "../sectionTitle";
import { Nav } from "react-bootstrap";

function Portfolio() {
  return (
    <div className="container mt-5">
      <SectionTitle title="PORTFOLIO" />
      <div className="row align-items-center">
        <div className="col-sm-6">
          <img className="img-fluid" src="/video-img.png" />
        </div>
        <div className="col">
          <p className="lead">
            Memories fade. However, you can always relive your favorite moments
            with our carefully documented videos.
          </p>
        </div>
      </div>
      <div className="row justify-content-end">
        <Nav.Link href="/video" className="mr-5">
          MORE VIDEOS
        </Nav.Link>
      </div>
      <div className="row align-items-center my-5">
        <div className="col-sm-6">
          <p className="lead">
            We will do everything to catch every moment of your special day.
          </p>
        </div>
        <div className="col">
          <img className="img-fluid" src="/photo-img.png" />
        </div>
      </div>
      <div className="row justify-content-start">
        <Nav.Link href="/photo" className="mr-5">
          MORE PHOTOS
        </Nav.Link>
      </div>
    </div>
  );
}

export default Portfolio;
