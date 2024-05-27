import LogoWhite from "../../assets/images/LogoWhite.svg";
import "../Footer/Footer.scss";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="footer-content">
      <img src={LogoWhite} alt="Logo Kasa blanc" />
      <p>© {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
