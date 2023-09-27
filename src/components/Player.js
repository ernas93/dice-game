import React, { useState, useEffect } from 'react';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Player = ({ player, isActive, updateMatch }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (score > 0) {
      updateMatch(score, player);
    }
  }, [score]);

  const onRoll = () => {
    setScore(score + randomIntFromInterval(1, 6));
  };

  return (
    <div className="grid-item">
      <h4>Name: {player.name}</h4>
      <img className="player-img" src={player.imageUrl} />
      <p>Score: {score}</p>
      <button onClick={onRoll} disabled={!isActive} className="dice-button">
        Roll the dice
      </button>
    </div>
  );
};
export default Player;
