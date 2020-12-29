import React from 'react';
import ReactPlayer from 'react-player';

function About() {
  return (
    <div className="container">
      <h1 class="display-4">Our Work</h1>
      <div className="row align-items-center">
        <div className="video col-sm-12">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=PwPQILQyAPg&feature=youtu.be"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
