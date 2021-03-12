import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="container mt-5">
      <h1 class="display-4 my-5">PORTFOLIO</h1>
      <div className="row align-items-center">
        <div className="col">
          <img className="img-fluid" src="/video-img.png" />
        </div>
        <div className="col">
          <p className="lead">
            Sed turpis purus, ultrices a maximus sit amet, viverra vel sem.
            Nulla ultricies elit sit amet risus cursus facilisis. Curabitur
            iaculis pulvinar varius. Pellentesque efficitur pellentesque
            ultricies.
          </p>
        </div>
      </div>
      <div className="row justify-content-end">
        <Link to="/portfolio" className="link-pages">
          <h2 id="button-more">SEE MORE WEDDING VIDEOS</h2>
        </Link>
      </div>
      <div className="row align-items-center my-5">
        <div className="col">
          <p className="lead">
            We will do everything to cathc every moment of your special day.
          </p>
        </div>
        <div className="col">
          <img className="img-fluid" src="/photo-img.png" />
        </div>
      </div>
      <div className="row justify-content-start">
        <Link to="/wedding-photo" className="link-pages">
          <h2 id="button-more">SEE MORE WEDDING PHOTOS</h2>
        </Link>
      </div>
      {/* <div class="card-deck">
        <div class="card shadow-sm p-3 mb-5 bg-white rounded">
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Video</h5>

            <button className="btn btn-outline-dark">See more</button>
          </div>
        </div>
        <div class="card shadow-sm p-3 mb-5 bg-white rounded">
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Photo</h5>

            <p>Coming Soon</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Portfolio;
