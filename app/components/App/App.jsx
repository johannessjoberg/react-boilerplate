import React from 'react';
import { getNewDecks, getResults, openNewCard } from '../../utils/apiRequests';
import { createCards } from '../../utils/cardUtils';
import { addCardsToDecks, updateDecks } from '../../utils/updateUtils';
import Header from './Header';
import Decks from './Decks';
import Results from './Results';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      highScore: [],
      playedDeck: '',
      turns: 0
    };
  }

  componentDidMount() {
    getResults()
      .then(response => response.json())
      .then(highScore => this.setState({highScore}));
  }

  render() {
    const {decks, highScore, playedDeck, turns} = this.state;

    const playShuffle = () =>
      getNewDecks()
        .then(response => response.json())
        .then(decksData => addCardsToDecks(decksData, createCards(), createCards()))
        .then(decksData => this.setState({decks: decksData}));

    const resetScore = () => this.setState({turns: 0});

    const clickCard = (cardData, deckName) => {
      // for each deck - one card at the time
      if (playedDeck === deckName)
        return;
      // count the turns
      const secondClick = (playedDeck !== '');
      if (secondClick) {
        this.setState({
          turns: this.state.turns + 1
        });
      }
      // view card data + state update
      const updatedCard = Object.assign({}, cardData);
      if (cardData.data) {
        updatedCard.displayed = true;
        this.setState({
          decks: Object.assign({}, decks, updateDecks(decks, deckName, updatedCard)),
          playedDeck: secondClick ? '' : deckName
        });
      } else {
        openNewCard(decks[deckName].deck_id)
          .then(response => response.json())
          .then(data => {
            const {image, code} = data.cards[0];
            return ({image, code});
          })
          .then(data => {
            updatedCard.data = data;
            updatedCard.displayed = true;
            this.setState({
              decks: Object.assign({}, decks, updateDecks(decks, deckName, updatedCard)),
              playedDeck: secondClick ? '' : deckName
            });
          });
      }
    };

    return (
      <div className="w-100 flex flex-column min-vh-100">
        <Header {...{playShuffle, resetScore, turns}} />

        <main className="w-100 order-2">
        {decks && <Decks clickCard={clickCard} decksData={decks} />}
        </main>
        <article className="w-100 order-2 tc pv2">
          <Results highScore={highScore} />
        </article>
      </div>
    );
  }
}

export default App;
