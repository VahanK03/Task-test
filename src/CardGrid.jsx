import React from 'react';
import Card from './Card';
import './CardGrid.css';

function CardGrid({ cards, onRemoveCard }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.id} card={card} onRemove={() => onRemoveCard(card.id)} />
      ))}
    </div>
  );
}

export default CardGrid;
