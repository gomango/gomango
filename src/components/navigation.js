import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import MoreServices from "./moreServices";
import MorePortfolio from "./morePortfolio";
import Home from "./home";
import Contact from "./contact";
import WeddingPhoto from "./wedding-photo";

import Routes from "./routes";

function Navigation() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img className="img-fluid" src="/logo-sm.png" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link mx-5" to="/">
              HOME
            </NavLink>

            <NavLink className="nav-link mx-5 " to="/portfolio">
              VIDEOS
            </NavLink>
            <NavLink className="nav-link mx-5" to="/wedding-photo">
              PHOTOS
            </NavLink>
            <NavLink className="nav-link mx-5 " to="/services">
              SERVICES
            </NavLink>

            <NavLink className="nav-link mx-5" to="/contactus">
              CONTACT US
            </NavLink>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={MorePortfolio} />
        <Route exact path="/services" component={MoreServices} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/wedding-photo" component={WeddingPhoto} />
      </Switch>
    </Router>
  );
}

export default Navigation;
