import React from "react";
import "../Banner/Banner.scss";

const Banner = ({ imageSrc, title, opacity }) => {
  return (
    <div className="banner">
      <img
        src={imageSrc}
        alt="Banner"
        className="banner-image"
        style={{ opacity: opacity }}
      />
      <h1 className="banner-title">{title}</h1>
    </div>
  );
};

export default Banner;
