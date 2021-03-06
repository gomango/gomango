import React from "react";
import SectionTitle from "./sectionTitle";

function ServicesList() {
  return (
    <div className="container mt-5 mb-5">
      <SectionTitle title={"SERVICES"} />
      <div className="row mb-5">
        <div className="col my-5">
          <p>Our wide range of services includes following: </p>

          <ul className="mb-5">
            <li>Full coverage of your event</li>
            <li>Videographers</li>
            <li>Photographers</li>
            <li>DJs</li>
            <li>Make-up artist</li>
          </ul>
        </div>
        <div className="col my-5">
          <p>Depending on the package you will receive: </p>
          <ul className="mb-5">
            <li>Short promo video</li>
            <li>Video highlights</li>
            <li>Retouched photos</li>
            <li>Aerial video</li>
            <li>Documentary style video</li>
            <li>RAW version</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
