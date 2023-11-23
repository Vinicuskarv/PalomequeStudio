import Card from './cardOverflow';
import './Overflow.css';
import ButtonMaster from '../components/buttonMaster';

import iconArrow from './icons/icons8-arrow-30.png';

import img1 from '../components/img/ServiceDepilacaoCera.jpg';
import img2 from '../components/img/ServiceDepilacaoLaser.jpg';
import img3 from '../components/img/ServiceManicure.jpg';
import img4 from '../components/img/ServiceMassagem.jpg';
import img5 from '../components/img/ServiceSobrancelhas.jpg';

const App = () => {

  return (
    <>
      <div className='txtContainerCardsHome'>
        <h3>Principais Atividades</h3>
        <h5>________________</h5>
      </div>
      
      <div className='row ContainerCardsHome'>
        <div class="card col-6 modelCard">
          <img src={img1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">______</h5>
            <p class="card-text">Depilação a Cera</p>
          </div>
        </div>
        <div class="card col-6 modelCard modelCardCentro">
          <img src={img2} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">______</h5>
            <p class="card-text">Depilação a Laser</p>
          </div>
        </div>
        <div class="card col-6 modelCard">
          <img src={img3} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">______</h5>
            <p class="card-text">Manicure e Pedicure</p>
          </div>
        </div>
      </div>
    </>
  );
};


export default App;
