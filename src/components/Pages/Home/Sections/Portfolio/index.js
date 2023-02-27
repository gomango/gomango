import React from "react";
import { Nav } from "react-bootstrap";
import Button from "../../../../Button";
import { useComponentLogic } from "./hooks";

const Portfolio = () => {
  const { sections } = useComponentLogic();
  return (
    <div className="portfolio-container">
      {sections.map((section) => (
        <div className="item-row">
          <img
            className="img-fluid section-photo"
            alt="weddings"
            src={section.imgUrl}
          />
          <div className="description">
            <p className={"description-text"}>
              <h2>{section.title}</h2>
              <p className="subcategory-title">{section.subTitle}</p>
              {section.text}
            </p>

            <Nav.Link href={section.link} className="nav-button-description">
              <Button title={section.btnTitle} />
            </Nav.Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
