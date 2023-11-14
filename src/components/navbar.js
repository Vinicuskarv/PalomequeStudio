import "./navbar.css";
import ImgLogoWhite from "../components/imgLogo/Logo-white.png"
import { Link } from 'react-router-dom';

function NavBar({home, sobre, contactos}) {
    return (
      <div className="container-fluid" id="CampoNavbar">
            <Link to="/"><img className="LogoIcon" src={ImgLogoWhite} alt="Logo White"/></Link>
            <ul className="ULNavbar">
                <li>
                  <Link to="/">{home}</Link> 
                </li>
                <li>
                  <Link to="/About">{sobre}</Link> 
                </li>
                <li>
                  <Link to="/Contactos">{contactos}</Link> 
                </li>
                <li>
                  <Link to="/Contact">Marcação</Link> 
                </li>
            </ul>
      </div>
    );
  }
  
  export default NavBar;