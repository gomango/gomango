import React from 'react';

// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import DuoIcon from '@material-ui/icons/Duo';
// import Grid from '@material-ui/core/Grid';

function Media() {
  return (
    <div className="row justify-content-end bg-dark text-light">
      <div className="col col-sm-3 d-flex justify-content-around mt-5 mb-3">
        <i class="fab fa-instagram fa-2x"></i>
        <i class="fab fa-facebook-square fa-2x"></i>
        <i class="fab fa-vimeo fa-2x"></i>
        <i class="fab fa-youtube-square fa-2x"></i>
      </div>

      {/* <Grid container direction="row" justify="center" alignItems="center">
        <InstagramIcon fontSize="large" />
        <FacebookIcon fontSize="large" />
        <YouTubeIcon fontSize="large" />
        <DuoIcon fontSize="large" />
      </Grid> */}
    </div>
  );
}

export default Media;
