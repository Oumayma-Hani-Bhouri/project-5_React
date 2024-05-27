import React, { useState } from "react";
import HousingCard from "./HousingCard";
import "../Cards/Cards.scss";
import list from "../../data";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const [data] = useState(list);

  return (
    <div className="cards-container">
      {data.map((item) => (
        <NavLink key={item.id} to={`./house/${item.id}`}>
          <HousingCard title={item.title} cover={item.cover} />
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
