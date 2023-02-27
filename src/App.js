import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import Fashion from "./components/Pages/Fashion";
import Music from "./components/Pages/Music";
import Promo from "./components/Pages/Promo";
import Weddings from "./components/Pages/Weddings";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/promo" component={Promo} />
        <Route exact path="/weddings" component={Weddings} />
        <Route exact path="/fashion" component={Fashion} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
