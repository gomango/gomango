import "./App.css";

import Footer from "./components/footer";
import Nav from "./components/nav";

import ServicesList from "./components/servicesList";
import VideoPortfolio from "./components/videoPortfolio";
import Home from "./components/home";
import Contact from "./components/contact";
import PhotoPortfolio from "./components/photoPortfolio";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Navigation /> */}
        <Nav />
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/video" component={VideoPortfolio} />
        <Route exact path="/photo" component={PhotoPortfolio} />
        <Route exact path="/services" component={ServicesList} />
        <Route exact path="/contactus" component={Contact} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
