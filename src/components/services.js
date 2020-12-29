import React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

function Services() {
  return (
    <div className="container mt-5">
      <h1 class="display-4">Services</h1>

      <p>
        Vestibulum vitae tortor massa. Sed accumsan sapien eget consectetur
        lobortis. Fusce pulvinar, sapien non viverra iaculis, nulla tortor
        interdum mauris, quis accumsan dui ligula nec dolor. Suspendisse
        faucibus eu erat a pellentesque. Donec sit amet finibus lacus, quis
        facilisis neque. Aliquam id ipsum in nisi venenatis consectetur.{' '}
      </p>
      <button className="btn btn-outline-dark">
        <Link className="nav-link mr-3 text-info" to="/services">
          Services
        </Link>
      </button>
    </div>
  );
}

export default Services;
