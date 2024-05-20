import React from 'react';
import '../Cards/HousingCard.scss'


const HousingCard = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt= "la maison" className="card-img" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default HousingCard;