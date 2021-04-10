import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ServicesList from "./servicesList";
import VideoPortfolio from "./videoPortfolio";
import PhotoPortfolio from "./photoPortfolio";
// import App from "../App";

export default function Routes() {
  return (
    <Router>
      <div>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/servicesList">Services</Link>
          </li>
          <li>
            <Link to="/video">Video</Link>
          </li>
          <li>
            <Link to="/photo">Photo</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          {/* <Route exact path="/">
            <App />
          </Route> */}
          <Route path="/services">
            <ServicesList />
          </Route>
          <Route path="/video">
            <VideoPortfolio />
          </Route>
          <Route path="/photo">
            <PhotoPortfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
