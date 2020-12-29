import React from 'react';

function Portfolio() {
  return (
    <div className="container mt-5">
      <h1 class="display-4">Portfolio</h1>
      <div class="card-deck">
        <div class="card shadow-sm p-3 mb-5 bg-white rounded">
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Video</h5>
            {/* <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p> */}
            <button className="btn btn-outline-dark">See more</button>
          </div>
        </div>
        <div class="card shadow-sm p-3 mb-5 bg-white rounded">
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Photo</h5>
            {/* <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
