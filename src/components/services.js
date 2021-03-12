import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

function Services() {
  return (
    <div className="container mt-5">
      <h1 class="display-4 my-5">SERVICES</h1>
      <p className="lead">
        We provide a wide range of video services for any occasion. We strive to
        meet all our clients needs and wishes. We will be happy to provide a
        consulatation or clarify any questions you may have.{" "}
      </p>
      <div className="d-flex justify-content-start">
        <Link to="/services" className="link-pages">
          <h2 id="button-more">LEARN MORE</h2>
        </Link>
      </div>
      {/* <button className="btn btn-outline-dark">
        <Link className="nav-link mr-3 text-info" to="/services">
          Services
        </Link>
      </button> */}
    </div>
  );
}

export default Services;
