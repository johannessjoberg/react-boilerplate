import React from 'react';
import Card from './Card';

const Deck = ({clickCard, deckData}) => (
  <div className="tc w-100 bg-washed-green">
    {deckData.cards.map((c, i) => (
      <div key={i} className="fl w-third pa2">
        <Card cardData={c} clickCard={clickCard} />
      </div>
    ))}
  </div>
);

Deck.propTypes = {
  clickCard: React.PropTypes.func.isRequired,
  deckData: React.PropTypes.object.isRequired
};

export default Deck;
