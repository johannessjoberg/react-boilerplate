/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-tabs */
const { drawNewCard, newDecks, results } = require('./routes');
const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8000,
  router: {
    stripTrailingSlash: true
  }
});

// Add the route
server.route({
	method: 'GET',
	path: '/',
	handler: (request, reply) => reply('Nothing to see here'),
});

server.route(newDecks);
server.route(drawNewCard);
server.route(results);

// Start the server
server.start((err) => {
	if (err) {
		throw err;
	}

	console.log('Server running at:', server.info.uri);
});
