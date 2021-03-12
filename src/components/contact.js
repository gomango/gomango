import React from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_pf5d25q",
        e.target,
        "user_HZm5zsACgTwgia3rB5dzQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="container">
      <h1 className="my-5">GET IN TOUCH</h1>
      <div className="row">
        <div className="col-sm-6">
          <form onSubmit={sendEmail}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                ></input>
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                ></input>
              </div>
            </div>

            <textarea
              type="text"
              className="form-control mt-3"
              name="message"
              placeholder="Write your nessage here"
            ></textarea>
            <input
              type="submit"
              className="btn btn-outline-dark mt-3"
              value="Send Message"
            ></input>
          </form>
        </div>
        <div className="col-sm-6 mb-4">
          <p>Email: gomango.studio@gmail.com</p>
          <p>Phone: 123-345-7890</p>
          <div className="row contact-icons ">
            <a
              href="https://www.instagram.com/gomango.studio/"
              target="_blank"
              rel="noreferrer"
              className="mx-3"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>

            <a
              href="https://vimeo.com/user129958158"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-vimeo fa-2x"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
