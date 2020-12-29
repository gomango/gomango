import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MoreServices from './moreServices';
import MorePortfolio from './morePortfolio';
import App from '../App';

export default function Routes() {
  return (
    <Router>
      <div>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          {/* <Route exact path="/">
            <App />
          </Route> */}
          <Route path="/services">
            <MoreServices />
          </Route>
          <Route path="/portfolio">
            <MorePortfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
