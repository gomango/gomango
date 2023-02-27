import React from "react";

const HeaderSection = (props) => {
  const { title, text } = props;
  return (
    <div className="about-us-container">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default HeaderSection;
