import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card.jsx', () => {
  it('should include img element if (displayed == true)', () => {
    const image = 'http://deckofcardsapi.com/static/img/KD.png';
    const
      cardData = {
        displayed: true,
        data: {image}
      },
      clickCard = () => false;

    const card = shallow(<Card {...{cardData, clickCard}} />);
    expect(card.children().some('img')).toEqual(true);
  });
});
