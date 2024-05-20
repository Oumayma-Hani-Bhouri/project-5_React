import LogoWhite from  "../../assets/images/LogoWhite.svg";
import "../Footer/Footer.scss";


function Footer() {
    return (
     
      <footer className="footer-content">
        <img  src={LogoWhite} alt="Logo Kasa blanc" />  
        <p>
         
         © 2020 Kasa. All rights reserved 
        </p>
    
      </footer>
    )
  }
  
  export default Footer