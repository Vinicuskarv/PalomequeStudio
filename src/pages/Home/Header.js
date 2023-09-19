import ImgbackgroudTop from '../../components/HOMESite.png';
import Overflow from '../../components/Overflow';
import './Header.css';
import ButtonMaster from '../../components/buttonMaster';
import iconsCheck from '../../components/icons/icons8-instagram-check-mark-48.png';
import MulherJanela from '../../components/img/mulher-janela.jpg'
function Header() {
    return (
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
              <div className='container-fluid campoCarroselCards'>
                <h2>Studio Palomeque</h2>
                <h6>Principais Atividades</h6>
                <Overflow/>
              </div>
              <div>
                <img src={MulherJanela} className='ImgcontainerMulher' alt="icons Check"/>
              </div>
              <div className='campofrase'>
                <h3>"A única maneira de fazer um ótimo trabalho é<br/> amar o que você faz."</h3>
                <p>- Steve Jobs</p>
                <ButtonMaster
                  value= "Meu trabalho"
                />
               
              </div>
            </div>
            
           
        </div>
    );
  }
  const styles = {
    icon: {
        width: '20px',
        marginRight: '4px',
    }
}
export default Header;