import "./App.css";

import Media from "./components/media";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Routes from "./components/routes";
import Home from "./components/home";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navigation />
      {/* <Nav /> */}
      {/*
      <Header />
      <About />
      <Portfolio />
      <Services />
     */}
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
