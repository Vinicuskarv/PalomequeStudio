import React, { useRef } from 'react';
import Card from './cardOverflow';
import './Overflow.css';
import iconArrow from './icons/icons8-arrow-30.png';

const App = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: 300,
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
        <img src={iconArrow}  alt="icons icon Arrow" />
      </button>
    </div>
  );
};

export default App;
