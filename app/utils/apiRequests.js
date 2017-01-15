import fetch from 'isomorphic-fetch';

const getNewDecks = () =>
  fetch('/api/new_decks/');

const openNewCard = deckId =>
  fetch(`/api/draw/${deckId}`);

const shuffleBothDecks = deckIds =>
  fetch(`/api/shuffle/${deckIds}`);

const getResults = () =>
  fetch('/api/results/');

const persistResult = (player, turns) =>
  fetch(
    '/api/add_result', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({player, turns})
    })
    .then(response => response);

export {
  getNewDecks,
  getResults,
  openNewCard,
  shuffleBothDecks,
  persistResult
};
