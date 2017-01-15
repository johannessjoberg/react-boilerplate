const fetch = require('isomorphic-fetch');
const Promise = require('bluebird');

function fetchDeck() {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC')
    .then(result => result.json());
}

function fetchDecks() {
  return Promise.join(fetchDeck(), fetchDeck(), (deck1, deck2) => ({deck1, deck2}));
}

function draw(deckId) {
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(result => result.json());
}

module.exports = {
  draw,
  fetchDecks
};
