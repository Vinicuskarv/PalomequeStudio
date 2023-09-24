import './footerContain.css';
import ImgLogoWhite from "../components/imgLogo/Logo-white.png";
import addressIcon from "../components/icons/icons8-address-50.png";
import emailIcon from "../components/icons/icons8-email-50.png";
import facebookIcon from "../components/icons/icons8-facebook-50.png";
import instagramIcon from "../components/icons/icons8-instagram-50.png";
import phoneIcon from "../components/icons/icons8-phone-50.png";



import { Link } from 'react-router-dom';

const footerContain = () => {
    return (
      <div className="containe-fluid footerContain">
        <Link to="/"><img className="LogoIconfooter" src={ImgLogoWhite} alt="Logo White"/></Link>
        <h4>Studio Palomeque</h4>
        <div className="campoIcons">
          <Link to="/" className="LinkIcon"><img className="Icon" src={facebookIcon} alt="Facebook Icon"/></Link>
          <Link to="/" className="LinkIcon"><img className="Icon" src={phoneIcon} alt="Phone Icon"/></Link>
          <Link to="/" className="LinkIcon"><img className="Icon" src={emailIcon} alt="Email Icon"/></Link>
          <Link to="/" className="LinkIcon"><img className="Icon" src={instagramIcon} alt="Instagram Icon"/></Link>
          <Link to="/" className="LinkIcon"><img className="Icon" src={addressIcon} alt="Address Icon"/></Link>
        </div>
      </div>
    );
  };
  
  export default footerContain;