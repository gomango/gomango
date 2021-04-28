import React from "react";
import { Nav } from "react-bootstrap";
import SectionTitle from "../sectionTitle";

function Services() {
  return (
    <div className="container mt-5">
      <SectionTitle title="SERVICES" />
      <p className="lead">
        We provide a wide range of video services for any occasion. We will be
        happy to provide a consultation or clarify any questions you might have.
      </p>
      <div className="d-flex justify-content-start">
        <Nav.Link href="/services" className="mr-5">
          LEARN MORE
        </Nav.Link>
      </div>
    </div>
  );
}

export default Services;
