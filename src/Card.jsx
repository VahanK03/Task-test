import React, { useState } from 'react';
import './Card.css';

function Card({ card, onRemove }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div 
      className={`card ${isClicked ? 'clicked' : ''}`} 
      onClick={handleClick}
      onMouseOver={(e) => e.target.style.opacity = 0.5}
      onMouseOut={(e) => e.target.style.opacity = 1}
    >
      <p className="card-title">{card.title}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default Card;
