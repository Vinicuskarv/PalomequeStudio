import React, { useRef } from 'react';
import Card from './cardOverflow';
import './Overflow.css';
import iconArrow from './icons/icons8-arrow-30.png';

import img1 from '../components/img/ServiceDepilacaoCera.jpg';
import img2 from '../components/img/ServiceDepilacaoLaser.jpg';
import img3 from '../components/img/ServiceManicure.jpg';
import img4 from '../components/img/ServiceMassagem.jpg';
import img5 from '../components/img/ServiceSobrancelhas.jpg';

const App = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -250,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: 250,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="card-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        <img src={iconArrow}  alt="icons icon Arrow" />
      </button>
      <div className="cards" ref={containerRef}>
        <Card title="Massagem Mãos e Pês" content="Conteúdo do Card 1" Img={img4} />
        <Card title="Laser" content="Conteúdo do Card 2" Img={img2} />
        <Card title="Manicure" content="Reparação verniz em gel, unhas em gel manicure, Gel na tips" Img={img3} />
        <Card title="Cera" content="Conteúdo do Card 4" Img={img1} />
        <Card title="Sobrancelhas" content="Conteúdo do Card 5" Img={img5} />

      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        <img src={iconArrow}  alt="icons icon Arrow" />
      </button>
    </div>
  );
};

export default App;
