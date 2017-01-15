/* eslint-disable max-len */
import React from 'react';

const StyledButton = ({onClick, value}) => (
  <input
    type="button"
    className="f5 dim br3 ph3 pv2 ma2 dib outline-0 bg-transparent input-reset ba bw1 dark-green b--dark-green pointer"
    onClick={onClick}
    value={value}
  />
);

StyledButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired
};

export default StyledButton;
