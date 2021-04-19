import { Divider } from "@material-ui/core";
import React from "react";
import Media from "./media";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-start mt-5">
          <div className="col col-sm-4 my-5">
            <Link to="/">
              <img className="img-fluid my-5" src="./logo/footer-logo.png" />
            </Link>
            <p>
              <strong>Email: </strong>
              gomango.studio@gmail.com
            </p>
            {/* <p>
              <strong>Phone:</strong> 123-345-7890
            </p> */}
          </div>
        </div>
        {/* <div className="row justify-content-end text-light">
          <Media />
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
