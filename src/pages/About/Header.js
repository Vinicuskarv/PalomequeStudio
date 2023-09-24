import ImgbackgroudTop from '../../components/HOMESite.png';
import ButtonMaster from '../../components/buttonMaster';
import './Header.css';

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
                <h5>CONFIANÇA</h5>
            </div>
            <div>
                <h5>CREDIBILIDADE</h5>
            </div>
            <div>
                <h5>ÉTICA</h5>
            </div>
        </div>
        <div className='CampoSection'>
            <h2>Descubra o Seu Refúgio<br/>de Beleza e Bem-Estar</h2>
        </div>
      </div>
    );
  }
  export default Header;