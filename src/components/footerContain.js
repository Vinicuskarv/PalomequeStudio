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
          <Link to="/" className="LinkIcon"><img className="Icon" src={instagramIcon} alt="Instagram Icon"/></Link>
          <Link to="https://www.google.com/maps/place/41%C2%B022'31.8%22N+8%C2%B045'34.6%22W/@41.3755,-8.7621749,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.3755!4d-8.7596?entry=ttu" className="LinkIcon"><img className="Icon" src={addressIcon} alt="Address Icon"/></Link>
        </div>
      </div>
    );
  };
  
  export default footerContain;