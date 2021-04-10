import React from "react";

import { Link } from "react-router-dom";

function LinkButton(props) {
  return (
    <Link to={props.link} className="link-pages">
      <h2 id="button-more">{props.title}</h2>
    </Link>
  );
}

export default LinkButton;
