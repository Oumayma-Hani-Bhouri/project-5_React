import React, { useState } from "react";
import HousingCard from "./HousingCard";
import "../Cards/Cards.scss";
import list from "../../data";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const [data] = useState(list);

  return (
    <div className="cards-container">
      {data.map((logement) => (
        <NavLink key={logement.id} to={`./logement/${logement.id}`}>
          <HousingCard title={logement.title} cover={logement.cover} />
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
