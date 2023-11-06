import ImgbackgroudTop from '../../components/HOMESite.png';
import ButtonMaster from '../../components/buttonMaster';
import ImgLogoW from '../../components/imgLogo/Logo-white.png';
import './Header.css';

import MapComponent from '../../components/MapComponent.js';
import FooterContain from '../../components/footerContain.js'

import addressIcon from "../../components/icons/icons8-address-50.png";
import emailIcon from "../../components/icons/icons8-email-50.png";
import facebookIcon from "../../components/icons/icons8-facebook-50.png";
import instagramIcon from "../../components/icons/icons8-instagram-50.png";
import phoneIcon from "../../components/icons/icons8-phone-50.png";
import Arron from "../../components/icons/icons8-forward-50.png";


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
            <div className='container CampPerguntas'>
                <h2>PERGUNTAS FREQUENTES</h2>
                <div className='CampoIntePerguntas'>
                    <div class="areaPergunta" id="topPergunta">
                        <p>Como devo preparar minhas sobrancelhas antes de uma sessão de design?</p>
                        <a className='ButtonArron' data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <img src={Arron} alt="Arron"/>
                        </a>
                    </div>
                    <div class="collapse collapseResposta" id="collapseExample">
                        <p>
                        Antes de uma sessão de design de sobrancelhas, é melhor não aparar ou depilar as sobrancelhas por pelo menos duas semanas para que o profissional possa avaliar o crescimento natural. Limpe e hidrate a pele ao redor das sobrancelhas para evitar irritações.
                        </p>
                    </div>
                    <div class="areaPergunta">
                        <p>Quanto tempo dura o efeito do design de sobrancelhas?</p>
                        <a className='ButtonArron' data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                            <img src={Arron} alt="Arron"/>
                        </a>
                    </div>
                    <div class="collapse collapseResposta" id="collapseExample1">
                        <p>
                            Antes de uma sessão de design de sobrancelhas, é melhor não aparar ou depilar as sobrancelhas por pelo menos duas semanas para que o profissional possa avaliar o crescimento natural. Limpe e hidrate a pele ao redor das sobrancelhas para evitar irritações.
                        </p>
                    </div>
                    <div class="areaPergunta">
                        <p>Quais são os benefícios de fazer uma manicure regularmente?</p>
                        <a className='ButtonArron' data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                            <img src={Arron} alt="Arron"/>
                        </a>
                    </div>
                    <div class="collapse collapseResposta" id="collapseExample2">
                        <p>
                            Antes de uma sessão de design de sobrancelhas, é melhor não aparar ou depilar as sobrancelhas por pelo menos duas semanas para que o profissional possa avaliar o crescimento natural. Limpe e hidrate a pele ao redor das sobrancelhas para evitar irritações.
                        </p>
                    </div>
                    <div class="areaPergunta">
                        <p>A depilação a laser é permanente? Quantas sessões são necessárias para ver resultados duradouros?</p>
                        <a className='ButtonArron' data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                            <img src={Arron} alt="Arron"/>
                        </a>
                    </div>
                    <div class="collapse collapseResposta" id="collapseExample3">
                        <p>
                            Antes de uma sessão de design de sobrancelhas, é melhor não aparar ou depilar as sobrancelhas por pelo menos duas semanas para que o profissional possa avaliar o crescimento natural. Limpe e hidrate a pele ao redor das sobrancelhas para evitar irritações.
                        </p>
                    </div>
                    <div class="areaPergunta">
                        <p>Existem cuidados especiais que devo seguir após uma manicure?</p>
                        <a className='ButtonArron' data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                            <img src={Arron} alt="Arron"/>
                        </a>
                    </div>
                    <div class="collapse collapseResposta" id="collapseExample4">
                        <p>
                            Antes de uma sessão de design de sobrancelhas, é melhor não aparar ou depilar as sobrancelhas por pelo menos duas semanas para que o profissional possa avaliar o crescimento natural. Limpe e hidrate a pele ao redor das sobrancelhas para evitar irritações.
                        </p>
                    </div>
                </div>
            </div>
            <div style={styles.footer}>
                <FooterContain/>
            </div>
            
        </div>
    );
  }
  const styles = {
    footer: {
        position: 'relative',
        top: '300px',
    }
}
  export default Header;