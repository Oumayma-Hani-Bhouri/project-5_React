import React from "react";
import "../Cards/HousingCard.scss";

const HousingCard = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt="la maison" className="card-img" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default HousingCard;
