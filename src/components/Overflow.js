import React, { useRef } from 'react';
import Card from './cardOverflow';
import './Overflow.css';
import iconBackTo from './icons/icons8-back-to-64.png'

const App = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -300, // Ajuste de acordo com a largura de um card
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: 300, // Ajuste de acordo com a largura de um card
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="card-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        <img src={iconBackTo}  alt="icons Back To" />
      </button>
      <div className="cards" ref={containerRef}>
        <Card title="Card 1" content="Conteúdo do Card 1" />
        <Card title="Card 2" content="Conteúdo do Card 2" />
        <Card title="Card 3" content="Conteúdo do Card 3" />
        <Card title="Card 3" content="Conteúdo do Card 3" />
        <Card title="Card 3" content="Conteúdo do Card 3" />
        <Card title="Card 3" content="Conteúdo do Card 3" />
        <Card title="Card 3" content="Conteúdo do Card 3" />
        <Card title="Card 3" content="Conteúdo do Card 3" />
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
};

export default App;
