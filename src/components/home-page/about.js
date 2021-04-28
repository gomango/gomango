import React from "react";

function About() {
  return (
    <div className="container about my-3">
      <p className="lead">
        Hello there! We are GoManGo Studio. Your go-to professional events team
        that is working on the other side of the lens.
      </p>
      <div className="row align-items-center justify-content-center">
        <div className="col-1">
          <img src="/header.png" className="img-fluid" />
        </div>
        <div className="col-10 lead">
          <p>
            For business owners, we are offering structured and unique
            promotional video production and photo services, including aerial,
            real estate, and any other event coverage.
          </p>
          <p>
            For private clients, we are here to make your most important day
            ever (proposal, wedding, birthday, or any promo for you) very
            special and stress-free. We are able to provide photographers,
            videographers, make-up artists, DJ's and a whole group of
            professionals for any event you might have. 
          </p>
        </div>
      </div>
      <p className="lead">
        At GoManGo Studio we do not only make unique content but we also build a
        long-term relationship with our clients.
      </p>
    </div>
  );
}

export default About;
