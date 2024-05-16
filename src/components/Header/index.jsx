import Navigation from "../Navigation/Navigation";
import LogoRed from "../../assets/images/LogoRed.svg";


function Header() {
  return (
<div className="header">
<img className="header-logo"  src={LogoRed} alt="Logo du site" /> 
    <Navigation/>
    </div>
  );
}

export default Header