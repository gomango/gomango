import React from 'react';

import Media from './media';
import Footer from './footer';
import Header from './header';
import Nav from './nav';
import About from './about';
import Services from './services';
import Portfolio from './portfolio';
import Routes from './routes';

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Services />
      {/* <Footer />
      <Media /> */}
    </div>
  );
}

export default Home;
