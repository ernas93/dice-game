import React, { useEffect, useState } from 'react';
import Player from './Player';

const Match = () => {
  const [scoreToWin, setScoreToWin] = useState();
  const [players, setPlayers] = useState([]);
  const [matchId, setMatchId] = useState('');
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState();

  const updateCurrentPlayer = () => {
    if (activePlayerIndex + 1 > players.length - 1) {
      setActivePlayerIndex(0);
    } else {
      setActivePlayerIndex(activePlayerIndex + 1);
    }
  };

  useEffect(() => {
    if (winner) {
      fetch('http://localhost:8000/api/game', {
        method: 'POST',
        // in winner.id, winner is the same as player
        body: JSON.stringify({ matchId: matchId, winnerId: winner.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }, [winner]);

  const updateMatch = (score, player) => {
    if (score >= scoreToWin) {
      setGameOver(true);
      // set the winning player object as the state value of "winner"
      // this allows the above useEffect() to access the object(in this case player)
      // of only the winning player
      setWinner(player);
    } else {
      updateCurrentPlayer();
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
      {gameOver && <h2>Game over! The winner is: {winner.name}</h2>}
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
