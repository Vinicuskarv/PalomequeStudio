import iconArrow from '../components/icons/icons8-arrow-30.png';

import React, { useRef, useEffect } from 'react';
import './card.css';

function Card({ Img, titulo}) {
    const minhaDivRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
          const minhaDiv = minhaDivRef.current;
          
          if (minhaDiv && !minhaDiv.contains(event.target)) {
            minhaDiv.classList.add('card');
            minhaDiv.classList.remove('centralizado');
          }
        };
    
        document.body.addEventListener('click', handleClickOutside);
    
        return () => {
          document.body.removeEventListener('click', handleClickOutside);
        };
      }, []);
    
      const AbrirDivInfo = () => {
        const minhaDiv = minhaDivRef.current;
        if (minhaDiv) {
            minhaDiv.classList.remove('card');
          minhaDiv.classList.add('centralizado');
        }
      };
    
      const handleIconCloseClick = (event) => {
        const minhaDiv = minhaDivRef.current;
        if (minhaDiv) {
          minhaDiv.classList.remove('centralizado');
        }
        event.stopPropagation();
      };
  return (
    <div className="card col-sm-6"  ref={minhaDivRef} onClick={AbrirDivInfo}>
        <img src={Img} className="card-img-top" alt="card-img"/>
        <img src={iconArrow}  className='iconArrow' alt="icon Arrow"/>
        <div className="card-body">
        <p className="card-title">{titulo}</p>
        </div>  
    </div>
  );
}

export default Card;