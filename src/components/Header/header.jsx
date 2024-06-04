import { NavLink } from "react-router-dom";
import React from "react";
import LogoRed from "../../assets/images/LogoRed.svg";
import "../Header/Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={LogoRed} alt="Logo du site" />
      <nav className="header_nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={(header_nav__link) =>
                header_nav__link.isActive ? "header_nav__link-active" : ""
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(header_nav__link) =>
                header_nav__link.isActive ? "header_nav__link-active" : ""
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
