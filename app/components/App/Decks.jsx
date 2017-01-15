import React from 'react';
import Deck from './Deck';

const Decks = ({clickCard, decksData}) => {
  const
    clickCardDeck1 = cardData => clickCard(cardData, 'deck1'),
    clickCardDeck2 = cardData => clickCard(cardData, 'deck2');
  return (
    <div className="db w-100">
      <div className="fl w-50">
        <Deck clickCard={clickCardDeck1} deckData={decksData.deck1} />
      </div>
      <div className="fl w-50">
        <Deck clickCard={clickCardDeck2} deckData={decksData.deck2} />
      </div>
    </div>
  );
};

Decks.propTypes = {
  clickCard: React.PropTypes.func.isRequired,
  decksData: React.PropTypes.object.isRequired
};

export default Decks;
