import ImgbackgroudTop from '../../components/HOMESite.png';
import ButtonMaster from '../../components/buttonMaster';
import './Header.css';

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
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
  }
  export default Header;