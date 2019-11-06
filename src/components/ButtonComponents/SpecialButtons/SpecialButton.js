import React from 'react';

const SpecialButton = props => {
  return (
    <button onClick={() => props.clearEverything()}>{props.special}</button>
  );
};

export default SpecialButton;
