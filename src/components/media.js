import React from "react";

// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import DuoIcon from '@material-ui/icons/Duo';

// Update

function Media() {
  return (
    // <div className="row justify-content-end text-light">
    <div className="col col-sm-3 d-flex mb-3">
      <a
        href="https://www.instagram.com/gomango.studio/"
        target="_blank"
        rel="noreferrer"
        className="mr-3"
      >
        <i className="fab fa-instagram fa-2x"></i>
      </a>

      <a
        href="https://vimeo.com/user129958158"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-vimeo fa-2x"> </i>
      </a>
    </div>
  );
}

export default Media;
