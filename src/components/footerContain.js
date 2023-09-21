import './footerContain.css';
import ImgLogoWhite from "../components/imgLogo/Logo-white.png";
import Facebook from "../components/icons/icons8-facebook.png";
import Phone from "../components/icons/icons8-phone.png";

import { Link } from 'react-router-dom';

const footerContain = () => {
    return (
      <div className="containe-fluid footerContain">
        <Link to="/"><img className="LogoIcon" src={ImgLogoWhite} alt="Logo White"/></Link>
        <h4>Studio Palomeque</h4>
        <div className="campoIcons">
          <img className="Icon" src={Facebook} alt="Facebook"/>
          <img className="Icon" src={Phone} alt="Phone"/>

        </div>
      </div>
    );
  };
  
  export default footerContain;