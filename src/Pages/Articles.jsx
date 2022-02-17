import React from "react";

function Articles({ title, img, description }) {
  return (
    <div className="article">
      <h1>{title}</h1>
      <img src={img} />
      <p>{description}</p>
    </div>
  );
}

export default Articles;
