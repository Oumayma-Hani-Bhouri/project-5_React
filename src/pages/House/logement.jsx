import React, { useState } from "react";
import Carousel from "../../components/Carrousel/Carrousel";
import list from "../../data.json";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const LogementCarousel = () => {
  const { houseId } = useParams();
  const [data] = useState(list);

  const logement = data.find((logement) => logement.id === houseId);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <Carousel images={logement.pictures} />
      <div className="title-location">
        <h2>{logement.title}</h2>
        <p>Location: {logement.location}</p>
      </div>

      <p>{logement.description}</p>
    </div>
  );
};

export default LogementCarousel;
