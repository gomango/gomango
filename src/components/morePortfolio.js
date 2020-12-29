import React from 'react';
import ReactPlayer from 'react-player';

function MorePortfolio() {
  return (
    <div className="container">
      <h1>Weddings</h1>
      <div className="row">
        <div className="col">
          <ReactPlayer url="https://youtu.be/_ABCsBEbUhc" width="100%" />
        </div>
        <div className="col">
          <ReactPlayer url="https://youtu.be/998zIqtQNss" width="100%" />
        </div>
      </div>

      <h1>Promo</h1>
      <div className="row">
        <div className="col">
          <ReactPlayer url="https://youtu.be/-ikNmKsvuTI" />
        </div>
      </div>

      <h1>Events</h1>
      <div className="row">
        <div className="col">
          <ReactPlayer url="https://www.youtube.com/watch?v=ALWEzt5jGkU" />
        </div>
      </div>
    </div>
  );
}

export default MorePortfolio;
