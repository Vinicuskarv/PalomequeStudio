import React, { useRef } from 'react';
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
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <div className='row'>
            <div className='col-6'>
              <img src={img1} alt="..."/>
            </div>
            <div className='col-6 infoCarousel'>
            <h5>Depilação a Cera</h5>
            <p>
              Experimente a suavidade duradoura da depilação com cera em nosso espaço dedicado à sua beleza.
            </p>
            <ButtonMaster
                  value= "Reserve seu horário"
                  nameclass= "buttonWhite"
                  linck= "https://zappysoftware.com/m/studiopalomeque#find"
                />
            </div>
          </div>
          
        </div>
        <div class="carousel-item" data-bs-interval="2000">
        <div className='row'>
            <div className='col-6'>
              <img src={img2} alt="..."/>
            </div>
            <div className='col-6 infoCarousel'>
              <h5>Depilação a Laser</h5>
              <p>
              Despeça-se dos pelos indesejados com nossos serviços de depilação a laser. 
              </p>
              <ButtonMaster
                  value= "Reserve seu horário"
                  nameclass= "buttonWhite"
                  linck= "https://zappysoftware.com/m/studiopalomeque#find"
                />
            </div>
          </div>

        </div>
        <div class="carousel-item">
        <div className='row'>
            <div className='col-6'>
              <img src={img3} alt="..."/>
            </div>
            <div className='col-6 infoCarousel'>
              <h5>Manicure</h5>
            <p>
              Oferecemos serviços personalizados que vão além do cuidado básico, transformando suas unhas em expressões autênticas de estilo.
              </p>
              <ButtonMaster
                  value= "Reserve seu horário"
                  nameclass= "buttonWhite"
                  linck= "https://zappysoftware.com/m/studiopalomeque#find"
                />
            </div>
          </div>

        </div>
      </div>
      <button class="carousel-control-prev btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default App;
