import React from "react";

function CategoryTitle(props) {
  return (
    <div className="container mt-5">
      <h1 class="display-4 my-5">{props.title}</h1>
    </div>
  );
}

export default CategoryTitle;
