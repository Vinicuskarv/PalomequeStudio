import ImgbackgroudTop from '../../components/HOMESite.png';
import ButtonMaster from '../../components/buttonMaster';
import './Header.css';
import Icon1 from '../../components/icons/ethics.png';
import Icon2 from '../../components/icons/quality.png';
import Icon3 from '../../components/icons/icons8-handshake-64.png';


function Header() {
    return (
      <div>
        <img src={ImgbackgroudTop}  className='ImgbackgroudTop' alt="Image the background" />
        <div className='CampoTop'>
            <h1>STUDIO<br/>PALOMEQUE</h1>
            <p>Studio de estetica</p>
            <ButtonMaster
                  value= "Marcação"
                  nameclass= "buttonNormal"
                />
        </div>
        <div className='ContainerCondulta'>
            <div>
                <img src={Icon3} alt="Icons" />
                <h5>CONFIANÇA</h5>
                <p>
                  A confiança é o alicerce das relações humanas, construída com honestidade e mantida com lealdade.
                </p>
            </div>
            <div>
                <img src={Icon2} alt="Icons" />
                <h5>CREDIBILIDADE</h5>
                <p>
                  A credibilidade é um ativo valioso, conquistado com integridade e consistência ao longo do tempo
                </p>
            </div>
            <div>
                <img src={Icon1} alt="Icons" />
                <h5>ÉTICA</h5>
                <p>
                  A ética é o farol que guia nossas decisões, orientando-nos na busca pelo que é correto e justo.
                </p>
            </div>
        </div>
        <div className='CampoSection'>
            <h2>Descubra o Seu Refúgio<br/>de Beleza e Bem-Estar</h2>
        </div>
      </div>
    );
  }
  export default Header;