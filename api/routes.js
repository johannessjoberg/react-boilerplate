const { draw, fetchDecks } = require('./httpUtils');

const newDecks = {
  method: 'GET',
  path: '/new_decks',
  handler: (request, reply) => reply(fetchDecks()),
};

const drawNewCard = {
  method: 'GET',
  path: '/draw/{deckId}',
  handler: (request, reply) => {
    const params = request.params || {};
    if (params.deckId) {
      reply(draw(params.deckId));
    } else {
      reply({
        statusCode: 404,
        error: 'Not Found',
        message: 'Cannot find the requested page'
      });
    }
  }
};

const results = {
  method: 'GET',
  path: '/results',
  handler: (request, reply) =>
    reply(
      JSON.stringify([{name: 'Jo', turns: 10}, {name: 'Joe', turns: 9}, {name: 'Joel', turns: 8}])
    ),
};

module.exports = {
  drawNewCard,
  newDecks,
  results
};
