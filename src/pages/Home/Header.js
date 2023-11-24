import ImgbackgroudTop from '../../components/HOMESite.png';
import Overflow from '../../components/Overflow';
import './Header.css';
import ButtonMaster from '../../components/buttonMaster';
import FooterContain from '../../components/footerContain';
import iconsCheck from '../../components/icons/icons8-instagram-check-mark-48.png';
import MulherJanela from '../../components/img/mulher-janela.jpg';
import ImgLogoBlue from "../../components/imgLogo/Logo-Blue.png"
function Header() {
    return (
      <>
        <div className='containeImgBack'>
            <img src={ImgbackgroudTop}  className='ImgbackgroudTop' alt="Image the background" />
            <div className='container-fluid ContainerInfoTop'>
              <div>
                <h1>STUDIO<br/>PALOMEQUE</h1>
                <p>Studio de estetica</p>
              </div>
              <div className='campoDirection'>
                <p>Marcar seu horário é simples, e estamos entusiasmados para tornar sua experiência inesquecível.</p>
                <ButtonMaster
                  value= "Reserve seu horário"
                  nameclass= "buttonNormal"
                  linck= "https://zappysoftware.com/m/studiopalomeque#find"
                />
              </div>
            </div>        
            <div className='containerSecudary'>
              <ul className='campoInfoEsperienc'>
                <li><img src={iconsCheck} style={styles.icon} alt="icons Check"/>10+Anos de experiências</li>
                <li><img src={iconsCheck} style={styles.icon} alt="icons Check"/>Equipe profissional</li>
                <li><img src={iconsCheck} style={styles.icon} alt="icons Check"/>7+Certificados</li>
                <li><img src={iconsCheck} style={styles.icon} alt="icons Check"/>20+Areas de atuação</li>
              </ul>
              <div className='container campoCarroselCards'>
                <Overflow/>
              </div>
              <div>
                <img src={MulherJanela} className='ImgcontainerMulher' alt="icons Check"/>
                <div className='containerMulherInfo'>
                  <img src={ImgLogoBlue} className='LogoIconfooter'  alt="icons Check"/>
                  <br/>
                  <h3>Descubra mais sobre o<br/>que fazemos.</h3><br/>
                  <ButtonMaster
                  value= "Meu trabalho"
                  nameclass= "buttonOutline"
                  linck= "/About"
                  />
                </div>
              </div>
              <div className='campofrase'>
                <h3>"A única maneira de fazer um ótimo trabalho é<br/> amar o que você faz."</h3>
                <p>- Steve Jobs</p>
                <ButtonMaster
                  value= "Meu trabalho"
                  nameclass= "buttonNormal"
                  linck= "/About"
                  />
              </div>
            </div>
            <FooterContain/>
        </div>
      </>
    );
  }
  const styles = {
    icon: {
        width: '20px',
        marginRight: '4px',
    }
}
export default Header;