import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import ServicesList from "./servicesList";
import VideoPortfolio from "./videoPortfolio";
import Home from "./home";
import Contact from "./contact";
import PhotoPortfolio from "./photoPortfolio";

// import Routes from "./routes";

function Navigation() {
  return (
     <div className='container'>
    <Router>
   
    <p>test1</p>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img className="img-fluid" src="./logo/header-logo.png" />
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
            <NavLink className="nav-link mx-5 " to="/video">
              VIDEOS
            </NavLink>
            <NavLink className="nav-link mx-5" to="/photo">
              PHOTOS
            </NavLink>
            <NavLink className="nav-link mx-5 " to="/services">
              SERVICES
            </NavLink>
            <NavLink className="nav-link mx-5" to="/contactus">
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/video" component={VideoPortfolio} />
        <Route exact path="/photo" component={PhotoPortfolio} />
        <Route exact path="/services" component={ServicesList} />
        <Route exact path="/contactus" component={Contact} />
      </Switch>
  
    </Router>
      </div>
  );
}

export default Navigation;
