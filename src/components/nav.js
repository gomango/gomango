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

function Nav() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img className="img-fluid" src="/logo-sm.png" />
          </a>
          <NavLink className="nav-link mr-3 " to="/">
            HOME
          </NavLink>

          <NavLink className="nav-link mr-3 " to="/portfolio">
            PORTFOLIO
          </NavLink>

          <NavLink className="nav-link mr-3 " to="/services">
            SERVICES
          </NavLink>
          <NavLink className="nav-link mr-3 " to="/contactus">
            CONTACT
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={MorePortfolio} />
          <Route exact path="/services" component={MoreServices} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/wedding-photo" component={WeddingPhoto} />
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;
