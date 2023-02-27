import React from "react";
import ContactForm from "../../ContactForm";

const Contact = () => {
  return (
    <div>
      <header>
        <img
          className="img-fluid background-image"
          alt="contact-us"
          src="/background.jpg"
        />
      </header>
      <div className="container">
        <h1>GET IN TOUCH</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
