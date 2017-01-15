import React from 'react';
import StyledButton from './StyledButton';

const Header = ({playShuffle, resetScore, turns}) => (
  <header className="flex-none order-1 w-100">
    <div className="w-50 fl">
      <StyledButton onClick={playShuffle} value="Play/Shuffle" />
      <StyledButton onClick={resetScore} value="Reset High Score" />
    </div>
    <div className="w-50 fl tr f5 pv3 ph5 dark-green">
      Current Turns: {turns}
    </div>
  </header>
);

Header.propTypes = {
  playShuffle: React.PropTypes.func.isRequired,
  resetScore: React.PropTypes.func.isRequired,
  turns: React.PropTypes.number.isRequired,
};

export default Header;
