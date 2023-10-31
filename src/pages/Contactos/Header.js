import ImgbackgroudTop from '../../components/HOMESite.png';
import ButtonMaster from '../../components/buttonMaster';
import ImgLogoW from '../../components/imgLogo/Logo-white.png';
import './Header.css';

import MapComponent from '../../components/MapComponent.js';

import addressIcon from "../../components/icons/icons8-address-50.png";
import emailIcon from "../../components/icons/icons8-email-50.png";
import facebookIcon from "../../components/icons/icons8-facebook-50.png";
import instagramIcon from "../../components/icons/icons8-instagram-50.png";
import phoneIcon from "../../components/icons/icons8-phone-50.png";

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='containeBackImg'>
            <img src={ImgbackgroudTop}  className='ImgTopbackgroud' alt="Image the background" />
            <div className='container-fluid ContainerTopInfo'>
                <div>
                    <h1>STUDIO<br/>PALOMEQUE</h1>
                    <p>Studio de estetica</p>
                </div>
                <div className='campoDirection'>
                <ButtonMaster
                    value= "Marcação"
                    nameclass= "buttonNormal"
                />
                </div>
            </div> 
            <div className='ContainerContacto'>
                <div className='TabContacto'></div>
                <div className='CampoContacto'>
                    <h2>CONTACTOS</h2>
                    <div  className='row CampoContactoInfo'>
                        <div className='col-6'>
                            <Link to="/" className='IconLink'><img className="Icon" src={phoneIcon} alt="Phone Icon"/></Link>
                            <label>+351 914 543 091</label>
                        </div>
                        <div className='col-6'>
                            <Link to="/" className='IconLink'><img className="Icon" src={facebookIcon} alt="Facebook Icon"/></Link>
                            <label>@studiopalomeque</label>
                        </div>
                        <div className='col-6'>
                            <Link to="/" className='IconLink'><img className="Icon" src={emailIcon} alt="Email Icon"/></Link>
                            <label>studiopalomeque@gmai.coml</label>
                        </div>
                        <div className='col-6'>
                            <Link to="/" className='IconLink'><img className="Icon" src={instagramIcon} alt="Instagram Icon"/></Link>
                            <label>@studiopalomeque</label>
                        </div>
                        <div className='col-12'>
                            <Link to="/" className='IconLink'><img className="Icon" src={addressIcon} alt="Address Icon"/></Link>
                            <label>R. do Século 54 Loja, 4490-582 Póvoa de Varzim</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row ContaineMap'>
                <div className='col-8'>
                    <MapComponent/>
                </div>
                <div className='col-4 CampMapInfo'>
                    <img src={ImgLogoW} className='LogoImgMap' alt="Img Logo W"/>
  
                    <h5>Descubra mais sobre o que fazemos.</h5>
                    <ButtonMaster
                        value= "Localização"
                        nameclass= "buttonOutline"
                    />
                </div>
            </div>
        </div>
    );
  }
  export default Header;