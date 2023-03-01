import React from "react";
import wedding from "../Weddings/wedding.mp4";
import ContactForm from "../../ContactForm";
import Photo from "./Photo";
import Video from "./Video";
import { useComponentLogic } from "./hooks";

const title = "Let's make it happen";
const text =
  "Tell us about you two! How did you meet and fall in love? What do you like about our films? Any other infromation you would like to share.";

const Weddings = () => {
  const { handlePhoto, handleVideo, isPhoto } = useComponentLogic();
  return (
    <div>
      <div className="hero">
        <video className="videoTag" autoPlay loop muted>
          <source src={wedding} type="video/mp4" muted={true} loop={true} />
        </video>
      </div>

      <div className="grand-container">
        <div className="about-us-container">
          <h1>Let's tell your story together</h1>
          <p>
            The team at GoManGo.Studio pride ourselves on delivering the highest
            quality of moments when it comes to wedding videography! We have the
            unique experience of being able to transport you back in time to
            your wedding day in a humorous and unique way. We specialize in
            creating the most entertaining videos that will make the whole
            family laugh and cherish those special moments. With us, your
            wedding will be one to remember in a whole new light!
          </p>
        </div>
      </div>
      <div className="wedding-contact-form">
        <ContactForm title={title} text={text} />
      </div>

      <div className=" video-photo-buttons-container">
        <button className="styled-video-button" onClick={handlePhoto}>
          <i class="fal fa-photo-video fa-2x"></i>
          View Photos
        </button>
        <button className="styled-video-button" onClick={handleVideo}>
          <i class="fas fa-photo-video fa-2x"></i>
          View Videos
        </button>
      </div>

      {isPhoto ? <Photo /> : <Video />}
    </div>
  );
};

export default Weddings;
