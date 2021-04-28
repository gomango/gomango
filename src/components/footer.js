import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
