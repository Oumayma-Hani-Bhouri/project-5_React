import React, { useState } from "react";
import Carousel from "../../components/Carrousel/Carrousel";
import list from "../../data.json";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Collapse from "../../components/Collapse/collapse";
import "../House/logement.scss";

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
      <div className="container1">
        <div className="title-location">
          <h2>{logement.title}</h2>
          <p> {logement.location}</p>
        </div>
        <div className="Host-container">
          <h3>{logement.host.name} </h3>
          <img
            src={logement.host.picture}
            alt={"image de " + logement.host.name}
          />
        </div>
      </div>
      <div Collapse-container>
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
};

export default LogementCarousel;
