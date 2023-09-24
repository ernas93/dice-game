import React, { useState } from 'react';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Player = ({ player, isActive, updateCurrentPlayer }) => {
  const [score, setScore] = useState(0);

  const onRoll = () => {
    setScore(score + randomIntFromInterval(1, 6));
    updateCurrentPlayer();
  };

  return (
    <div>
      <h4>Name: {player.name}</h4>
      <img src={player.imageUrl} />
      <p>Score: {score}</p>
      <button onClick={onRoll} disabled={!isActive}>
        Roll the dice
      </button>
    </div>
  );
};
export default Player;
