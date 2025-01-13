import React, { useState } from 'react';
import './App.css';
import CardGrid from './CardGrid';

function App() {
  const [cards, setCards] = useState([{ id: 1, title: 'Carddahfjdhgdklfsjghfgkljdshgkljhslks' }, { id: 2, title: 'Card 2' }]);

  const addCard = () => {
    const newId = cards.length + 1;
    setCards([...cards, { id: newId, title: `Card ${newId}` }]);
  };

  const removeCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="App">
      <button onClick={addCard}>Add Card</button>
      <CardGrid cards={cards} onRemoveCard={removeCard} />
    </div>
  );
}

export default App;
