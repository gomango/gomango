import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./linkButton";
import SectionTitle from "./sectionTitle";

function Services() {
  return (
    <div className="container mt-5">
      <SectionTitle title="SERVICES" />
      <p className="lead">
        We provide a wide range of video services for any occasion. We will be
        happy to provide a consultation or clarify any questions you might have.
      </p>
      <div className="d-flex justify-content-start">
               {/* <LinkButton link="/services" title="LEARN MORE" /> */}
        <Button variant="outline-dark">
          <Link to='/services'>Services</Link>
        </Button>
      </div>
    </div>
  );
}

export default Services;
