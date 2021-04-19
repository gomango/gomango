import React from "react";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

function LinkButton(props) {
  return (
    <Button href={props.link} variant="outline-dark">
      {props.title}
    </Button>

    // <Link to={props.link} className="link-pages">
    //   <h2 id="button-more">{props.title}</h2>
    // </Link>
  );
}

export default LinkButton;
