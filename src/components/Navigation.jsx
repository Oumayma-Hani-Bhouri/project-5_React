import React from 'react';
import {NavLink} from "react-router-dom"

const Navigation=()=> {
return (
<nav className="header_nav">
<ul>
 <NavLink to="/">
    <li> Accueil </li>
    </NavLink>   
    <NavLink to="/about">
        <li> A Propos
        </li>
    </NavLink>


</ul>
</nav>);};

export default Navigation;


