import React from "react";
import { useComponentLogic } from "./hooks";
import Button from "../Button";

const ContactForm = (props) => {
  const { title, text } = props;
  const { sendEmail } = useComponentLogic();
  return (
    <div className="form-container">
      <form onSubmit={sendEmail}>
        <p className="form-title">{title}</p>
        <p className="subcategory-title">{text}</p>
        <div className="info-row">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
          ></input>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
          ></input>
        </div>
        <textarea
          rows="8"
          type="text"
          className="form-control"
          name="message"
          placeholder="Write your message here"
        ></textarea>
        <div className="form-button">
          <Button title="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
