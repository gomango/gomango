import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SectionTitle from "./sectionTitle";

function ServicesList() {
  return (
    <div className="container mt-5">
      <SectionTitle title={"SERVICES"} />
      <div className="row">
        <div className="col">
          <p>Our wide range of services includes following: </p>

          <ul>
            <li>Full coverage of your event</li>
            <li>Videographers</li>
            <li>Photographers</li>
            <li>DJs</li>
            <li>Make-up artist</li>
          </ul>
        </div>
        <div className="col">
          <p>Depending on the package you will receive: </p>
          <ul>
            <li>Short promo video</li>
            <li>Video highlights</li>
            <li>Retouched photos</li>
            <li>Aerial video</li>
            <li>Documentary style video</li>
            <li>RAW version</li>
          </ul>
        </div>
      </div>
      If you would like to learn more please
      <span>
        <Link to="/contactus"> CONTACT US</Link>
      </span>
    </div>
  );
}

export default ServicesList;
