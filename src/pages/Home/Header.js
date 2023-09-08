import ImgbackgroudTop from '../../components/HOMESite.png';
import './Header.css';

function Header() {
    return (
      <div>
        <div className='campoImgbackgroudTop'>
            <img src={ImgbackgroudTop} className='ImgbackgroudTop' alt="Image the background" />
        </div>
        
      </div>
    );
  }
  
  export default Header;