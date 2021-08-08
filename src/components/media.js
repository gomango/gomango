import React from "react";

// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import DuoIcon from '@material-ui/icons/Duo';
// import Grid from '@material-ui/core/Grid';
// Update

function Media() {
  return (
    // <div className="row justify-content-end text-light">
    <div className="col col-sm-3 d-flex mb-3">
      <a
        href="https://www.instagram.com/anatoly_kuteliya/"
        target="_blank"
        rel="noreferrer"
        className="mr-3"
      >
        <i class="fab fa-instagram fa-2x"></i>
      </a>

      <a
        href="https://vimeo.com/user129958158"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-vimeo fa-2x"> </i>
      </a>

      {/* <i class="fab fa-facebook-square fa-2x"></i> */}

      {/* <i class="fab fa-youtube-square fa-2x"></i> */}
    </div>
  );
}

export default Media;
