/* eslint-disable no-bitwise */
/* eslint-disable space-infix-ops */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
const genCardId = () => '-'.repeat(8).replace(/-/g, () => (Math.random()*16|0).toString(16).toUpperCase());

const newCard = () => ({
  id: genCardId()
});

const createCards = () => {
  const cards = [];
  let i = 0;
  while (i++ < 9)
    cards.push(newCard());
  return cards;
};

export {
  createCards
};
