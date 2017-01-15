import update from 'react-addons-update';

const addCardsToDecks = (decks, cards1, cards2) =>
  update(decks, {
    deck1: {
      cards: {$set: cards1}
    },
    deck2: {
      cards: {$set: cards2}
    }
  });

const updateDecks = (decks, deckName, updatedCard) => {
  const cardIndex = decks[deckName].cards.findIndex(c => c.id === updatedCard.id);
  return update(decks, {
    [deckName]: {
      cards: {
        [cardIndex]: {$set: updatedCard}
      }
    }
  });
};

export {
  addCardsToDecks,
  updateDecks
};
