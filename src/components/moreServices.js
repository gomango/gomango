import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function MoreServices() {
  return (
    <div className="container">
      <h1 className="my-5">SERVICES</h1>
      <p>
        Our wide range of services includes following:
        <ul>
          {" "}
          <li>Full coverage of your event</li>
          <li>Videographers</li>
          <li>Photographers</li>
          <li>DJs</li>
          <li>Highlights video</li>
          <li>Short Instagram video</li>
          <li>RAW version</li>
          <li>Online Gallery upload</li>
        </ul>
        If you would like to learn more please{" "}
        <span>
          <Link to="/contactus">CONTACT US</Link>
        </span>
      </p>
      {/* <p className="my-5">
        Based on your budget you can select a package that will meet your needs.{" "}
      </p>
      <div className="row my-5">
        <div className="col-3">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Super Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $180 <small class="text-muted">/ hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>2 hours of coverage</li>
                <li>1 videographer</li>
                <li>1 min short Instagram video</li>
                <li>RAW version</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $180 <small class="text-muted">/ hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>5 hours of coverage</li>
                <li>1 videographer</li>
                <li>3-5 mins highlight video</li>
                <li>1 min short Instagram video</li>
                <li>RAW version</li>
                <li>Online Gallery upload</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $175 <small class="text-muted">/ hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>8 hours of coverage</li>
                <li>1 videographer</li>
                <li>6-8 mins highlight video</li>
                <li>1 min short Instagram video</li>
                <li>RAW version</li>
                <li>Online Gallery upload</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Ultimate</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $160 <small class="text-muted">/ hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 hours of coverage</li>
                <li>1 videographer</li>
                <li>12-15 mins highlight video </li>
                <li>1 min short Instagram video</li>
                <li>RAW version</li>
                <li>Online Gallery upload</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default MoreServices;
