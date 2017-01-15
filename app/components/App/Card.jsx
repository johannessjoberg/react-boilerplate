import React from 'react';

const Card = ({cardData, clickCard}) => {
  const click = () => clickCard(cardData);
  return (
    <div className="pointer app-card bg-light-gray br2" onClick={click}>
      {!cardData.displayed &&
        <span className="gray">{cardData.id}</span>
      }
      {cardData.displayed &&
        <img
          alt={`can't find ${cardData.data.image}`}
          className="app-card"
          src={cardData.data.image}
        />
      }
    </div>
  );
};

Card.propTypes = {
  cardData: React.PropTypes.object.isRequired,
  clickCard: React.PropTypes.func.isRequired
};

export default Card;
