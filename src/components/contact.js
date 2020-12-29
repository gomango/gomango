import React from 'react';

function ContactUs() {
  return (
    <div className="container">
      <h1 className="my-5">Contact Us</h1>
      <div className="row align-items-center ">
        <div className="col">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1534131707746-25d604851a1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
        </div>
        <div className="col">
          <p>Contact Information</p>
          <p>Email: hello@gomango.studio</p>
          <p>Ph: 123-345-7890</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
