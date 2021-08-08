import React from "react";
import SectionTitle from "./sectionTitle";
import emailjs from "emailjs-com";

function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_10lf8mj",
        "template_amnzk57",
        e.target,
        "user_xxd8peTqtEGe05vd1LtJu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <div className="container">
      <SectionTitle title={"GET IN TOUCH"} />
      <div className="row my-5">
        <div className="col-sm-6 mb-5">
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
              className="form-control my-5"
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
          <strong>Email: </strong>
          gomango.studio@gmail.com
          <div className="row contact-icons  mt-3 ">
            <a
              href="https://www.instagram.com/anatoly_kuteliya/"
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
