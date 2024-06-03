import React, { useState } from "react";
import Carousel from "../../components/Carrousel/Carrousel";
import list from "../../data.json";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Collapse from "../../components/Collapse/collapse";
import Tags from "../../components/Tags/tags";
import Rating from "../../components/Rate/rate";
import "../House/logement.scss";

const Logementdetails = () => {
  const { houseId } = useParams();
  const [data] = useState(list);

  const logement = data.find((logement) => logement.id === houseId);

  if (!logement) {
    return <Navigate to="/error" />;
  }
  //creation de la liste des equipements
  const equipementList = logement.equipments.map((equipement, index) => (
    <li key={index}>{equipement}</li>
  ));
  return (
    <div className="logement-container">
      <Carousel images={logement.pictures} />
      <div className="infos-container">
        <div className="container1">
          <div className="title-location">
            <h2>{logement.title}</h2>
            <p> {logement.location}</p>
          </div>
          <div className="tags-container">
            <Tags tags={logement.tags} />
          </div>
        </div>
        <div className="container2">
          <div className="Host-container">
            <h3>
              {logement.host.name.split(" ")[0]}
              <br />
              {logement.host.name.split(" ")[1]}
            </h3>
            <img
              src={logement.host.picture}
              alt={"image de " + logement.host.name}
            />
          </div>
          <div className="rating-container">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="Collapse-container">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={<ul> {equipementList}</ul>} />
      </div>
    </div>
  );
};

export default Logementdetails;
