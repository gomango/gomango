import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import MoreServices from './moreServices';
import MorePortfolio from './morePortfolio';
import Home from './home';
import Contact from './contact';

import Routes from './routes';

function Nav() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
          <NavLink className="nav-link mr-3 " to="/">
            Home
          </NavLink>

          <NavLink className="nav-link mr-3 " to="/portfolio">
            Portfolio
          </NavLink>
          <a className="navbar-brand" href="#">
            <img className="img-fluid" src="/logo-1.jpg" />
          </a>
          <NavLink className="nav-link mr-3 " to="/services">
            Services
          </NavLink>
          <NavLink className="nav-link mr-3 " to="/contactus">
            Contact
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={MorePortfolio} />
          <Route exact path="/services" component={MoreServices} />
          <Route exact path="/contactus" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;
