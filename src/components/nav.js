import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar expand="lg" variant="light">
        <Navbar.Brand href="/">
          <img alt="" src="./logo/header-logo.png" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/video" className="mr-5">
              VIDEOS
            </Nav.Link>
            <Nav.Link href="/photo" className="mr-5">
              PHOTOS
            </Nav.Link>
            <Nav.Link href="/services" className="mr-5">
              SERVICES
            </Nav.Link>
            <Nav.Link href="/contactus">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
