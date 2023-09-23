import React from 'react';

const Player = ({ player }) => {
  return (
    <div>
      <h4>Name: {player.name}</h4>
      <button>Roll the dice</button>
    </div>
  );
};
export default Player;
