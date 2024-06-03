import React from "react";
import "../Rate/rate.scss";
import RedStar from "../../assets/images/RedStar.svg";
import GreyStar from "../../assets/images/GreyStar.svg";

const Rating = ({ rating }) => {
  const totalStars = 5;
  const fullStar = <img src={RedStar} alt="etoile rouge" />;
  const emptyStar = <img src={GreyStar} alt="etoile grise" />;

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
