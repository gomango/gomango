import { Divider } from "@material-ui/core";
import React from "react";
import Media from "./media";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-start mt-5">
          <div className="col col-sm-4 my-5">
            <img
              className="img-fluid my-5"
              src="https://www.dropbox.com/s/ra2dpzx2j68j0br/footer-logo.png?dl=0"
            />

            <p>
              <strong>Email: </strong>
              <a href="mailto:gomango.studio@gmail.com">
                {" "}
                gomango.studio@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> 123-345-7890
            </p>
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
