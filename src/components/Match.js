import React, { useEffect, useState } from 'react';
import Player from './Player';

const Match = () => {
  const [scoreToWin, setScoreToWin] = useState();
  const [players, setPlayers] = useState([]);
  const [matchId, setMatchId] = useState('');
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const updateCurrentPlayer = () => {
    if (activePlayerIndex + 1 > players.length - 1) {
      setActivePlayerIndex(0);
    } else {
      setActivePlayerIndex(activePlayerIndex + 1);
    }
  };

  const updateMatch = (score) => {
    updateCurrentPlayer();
    if (score >= scoreToWin) {
      setGameOver(true);
    }
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/game')
      .then((response) => response.json())
      .then((data) => {
        setScoreToWin(8 || data.scoreToWin);
        setMatchId(data.matchId);
        setPlayers(data.players);
      });
  }, []);

  return (
    <>
      <div className="match-id">Match ID: {matchId}</div>
      <h1 className="game-name">DICE GAME</h1>
      {gameOver && <h2>Game over, winner is: </h2>}
      <div className="score-to-win">Score to win: {scoreToWin}</div>
      <div className="grid">
        {players.map((player, index) => {
          return (
            <Player
              key={player.id}
              player={player}
              isActive={index === activePlayerIndex && !gameOver}
              updateMatch={updateMatch}
            ></Player>
          );
        })}
      </div>
    </>
  );
};

export default Match;
