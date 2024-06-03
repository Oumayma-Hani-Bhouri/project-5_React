import React from "react";
import "../Rate/rate.scss";
import RedStar from "../../assets/images/RedStar.png";
import GreyStar from "../../assets/images/GreyStar.png";

const Rating = ({ rating }) => {
  const totalStars = 5;
  const fullStar = (
    <img src={RedStar} alt="etoile rouge " className="RedStar" />
  );
  const emptyStar = (
    <img src={GreyStar} alt="etoile grise" className="GreyStar" />
  );

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className="star">
          {index < rating ? fullStar : emptyStar}
        </span>
      ))}
    </div>
  );
};
export default Rating;
